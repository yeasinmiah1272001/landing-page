import React from "react";
import servicesBanner from "../../assets/serviceBanner.png";
import CommonBanner from "../../components/common/CommonBanner";
import LastPart from "../HomePage/LastPart/LastPart";
import { MdArrowForward } from "react-icons/md";
import SectionHeader from "../../components/common/SectionHeader";
import img1 from "../../assets/serviceImage/1.png";
import img2 from "../../assets/serviceImage/2.png";
import img3 from "../../assets/serviceImage/3.png";
import img4 from "../../assets/serviceImage/4.png";
import { serviceData } from "../../components/common/data";
import ServiceCard from "../../components/common/ServiceCard";
const ServicesPage = () => {
  return (
    <div>
      <CommonBanner
        title={"Services"}
        bannerImage={servicesBanner}
        bread1={"Home"}
        bread2={"Services"}
      />
      <div className="my-[60px] lg:my-[95px] mx-auto max-w-[360px] md:max-w-[720px] lg:max-w-[1150px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 justify-items-center items-center gap-4 lg:gap-11">
        {serviceData?.map((e, i) => (
          <ServiceCard e={e} key={i} />
        ))}
      </div>
      <div className="max-w-[1200px] mx-auto md:mt-32">
        {" "}
        <SectionHeader
          title={"How We Work"}
          paragraph={
            "It is a long established fact  will be distracted.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          }
        />
      </div>
      <div className="overflow-x-hidden mx-auto md:max-w-[700px] lg:max-w-[1200px] mt-[130px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-[70px] lg:gap-[104px] items-end">
          <div className="md:h-[380px] lg:h-[480px] relative">
            {" "}
            <h1 className="text-[90px] text-[#d6763e] absolute md:top-[-28px] lg:top-0 top-[-24px] right-0 md:right-[-364px] lg:right-[-600px]">
              01
            </h1>
            <img
              src={img1}
              alt=""
              className="h-full w-full rounded-bl-[360px] rounded-tr-[300px] object-fill"
            />
          </div>
          <div className="mb-[60px] md:w-[356px] lg:w-[456px]">
            <h1 className="text-[35px]">Concept & Details</h1>
            <p className="text-[22px] mt-[10px]">
              It is a long established fact will be distracted. Lorem Ipsum is
              simply dummy from text of the and typesetting indufstry.{" "}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-[70px] lg:gap-[104px] items-end mt-[120px]">
          <div className="mb-[10px] lg:mb-[60px] md:w-[356px] lg:w-[456px]">
            <h1 className="text-[35px]">Idea for Work</h1>
            <p className="text-[22px] mt-[10px]">
              It is a long established fact will be distracted. Lorem Ipsum is
              simply dummy from text of the and typesetting indufstry.
            </p>
          </div>{" "}
          <div className="md:h-[380px] lg:h-[480px] relative">
            {" "}
            <h1 className="text-[90px] text-[#d6763e] absolute top-[187px] md:top-[-28px] lg:top-0 md:left-[-387px] lg:left-[-650px]">
              02
            </h1>
            <img
              src={img2}
              alt=""
              className="h-full w-full rounded-bl-[360px] rounded-tr-[300px] object-fill"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  md:gap-[70px] lg:gap-[104px] items-end mt-[120px]">
          <div className="md:h-[380px] lg:h-[480px] relative">
            {" "}
            <h1 className="text-[90px] text-[#d6763e] absolute md:top-[-28px] lg:top-0 top-[-24px] right-0 md:right-[-364px] lg:right-[-600px]">
              03
            </h1>
            <img
              src={img3}
              alt=""
              className="h-full w-full rounded-bl-[360px] rounded-tr-[300px] object-fill"
            />
          </div>
          <div className="mb-[60px] md:w-[350px] lg:w-[456px]">
            <h1 className="text-[35px]">Design</h1>
            <p className="text-[22px] mt-[10px]">
              It is a long established fact will be distracted. Lorem Ipsum is
              simply dummy from text of the and typesetting indufstry.{" "}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-[70px] lg:gap-[104px] items-end mt-[120px] mb-[150px]">
          <div className="mb-[60px] md:w-[356px] lg:w-[456px]">
            <h1 className="text-[35px]">Perfection</h1>
            <p className="text-[22px] mt-[10px]">
              It is a long established fact will be distracted. Lorem Ipsum is
              simply dummy from text of the and typesetting indufstry.{" "}
            </p>
          </div>
          <div className="md:h-[380px] lg:h-[480px] relative">
            {" "}
            <h1 className="text-[90px] text-[#d6763e] absolute top-[187px] md:top-[-28px] lg:top-0 md:left-[-387px] lg:left-[-650px]">
              04
            </h1>
            <img
              src={img4}
              alt=""
              className="h-full w-full rounded-bl-[360px] rounded-tr-[300px] object-fill"
            />
          </div>
        </div>
      </div>
      <LastPart />
    </div>
  );
};

export default ServicesPage;
