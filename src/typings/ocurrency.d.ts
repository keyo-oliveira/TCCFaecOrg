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
  Caller: pick<NaturalPerson, Name>;
  AnsweredBy: pick<PublicAgent, Organization>;
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
  Dangerous: "low" | "medium" | "high" | "urgent";
  Urgency: "low" | "medium" | "high" | "urgent";
}
