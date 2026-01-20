import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "@/features/authentication/components/login-form/login-form.utils";

export const LoginForm = () => {
  const form = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmitHandler = form.handleSubmit((formData) => {
    console.log("onSubmitHandler", formData);
  });

  return (
    <form
      noValidate
      onSubmit={onSubmitHandler}
      className="flex flex-col gap-y-4"
    >
      <div className="flex flex-col gap-y-1">
        <input
          {...form.register("email")}
          type="email"
          placeholder="Email"
          className={"border border-gray-200 py-2 px-4 rounded-sm"}
        />
        {form.formState.errors.email && (
          <p className="text-red-500 text-sm">
            {form.formState.errors.email.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-y-1">
        <input
          {...form.register("password")}
          type="password"
          placeholder="Password"
          className={"border border-gray-200 py-2 px-4 rounded-sm"}
        />
        {form.formState.errors.password && (
          <p className="text-red-500 text-sm">
            {form.formState.errors.password.message}
          </p>
        )}
      </div>
      <div className="flex justify-center gap-x-4">
        <input
          type="submit"
          value="Login"
          className="bg-amber-500 py-2 px-4 rounded-sm cursor-pointer hover:bg-amber-600"
        />
      </div>
    </form>
  );
};
