import Image from "next/image";
import banner from "../assets/tour.jpg";
import Container from "./Container";

const TourBanner = () => {
  return (
    <Container className="w-full bg-[#DCE0E6]">
      <Image
        className="w-full h-80"
        src={banner}
        alt="image"
        width={500}
        height={500}
      />
    </Container>
  );
};

export default TourBanner;
