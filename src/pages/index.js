import * as React from "react"
import Header from '../components/Header'
import Recent from '../components/Recent'
import { backgroundColor } from "../styles/index.module.scss";
// markup
const IndexPage = ({ pageTitle }) => {
  return (
    <main>
      <div className={backgroundColor}>
        <Header 
          pageTitle='Site Home'
        />
        <title>{pageTitle}</title>
        <Recent />
      </div>
    </main>
  )
}

export default IndexPage
