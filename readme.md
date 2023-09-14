Setup:

- Follow the Mendix tutorial on how to setup a Typescript project: https://docs.mendix.com/apidocs-mxsdk/mxsdk/setting-up-your-development-environment/
- Make sure you have a Mendix Personal Access Token: https://docs.mendix.com/apidocs-mxsdk/mxsdk/set-up-your-pat/

- Create a folder named 'config' in this project's root folder
- In it, put a file named 'config.json' that contains the following JSON snippet:

{
"projectid": "123456-abcd-7890-wxyz",
"mendixtoken": "VGhpcyBpcyBub3QgYSB2YWxpZCBNZW5kaXggdG9rZW4",
"branch": "main"
}

- Replace the projectid with the ID of the project you want to use
- Replace the mendixtoken with the one you generated
- (Optional) Replace the branch name if you don't want to use the main branch of your project
