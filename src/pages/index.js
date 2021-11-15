import * as React from "react"
import Header from '../components/Header'
import Recent from '../components/Recent'
import Ocurrency from '../components/Ocurrency'
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
        <table className={container}>
          <Recent />
          <Ocurrency />
          <Footer />
        </table>
      </div>
    </main>
  )
}

export default IndexPage
