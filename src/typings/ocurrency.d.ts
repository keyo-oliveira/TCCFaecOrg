/* eslint-disable no-unused-vars */

interface OcurrencyList {
  OcurrencyList: Ocurrency[];
}

interface Ocurrency {
  ocurrencyId: number;
  generationDate: string;
  longitude: string;
  latitude: string;
  answerDate: string;
  caller: partial<NaturalPerson>;
  answeredBy: partial<PublicAgent>;
  ocurrencyType: string;
  manyEnvolved: number;
  victims: number;
  details: string;
  city: string;
  state: string;
  address: string;
  number: string;
  neighborhood: string;
  complement: string;
  dangerous: string;
  urgency: string;
}
