export const Content = () => {
  return (
    <>
      <h1 className="text-2xl font-arvo font-bold text-center ">
        {process.env.NEXT_PUBLIC_H1}
      </h1>
      <div className="text-left text-sm mt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </div>
    </>
  );
};
