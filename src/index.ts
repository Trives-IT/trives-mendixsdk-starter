const config = require("../config/config.json");

main().catch(console.error);

async function main() {
  console.log("Hello World");
  console.log(config.mendixtoken);
}
