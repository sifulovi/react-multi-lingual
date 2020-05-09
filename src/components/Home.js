import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'


export class Home extends Component {
    render() {
        const { t } = this.props;
        return (
            <div>

                <h4>~{t('thankyou.label')}</h4>
            </div>
        )
    }
}

export default withTranslation()(Home) 
