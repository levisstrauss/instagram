
-------- React native instagram clone -------------------->
 
    - This project is under development

------------------- Project starter ---------------------->
 
     - npx react-native init Instagram  => To initalize a new project
     - npm start --reset-cache => Resetting the cache: 
     - react-native run-ios or react-native run-android => run on android or IOS
     - cd IOS pod install => if having a problem while creating the project
     - npx pod-install ios => Anytime we install a new dependency in the IOS folder

------------------- Project starter ----------------------->

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

-------------- Start building components ---------------->

    ---- FeedPost components ------------------------------->
    ---- Comment components -------------------------------->
    ---- Integration of posts dta -------------------------->
   
    - Use the map function if you only have few data to render
    - But instead, use FlatList if you use have a lot of data to render

    - {post.comments.map(comment => (
          <Comment key={comment.id} comment={comment}/>
    ))}

    --- FlatList check out the documentation ---->
       <FlatList
         data={posts}
         renderItem={({item}) => <FeedPost post={item} />}
       />

    ------- Some of the flatlist properties ------->
    - showsVerticalScrollIndicator: true of false
    - For the virtualizedList, never put a FlatList inside of a scrollView if both of 
      them have the same direction

    - Suppose the item to return does not have any key as id in the FlatList, we can hande that 
      propery property using the keyExtractor property:
  
       <FlatList
         data={posts}
         renderItem={({item}) => <FeedPost post={item} />}
         keyExtractor={item = { return `post-${item.createdAt}`;
       />
    ---- Working with state to implement the heart color --------->
    - The is a very crucial concept in state managment 
      if we just want to update the value, we can just set it to true
      if we want to update it, we can set existingValue => !existingValue

    - The importance thing here is that anytime we have to use something
      more than once, it  better to retract it as it own component.
    

    ---- Implementation of the carousel --------->

     const viewabilityConfig: ViewabilityConfig = {
      itemVisiblePercentThreshold: 51,
     }
    
     const onViewableItemsChanged = useRef(
        ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
        if (viewableItems.length > 0) {
        setActiveImageIndex(viewableItems[0].index || 0);
        }
    });
    
      
