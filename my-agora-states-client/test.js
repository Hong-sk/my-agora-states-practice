// const { getDiscussion } = require("./src/App");
import { getDiscussion } from "./src/App";

describe("Testing getDiscussion method gets validate discussions", () => {
  it("check getDiscussions method", () => {
    let res = getDiscussion();
    expect(typeOf(res)).toBe("object");
  });
});
