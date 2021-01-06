const awsmobile = {
  aws_project_region: "us-east-1",
  aws_cognito_identity_pool_id:
    "us-east-1:b18ca440-6ece-4898-94d3-85aff159dfd7",
  aws_cognito_region: "us-east-1",
  aws_user_pools_id: "us-east-1_jgXruJsOK",
  aws_user_pools_web_client_id: "44gcthr0dt5urffmfg0dgcrjd2",
  oauth: {
    domain: "oauthdemo1233-dev.auth.us-east-1.amazoncognito.com",
    scope: [
      "phone",
      "email",
      "openid",
      "profile",
      "aws.cognito.signin.user.admin",
    ],
    redirectSignIn: "http://localhost:3000/",
    redirectSignOut: "http://localhost:3000/",
    responseType: "code",
  },
  federationTarget: "COGNITO_USER_POOLS",
};

export default awsmobile;
