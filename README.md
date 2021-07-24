# React native app powered by expo 

https://expo.io to get started

Pros:
React native is fast moving
New version every month
breaking changes do happen
High dependency on 3rd party packages that also change
Bugs/workarounds required

Cons:
vast majority code can be reused

alternative:
Build real native apps
Learn Java/Android for Android
Learn Swift/Objective C for iOS

Download Expo Client from AppStore
and Run the app on the iOS phone

Using locator strategy:
https://appiumpro.com/editions/76-testing-react-native-apps-with-appium

# Build ipa artefact
https://medium.com/easyread/build-react-native-ipa-apk-using-cli-simple-ci-cd-2b8303d079e0

https://developer.apple.com/library/archive/technotes/tn2339/_index.html#//apple_ref/doc/uid/DTS40014588-CH1-HOW_DO_I_ARCHIVE_AND_EXPORT_MY_APP_FOR_DISTRIBUTION_

gem install xcpretty

cd ios
1. pod install
2. xcodebuild clean archive -workspace rnfirstapp.xcworkspace -scheme "rnfirstapp" -archivePath rnfirstapp.xcarchive
     
3. xcodebuild -exportArchive -archivePath rnfirstapp.xcarchive -exportPath rnfirstapp -exportOptionsPlist ExportOptions.plist |xcpretty

Command #3 will export rn-first-app.ipa at subfolder rnfirstapp 

➜  rnfirstapp git:(master) ✗ ls

AppDelegate.h             Images.xcassets           main.m
AppDelegate.m             Info.plist                rn-first-app.entitlements
Base.lproj                Packaging.log             rn-first-app.ipa
# Integrate to Azure DevOps pipeline
https://medium.com/@liam.e.andrew/continuous-integration-for-react-native-with-azure-pipelines-245d90948f6a

# Setup required:
1. AppleDeveloperCertificate (including the password) 
2. The provisioning profile
Issue: line 64 of azure-pipelines.yml on mobileprovision file
```
There was a resource authorization issue: "The pipeline is not valid. Job Job: Step InstallAppleProvisioningProfile input provProfileSecureFile references secure file certification_ios_poc.mobileprofile which could not be found. The secure file does not exist or has not been authorized for use. For authorization details, refer to https://aka.ms/yamlauthz."
```
# How to setup self hosted agent in azure pipeline
```
I found the following command which can enable "Allow apps downloaded from Anywhere".
sudo spctl --master-disable

Server url: https://dev.azure.com/muiume/
To create PAT
Go to user settings -> Personal Access token
```

```
Download 
Download the agent
./config.sh

>> Connect:

Enter server URL > https://dev.azure.com/muiume/
Enter authentication type (press enter for PAT) > 
Enter personal access token > ****************************************************
Connecting to server ...

>> Register Agent:

Enter agent pool (press enter for default) > 
Enter agent name (press enter for Lays-MBP) > my-mac-agent
Scanning for tool capabilities.
Connecting to the server.
Successfully added the agent
Testing agent connection.
```

./run.sh
```
Scanning for tool capabilities.
Connecting to the server.
2021-01-26 10:41:19Z: Listening for Jobs
```

Issues:
```
❌  error: /Users/runner/work/1/s/ios/Pods/Target Support Files/Pods-rnfirstapp/Pods-rnfirstapp.release.xcconfig: unable to open file (in target "rnfirstapp" in project "rnfirstapp") (in target 'rnfirstapp' from project 'rnfirstapp')


```

# CICD with Azure devOps
 https://dev.to/rajikaimal/azure-devops-ci-cd-yaml-pipeline-4glj