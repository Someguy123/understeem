import React from 'react';
import LoginForm from 'app/components/modules/LoginForm';

class Login extends React.Component {
    render() {
        if (!process.env.BROWSER) { // don't render this page on the server
            return <div className="row">
                <div className="column">
                    Loading.. <br/>
                    <noscript>Dear TOR user: Please whitelist our site in NoScript, otherwise you cannot register or login!</noscript>
                </div>
            </div>;
        }
        return (
            <div className="Login row">
                <div className="column">
                    <LoginForm afterLoginRedirectToAccount />
                </div>
            </div>
        );
    }
}

module.exports = {
    path: 'login.html',
    component: Login
};
