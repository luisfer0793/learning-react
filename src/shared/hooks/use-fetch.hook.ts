import { useEffect, useState } from "react";

type Options = {
  endpoint: string;
};

export const useFetch = <T>(options: Options) => {
  const [data, setData] = useState<T | undefined>(undefined);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(options.endpoint, {
          signal: controller.signal,
        });

        if (!response.ok) {
          setIsError(true);
          throw new Error("Something went wrong!");
        }
        const data: T = await response.json();

        setData(data);
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          setIsError(true);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [options.endpoint]);

  return { data, isLoading, isError };
};
