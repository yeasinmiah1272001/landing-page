import { blog } from "@/constants";
import Container from "./Container";
import Image from "next/image";
import { FaLocationPin, FaStar } from "react-icons/fa6";

const PopularPlace = () => {
  return (
    <Container>
      <h1 className="text-center text-4xl font-bodyFont mb-6   mx-auto border-black">
        Popular Place
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {blog.map((item) => (
          <div key={item.id} className="space-y-2 shadow-lg shadow-gray-300">
            <div className="relative overflow-hidden transform group">
              <Image
                className="h-60 w-full group-hover:scale-110 transition-transform duration-300"
                src={item.imageURL}
                alt="image"
                height={400}
                width={400}
              />
              <span className="absolute top-3 bg-yellowColor/80 p-1 rounded-md hover:bg-black hover:text-white duration-300 px-6 left-3 ">
                {item.day} Days
              </span>
            </div>
            <div className="p-3 space-y-2">
              <div className="flex justify-between">
                <button className="bg-primaryColor p-1 px-3 rounded-md">
                  {item.price} BDT
                </button>
                <button className="bg-yellowColor flex items-center gap-2 p-1 px-8 rounded-md">
                  {item.rating} <FaStar />
                </button>
              </div>
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p>{item.description}</p>
              <p className="flex items-center gap-2">
                <FaLocationPin /> {item.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default PopularPlace;
