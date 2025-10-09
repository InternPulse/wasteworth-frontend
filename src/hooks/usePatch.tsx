import { useState } from "react";
import useStore from "../../store/store";

export function usePatch() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const { tokens } = useStore();

  const patch = async (url: string, body: any = { is_read: true }) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(url, {
        method: "PATCH",
        headers: {
          Authorization: tokens?.access ? `Bearer ${tokens.access}` : "",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
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

  return { data, error, loading, patch };
}
