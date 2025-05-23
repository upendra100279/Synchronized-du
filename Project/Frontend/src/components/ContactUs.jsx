import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ContactUs() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-md mx-auto my-16 p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
        <p className="mb-8 text-gray-700 dark:text-gray-300 text-center">
          Have questions, suggestions, or need support? Fill out the form below or email us at <a href="mailto:support@syncedu.com" className="text-pink-500 underline">support@syncedu.com</a> and our team will get back to you soon!
        </p>
        <form className="space-y-6">
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input type="text" className="w-full px-4 py-2 border rounded-md dark:bg-slate-900 dark:text-white" placeholder="Your Name" required />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input type="email" className="w-full px-4 py-2 border rounded-md dark:bg-slate-900 dark:text-white" placeholder="Your Email" required />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Message</label>
            <textarea className="w-full px-4 py-2 border rounded-md dark:bg-slate-900 dark:text-white" rows={5} placeholder="How can we help you?" required />
          </div>
          <button type="submit" className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-700 duration-300 w-full font-semibold">
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;