const Card = ({ heading, text }) => {
  return (
    <div className="bg-slate-300 dark:bg-[#222A32] rounded-xl p-4 text-center dark:text-white">
      <h3 className="font-bold text-[20px] md:text-[24px] mb-2">{heading}</h3>
      <p className="text-[13px] md:text-[14px] leading-5">{text}</p>
    </div>
  );
};

function FeaturesCardSection() {
  return (
    <div>
      <h2 className="text-[32px] md:text-[40px] font-bold text-[#111920] dark:text-white text-center leading-[46px] mb-8">
        Izzy can assist you with
        <br />
        many{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0CC8E8] to-[#2DEEAA]">
          disbalities
        </span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 px-10 md:px-32">
        <Card
          heading="Stammering"
          text="Nec pharetra nam suspendisse sed ipsum non ultrices interdum elementum. Purus consectetur ultrices orci congue."
        />
        <Card
          heading="Pronounciation"
          text="Nec pharetra nam suspendisse sed ipsum non ultrices interdum elementum. Purus consectetur ultrices orci congue."
        />
        <Card
          heading="Stammering"
          text="Nec pharetra nam suspendisse sed ipsum non ultrices interdum elementum. Purus consectetur ultrices orci congue."
        />
        <Card
          heading="Pronounciation"
          text="Nec pharetra nam suspendisse sed ipsum non ultrices interdum elementum. Purus consectetur ultrices orci congue."
        />
      </div>
    </div>
  );
}

export default FeaturesCardSection;
