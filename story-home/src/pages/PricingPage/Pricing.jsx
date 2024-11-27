import React from "react";
import CommonBanner from "../../components/common/CommonBanner";
import pricingBanner from "../../assets/pricing.png";
import { PricingData } from "../../components/common/data";
import Button from "../../components/common/Button";
const Pricing = () => {
  return (
    <div>
      <CommonBanner
        title={"Pricing& Plan"}
        bannerImage={pricingBanner}
        bread1={"Home"}
        bread2={"Pricing"}
      />
      <div className="mt-[50px] lg:my-[100px] max-w-[360px] md:max-w-[720px] lg:max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 md:gap-3 lg:gap-10">
        {PricingData?.map((pricedata, i) => {
          return (
            <div
              class="divide-y divide-gray-200 text-center drop-shadow-md hover:bg-[#f5e3d88a] hover:rounded-[15px] group hover:text-[#C16828]"
              key={i}>
              <div>
                <h1 class="text-[27px] mt-8 font-normal">{pricedata.title}</h1>
                <h1 class="text-[85px]">
                  <span className="text-[25px]">$</span>
                  {pricedata.price}
                  <span class="text-[25px] font-normal">/month</span>
                </h1>
              </div>

              <div class="px-6 pt-6 pb-8">
                <h3 class="text-[20px] font-medium">What's included</h3>
                <ul class="mt-6 space-y-3 text-[18px] text-[#4D5053] hover:text-[#C16828] font-normal">
                  {pricedata.services?.map((service, i) => {
                    return <li key={i}>{service.name}</li>;
                  })}
                </ul>
                <div className="flex justify-center items-center mt-10">
                  <Button title={"Get Started"} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
