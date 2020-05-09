import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'


export class Home extends Component {
    render() {
        const { t } = this.props;
        return (
            <div>
                <h4>~{t('thankyou.label')}</h4>
                <ul class="list-group mt-5">
                    <li class="list-group-item"><strong>Library Use for :</strong></li>
                    <li class="list-group-item">i18next</li>
                    <li class="list-group-item">react-i18next</li>
                    <li class="list-group-item">i18next-http-backend</li>
                </ul>
                <br />
                <h5>
                    <p><strong>Run Following script: </strong></p>
                    npm install i18next-http-backend i18next react-i18next --save
                </h5>
            </div>
        )
    }
}

export default withTranslation()(Home) 
