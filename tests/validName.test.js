const validName = require("../validName");

test("is valid name", () => {
    expect(validName("niko")).toBe(true);
});
