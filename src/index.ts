import { MendixPlatformClient, setPlatformConfig } from "mendixplatformsdk";
import * as fs from "fs";

const config = require("../config/config.json");

main().catch(console.error);

async function main() {
  const mxClient = new MendixPlatformClient();
  setPlatformConfig({ mendixToken: config.mendixtoken });
  const mxApp = mxClient.getApp(config.projectid);
  const branch = await mxApp.getRepository().getBranch("main");
  const mxWorkingCopy = await mxApp.createTemporaryWorkingCopy(branch.name);
  const mxModel = await mxWorkingCopy.openModel();
}
