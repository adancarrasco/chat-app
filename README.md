# Chat fiction App

## Overview

This App was designed to follow the behavior of the App metioned in the following [article](https://techcrunch.com/2017/06/13/the-chat-fiction-apps-that-teens-go-crazy-for/). This App was built with React Native and works for iOS and Android latest versions.

## Quick Start

### Install and run

#### Prerequisites

To install and run this project you need to install React Native first. You can do it in the [React Native official Website](https://facebook.github.io/react-native/docs/getting-started).

#### Running the project

After installing the proper tools for iOS and Android you can run the following commands to run the project.

1. You need to have `yarn` installed.

- For [Windows](https://legacy.yarnpkg.com/en/docs/install/#windows-stable)
- For [Mac](https://legacy.yarnpkg.com/en/docs/install/#mac-stable)

2. Once you have `yarn` and `node` (prerequisite for yarn)
3. Run the following command in your terminal: `yarn install; cd ios; pod install; cd ..; yarn start;`
4. Now you can run the application:

- For iOS: `react-native run-ios`
- For Android: `react-native run-android`

### Data Structure of the stories

You can open `mockDB.json` to see the Data Structure. This is similar to a LinkedList, however this in the `next` has an array so it can add the feature of multiple responses from the user, this can possible create different paths for the stories.

Description of a message:

```JS
"0iUggFCKG6VRrNv5lsD4" : {
  "isLocalUser" : false, // Should be shown in the left
  "message" : "sry I didn't tell you",
  "name" : "Summer",
  "next" : [ "L5V17jXTGrHg62NOcKgi" ], // One possible answer or multiple
  "type" : "text" // message type
}
```

### Tech Stack

This App was built with [React Native](https://facebook.github.io/react-native/), [Jest](https://jestjs.io/), [Firebase](https://firebase.google.com/) and [TypeScript](https://www.typescriptlang.org/).

### Support

If you have any questions regarding the implementation or feature requests feel free to send an email to [send email](mailto:hello@adancarrasco.com)

### Look and feel

![iOS Example](https://github.com/adancarrasco/chat-app/blob/master/doc/assets/iPhoneExample.png?raw=true)

![Android Example](https://github.com/adancarrasco/chat-app/blob/master/doc/assets/AndroidExample.png?raw=true)
