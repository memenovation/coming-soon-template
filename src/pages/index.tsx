import Head from "next/head";
import { useState } from "react";

//components
import { SubmissionForm } from "@components/Form";
import { Banner } from "@components/Banner";
import { Content } from "@components/Content";
import { Complete } from "@components/Complete";

//functions
import { handleAPI } from "@functions/dataFetching";
import handleSubscription from "@functions/handleSubscription";

export default function Home() {
  const [submissionStatus, setSubmissionStatus] = useState({
    isLoading: false,
    submitted: false,
  });

  //handle form submission
  const onSubmit = async (data) => {
    console.log("submmited");

    setSubmissionStatus((prev) => ({
      ...prev,
      isLoading: true,
    }));
    const [result, error] = await handleAPI(handleSubscription, data);
    if (result) {
      setSubmissionStatus((prev) => ({
        ...prev,
        submitted: true,
        isLoading: false,
      }));
      return;
    }
    console.log("error", error);
    setSubmissionStatus((prev) => ({
      ...prev,
      isLoading: false,
    }));
    return;
  };

  return (
    <div className="">
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_TITLE || "ABC Company"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-start w-full min-h-full flex-1 py-4 sm:py-8 text-center relative">
        <div className="max-w-md sm:max-w-lg w-full">
          <Banner />
        </div>

        <div className="wrapper bg-gray-900 rounded-md py-6 sm:py-8 w-full max-w-md sm:max-w-lg px-6 sm:px-8 mt-4 sm:mt-6 shadow-sm">
          {submissionStatus?.submitted ? (
            <div className="w-full max-w-full mx-auto">
              <Complete />
            </div>
          ) : (
            <>
              <div className="w-full max-w-full mx-auto">
                <Content />
              </div>

              <div className="mt-8 w-full h-full mx-auto flex flex-col justify-center ">
                <SubmissionForm
                  onSubmit={onSubmit}
                  submissionStatus={submissionStatus}
                />
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
