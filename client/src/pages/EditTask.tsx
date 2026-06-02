import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";

const EditTask: React.FC = () => {
  return (
    <div>
      <div className="items-start justify-center flex flex-col gap-2 w-full py-8 px-85 ">
        <div className="flex items-center gap-4 mt-10 ml-20 text-[#292929] text-[35px] font-medium tracking-[0%] ">
          <Link to="/mytask">
            <MdKeyboardArrowLeft />
          </Link>
          <h1>Edit Task</h1>
        </div>

        <form className="flex flex-col gap-8 w-full max-w-3xl mx-auto mt-10 px-6">
          <div className="flex flex-col gap-2">
            <label className=" border-[#FFFFFF] text-[#9C9C9C] font-medium text-lg absolute top-54 left-115">
              Task Title
            </label>

            <input
              type="text"
              value="Project Completion"
              className="border border-[#CCCCCC] rounded-md px-4 py-3 outline-none relative text-[#292929]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="border-[#FFFFFF] text-[#9C9C9C] font-medium text-lg absolute top-75 left-115 ">
              Description
            </label>

            <textarea
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra sit in aliquam pretium. Diam consectetur at tincidunt sed non tempus faucibus posuere eu. Nisi, luctus turpis pharetra quis nunc nulla. At lectus faucibus mattis ante eleifend ac arcu. Nibh morbi adipiscing leo tempus non dolor viverra cras. Sapien in nulla cum fermentum auctor lectus orci. Felis tincidunt lacus, fermentum laoreet sit sit. Lacus, orci pretium, etiam justo lacus. Amet, ultrices eget auctor euismod vitae diam."
              rows={5}
              className="border border-[#CCCCCC] rounded-md px-4 py-3 outline-none resize-none relative"
            ></textarea>
          </div>

          <div className="flex flex-col gap-2">
            {/* ============================= */}
            <div className="relative mb-14">
              <details className="group ">
                {/* Dropdown Button */}
                <summary className="list-none flex items-center justify-between border border-[#B8B6B6] active:border-[#974FD0] rounded-md pl-14 pt-5 pb-3 cursor-pointer bg-white pr-6 ">
                  <span className="text-[#CCCCCC] text-[22px] ">
                    Select Tag
                  </span>

                  {/* Arrow */}
                  <svg
                    className="w-10 h-7.5 text-[#9C9C9C] transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>

                {/* Dropdown Content */}
                <div className="absolute left-0 mt-1 w-full bg-[#FFFFFF] border-b border-x border-[#974FD0] rounded-md z-10">
                  <label className="flex items-center gap-3 px-14 py-3 hover:bg-[#CCCCCC] cursor-pointer">
                    <input
                      type="radio"
                      name="tag"
                      className="accent-purple-600"
                    />
                    <span className="text-[#9C9C9C] font-normal text-[22px] ">
                      Urgent
                    </span>
                  </label>

                  <label className="flex items-center gap-3 px-14 py-3 hover:bg-[#CCCCCC] cursor-pointer">
                    <input
                      type="radio"
                      name="tag"
                      className="accent-purple-600"
                    />
                    <span className="text-[#9C9C9C] font-normal text-[22px] ">
                      Important
                    </span>
                  </label>
                </div>
              </details>

              {/* Floating Label */}
              <label className="absolute left-12 -top-3.75 bg-white px-2 text-[#9C9C9C] text-2xl ">
                Tags
              </label>
            </div>
          </div>

          <button className="bg-[#974FD0] transition text-[#FAF9FB] font-semibold py-4 rounded-md">
            <Link to="/mytask"> Done</Link>
          </button>

          <div className="text-center mt-6">
            <a
              href="#"
              className="font-normal text-[26px] underline text-[#974FD0] cursor-pointer hover:text-[#6b3399] "
            >
              <Link to="/edittask"> Back To Top</Link>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTask;
