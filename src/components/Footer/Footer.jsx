export default function Footer() {
  return (
    <footer className=" shadow-2xl bg-white px-8  mt-20">
      <div className="w-full   ">
        <div className=" flex flex-col md:flex-row md:items-center md:justify-center md:gap-96">
          <a
            href=""
            className="pt-5 mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-bold whitespace-nowrap ">
              Logo
            </span>
          </a>
          <ul className="flex md:flex-row flex-col gap-2 md:gap-6 my-2 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline ">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 pb-8 text-center ">
          © 2024{" "}
          <a href="" className="hover:underline">
            Health Care
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
