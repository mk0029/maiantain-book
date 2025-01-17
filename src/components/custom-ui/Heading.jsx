import React from "react";

const Heading = ({
  children,
  fontWeight = 700,
  left,
  right,
  minSize = 24,
  maxSize = 34,
  responsiveBelow = 1440,
  className = "",
}) => {
  const fontClampSize = (maxSize / responsiveBelow) * 100;

  return (
    <h2
      style={{
        fontSize: `clamp(${minSize}px,${fontClampSize}vw,${maxSize}px)`,
        fontWeight: fontWeight,
      }}
      className={` leading-[120%] text-black ${
        left ? "text-left" : right ? "text-right" : "text-center"
      } ${className}`}>
      {children || "Hello World"}
    </h2>
  );
};

export default Heading;
