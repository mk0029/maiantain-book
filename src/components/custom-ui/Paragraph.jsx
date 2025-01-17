import React from "react";

const Paragraph = ({
  children,
  fontWeight = 400,
  left,
  right,
  minSize = 14,
  maxSize = 16,
  responsiveBelow = 1024,
  className = "",
}) => {
  const fontClampSize = (maxSize % responsiveBelow) * 100;

  return (
    <h2
      style={{
        fontSize: `clamp(${minSize}px,${fontClampSize}vw,${maxSize}px)`,
        fontWeight: fontWeight,
      }}
      className={`leading-[140%] text-black ${
        left ? "text-left" : right ? "text-right" : "text-center"
      } ${className}`}>
      {children ||
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi qui eaque aut accusamus illo officiis, sequi ab. Atque, iste? Possimus."}
    </h2>
  );
};

export default Paragraph;
