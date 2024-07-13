'use client'
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      console.log(formData);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="w-[100%] px-0 p-10 mt-10 rounded-md">
      <h2 className="text-white text-4xl font-bold mb-4">Get in Touch</h2>
      <p className="text-white text-lg mb-8">
        I&apos;m a seasoned WordPress and Figma designer ready to bring your ideas to life. Let&apos;s discuss how we can work together to create something amazing!
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className='flex gap-4 flex-col md:flex-row'>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full p-4 bg-gray-800 text-white focus:outline-none"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full p-4 bg-gray-800 text-white focus:outline-none"
        />
        </div>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="w-full p-4 bg-gray-800 text-white focus:outline-none"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write Message"
          className="w-full p-4 bg-gray-800 text-white focus:outline-none h-32"
        ></textarea>
        <button
          type="submit"
          className="w-full p-4 bg-white text-black font-bold"
        >
          {loading ? "Submitting..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
