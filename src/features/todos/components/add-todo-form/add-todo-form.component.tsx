import { useForm } from "react-hook-form";

export const AddTodoForm = () => {
  const form = useForm({
    defaultValues: {
      title: "",
      message: "",
    },
  });

  const onSubmitHandler = form.handleSubmit((formData) => {
    console.log("onSubmitHandler", formData);
  });

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col gap-y-4">
      <input
        {...form.register("title")}
        type="text"
        className="border border-gray-200 py-2 px-4 text-sm rounded-sm"
      />
      <input
        {...form.register("message")}
        type="text"
        className="border border-gray-200 py-2 px-4 text-sm rounded-sm"
      />
      <input
        type="submit"
        value="Submit"
        className="bg-amber-500 py-2 px-4 text-sm rounded-sm cursor-pointer hover:bg-amber-600"
      />
    </form>
  );
};
