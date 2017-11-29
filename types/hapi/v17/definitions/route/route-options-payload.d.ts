import {Dictionary, Lifecycle} from "hapi";

/**
 * The value must be one of:
 * * 'data' - the incoming payload is read fully into memory. If parse is true, the payload is parsed (JSON, form-decoded, multipart) based on the 'Content-Type' header. If parse is false, a raw Buffer is returned.
 * * 'stream' - the incoming payload is made available via a Stream.Readable interface. If the payload is 'multipart/form-data' and parse is true, field values are presented as text while files are provided as streams. File streams from a 'multipart/form-data' upload will also have a hapi property containing the filename and headers properties. Note that payload streams for multipart payloads are a synthetic interface created on top of the entire mutlipart content loaded into memory. To avoid loading large multipart payloads into memory, set parse to false and handle the multipart payload in the handler using a streaming parser (e.g. pez).
 * * 'file' - the incoming payload is written to temporary file in the directory specified by the uploads settings. If the payload is 'multipart/form-data' and parse is true, field values are presented as text while files are saved to disk. Note that it is the sole responsibility of the application to clean up the files generated by the framework. This can be done by keeping track of which files are used (e.g. using the request.app object), and listening to the server 'response' event to perform cleanup.
 * For context [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspayloadoutput)
 */
export type PayloadOutput = 'data' | 'stream' | 'file';

/**
  * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspayloadcompression)
 */
export type PayloadCompressionDecoderSettings = any;

/**
 * Determines how the request payload is processed.
 * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspayload)
 */
export interface RouteOptionsPayload {

    /**
     * Default value: allows parsing of the following mime types:
     * * application/json
     * * application/*+json
     * * application/octet-stream
     * * application/x-www-form-urlencoded
     * * multipart/form-data
     * * text/*
     * A string or an array of strings with the allowed mime types for the endpoint. Use this settings to limit the set of allowed mime types. Note that allowing additional mime types not listed above will not enable them to be parsed, and if parse is true, the request will result in an error response.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspayloadallow)
     */
    allow?: string | string[];

    /**
     * Default value: none.
     * An object where each key is a content-encoding name and each value is an object with the desired decoder settings. Note that encoder settings are set in compression.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspayloadcompression)
     */
    compression?: Dictionary<PayloadCompressionDecoderSettings>;

    /**
     * Default value: 'application/json'.
     * The default content type if the 'Content-Type' request header is missing.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspayloaddefaultcontenttype)
     */
    defaultContentType?: string;

    /**
     * Default value: 'error' (return a Bad Request (400) error response).
     * A failAction value which determines how to handle payload parsing errors.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspayloadfailaction)
     */
    failAction?: Lifecycle.FailAction;

    /**
     * Default value: 1048576 (1MB).
     * Limits the size of incoming payloads to the specified byte count. Allowing very large payloads may cause the server to run out of memory.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspayloadmaxbytes)
     */
    maxBytes?: number;

    /**
     * Default value: none.
     * Overrides payload processing for multipart requests. Value can be one of:
     * * false - disable multipart processing.
     * an object with the following required options:
     * * output - same as the output option with an additional value option:
     * * * annotated - wraps each multipart part in an object with the following keys: // TODO type this?
     * * * * headers - the part headers.
     * * * * filename - the part file name.
     * * * * payload - the processed part payload.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspayloadmultipart)
     */
    multipart?: false | {
        output: PayloadOutput | 'annotated';
    };

    /**
     * Default value: 'data'.
     * The processed payload format. The value must be one of:
     * * 'data' - the incoming payload is read fully into memory. If parse is true, the payload is parsed (JSON, form-decoded, multipart) based on the 'Content-Type' header. If parse is false, a raw Buffer is returned.
     * * 'stream' - the incoming payload is made available via a Stream.Readable interface. If the payload is 'multipart/form-data' and parse is true, field values are presented as text while files are provided as streams. File streams from a 'multipart/form-data' upload will also have a hapi property containing the filename and headers properties. Note that payload streams for multipart payloads are a synthetic interface created on top of the entire mutlipart content loaded into memory. To avoid loading large multipart payloads into memory, set parse to false and handle the multipart payload in the handler using a streaming parser (e.g. pez).
     * * 'file' - the incoming payload is written to temporary file in the directory specified by the uploads settings. If the payload is 'multipart/form-data' and parse is true, field values are presented as text while files are saved to disk. Note that it is the sole responsibility of the application to clean up the files generated by the framework. This can be done by keeping track of which files are used (e.g. using the request.app object), and listening to the server 'response' event to perform cleanup.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspayloadoutput)
     */
    output?: PayloadOutput;

    /**
     * Default value: none.
     * A mime type string overriding the 'Content-Type' header value received.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspayloadoverride)
     */
    override?: string;

    /**
     * Default value: true.
     * Determines if the incoming payload is processed or presented raw. Available values:
     * * true - if the request 'Content-Type' matches the allowed mime types set by allow (for the whole payload as well as parts), the payload is converted into an object when possible. If the format is unknown, a Bad Request (400) error response is sent. Any known content encoding is decoded.
     * * false - the raw payload is returned unmodified.
     * * 'gunzip' - the raw payload is returned unmodified after any known content encoding is decoded.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspayloadparse)
     */
    parse?: boolean | 'gunzip';

    /**
     * Default value: to 10000 (10 seconds).
     * Payload reception timeout in milliseconds. Sets the maximum time allowed for the client to transmit the request payload (body) before giving up and responding with a Request Timeout (408) error response.
     * Set to false to disable.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspayloadtimeout)
     */
    timeout?: false | number;

    /**
     * Default value: os.tmpdir().
     * The directory used for writing file uploads.
     * [See docs](https://github.com/hapijs/hapi/blob/master/API.md#-routeoptionspayloaduploads)
     */
    uploads?: string;

}
