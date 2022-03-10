import React from 'react';

export const HamburgerButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => (
  <button
    type="button"
    className="inline-flex items-center justify-center p-2 rounded-md text-white-400 hover:text-white-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
    aria-controls="mobile-menu"
    aria-expanded="false"
    {...props}
  >
    <span className="sr-only">Open main menu</span>
    {/* Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block" */}
    <svg
      className="block w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
    {/* Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden" */}
    <svg
      className="hidden w-6 h-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
);
