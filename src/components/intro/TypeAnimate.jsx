import { TypeAnimation } from "react-type-animation";

const TypeAnimate = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Front End Developer",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Back End Developer",
        1000,
        "Full Stack Developer",
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};

export default TypeAnimate;
