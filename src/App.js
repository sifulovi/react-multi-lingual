import React, { Suspense } from 'react'
import Home from './components/Home'
import Welcome from './components/Welcome'
import LangSwitch from './components/LangSwitch'
import './i18n'

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>


      <div class="container mt-5">

        <div class="row">
          <div class="col-8">
            <Welcome />
            <Home />
          </div>
          <div class="col-4">
            <LangSwitch />
          </div>
        </div>
      </div>
    </Suspense>
  )
}

export default App