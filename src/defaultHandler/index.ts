import { APIGatewayProxyEvent } from 'aws-lambda';

exports.handler = async (event: APIGatewayProxyEvent) => {
  const hello = (name: string) => console.log(`Hello ${name}`);

  return hello('Jordan');
};
