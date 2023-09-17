const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3000;

app.get("/welcome", (req, res) => {
  const username = req.query.username;

  if (!username) {
    return res.redirect("/");
  }

  res.sendFile(path.join(__dirname, "public", "welcome.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
