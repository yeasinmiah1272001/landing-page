import React from "react";
import estimateImg from "../../../assets/new.png";
import estimate1Img from "../../../assets/estimate1Img.png";
import Button from "../../../components/common/Button";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const EstimatePart = () => {
  return (
    <>
      <div className="max-w-[360px] md:max-w-[720px] md:h-[380px] lg:max-w-[1200px] h-[310px] lg:h-[650px] mx-auto my-[30px] lg:my-[100px] text-white relative">
        <div className="max-w-[360px] md:max-w-[720px] md:h-[380px] lg:max-w-[1200px] h-[340px] lg:h-[650px] mx-auto mt-[70px] text-white rounded-tr-[200px] relative bg-gradient-to-tl from-gray-500 to-[#895531] md:hidden lg:hidden">
          <img
            src={estimate1Img}
            alt=""
            className="h-full w-full object-fill rounded-tr-[200px] absolute mix-blend-overlay"
          />
        </div>
        <img
          src={estimateImg}
          alt=""
          className="h-full w-full object-fill absolute hidden md:flex lg:flex"
        />
        <div className="absolute top-5 left-5 md:top-10 md:left-8 lg:top-28 lg:left-[80px]">
          <h1 className="text-[27px] lg:text-[65px] font-normal leading-8 lg:leading-[60px] w-[300px] lg:w-[700px]">
            We create <br />
            art for modern life
          </h1>
          <p className="text-[18px] lg:text-[22px] md:leading-6 lg:leading-[30px] font-medium w-[340px] lg:w-[447px] mt-3">
            It is a long established fact that a reader will be distracted by
            the of readable of a page when lookings at its layouts the points of
            using more-or-less normal.
          </p>

          <div className="flex gap-3 mt-2 lg:mt-6 items-center">
            <div className="h-[50px] w-[50px] lg:h-[70px] lg:w-[70px] rounded-full flex justify-center items-center bg-white hover:bg-[#C16828] text-[#C16828] hover:text-white text-xl lg:mx-0 drop-shadow-xl overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out">
              <IoCallOutline className="h-[32px] w-[32px] " />
            </div>
            <div>
              <p className="text-[18px] lg:text-[22px] font-semibold">
                +8012345678
              </p>
              <p className="text-[18px] lg:text-[22px] mt-[-5px]">
                Call Us Anytime
              </p>
            </div>
          </div>
          <Link to={"/pricing"}>
            {" "}
            <Button title={"Get Free Estimate"} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default EstimatePart;
