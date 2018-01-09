// Type definitions for Google Enterprise License Manager API v1 1.0
// Project: https://developers.google.com/google-apps/licensing/
// Definitions by: Bolisov Alexey <https://github.com/Bolisov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// IMPORTANT
// This file was generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
// Generated from: https://www.googleapis.com/discovery/v1/apis/licensing/v1/rest

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Enterprise License Manager API v1 */
    function load(name: "licensing", version: "v1"): PromiseLike<void>;
    function load(name: "licensing", version: "v1", callback: () => any): void;

    const licenseAssignments: licensing.LicenseAssignmentsResource;

    namespace licensing {
        interface LicenseAssignment {
            /** ETag of the resource. */
            etags?: string;
            /** Identifies the resource as a LicenseAssignment. */
            kind?: string;
            /** Id of the product. */
            productId?: string;
            /** Display Name of the product. */
            productName?: string;
            /** Link to this page. */
            selfLink?: string;
            /** Id of the sku of the product. */
            skuId?: string;
            /** Display Name of the sku of the product. */
            skuName?: string;
            /** Email id of the user. */
            userId?: string;
        }
        interface LicenseAssignmentInsert {
            /** Email id of the user */
            userId?: string;
        }
        interface LicenseAssignmentList {
            /** ETag of the resource. */
            etag?: string;
            /** The LicenseAssignments in this page of results. */
            items?: LicenseAssignment[];
            /** Identifies the resource as a collection of LicenseAssignments. */
            kind?: string;
            /** The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. */
            nextPageToken?: string;
        }
        interface LicenseAssignmentsResource {
            /** Revoke License. */
            delete(request: {
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Name for product */
                productId: string;
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                /** Name for sku */
                skuId: string;
                /** email id or unique Id of the user */
                userId: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<void>;
            /** Get license assignment of a particular product and sku for a user */
            get(request: {
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Name for product */
                productId: string;
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                /** Name for sku */
                skuId: string;
                /** email id or unique Id of the user */
                userId: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<LicenseAssignment>;
            /** Assign License. */
            insert(request: {
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Name for product */
                productId: string;
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                /** Name for sku */
                skuId: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<LicenseAssignment>;
            /** List license assignments for given product of the customer. */
            listForProduct(request: {
                /** Data format for the response. */
                alt?: string;
                /** CustomerId represents the customer for whom licenseassignments are queried */
                customerId: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Maximum number of campaigns to return at one time. Must be positive. Optional. Default value is 100. */
                maxResults?: number;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Token to fetch the next page.Optional. By default server will return first page */
                pageToken?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Name for product */
                productId: string;
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<LicenseAssignmentList>;
            /** List license assignments for given product and sku of the customer. */
            listForProductAndSku(request: {
                /** Data format for the response. */
                alt?: string;
                /** CustomerId represents the customer for whom licenseassignments are queried */
                customerId: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** Maximum number of campaigns to return at one time. Must be positive. Optional. Default value is 100. */
                maxResults?: number;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Token to fetch the next page.Optional. By default server will return first page */
                pageToken?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Name for product */
                productId: string;
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                /** Name for sku */
                skuId: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<LicenseAssignmentList>;
            /** Assign License. This method supports patch semantics. */
            patch(request: {
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Name for product */
                productId: string;
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                /** Name for sku for which license would be revoked */
                skuId: string;
                /** email id or unique Id of the user */
                userId: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<LicenseAssignment>;
            /** Assign License. */
            update(request: {
                /** Data format for the response. */
                alt?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Name for product */
                productId: string;
                /**
                 * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
                 * Overrides userIp if both are provided.
                 */
                quotaUser?: string;
                /** Name for sku for which license would be revoked */
                skuId: string;
                /** email id or unique Id of the user */
                userId: string;
                /** IP address of the site where the request originates. Use this if you want to enforce per-user limits. */
                userIp?: string;
            }): Request<LicenseAssignment>;
        }
    }
}
