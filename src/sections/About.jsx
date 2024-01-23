import Button from "../components/Button";

function AboutSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 text-center md:text-left w-full gap-24 md:gap-32 my-24 md:my-32 px-8 md:px-32">
      {/* <div className="">
        <h2 className="text-[40px] dark:text-white capitalize leading-[48px] font-bold">
          Revolutionizing Design with AI
        </h2>
        <p className="my-4 text-[#111920] dark:text-white text-[16px]">
          Victor AI is revolutionizing the world of shoe and apparel design by
          blending advanced AI with real-time fashion trends. Our platform
          empowers designers, creatives, and brand strategists to generate
          innovative designs, perfectly aligned with current market demands.
          Experience the synergy of creativity and data-driven insights, where
          every design is a step into the future of fashion.
        </p>
        <Button>Learn More</Button>
      </div>
      <img className="w-full" src="/about-1.png" /> */}

      <img className="w-full" src="/about-2.png" />
      <div className="">
        <h2 className="text-[40px] dark:text-white capitalize leading-[48px] font-bold">
          We Build Products That Help Humanity
        </h2>
        <p className="my-4 text-[#111920] dark:text-white text-[16px]">
          Nec pharetra nam suspendisse sed ipsum non ultrices interdum
          elementum. Purus consectetur ultrices orci congue. Mi mi diam morbi
          malesuada id ac etiam viverra hendrerit. Auctor aliquet scelerisque
          nunc sit integer aliquam lacus risus viverra.
        </p>
      </div>

      <div className="">
        <h2 className="text-[40px] dark:text-white capitalize leading-[48px] font-bold">
          Check our Izzy API
        </h2>
        <p className="my-4 text-[#111920] dark:text-white text-[16px]">
          Nec pharetra nam suspendisse sed ipsum non ultrices interdum
          elementum. Purus consectetur ultrices orci congue. Mi mi diam morbi
          malesuada id ac etiam viverra hendrerit.
        </p>
        <Button arrow="true">View API</Button>
      </div>
      <img className="w-full" src="/about-3.png" />
    </div>
  );
}

export default AboutSection;
