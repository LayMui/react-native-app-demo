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

gem install xcpretty

cd ios
xcodebuild clean archive -workspace rnfirstapp.xcworkspace -scheme "rnfirstapp" -archivePath rnfirstapp.xcarchive
     
xcodebuild -exportArchive -archivePath rnfirstapp.xcarchive -exportPath rnfirstapp -exportOptionsPlist ExportOptions.plist | xcpretty

# Integrate to Azure DevOps pipeline
https://medium.com/@liam.e.andrew/continuous-integration-for-react-native-with-azure-pipelines-245d90948f6a

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

# How to build ios project with Xcode task using microsoft-hosted macOS agent 
https://docs.microsoft.com/en-us/azure/devops/pipelines/ecosystems/xcode?view=azure-devops

