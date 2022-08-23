import Head from "next/head";
import { useForm } from "react-hook-form";
import { useState } from "react";

//icons
import { ImSpinner9 } from "react-icons/im";

//functions
import { handleAPI } from "@functions/dataFetching";
import handleSubscription from "@functions/handleSubscription";

export default function Home() {
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

  //loading state for form submission
  const [isLoading, setLoading] = useState(false);

  const [isSubscribed, setIsSubscribed] = useState(false);

  //handle form submission
  const onSubmit = async (data) => {
    console.log("submmited");

    setLoading(true);
    const [result, error] = await handleAPI(handleSubscription, data);
    if (result) {
      setIsSubscribed(true);
    }
    setLoading(false);
    return;
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 pb-20 text-center">
        <div className="font-arvo font-bold text-3xl lg:text-4xl">
          Coming Soon
        </div>
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
            {isLoading && (
              <ImSpinner9 className="animate-spin mb-1 inline mr-3" />
            )}
            Subscribe for Updates
          </button>
        </form>
        {isSubscribed && (
          <div className="mt-2 text-indigo-400 text-center">
            Successfully subscribed!
          </div>
        )}
      </main>
    </div>
  );
}
