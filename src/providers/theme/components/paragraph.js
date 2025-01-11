const Paragraph = {
  baseStyle: {
    fontSize: "md",
    lineHeight: "tall",
    color: "gray.600",
  },
  variants: {
    subtle: {
      color: "gray.400",
    },
    emphasized: {
      color: "black",
      fontWeight: "semibold",
    },
  },
  defaultProps: {
    variant: "subtle",
  },
};

export default Paragraph;
