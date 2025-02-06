import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest/presets/default-esm",
  transform: {
    "^.+\\.[tj]s$": [
      "ts-jest",
      {
        useESM: true
      }
    ],
  },
  cacheDirectory: ".jest-cache",
  extensionsToTreatAsEsm: [".ts"],
  transformIgnorePatterns: ["node_modules/(?!(keycloak-js))"]
};

export default config;