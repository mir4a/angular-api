describe("Home page", function() {
  beforeEach(function() {
    browser.get("http://localhost:3055/#/users");
  });

  it("should has form with 3 inputs", function() {
    expect(element.all(by.css(".users_page .create_new .form input")).count()).toEqual(3);
  });

  it("should has email input", function() {
    expect($("#email").getAttribute("name")).toBe("email");
  });

  it("should has first name input", function() {
    expect($("#first_name").getAttribute("ng-model")).toBe("users.user.first_name");
  });

  it("should has last name input", function() {
    expect($("#last_name").getAttribute("ng-model")).toContain("last_name");
  });

});