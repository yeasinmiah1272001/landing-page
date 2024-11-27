import React from "react";
import Container from "./Container";
import Image from "next/image";
import img1 from "../assets/destination-1.jpg";
import img2 from "../assets/destination-2.jpg";
import img3 from "../assets/destination-3.jpg";
import img4 from "../assets/destination-4.jpg";
import img5 from "../assets/destination-5.jpg";
import img22 from "../assets/shape-1.png";
import img23 from "../assets/shape-3 (1).png";

const Choose = () => {
  return (
    <Container className="py-10 bg-gray-50 ">
      <h1 className="text-center text-4xl font-bodyFont mb-6   mx-auto border-black">
        Choose Your Place
      </h1>
      <div className="flex w-full flex-col md:flex-row items-center justify-center gap-6">
        {/* First Image */}
        <div className="group w-full relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition">
          <Image
            className="transform w-full scale-100 group-hover:scale-110 transition-transform duration-500 ease-in-out"
            src={img1}
            alt="Scenic Landscape"
            height={500}
            width={500}
          />
          <Image
            className="animate-spin absolute top-0 left-0 h-16 w-16 md:h-20 md:w-20 rounded-full "
            src={img22}
            alt="Spinning Decorative Image"
          />
          <span className="absolute bottom-3  left-4 font-semibold text-2xl text-white">
            Maldives
          </span>
        </div>

        {/* Second Image */}
        <div className="group w-full relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition">
          <Image
            className="transform scale-100 w-full group-hover:scale-110 transition-transform duration-500 ease-in-out"
            src={img2}
            alt="Beautiful Destination"
            height={500}
            width={500}
          />
          <Image
            className="animate-spin absolute top-0 right-0 h-16 w-16 md:h-20 md:w-20 rounded-full "
            src={img23}
            alt="Spinning Decorative Image"
          />
          <span className="absolute bottom-3  left-4 font-semibold text-2xl text-white">
            Thailand
          </span>
        </div>
      </div>
      <div className="flex mt-5 items-center justify-center gap-5 flex-col md:flex-row">
        <div className="group overflow-hidden transition relative">
          <Image
            className="group-hover:scale-110   transition-transform  transform duration-300"
            src={img3}
            alt="image"
            height={400}
            width={400}
          />
          <span className="absolute bottom-3 left-4 font-semibold text-2xl text-black">
            Malaysia
          </span>
        </div>
        <div className="group relative transition overflow-hidden">
          <Image
            className="group-hover:scale-110 transition-transform duration-300"
            src={img4}
            alt="image"
            height={400}
            width={400}
          />
          <span className="absolute bottom-3 left-4 font-semibold text-2xl text-black">
            Maldip
          </span>
        </div>
        <div className="group relative overflow-hidden">
          <Image
            className="group-hover:scale-110  transition-transform duration-300"
            src={img5}
            alt="image"
            height={400}
            width={400}
          />
          <span className="absolute bottom-3 left-4 font-semibold text-2xl text-white">
            Indonesia
          </span>
        </div>
      </div>
    </Container>
  );
};

export default Choose;
