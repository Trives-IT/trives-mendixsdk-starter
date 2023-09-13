import { MendixPlatformClient, setPlatformConfig } from "mendixplatformsdk";
import * as fs from "fs";
import { IModel } from "mendixmodelsdk";

const config = require("../config/config.json");

main().catch(console.error);

async function main() {
  // Set up your Mendix Model SDK client:
  setPlatformConfig({ mendixToken: config.mendixtoken });
  const mxClient = new MendixPlatformClient();
  const mxApp = mxClient.getApp(config.projectid);
  const branch = await mxApp.getRepository().getBranch(config.branch);
  const mxWorkingCopy = await mxApp.createTemporaryWorkingCopy(branch.name);
  const mxModel = await mxWorkingCopy.openModel();

  // Do your worst here :-):
  console.log("Your Mendix version is: " + mxModel.mxVersionForModel);
}
