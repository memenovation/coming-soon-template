export const Complete = () => {
  return (
    <div className="">
      <h1 className="">Thank you!</h1>
      <div className="text-left text-md mt-5 sm:mt-6 flex flex-col gap-y-6">
        <div>
          You registration has been completed. If you're an eligible applicant,
          we'll be sending you a free trial set in 2 weeks after signing up.
          Please note that the free trial is only available to people who have
          not previously registered for a trial set.
        </div>

        <div>
          If you have any questions or concerns, please feel free to reach out
          anytime—we love hearing from our customers.
        </div>
      </div>
      <div className="text-left mt-6 flex flex-col gap-y-4">
        <div className="font-medium">Contact Us</div>
        <div className="text-sm flex flex-col gap-y-3">
          <div className="flex gap-x-3 items-center">
            <PhoneIcon className="h-5 w-5" />
            <div>+852 3456-7890</div>
          </div>
          <div className="flex gap-x-3 items-center">
            <EmailIcon className="h-5 w-5" />
            <div>enquiry@abc.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const PhoneIcon = ({ className = null }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );
};
export const EmailIcon = ({ className = null }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
};
