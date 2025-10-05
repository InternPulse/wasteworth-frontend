import { useEffect, useState } from "react";
import useStore from "../../store/store";

export function useFetch(url: string) {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const { tokens } = useStore();

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      try {
        const res = await fetch(url, {
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
        if (!ignore) setData(json);
      } catch (err: any) {
        if (!ignore) setError(err);
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    fetchData();

    return () => {
      ignore = true;
    };
  }, [url, tokens]);

  return { data, error, loading };
}
