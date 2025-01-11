"use client";
import { CacheProvider } from "@emotion/react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import themeMode from "@/providers/theme/color-mode/theme"; // Import theme
import CustomTheme from "@/providers/theme/CustomTheme";
import "./globals.css";
import { emotionCache } from "../../emotion-cache";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="theme-custom theme-dark"></div>

        <ColorModeScript
          initialColorMode={themeMode?.config?.initialColorMode}
        />
        {/* Pass the emotion cache as the value */}
        <CacheProvider value={emotionCache}>
          <ChakraProvider theme={CustomTheme}>{children}</ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
