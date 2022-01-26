import * as React from "react"
import Header from '../components/Header'
import Footer from '../components/Footer'
import { backgroundColor, container } from "../styles/index.module.scss";
// markup
const IndexPage = ({ pageTitle }) => {
  return (
    <main>
      <div className={backgroundColor}>
        <Header 
          pageTitle='Site Home'
        />
        <title>{pageTitle}</title>
        <div className={container}>         
        </div>
          <Footer />
      </div>
    </main>
  )
}

export default IndexPage
