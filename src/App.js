import React from 'react'
import 'common/scss/reset.css'
import './App.css'

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from 'store/index.js'
import { Layout } from 'antd'

import ASide from 'components/aside'
import Header from 'components/header'
import Content from 'components/content'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout style={{ minHeight: '100vh' }}>
          <ASide />
          <Layout>
            <Header />
            <Content />
          </Layout>
        </Layout>
      </BrowserRouter>
    </Provider>
  )
}

export default App
