import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (URL: string) => {
  const [data, setData] = useState();
  console.log("fetching...");

  const fetch = async () => {
    try {
      const res = await axios.get(`${URL}`, {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("tokens") ?? "").access
          }`,
        },
      });
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetch();
  }, []);
  return { data };
};
