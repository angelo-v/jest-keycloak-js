# ts-jest does not resolve ESM module with `exports`

## ✅ Solved

The problem described here was solved with ts-test `29.3.0` and setting `isolatedModules: true` in `tsconfig-json`. If you want to reproduce the issue as described checkout the `bug` tag.

## The problem

Jest produces an error when running the test in this repo without cache.

## Steps to reproduce

1. `npm ci`
2. `npx jest` (green test ✅)
3. `npx jest --no-cache` (error ❌)

## Error details

```shell
▶ npx jest --no-cache
 FAIL  src/keycloak.spec.ts
  ● Test suite failed to run

    src/keycloak.spec.ts:2:30 - error TS2307: Cannot find module 'keycloak-js' or its corresponding type declarations.

    2 import KeycloakService from  'keycloak-js'
```

## Expected behaviour

1. `npm ci`
2. `npx jest` (green test ✅)
3. `npx jest --no-cache` (green test ✅)

## Background information

`keycloak-js` is in ESM format and makes use `exports` field in it's `package.json`. I could reproduce the same error with a hand-crafted module that uses this patterns, but not with modules that export a top level `index.js` / `index.d.ts` without using the `exports` field. 