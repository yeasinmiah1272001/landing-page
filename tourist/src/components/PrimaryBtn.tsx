import React from "react";
import { twMerge } from "tailwind-merge";
interface Props {
  className: string;
}

const PrimaryBtn = ({ className }: Props) => {
  return (
    <div
      className={twMerge(
        "bg-white p-3 rounded-md  border border-1 border-gray-600 hover:bg-black hover:text-white duration-300",
        className
      )}
    >
      <button>Booking Now</button>
    </div>
  );
};

export default PrimaryBtn;
