import { useTextHover } from "@hooks/useTextHover";

const renderText = (text, className, baseWeight = 400) => {
  return [...text].map((char, index) => (
    <span
      key={index}
      className={className}
      style={{ fontVariationSettings: `"wght" ${baseWeight}` }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  ));
};

const Welcome = () => {
  const { ref: subtitleRef } = useTextHover("subtitle");
  const { ref: titleRef } = useTextHover("title");

  return (
    <section id="welcome">
      <p ref={subtitleRef}>
        {/* {renderText(
          "Hey, I'm Gyanendra! Welcome to my portfolio.",
          "text-3xl font-bold font-georama",
          300
        )} */}
      </p>
      <h1 ref={titleRef}>
        {renderText("Gyanendra Yadav", "text-9xl  font-georama", 500)}
      </h1>

      <div className="small-screen">
        <p>
          This portfolio is designed for desktop view. Please visit on a larger
          screen for the best experience.
        </p>
      </div>
    </section>
  );
};

export default Welcome;
