import { useForm } from "react-hook-form";

//icons
import { ImSpinner9 } from "react-icons/im";

export const SubmissionForm = ({ onSubmit, isLoading }) => {
  //initiate react-hook-form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  //define form field options
  const registerOptions = {
    email: { required: "Email is required" },
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-2 mt-7
        lg:mt-12"
    >
      <input
        {...register("email", registerOptions.email)}
        className="w-[286px] h-[48px] outline-none focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-2 focus:ring-gray-100 text-base text-gray-900 rounded-sm pl-3 bg-gray-50 placeholder-gray-500"
        type="email"
        name="email"
        autoComplete="off"
        placeholder="Enter your email"
        maxLength={254}
      />

      <button
        type="submit"
        className="font-bold w-full max-w-[286px] h-12 rounded px-4 py-2 text-gray-50 bg-teal-700
              hover:bg-teal-600
              focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-2 focus:ring-teal-600 "
      >
        {isLoading && <ImSpinner9 className="animate-spin mb-1 inline mr-3" />}
        Subscribe for Updates
      </button>
    </form>
  );
};
