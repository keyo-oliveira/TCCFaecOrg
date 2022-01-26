import * as React from 'react'
import { FunctionComponent } from 'react'

const Caller: NaturalPerson {
  
}

const AnsweredBy = new Date()


enum Dangerous { low, medium, high, urgent };

enum Urgency { low, medium, high, urgent };

const Ocurrencies: FunctionComponent<Ocurrency> = (data) => {
  return (
      <div className='ocurrency__container'>
         <div className='Ocurrency Title'>
            <span >{data.OcurrencyId}</span>
            <span>{data.OcurrencyType}</span>
            <span>{data.ManyEnvolved}</span>
            <span>{data.Victims}</span>
            <span>{data.GenerationDate}</span>
            <span>{data.Location}</span>
            <span>{data.Coordinates}</span>
         </div>
         <span><p>{data.Details}</p></span>
     
     </div>
  )
}

export default Ocurrencies