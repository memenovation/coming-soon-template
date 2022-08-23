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
    <div className="flex flex-col items-center justify-center">
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_TITLE}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 pb-20 text-center">
        <div className="font-arvo font-bold text-3xl lg:text-4xl">
          Coming Soon
        </div>
        <SubmissionForm onSubmit={onSubmit} isLoading={isLoading} />
        {isSubscribed && (
          <div className="mt-2 text-indigo-400 text-center">
            Successfully subscribed!
          </div>
        )}
      </main>
    </div>
  );
}
