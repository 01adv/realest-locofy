import PropertyCard from "./property-card";

const RentPropertiesContainer = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start py-[86px] px-0 gap-[39px] text-center text-21xl text-primary-800 font-body-regular-600">
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[100%] md:pl-[60px] md:pr-[60px] md:box-border">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Latest Properties of Rent
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 px-2.5 gap-[32px]">
          <PropertyCard
            imageDimensions="/property-image@2x.png"
            imageDimensionsText="/car@2x.png"
            imageDimensionsArray="/bathtub@2x.png"
            imageDimensionsText2="/arrowsout@2x.png"
            imageDimensionsTextArray="/ellipse-1@2x.png"
            imageDimensionsTextArray2="/sharenetwork@2x.png"
            imageDimensionsTextArray3="/heart@2x.png"
            imageDimensionsTextArray4="/plus@2x.png"
            propWidth="unset"
            propFlex="1"
            propMinWidth="355px"
            propMaxWidth="400px"
          />
          <PropertyCard
            imageDimensions="/property-image@2x.png"
            imageDimensionsText="/car@2x.png"
            imageDimensionsArray="/bathtub@2x.png"
            imageDimensionsText2="/arrowsout@2x.png"
            imageDimensionsTextArray="/ellipse-1@2x.png"
            imageDimensionsTextArray2="/sharenetwork@2x.png"
            imageDimensionsTextArray3="/heart@2x.png"
            imageDimensionsTextArray4="/plus@2x.png"
            propWidth="unset"
            propFlex="1"
            propMinWidth="355px"
            propMaxWidth="400px"
          />
          <PropertyCard
            imageDimensions="/property-image@2x.png"
            imageDimensionsText="/car@2x.png"
            imageDimensionsArray="/bathtub@2x.png"
            imageDimensionsText2="/arrowsout@2x.png"
            imageDimensionsTextArray="/ellipse-1@2x.png"
            imageDimensionsTextArray2="/sharenetwork@2x.png"
            imageDimensionsTextArray3="/heart@2x.png"
            imageDimensionsTextArray4="/plus@2x.png"
            propWidth="unset"
            propFlex="1"
            propMinWidth="355px"
            propMaxWidth="400px"
          />
          <PropertyCard
            imageDimensions="/property-image@2x.png"
            imageDimensionsText="/car@2x.png"
            imageDimensionsArray="/bathtub@2x.png"
            imageDimensionsText2="/arrowsout@2x.png"
            imageDimensionsTextArray="/ellipse-1@2x.png"
            imageDimensionsTextArray2="/sharenetwork@2x.png"
            imageDimensionsTextArray3="/heart@2x.png"
            imageDimensionsTextArray4="/plus@2x.png"
            propWidth="unset"
            propFlex="1"
            propMinWidth="355px"
            propMaxWidth="400px"
          />
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded flex flex-row items-start justify-start hover:bg-royalblue sm:max-w-full">
        <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
          Load more listing
        </div>
      </button>
    </div>
  );
};

export default RentPropertiesContainer;
