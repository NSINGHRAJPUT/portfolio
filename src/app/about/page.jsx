import Layout from "../_Layout/Layout";

const About = () => {
  return (
    <div className="p-5 bg-gray-700 rounded-lg px-0 w-[95%] mb-16">
      <h2 className="text-2xl mb-2 font-bold">About Me</h2>
      <p className="mb-5 text-white">
        Diam rebum sea stet rebum ea. Et kasd amet et accusam elitr voluptua.
        Tempor dolore sit et accusam ipsum erat duo. Gubergren et takimata dolor
        duo amet et sanctus elitr lorem. Ipsum amet duo rebum dolor labore. No
        diam duo lorem elitr dolor takimata elitr no.
      </p>
      <div className="flex flex-wrap gap-5">
        <div className="flex-1 min-w-[45%] text-base">
          <strong className="text-green-600">Name:</strong> John Doe
        </div>
        <div className="flex-1 min-w-[45%] text-base">
          <strong className="text-green-600">Degree:</strong> Master
        </div>
        <div className="flex-1 min-w-[45%] text-base">
          <strong className="text-green-600">Phone:</strong> +012 345 6789
        </div>
        <div className="flex-1 min-w-[45%] text-base">
          <strong className="text-green-600">Address:</strong> 123 Street, New
          York, USA
        </div>
        <div className="flex-1 min-w-[45%] text-base">
          <strong className="text-green-600">Birthday:</strong> 1 April 1990
        </div>
        <div className="flex-1 min-w-[45%] text-base">
          <strong className="text-green-600">Experience:</strong> 10 Years
        </div>
        <div className="flex-1 min-w-[45%] text-base">
          <strong className="text-green-600">Email:</strong> info@example.com
        </div>
        <div className="flex-1 min-w-[45%] text-base">
          <strong className="text-green-600">Freelance:</strong> Available
        </div>
      </div>
      <div className="flex justify-between mt-5">
        <div className="text-center bg-gray-600 text-white p-3 rounded">
          <span className="text-green-600 text-2xl font-bold">10</span>
          <span className="block text-base">Years of Experience</span>
        </div>
        <div className="text-center bg-gray-600 text-white p-3 rounded">
          <span className="text-green-600 text-2xl font-bold">100</span>
          <span className="block text-base">Happy Clients</span>
        </div>
        <div className="text-center bg-gray-600 text-white p-3 rounded">
          <span className="text-green-600 text-2xl font-bold">200</span>
          <span className="block text-base">Complete Projects</span>
        </div>
      </div>
    </div>
  );
};

export default About;
