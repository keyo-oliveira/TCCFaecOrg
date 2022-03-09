/* eslint-disable no-unused-vars */

interface OcurrencyList {
  OcurrencyList: Ocurrency[];
}

interface Ocurrency {
  OcurrencyId: number;
  GenerationDate: string;
  Longitude: string;
  Latitude: string;
  AnswerDate: string;
  Caller: partial<NaturalPerson>;
  AnsweredBy: partial<PublicAgent>;
  OcurrencyType: string;
  ManyEnvolved: number;
  Victims: number;
  Details: string;
  City: string;
  State: string;
  Address: string;
  Number: string;
  Neighborhood: string;
  Complement: string;
  Dangerous: string;
  Urgency: string;
}
