import { useState } from "react";
import useStore from "../../store/store";

export function useDelete() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const { tokens } = useStore();

  const deleteData = async (url: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: tokens?.access ? `Bearer ${tokens.access}` : "",
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        const errBody = await res.text();
        throw { status: res.status, message: errBody || res.statusText };
      }
      const json = await res.json();
      setData(json);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, deleteData };
}
