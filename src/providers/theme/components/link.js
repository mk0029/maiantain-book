const Link = {
  baseStyle: {
    color: "#000",
    textDecoration: "underline",
    _hover: {
      textDecoration: "none",
      color: "blue.700",
    },
  },
  variants: {
    button: {
      px: 4,
      py: 2,
      backgroundColor: "blue.500",
      color: "white",
      borderRadius: "md",
      _hover: {
        backgroundColor: "blue.600",
      },
    },
  },
  defaultProps: {
    variant: "button",
  },
};

export default Link;
