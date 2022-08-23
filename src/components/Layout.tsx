export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <div className="px-2 w-full">{children}</div>
    </div>
  );
};
