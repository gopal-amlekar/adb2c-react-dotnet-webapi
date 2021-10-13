
# Backend Web API

The API project is created with `dotnet new` command and then extended with AD B2C specific functionalities. Clone the repo and navigate to folder dotnet-api.



### Configure AD B2C

To get apps in this project working, you ned to create an AD B2C tenant, create app registration, create user flows for sign-in, sign-up and configure the tenant appropriately. If you have not created a tenant already, follow the instructions in my [blog post](https://www.iotality.com/azure-adb2c-create-app-user-flows/) and get a tenant setup. 


### API app registration 

Once you have an AD B2C tenant setup, create an app registration for our API project. 

### Configure the app
Create a file named `.env` in the root folder of the project. Add following entries in the file. Make sure all the strings are enclosed in double quotes.

```
ADB2C_CLIENT_ID="{YOUR_ADB2C_APP_TENANT_ID}"
ADB2C_AUTHORITY="https://{YOUR_TENANT_NAME}.b2clogin.com/{YOUR_TENANT_NAME}.onmicrosoft.com/{YOUR_SIGN_IN_SIGN_UP_POLICY}"
ADB2C_KNOWN_AUTHORITIES="{YOUR_TENANT_NAME}.b2clogin.com,"

REACT_APP_ADB2C_REDIRECT_URI="{YOUR_ADB2C_APP_REDIRECT_URI}"
REACT_APP_ADB2C_POST_LOGOUT_REDIRECT_URI="{YOUR_ADB2C_APP_POST_LOGOUT_REDIRECT_URI}"

ADB2C_SIGNUP_SIGNIN_POLICY="{YOUR_SIGN_IN_SIGN_UP_POLICY}"
```

If you are in doubt, here is a sample .env file.

```
REACT_APP_ADB2C_CLIENT_ID="abcdef12-e3f9-43h0-0ad9-7b0g5h8rsm28"
REACT_APP_ADB2C_AUTHORITY="https://mytenant.b2clogin.com/mytenant.onmicrosoft.com/B2C_1_susi"
REACT_APP_ADB2C_KNOWN_AUTHORITIES="mytenant.b2clogin.com,"

REACT_APP_ADB2C_REDIRECT_URI="http://localhost:3006"
REACT_APP_ADB2C_POST_LOGOUT_REDIRECT_URI="http://localhost:3006"

REACT_APP_ADB2C_SIGNUP_SIGNIN_POLICY="B2C_1_susi"
```


### Run the app

In the project directory, run `npm start` or `yarn start`.

This will run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

If everything is configured correctly, you should get the demo app running in your browser. When you click on the **LOGIN** button, you should see an option to sign-up as well. (Enable browser pop-ups as the code pops up a login window). You can try yourself signing up with an email address. AD B2C has in-built 2 factor authentication to verify your email address before letting you sign-up. Once logged in, you can view your profile in the main page of the app. Click on **EDIT PROFILE** button to edit your profile. Finally, you can sign out with the **LOGOUT** button.


## Learn More

This GitHub repo is in accompaniment of my blog post [here](https://www.iotality.com/azure-adb2c-react-app). If you have any questions or if you try gettint the AD B2C up and running and face some issues, please let me know via comments on my blog post.





Create a new ASP.Net Web API app with the following command.

```
dotnet new webapi --auth IndividualB2C --aad-b2c-instance https://iotalityblog.b2clogin.com --susi-policy-id b2c_1_susi --client-id cf966381-d7a7-487d-8b13-1897b6fcbe09 --domain iotalityblog.onmicrosoft.com
```

