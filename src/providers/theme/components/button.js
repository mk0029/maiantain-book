const Button = {
  baseStyle: {
    fontWeight: "bold",
    borderRadius: "md",
  },
  variants: {
    solid: {
      bg: "#000",
      color: "white",
      _hover: {
        bg: "blue.100",
      },
    },
    outline: {
      border: "2px solid",
      borderColor: "blue.500",
      color: "blue.500",
      _hover: {
        bg: "blue.500",
        color: "white",
      },
    },
  },
  defaultProps: {
    variant: "solid",
  },
};

export default Button;
