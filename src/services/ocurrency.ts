import axios from "axios";

export const getOcurrencys: Promise<Ocurrency> | any = async () => {
  try {
    const { data } = await axios.get<Ocurrency>(
      "https://localhost:5001/api/Ocorrencias"
    );
    console.log(data);
    return data;
  } catch (error) {
    return console.log(error);
  }
};

//comment 2
