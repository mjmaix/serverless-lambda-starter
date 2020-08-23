import "source-map-support/register";
import wrap from "@dazn/lambda-powertools-pattern-basic";
import { APIGatewayProxyHandler } from "aws-lambda";

import { echo } from "@queries/exampleQuery";

const hello: APIGatewayProxyHandler = async (event, context) => {
  console.log("[EVENT]", event);
  console.log("[CONTEXT]", context);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: echo(
          "Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!",
        ),
        input: event,
      },
      undefined,
      2,
    ),
  };
};

export const helloHandler = wrap(hello);
