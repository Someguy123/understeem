import React from 'react';

class Support extends React.Component {
    render() {
        return (
            <div className="row">
                <div>
                    <p>UnderSteem cannot help you with the platform. Please contact Steemit below:</p>
                    <h2>Steemit Support</h2>
                    <p>
                        Please email your questions to <a href="mailto:support@steemit.com">support@steemit.com</a>.
                    </p>
                </div>
            </div>
        );
    }
}

module.exports = {
    path: 'support.html',
    component: Support
};
