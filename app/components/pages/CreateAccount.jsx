/* eslint react/prop-types: 0 */
import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import LoadingIndicator from 'app/components/elements/LoadingIndicator';
import Apis from 'shared/api_client/ApiInstances';
import { PrivateKey } from 'shared/ecc';
import user from 'app/redux/User';
import {validate_account_name} from 'app/utils/ChainValidation';
import SignUp from 'app/components/modules/SignUp';
import runTests from 'shared/ecc/test/BrowserTests';
import g from 'app/redux/GlobalReducer';
import GeneratedPasswordInput from 'app/components/elements/GeneratedPasswordInput';

const PASSWORD_MIN_LENGTH = 32;

class CreateAccount extends React.Component {

    static propTypes = {
        loginUser: React.PropTypes.func.isRequired,
        showSignUp: React.PropTypes.func.isRequired,
        serverBusy: React.PropTypes.bool
    };

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            password_valid: '',
            name_error: '',
            server_error: '',
            loading: false,
            cryptographyFailure: false
        };
    }

    componentDidMount() {
        const cryptoTestResult = runTests();
        if (cryptoTestResult !== undefined) {
            console.error('CreateAccount - cryptoTestResult: ', cryptoTestResult);
            this.setState({cryptographyFailure: true});
        }
    }

    render() {
        if (!process.env.BROWSER) { // don't render this page on the server
            return <div className="row">
                <div className="column">
                    Loading..
                </div>
            </div>;
        }

        const {
            name, password_valid, showPasswordString,
            name_error, server_error, loading, cryptographyFailure
        } = this.state;

        const {loggedIn, logout, offchainUser, serverBusy} = this.props;
        const submit_btn_disabled =
            loading ||
            !name ||
            !password_valid ||
            name_error;
        const submit_btn_class = 'button action' + (submit_btn_disabled ? ' disabled' : '');

        if (!offchainUser) {
            return <SignUp />;
        }

        return (
            <div className="CreateAccount row">
                <div className="column large-7 small-10">
                    <h2>Sign Up</h2>
                    <div className="CreateAccount__rules">
                        <hr />
                        <p>
                            The first rule of STEEM is: Do not lose your password.<br />
                            The second rule of STEEM is: Do <strong>not</strong> lose your password.<br />
                            The third rule of STEEM is: We cannot recover your password.<br />
                            The fourth rule: If you can remember the password, it&apos;s not secure.<br />
                            The fifth rule: Use only randomly-generated passwords.<br />
                            The sixth rule: Do not tell anyone your password.<br />
                            The seventh rule: Always back up your password.
                        </p>
                        <hr />
                    </div>
                    <p>For your anonymity, we recommend using our partner service, AnonSteem: <a target="_BLANK" href="http://anonsteemnqvfma2.onion/">anonsteemnqvfma2.onion</a></p>
                </div>
            </div>
        );
    }
}

module.exports = {
    path: 'create_account',
    component: connect(
        state => {
            return {
                loggedIn: !!state.user.get('current'),
                offchainUser: state.offchain.get('user'),
                serverBusy: state.offchain.get('serverBusy'),
                suggestedPassword: state.global.get('suggestedPassword'),
            }
        },
        dispatch => ({
            loginUser: (username, password) => dispatch(user.actions.usernamePasswordLogin({username, password, saveLogin: true})),
            showSignUp: () => dispatch(user.actions.showSignUp()),
            logout: e => {
                if (e) e.preventDefault();
                dispatch(user.actions.logout())
            }
        })
    )(CreateAccount)
};
