/* eslint-disable no-unused-vars */

interface OcurrencyList {
  OcurrencyList: Ocurrency[]
}

interface Ocurrency {
  OcurrencyId: number;
  GenerationDate: string;
  Location: string;
  Coordinates: string;
  AnswerDate: string;
  Caller: NaturalPerson;
  AnsweredBy: PublicAgent;
  OcurrencyType: string,
  ManyEnvolved : number,
  Victims: number,
  Details: string,
  Dangerous: ["low", "medium", "high", "urgent"];
  Urgency: ["low", "medium", "high", "urgent"];
}
