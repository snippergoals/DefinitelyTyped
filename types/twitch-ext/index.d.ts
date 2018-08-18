// Type definitions for twitch-ext 1.14
// Project: https://dev.twitch.tv/docs/extensions/reference/#javascript-helper
// Definitions by: Benedict Etzel <https://github.com/beheh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

interface Window {
	Twitch: { ext: TwitchExt };
}

/**
 * The Twitch extensions JavaScript Helper.
 *
 * @see https://dev.twitch.tv/docs/extensions/reference/#javascript-helper
 */
interface TwitchExt {
	/**
	 * This encodes the Helper version in 1.1.1 (semantic versioning) format.
	 */
	version: string;

	/**
	 * This encodes the environment. For external users, this is always production.
	 */
	environment: "production";

	/**
	 * @see https://dev.twitch.tv/docs/extensions/reference/#twitch-extension-actions
	 */
	actions: TwitchExtActions;

	/**
	 * Helper methods for the Twitch Extension rig.
	 * @see https://github.com/twitchdev/developer-rig
	 */
	rig: TwitchExtRig;

	/**
	 * This function binds the callback to the initial values and changes to the authorization data.
	 *
	 * @param authCallback This callback is fired each time the JWT is refreshed.
	 * @see https://dev.twitch.tv/docs/extensions/reference/#onauthorized
	 */
	onAuthorized(authCallback: (auth: TwitchExtAuthorized) => void): void;

	/**
	 * This function binds the callback to the initial values and changes to the context.
	 *
	 * @param contextCallback This callback is fired when the context of an extension is fired.
	 * @see https://dev.twitch.tv/docs/extensions/reference/#oncontext
	 */
	onContext(
		contextCallback: <T extends Partial<TwitchExtContext>>(
			context: T,
			changed: ReadonlyArray<keyof T>
		) => void
	): void;

	/**
	 * This function binds the callback to any internal error.
	 *
	 * @param errorCallback This callback is fired if any errors are generated by the extension helper.
	 * @see https://dev.twitch.tv/docs/extensions/reference/#onerror
	 */
	onError(errorCallback: (errorValue: any) => void): void;

	/**
	 * This function registers a callback that gets called whenever an extension changes position in the player. This
	 * occurs only for video-component extensions. This also is triggered as the extension loads.
	 *
	 * @param callback This callback is called whenever an extension changes position in the player.
	 * @see https://dev.twitch.tv/docs/extensions/reference/#onpositionchanged
	 */
	onPositionChanged(
		callback: (position: { x: number; y: number }) => void
	): void;

	/**
	 * This function registers a callback that gets called whenever an extension is hidden/re-shown. (This occurs only
	 * for mobile or component extensions.) When an extension is not visible in the mobile app, it does not receive
	 * onContext updates and must perform only minimal work in the background.
	 *
	 * @param callback This callback is called whenever an extension is hidden/re-shown.
	 * @see https://dev.twitch.tv/docs/extensions/reference/#onvisibilitychanged
	 */
	onVisibilityChanged(
		callback:
			| ((isVisible: false) => void)
			| ((isVisible: true, context: Partial<TwitchExtContext>) => void)
	): void;

	/**
	 * This function can be called by the front end to send directly to PubSub.
	 *
	 * @param target Target topic. Often this is "broadcast" but it might be "whisper-<userId>".
	 * @param contentType type of the serialized message; for example, "application/json".
	 * @param message Either an object that will be automatically serialized as JSON or a string.
	 * @see https://dev.twitch.tv/docs/extensions/reference/#send
	 */
	send(target: string, contentType: string, message: object | string): void;

	/**
	 * This function binds the callback to listen to the target topic.
	 *
	 * @param target Target topic. Often this is "broadcast" but it might be "whisper-<userId>".
	 * @param callback These fields correspond to the values in the send() message, except the message is always a string.
	 * @see https://dev.twitch.tv/docs/extensions/reference/#listen
	 */
	listen(
		target: string,
		callback: (target: string, contentType: string, message: string) => void
	): void;

	/**
	 * This function unbinds the listen callback from the target.
	 *
	 * @param target Target topic. Often this is "broadcast" but it might be "whisper-<userId>".
	 * @param callback These fields correspond to the values in the send() message, except the message is always a string.
	 * @see https://dev.twitch.tv/docs/extensions/reference/#unlisten
	 */
	unlisten(
		target: string,
		callback: (target: string, contentType: string, message: string) => void
	): void;
}

/**
 * Twitch actions add first-party Twitch functionality to extensions.
 *
 * @see TwitchExt.actions
 */
interface TwitchExtActions {
	/**
	 * This function prompts users to follow the specified channel, with a dialog controlled by Twitch.
	 *
	 * @see https://dev.twitch.tv/docs/extensions/reference/#followchannel
	 */
	followChannel(channelName: string): void;

	/**
	 * This function registers a callback that is invoked whenever a user completes an interaction prompted by the followChannel action.
	 *
	 * @see https://dev.twitch.tv/docs/extensions/reference/#onfollow
	 */
	onFollow(callback: (didFollow: boolean, channelName: string) => void): void;

	/**
	 * This function opens a prompt for users to share their identity.
	 * After a successful identity link, the Twitch.ext.onAuthorized callback is invoked with the user’s ID.
	 *
	 * @see https://dev.twitch.tv/docs/extensions/reference/#requestidshare
	 */
	requestIdShare(): void;
}

/**
 * The developer rig object as available under window.Twitch.ext.rig.
 *
 * @see TwitchExt.rig
 */
interface TwitchExtRig {
	/**
	 * Print a message to the developer rig console.
	 *
	 * @param message The message to print.
	 * @see https://github.com/twitchdev/developer-rig#rig-console
	 */
	log(message: string): void;
}

/**
 * The result object as passed to the onAuthorized callback.
 *
 * @see TwitchExt.onAuthorized
 */
interface TwitchExtAuthorized {
	/**
	 * Channel ID of the page where the extension is iframe embedded.
	 */
	channelId: string;

	/**
	 * Client ID of the extension.
	 */
	clientId: string;

	/**
	 * JWT that should be passed to any EBS call for authentication.
	 */
	token: string;

	/**
	 * Opaque user ID.
	 */
	userId: string;
}

/**
 * The result object as passed to the onContext callback.
 *
 * @see TwitchExt.onContext
 */
interface TwitchExtContext {
	/**
	 * If true, player controls are visible (e.g., due to mouseover).
	 * Do not use this for mobile extensions; it is not sent for mobile.
	 */
	arePlayerControlsVisible: boolean;

	/**
	 * Bitrate of the broadcast.
	 */
	bitrate: number;

	/**
	 * Buffer size of the broadcast.
	 */
	bufferSize: number;

	/**
	 * Display size of the player.
	 */
	displayResolution: string;

	/**
	 * Game being broadcast.
	 */
	game: string;

	/**
	 * Number of seconds of latency between the broadcaster and viewer.
	 */
	hlsLatencyBroadcaster: number;

	/**
	 * If true, the viewer is watching in fullscreen mode.
	 * Do not use this for mobile extensions; it is not sent for mobile.
	 */
	isFullScreen: boolean;

	/**
	 * If true, the viewer has muted the stream.
	 */
	isMuted: boolean;

	/**
	 * If true, the viewer has paused the stream.
	 */
	isPaused: boolean;

	/**
	 * If true, the viewer is watching in theater mode.
	 * Do not use this for mobile extensions; it is not sent for mobile.
	 */
	isTheatreMode: boolean;

	/**
	 * Language of the broadcast (e.g., "en").
	 */
	language: string;

	/**
	 * The mode the extension is currently run in.
	 */
	mode: "viewer" | "dashboard" | "config";

	/**
	 * Indicates how the stream is being played.
	 */
	playbackMode: "video" | "audio" | "remote" | "chat-only";

	/**
	 * The user’s theme setting on the Twitch website.
	 */
	theme: "light" | "dark";

	/**
	 * Resolution of the broadcast.
	 */
	videoResolution: string;

	/**
	 * Currently selected player volume. Valid values: between 0 and 1.
	 */
	volume: number;
}

/**
 * The extension window receives the following query parameters, which indicate
 * information about the extension environment that isn’t subject to change over
 * the frame’s life cycle.
 *
 * @see https://dev.twitch.tv/docs/extensions/reference/#client-query-parameters
 */
interface TwitchExtClientQueryParams {
	/**
	 * The type of the anchor in which the extension is activated.
	 */
	anchor: "component" | "panel" | "video_overlay";

	/**
	 * The user’s language setting.
	 *
	 * @example en
	 */
	language: string;

	/**
	 * The extension’s mode.
	 */
	mode: "config" | "dashboard" | "viewer";

	/**
	 * The platform on which the Twitch client is running.
	 */
	platform: "mobile" | "web";

	/**
	 * The release state of the extension.
	 */
	state:
		| "testing"
		| "hosted_test"
		| "approved"
		| "released"
		| "ready_for_review"
		| "in_review"
		| "pending_action"
		| "uploading";
}
