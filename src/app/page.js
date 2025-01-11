"use client";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Checkbox,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import styles from "./page.module.css";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className={styles.page}>
      <Button variant="solid">Hello</Button>
      <Button variant="solid" onClick={toggleColorMode}>
        Switch to {colorMode === "light" ? "dark" : "light"} mode
      </Button>
      <Badge variant="solid" size="xl">
        CSS
      </Badge>
      <Box sx={{ direction: "row", display: "flex", gap: "14px" }}>
        {" "}
        <Badge sx={{ px: "16px", py: "10px", borderRadius: "10px" }}>
          HTML
        </Badge>
        <Badge sx={{ px: "16px", py: "10px", borderRadius: "10px" }}>JS</Badge>
        <Badge sx={{ px: "16px", py: "10px", borderRadius: "10px" }}>
          BOOTSTRAP
        </Badge>
        <Badge sx={{ px: "16px", py: "10px", borderRadius: "10px" }}>
          TAILWIND
        </Badge>
      </Box>
      <Avatar name="Gourav Bishno" size="xs" />
      <Stack spacing={[1, 5]} direction={["column", "row"]}>
        <Checkbox size="sm" colorScheme="red">
          Checkbox
        </Checkbox>
        <Checkbox size="md" colorScheme="green" defaultChecked>
          Checkbox
        </Checkbox>
        <Checkbox size="lg" colorScheme="orange" defaultChecked>
          Checkbox
        </Checkbox>
      </Stack>
    </div>
  );
}
