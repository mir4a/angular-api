describe("Login Flow", function() {
  beforeEach(function() {
    return browser().navigateTo("/");
  });
  return it("should be the first page", function() {
    return expect(element("h1").text()).toBe("Welcome to homepage");
  });
});