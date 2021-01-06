const awsmobile = {
  aws_project_region: "****",
  aws_cognito_identity_pool_id: "***",
  aws_cognito_region: "*****",
  aws_user_pools_id: "*****",
  aws_user_pools_web_client_id: "******",
  oauth: {
    domain: "*****",
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
