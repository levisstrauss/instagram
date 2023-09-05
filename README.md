
-------- React native instagram clone ----------->
 
    - This project is under development

------------------- Project starter ------------->
 
     - npx react-native init Instagram  => To initalize a new project
     - npm start --reset-cache => Resetting the cache: 
     - react-native run-ios or react-native run-ios => run on android or IOS
     - cd IOS pod install => if having a problem while creating the project
     - npx pod-install ios => Anytime we install a new dependency in the IOS folder

------------------- Project starter ------------->

    - Project Structure
       - src
          |_assets--fonts--images
          |_components
          |_screens
          |_theme

------------------- Setting the vectors icons ------------->

     ---------- website------------------>
     - https://github.com/oblador/react-native-vector-icons  // configuration
     - https://oblador.github.io/react-native-vector-icons/  // Vectors icon website
     
     ---------- configuration--------------->
     - npm install --save react-native-vector-icons
     - Folllow the instruction on the website to set up android and IOS

     - IOS => IOS folder => instagram => open info.plist => paste the array 
       of fonts before closing the dictionanry. run 
     - npx pod-install ios => Anytime we install a new dependency

     - Android => android/app/build.gradle
       apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")
     - Don't forget to install the types

