import axios from "axios";

export const solveOcurrency = async (
  ocurrency: Ocurrency,
  answeredBy: PublicAgent,
  answerDate: Date
) => {
  const data = {
    ocurrency,
    answeredBy,
    answerDate,
  };

  console.log(JSON.stringify(data));

  //   const response = await axios.put(
  //     `http://localhost:5000/api/OrgaosPublicos/api//Ocorrencias/${ocurrency.ocurrencyId}`,
  //     {}
  //   );
  //   console.log(response);
  //   return response;
};
