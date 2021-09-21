import "jest-extended";

import { hash } from "./index";

test("#hash", () => {
  expect(hash("a").toString("hex")).toStrictEqual(
    "8928aae63c84d87ea098564d1e03ad813f107add474e56aedd286349c0c03ea4",
  );
  expect(hash(Buffer.from("a")).toString("hex")).toStrictEqual(
    "8928aae63c84d87ea098564d1e03ad813f107add474e56aedd286349c0c03ea4",
  );
  expect(hash([Buffer.from("a")]).toString("hex")).toStrictEqual(
    "8928aae63c84d87ea098564d1e03ad813f107add474e56aedd286349c0c03ea4",
  );
});
