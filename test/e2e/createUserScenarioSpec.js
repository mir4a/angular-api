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


  it("should show an Mongoose validation error if email isn't correct", function() {
    var email = element(by.model('users.user.email'));
    email.clear();
    email.sendKeys("john@example").sendKeys([protractor.Key.CTRL,protractor.Key.ENTER]);

    expect($('.alert').getText()).toBe('Mongoose validate error');
  });

  it("should show success message if all fields are valid", function() {
    var email = element(by.model('users.user.email'));
    var first_name = element(by.model('users.user.first_name'));
    var last_name = element(by.model('users.user.last_name'));
    var submit = element(by.css('.submit_form'));
    email.clear();
    first_name.clear();
    last_name.clear();

    email.sendKeys("john@example.com");
    first_name.sendKeys("John");
    last_name.sendKeys("Doe");

    submit.click();

    expect($('.alert').getText()).toBe("Well done!");

  });

});