export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full">
      <div className="px-6 sm:px-2 w-full">{children}</div>
    </div>
  );
};
