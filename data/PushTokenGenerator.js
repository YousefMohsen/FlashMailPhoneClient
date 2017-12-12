import { Permissions, Notifications } from 'expo';
const PUSH_ENDPOINT = 'https://your-server.com/users/push-token';

 
 class PushTokenGenerator  {

    constructor(){

console.log("Hej")
     }
     
     
     async  registerForPushNotificationsAsync() {
       const { status: existingStatus } = await Permissions.getAsync(
         Permissions.NOTIFICATIONS
       );
       let finalStatus = existingStatus;
     
       // only ask if permissions have not already been determined, because
       // iOS won't necessarily prompt the user a second time.
       if (existingStatus !== 'granted') {
         // Android remote notification permissions are granted during the app
         // install, so this will only ask on iOS
         const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
         finalStatus = status;
     
     
       }
     console.log("final status, ",finalStatus)
       // Stop here if the user did not grant permissions
       if (finalStatus !== 'granted') {
         return;
       }
     
       // Get the token that uniquely identifies this device
       let token = await Notifications.getExpoPushTokenAsync();
     console.log("token is: ")
     console.log(token)
       // POST the token to your backend server from where you can retrieve it to send push notifications.
      return token;
     }



}

export default new PushTokenGenerator();