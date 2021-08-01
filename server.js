const express = require("express");
const app = express();
const path = require("path");


const PORT = process.env.PORT || 3002;

app.use(express.json()); 
app.use(express.static("client/build"));


// send all other requests to index.html so react takes over
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
})


app.listen(PORT, async () => {
  console.log("Server listening on PORT", PORT);
});
