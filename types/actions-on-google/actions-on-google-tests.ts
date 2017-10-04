import { ActionsSdkApp, ActionsSdkAppOptions, ApiAiApp, ApiAiAppOptions, AssistantApp,
    Responses, Transactions } from 'actions-on-google';
import * as express from 'express';

function testActionsSdk(request: express.Request, response: express.Response) {
    const app = new ActionsSdkApp({request, response});
    const actionMap = new Map();
    actionMap.set(app.StandardIntents.MAIN, () => {
        const richResponse: Responses.RichResponse = app.buildRichResponse()
            .addSimpleResponse('Hello world')
            .addSuggestions(['foo', 'bar']);
        app.ask(richResponse);
    });
    app.handleRequest(actionMap);
}

function testApiAi(request: express.Request, response: express.Response) {
    const app = new ApiAiApp({request, response});
    const actionMap = new Map();
    actionMap.set(app.StandardIntents.MAIN, () => {
        const order: Transactions.Order = app.buildOrder('foo');
        app.askForTransactionDecision(order, {
            type: app.Transactions.PaymentType.PAYMENT_CARD,
            displayName: 'VISA-1234',
            deliveryAddressRequired: true
        });
    });
    app.handleRequest(actionMap);
}

const expressApp = express();
expressApp.get('/actionssdk', (req, res) => testActionsSdk);
expressApp.get('/apiai', (req, res) => testApiAi);
