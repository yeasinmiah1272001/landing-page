import Container from "./Container";
import img1 from "../assets/hero-banner.png";
import Image from "next/image";
import PrimaryBtn from "./PrimaryBtn";
import img2 from "../assets/shape-1.png";

const TouristAgency = () => {
  return (
    <Container className="grid md:grid-cols-2 items-center gap-10 w-full py-10 px-5 mx-auto bg-gray-50 ">
      {/* Left Side */}
      <div className="space-y-6 md:pl-10 ">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-800">
          Trusted <span className="text-blue-600">Travel Agency</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          I travel not to go anywhere, but to go. I travel for travel's sake,
          the{" "}
          <span className="text-gray-900 font-semibold">
            great affair is to move.
          </span>
        </p>
        <div className="flex gap-4">
          <PrimaryBtn />
          <PrimaryBtn />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-5">
        {/* Left Spinning Image */}

        {/* Main Banner Image */}
        <Image
          src={img1}
          alt="Travel Agency Banner"
          height={500}
          width={500}
          className=""
        />

        {/* Right Spinning Image */}
        <Image
          className="animate-spin h-16 w-16 md:h-20 md:w-20 rounded-full "
          src={img2}
          alt="Spinning Decorative Image"
        />
      </div>
    </Container>
  );
};

export default TouristAgency;
