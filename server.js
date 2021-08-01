// require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
// const nodemailer = require("nodemailer");

// const { google } = require("googleapis");
// const OAuth2 = google.auth.OAuth2;

// let transporter;

const PORT = process.env.PORT || 3002;

app.use(express.json()); 


// app.post("/api/contact", (req,res) => {
//   const email = req.body.email;
//   const message = req.body.message;

//   const msg = {
//     from: process.env.fromEmail,
//     to: process.env.toEmail,
//     subject: "contact form",
//     html: `<h1>${email}</h1>
//     <p>${message}</p>`
//   }

//   transporter.sendMail(msg, (err, info) => {
//     if (err) {
//       console.log(err);
//       return res.json({err: "there was an error"})
//     } else {
//       return res.json({success: "msg sent successfully"})
//     }
//   })
  
//   // res.json({msg: "msg recieved", message: message, email:email});
// })

// send all other requests to index.html so react takes over
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
})


app.listen(PORT, async () => {
  console.log("Server listening on PORT", PORT);

//   // setup oauth2 client
//   const oauth2Client = new OAuth2(
//     process.env.clientID,
//     process.env.clientSecret,
//     "https://developers.google.com/oauthplayground"
//   );

//   // setup access to the access token
//   oauth2Client.setCredentials({
//     refresh_token: process.env.clientRefresh
//   });

//   const accessToken = await oauth2Client.getAccessToken()

//   // create nodemailer transport
//   transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         type: "OAuth2",
//         user: process.env.fromEmail, 
//         clientId: process.env.clientID,
//         clientSecret: process.env.clientSecret,
//         refreshToken: process.env.clientRefresh,
//         accessToken: accessToken
//     }
//   })
});
