import React from "react";
import component from "../assets/Component 1.png";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className="flex  items-start pl-25">
      <div className="flex flex-col items-start">
        <h1 className="font-semibold text-[50px] leading-[100%] py-10 pl-1 w-113">
          Manage Your Tasks On <span className="text-[#974FD0]">TaskDuty</span>
        </h1>
        <p className="w-133.75 font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non tellus,
          sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea
          tempus duis non eget. Hendrerit tortor fermentum bibendum mi nisl
          semper porttitor. Nec accumsan.
        </p>
        <button className="w-50.25 h-12.5 bg-[#974FD0] text-[#FAF9FB] rounded-2xl">
          <Link to="/mytask">Go to My Tasks</Link>
        </button>
      </div>
      <div>
        <img src={component} alt="" />
      </div>
    </div>
  );
};

export default HomePage;
