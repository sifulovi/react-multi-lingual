import React from 'react'
import { withTranslation } from 'react-i18next'

const LangSwitch = ({ i18n, t }) => {

    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value)
    }


    return (
        <div onChange={changeLanguage}>
            <p><strong>{t('language.switcher')}</strong></p>

            <div className="form-check form-check-inline">
                <input type="radio" value="en" name="language" defaultChecked />
                <label>English</label>
            </div>

            <div className="form-check form-check-inline">
                <input type="radio" value="bn" name="language" />
                <label>Bangla</label>
            </div>

        </div>
    )
}

export default withTranslation()(LangSwitch)
