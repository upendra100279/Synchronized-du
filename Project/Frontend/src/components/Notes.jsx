import React from "react";
import Cards from "./Cards";

const notesData = [
  {
    id: 1,
    name: "C Language",
    category: "Notes",
    price: 0,
    image: "/public/c.jpeg",
    title: "Master the basics of C programming with these comprehensive notes.",
    link: "https://drive.google.com/file/d/1cV-d07MmposzGIUpNTrPlidlMelUSJSi/view?usp=drive_link"
  },
  {
    id: 2,
    name: "C++ Language",
    category: "Notes",
    price: 0,
    image: "/public/c++.jpeg",
    title: "Understand object-oriented programming with C++ notes.",
    link: "https://drive.google.com/file/d/16C6_0EA3JXrM3kj8k8S8d-60Xsm2fSIV/view?usp=drive_link"
  },
  {
    id: 3,
    name: "Java Language",
    category: "Notes",
    price: 0,
    image: "/public/java.jpeg",
    title: "Learn Java fundamentals and core concepts for placements.",
    link: "https://drive.google.com/file/d/13O6-eZYfnf6CC-AvAgQ8RDn8vRhbCbno/view?usp=drive_link"
  },
  {
    id: 4,
    name: "Python Language",
    category: "Notes",
    price: 0,
    image: "/public/python.jpeg",
    title: "Easy-to-follow Python notes for beginners and freshers.",
    link: "https://drive.google.com/file/d/1Jpr5We4-XnOR-zklmFD4bnNVL8EWTpYQ/view?usp=drive_link"
  },
  {
    id: 5,
    name: "Database Management System",
    category: "Notes",
    price: 0,
    image: "/public/dbms.jpeg",
    title: "Essential DBMS concepts and notes for engineering students.",
    link: "https://drive.google.com/file/d/1ck-9L0_G_79Xn6ILXGnPLXzSWatDKMjK/view?usp=drive_link"
  },
  {
    id: 6,
    name: "Structured Query Language",
    category: "Notes",
    price: 0,
    image: "/public/sql.jpeg",
    title: "SQL notes to help you manage and query databases efficiently.",
    link: "https://drive.google.com/file/d/1Y_QBF4XIKQdWntK6nmPRrLkAo9xkSDZY/view?usp=drive_link"
  },
  {
    id: 7,
    name: "Web Development",
    category: "Notes",
    price: 0,
    image: "/public/web.jpeg",
    title: "Kickstart your web development journey with these notes.",
    link: "https://drive.google.com/file/d/1s6vS7vTjK2KjPTYuI2TSOVrVoIbWLUMR/view?usp=sharing"
  },
  {
    id: 8,
    name: "Android Development",
    category: "Notes",
    price: 0,
    image: "/public/android.jpeg",
    title: "Get started with Android app development using these notes.",
    link: "https://drive.google.com/file/d/1s6vS7vTjK2KjPTYuI2TSOVrVoIbWLUMR/view?usp=sharing"
  },
  // ...add more notes as needed
];

function Notes() {
  const handleCardClick = (item) => {
    if (item.link) {
      window.open(item.link, "_blank");
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 my-10">
      <h2 className="text-2xl font-bold mb-2">Subject Notes</h2>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Access high-quality notes for all your core engineering subjects. These resources are specially curated for first-year students and freshers to help you build a strong academic foundation and prepare for placements. Click on any subject to view or download the notes instantly!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {notesData.map((item) => (
          <Cards key={item.id} item={item} onCardClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
}

export default Notes;