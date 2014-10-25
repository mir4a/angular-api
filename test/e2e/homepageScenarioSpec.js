describe("Home page", function() {
  beforeEach(function() {
    browser.get("http://localhost:3000/#/");
  });

  var messagesCount = 0;

  it("should be the first page", function() {
    expect($(".heading").getText()).toBe("Welcome to homepage");
  });

  it("should has 3 messages", function() {
      expect(element.all(by.css('.messages > li')).count()).toBe(3);
  });

});