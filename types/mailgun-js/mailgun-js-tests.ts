import * as mailgunFactory from "mailgun-js";
import mailgunFactory2 = require('mailgun-js');

const mailgun = new mailgunFactory({
    apiKey: "auth.api_key",
    domain: "auth.domain"
});

const mailgun2 = new mailgunFactory2({
    apiKey: "auth.api_key",
    domain: "auth.domain"
});

mailgun.messages().send(
    {
        to: "fixture.message.to"
    },
    err => {
        console.log;
    }
);

const exampleSendData: mailgunFactory.messages.SendData = {
    to: "someone@email.com",
    attachment: new mailgun.Attachment({
        data: "filepath",
        filename: "my_custom_name.png"
    })
  };

mailgun.messages().send(exampleSendData, (err, body) => {});

const validationResult1: Promise<mailgunFactory.validation.ValidateResponse> =
    mailgun.validate("foo@mailgun.net");
const validationResult2: Promise<mailgunFactory.validation.ValidateResponse> =
    mailgun.validate("foo@mailgun.net", (error, body) => {});
const validationResult3: Promise<mailgunFactory.validation.ValidateResponse> =
    mailgun.validate("foo@mailgun.net", true);
const validationResult4: Promise<mailgunFactory.validation.ValidateResponse> =
    mailgun.validate("foo@mailgun.net", true, (error, body) => {});
const validationResult5: Promise<mailgunFactory.validation.ValidateResponse> =
    mailgun.validate("foo@mailgun.net", true, { option: "option" }, (error, body) => {});

const validationResult6: mailgunFactory.validation.ValidateResponse = {
    address: "foo@mailgun.net",
    did_you_mean: "bar@mailgun.net",
    is_disposable_address: false,
    is_role_address: true,
    is_valid: true,
    mailbox_verification: "true",
    parts: {
        display_name: "foo",
        domain: "mailgun.net",
        local_part: "foo"
    }
};
