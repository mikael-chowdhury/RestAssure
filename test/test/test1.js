const ra = require("../../dist");

before(() => {
  ra.useServer("http://localhost:80");
});

describe("some tests", () => {
  it("successfully pings the server", async () => {
    await ra.get("/test").expect("status").to.be(200).done();
  });

  it("returns the new age of a user after 3 years", async () => {
    await ra.post("/new/user/age", { age: 28 }).expect("status").to.be(200).expect("data.age").to.be(31).done();
  });
});
