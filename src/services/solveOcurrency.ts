import axios from "axios";

export const solveOcurrency = async (
  ocurrencys: Ocurrency[],
  answeredBy: PublicAgent
) => {
  const ocurrency = ocurrencys[0];
  const response = await axios
    .put(`http://localhost:5000/api/Ocorrencias/${ocurrency.ocurrencyId}`, {
      ...ocurrency,
      answeredBy,
    })
    .catch((Error) => console.log(Error));

  console.log(response);
  return response;
};
