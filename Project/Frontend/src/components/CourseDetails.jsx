import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`http://localhost:4001/book`);
        const found = res.data.find((item) => item._id === id);
        setCourse(found);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCourse();
  }, [id]);

  if (!course) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div className="max-w-xl mx-auto my-16 p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{course.name}</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">{course.title}</p>
      <div className="flex flex-col gap-6">
        <a href={course.link1} target="_blank" rel="noopener noreferrer">
          <img
            src={course.thumbnail1}
            alt="Playlist 1 Thumbnail"
            className="rounded-lg w-full mb-2"
          />
          <div className="text-center text-blue-600 underline">Watch Playlist 1</div>
        </a>
        <a href={course.link2} target="_blank" rel="noopener noreferrer">
          <img
            src={course.thumbnail2}
            alt="Playlist 2 Thumbnail"
            className="rounded-lg w-full mb-2"
          />
          <div className="text-center text-blue-600 underline">Watch Playlist 2</div>
        </a>
      </div>
    </div>
  );
}

export default CourseDetails;