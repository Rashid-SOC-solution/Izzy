import phoneMockup from "../Assets/phone-mockup-2.png";

import Svg1 from "../Assets/features-1.svg";
import Svg2 from "../Assets/features-2.svg";
import Svg3 from "../Assets/features-3.svg";

const Tile = (props) => {
  return (
    <div className="">
      <div className="flex items-center mb-2">
        <img src={props.icon} alt="icon" />
        <h3 className="ml-2 text-[24px] font-bold">{props.heading}</h3>
      </div>
      <p className="leading-snug">{props.text}</p>
    </div>
  );
};

function FeaturesSection() {
  return (
    <div className="relative w-full md:bg-slate-300 md:dark:bg-[#222A32] text-[#111920] dark:text-white mt-20 md:mt-48 block md:flex rounded-2xl max-w-5xl mx-auto py-5 md:py-0">
      <img
        className="block md:absolute left-10 bottom-10 mx-auto md:mx-0 mt-3 md:mt-0"
        src={phoneMockup}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 p-12 md:p-16 bg-slate-300 dark:bg-[#222A32] mt-10 md:mt-0 rounded-2xl md:rounded-none">
        <div></div>
        <Tile
          heading="Assessment"
          text="Nec pharetra nam suspendisse sed ipsum non ultrices interdum elementum. Purus consectetur ultrices orci congue."
          icon={Svg3}
        />
        <Tile
          heading="Exercises"
          text="Nec pharetra nam suspendisse sed ipsum non ultrices interdum elementum. Purus consectetur ultrices orci congue."
          icon={Svg2}
        />
        <div></div>
        <Tile
          heading="Reports"
          text="Nec pharetra nam suspendisse sed ipsum non ultrices interdum elementum. Purus consectetur ultrices orci congue."
          icon={Svg1}
        />
        <Tile
          heading="Reports"
          text="Nec pharetra nam suspendisse sed ipsum non ultrices interdum elementum. Purus consectetur ultrices orci congue."
          icon={Svg1}
        />
      </div>
    </div>
  );
}

export default FeaturesSection;
