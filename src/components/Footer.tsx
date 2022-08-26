import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="rounded pb-8 px-6 sm:px-8 w-full max-w-md md:max-w-lg h-full mx-auto text">
      <div className="text-center text-sm">
        ABC Company 2022. All rights reserved
      </div>
      <div className="flex flex-row gap-x-4 mx-auto items-center justify-center mt-4 ">
        <FaFacebook className="footerIcons" />
        <FaInstagram className="footerIcons" />
        <FaYoutube className="footerIcons" />
      </div>
    </footer>
  );
};
