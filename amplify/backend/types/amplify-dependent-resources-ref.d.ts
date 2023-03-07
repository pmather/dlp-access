export type AmplifyDependentResourcesAttributes = {
    "api": {
        "collectionarchives": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "auth": {
        "iawav2658176f3": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string",
            "AppClientSecret": "string"
        },
        "userPoolGroups": {
            "AdminGroupRole": "string",
            "EditorGroupRole": "string",
            "SiteAdminGroupRole": "string",
            "IAWAGroupRole": "string",
            "hokiesGroupRole": "string",
            "SWVAGroupRole": "string",
            "podcastsGroupRole": "string",
            "DefaultGroupRole": "string",
            "federatedGroupRole": "string",
            "testGroupRole": "string"
        }
    },
    "function": {
      "iawav2658176f3PostConfirmation": {
        "Arn": "string",
        "LambdaExecutionRole": "string",
        "LambdaExecutionRoleArn": "string",
        "Name": "string",
        "Region": "string"
      }
    },
    "storage": {
      "Collectionmap": {
        "BucketName": "string",
        "Region": "string"
      }
    }
  }