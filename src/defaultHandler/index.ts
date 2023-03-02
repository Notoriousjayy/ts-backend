import {APIGatewayProxyEvent} from 'aws-lambda';

exports.handler = async (event: APIGatewayProxyEvent) => {
    const {body} = event
    console.log(body)
    return body
}