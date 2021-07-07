import React, { useState } from "react"
import { render } from "react-dom"

import App from "./App"

import { IntlProvider } from "react-intl"
import AppContext from "./AppContext"
import { browserLocale, localeLanguage } from "./utils"
import en from "./i18n/translations/en.json"
import mn from "./i18n/translations/mn.json"

const translation = {
  [localeLanguage.En]: en,
  [localeLanguage.MN]: mn,
}
const defultLocale =
  browserLocale in translation ? browserLocale : localeLanguage.EN
const Root = () => {
  const [userLocale, setUserLocale] = useState(
    localStorage.userLocale === undefined
      ? defultLocale
      : localStorage.userLocale
  )

  const handleUserLocale = (value) => {
    window.localStorage.setItem("userLocale", value)
    setUserLocale(localStorage.userLocale)
  }

  return (
    <React.StrictMode>
      <IntlProvider
        locale={userLocale}
        key={userLocale}
        messages={translation[userLocale]}
      >
        <AppContext.Provider
          value={{ onChangeUserLocale: handleUserLocale, userLocale }}
        >
          <App />
        </AppContext.Provider>
      </IntlProvider>
    </React.StrictMode>
  )
}
render(<Root />, document.getElementById("root"))
