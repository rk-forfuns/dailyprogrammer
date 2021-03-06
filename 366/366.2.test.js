const { funnel2, funnel2bonus, funnel2bonus2 } = require("./366.2");

describe("366.2", () => {
  it("should pass examples", async () => {
    expect(await funnel2("gnash")).toBe(4);
    expect(await funnel2("princesses")).toBe(9);
    expect(await funnel2("turntables")).toBe(5);
    expect(await funnel2("implosive")).toBe(1);
    expect(await funnel2("programmer")).toBe(2);
  });

  it("should pass bonus 1", async () => {
    const result = await funnel2bonus();
    expect(result).toBe("complecting");
  });

  it("should pass a bonus 2 (depth = 1 should find 2 words)", async () => {
    const result = await funnel2bonus2(1);
    expect(result).toEqual(["contradictorinesses", "preformationists"]);
  });

  it("should pass a bonus 2 (depth = 2 should find 3 words)", async () => {
    const result = await funnel2bonus2(2);
    expect(result).toEqual([
      "contradictorinesses",
      "noncooperationists",
      "preformationists"
    ]);
  });
});
