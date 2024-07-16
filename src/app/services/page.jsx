import React from "react";

const services = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-12 h-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c1.5 0 2.625-1.125 2.625-2.625S13.5 2.75 12 2.75 9.375 3.875 9.375 5.375 10.5 8 12 8zm0 0v3m-6 5.25a6.75 6.75 0 0113.5 0v.75H6v-.75zm0 0h13.5"
        />
      </svg>
    ),
    title: "Service One",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-12 h-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c1.5 0 2.625-1.125 2.625-2.625S13.5 2.75 12 2.75 9.375 3.875 9.375 5.375 10.5 8 12 8zm0 0v3m-6 5.25a6.75 6.75 0 0113.5 0v.75H6v-.75zm0 0h13.5"
        />
      </svg>
    ),
    title: "Service Two",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-12 h-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c1.5 0 2.625-1.125 2.625-2.625S13.5 2.75 12 2.75 9.375 3.875 9.375 5.375 10.5 8 12 8zm0 0v3m-6 5.25a6.75 6.75 0 0113.5 0v.75H6v-.75zm0 0h13.5"
        />
      </svg>
    ),
    title: "Service Three",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-12 h-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c1.5 0 2.625-1.125 2.625-2.625S13.5 2.75 12 2.75 9.375 3.875 9.375 5.375 10.5 8 12 8zm0 0v3m-6 5.25a6.75 6.75 0 0113.5 0v.75H6v-.75zm0 0h13.5"
        />
      </svg>
    ),
    title: "Service Four",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
  },
];

const Services = () => {
  return (
    <div className="p-10 mt-10 px-0 w-[95%]">
      <h2 className="text-white text-4xl font-bold mb-10">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-between">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white  p-5 rounded-md flex flex-col items-center"
          >
            <div className="mb-3 text-green-500 bg-slate-700 p-4 rounded-md">
              {service.icon}
            </div>
            <h3 className="text-2xl text-gray-900 font-bold mb-2">
              {service.title}
            </h3>
            <p className="text-center text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
