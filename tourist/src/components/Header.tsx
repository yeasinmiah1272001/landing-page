import { navigation } from "@/constants";
import Container from "./Container";
import PrimaryBtn from "./PrimaryBtn";

const Header = () => {
  return (
    <div className="bg-primaryColor p-6">
      <Container className=" flex items-center justify-between">
        <h1 className="text-3xl font-semibold  text-white hover:text-gray-300 duration-300 ">
          Tourist
        </h1>
        <div className=" items-center sm:flex  hidden  justify-center gap-16 font-medium text-white ">
          {navigation.map((item, index) => (
            <ul key={index} className="hover:underline duration-300 text-xl">
              <li>{item.title}</li>
            </ul>
          ))}
        </div>
        <PrimaryBtn />
      </Container>
    </div>
  );
};

export default Header;
