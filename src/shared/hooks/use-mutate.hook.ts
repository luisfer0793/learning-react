import { useCallback, useState } from "react";

type Options = {
  endpoint: string;
  method: "POST" | "PUT" | "DELETE" | "PATCH";
};

export const useMutate = <R, B>(options: Options) => {
  const [data, setData] = useState<R | undefined>(undefined);
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);

  const mutate = useCallback(
    async (body: B) => {
      const controller = new AbortController();

      try {
        setIsPending(true);
        const response = await fetch(options.endpoint, {
          method: options.method,
          body: JSON.stringify(body),
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const data: R = await response.json();
        setData(data);
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          setIsError(true);
        }
      } finally {
        setIsPending(false);
      }
    },
    [options],
  );

  return { mutate, data, isPending, isError };
};
