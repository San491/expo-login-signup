

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## HOW TO RUN:

1. Install dependencies
   ```bash
   npm install
   ```
2. Start the app
   ```bash
    npx expo start
   ```
In the output, you'll find options to open the app in a
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo
- [web browser]
- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)

  
## DESIGN CHOICES MADE:
- Decided to keep it clean, with a dark purple theme. 
- Smooth and simple animations to switch from login to sign up and vice versa.
- The form moves up when an input field is activated to avoid the keyboard for better UX. 
- Input field requirement error texts pop up on touch and lack of fulfillment on submit. 
- Error texts go away on form toggle.

##LIMITATIONS/ASSUMPTIONS:
- Inconsistency in showing error for Name input field. Most likely a Formik validation detecting null ("") as a valid input. Does not affect touch error detection though, therefore that works fine.
- Assumed separated backend, therefore redirected to a post-login/post-register screen with success-messages upon submit.



## Demo video:

https://github.com/user-attachments/assets/f3960182-d06f-426e-a8c6-aeb3cbd55a8e


## Screenshots:

![ss1](https://github.com/user-attachments/assets/87579b50-c2fd-4946-a829-f5a42d243b4f),![ss2](https://github.com/user-attachments/assets/94bfca2f-af65-4a1c-b5af-9cd6032ca5a0),![ss3](https://github.com/user-attachments/assets/b225e6a4-ee81-4fda-ab20-fcf6b81b58f4),![ss4](https://github.com/user-attachments/assets/191dc10c-4764-4a36-96f5-bcea3aeb9d56),![ss5](https://github.com/user-attachments/assets/08d710db-684a-4152-8650-4970a467206d),![ss6](https://github.com/user-attachments/assets/72742f61-f0da-464d-bdd5-507c42b3d1bf)



