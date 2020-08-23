import type { Serverless } from "serverless/aws";

const DEFAULT_REGION = "ap-southeast-1";
const DEFAULT_STAGE = "local";

const PROVIDER_STAGE = `\${opt:stage, '${DEFAULT_STAGE}'}`;
const PROVIDER_REGION = `\${opt:region, '${DEFAULT_REGION}'}`;
const ENV_NODE_ENV = `\${self:provider.stage}`;

const serverlessConfiguration: Serverless = {
  service: {
    name: "serverless-lambda-starter",
    // app and org for use with dashboard.serverless.com
    // app: your-app-name,
    // org: your-org-name,
  },
  frameworkVersion: ">=1.72.0",
  custom: {
    webpack: {
      webpackConfig: "./webpack.config.js",
      includeModules: true,
      packager: "yarn",
    },
    "serverless-iam-roles-per-function": {
      defaultInherit: true, // Each function will inherit the service level roles too.
    },
    globalTables: {
      regions: [
        // list of regions in which you want to set up global tables
        DEFAULT_REGION, // Singapore  (default region to date for stack)
      ],
      createStack: false,
    },
    prune: {
      automatic: true,
      number: 10,
    },
  },
  // Add the serverless-webpack plugin
  plugins: [
    "serverless-offline",
    "serverless-webpack",
    "serverless-iam-roles-per-function",
    "serverless-create-global-dynamodb-table",
    "serverless-prune-plugin",
  ],
  provider: {
    name: "aws",
    runtime: "nodejs12.x",
    stage: PROVIDER_STAGE,
    region: PROVIDER_REGION,
    apiGateway: {
      minimumCompressionSize: 1024,
    },
    environment: {
      DEBUG: "*",
      NODE_ENV: ENV_NODE_ENV,
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1", // Enable gzip compression for responses > 1 KB
    },
    tracing: {
      apiGateway: true,
      lambda: true,
    },
    iamRoleStatements: [
      {
        Effect: "Allow",
        Action: ["xray:PutTraceSegments", "xray:PutTelemetryRecords"],
        Resource: "*",
      },
    ],
  },
  functions: {
    hello: {
      handler: "src/handler.helloHandler",
      events: [
        {
          http: {
            method: "get",
            path: "hello",
          },
        },
      ],
    },
  },
};

module.exports = serverlessConfiguration;
