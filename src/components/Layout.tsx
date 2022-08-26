import { Footer } from "./Footer";
export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full relative">
      <div className="px-4 sm:px-2 w-full bg-gray-800">
        <>{children} </>
        <Footer />
      </div>
    </div>
  );
};
