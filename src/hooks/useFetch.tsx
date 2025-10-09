// hooks/useFetch.ts
import { useEffect, useState, useCallback } from "react";
import useStore from "../../store/store";

export function useFetch(url: string, options?: { auto?: boolean }) {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const { tokens } = useStore();

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

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
      setData(json);
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [url, tokens]);

  // Only auto-fetch when options.auto !== false
  useEffect(() => {
    if (options?.auto !== false) fetchData();
  }, [fetchData, options?.auto]);

  return { data, error, loading, refetch: fetchData };
}
