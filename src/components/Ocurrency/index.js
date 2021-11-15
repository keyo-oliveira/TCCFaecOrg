import * as React from 'react'
import { container, hrStyle, tableStyle, borderStyle, ocurrencyStyle, spacing, title } from './ocurrency.module.scss'

const Ocurrencies = () => {
  return (
      <tr>
          <td>
            <div className={container}>
                <p className={title}>Ocorrências</p>
                <hr className={hrStyle} />
                <table className={tableStyle}>
                    <tr>
                        <td className={borderStyle}>
                            <div>
                                <h3>Ocorrência 1</h3>
                                <hr />
                                <table className={ocurrencyStyle}>
                                    <tr>
                                        <td className={spacing}>Tipo de Ocorrência: Assalto</td>
                                        <td className={spacing}>Número de Envolvidos: 2</td>
                                        <td className={spacing}>Houve Feridos: Não</td>
                                    </tr>
                                    <tr>
                                        <td className={spacing}>Cidade: São Paulo</td>
                                        <td className={spacing}>Endereço: Bairro C, nº 540</td>
                                        <td className={spacing}>Horário: 21:23:54</td>
                                    </tr>
                                </table>
                            </div>
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td className={borderStyle}>
                            <div>
                                <h3>Ocorrência 2</h3>
                                <hr />
                                <table className={ocurrencyStyle}>
                                    <tr>
                                        <td className={spacing}>Tipo de Ocorrência: Assalto</td>
                                        <td className={spacing}>Número de Envolvidos: 4</td>
                                        <td className={spacing}>Houve Feridos: Sim</td>
                                    </tr>
                                    <tr>
                                    <td className={spacing}>Cidade: São Bernardo do Campo</td>
                                        <td className={spacing}>Endereço: Bairro B, nº 1900</td>
                                        <td className={spacing}>Horário: 08:43:25</td>
                                    </tr>
                                </table>
                            </div>
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td className={borderStyle}>
                            <div>
                                <h3>Ocorrência 3</h3>
                                <hr />
                                <table className={ocurrencyStyle}>
                                    <tr>
                                        <td className={spacing}>Tipo de Ocorrência: Acidente de Trânsito</td>
                                        <td className={spacing}>Número de Envolvidos: 6</td>
                                        <td className={spacing}>Houve Feridos: Sim</td>
                                    </tr>
                                    <tr>
                                    <td className={spacing}>Cidade: São Paulo</td>
                                        <td className={spacing}>Endereço: Bairro A, nº 180</td>
                                        <td className={spacing}>Horário: 19:13:59</td>
                                    </tr>
                                </table>
                            </div>
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td className={borderStyle}>
                            <div>
                                <h3>Ocorrência 4</h3>
                                <hr />
                                <table className={ocurrencyStyle}>
                                    <tr>
                                        <td className={spacing}>Tipo de Ocorrência: Incêndio</td>
                                        <td className={spacing}>Motivo do incêndio: Desconhecido</td>
                                        <td className={spacing}>Houve Feridos: Não</td>
                                    </tr>
                                    <tr>
                                        <td className={spacing}>Cidade: Atibaia</td>
                                        <td className={spacing}>Endereço: Bairro B, nº 780</td>
                                        <td className={spacing}>Horário: 16:26:24</td>
                                    </tr>
                                </table>
                            </div>
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td className={borderStyle}>
                            <div>
                                <h3>Ocorrência 5</h3>
                                <hr />
                                <table className={ocurrencyStyle}>
                                    <tr>
                                        <td className={spacing}>Tipo de Ocorrência: Assalto</td>
                                        <td className={spacing}>Número de Envolvidos: 2</td>
                                        <td className={spacing}>Houve Feridos: Não</td>
                                    </tr>
                                    <tr>
                                        <td className={spacing}>Cidade: São Paulo</td>
                                        <td className={spacing}>Endereço: Bairro C, nº 540</td>
                                        <td className={spacing}>Horário: 21:23:54</td>
                                    </tr>
                                </table>
                            </div>
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td className={borderStyle}>
                            <div>
                                <h3>Ocorrência 6</h3>
                                <hr />
                                <table className={ocurrencyStyle}>
                                    <tr>
                                        <td className={spacing}>Tipo de Ocorrência: Assalto</td>
                                        <td className={spacing}>Número de Envolvidos: 4</td>
                                        <td className={spacing}>Houve Feridos: Sim</td>
                                    </tr>
                                    <tr>
                                    <td className={spacing}>Cidade: São Bernardo do Campo</td>
                                        <td className={spacing}>Endereço: Bairro B, nº 1900</td>
                                        <td className={spacing}>Horário: 08:43:25</td>
                                    </tr>
                                </table>
                            </div>
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td className={borderStyle}>
                            <div>
                                <h3>Ocorrência 7</h3>
                                <hr />
                                <table className={ocurrencyStyle}>
                                    <tr>
                                        <td className={spacing}>Tipo de Ocorrência: Acidente de Trânsito</td>
                                        <td className={spacing}>Número de Envolvidos: 6</td>
                                        <td className={spacing}>Houve Feridos: Sim</td>
                                    </tr>
                                    <tr>
                                    <td className={spacing}>Cidade: São Paulo</td>
                                        <td className={spacing}>Endereço: Bairro A, nº 180</td>
                                        <td className={spacing}>Horário: 19:13:59</td>
                                    </tr>
                                </table>
                            </div>
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td className={borderStyle}>
                            <div>
                                <h3>Ocorrência 8</h3>
                                <hr />
                                <table className={ocurrencyStyle}>
                                    <tr>
                                        <td className={spacing}>Tipo de Ocorrência: Incêndio</td>
                                        <td className={spacing}>Motivo do incêndio: Desconhecido</td>
                                        <td className={spacing}>Houve Feridos: Não</td>
                                    </tr>
                                    <tr>
                                        <td className={spacing}>Cidade: Atibaia</td>
                                        <td className={spacing}>Endereço: Bairro B, nº 780</td>
                                        <td className={spacing}>Horário: 16:26:24</td>
                                    </tr>
                                </table>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
          </td>
      </tr>
  )
}

export default Ocurrencies