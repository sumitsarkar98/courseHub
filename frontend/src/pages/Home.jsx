import React from "react";
import { useNavigate } from "react-router-dom";

import character from "../assets/character.png";
import bgimage from "../assets/bgimage.png";
import JobCandidates from "../components/JobCandidates";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center py-24 md:py-36 bg-[#d9d9d9]">
      {/* section-one */}
      <section
        id="one"
        className="shadow-md w-full lg:min-h-[90vh] bg-contain bg-center bg-no-repeat flex flex-col lg:flex-row items-center justify-center px-4 py-10 sm:px-8 md:px-12"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        {/* Left Side */}
        <div className="w-full  justify-center items-center lg:w-1/2 bg-transparent flex lg:justify-end  py-8 px-2 lg:px-4 sm:px-6">
          <div className="text-center space-y-5">
            <h3 className="text-base md:text-xl font-medium text-white uppercase">
              learn & become
            </h3>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-500">
              Top 1%
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white uppercase  mt--10">
              developer
            </h1>
            <button
              onClick={() => navigate("/allcourses")}
              className="bg-blue-900 text-yellow-500 font-semibold p-2 lg:px-5 lg:py-3 rounded-2xl text-lg sm:text-xl lg:text-2xl mt-16 uppercase hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              ultimate <span className="text-white">placement solution</span>
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 hidden lg:flex justify-start items-center">
          <img
            src={character}
            alt="character"
            className="w-3/4 lg:w-3/5 object-contain"
          />
        </div>
      </section>

      {/* section-two */}
      <section id="two" className="w-full">
        <div
          id="two-heading"
          className=" flex  justify-center items-center text-center"
        >
          <h2 className="text-3xl sm:text-4xl capitalize font-semibold p-2 lg:p-4">
            india's most loved coding community.
          </h2>
        </div>

        <ul
          id="two-options"
          className="flex flex-row flex-wrap justify-around items-center"
        >
          <li className="p-4 shadow-md">
            <h2 className="text-xl lg:text-3xl font-bold uppercase text-center">
              60,000+
            </h2>
            <h2 className="text-2xl mt-2 uppercase">happy learners</h2>
          </li>
          <li className="p-4 shadow-md">
            <h2 className="text-xl lg:text-3xl font-bold uppercase text-center">
              2 Cr
            </h2>
            <h2 className="text-2xl mt-2 uppercase">monthly views</h2>
          </li>
          <li className="p-4 shadow-md">
            <h2 className="text-xl lg:text-3xl font-bold uppercase text-center">
              10,000+
            </h2>
            <h2 className="text-2xl mt-2 uppercase">new subscribers</h2>
          </li>
        </ul>
      </section>

      {/* section-three */}
      <section
        id="three"
        className="w-full flex flex-col justify-center items-center p-5 lg:p-30"
      >
        <hr className="bg-black h-[3px] w-full mb-12" />
        <h4 className=" text-xl lg:text-4xl text-center capitalize">
          placement prep batchs
        </h4>
        <h3 className="text-center">sigma 8.0 : development + dsa</h3>
        <h4 className=" text-xl lg:text-3xl text-center capitalize">
          start your placement journey today with us.
        </h4>
        <button
          onClick={() => navigate("/allcourses")}
          className="explore-btn text-xl capitalize mt-5"
        >
          explore now
        </button>
        <hr className="bg-black h-[3px] w-full mt-12" />
      </section>

      {/* section-four */}
      <section className="flex flex-col items-center px-4 py-10 lg:p-1 text-center mb-5">
        <h3 className="text-xl sm:text-2xl font-semibold mb-6 ">
          Thousands of students got their
          <span className="ms-2 text-2xl sm:text-3xl text-blue-800 underline">
            dream job
          </span>
        </h3>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-3 mb-8">
          <li>
            <JobCandidates />
          </li>
          <li>
            <JobCandidates />
          </li>
          <li>
            <JobCandidates />
          </li>
          <li>
            <JobCandidates />
          </li>
          <li>
            <JobCandidates />
          </li>
          <li>
            <JobCandidates />
          </li>
          <li>
            <JobCandidates />
          </li>
          <li>
            <JobCandidates />
          </li>
        </ul>

        <button className="explore-btn mb-5 text-xl capitalize px-6 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-900 transition">
          show more
        </button>
      </section>
    </div>
  );
};

export default Home;
