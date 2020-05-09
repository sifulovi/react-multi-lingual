import React, { Component } from 'react'
import { withTranslation } from 'react-i18next'

export class Welcome extends Component {
    render() {
        const { t } = this.props;
        return (
            <>
                <h3>{t('hello.label')}</h3>
            </>
        )
    }
}

export default withTranslation()(Welcome)
