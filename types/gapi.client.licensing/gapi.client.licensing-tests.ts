/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('licensing', 'v1', () => {
        /** now we can use gapi.client.licensing */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage G Suite licenses for your domain */
            'https://www.googleapis.com/auth/apps.licensing',
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
        /** Revoke License. */
        await gapi.client.licenseAssignments.delete({
            productId: "productId",
            skuId: "skuId",
            userId: "userId",
        });
        /** Get license assignment of a particular product and sku for a user */
        await gapi.client.licenseAssignments.get({
            productId: "productId",
            skuId: "skuId",
            userId: "userId",
        });
        /** Assign License. */
        await gapi.client.licenseAssignments.insert({
            productId: "productId",
            skuId: "skuId",
        });
        /** List license assignments for given product of the customer. */
        await gapi.client.licenseAssignments.listForProduct({
            customerId: "customerId",
            maxResults: 2,
            pageToken: "pageToken",
            productId: "productId",
        });
        /** List license assignments for given product and sku of the customer. */
        await gapi.client.licenseAssignments.listForProductAndSku({
            customerId: "customerId",
            maxResults: 2,
            pageToken: "pageToken",
            productId: "productId",
            skuId: "skuId",
        });
        /** Assign License. This method supports patch semantics. */
        await gapi.client.licenseAssignments.patch({
            productId: "productId",
            skuId: "skuId",
            userId: "userId",
        });
        /** Assign License. */
        await gapi.client.licenseAssignments.update({
            productId: "productId",
            skuId: "skuId",
            userId: "userId",
        });
    }
});
