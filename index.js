const express = require("express");
const path = require("path");
const fs = require("fs");
var url = require("url");
var http = require("http");

const port = 5002;

// const router = express.Router();
const app = express();

const indexPath = path.resolve(__dirname, "geo-src", "index.html");
// // static resources should just be served as they are
app.use(express.static(path.resolve(__dirname, "geo-src")));

app.use(express.static(path.resolve(__dirname, "metaData")));

app.get("/", async function (req, res, next) {
  return res.redirect("index.html");
});
app.get("/about-us", async function (req, res, next) {
  return res.send("about.html");
});
app.get("/contact-us", async function (req, res, next) {
  return res.send("contact.html");
});
app.get("/service", async function (req, res, next) {
  return res.redirect("service.html");
});
app.get("/*", async function (req, res, next) {
  return res.redirect("404.html");
});
// app.get("/*", async function (req, res, next) {
//   console.log("function running success", req.pathname);

//   // setTimeout(function refreshPage() {
//   var url_parts = url.parse(req.url);
//   const path = url.parse(req.url).path;
//   console.log("new", req.originalUrl);
//   console.log(url_parts.pathname);
//   var url_pathname = url_parts.pathname;
//   var split_function = url_pathname.split("/");
//   let index_split = split_function.pop();
//   console.log(split_function, index_split);
//   let pageContent = "";
//   fs.readFile("./metaData/Geo-onpage.json", function (err, data) {
//     // Check for errors
//     if (err) throw err;

//     // Converting to JSON
//     const content = JSON.parse(data);
//     try {
//       fs.readFile(indexPath, "utf8", (err, htmlData) => {
//         if (err) {
//           console.error("Error during file reading", err);
//           return res.status(404).end();
//         }

//         if (index_split === "about-us") {
//           pageContent = content.page[1];
//         } else if (index_split === "blog") {
//           pageContent = content.page[3];
//         } else if (index_split === "our-products") {
//           pageContent = content.page[2];
//         } else if (index_split === "contact-us") {
//           pageContent = content.page[4];
//         }
//         // try {
//         // get post info
//         // } catch (error) {
//         //   return res.sendFile('index.html', {root: __dirname })
//         // }
//         // inject meta tags
//         htmlData = htmlData
//           .replace(
//             "<title>GEO Export and Import -Leading Vegetable Exporters in India</title>",
//             `<title>${pageContent.page}</title>`
//           )
//           .replace(
//             "GEO Export and Import - Leading Vegetable Exporters on India",
//             pageContent.page
//           )
//           .replace(
//             "Looking for trustworthy exporters? GEO export and import is the only place to go. We are dedicated to providing fresh and high quality vegetables.",
//             pageContent.describe
//           )
//           .replace(
//             "GEO export and import is the only place to go. We are dedicated to providing fresh and high quality vegetables.",
//             pageContent.describe
//           );
//         return res.send(htmlData);
//       });
//     } catch (err) {
//       next(err);
//       res.sendFile(path.join(__dirname, "index.html"));
//     }
//   });
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
