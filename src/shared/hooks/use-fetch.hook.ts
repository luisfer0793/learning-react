import { useCallback, useEffect, useRef, useState } from "react";

type Options = {
  endpoint: string;
};

export const useFetch = <T>(options: Options) => {
  const [data, setData] = useState<T | undefined>(undefined);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const abortControllerRef = useRef<AbortController | null>(null);

  const { endpoint } = options;

  const fetchData = useCallback(async () => {
    // This is to cancel previous fetch requests, if any.
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();

    try {
      setIsLoading(true);
      setIsError(false);

      const response = await fetch(endpoint, {
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok) {
        throw new Error("Http error! status: " + response.status);
      }

      const data: T = await response.json();
      setData(data);
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        return;
      }

      setIsError(true);
      setIsLoading(false);
      setData(undefined);
    }
  }, [endpoint]);

  useEffect(() => {
    fetchData();

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [fetchData]);

  return { data, isLoading, isError };
};
