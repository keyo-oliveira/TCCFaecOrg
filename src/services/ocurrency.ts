import axios from "axios";

export const getOcurrencys: Promise<any> | any = async () => {
  await axios
    .get("https://localhost:5001/api/Ocorrencias")
    .then((response: any) => console.log(response))
    .catch((e: any) => console.log(e));
};

//comment
