import React from 'react'

import Layout from './components/Layout'
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'

export default () => (
  <Layout 
    header={<Header />}
    footer={<Footer />} 
    mainContent={<MainContent />}
  />
)