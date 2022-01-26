// eslint-disable-next-line no-unused-vars
interface Receiver{
  receiver: PublicAgent
  route: string
}

interface PublicAgent {
  organizationID: number;
  Cnpj: number;
  Organization: string;
  ActArea: string;
  Name: string;
  Cep: string;
  Street: string;
  Number: string;
  District: string;
  DateCreation: string;
  UserName: string;
  Password: string;
}
