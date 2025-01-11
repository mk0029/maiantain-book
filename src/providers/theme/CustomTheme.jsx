"use client";
import { extendTheme } from "@chakra-ui/react";
import Heading from "./components/heading";
import Paragraph from "./components/paragraph"; // Text renamed to Paragraph
import Link from "./components/link";
import Button from "./components/button";

const CustomTheme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  components: {
    Heading,
    Text: Paragraph, // Chakra UI uses `Text` component
    Link,
    Button,
  },
});

export default CustomTheme;
