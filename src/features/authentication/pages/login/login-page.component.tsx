import { LoginForm } from "@/features/authentication/components/login-form/login-form.component";

export const LoginPage = () => {
  return (
    <div className="flex flex-col gap-y-4 p-4">
      <h1 className="text-3xl font-bold text-center">Form Handling</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
        deleniti, dicta dolorum earum eligendi harum laudantium, placeat,
        provident quidem rerum saepe sapiente veniam! Accusantium adipisci
        aliquid architecto consequuntur eligendi eum exercitationem fugit
        impedit laudantium molestiae nisi non omnis placeat quae quas qui
        quisquam, recusandae rem repudiandae sequi totam veritatis voluptatibus.
      </p>
      <LoginForm />
    </div>
  );
};
