import React from "react";
import serviceDetailsImage from "../../assets/serviceImage/everyServices.png";
import CommonBanner from "../../components/common/CommonBanner";
import BrandingPart from "../HomePage/BrandingPart/BrandingPart";
import newImage from "../../assets/imgService11.png";
import Button from "../../components/common/Button";
import StatsPart from "../HomePage/StatsPart/StatsPart";
import { Link } from "react-router-dom";
const ServiceDetails = () => {
  return (
    <div>
      <CommonBanner
        title={"Single Services"}
        bread1={"Home"}
        bread2={"Services"}
        bannerImage={serviceDetailsImage}
      />
      <div className="mt-[110px] mx-auto max-w-[360px] md:max-w-[660px] lg:max-w-[1200px] mb-[50px]">
        <h1 className="lg:w-[751px] text-[30px] lg:text-[50px] text-center leading-[43px] mx-auto">
          We set the trends of modern living services.
        </h1>
        <p className="text-[#C16828] text-[25px] text-center mt-[48px]">
          It is a long established fact that a reader will be distracted by the
          of readable content of a page
        </p>
        <div className="grid grid-cols-2 gap-12 mt-[85px] mx-5 lg:mx-0">
          <p className="text-[22px] text-justify">
            when lookings at its layouts the points spriof using that it has a
            more less normal.A wonderful serenity has taken pgossession of my
            entire soul, like thesce sweet morndsings of sphring which I enjoy
            with my forwhole heart. I am alone, and feel the charm of
            excgistence in this spot, which was created for the bliss of souls
            like mine.
          </p>
          <p className="text-[22px] text-justify">
            when lookings at its layouts the points spriof using that it has a
            more less normal.A wonderful serenity has taken pgossession of my
            entire soul, like thesce sweet morndsings of sphring which I enjoy
            with my forwhole heart. I am alone, and feel the charm of
            excgistence in this spot, which was created for the bliss of souls
            like mine.
          </p>
        </div>
        <div className="mt-[160px]">
          <BrandingPart />
        </div>
        <div className="my-[100px]">
          <iframe
            className="rounded-[30px] lg:rounded-[60px] h-[400] lg:h-[580px] w-[360px] md:w-[660px] lg:w-[1200px]"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/OzUkvzyBttA?si=ElQPDNy99HPa5c4C"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] justify-center divide-x divide-[#CECECE]">
          <div>
            <h1 className="text-[50px]">Use of Interior</h1>
            <ol className="text-[22px] text-[#4D5053]">
              <li className="flex justify-normal items-start mt-2 gap-1">
                <h1 className="text-[20px] text-[#C16828]">1.</h1> We provide
                high quality design services.
              </li>
              <li className="flex justify-normal items-start mt-2 gap-1">
                <h1 className="text-[20px] text-[#C16828]">2.</h1> Project on
                time and Latest Design.
              </li>
              <li className="flex justify-normal items-start mt-2 gap-1">
                <h1 className="text-[20px] text-[#C16828]">3.</h1> Scientific
                Skills For getting a better result.
              </li>
              <li className="flex justify-normal items-start mt-2 gap-1">
                <h1 className="text-[20px] text-[#C16828]">4.</h1> Renovations
                Benefit of Service.
              </li>{" "}
              <li className="flex justify-normal items-start mt-2 gap-1">
                <h1 className="text-[20px] text-[#C16828]">5.</h1> We are
                confident about our projects.
              </li>
            </ol>
          </div>{" "}
          <div className="pl-[50px]">
            <h1 className="text-[50px] ">Make An Art</h1>
            <ol className="text-[22px] text-[#4D5053]">
              <li className="flex justify-normal items-start mt-2 gap-1">
                <h1 className="text-[20px] text-[#C16828]">1.</h1> We provide
                high quality design services.
              </li>
              <li className="flex justify-normal items-start mt-2 gap-1">
                <h1 className="text-[20px] text-[#C16828]">2.</h1> Project on
                time and Latest Design.
              </li>
              <li className="flex justify-normal items-start mt-2 gap-1">
                <h1 className="text-[20px] text-[#C16828]">3.</h1> Scientific
                Skills For getting a better result.
              </li>
              <li className="flex justify-normal items-start mt-2 gap-1">
                <h1 className="text-[20px] text-[#C16828]">4.</h1> Renovations
                Benefit of Service.
              </li>{" "}
              <li className="flex justify-normal items-start mt-2 gap-1">
                <h1 className="text-[20px] text-[#C16828]">5.</h1> We are
                confident about our projects.
              </li>
            </ol>
          </div>
        </div>
        <div className="mt-[130px] grid grid-cols-1 lg:grid-cols-2 gap-[50px]">
          <div className="h-[390px]">
            <img
              src={newImage}
              alt=""
              className="h-full w-full object-fill rounded-tr-[100px]"
            />
          </div>
          <div>
            <h1 className="text-[50px]">
              We love design.That's how we got here.
            </h1>
            <p className="text-[22px] text-[#4D5053]">
              It is a long established fact that a reader will be distracted by
              the of readable content .
            </p>
            <Link to="/projects">
              <Button title={"Our Portfolio"} />
            </Link>
          </div>
        </div>
      </div>
      <StatsPart />
    </div>
  );
};

export default ServiceDetails;
