import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.email({ pattern: z.regexes.html5Email }),
  password: z.string().min(6),
});
