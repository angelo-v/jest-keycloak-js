import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  detectOpenHandles: true,
  forceExit: true,
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    "^.+\\.[tj]s$": [
      "ts-jest",
      {
      },
    ],
  },
  cacheDirectory: ".jest-cache",
  transformIgnorePatterns: ["node_modules/(?!(keycloak-js))"],
};

export default config;