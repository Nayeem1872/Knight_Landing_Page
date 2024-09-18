import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0e0f11] text-white">
      <div className="py-5 md:py-8">
        <div className="max-w-6xl mx-auto">
          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">
            {/* Address, email, phone */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              <p>
                Office: House# 27 (3rd Floor), Gausul Azam Avenue <br/>
                Sector# 14 Uttara, Dhaka-1230, Bangladesh
              </p>
              <p>
                Email:{" "}
                <a
                  href="knightclothing.hr@gmail.com"
                  className="text-teal-500 hover:text-gray-100 transition duration-150 ease-in-out"
                >
                  knightclothing.hr@gmail.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  // href="tel:+1234567890"
                  className="text-teal-500 hover:text-gray-100 transition duration-150 ease-in-out"
                >
                  +88 01711928004
                </a>
              </p>
            </div>

            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <Link
                  href="/"
                  className="flex justify-center items-center text-teal-500 bg-gray-700 hover:text-gray-100 hover:bg-teal-500 rounded-full transition duration-150 ease-in-out"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="/"
                  className="flex justify-center items-center text-teal-500 bg-gray-700 hover:text-gray-100 hover:bg-teal-500 rounded-full transition duration-150 ease-in-out"
                  aria-label="Github"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-3.9 0-.9.3-1.6.8-2.2-.1-.2-.3-1 .1-2 .1 0 .6-.2 2.1.8.6-.2 1.2-.2 1.9-.2s1.3.1 1.9.2c1.5-1.1 2.1-.8 2.1-.8.4 1 .2 1.8.1 2 .5.6.8 1.3.8 2.2 0 3-.9 3.7-3.7 3.9.3.3.6.8.6 1.6v2.3c0 .2.2.5.5.4 3.2-1.1 5.5-4.1 5.5-7.6 0-4.4-3.6-8-8-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link
                  href="/"
                  className="flex justify-center items-center text-teal-500 bg-gray-700 hover:text-gray-100 hover:bg-teal-500 rounded-full transition duration-150 ease-in-out"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.974 14.47v2.555h-1.277v2.58h1.277v8.07h3.023v-8.07h2.052l.207-2.58h-2.26v-1.66c0-.609.124-.847.715-.847h1.523v-2.615h-2.025c-2.437 0-3.235 1.165-3.235 3.064Z" />
                  </svg>
                </Link>
              </li>
            </ul>

            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              &copy; 2024 Company. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
