/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('oauth2', 'v2', () => {
        /** now we can use gapi.client.oauth2 */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** Know the list of people in your circles, your age range, and language */
            'https://www.googleapis.com/auth/plus.login',
            /** Know who you are on Google */
            'https://www.googleapis.com/auth/plus.me',
            /** View your email address */
            'https://www.googleapis.com/auth/userinfo.email',
            /** View your basic profile info */
            'https://www.googleapis.com/auth/userinfo.profile',
        ];
        const immediate = true;
        gapi.auth.authorize({ client_id, scope, immediate }, authResult => {
            if (authResult && !authResult.error) {
                /** handle succesfull authorization */
                run();
            } else {
                /** handle authorization error */
            }
        });
        run();
    });

    async function run() {
        await gapi.client.userinfo.get({
        });
    }
});
