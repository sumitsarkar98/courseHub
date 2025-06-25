import React from "react";
import personImage from "../assets/personImage.png";
import studentImage2 from "../assets/studentImage2.png";
import studentImage3 from "../assets/studentImage3.png";

const StudentCard = () => {
  return (
    <div
      id="studentCard"
      className="max-w-[300px] border-2 border-blue-900 rounded-lg shadow-lg p-4 flex flex-col items-center"
    >
      <img
        src={studentImage3}
        alt="Student profile"
        className="w-24 h-24 rounded-full object-cover mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">Krishna Manish</h3>
      <ul className="text-center space-y-1">
        <li className="font-bold">Hired by: Microsoft</li>
        <li className="font-bold">Department: CSE</li>
        <li className="font-bold">Package: 70k/month</li>
      </ul>
    </div>
  );
};

export default StudentCard;
