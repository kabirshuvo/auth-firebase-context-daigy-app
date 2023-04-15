import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Home = () => {
  const user = useContext(AuthContext);
    return (
      
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="w-lg">
           <div>
           <h1 className="text-5xl font-bold">Auth Master</h1>
           <h3 className='py-4 font-bold'>{user && <span>{user.displayName}</span>}</h3>
           </div>
            <p className="py-6">the basic steps for implementing authentication using Firebase:

Create a Firebase project: Go to the Firebase console and create a new project. This project will be used to store user authentication information.

Add Firebase to your app: In your project, select the "Authentication" option from the left-hand menu, then select "Get Started" to set up the authentication for your app.

Choose an authentication method: Firebase offers several authentication methods, including email/password, Google, Facebook, Twitter, and more. Choose the method(s) that you want to support in your app.

Configure your app for authentication: Follow the instructions provided by Firebase to configure your app for authentication. This typically involves adding Firebase SDKs and code snippets to your app, and setting up the appropriate authentication providers.

Implement authentication in your app: Use the Firebase SDKs and APIs to implement authentication in your app. This typically involves setting up sign-up and login screens, handling user input, and using the Firebase APIs to authenticate users and manage user accounts.

Handle user sessions and data: Once a user is authenticated, you may want to store user data in Firebase, or manage user sessions and state in your app. Use the Firebase APIs to manage user data and sessions as needed.

Test and deploy your app: Once your authentication code is working, test your app thoroughly to ensure that it handles authentication correctly. Then deploy your app to production and continue to monitor and test it to ensure that it remains secure and functional over time.

            These are the basic steps for implementing authentication using Firebase. There may be additional steps or considerations depending on the specific requirements of your app, so be sure to read the Firebase documentation carefully and follow best practices for app security and user privacy...</p>
            <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Home;