import Head from "next/head";
import { useState } from "react";

//components
import { SubmissionForm } from "@components/Form";

//functions
import { handleAPI } from "@functions/dataFetching";
import handleSubscription from "@functions/handleSubscription";

export default function Home() {
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
    <div className="">
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-start w-full flex-1 pb-20 pt-8 text-center">
        <div className="max-w-md w-full">
          <img
            className="mx-auto max-w-full w-full h-36 object-cover rounded-md "
            src="https://images.unsplash.com/photo-1606787366850-de6330128bfc"
          />
        </div>

        <div className="bg-gray-900 rounded-md py-8 w-full max-w-md px-8 mt-6 shadow-sm">
          <div className="w-full max-w-full mx-auto">
            <h1 className="text-2xl font-arvo font-bold text-center ">
              {process.env.NEXT_PUBLIC_H1}
            </h1>
          </div>
          <div className="mt-12 w-full h-full mx-auto flex flex-col justify-center ">
            <SubmissionForm onSubmit={onSubmit} isLoading={isLoading} />
            {isSubscribed && (
              <div className="mt-2 text-indigo-400 text-center">
                Successfully subscribed!
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
