import Image from "next/image";
import Logo from "../../public/assets/Logo.png";

export function Footer() {
  return (
    <div
      data-testid="flowbite-footer"
      className="w-full bg-white shadow  md:flex md:items-center md:justify-between sm:p-24 p-6 border-0"
    >
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <div>
            <a
              data-testid="flowbite-footer-brand"
              href="/"
              className="mb-4 flex items-center sm:mb-0 mr-3 h-6 sm:h-9"
            >
              <Image
                alt="OneLot Logo"
                src={Logo}
                width={120}
                height={100}
              ></Image>
              <span
                data-testid="flowbite-footer-brand-span"
                className="self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white"
              ></span>
            </a>
          </div>
          <div className="flex items-start">
            <div className="flex flex-col mb-5 sm:mb-0 mr-12 items-start">
              <span className="mb-2 font-bold">Company</span>
              <span className="mb-2">
                <a
                  href="/"
                  className=" cursor-pointer hover:text-[#57009C] focus:text-[#57009C] text-gray-700"
                >
                  Home
                </a>
              </span>
              <span className="mb-2">
                <a
                  href="/about"
                  className=" cursor-pointer hover:text-[#57009C] focus:text-[#57009C] text-gray-700"
                >
                  About
                </a>
              </span>
              <span className="mb-2">
                <a
                  href="/contact"
                  className=" cursor-pointer hover:text-[#57009C] focus:text-[#57009C] text-gray-700"
                >
                  Contact
                </a>
              </span>
            </div>
            <div className="flex flex-col mb-5 sm:mb-0 items-start">
              <span className="mb-2 font-bold">Legal</span>
              <span className="mb-2">
                <a
                  href="/consent"
                  className=" cursor-pointer hover:text-[#57009C] focus:text-[#57009C] text-gray-700"
                >
                  Consent
                </a>
              </span>
              <span className="mb-2">
                <a
                  href="/privacy"
                  className=" cursor-pointer hover:text-[#57009C] focus:text-[#57009C] text-gray-700"
                >
                  Privacy
                </a>
              </span>
              <span className="mb-2">
                <a
                  href="/privacy"
                  className=" cursor-pointer hover:text-[#57009C] focus:text-[#57009C] text-gray-700"
                >
                  Terms
                </a>
              </span>
            </div>
          </div>
        </div>
        <hr
          data-testid="footer-divider"
          className="w-full my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
        ></hr>
        <div className="flex text-start items-start mb-3">
          <span className="text-gray-500 sm:text-center dark:text-gray-400">
            © 2023
            <a className="hover:underline" href="/">
              OneLot Technologies Incorporated Pte. Ltd
            </a>
            . All Rights Reserved.
          </span>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between text-start items-start">
          <span className="text-gray-500 sm:text-center dark:text-gray-400">
            © 2023
            <a className="hover:underline" href="/">
              OneLot Financing Corporation
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              href="https://www.facebook.com/OneLotPH/"
            >
              <svg
                className="w-5 h-5 cursor-pointer hover:text-[#57009C] focus:text-[#57009C]"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  clip-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                ></path>
              </svg>
            </a>
            <a
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              href="https://www.instagram.com/onelot.ph/"
            >
              <svg
                className="w-5 h-5 cursor-pointer hover:text-[#57009C] focus:text-[#57009C]"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  clip-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
