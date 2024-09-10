
Build Generation:
Step 1 - Change the Version name/Version Code in gradle file & Change Version in Api.js (Visibility Purpose) 
Step 2 - Copy .env.prod for PROD or .env.uat for UAT or .env.qa for SITcontents to .env file (Create one if .env doesn't exists)		
Step 4 - Run 'npm run build' Command at the project source path		
Step 5 - Copy the files from Build Folder and paste it into android/app/src/main/assets/www directory		
Step 6 - Run 'cd android && ./gradlew assembleProdRelease' to generate the Release Build.		

console:
1. To display the console log and console error - make isLogRequired as true

Loader:
1. To start the loader - Api.loader(true)
2. To stop the loader - Api.loader(false)  

DataManager:
It is used for managing data for every steps and will be accessed via Getter Setter from LocalStorage.

