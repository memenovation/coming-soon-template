import { useForm } from "react-hook-form";

//icons
import { ImSpinner9 } from "react-icons/im";

//components
import { Input } from "./Fields";

export const SubmissionForm = ({ onSubmit, submissionStatus }) => {
  //initiate react-hook-form
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  //define form field options
  const registerOptions = {
    email: { required: "Email is required", maxLength: 255 },
    name: { required: "Name is required", maxLength: 255 },
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
        w-full flex flex-col gap-y-7"
    >
      <div className="flex flex-col gap-y-3 w-full max-w-full">
        <Input
          register={register}
          name="email"
          label="Your Email"
          placeholder="Enter your email"
          type="email"
          options={registerOptions.email}
        />
        <Input
          register={register}
          name="name"
          label="Your Name"
          placeholder="Enter your name"
          options={registerOptions.name}
        />
      </div>
      <div className="">
        <button
          type="submit"
          disabled={submissionStatus.isLoading || submissionStatus.submitted}
          className="disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed font-medium w-full max-w-full h-12 rounded px-4 py-2 text-gray-50 bg-teal-700
        hover:bg-teal-600
        focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-2 focus:ring-teal-600 "
        >
          {submissionStatus?.isLoading && (
            <ImSpinner9 className="animate-spin mb-1 inline mr-3" />
          )}
          {submissionStatus?.submitted ? "Thank you!" : "Register Now"}
        </button>
        {submissionStatus?.submitted && (
          <div className="mt-4 text-teal-400 text-center">
            Successfully registered!
          </div>
        )}
      </div>
    </form>
  );
};
