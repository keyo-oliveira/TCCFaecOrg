/* eslint-disable no-unused-vars */

interface OcurrencyList {
  OcurrencyList: Ocurrency[];
}

interface Ocurrency {
  OcurrencyId: number;
  GenerationDate: string;
  Location: string;
  Longitude: string;
  Latitude: string;
  AnswerDate: string;
  Caller: NaturalPerson;
  AnsweredBy: PublicAgent;
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
  Dangerous: ["low", "medium", "high", "urgent"];
  Urgency: ["low", "medium", "high", "urgent"];
}
