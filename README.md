### To create a Cognito UserPool and to set up google as a federated identity provider plz check this link:

https://aws.amazon.com/premiumsupport/knowledge-center/cognito-google-social-identity-provider

### After creation of Cognito UserPool, let's start the frontend setup to use google sign in button and redirect to the main page

### Clone the repository:

```
$ git clone https://github.com/mvcman/aws-cogntio-google-auth.git
```

### Go inside the repository using following command:

```
$ cd aws-cogntio-google-auth
```

### Install dependencies

```
$ yarn install
```

### Run the code using:

```
$ yarn start
```

## Once the user clicks on sign in button, we will invoke another method to get the current authenticated user details[eg. access token, email, refresh token].

```
const loginResponse = await Auth.currentAuthenticatedUser();
console.log('LoginResponse', loginResponse);
```
