const lambdahandler = require('@src/defaultHandler/index');

const default_event = {
    resource: '/',
    path: '/',
    httpMethod: 'POST',
    requestContext: {
        resourcePath:'/',
        httpMethod: 'POST',
        path:'/Prod/',
    },
    headers:{
        accept:'',
        Host: '',
        transactionId: '',
    }, multiValueHeaders:{
        accept:[''],
        "accept-encoding": ['gzip, defalte, br'],
    },
    queryStringParameters: null,
    multiValueQueryStringParameters: null,
    pathParameters: {},
    stageVariables: null,
    body: {"key": "value"},
};

// @ts-ignore

describe("First Test",
    () => {
        // @ts-ignore
        it("Live test", async () => {
            const response = await lambdahandler.handler(default_event, null);
            console.log(response);
        });
    });