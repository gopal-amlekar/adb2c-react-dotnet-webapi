# Authorizing .NET Web API with Azure AD B2C

This repo consists of two separate projects.

1. React JS SPA allowing users to sign-in, obtain access tokens from Azure AD B2C and calling an API with the access token authorization.

2. ASP.NET Web API application responding to authenticated API requests after validating the access token.


**React JS SPA Client**

The React JS SPA is based on [this](https://github.com/gopal-amlekar/adb2c-react-sign-in-signout) project which implements user sign-in, sign-out functionalities offered by the [AD B2C](https://azure.microsoft.com/en-in/services/active-directory/external-identities/b2c/#features). It uses Microsoft Authentication Library  for React ([msal-react](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-react)) to enable user authentication using Azure Active Directory B2C. You can find more details about this in [this](https://www.iotality.com/azure-adb2c-react-app) post on my blog.

This app adds ability to obtain access token (and ID token) from Azure AD B2C and then call a backend API usng the token as means of authorization.

**Web API**

The Web API is a standard [ASP.NET 5](https://dotnet.microsoft.com/apps/aspnet) web API template project created with dotnet commandline. It is then extended with Azure AD B2C specific changes and configuration.

The API project includes one API controller serving random weather forecast data. With the AD B2C authorization configured, the API endpoints return data only when the request is authorized with a valid access token obtained from AD B2C. 





