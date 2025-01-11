"use client";
import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};
const themeMode = extendTheme({ config });

export default themeMode;
