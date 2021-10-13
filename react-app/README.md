# Authorizing .NET Web API with Azure AD B2C

This repo consists of two independent projects.

1. React JS SPA allowing users to sign-in, obtain access tokens from Azure AD B2C and calling an API along with access token authorization.
2. Web API project in ASP.NET 5 responding to API requests after validating the access token



## React JS SPA Client

The React JS SPA is based on [this](https://github.com/gopal-amlekar/adb2c-react-sign-in-signout) project which implements user sign-in, sign-out functionalities offered by the [AD B2C](https://azure.microsoft.com/en-in/services/active-directory/external-identities/b2c/#features). It uses Microsoft Authentication Library  for React ([msal-react](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-react)) to enable user authentication using Azure Active Directory B2C.

In this repo, the original app is now extended with ability to obtain access token (and ID token) from Azure AD B2C and then call a backend API usng the token as means of authorization.


### Install dependencies

In the project directory, run `npm install` or `yarn install` to install the dependencies from package.json.

### Configure AD B2C

To get apps in this project working, you ned to create an AD B2C tenant, create app registration, create user flows for sign-in, sign-up and edit profiles and configure the tenant appropriately. You can follow the instructions in my [blog post](https://www.iotality.com/azure-adb2c-create-app-user-flows/). 

_Make sure that the implicit flow is turned off by deselecting both Access tokens and ID tokens in the authentication section of app registrations. The implicit flow is not a secure one and it was used in the blog post only for a quick demonsrtation and testing of the AD B2C tenant configuration._

For more details, you can go through [Microsoft documentation](https://docs.microsoft.com/en-us/azure/active-directory-b2c/tutorial-create-tenant)

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

This will start React development server. Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

#### Sign-in

If everything is configured correctly, you should get the demo app running in your browser. When you click on the **LOGIN** button, you should see an option to sign-up as well. (Enable browser pop-ups as the code pops up a login window). You can try yourself signing up with an email address. AD B2C has in-built 2 factor authentication to verify your email address before letting you sign-up. Once logged in, you can view your profile in the main page of the app. Click on **EDIT PROFILE** button to edit your profile. Finally, you can sign out with the **LOGOUT** button.

#### Acquire tokens


#### Call backend API


## Learn More

This GitHub repo is in accompaniment of my blog post [here](https://www.iotality.com/azure-adb2c-react-app).



# DOTNET APP NEW
 dotnet new webapi --auth IndividualB2C --aad-b2c-instance https://iotalityblog.b2clogin.com --susi-policy-id b2c_1_susi --client-id cf966381-d7a7-487d-8b13-1897b6fcbe09 --domain iotalityblog.onmicrosoft.com