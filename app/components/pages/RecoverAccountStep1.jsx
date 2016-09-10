import React from 'react';
// import SvgImage from 'app/components/elements/SvgImage';
// import constants from 'app/redux/constants';



class RecoverAccountStep1 extends React.Component {


    render() {

        return (
            <div className="RestoreAccount SignUp">
                <div className="column large-6">
                    <h2>Stolen Account Recovery</h2>
                    <p>
                        We do not have an account registration system, and cannot directly
                        help you to recover your account.
                    </p>
                    <p>If you registered via AnonSteem, please contact <strong>anonsteem [at] someguy123 dot com</strong></p>
                    <p>If you registered via Steemit, you'll need to recover via their website: <a target="_BLANK" href="https://steemit.com/recover_account_step_1">https://steemit.com/recover_account_step_1</a></p>
                </div>
            </div>
        );
    }
}

module.exports = {
    path: 'recover_account_step_1',
    component: RecoverAccountStep1
};
