Setup:

1. If you don't have npm or Typescript installed yet, follow the instructions described in section 3 of https://docs.mendix.com/apidocs-mxsdk/mxsdk/setting-up-your-development-environment/#setting. You can ignore the steps before and after.
2. Create a folder named 'config' in this project's root folder.
3. In it, put a file named 'config.json' that contains the following JSON snippet:

   {
   "projectid": "{YourProjectIdHere}",
   "mendixtoken": "{YourMendixTokenHere}",
   "branch": "main"
   }

4. Replace {YourProjectIdHere} with the ID of the project you want to use. You can find it in Sprintr under General > Settings.
5. Replace {YourMendixTokenHere} with one you have generated (or create at https://user-settings.mendix.com/link/developersettings)
6. Set the branch that you want to use. The main line for GIT-projects is 'main', for SVN-projects this is 'trunk'
7. (Optional) Replace the branch name if you don't want to use the main branch of your project

Instructions:
This basic project allows you to open a working copy of a Mendix project and more or less do whatever you want with it.
