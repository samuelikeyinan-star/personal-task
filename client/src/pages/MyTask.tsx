import React from "react";
import { FiPlus } from "react-icons/fi";
import { BiEdit } from "react-icons/bi";
import { LuTrash2 } from "react-icons/lu";
import { Link } from "react-router-dom";

const MyTask: React.FC = () => {
  return (
    <div className="w-full py-8 px-20 flex flex-col gap-10 ">
      <div className="flex items-center justify-between">
        {" "}
        <h3 className="font-medium text-[50px] text-[#292929] tracking-[0%] ">
          My Tasks
        </h3>
        <Link to="/newtask" className="flex gap-4 items-center cursor-pointer">
          <FiPlus className="text-[#974FD0] h-6 w-6 " />

          <h5 className="text-[#974FD0] text-[24px] font-medium tracking-[0%]  ">
            Add New Task
          </h5>
        </Link>
      </div>

      <div className="border-[0.5px] border-[#B8B6B6] rounded-[10px] px-3 py-4 ">
        <div className="flex flex-col gap-4 ">
          <div className="w-full flex justify-between items-end">
            <p className="text-[#F38383] font-normal text-[24px]  ">urgent</p>

            <div className="flex gap-5">
              <Link to="/edittask">
                <button
                  className="flex gap-2.5 bg-[#974FD0] py-2.5 px-6.25 rounded-lg items-center cursor-pointer
                 hover:bg-[#6B3399] "
                >
                  <BiEdit className="text-[#FAF9FB] w-6 h-6 " />
                  <p className="text-[#FAF9FB] font-medium text-[24px] ">
                    Edit
                  </p>
                </button>
              </Link>

              <button className="flex gap-2.5 bg-[#FAF9FB] py-2.5 px-6.25 rounded-lg items-center border border-[#974FD0] cursor-pointer ">
                <LuTrash2 className="text-[#974FD0] w-6 h-6 " />
                <p className="text-[#974FD0] font-medium text-[24px] ">
                  Delete
                </p>
              </button>
            </div>
          </div>

          <hr className="h-[0.5px] text-[#B8B6B6] " />

          <div className="flex flex-col gap-3 items-start">
            <h4 className="text-[35px] text-[#292929] tracking-[0%] ">
              FinTech Website Update
            </h4>

            <p className="text-[#737171] text-[24px] font-normal leading-[120%] tracking-widest text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
              nibh posuere non tempor. Erat mattis <br /> gravida pulvinar nibh
              aliquam faucibus et magna. Interdum eu tempus ultricies cras neque
              mi. Eget tellus suspendisse et viverra.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-6">
        <a
          href="#"
          className="font-normal text-[26px] underline text-[#974FD0] cursor-pointer hover:text-[#6b3399] "
        >
          Back To Top
        </a>
      </div>
    </div>
  );
};

export default MyTask;
