const app = require("express")();

app.listen(3000);

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", function (req, res) {
  res.render("home-page");
});

app.get("/contact-us", function (req, res) {
  res.render("contact-us");
});

app.get("/our-services", function (req, res) {
  res.render("our-services");
});

app.use((req, res, next) => {
  res.render("404");
  next();
});

app.use(function workingTime(req, res, next) {
  let time = new Date();
  let hour = time.getHours();
  let day = time.getDay();

  if (day === 5 || day === 6 || hour < 9 || hour > 17) {
    res.render("Unavailable");
  } else {
    res.render("home-page");
  }
  next();
});
