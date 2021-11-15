import * as React from 'react'
import { footer } from './footer.module.scss'

const Footer = () => {
  return (
      <tr>
          <td>
            <footer className={footer}>
                <h3>FAEC - Ferramenta de Auxílio para Emergências Civis</h3>
                <br/>
                <p>Made by Rodrigo Kenzo e Kauan de Oliveira</p>
            </footer>
          </td>
      </tr>
  )
}

export default Footer