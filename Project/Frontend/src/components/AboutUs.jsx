import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-md mx-auto my-16 p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300 text-center">
          <span className="font-semibold text-pink-500">Sync Edu</span> is a student-centric platform created to support and guide first-year engineering students and freshers in navigating their academic journey. We aim to make learning engaging, effective, and accessible for everyone, no matter where they are in their educational path.
        </p>
        <p className="mb-6 text-gray-700 dark:text-gray-300 text-center">
          Our platform offers a wide range of carefully curated resources, including comprehensive subject notes, free online courses, and skill-building tutorials tailored to core engineering disciplines. We focus not just on academic excellence but also on holistic development, helping students prepare for competitive placements and real-world challenges.
        </p>
        <p className="mb-6 text-gray-700 dark:text-gray-300 text-center">
          At Sync Edu, we foster a collaborative and inclusive learning environment. We believe in the power of community and peer-to-peer support. Through forums, webinars, and mentorship opportunities, we encourage students to learn from each other and grow together.
        </p>
        <p className="mb-6 text-gray-700 dark:text-gray-300 text-center">
          Whether you're struggling with a complex concept, seeking inspiration for your next project, or looking to connect with like-minded peers, Sync Edu is your go-to destination. We're more than just a resource hub — we're a growing ecosystem of future engineers, innovators, and problem-solvers.
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-center">
          Join us today and take your first step toward a future filled with knowledge, innovation, and success.
        </p>

        {/* Meet the Team Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-center text-pink-500">Meet the Team</h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            {/* Designer */}
            <div className="flex flex-col items-center">
              <img
                src=".\public\upendra.jpg"
                alt="Designer"
                className="w-24 h-24 rounded-full mb-2 border-4 border-pink-300 object-cover"
              />
              <div className="font-bold text-lg">Upendra Chauhan</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm mb-1">Designer</div>
              <a href="mailto:amit.kumar@email.com" className="text-blue-600 underline text-sm">
                upendra100279@gmail.com
              </a>
            </div>
            {/* Producer */}
            <div className="flex flex-col items-center">
              <img
                src="./public/ankur.jpg"
                alt="Producer"
                className="w-24 h-24 rounded-full mb-2 border-4 border-pink-300 object-cover"
              />
              <div className="font-bold text-lg">Ankur Chauhan</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm mb-1">Producer</div>
              <a href="mailto:priya.sharma@email.com" className="text-blue-600 underline text-sm">
                ankurchauhan6928mail.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="./public/rks.png"
                alt="Producer"
                className="w-24 h-24 rounded-full mb-2 border-4 border-pink-300 object-cover"
              />
              <div className="font-bold text-lg">Ramkrishna Singh</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm mb-1">Producer</div>
              <a href="mailto:priya.sharma@email.com" className="text-blue-600 underline text-sm">
                rs2940011@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;