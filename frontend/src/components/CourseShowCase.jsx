import React from "react";
import courseimage from "../assets/courseimage.webp";

const courses = [
  {
    title: "MERN Developer",
    price: "999",
    originalPrice: "1500",
    rating: 4,
    reviews: 578,
    image: courseimage,
  },
  {
    title: "Digital Marketer",
    price: "999",
    originalPrice: "1500",
    rating: 4,
    reviews: 578,
    image: courseimage,
  },
  {
    title: "Data Scientist",
    price: "999",
    originalPrice: "1500",
    rating: 4,
    reviews: 578,
    image: courseimage,
  },
];

const CourseShowcase = () => {
  return (
    <section className="px-2 md:px-32 py-12 bg-[#f9f9f9] rounded">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-700">
          Ready to build <span className="text-blue-700">something NEW !!</span>
        </h2>
        <p className="text-gray-600 text-base mt-4 md:text-[2rem]">
          Get the skills and real-world experience employers want with Career
          Accelerators.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-2 md:p-6 flex flex-col justify-center items-start">
                <h3 className="w-full text-center font-semibold text-blue-900">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1 px-1">
                  This Is A Sigma Development Course.
                </p>

                <div className="mt-4 flex items-center justify-center text-yellow-500 text-sm gap-1 px-1">
                  <span>Rating :</span>
                  {Array(3)
                    .fill("★")
                    .map((star, i) => (
                      <span key={i} className="flex justify-between">
                        {star}
                      </span>
                    ))}
                  <span className="text-gray-500">({course.reviews})</span>
                  <div className=" text-gray-900 font-semibold px-2 flex">
                    ₹ {course.price}/-
                    <span className="line-through text-gray-500 ml-2">
                      ₹ {course.originalPrice}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseShowcase;
