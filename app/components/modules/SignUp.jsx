import React from 'react';
import {connect} from 'react-redux';
import SvgImage from 'app/components/elements/SvgImage';

export default class SignUp extends React.Component {
    render() {

        return <div className="SignUp">
            <div className="row">
                <div className="column">
                    <h4>For your anonymity, we recommend using our partner service, <strong>AnonSteem</strong>:</h4>
                    <div className="text-center">
                        <h2><a target="_BLANK" href="http://anonsteemnqvfma2.onion/">anonsteemnqvfma2.onion</a></h2>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default connect(
    state => {
        return {
            // signup_bonus: state.offchain.get('signup_bonus'),
            // serverBusy: state.offchain.get('serverBusy')
        };
    }
)(SignUp);
