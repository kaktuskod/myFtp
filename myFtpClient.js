const jsftp = require("jsftp");
 
const Ftp = new jsftp({
  host: "127.0.0.1",
  port: 3331, // defaults to 21
  user: "user", // defaults to "anonymous"
  pass: "1234" // defaults to "@anonymous"
});