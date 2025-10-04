import { useEffect, useState } from "react";

export function useFetch(url: string) {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    const fetchData = async () => {
      try {
        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("tokens") ?? "").access
            }`,
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
  }, [url]);

  return { data, error, loading };
}
