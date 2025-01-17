import React from "react";

const Icon = ({ name = "", className = "", onClick }) => {
  const icons = {
    email: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17.9026 8.85107L13.4593 12.4641C12.6198 13.1301 11.4387 13.1301 10.5992 12.4641L6.11841 8.85107"
          stroke="#ADA4A5"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.9089 21C19.9502 21.0084 22 18.5095 22 15.4384V8.57001C22 5.49883 19.9502 3 16.9089 3H7.09114C4.04979 3 2 5.49883 2 8.57001V15.4384C2 18.5095 4.04979 21.0084 7.09114 21H16.9089Z"
          stroke="#ADA4A5"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    password: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.4234 9.44756V7.30056C16.4234 4.78756 14.3854 2.74956 11.8724 2.74956C9.35937 2.73856 7.31337 4.76656 7.30237 7.28056V7.30056V9.44756"
          stroke="#ADA4A5"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.6832 21.2495H8.04224C5.94824 21.2495 4.25024 19.5525 4.25024 17.4575V13.1685C4.25024 11.0735 5.94824 9.37646 8.04224 9.37646H15.6832C17.7772 9.37646 19.4752 11.0735 19.4752 13.1685V17.4575C19.4752 19.5525 17.7772 21.2495 15.6832 21.2495Z"
          stroke="#ADA4A5"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.8629 14.2026V16.4236"
          stroke="#ADA4A5"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    "closed-eye": (
      <svg
        width="18"
        height="14"
        viewBox="0 0 18 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.06355 8.69651C6.56625 8.25984 6.26355 7.66646 6.26355 7.00081C6.26355 5.66722 7.48474 4.59229 8.99998 4.59229C9.74982 4.59229 10.44 4.85931 10.9286 5.29597"
          stroke="#ADA4A5"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.6856 7.42773C11.485 8.4091 10.6063 9.18354 9.49146 9.36155"
          stroke="#ADA4A5"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.3773 11.0586C3.00476 10.1107 1.84238 8.72619 1 7.00006C1.85103 5.26632 3.02119 3.87416 4.40238 2.91866C5.77492 1.96316 7.35849 1.44434 9 1.44434C10.651 1.44434 12.2337 1.97077 13.6149 2.93312"
          stroke="#ADA4A5"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.4415 4.60596C16.0366 5.30128 16.5598 6.10387 17 6.99926C15.2988 10.466 12.2926 12.5542 9.00002 12.5542C8.25364 12.5542 7.51764 12.4477 6.81018 12.24"
          stroke="#ADA4A5"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.8216 1L2.1792 13"
          stroke="#ADA4A5"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    "opened-eye": (
      <svg
        width="18"
        height="14"
        viewBox="0 0 18 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.06355 8.69651C6.56625 8.25984 6.26355 7.66646 6.26355 7.00081C6.26355 5.66722 7.48474 4.59229 8.99998 4.59229C9.74982 4.59229 10.44 4.85931 10.9286 5.29597"
          stroke="#ADA4A5"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.6856 7.42773C11.485 8.4091 10.6063 9.18354 9.49146 9.36155"
          stroke="#ADA4A5"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.3773 11.0586C3.00476 10.1107 1.84238 8.72619 1 7.00006C1.85103 5.26632 3.02119 3.87416 4.40238 2.91866C5.77492 1.96316 7.35849 1.44434 9 1.44434C10.651 1.44434 12.2337 1.97077 13.6149 2.93312"
          stroke="#ADA4A5"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.4415 4.60596C16.0366 5.30128 16.5598 6.10387 17 6.99926C15.2988 10.466 12.2926 12.5542 9.00002 12.5542C8.25364 12.5542 7.51764 12.4477 6.81018 12.24"
          stroke="#ADA4A5"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.8216 1L2.1792 13"
          stroke="#ADA4A5"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  };
  const addClassName = (icon) => {
    return React.cloneElement(icon, { className, onClick });
  };

  const iconsNew = Object.fromEntries(
    Object.entries(icons).map(([key, icon]) => [key, addClassName(icon)])
  );

  return iconsNew[name] || null;
};

export default Icon;
