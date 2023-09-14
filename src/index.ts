import { App, MendixPlatformClient, setPlatformConfig } from "mendixplatformsdk";
import * as fs from "fs";
import { IModel } from "mendixmodelsdk";

const config = require("../config/config.json");

let mxClient: MendixPlatformClient;

main().catch(console.error);

async function main() {
  // Set up your Mendix Model SDK client:
  setPlatformConfig({ mendixToken: config.mendixtoken });
  mxClient = new MendixPlatformClient();
  // Get an existing app:
  const mxApp = getExistingApp(config.projectid);

  // Create a new app:
  //const mxApp = await createNewApp("testje");

  const branch = await mxApp.getRepository().getBranch(config.branch);
  const mxWorkingCopy = await mxApp.createTemporaryWorkingCopy(branch.name);
  const mxModel = await mxWorkingCopy.openModel();

  // Do your worst here :-):
  console.log(mxApp.appId);
  //console.log(branch.latestCommit.message);
  console.log(mxWorkingCopy.workingCopyId);
  console.log(mxModel.allModules().forEach((module) => console.log(module.name)));
}

async function createNewApp(name: string, templateId?: string): Promise<App> {
  const newApp = await mxClient.createNewApp(name, { templateId: templateId });
  return newApp;
}

function getExistingApp(projectId: string): App {
  return mxClient.getApp(projectId);
}
