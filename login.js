const { Selector } = require("testcafe");

fixture`Group of tests / Test suite - Login Suite`
  .page`https://dev.deepthought.education/login`;

test("Valid login", async (t) => {
  await t
    .typeText("#username", "sagarkryadav31@gmail.com")
    .typeText("#password", "Sagar$321")
    .click("#login")
    .expect(Selector('#sidebar-title')).textContent
});

test("Invalid login", async (t) => {
  await t
    .typeText("#username", "incorrectUsername")
    .typeText("#password", "incorrectPassword")
    .click("#login")
});
