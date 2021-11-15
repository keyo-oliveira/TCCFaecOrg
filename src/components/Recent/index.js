import * as React from 'react'
import { 
  container, 
  component, 
  recentOcurrency1, 
  recentOcurrency2, 
  recentOcurrency3
} from './recent.module.scss'

const Recent = () => {
  return (
    <div className={container}>
        <div className={component}>
          <h2>Ocorrências Recentes</h2>
            <ul>
                <li>
                  <div className={recentOcurrency1}>
                    Ocorrência 1
                  </div>
                </li>
                <li>
                  <div className={recentOcurrency2}>
                  Ocorrência 2
                  </div>
                </li>
                <li>
                  <div className={recentOcurrency3}>
                  Ocorrência 3
                  </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Recent