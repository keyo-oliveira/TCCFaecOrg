import * as React from 'react'
import { 
  container, 
  component, 
  recentOcurrency1, 
  recentOcurrency2, 
  recentOcurrency3,
  hrStyle,
  recOcurrencyStyle,
  details
} from './recent.module.scss'

const Recent = () => {
  return (
    <tr>
      <td> 
        <div className={container}>
            <div className={component}>
              <h2>Ocorrências Recentes</h2>
                <ul>
                    <li>
                      <div className={recentOcurrency1}>
                        <div>
                            <h2>Ocorrência 1</h2>
                            <hr className={hrStyle}/>
                            <div className={recOcurrencyStyle}>
                              <p>Tipo de Ocorrência: Sequestro</p>
                              <p>Número de envolvidos: Desconhecido</p>
                              <p>Número de vítimas: 1</p>
                              <p>Cidade: São Paulo</p>
                              <p>Endereço: Avenida B, 216</p>
                              <p>Horário: 03:22:45</p>
                              <p className={details}>Mais Detalhes: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.</p>
                            </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className={recentOcurrency2}>
                        <div>
                          <h2>Ocorrência 2</h2>
                          <hr className={hrStyle}/>
                          <div className={recOcurrencyStyle}>
                              <p>Tipo de Ocorrência: Furto</p>
                              <p>Número de envolvidos: 2</p>
                              <p>Número de vítimas: 5</p>
                              <p>Cidade: Jundiaí</p>
                              <p>Endereço: Avenida C, 130</p>
                              <p>Horário: 14:03:18</p>
                              <p className={details}>Mais Detalhes: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.</p>
                            </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className={recentOcurrency3}>
                        <div>
                          <h2>Ocorrência 3</h2>
                          <hr className={hrStyle}/>
                          <div className={recOcurrencyStyle}>
                              <p>Tipo de Ocorrência: Estelionato</p>
                              <p>Número de envolvidos: Desconhecido</p>
                              <p>Número de vítimas: 1</p>
                              <p>Cidade: São Paulo</p>
                              <p>Endereço: Desconhecido</p>
                              <p>Horário: 16:23:43</p>
                              <p className={details}>Mais Detalhes: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.</p>
                            </div>
                        </div>
                      </div>
                    </li>
                </ul>
            </div>
        </div>
      </td>
    </tr>
  )
}

export default Recent