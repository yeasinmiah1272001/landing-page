import React from "react";
import Container from "./Container";
import Image from "next/image";
import banner1 from "../assets/about-banner.png";
import { TbLocation } from "react-icons/tb";
import { IoBagRemoveOutline } from "react-icons/io5";
import { FiUmbrella } from "react-icons/fi";
import PrimaryBtn from "./PrimaryBtn";

const Explore = () => {
  return (
    <Container className="py-16">
      <div className="flex flex-col justify-between items-center md:flex-row">
        {/* left */}
        <div className="">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold w-96">
              Explore all tour of the world with us.
            </h1>
            <p className="w-96">
              Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words which don't
              look even slightly believable.
            </p>
          </div>
          <div className="flex flex-col space-y-10">
            <div className="mt-4">
              <div className="flex gap-2 items-center">
                <span className="bg-primaryColor p-4 rounded-full">
                  <TbLocation className="text-white border border-1 border-white p-1 rounded-full text-2xl" />
                </span>
                <div>
                  <h1 className="text-2xl font-semibold">Tour guide</h1>
                  <p>
                    Lorem Ipsum available, but the majority have suffered
                    alteration in some.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex gap-2 items-center">
                <span className="bg-primaryColor p-4 rounded-full">
                  <IoBagRemoveOutline className="text-white border border-1 border-white p-1 rounded-full text-2xl" />
                </span>
                <div>
                  <h1 className="text-2xl font-semibold">Tour guide</h1>
                  <p>
                    Lorem Ipsum available, but the majority have suffered
                    alteration in some.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex gap-2 items-center">
                <span className="bg-primaryColor p-4 rounded-full">
                  <FiUmbrella className="text-white border border-1 border-white p-1 rounded-full text-2xl" />
                </span>
                <div>
                  <h1 className="text-2xl font-semibold">Tour guide</h1>
                  <p>
                    Lorem Ipsum available, but the majority have suffered
                    alteration in some.
                  </p>
                </div>
              </div>
            </div>
            <PrimaryBtn className=" bg-primaryColor w-1/3 text-center" />
          </div>
        </div>
        {/* right */}
        <div>
          <Image
            className="w-full"
            src={banner1}
            alt="image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </Container>
  );
};

export default Explore;
