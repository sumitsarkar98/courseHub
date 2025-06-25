import React, { useState } from "react";
import CourseShowcase from "../components/CourseShowCase";

const Allcourses = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section
      id="course-cards"
      className="flex flex-col  gap-3 px-2 md:px-12 lg:px-32 py-24 md:py-36 xl:pt-32"
    >
      {/* Search Bar */}
      <div className="mb-4 flex justify-center items-center">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2  px-4 py-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {/* Course Cards (You can pass `searchTerm` as a prop if filtering happens inside) */}
      <CourseShowcase search={searchTerm} />
      <CourseShowcase search={searchTerm} />
    </section>
  );
};

export default Allcourses;
