import axios from "axios";
import { useEffect, useState } from "react";
import type { Transaction } from "../types/index";
import useStore from "../../store/store";

const useWalletTransactions = () => {
  const BASE_URL: string = import.meta.env.VITE_BASE_URL1;

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const { tokens } = useStore();

  useEffect(() => {
    const fetchTransactions = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${BASE_URL}/api/v1/wallet/transactions/?page=1&page_size=20`,
          {
            headers: {
              Authorization: `Bearer ${tokens?.access}`,
            },
          }
        );
        setTransactions(response.data.results);
        console.log(response.data);
      } catch (error: any) {
        setError(error);
        console.error("Error Fetching Recent transactions", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTransactions();
  }, []);

  return { loading, error, transactions };
};

export default useWalletTransactions;
