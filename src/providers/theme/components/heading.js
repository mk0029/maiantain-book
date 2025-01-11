const Heading = {
  baseStyle: {
    fontWeight: "bold",
    lineHeight: "1.2",
    color: "teal.500",
  },
  variants: {
    primary: {
      fontSize: "4xl",
    },
    secondary: {
      fontSize: "2xl",
      color: "gray.700",
    },
  },
  defaultProps: {
    variant: "primary",
  },
};

export default Heading;
