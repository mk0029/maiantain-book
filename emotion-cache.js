// src/providers/emotion-cache.js
import createCache from "@emotion/cache";

export const emotionCache = createCache({ key: "chakra" }); // The key should be unique.
