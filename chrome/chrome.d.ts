// Type definitions for Chrome extension development
// Project: http://developer.chrome.com/extensions/
// Definitions by: Matthew Kimber <https://github.com/matthewkimber>, otiai10 <https://github.com/otiai10>, couven92 <https://gitbus.com/couven92>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path='../webrtc/MediaStream.d.ts'/>

////////////////////
// Global object
////////////////////
interface Window {
    chrome: typeof chrome;
}

////////////////////
// Accessibility Features
////////////////////
/**
 * Use the chrome.accessibilityFeatures API to manage Chrome's accessibility features. This API relies on the ChromeSetting prototype of the type API for getting and setting individual accessibility features. In order to get feature states the extension must request accessibilityFeatures.read permission. For modifying feature state, the extension needs accessibilityFeatures.modify permission. Note that accessibilityFeatures.modify does not imply accessibilityFeatures.read permission.
 * Availability: Since Chrome 37.  
 * Permissions: "accessibilityFeatures.read"
 * Important: This API works only on Chrome OS.
 */
declare module chrome.accessibilityFeatures {
	interface AccessibilityFeaturesGetArg {
		/** Whether to return the value that applies to the incognito session (default false). */
		incognito?: boolean;
	}

	interface AccessibilityFeaturesCallbackArg {
		/** The value of the setting. */
		value: any;
		/**
		 * One of
		 * • not_controllable: cannot be controlled by any extension
		 * • controlled_by_other_extensions: controlled by extensions with higher precedence
		 * • controllable_by_this_extension: can be controlled by this extension
		 * • controlled_by_this_extension: controlled by this extension
		 */
		levelOfControl: string;
		/** Whether the effective value is specific to the incognito session. This property will only be present if the incognito property in the details parameter of get() was true. */
		incognitoSpecific?: boolean;
	}

	interface AccessibilityFeaturesSetArg {
		/**
		 * The value of the setting. 
		 * Note that every setting has a specific value type, which is described together with the setting. An extension should not set a value of a different type. 
		 */
		value: any;
		/**
		 * The scope of the ChromeSetting. One of
		 * • regular: setting for the regular profile (which is inherited by the incognito profile if not overridden elsewhere),
		 * • regular_only: setting for the regular profile only (not inherited by the incognito profile),
		 * • incognito_persistent: setting for the incognito profile that survives browser restarts (overrides regular preferences),
		 * • incognito_session_only: setting for the incognito profile that can only be set during an incognito session and is deleted when the incognito session ends (overrides regular and incognito_persistent preferences).
		 */
		scope?: string;
	}

	interface AccessibilityFeaturesClearArg {
		/**
		 * The scope of the ChromeSetting. One of
		 * • regular: setting for the regular profile (which is inherited by the incognito profile if not overridden elsewhere),
		 * • regular_only: setting for the regular profile only (not inherited by the incognito profile),
		 * • incognito_persistent: setting for the incognito profile that survives browser restarts (overrides regular preferences),
		 * • incognito_session_only: setting for the incognito profile that can only be set during an incognito session and is deleted when the incognito session ends (overrides regular and incognito_persistent preferences).
		 */
		scope?: string;
	}

	interface AccessibilityFeaturesSetting {
		/**
		 * Gets the value of a setting.
		 * @param details Which setting to consider.
		 * @param callback The callback parameter should be a function that looks like this:
		 * function(object details) {...};
		 */
		get(details: AccessibilityFeaturesGetArg, callback: (details: AccessibilityFeaturesCallbackArg) => void): void;
		/**
		 * Sets the value of a setting.
		 * @param details Which setting to change.
		 * @param callback Called at the completion of the set operation.
		 * If you specify the callback parameter, it should be a function that looks like this:
		 * function() {...};
		 */
		set(details: AccessibilityFeaturesSetArg, callback?: () => void): void;
		/**
		 * Clears the setting, restoring any default value.
		 * @param details Which setting to clear.
		 * @param callback Called at the completion of the clear operation.
		 * If you specify the callback parameter, it should be a function that looks like this:
		 * function() {...};
		 */
		clear(details: AccessibilityFeaturesClearArg, callback?: () => void): void;
	}

	var spokenFeedback: AccessibilityFeaturesSetting;
	var largeCursor: AccessibilityFeaturesSetting;
	var stickyKeys: AccessibilityFeaturesSetting;
	var highContrast: AccessibilityFeaturesSetting;
	var screenMagnifier: AccessibilityFeaturesSetting;
	var autoclick: AccessibilityFeaturesSetting;
	var virtualKeyboard: AccessibilityFeaturesSetting;
	var animationPolicy: AccessibilityFeaturesSetting;
}

////////////////////
// Alarms
////////////////////
/**
 * Use the chrome.alarms API to schedule code to run periodically or at a specified time in the future. 
 * Availability: Since Chrome 22.
 * Permissions:  "alarms"
 */
declare module chrome.alarms {
    interface AlarmCreateInfo {
		/** Length of time in minutes after which the onAlarm event should fire. */
        delayInMinutes?: number;
		/** If set, the onAlarm event should fire every periodInMinutes minutes after the initial event specified by when or delayInMinutes. If not set, the alarm will only fire once. */
        periodInMinutes?: number;
		/** Time at which the alarm should fire, in milliseconds past the epoch (e.g. Date.now() + n). */
        when?: number;
    }

    interface Alarm {
		/** If not null, the alarm is a repeating alarm and will fire again in periodInMinutes minutes. */
        periodInMinutes?: number;
		/** Time at which this alarm was scheduled to fire, in milliseconds past the epoch (e.g. Date.now() + n). For performance reasons, the alarm may have been delayed an arbitrary amount beyond this. */
        scheduledTime: number;
		/** Name of this alarm. */
        name: string;
    }

    interface AlarmEvent extends chrome.events.Event {
		/**
		 * The callback parameter should be a function that looks like this:
		 * function( Alarm alarm) {...}; 
		 */
        addListener(callback: (alarm: Alarm) => void): void;
    }

	/**
	 * Creates an alarm. Near the time(s) specified by alarmInfo, the onAlarm event is fired. If there is another alarm with the same name (or no name if none is specified), it will be cancelled and replaced by this alarm.
	 * In order to reduce the load on the user's machine, Chrome limits alarms to at most once every 1 minute but may delay them an arbitrary amount more. That is, setting delayInMinutes or periodInMinutes to less than 1 will not be honored and will cause a warning. when can be set to less than 1 minute after "now" without warning but won't actually cause the alarm to fire for at least 1 minute.
	 * To help you debug your app or extension, when you've loaded it unpacked, there's no limit to how often the alarm can fire.
	 * @param alarmInfo Describes when the alarm should fire. The initial time must be specified by either when or delayInMinutes (but not both). If periodInMinutes is set, the alarm will repeat every periodInMinutes minutes after the initial event. If neither when or delayInMinutes is set for a repeating alarm, periodInMinutes is used as the default for delayInMinutes. 
	 */
    export function create(alarmInfo: AlarmCreateInfo): void;	
	/**
	 * Creates an alarm. Near the time(s) specified by alarmInfo, the onAlarm event is fired. If there is another alarm with the same name (or no name if none is specified), it will be cancelled and replaced by this alarm.
	 * In order to reduce the load on the user's machine, Chrome limits alarms to at most once every 1 minute but may delay them an arbitrary amount more. That is, setting delayInMinutes or periodInMinutes to less than 1 will not be honored and will cause a warning. when can be set to less than 1 minute after "now" without warning but won't actually cause the alarm to fire for at least 1 minute.
	 * To help you debug your app or extension, when you've loaded it unpacked, there's no limit to how often the alarm can fire.
	 * @param name Optional name to identify this alarm. Defaults to the empty string. 
	 * @param alarmInfo Describes when the alarm should fire. The initial time must be specified by either when or delayInMinutes (but not both). If periodInMinutes is set, the alarm will repeat every periodInMinutes minutes after the initial event. If neither when or delayInMinutes is set for a repeating alarm, periodInMinutes is used as the default for delayInMinutes. 
	 */
	export function create(name: string, alarmInfo: AlarmCreateInfo): void;
	/**
	 * Gets an array of all the alarms. 
	 * @param callback The callback parameter should be a function that looks like this:
	 * function(array of Alarm alarms) {...}; 
	 */
    export function getAll(callback: (alarms: Alarm[]) => void): void;
	/**
	 * Clears all alarms. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this:
	 * function(boolean wasCleared) {...}; 
	 */
    export function clearAll(callback?: (wasCleared: boolean) => void): void;
	/**
	 * Clears the alarm with the given name. 
	 * @param name The name of the alarm to clear. Defaults to the empty string. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this:
	 * function(boolean wasCleared) {...}; 
	 */
    export function clear(name?: string, callback?: (wasCleared: boolean) => void): void;
	/**
	 * Clears the alarm without a name. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this:
	 * function(boolean wasCleared) {...}; 
	 */
    export function clear(callback: (wasCleared: boolean) => void): void;
	/**
	 * Retrieves details about the specified alarm. 
	 * @param callback The callback parameter should be a function that looks like this:
	 * function( Alarm alarm) {...}; 
	 */
	export function get(callback: (alarm: Alarm) => void): void;
	/**
	 * Retrieves details about the specified alarm. 
	 * @param name The name of the alarm to get. Defaults to the empty string.
	 * @param callback The callback parameter should be a function that looks like this:
	 * function( Alarm alarm) {...}; 
	 */
    export function get(name: string, callback: (alarm: Alarm) => void): void;
	
	/** Fired when an alarm has elapsed. Useful for event pages. */
    var onAlarm: AlarmEvent;
}

/**
 * Use the chrome.browser API to interact with the Chrome browser associated with 
 * the current application and Chrome profile. 
 */
declare module chrome.browser {
    interface Options {
        /** The URL to navigate to when the new tab is initially opened. */
        url: string;
    }
    
    /**
     * Opens a new tab in a browser window associated with the current application 
     * and Chrome profile. If no browser window for the Chrome profile is opened, 
     * a new one is opened prior to creating the new tab. 
     * @param options Configures how the tab should be opened. 
     * @param callback Called when the tab was successfully 
     * created, or failed to be created. If failed, runtime.lastError will be set.
     */
    export function openTab(options: Options, callback: () => void): void;
     
	/**
	* Opens a new tab in a browser window associated with the current application 
	* and Chrome profile. If no browser window for the Chrome profile is opened, 
	* a new one is opened prior to creating the new tab. Since Chrome 42 only. 
	* @param options Configures how the tab should be opened. 
	*/
    export function openTab(options: Options): void;
}

////////////////////
// Bookmarks
////////////////////
/**
 * Use the chrome.bookmarks API to create, organize, and otherwise manipulate bookmarks. Also see Override Pages, which you can use to create a custom Bookmark Manager page. 
 * Availability: Since Chrome 5.  
 * Permissions:  "bookmarks"   
 */
declare module chrome.bookmarks {
	/** A node (either a bookmark or a folder) in the bookmark tree. Child nodes are ordered within their parent folder. */
    interface BookmarkTreeNode {
		/** The 0-based position of this node within its parent folder. */
        index?: number;
		/** When this node was created, in milliseconds since the epoch (new Date(dateAdded)). */
        dateAdded?: number;
		/** The text displayed for the node. */
        title: string;
		/** The URL navigated to when a user clicks the bookmark. Omitted for folders.  */
        url?: string;
		/** When the contents of this folder last changed, in milliseconds since the epoch.  */
        dateGroupModified?: number;
		/** The unique identifier for the node. IDs are unique within the current profile, and they remain valid even after the browser is restarted.  */
        id: string;
		/** The id of the parent folder. Omitted for the root node.  */
        parentId?: string;
		/** An ordered list of children of this node. */
        children?: BookmarkTreeNode[];
		/**
		 * Since Chrome 37. 
		 * Indicates the reason why this node is unmodifiable. The managed value indicates that this node was configured by the system administrator or by the custodian of a supervised user. Omitted if the node can be modified by the user and the extension (default). 
		 */
		unmodifiable?: any;
    }

    interface BookmarkRemoveInfo {
        index: number;
        parentId: string;
    }

    interface BookmarkMoveInfo {
        index: number;
        oldIndex: number;
        parentId: string;
        oldParentId: string;
    }

    interface BookmarkChangeInfo {
        url?: string;
        title: string;
    }

    interface BookmarkReorderInfo {
        childIds: string[];
    }

    interface BookmarkRemovedEvent extends chrome.events.Event {
		/** 
		 * @param callback The callback parameter should be a function that looks like this:
		 * function(string id, object removeInfo) {...};  
		 */
		addListener(callback: (id: string, removeInfo: BookmarkRemoveInfo) => void): void;
    }

    interface BookmarkImportEndedEvent extends chrome.events.Event {
        /** 
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function() {...}; 
		 */
		addListener(callback: () => void): void;
    }

    interface BookmarkMovedEvent extends chrome.events.Event {
        /** 
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(string id, object moveInfo) {...}; 
		 */
		addListener(callback: (id: string, moveInfo: BookmarkMoveInfo) => void): void;
    }

    interface BookmarkImportBeganEvent extends chrome.events.Event {
        /** 
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function() {...}; 
		 */
		addListener(callback: () => void): void;
    }

    interface BookmarkChangedEvent extends chrome.events.Event {
        /** 
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(string id, object changeInfo) {...}; 
		 */
		addListener(callback: (id: string, changeInfo: BookmarkChangeInfo) => void): void;
    }

    interface BookmarkCreatedEvent extends chrome.events.Event {
        /** 
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(string id, BookmarkTreeNode bookmark) {...}; 
		 */
		addListener(callback: (id: string, bookmark: BookmarkTreeNode) => void): void;
    }

    interface BookmarkChildrenReordered extends chrome.events.Event {
        /** 
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(string id, object reorderInfo) {...}; 
		 */
		addListener(callback: (id: string, reorderInfo: BookmarkReorderInfo) => void): void;
    }

	interface BookmarkSearchQuery {
		query?: string;
		url?: string;
		title?: string;
	}

	interface BookmarkCreateArg {
		/** Defaults to the Other Bookmarks folder. */
		parentId?: string;
		index?: number;
		title?: string;
		url?: string;
	}

	interface BookmarkDestinationArg {
		parentId?: string;
		index?: number;
	}

	interface BookmarkChangesArg {
		title?: string;
		url?: string;
	}
	
	/** @deprecated since Chrome 38. Bookmark write operations are no longer limited by Chrome. */
    var MAX_WRITE_OPERATIONS_PER_HOUR: number;
	/** @deprecated since Chrome 38. Bookmark write operations are no longer limited by Chrome. */
    var MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE: number;
    
	/**
	 * Searches for BookmarkTreeNodes matching the given query. Queries specified with an object produce BookmarkTreeNodes matching all specified properties. 
	 * @param query A string of words and quoted phrases that are matched against bookmark URLs and titles.
	 * @param callback The callback parameter should be a function that looks like this: 
	 * function(array of BookmarkTreeNode results) {...}; 
	 */
	export function search(query: string, callback: (results: BookmarkTreeNode[]) => void): void;
	/**
	 * Searches for BookmarkTreeNodes matching the given query. Queries specified with an object produce BookmarkTreeNodes matching all specified properties. 
	 * @param query An object with one or more of the properties query, url, and title specified. Bookmarks matching all specified properties will be produced. 
	 * @param callback The callback parameter should be a function that looks like this: 
	 * function(array of BookmarkTreeNode results) {...}; 
	 */
	export function search(query: BookmarkSearchQuery, callback: (results: BookmarkTreeNode[]) => void): void;
	/**
	 * Retrieves the entire Bookmarks hierarchy. 
	 * @param callback The callback parameter should be a function that looks like this:
	 * function(array of BookmarkTreeNode results) {...}; 
	 */
    export function getTree(callback: (results: BookmarkTreeNode[]) => void): void;
	/**
	 * Retrieves the recently added bookmarks. 
	 * @param numberOfItems The maximum number of items to return. 
	 * @param callback The callback parameter should be a function that looks like this:
	 * function(array of BookmarkTreeNode results) {...}; 
	 */
    export function getRecent(numberOfItems: number, callback: (results: BookmarkTreeNode[]) => void): void;
	/**
	 * Retrieves the specified BookmarkTreeNode.
	 * @param id A single string-valued id
	 * @param callback The callback parameter should be a function that looks like this:
	 * function(array of BookmarkTreeNode results) {...}; 
	 */
    export function get(id: string, callback: (results: BookmarkTreeNode[]) => void): void;
	/**
	 * Retrieves the specified BookmarkTreeNode.
	 * @param idList An array of string-valued ids
	 * @param callback The callback parameter should be a function that looks like this:
	 * function(array of BookmarkTreeNode results) {...}; 
	 */
    export function get(idList: string[], callback: (results: BookmarkTreeNode[]) => void): void;
	/**
	 * Creates a bookmark or folder under the specified parentId. If url is NULL or missing, it will be a folder. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this:
	 * function( BookmarkTreeNode result) {...}; 
	 */
    export function create(bookmark: BookmarkCreateArg, callback?: (result: BookmarkTreeNode) => void): void;
	/**
	 * Moves the specified BookmarkTreeNode to the provided location. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this:
	 * function( BookmarkTreeNode result) {...}; 
	 */
    export function move(id: string, destination: BookmarkDestinationArg, callback?: (result: BookmarkTreeNode) => void): void;
	/**
	 * Updates the properties of a bookmark or folder. Specify only the properties that you want to change; unspecified properties will be left unchanged. Note: Currently, only 'title' and 'url' are supported. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this:
	 * function( BookmarkTreeNode result) {...}; 
	 */
    export function update(id: string, changes: BookmarkChangesArg, callback?: (result: BookmarkTreeNode) => void): void;
	/**
	 * Removes a bookmark or an empty bookmark folder. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this:
	 * function() {...}; 
	 */
    export function remove(id: string, callback?: Function): void;
	/**
	 * Retrieves the children of the specified BookmarkTreeNode id. 
	 * @param callback The callback parameter should be a function that looks like this:
	 * function(array of BookmarkTreeNode results) {...}; 
	 */
    export function getChildren(id: string, callback: (results: BookmarkTreeNode[]) => void): void;
	/**
	 * Since Chrome 14. 
	 * Retrieves part of the Bookmarks hierarchy, starting at the specified node. 
	 * @param id The ID of the root of the subtree to retrieve. 
	 * @param callback The callback parameter should be a function that looks like this:
	 * function(array of BookmarkTreeNode results) {...}; 
	 */
    export function getSubTree(id: string, callback: (results: BookmarkTreeNode[]) => void): void;
	/**
	 * Recursively removes a bookmark folder. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this:
	 * function() {...}; 
	 */
    export function removeTree(id: string, callback?: Function): void;

	/** Fired when a bookmark or folder is removed. When a folder is removed recursively, a single notification is fired for the folder, and none for its contents. */
    var onRemoved: BookmarkRemovedEvent;
	/** Fired when a bookmark import session is ended. */
    var onImportEnded: BookmarkImportEndedEvent;
	/** Fired when a bookmark import session is begun. Expensive observers should ignore onCreated updates until onImportEnded is fired. Observers should still handle other notifications immediately. */
    var onImportBegan: BookmarkImportBeganEvent;
	/** Fired when a bookmark or folder changes. Note: Currently, only title and url changes trigger this. */
    var onChanged: BookmarkChangedEvent;
	/** Fired when a bookmark or folder is moved to a different parent folder. */
    var onMoved: BookmarkMovedEvent;
	/** Fired when a bookmark or folder is created. */
    var onCreated: BookmarkCreatedEvent;
	/** Fired when the children of a folder have changed their order due to the order being sorted in the UI. This is not called as a result of a move(). */
    var onChildrenReordered: BookmarkChildrenReordered;
}

////////////////////
// Browser Action
////////////////////
/**
 * Use browser actions to put icons in the main Google Chrome toolbar, to the right of the address bar. In addition to its icon, a browser action can also have a tooltip, a badge, and a popup.
 * Availability: Since Chrome 5.  
 * Manifest:  "browser_action": {...}   
 */
declare module chrome.browserAction {
    interface BadgeBackgroundColorDetails {
		/** An array of four integers in the range [0,255] that make up the RGBA color of the badge. For example, opaque red is [255, 0, 0, 255]. Can also be a string with a CSS value, with opaque red being #FF0000 or #F00. */
        color: any;
		/** Limits the change to when a particular tab is selected. Automatically resets when the tab is closed. */
        tabId?: number;
    }

    interface BadgeTextDetails {
		/** Any number of characters can be passed, but only about four can fit in the space. */
        text: string;
		/** Limits the change to when a particular tab is selected. Automatically resets when the tab is closed. */
        tabId?: number;
    }

    interface TitleDetails {
		/** The string the browser action should display when moused over. */
        title: string;
		/** Limits the change to when a particular tab is selected. Automatically resets when the tab is closed. */
        tabId?: number;
    }

    interface TabDetails {
		/** Specify the tab to get the information. If no tab is specified, the non-tab-specific information is returned. */
        tabId?: number;
    }

    interface TabIconDetails {
		/** Either a relative image path or a dictionary {size -> relative image path} pointing to icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals scale, then image with size scale * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that 'details.path = foo' is equivalent to 'details.imageData = {'19': foo}' */
        path?: any;
		/** Limits the change to when a particular tab is selected. Automatically resets when the tab is closed. */
        tabId?: number;
		/** Either an ImageData object or a dictionary {size -> ImageData} representing icon to be set. If the icon is specified as a dictionary, the actual image to be used is chosen depending on screen's pixel density. If the number of image pixels that fit into one screen space unit equals scale, then image with size scale * 19 will be selected. Initially only scales 1 and 2 will be supported. At least one image must be specified. Note that 'details.imageData = foo' is equivalent to 'details.imageData = {'19': foo}' */
        imageData?: ImageData;
    }

    interface PopupDetails {
		/** Limits the change to when a particular tab is selected. Automatically resets when the tab is closed. */
        tabId?: number;
		/** The html file to show in a popup. If set to the empty string (''), no popup is shown. */
        popup: string;
    }

    interface BrowserClickedEvent extends chrome.events.Event {
		/** 
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function( tabs.Tab tab) {...}; 
		 */
        addListener(callback: (tab: chrome.tabs.Tab) => void): void;
    }

	/**
	 * Since Chrome 22. 
	 * Enables the browser action for a tab. By default, browser actions are enabled. 
	 * @param tabId The id of the tab for which you want to modify the browser action. 
	 */
    export function enable(tabId?: number): void;
	/** Sets the background color for the badge. */
    export function setBadgeBackgroundColor(details: BadgeBackgroundColorDetails): void;
	/** Sets the badge text for the browser action. The badge is displayed on top of the icon. */
    export function setBadgeText(details: BadgeTextDetails): void;
	/** Sets the title of the browser action. This shows up in the tooltip. */
    export function setTitle(details: TitleDetails): void;
	/**
	 * Since Chrome 19. 
	 * Gets the badge text of the browser action. If no tab is specified, the non-tab-specific badge text is returned. 
	 * @param callback The callback parameter should be a function that looks like this: 
	 * function(string result) {...}; 
	 */
    export function getBadgeText(details: TabDetails, callback: (result: string) => void): void;
	/** Sets the html document to be opened as a popup when the user clicks on the browser action's icon. */
    export function setPopup(details: PopupDetails): void;
	/**
	 * Since Chrome 22. 
	 * Disables the browser action for a tab. 
	 * @param tabId The id of the tab for which you want to modify the browser action. 
	 */
    export function disable(tabId?: number): void;
	/**
	 * Since Chrome 19. 
	 * Gets the title of the browser action. 
	 * @param callback The callback parameter should be a function that looks like this: 
	 * function(string result) {...}; 
	 */
    export function getTitle(details: TabDetails, callback: (result: string) => void): void;
	/**
	 * Since Chrome 19. 
	 * Gets the background color of the browser action. 
	 * @param callback The callback parameter should be a function that looks like this: 
	 * function( ColorArray result) {...}; 
	 */
    export function getBadgeBackgroundColor(details: TabDetails, callback: (result: number[]) => void): void;
	/**
	 * Since Chrome 19. 
	 * Gets the html document set as the popup for this browser action. 
	 * @param callback The callback parameter should be a function that looks like this: 
	 * function(string result) {...}; 
	 */
    export function getPopup(details: TabDetails, callback: (result: string) => void): void;
	/**
	 * Sets the icon for the browser action. The icon can be specified either as the path to an image file or as the pixel data from a canvas element, or as dictionary of either one of those. Either the path or the imageData property must be specified. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function setIcon(details: TabIconDetails, callback?: Function): void;

	/** Fired when a browser action icon is clicked. This event will not fire if the browser action has a popup. */
    var onClicked: BrowserClickedEvent;
}

////////////////////
// Browsing Data
////////////////////
/**
 * Use the chrome.browsingData API to remove browsing data from a user's local profile. 
 * Availability: Since Chrome 19.  
 * Permissions:  "browsingData"   
 */
declare module chrome.browsingData {
    interface OriginTypes {
		/** Websites that have been installed as hosted applications (be careful!). */
        protectedWeb?: boolean;
		/** Extensions and packaged applications a user has installed (be _really_ careful!). */
        extension?: boolean;
		/** Normal websites. */
        unprotectedWeb?: boolean;
    }

	/** Options that determine exactly what data will be removed. */
    interface RemovalOptions {
		/**
		 * Since Chrome 21. 
		 * An object whose properties specify which origin types ought to be cleared. If this object isn't specified, it defaults to clearing only "unprotected" origins. Please ensure that you really want to remove application data before adding 'protectedWeb' or 'extensions'. 
		 */
        originTypes?: OriginTypes;
		/** Remove data accumulated on or after this date, represented in milliseconds since the epoch (accessible via the getTime method of the JavaScript Date object). If absent, defaults to 0 (which would remove all browsing data). */
        since?: number;
    }

	/**
	 * Since Chrome 27. 
	 * A set of data types. Missing data types are interpreted as false.
	 */
    interface DataTypeSet {
		/** Websites' WebSQL data. */
        webSQL?: boolean;
		/** Websites' IndexedDB data. */
        indexedDB?: boolean;
		/** The browser's cookies. */
        cookies?: boolean;
		/** Stored passwords. */
        passwords?: boolean;
		/** Server-bound certificates. */
        serverBoundCertificates?: boolean;
		/** The browser's download list. */
        downloads?: boolean;
		/** The browser's cache. Note: when removing data, this clears the entire cache: it is not limited to the range you specify. */
        cache?: boolean;
		/** Websites' appcaches. */
        appcache?: boolean;
		/** Websites' file systems. */
        fileSystems?: boolean;
		/** Plugins' data. */
        pluginData?: boolean;
		/** Websites' local storage data. */
        localStorage?: boolean;
		/** The browser's stored form data. */
        formData?: boolean;
		/** The browser's history. */
        history?: boolean;
		/**
		 * Since Chrome 39. 
		 * Service Workers. 
		 */
		serviceWorkers?: boolean;
    }

	interface SettingsCallback {
		options: RemovalOptions;
		/** All of the types will be present in the result, with values of true if they are both selected to be removed and permitted to be removed, otherwise false. */
		dataToRemove: DataTypeSet;
		/** All of the types will be present in the result, with values of true if they are permitted to be removed (e.g., by enterprise policy) and false if not. */
		dataRemovalPermitted: DataTypeSet;
	}

	/**
	 * Since Chrome 26. 
	 * Reports which types of data are currently selected in the 'Clear browsing data' settings UI. Note: some of the data types included in this API are not available in the settings UI, and some UI settings control more than one data type listed here. 
	 * @param callback The callback parameter should be a function that looks like this: 
	 * function(object result) {...}; 
	 */
	export function settings(callback: (result: SettingsCallback) => void): void;
	/**
	 * Clears plugins' data. 
	 * @param callback Called when plugins' data has been cleared. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function removePluginData(options: RemovalOptions, callback?: () => void): void;
	/**
	 * Clears the browser's stored form data (autofill). 
	 * @param callback Called when the browser's form data has been cleared. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function removeFormData(options: RemovalOptions, callback?: () => void): void;
	/**
	 * Clears websites' file system data. 
	 * @param callback Called when websites' file systems have been cleared. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function removeFileSystems(options: RemovalOptions, callback?: () => void): void;
	/**
	 * Clears various types of browsing data stored in a user's profile. 
	 * @param dataToRemove The set of data types to remove. 
	 * @param callback Called when deletion has completed. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function remove(options: RemovalOptions, dataToRemove: DataTypeSet, callback?: () => void): void;
	/**
	 * Clears the browser's stored passwords. 
	 * @param callback Called when the browser's passwords have been cleared. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function removePasswords(options: RemovalOptions, callback?: () => void): void;
	/**
	 * Clears the browser's cookies and server-bound certificates modified within a particular timeframe. 
	 * @param callback Called when the browser's cookies and server-bound certificates have been cleared. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function removeCookies(options: RemovalOptions, callback?: () => void): void;
	/**
	 * Clears websites' WebSQL data. 
	 * @param callback Called when websites' WebSQL databases have been cleared. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function removeWebSQL(options: RemovalOptions, callback?: () => void): void;
	/**
	 * Clears websites' appcache data. 
	 * @param callback Called when websites' appcache data has been cleared. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function removeAppcache(options: RemovalOptions, callback?: () => void): void;
	/**
	 * Clears the browser's list of downloaded files (not the downloaded files themselves). 
	 * @param callback Called when the browser's list of downloaded files has been cleared. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function removeDownloads(options: RemovalOptions, callback?: () => void): void;
	/**
	 * Clears websites' local storage data. 
	 * @param callback Called when websites' local storage has been cleared. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function removeLocalStorage(options: RemovalOptions, callback?: () => void): void;
	/**
	 * Clears the browser's cache. 
	 * @param callback Called when the browser's cache has been cleared. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function removeCache(options: RemovalOptions, callback?: () => void): void;
	/**
	 * Clears the browser's history. 
	 * @param callback Called when the browser's history has cleared. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function removeHistory(options: RemovalOptions, callback?: () => void): void;
	/**
	 * Clears websites' IndexedDB data. 
	 * @param callback Called when websites' IndexedDB data has been cleared. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function removeIndexedDB(options: RemovalOptions, callback?: () => void): void;
}

////////////////////
// Commands
////////////////////
/**
 * Use the commands API to add keyboard shortcuts that trigger actions in your extension, for example, an action to open the browser action or send a command to the extension. 
 * Availability: Since Chrome 25.  
 * Manifest:  "commands": {...}   
 */
declare module chrome.commands {
	interface Command {
		/** The name of the Extension Command */
		name?: string;
		/** The Extension Command description */
		description?: string;
		/** The shortcut active for this command, or blank if not active. */
		shortcut?: string;
	}
	
    interface CommandEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(string command) {...}; 
		 */
        addListener(callback: (command: string) => void): void;
    }
	
	/**
	 * Returns all the registered extension commands for this extension and their shortcut (if active). 
	 * @param callback Called to return the registered commands. 
	 * If you specify the callback parameter, it should be a function that looks like this:
	 * function(array of Command commands) {...}; 
	 */
	export function getAll(callback: (commands: Command[]) => void): void;

	/** Fired when a registered command is activated using a keyboard shortcut. */    
    var onCommand: CommandEvent;
}

////////////////////
// Content Settings
////////////////////
/**
 * Use the chrome.contentSettings API to change settings that control whether websites can use features such as cookies, JavaScript, and plugins. More generally speaking, content settings allow you to customize Chrome's behavior on a per-site basis instead of globally. 
 * Availability: Since Chrome 16.  
 * Permissions:  "contentSettings"   
 */
declare module chrome.contentSettings {
    interface ClearDetails {
		/**
		 * Where to clear the setting (default: regular). 
		 * The scope of the ContentSetting. One of
		 * * regular: setting for regular profile (which is inherited by the incognito profile if not overridden elsewhere),
		 * * incognito_session_only: setting for incognito profile that can only be set during an incognito session and is deleted when the incognito session ends (overrides regular settings).
		 */
        scope?: string;
    }

    interface SetDetails {
		/** The resource identifier for the content type. */
        resourceIdentifier?: ResourceIdentifier;
		/** The setting applied by this rule. See the description of the individual ContentSetting objects for the possible values. */
        setting: any;
		/** The pattern for the secondary URL. Defaults to matching all URLs. For details on the format of a pattern, see Content Setting Patterns. */
        secondaryPattern?: string;
		/** Where to set the setting (default: regular). */
        scope?: string;
		/** The pattern for the primary URL. For details on the format of a pattern, see Content Setting Patterns. */
        primaryPattern: string;
    }

    interface GetDetails {
		/** The secondary URL for which the content setting should be retrieved. Defaults to the primary URL. Note that the meaning of a secondary URL depends on the content type, and not all content types use secondary URLs. */
        secondaryUrl?: string;
		/** A more specific identifier of the type of content for which the settings should be retrieved. */
        resourceIdentifier?: ResourceIdentifier;
		/** Whether to check the content settings for an incognito session. (default false) */
        incognito?: boolean;
		/** The primary URL for which the content setting should be retrieved. Note that the meaning of a primary URL depends on the content type. */
        primaryUrl: string;
    }

    interface ReturnedDetails {
		/** The content setting. See the description of the individual ContentSetting objects for the possible values. */
        setting: any;
    }

    interface ContentSetting {
		/**
		 * Clear all content setting rules set by this extension. 
		 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
		 * function() {...}; 
		 */
        clear(details: ClearDetails, callback?: () => void): void;
		/**
		 * Applies a new content setting rule. 
		 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
		 * function() {...}; 
		 */
        set(details: SetDetails, callback?: () => void): void;
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(array of ResourceIdentifier resourceIdentifiers) {...}; 
		 * Parameter resourceIdentifiers: A list of resource identifiers for this content type, or undefined if this content type does not use resource identifiers. 
		 */
        getResourceIdentifiers(callback: (resourceIdentifiers?: ResourceIdentifier[]) => void): void;
		/**
		 * Gets the current content setting for a given pair of URLs. 
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(object details) {...}; 
		 */
        get(details: GetDetails, callback: (details: ReturnedDetails) => void): void;
    }

	/** The only content type using resource identifiers is contentSettings.plugins. For more information, see Resource Identifiers. */    
    interface ResourceIdentifier {
		/** The resource identifier for the given content type. */
        id: string;
		/** A human readable description of the resource. */
        description?: string;
    }

	/**
	 * Whether to allow cookies and other local data to be set by websites. One of
	 * allow: Accept cookies,
	 * block: Block cookies,
	 * session_only: Accept cookies only for the current session. 
	 * Default is allow.
	 * The primary URL is the URL representing the cookie origin. The secondary URL is the URL of the top-level frame. 
	 */    
    var cookies: ContentSetting;
	/**
	 * Whether to allow sites to show pop-ups. One of
	 * allow: Allow sites to show pop-ups,
	 * block: Don't allow sites to show pop-ups.
	 * Default is block.
	 * The primary URL is the URL of the top-level frame. The secondary URL is not used.
	 */
    var popups: ContentSetting;
	/**
	 * Whether to run JavaScript. One of
	 * allow: Run JavaScript,
	 * block: Don't run JavaScript. 
	 * Default is allow.
	 * The primary URL is the URL of the top-level frame. The secondary URL is not used. 
	 */
    var javascript: ContentSetting;
	/**
	 * Whether to allow sites to show desktop notifications. One of
	 * allow: Allow sites to show desktop notifications,
	 * block: Don't allow sites to show desktop notifications,
	 * ask: Ask when a site wants to show desktop notifications.
	 * Default is ask.
	 * The primary URL is the URL of the document which wants to show the notification. The secondary URL is not used. 
	 */
    var notifications: ContentSetting;
	/**
	 * Whether to run plugins. One of
	 * allow: Run plugins automatically,
	 * block: Don't run plugins automatically,
	 * detect_important_content: Only run automatically those plugins that are detected as the website's main content.
	 * Default is allow.
	 * The primary URL is the URL of the top-level frame. The secondary URL is not used.
	 */
    var plugins: ContentSetting;
	/**
	 * Whether to show images. One of
	 * allow: Show images,
	 * block: Don't show images. 
	 * Default is allow.
	 * The primary URL is the URL of the top-level frame. The secondary URL is the URL of the image. 
	 */
    var images: ContentSetting;
	/**
	 * Since Chrome 42. 
	 * Whether to allow Geolocation. One of 
	 * allow: Allow sites to track your physical location,
	 * block: Don't allow sites to track your physical location,
	 * ask: Ask before allowing sites to track your physical location.
	 * Default is ask.
	 * The primary URL is the URL of the document which requested location data. The secondary URL is the URL of the top-level frame (which may or may not differ from the requesting URL). 
	 */
	var location: ContentSetting;
	/**
	 * Since Chrome 42. 
	 * Whether to allow sites to toggle the fullscreen mode. One of
	 * allow: Allow sites to toggle the fullscreen mode,
	 * ask: Ask when a site wants to toggle the fullscreen mode.
	 * Default is ask.
	 * The primary URL is the URL of the document which requested to toggle the fullscreen mode. The secondary URL is the URL of the top-level frame (which may or may not differ from the requesting URL).
	 */
	var fullscreen: ContentSetting;
	/**
	 * Since Chrome 42.
	 * Whether to allow sites to disable the mouse cursor. One of
	 * allow: Allow sites to disable the mouse cursor,
	 * block: Don't allow sites to disable the mouse cursor,
	 * ask: Ask when a site wants to disable the mouse cursor.
	 * Default is ask.
	 * The primary URL is the URL of the top-level frame. The secondary URL is not used.
	 */
	var mouselock: ContentSetting;
	/**
	 * Since Chrome 42. 
	 * Whether to allow sites to run plugins unsandboxed. One of
	 * allow: Allow sites to run plugins unsandboxed,
	 * block: Don't allow sites to run plugins unsandboxed,
	 * ask: Ask when a site wants to run a plugin unsandboxed.
	 * Default is ask.
	 * The primary URL is the URL of the top-level frame. The secondary URL is not used.
	 */
	var unsandboxedPlugins: ContentSetting;
	/**
	 * Since Chrome 42. 
	 * Whether to allow sites to download multiple files automatically. One of
	 * allow: Allow sites to download multiple files automatically,
	 * block: Don't allow sites to download multiple files automatically,
	 * ask: Ask when a site wants to download files automatically after the first file.
	 * Default is ask.
	 * The primary URL is the URL of the top-level frame. The secondary URL is not used.
	 */
	var automaticDownloads: ContentSetting;
}

////////////////////
// Context Menus
////////////////////
/**
 * Use the chrome.contextMenus API to add items to Google Chrome's context menu. You can choose what types of objects your context menu additions apply to, such as images, hyperlinks, and pages.
 * Availability: Since Chrome 6. 
 * Permissions:  "contextMenus" 
 */
declare module chrome.contextMenus {
    interface OnClickData {
		/**
		 * Since Chrome 35.
		 * The text for the context selection, if any. 
		 */
        selectionText?: string;
		/**
		 * Since Chrome 35.
		 * A flag indicating the state of a checkbox or radio item after it is clicked.
		 */
        checked?: boolean;
		/**
		 * Since Chrome 35.
		 * The ID of the menu item that was clicked.
		 */
        menuItemId: any;
		/**
		 * Since Chrome 35.
		 * The URL of the frame of the element where the context menu was clicked, if it was in a frame.
		 */
        frameUrl?: string;
		/**
		 * Since Chrome 35.
		 * A flag indicating whether the element is editable (text input, textarea, etc.).
		 */
        editable: boolean;
		/**
		 * Since Chrome 35. 
		 * One of 'image', 'video', or 'audio' if the context menu was activated on one of these types of elements.
		 */
        mediaType?: string;
		/**
		 * Since Chrome 35.
		 * A flag indicating the state of a checkbox or radio item before it was clicked.
		 */
        wasChecked?: boolean;
		/**
		 * Since Chrome 35. 
		 * The URL of the page where the menu item was clicked. This property is not set if the click occured in a context where there is no current page, such as in a launcher context menu. 
		 */
        pageUrl: string;
		/**
		 * Since Chrome 35.
		 * If the element is a link, the URL it points to. 
		 */
        linkUrl?: string;
		/**
		 * Since Chrome 35.
		 * The parent ID, if any, for the item clicked.
		 */
        parentMenuItemId?: any;
		/**
		 * Since Chrome 35. 
		 * Will be present for elements with a 'src' URL.
		 */
        srcUrl?: string;
    }

    interface CreateProperties {
		/** Lets you restrict the item to apply only to documents whose URL matches one of the given patterns. (This applies to frames as well.) For details on the format of a pattern, see Match Patterns. */
        documentUrlPatterns?: string[];
		/** The initial state of a checkbox or radio item: true for selected and false for unselected. Only one radio item can be selected at a time in a given group of radio items. */
        checked?: boolean;
		/** The text to be displayed in the item; this is required unless type is 'separator'. When the context is 'selection', you can use %s within the string to show the selected text. For example, if this parameter's value is "Translate '%s' to Pig Latin" and the user selects the word "cool", the context menu item for the selection is "Translate 'cool' to Pig Latin". */
        title?: string;
		/** List of contexts this menu item will appear in. Defaults to ['page'] if not specified. */
        contexts?: string[];
		/**
		 * Since Chrome 20. 
		 * Whether this context menu item is enabled or disabled. Defaults to true. 
		 */
        enabled?: boolean;
		/** Similar to documentUrlPatterns, but lets you filter based on the src attribute of img/audio/video tags and the href of anchor tags. */
        targetUrlPatterns?: string[];
		/**
		 * A function that will be called back when the menu item is clicked. Event pages cannot use this; instead, they should register a listener for chrome.contextMenus.onClicked. 
		 * @param info Information sent when a context menu item is clicked. 
		 * @param tab The details of the tab where the click took place. Note: this parameter only present for extensions. 
		 */
        onclick?: (info: OnClickData, tab: chrome.tabs.Tab) => void;
		/** The ID of a parent menu item; this makes the item a child of a previously added item. */
        parentId?: any;
		/** The type of menu item. Defaults to 'normal' if not specified. */
        type?: string;
		/** 
		 * Since Chrome 21. 
		 * The unique ID to assign to this item. Mandatory for event pages. Cannot be the same as another ID for this extension.
		 */
        id?: string;
    }

	interface UpdateProperties {
        documentUrlPatterns?: string[];
        checked?: boolean;
        title?: string;
        contexts?: string[];
		/** Since Chrome 20. */
        enabled?: boolean;
        targetUrlPatterns?: string[];
        onclick?: Function;
		/** Note: You cannot change an item to be a child of one of its own descendants. */
        parentId?: any;
        type?: string;
    }

    interface MenuClickedEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this: 
		 * function(object info, tabs.Tab tab) {...}; 
		 * Parameter info: Information sent when a context menu item is clicked. 
		 * Parameter tab: The details of the tab where the click took place. If the click did not take place in a tab, this parameter will be missing. 
		 */
        addListener(callback: (info: OnClickData, tab?: chrome.tabs.Tab) => void): void;
    }
	
	/**
	 * Since Chrome 38. 
	 * The maximum number of top level extension items that can be added to an extension action context menu. Any items beyond this limit will be ignored. 
	 */
	var ACTION_MENU_TOP_LEVEL_LIMIT: number;

    /**
	 * Removes all context menu items added by this extension. 
	 * @param callback Called when removal is complete. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function removeAll(callback?: () => void): void;
	/**
	 * Creates a new context menu item. Note that if an error occurs during creation, you may not find out until the creation callback fires (the details will be in chrome.runtime.lastError).
	 * @param callback Called when the item has been created in the browser. If there were any problems creating the item, details will be available in chrome.runtime.lastError. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function create(createProperties: CreateProperties, callback?: () => void): void;
	/**
	 * Updates a previously created context menu item. 
	 * @param id The ID of the item to update. 
	 * @param updateProperties The properties to update. Accepts the same values as the create function. 
	 * @param callback Called when the context menu has been updated. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
    export function update(id: string, updateProperties: UpdateProperties, callback?: () => void): void;
	/**
	 * Updates a previously created context menu item. 
	 * @param id The ID of the item to update. 
	 * @param updateProperties The properties to update. Accepts the same values as the create function. 
	 * @param callback Called when the context menu has been updated. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
	export function update(id: number, updateProperties: UpdateProperties, callback?: () => void): void;
	/**
	 * Removes a context menu item. 
	 * @param menuItemId The ID of the context menu item to remove. 
	 * @param callback Called when the context menu has been removed. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
	export function remove(menuItemId: string, callback?: () => void): void;
	/**
	 * Removes a context menu item. 
	 * @param menuItemId The ID of the context menu item to remove. 
	 * @param callback Called when the context menu has been removed. 
	 * If you specify the callback parameter, it should be a function that looks like this: 
	 * function() {...}; 
	 */
	export function remove(menuItemId: number, callback?: () => void): void;

	/**
	 * Since Chrome 21. 
	 * Fired when a context menu item is clicked. 
	 */    
    var onClicked: MenuClickedEvent;
}

////////////////////
// Cookies
////////////////////
/**
 * Use the chrome.cookies API to query and modify cookies, and to be notified when they change.
 * Availability: Since Chrome 6.  
 * Permissions:  "cookies", host permissions   
 */
declare module chrome.cookies {
	/** Represents information about an HTTP cookie. */
    interface Cookie {
		/** The domain of the cookie (e.g. "www.google.com", "example.com"). */
        domain: string;
		/** The name of the cookie. */
        name: string;
		/** The ID of the cookie store containing this cookie, as provided in getAllCookieStores(). */
        storeId: string;
		/** The value of the cookie. */
        value: string;
		/** True if the cookie is a session cookie, as opposed to a persistent cookie with an expiration date. */
        session: boolean;
		/** True if the cookie is a host-only cookie (i.e. a request's host must exactly match the domain of the cookie). */
        hostOnly: boolean;
		/** The expiration date of the cookie as the number of seconds since the UNIX epoch. Not provided for session cookies. */
        expirationDate?: number;
		/** The path of the cookie. */
        path: string;
		/** True if the cookie is marked as HttpOnly (i.e. the cookie is inaccessible to client-side scripts). */
        httpOnly: boolean;
		/** True if the cookie is marked as Secure (i.e. its scope is limited to secure channels, typically HTTPS). */
        secure: boolean;
    }

	/** Represents a cookie store in the browser. An incognito mode window, for instance, uses a separate cookie store from a non-incognito window. */    
    interface CookieStore {
		/** The unique identifier for the cookie store. */
        id: string;
		/** Identifiers of all the browser tabs that share this cookie store. */
        tabIds: number[];
    }

    interface GetAllDetails {
		/** Restricts the retrieved cookies to those whose domains match or are subdomains of this one. */
        domain?: string;
		/** Filters the cookies by name. */
        name?: string;
		/** Restricts the retrieved cookies to those that would match the given URL. */
        url?: string;
		/** The cookie store to retrieve cookies from. If omitted, the current execution context's cookie store will be used. */
        storeId?: string;
		/** Filters out session vs. persistent cookies. */
        session?: boolean;
		/** Restricts the retrieved cookies to those whose path exactly matches this string. */
        path?: string;
		/** Filters the cookies by their Secure property. */
        secure?: boolean;
    }

    interface SetDetails {
		/** The domain of the cookie. If omitted, the cookie becomes a host-only cookie. */
        domain?: string;
		/** The name of the cookie. Empty by default if omitted. */
        name?: string;
		/** The request-URI to associate with the setting of the cookie. This value can affect the default domain and path values of the created cookie. If host permissions for this URL are not specified in the manifest file, the API call will fail. */
        url: string;
		/** The ID of the cookie store in which to set the cookie. By default, the cookie is set in the current execution context's cookie store. */
        storeId?: string;
		/** The value of the cookie. Empty by default if omitted. */
        value?: string;
		/** The expiration date of the cookie as the number of seconds since the UNIX epoch. If omitted, the cookie becomes a session cookie. */
        expirationDate?: number;
		/** The path of the cookie. Defaults to the path portion of the url parameter. */
        path?: string;
		/** Whether the cookie should be marked as HttpOnly. Defaults to false. */
        httpOnly?: boolean;
		/** Whether the cookie should be marked as Secure. Defaults to false. */
        secure?: boolean;
    }

    interface Details {
        name: string;
        url: string;
        storeId?: string;
    }

    interface CookieChangeInfo {
		/** Information about the cookie that was set or removed. */
        cookie: Cookie;
		/** True if a cookie was removed. */
        removed: boolean;
		/** 
		 * Since Chrome 12. 
		 * The underlying reason behind the cookie's change. 
		 */
        cause: string;
    }

    interface CookieChangedEvent extends chrome.events.Event {
		/**
		 * @param callback The callback parameter should be a function that looks like this:
		 * function(object changeInfo) {...};
		 */
        addListener(callback: (changeInfo: CookieChangeInfo) => void): void;
    }

	/**
	 * Lists all existing cookie stores. 
	 * @param callback The callback parameter should be a function that looks like this: 
	 * function(array of CookieStore cookieStores) {...}; 
	 * Parameter cookieStores: All the existing cookie stores. 
	 */    
    export function getAllCookieStores(callback: (cookieStores: CookieStore[]) => void): void;
	/**
	 * Retrieves all cookies from a single cookie store that match the given information. The cookies returned will be sorted, with those with the longest path first. If multiple cookies have the same path length, those with the earliest creation time will be first. 
	 * @param details Information to filter the cookies being retrieved. 
	 * @param callback The callback parameter should be a function that looks like this: 
	 * function(array of Cookie cookies) {...}; 
	 * Parameter cookies: All the existing, unexpired cookies that match the given cookie info. 
	 */
    export function getAll(details: GetAllDetails, callback: (cookies: Cookie[]) => void): void;
	/**
	 * Sets a cookie with the given cookie data; may overwrite equivalent cookies if they exist. 
	 * @param details Details about the cookie being set. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
	 * function( Cookie cookie) {...}; 
	 * Optional parameter cookie: Contains details about the cookie that's been set. If setting failed for any reason, this will be "null", and "chrome.runtime.lastError" will be set. 
	 */
    export function set(details: SetDetails, callback?: (cookie?: Cookie) => void): void;
	/**
	 * Deletes a cookie by name. 
	 * @param details Information to identify the cookie to remove. 
	 * @param callback If you specify the callback parameter, it should be a function that looks like this: 
	 * function(object details) {...}; 
	 */
    export function remove(details: Details, callback?: (details: Details) => void): void;
	/**
	 * Retrieves information about a single cookie. If more than one cookie of the same name exists for the given URL, the one with the longest path will be returned. For cookies with the same path length, the cookie with the earliest creation time will be returned.
	 * @param details Details to identify the cookie being retrieved. 
	 * @param callback The callback parameter should be a function that looks like this: 
	 * function( Cookie cookie) {...}; 
	 * Parameter cookie: Contains details about the cookie. This parameter is null if no such cookie was found. 
	 */
    export function get(details: Details, callback: (cookie?: Cookie) => void): void;

	/** Fired when a cookie is set or removed. As a special case, note that updating a cookie's properties is implemented as a two step process: the cookie to be updated is first removed entirely, generating a notification with "cause" of "overwrite" . Afterwards, a new cookie is written with the updated values, generating a second notification with "cause" "explicit". */    
    var onChanged: CookieChangedEvent;
}

////////////////////
// Debugger
////////////////////
declare module "chrome.debugger" {
    interface Debuggee {
        tabId: number;
    }

    interface DebuggerDetachedEvent extends chrome.events.Event {
        addListener(callback: (source: Debuggee) => void): void;
    }

    interface DebuggerEventEvent extends chrome.events.Event {
        addListener(callback: (source: Debuggee, method: string, params?: Object) => void): void;
    }

    export function attach(target: Debuggee, requiredVersion: string, callback?: Function): void;
    export function detach(target: Debuggee, callback?: Function): void;
    export function sendCommand(target: Debuggee, method: string, commandParams?: Object, callback?: (result: Object) => void): void;

    var onDetach: DebuggerDetachedEvent;
    var onEvent: DebuggerEventEvent;
}

////////////////////
// Declarative Web Request
////////////////////
declare module chrome.declarativeWebRequest {
    interface HeaderFilter {
        nameEquals?: string;
        valueContains?: any;
        nameSuffix?: string;
        valueSuffix?: string;
        valuePrefix?: string;
        nameContains?: any;
        valueEquals?: string;
        namePrefix?: string;
    }

    interface AddResponseHeader {
        name: string;
        value: string;
    }

    interface RemoveResponseCookie {
        filter: ResponseCookie;
    }

    interface RemoveResponseHeader {
        name: string;
        value?: string;
    }

    interface RequestMatcher {
        contentType?: string[];
        url?: chrome.events.UrlFilter;
        excludeContentType?: string[];
        excludeResponseHeader?: HeaderFilter[];
        resourceType?: string;
        responseHeaders?: HeaderFilter[];
    }

    interface IgnoreRules {
        lowerPriorityThan: number;
    }

    interface RedirectToEmptyDocument { }

    interface RedirectRequest {
        redirectUrl: string;
    }

    interface ResponseCookie {
        domain?: string;
        name?: string;
        expires?: string;
        maxAge?: number;
        value?: string;
        path?: string;
        httpOnly?: string;
        secure?: string;
    }

    interface AddResponseCookie {
        cookie: ResponseCookie;
    }

    interface EditResponseCookie {
        filter: ResponseCookie;
        modification: ResponseCookie;
    }

    interface CancelRequest { }

    interface RemoveRequestHeader {
        name: string;
    }

    interface EditRequestCookie {
        filter: RequestCookie;
        modification: RequestCookie;
    }

    interface SetRequestHeader {
        name: string;
        value: string;
    }

    interface RequestCookie {
        name?: string;
        value?: string;
    }

    interface RedirectByRegEx {
        to: string;
        from: string;
    }

    interface RedirectToTransparentImage { }

    interface AddRequestCookie {
        cookie: RequestCookie;
    }

    interface RemoveRequestCookie {
        filter: RequestCookie;
    }

    interface RequestedEvent extends chrome.events.Event {
        addListener(callback: Function): void;
    }

    var onRequest: RequestedEvent;
}

////////////////////
// DesktopCapture
////////////////////
declare module chrome.desktopCapture {
    export function chooseDesktopMedia(sources: string[], targetTab?: chrome.tabs.Tab, callback?: (streamId: string) => void): void;
    export function cancelChooseDesktopMedia(desktopMediaRequestId: number): void;
}

////////////////////
// Dev Tools - Inspected Window
////////////////////
declare module chrome.devtools.inspectedWindow {
    interface Resource {
        url: string;
        getContent(callback: (content: string, encoding: string) => void): void;
        setContent(content: string, commit: boolean, callback?: (error: Object) => void): void;
    }

    interface ReloadOptions {
        userAgent?: string;
        ignoreCache?: boolean;
        injectedScript?: boolean;
    }

    interface ResourceAddedEvent extends chrome.events.Event {
        addListener(callback: (resource: Resource) => void): void;
    }

    interface ResourceContentCommittedEvent extends chrome.events.Event {
        addListener(callback: (resource: Resource, content: string) => void): void;
    }

    var tabId: number;

    export function reload(reloadOptions: ReloadOptions): void;
    export function eval(expression: string, callback?: (result: Object, isException: boolean) => void): void;
    export function getResources(callback: (resources: Resource[]) => void): void;

    var onResourceAdded: ResourceAddedEvent;
    var onResourceContentCommitted: ResourceContentCommittedEvent;
}

////////////////////
// Dev Tools - Network
////////////////////
declare module chrome.devtools.network {
    interface Request {
        getContent(callback: (content: string, encoding: string) => void): void;
    }

    interface RequestFinishedEvent extends chrome.events.Event {
        addListener(callback: (request: Request) => void): void;
    }

    interface NavigatedEvent extends chrome.events.Event {
        addListener(callback: (url: string) => void): void;
    }

    export function getHAR(callback: (harLog: Object) => void): void;

    var onRequestFinished: RequestFinishedEvent;
    var onNavigated: NavigatedEvent;
}

////////////////////
// Dev Tools - Panels
////////////////////
declare module chrome.devtools.panels {
    interface PanelShownEvent extends chrome.events.Event {
        addListener(callback: (window: chrome.windows.Window) => void): void;
    }

    interface PanelHiddenEvent extends chrome.events.Event {
        addListener(callback: Function): void;
    }

    interface PanelSearchEvent extends chrome.events.Event {
        addListener(callback: (action: string, queryString?: string) => void): void;
    }

    interface ExtensionPanel {
        createStatusButton(iconPath: string, tooltipText: string, disabled: boolean): Button;
        onShown: PanelShownEvent;
        onHidden: PanelHiddenEvent;
        onSearch: PanelSearchEvent;
    }

    interface ButtonClickedEvent extends chrome.events.Event {
        addListener(callback: Function): void;
    }

    interface Button {
        update(iconPath?: string, tooltipText?: string, disabled?: boolean): void;
        onClicked: ButtonClickedEvent;
    }

    interface SelectionChangedEvent extends chrome.events.Event {
        addListener(callback: Function): void;
    }

    interface ElementsPanel {
        createSidebarPane(title: string, callback?: (result: ExtensionSidebarPane) => void): void;
        onSelectionChanged: SelectionChangedEvent;
    }

    interface ExtensionSidebarPaneShownEvent extends chrome.events.Event {
        addListener(callback: (window: chrome.windows.Window) => void): void;
    }

    interface ExtensionSidebarPaneHiddenEvent extends chrome.events.Event {
        addListener(callback: Function): void;
    }

    interface ExtensionSidebarPane {
        setHeight(height: string): void;
        setExpression(expression: string, rootTitle?: string, callback?: Function): void;
        setObject(jsonObject: string, rootTitle?: string, callback?: Function): void;
        setPage(path: string): void;
        onShown: ExtensionSidebarPaneShownEvent;
        onHidden: ExtensionSidebarPaneHiddenEvent;
    }

    var elements: ElementsPanel;

    export function create(title: string, iconPath: string, pagePath: string, callback?: (panel: ExtensionPanel) => void): void;
    export function setOpenResourceHandler(callback: (resource: chrome.devtools.inspectedWindow.Resource) => void): void;
}

////////////////////
// Dev Tools - Downloads
////////////////////
declare module chrome.downloads {
    interface HeaderNameValuePair {
        name: string;
        value: string;
    }

    interface DownloadOptions {
        body?: string;
        saveAs?: boolean;
        url: string;
        filename?: string;
        headers?: HeaderNameValuePair[];
        method?: string;
    }

    interface DownloadDelta {
        danger?: DownloadStringDiff;
        url?: DownloadStringDiff;
        totalBytes?: DownloadStringDiff;
        dangerAccepted?: DownloadBooleanDiff;
        filename?: DownloadStringDiff;
        paused?: DownloadBooleanDiff;
        state?: DownloadStringDiff;
        mime?: DownloadStringDiff;
        fileSize?: DownloadLongDiff;
        startTime?: DownloadLongDiff;
        error?: DownloadLongDiff;
        endTime?: DownloadLongDiff;
        id: number;
    }

    interface DownloadBooleanDiff {
        current?: boolean;
        previous?: boolean;
    }

    interface DownloadLongDiff {
        current?: number;
        previous?: number;
    }

    interface DownloadStringDiff {
        current?: string;
        previous?: string;
    }

    interface DownloadItem {
        bytesReceived: number;
        danger: string;
        url: string;
        totalBytes: number;
        dangerAccepted?: boolean;
        filename: string;
        paused: boolean;
        state: string;
        mime: string;
        fileSize: number;
        startTime: number;
        error?: number;
        endTime?: number;
        id: number;
        incognito: boolean;
    }

    interface GetFileIconOptions {
        size?: number;
    }

    interface DownloadQuery {
        orderBy?: string;
        urlRegex?: string;
        endedBefore?: number;
        totalBytesGreater?: number;
        danger?: string;
        totalBytes?: number;
        paused?: boolean;
        filenameRegex?: string;
        query?: string;
        totalBytesLess?: number;
        id?: number;
        bytesReceived?: number;
        endedAfter?: number;
        filename?: string;
        state?: string;
        startedAfter?: number;
        dangerAccepted?: boolean;
        mime?: string;
        fileSize?: number;
        startTime?: number;
        url?: string;
        startedBefore?: number;
        limit?: number;
        error?: number;
        endTime?: number;
    }

    interface DownloadChangedEvent extends chrome.events.Event {
        addListener(callback: (downloadDelta: DownloadDelta) => void): void;
    }

    interface DownloadCreatedEvent extends chrome.events.Event {
        addListener(callback: (downloadItem: DownloadItem) => void): void;
    }

    interface DownloadErasedEvent extends chrome.events.Event {
        addListener(callback: (downloadId: number) => void): void;
    }

    export function search(query: DownloadQuery, callback: (results: DownloadItem[]) => void): void;
    export function pause(downloadId: number, callback?: Function): void;
    export function getFileIcon(downloadId: number, callback: (iconURL: string) => void): void;
    export function getFileIcon(downloadId: number, options: GetFileIconOptions, callback: (iconURL: string) => void): void;
    export function resume(downloadId: number, callback?: Function): void;
    export function cancel(downloadId: number, callback?: Function): void;
    export function download(options: DownloadOptions, callback?: (downloadId: number) => void): void;
    export function open(downloadId: number): void;
    export function show(downloadId: number): void;
    export function showDefaultFolder(): void;
    export function erase(query: DownloadQuery, callback: (results: DownloadItem[]) => void): void;
    export function removeFile(downloadId: number, callback: () => void): void;
    export function acceptDanger(downloadId: number, callback: () => void): void;
    export function drag(downloadId: number): void;
    export function setShelfEnabled(enabled: boolean): void;

    var onChanged: DownloadChangedEvent;
    var onCreated: DownloadCreatedEvent;
    var onErased: DownloadErasedEvent;
}

////////////////////
// Events
////////////////////
declare module chrome.events {
    interface UrlFilter {
        schemes?: string[];
        urlMatches?: string;
        pathContains?: string;
        hostSuffix?: string;
        hostPrefix?: string;
        hostContains?: string;
        urlContains?: string;
        querySuffix?: string;
        urlPrefix?: string;
        hostEquals?: string;
        urlEquals?: string;
        queryContains?: string;
        pathPrefix?: string;
        pathEquals?: string;
        pathSuffix?: string;
        queryEquals?: string;
        queryPrefix?: string;
        urlSuffix?: string;
        ports?: any[];
    }

    interface Event {
        addListener(callback: Function): void;
        getRules(callback: (rules: Rule[]) => void): void;
        getRules(ruleIdentifiers: string[], callback: (rules: Rule[]) => void): void;
        hasListener(callback: Function): boolean;
        removeRules(ruleIdentifiers?: string[], callback?: Function): void;
        addRules(rules: Rule[], callback?: (rules: Rule[]) => void): void;
        removeListener(callback: Function): void;
        hasListeners(): boolean;
    }

    interface Rule {
        priority?: number;
        conditions: any[];
        id?: string;
        actions: any[];
    }
}

////////////////////
// Extension
////////////////////
declare module chrome.extension {
    interface FetchProperties {
        windowId?: number;
        type?: string;
    }

    interface LastError {
        message?: string;
    }

    var inIncognitoContext: boolean;
    var lastError: LastError;

    export function getBackgroundPage(): Window;
    export function getURL(path: string): string;
    export function setUpdateUrlData(data: string): void;
    export function getViews(fetchProperties?: FetchProperties): Window[];
    export function isAllowedFileSchemeAccess(callback: (isAllowedAccess: boolean) => void): void;
    export function isAllowedIncognitoAccess(callback: (isAllowedAccess: boolean) => void): void;
}

////////////////////
// File Browser Handler
////////////////////
declare module chrome.fileBrowserHandler {
    interface SelectionParams {
        allowedFileExtensions?: string[];
        suggestedName: string;
    }

    interface SelectionResult {
        entry?: Object;
        success: boolean;
    }

    interface FileHandlerExecuteEventDetails {
        tab_id?: number;
        entries: any[];
        selectFile(selectionParams: SelectionParams, callback: (result: SelectionResult) => void): void;
    }

    interface FileBrowserHandlerExecuteEvent extends chrome.events.Event {
        addListener(callback: (id: string, details: FileHandlerExecuteEventDetails) => void): void;
    }

    var onExecute: FileBrowserHandlerExecuteEvent;
}

////////////////////
// Font Settings
////////////////////
declare module chrome.fontSettings {
    interface FontName {
        displayName: string;
        fontId: string;
    }

    interface DefaultFontSizeDetails {
        pixelSize: number;
    }

    interface FontDetails {
        genericFamily: string;
        script?: string;
    }

    interface FullFontDetails {
        genericFamily: string;
        levelOfControl: string;
        script?: string;
        fontId: string;
    }

    interface FontDetailsResult {
        levelOfControl: string;
        fontId: string;
    }

    interface FontSizeDetails {
        pixelSize: number;
        levelOfControl: string;
    }

    interface SetFontSizeDetails {
        pixelSize: number;
    }

    interface SetFontDetails {
        genericFamily: string;
        script?: string;
        fontId: string;
    }

    interface DefaultFixedFontSizeChangedEvent extends chrome.events.Event {
        addListener(callback: (details: FontSizeDetails) => void): void;
    }

    interface DefaultFontSizeChangedEvent extends chrome.events.Event {
        addListener(callback: (details: FontSizeDetails) => void): void;
    }

    interface MinimumFontSizeChangedEvent extends chrome.events.Event {
        addListener(callback: (details: FontSizeDetails) => void): void;
    }

    interface FontChangedEvent extends chrome.events.Event {
        addListener(callback: (details: FullFontDetails) => void): void;
    }

    export function setDefaultFontSize(details: DefaultFontSizeDetails, callback?: Function): void;
    export function getFont(details: FontDetails, callback?: (details: FontDetailsResult) => void): void;
    export function getDefaultFontSize(details?: FontSizeDetails, callback?: (options: FontSizeDetails) => void): void;
    export function getMinimumFontSize(details?: FontSizeDetails, callback?: (options: FontSizeDetails) => void): void;
    export function setMinimumFontSize(details: SetFontSizeDetails, callback?: Function): void;
    export function getDefaultFixedFontSize(details?: Object, callback?: (details: FontSizeDetails) => void): void;
    export function clearDefaultFontSize(details?: Object, callback?: Function): void;
    export function setDefaultFixedFontSize(details: SetFontSizeDetails, callback?: Function): void;
    export function clearFont(details: FontDetails, callback?: Function): void;
    export function setFont(details: SetFontDetails, callback?: Function): void;
    export function clearMinimumFontSize(details?: Object, callback?: Function): void;
    export function getFontList(callback: (results: FontName[]) => void): void;
    export function clearDefaultFixedFontSize(details: Object, callback?: Function): void;

    var onDefaultFixedFontSizeChanged: DefaultFixedFontSizeChangedEvent;
    var onDefaultFontSizeChanged: DefaultFontSizeChangedEvent;
    var onMinimumFontSizeChanged: MinimumFontSizeChangedEvent;
    var onFontChanged: FontChangedEvent;
}

////////////////////
// History
////////////////////
declare module chrome.history {
    interface VisitItem {
        transition: string;
        visitTime?: number;
        visitId: string;
        referringVisitId: string;
        id: string;
    }

    interface HistoryItem {
        typedCount?: number;
        title?: string;
        url?: string;
        lastVisitTime?: number;
        visitCount?: number;
        id: string;
    }

    interface HistoryQuery {
        text: string;
        maxResults?: number;
        startTime?: number;
        endTime?: number;
    }

    interface Url {
        url: string;
    }

    interface Range {
        endTime: number;
        startTime: number;
    }

    interface RemovedResult {
        allHistory: boolean;
        urls?: string[];
    }

    interface HistoryVisitedEvent extends chrome.events.Event {
        addListener(callback: (result: HistoryItem) => void): void;
    }

    interface HistoryVisitRemovedEvent extends chrome.events.Event {
        addListener(callback: (removed: RemovedResult) => void): void;
    }

    export function search(query: HistoryQuery, callback: (results: HistoryItem[]) => void): void;
    export function addUrl(details: Url, callback?: Function): void;
    export function deleteRange(range: Range, callback: Function): void;
    export function deleteAll(callback: Function): void;
    export function getVisits(details: Url, callback: (results: VisitItem[]) => void): void;
    export function deleteUrl(details: Url, callback?: Function): void;

    var onVisited: HistoryVisitedEvent;
    var onVisitRemoved: HistoryVisitRemovedEvent;
}


////////////////////
// Identity
////////////////////
declare module chrome.identity {
    var getAuthToken: (options: any, cb: (token: {}) => void) => void;
    var launchWebAuthFlow: (options: any, cb: (redirect_url: string) => void) => void;
}


////////////////////
// Internationalization
////////////////////
declare module chrome.i18n {
    export function getMessage(messageName: string, substitutions?: any): string;
    export function getAcceptLanguages(callback: (languages: string[]) => void): void;
    export function getUILanguage(): string;
}

////////////////////
// Idle
////////////////////
declare module chrome.idle {
    interface IdleStateChangedEvent extends chrome.events.Event {
        addListener(callback: (newState: string) => void): void;
    }

    export function queryState(thresholdSeconds: number, callback: (newState: string) => void): void;

    var onStateChanged: IdleStateChangedEvent;
}

////////////////////
// Input - IME
////////////////////
declare module chrome.input.ime {
    interface KeyboardEvent {
        shiftKey?: boolean;
        altKey?: boolean;
        requestId: string;
        key: string;
        ctrlKey?: boolean;
        type: string;
    }

    interface InputContext {
        contextID: number;
        type: string;
    }

    interface ImeParameters {
        items: Object[];
        engineID: string;
    }

    interface CommitTextParameters {
        text: string;
        contextID: number;
    }

    interface CandidatesParameters {
        contextID: number;
        candidates: Object[];
    }

    interface CompositionParameters {
        contextID: number;
        text: string;
        segments: Object[];
        cursor: number;
        selectionStart?: number;
        selectionEnd?: number;
    }

    interface MenuItemParameters {
        items: Object[];
        engineId: string;
    }

    interface CandidateWindowPropertiesParameters {
        cursorVisible?: boolean;
        vertical?: boolean;
        pageSize?: number;
        auxiliaryTextVisible?: boolean;
        auxiliaryText?: string;
        visible?: boolean;
    }

    interface ClearCompositionParameters {
        contextID: number;
    }

    interface CursorPositionParameters {
        candidateID: number;
        contextID: number;
    }

    interface BlurEvent extends chrome.events.Event {
        addListener(callback: (contextID: number) => void): void;
    }

    interface CandidateClickedEvent extends chrome.events.Event {
        addListener(callback: (engineID: string, candidateID: number, button: string) => void): void;
    }

    interface KeyEventEvent extends chrome.events.Event {
        addListener(callback: (engineID: string, keyData: KeyboardEvent) => void): void;
    }

    interface DeactivatedEvent extends chrome.events.Event {
        addListener(callback: (engineID: string) => void): void;
    }

    interface InputContextUpdateEvent extends chrome.events.Event {
        addListener(callback: (context: InputContext) => void): void;
    }

    interface ActivateEvent extends chrome.events.Event {
        addListener(callback: (engineID: string) => void): void;
    }

    interface FocusEvent extends chrome.events.Event {
        addListener(callback: (context: InputContext) => void): void;
    }

    interface MenuItemActivatedEvent extends chrome.events.Event {
        addListener(callback: (engineID: string, name: string) => void): void;
    }

    export function setMenuItems(parameters: ImeParameters, callback?: Function): void;
    export function commitText(parameters: CommitTextParameters, callback?: (success: boolean) => void): void;
    export function setCandidates(parameters: CandidatesParameters, callback?: (success: boolean) => void): void;
    export function setComposition(parameters: CompositionParameters, callback?: (success: boolean) => void): void;
    export function updateMenuItems(parameters: MenuItemParameters, callback?: Function): void;
    export function setCandidateWindowProperties(parameters: CandidateWindowPropertiesParameters, callback?: (success: boolean) => void): void;
    export function clearComposition(parameters: ClearCompositionParameters, callback?: (success: boolean) => void): void;
    export function setCursorPosition(parameters: CursorPositionParameters, callback?: (success: boolean) => void): void;

    var onBlur: BlurEvent;
    var onCandidateClicked: CandidateClickedEvent;
    var onKeyEvent: KeyEventEvent;
    var onDeactivated: DeactivatedEvent;
    var onInputContextUpdate: InputContextUpdateEvent;
    var onActivate: ActivateEvent;
    var onFocus: FocusEvent;
    var onMenuItemActivated: MenuItemActivatedEvent;
}

////////////////////
// Management
////////////////////
declare module chrome.management {
    interface ExtensionInfo {
        disabledReason?: string;
        appLaunchUrl?: string;
        description: string;
        permissions: string[];
        icons?: IconInfo[];
        hostPermissions: string[];
        enabled: boolean;
        homepageUrl?: string;
        mayDisable: boolean;
        installType: string;
        version: string;
        id: string;
        offlineEnabled: boolean;
        updateUrl?: string;
        type: string;
        optionsUrl: string;
        name: string;
    }

    interface IconInfo {
        url: string;
        size: number;
    }

    interface UninstallOptions {
        showConfirmDialog?: boolean;
    }

    interface ManagementDisabledEvent extends chrome.events.Event {
        addListener(callback: (info: ExtensionInfo) => void): void;
    }

    interface ManagementUninstalledEvent extends chrome.events.Event {
        addListener(callback: (id: string) => void): void;
    }

    interface ManagementInstalledEvent extends chrome.events.Event {
        addListener(callback: (info: ExtensionInfo) => void): void;
    }

    interface ManagementEnabledEvent extends chrome.events.Event {
        addListener(callback: (info: ExtensionInfo) => void): void;
    }

    export function setEnabled(id: string, enabled: boolean, callback?: Function): void;
    export function getPermissionWarningsById(id: string, callback?: (permissionWarnings: string[]) => void): void;
    export function get(id: string, callback?: (result: ExtensionInfo) => void): void;
    export function getAll(callback?: (result: ExtensionInfo[]) => void): void;
    export function getPermissionWarningsByManifest(manifestStr: string, callback?: (permissionwarnings: string[]) => void): void;
    export function launchApp(id: string, callback?: Function): void;
    export function uninstall(id: string, options: UninstallOptions, callback?: Function): void;

    var onDisabled: ManagementDisabledEvent;
    var onUninstalled: ManagementUninstalledEvent;
    var onInstalled: ManagementInstalledEvent;
    var onEnabled: ManagementEnabledEvent;
}

////////////////////
// Notifications
// https://developer.chrome.com/extensions/notifications
////////////////////
declare module chrome.notifications {
    interface ButtonOptions {
        title: string;
        iconUrl?: string;
    }

    interface ItemOptions {
        title: string;
        message: string;
    }

    interface NotificationOptions {
        type?: string;
        iconUrl?: string;
        title?: string;
        message?: string;
        contextMessage?: string;
        priority?: number;
        eventTime?: number;
        buttons?: Array<ButtonOptions>;
        items?: Array<ItemOptions>;
        progress?: number;
        isClickable?: boolean;
    }

    interface OnClosed {
        addListener(callback: (notificationId: string, byUser: boolean) => void): void;
    }

    interface OnClicked {
        addListener(callback: (notificationId: string) => void): void;
    }

    interface OnButtonClicked {
        addListener(callback: (notificationId: string, buttonIndex: number) => void): void;
    }

    interface OnPermissionLevelChanged {
        addListener(callback: (level: string) => void): void;
    }

    interface OnShowSettings {
        addListener(callback: Function): void;
    }

    export var onClosed: OnClosed;
    export var onClicked: OnClicked;
    export var onButtonClicked: OnButtonClicked;
    export var onPermissionLevelChanged: OnPermissionLevelChanged;
    export var onShowSettings: OnShowSettings;

    export function create(notificationId: string, options: NotificationOptions, callback: (notificationId: string) => void): void;
    export function update(notificationId: string, options: NotificationOptions, callback: (wasUpdated: boolean) => void): void;
    export function clear(notificationId: string, callback: (wasCleared: boolean) => void): void;
    export function getAll(callback: (notifications: any) => void): void;
    export function getPermissionLevel(callback: (level: string) => void): void;
}

////////////////////
// Omnibox
////////////////////
declare module chrome.omnibox {
    interface SuggestResult {
        content: string;
        description: string;
    }

    interface Suggestion {
        description: string;
    }

    interface OmniboxInputEnteredEvent extends chrome.events.Event {
        addListener(callback: (text: string) => void): void;
    }

    interface OmniboxInputChangedEvent extends chrome.events.Event {
        addListener(callback: (text: string, suggest: (suggestResults: SuggestResult[]) => void) => void): void;
    }

    interface OmniboxInputStartedEvent extends chrome.events.Event {
        addListener(callback: Function): void;
    }

    interface OmniboxInputCancelledEvent extends chrome.events.Event {
        addListener(callback: Function): void;
    }

    export function setDefaultSuggestion(suggestion: Suggestion): void;

    var onInputEntered: OmniboxInputEnteredEvent;
    var onInputChanged: OmniboxInputChangedEvent;
    var onInputStarted: OmniboxInputStartedEvent;
    var onInputCancelled: OmniboxInputCancelledEvent;
}

////////////////////
// Page Action
////////////////////
declare module chrome.pageAction {
    interface PageActionClickedEvent extends chrome.events.Event {
        addListener(callback: (tab: chrome.tabs.Tab) => void): void;
    }

    interface TitleDetails {
        tabId: number;
        title: string;
    }

    interface GetDetails {
        tabId: number;
    }

    interface PopupDetails {
        tabId: number;
        popup: string;
    }

    interface IconDetails {
        tabId: number;
        iconIndex?: number;
        imageData?: ImageData;
        path?: any;
    }

    export function hide(tabId: number): void;
    export function show(tabId: number): void;
    export function setTitle(details: TitleDetails): void;
    export function setPopup(details: PopupDetails): void;
    export function getTitle(details: GetDetails, callback: (result: string) => void): void;
    export function getPopup(details: GetDetails, callback: (result: string) => void): void;
    export function setIcon(details: IconDetails, callback?: Function): void;

    var onClicked: PageActionClickedEvent;
}

////////////////////
// Page Capture
////////////////////
declare module chrome.pageCapture {
    interface SaveDetails {
        tabId: number;
    }

    export function saveAsMHTML(details: SaveDetails, callback: (mhtmlData: any) => void): void;
}

////////////////////
// Permissions
////////////////////
declare module chrome.permissions {
    interface Permissions {
        origins?: string[];
        permissions?: string[];
    }

    interface PermissionsRemovedEvent {
        addListener(callback: (permissions: Permissions) => void): void;
    }

    interface PermissionsAddedEvent {
        addListener(callback: (permissions: Permissions) => void): void;
    }

    export function contains(permissions: Permissions, callback: (result: boolean) => void): void;
    export function getAll(callback: (permissions: Permissions) => void): void;
    export function request(permissions: Permissions, callback?: (granted: boolean) => void): void;
    export function remove(permissions: Permissions, callback?: (removed: boolean) => void): void;

    var onRemoved: PermissionsRemovedEvent;
    var onAdded: PermissionsAddedEvent;
}

////////////////////
// Privacy
////////////////////
declare module chrome.privacy {
    interface Services {
        spellingServiceEnabled: chrome.types.ChromeSetting;
        searchSuggestEnabled: chrome.types.ChromeSetting;
        instantEnabled: chrome.types.ChromeSetting;
        alternateErrorPagesEnabled: chrome.types.ChromeSetting;
        safeBrowsingEnabled: chrome.types.ChromeSetting;
        autofillEnabled: chrome.types.ChromeSetting;
        translationServiceEnabled: chrome.types.ChromeSetting;
    }

    interface Network {
        networkPredictionEnabled: chrome.types.ChromeSetting;
    }

    interface Websites {
        thirdPartyCookiesAllowed: chrome.types.ChromeSetting;
        referrersEnabled: chrome.types.ChromeSetting;
        hyperlinkAuditingEnabled: chrome.types.ChromeSetting;
        protectedContentEnabled: chrome.types.ChromeSetting;
    }

    var services: Services;
    var network: Network;
    var websites: Websites;
}

////////////////////
// Proxy
////////////////////
declare module chrome.proxy {
    interface PacScript {
        url?: string;
        mandatory?: boolean;
        data?: string;
    }

    interface ProxyConfig {
        rules?: ProxyRules;
        pacScript?: PacScript;
        mode: string;
    }

    interface ProxyServer {
        host: string;
        scheme?: string;
        port?: number;
    }

    interface ProxyRules {
        proxyForFtp?: ProxyServer;
        proxyForHttp?: ProxyServer;
        facllbackProxy?: ProxyServer;
        singleProxy?: ProxyServer;
        proxyForHttps?: ProxyServer;
        bypassList?: string[];
    }

    interface ErrorDetails {
        details: string;
        error: string;
        fatal: boolean;
    }

    interface ProxyErrorEvent extends chrome.events.Event {
        addListener(callback: (details: ErrorDetails) => void): void;
    }

    var settings: chrome.types.ChromeSetting;
    var onProxyError: ProxyErrorEvent;
}

////////////////////
// Runtime
////////////////////
declare module chrome.runtime {
    var lastError: LastError;
    var id: string;

    interface LastError {
        message?: string;
    }

    interface ConnectInfo {
        name?: string;
    }

    interface InstalledDetails {
        reason: string;
        previousVersion?: string;
    }

    interface MessageOptions {
        includeTlsChannelId?: boolean;
    }

    interface MessageSender {
        id?: string;
        tab?: chrome.tabs.Tab;
        frameId?: number;
        url?: string;
        tlsChannelId?: string;
    }

    interface PlatformInfo {
        os: string;
        arch: string;
        nacl_arch: string;
    }

    interface Port {
        postMessage: (message: Object) => void;
        disconnect: () => void;
        sender?: MessageSender;
        onDisconnect: chrome.events.Event;
        onMessage: PortMessageEvent;
        name: string;
    }

    interface UpdateAvailableDetails {
        version: string;
    }

    interface UpdateCheckDetails {
        version: string;
    }

    interface PortMessageEvent extends chrome.events.Event {
        addListener(callback: (message: Object, port: Port) => void): void;
    }

    interface ExtensionMessageEvent extends chrome.events.Event {
        addListener(callback: (message: any, sender: MessageSender, sendResponse: Function) => void): void;
    }

    interface ExtensionMessageExternalEvent extends chrome.events.Event {
        addListener(callback: (message: any, sender: MessageSender, sendResponse: Function) => void): void;
    }

    interface ExtensionConnectEvent extends chrome.events.Event {
        addListener(callback: (port: Port) => void): void;
    }

    interface ExtensionConnectExternalEvent extends chrome.events.Event {
        addListener(callback: (port: Port) => void): void;
    }

    interface RuntimeSuspendEvent extends chrome.events.Event {
        addListener(callback: Function): void;
    }

    interface RuntimeStartupEvent extends chrome.events.Event {
        addListener(callback: Function): void;
    }

    interface RuntimeInstalledEvent extends chrome.events.Event {
        addListener(callback: (details: InstalledDetails) => void): void;
    }

    interface RuntimeSuspendCanceledEvent extends chrome.events.Event {
        addListener(callback: Function): void;
    }
    interface RuntimeMessageEvent extends chrome.events.Event {
        addListener(callback: Function): void;
    }

    interface RuntimeRestartRequiredEvent extends chrome.events.Event {
        addListener(callback: (reason: string) => void): void;
    }

    interface RuntimeUpdateAvailableEvent extends chrome.events.Event {
        addListener(callback: (details: UpdateAvailableDetails) => void): void;
    }

    export function connect(connectInfo?: ConnectInfo): Port;
    export function connect(extensionId: string, connectInfo?: ConnectInfo): Port;
    export function connectNative(application: string): Port;
    export function getBackgroundPage(callback: (backgroundPage?: Window) => void): void;
    export function getManifest(): Object;
    export function getPackageDirectoryEntry(callback: (directoryEntry: any) => void): void;
    export function getPlatformInfo(callback: (platformInfo: PlatformInfo) => void): void;
    export function getURL(path: string): string;
    export function reload(): void;
    export function requestUpdateCheck(callback: (status: string, details?: UpdateCheckDetails) => void): void;
    export function restart(): void;
    export function sendMessage(message: any, responseCallback?: (response: any) => void): void;
    export function sendMessage(message: any, options: MessageOptions, responseCallback?: (response: any) => void): void;
    export function sendMessage(extensionId: string, message: any, responseCallback?: (response: any) => void): void;
    export function sendMessage(extensionId: string, message: any, options: MessageOptions, responseCallback?: (response: any) => void): void;
    export function sendNativeMessage(application: string, message: any, responseCallback?: (response: any) => void): void;
    export function setUninstallUrl(url: string): void;

    var onConnect: ExtensionConnectEvent;
    var onConnectExternal: ExtensionConnectExternalEvent;
    var onSuspend: RuntimeSuspendEvent;
    var onStartup: RuntimeStartupEvent;
    var onInstalled: RuntimeInstalledEvent;
    var onSuspendCanceled: RuntimeSuspendCanceledEvent;
    var onMessage: ExtensionMessageEvent;
    var onMessageExternal: ExtensionMessageExternalEvent;
    var onRestartRequired: RuntimeRestartRequiredEvent;
    var onUpdateAvailable: RuntimeUpdateAvailableEvent;

}

////////////////////
// Script Badge
////////////////////
declare module chrome.scriptBadge {
    interface GetPopupDetails {
        tabId: number;
    }

    interface AttentionDetails {
        tabId: number;
    }

    interface SetPopupDetails {
        tabId: number;
        popup: string;
    }

    interface ScriptBadgeClickedEvent extends chrome.events.Event {
        addListener(callback: (tab: chrome.tabs.Tab) => void): void;
    }

    export function getPopup(details: GetPopupDetails, callback: Function): void;
    export function getAttention(details: AttentionDetails): void;
    export function setPopup(details: SetPopupDetails): void;

    var onClicked: ScriptBadgeClickedEvent;
}

////////////////////
// Storage
////////////////////
declare module chrome.storage {
    interface StorageArea {
        getBytesInUse(callback: (bytesInUse: number) => void): void;
        getBytesInUse(keys: string, callback: (bytesInUse: number) => void): void;
        getBytesInUse(keys: string[], callback: (bytesInUse: number) => void): void;
        clear(callback?: Function): void;
        set(items: Object, callback?: Function): void;
        remove(keys: string, callback?: Function): void;
        remove(keys: string[], callback?: Function): void;
        get(callback: (items: Object) => void): void;
        get(keys: string, callback: (items: Object) => void): void;
        get(keys: string[], callback: (items: Object) => void): void;
        get(keys: Object, callback: (items: Object) => void): void;
    }

    interface StorageChange {
        newValue?: any;
        oldValue?: any;
    }

    interface Local extends StorageArea {
        QUOTA_BYTES: number;
    }

    interface Sync extends StorageArea {
        MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE: number;
        QUOTA_BYTES: number;
        QUOTA_BYTES_PER_ITEM: number;
        MAX_ITEMS: number;
        MAX_WRITE_OPERATIONS_PER_HOUR: number;
    }

    interface StorageChangedEvent extends chrome.events.Event {
        addListener(callback: (changes: Object, areaName: string) => void): void;
    }

    var local: Local;
    var sync: Sync;

    var onChanged: StorageChangedEvent;
}

////////////////////
// Socket
////////////////////
declare module chrome.socket {
    interface CreateInfo {
        socketId: number;
    }

    interface AcceptInfo {
        resultCode: number;
        socketId?: number;
    }

    interface ReadInfo {
        resultCode: number;
        data: ArrayBuffer;
    }

    interface WriteInfo {
        bytesWritten: number;
    }

    interface RecvFromInfo {
        resultCode: number;
        data: ArrayBuffer;
        port: number;
        address: string;
    }

    interface SocketInfo {
        socketType: string;
        localPort?: number;
        peerAddress?: string;
        peerPort?: number;
        localAddress?: string;
        connected: boolean;
    }

    interface NetworkInterface {
        name: string;
        address: string;
    }

    export function create(type: string, options?: Object, callback?: (createInfo: CreateInfo) => void): void;
    export function destroy(socketId: number): void;
    export function connect(socketId: number, hostname: string, port: number, callback: (result: number) => void): void;
    export function bind(socketId: number, address: string, port: number, callback: (result: number) => void): void;
    export function disconnect(socketId: number): void;
    export function read(socketId: number, bufferSize?: number, callback?: (readInfo: ReadInfo) => void): void;
    export function write(socketId: number, data: ArrayBuffer, callback?: (writeInfo: WriteInfo) => void): void;
    export function recvFrom(socketId: number, bufferSize?: number, callback?: (recvFromInfo: RecvFromInfo) => void): void;
    export function sendTo(socketId: number, data: ArrayBuffer, address: string, port: number, callback?: (writeInfo: WriteInfo) => void): void;
    export function listen(socketId: number, address: string, port: number, backlog?: number, callback?: (result: number) => void): void;
    export function accept(socketId: number, callback?: (acceptInfo: AcceptInfo) => void): void;
    export function setKeepAlive(socketId: number, enable: boolean, delay?: number, callback?: (result: boolean) => void): void;
    export function setNoDelay(socketId: number, noDelay: boolean, callback?: (result: boolean) => void): void;
    export function getInfo(socketId: number, callback: (result: SocketInfo) => void): void;
    export function getNetworkList(callback: (result: NetworkInterface[]) => void): void;
}

////////////////////
// TabCapture
////////////////////
declare module chrome.tabCapture {
    interface CaptureInfo {
        tabId: number;
        status: string;
        fullscreen: boolean;
    }

    interface CaptureOptions {
        audio?: boolean;
        video?: boolean;
        audioConstraints?: MediaTrackConstraints;
        videoConstraints?: MediaTrackConstraints;
    }

    export function capture(options: CaptureOptions, callback: (stream: MediaStream) => void): void;
    export function getCapturedTabs(callback: (result: CaptureInfo[]) => void): void;
}

////////////////////
// Tabs
////////////////////
declare module chrome.tabs {
    interface Tab {
        status?: string;
        index: number;
        openerTabId?: number;
        title?: string;
        url?: string;
        pinned: boolean;
        highlighted: boolean;
        windowId: number;
        active: boolean;
        favIconUrl?: string;
        id: number;
        incognito: boolean;
    }

    interface InjectDetails {
        allFrames?: boolean;
        code?: string;
        runAt?: string;
        file?: string;
    }

    interface CreateProperties {
        index?: number;
        openerTabId?: number;
        url?: string;
        pinned?: boolean;
        windowId?: number;
        active?: boolean;
    }

    interface MoveProperties {
        index: number;
        windowId?: number;
    }

    interface UpdateProperties {
        pinned?: boolean;
        openerTabId?: number;
        url?: string;
        highlighted?: boolean;
        active?: boolean;
    }

    interface CaptureVisibleTabOptions {
        quality?: number;
        format?: string;
    }

    interface ReloadProperties {
        bypassCache?: boolean;
    }

    interface ConnectInfo {
        name?: string;
    }

    interface HighlightInfo {
        tabs: number[];
        windowId?: number;
    }

    interface QueryInfo {
        status?: string;
        lastFocusedWindow?: boolean;
        windowId?: number;
        windowType?: string;
        active?: boolean;
        index?: number;
        title?: string;
        url?: string | string[];
        currentWindow?: boolean;
        highlighted?: boolean;
        pinned?: boolean;
    }

    interface TabHighlightInfo {
        windowId: number;
        tabIds: number[];
    }

    interface TabRemoveInfo {
        windowId: number;
        isWindowClosing: boolean;
    }

    interface TabAttachInfo {
        newPosition: number;
        newWindowId: number;
    }

    interface TabChangeInfo {
        status?: string;
        pinned?: boolean;
        url?: string;
    }

    interface TabMoveInfo {
        toIndex: number;
        windowId: number;
        fromIndex: number;
    }

    interface TabDetachInfo {
        oldWindowId: number;
        oldPosition: number;
    }

    interface TabActiveInfo {
        tabId: number;
        windowId: number;
    }

    interface TabHighlightedEvent extends chrome.events.Event {
        addListener(callback: (highlightInfo: HighlightInfo) => void): void;
    }

    interface TabRemovedEvent extends chrome.events.Event {
        addListener(callback: (tabId: number, removeInfo: TabRemoveInfo) => void): void;
    }

    interface TabUpdatedEvent extends chrome.events.Event {
        addListener(callback: (tabId: number, changeInfo: TabChangeInfo, tab: Tab) => void): void;
    }

    interface TabAttachedEvent extends chrome.events.Event {
        addListener(callback: (tabId: number, attachInfo: TabAttachInfo) => void): void;
    }

    interface TabMovedEvent extends chrome.events.Event {
        addListener(callback: (tabId: number, moveInfo: TabMoveInfo) => void): void;
    }

    interface TabDetachedEvent extends chrome.events.Event {
        addListener(callback: (tabId: number, detachInfo: TabDetachInfo) => void): void;
    }

    interface TabCreatedEvent extends chrome.events.Event {
        addListener(callback: (tab: Tab) => void): void;
    }

    interface TabActivatedEvent extends chrome.events.Event {
        addListener(callback: (activeInfo: TabActiveInfo) => void): void;
    }

    interface TabReplacedEvent extends chrome.events.Event {
        addListener(callback: (addedTabId: number, removedTabId: number) => void): void;
    }

    export function executeScript(details: InjectDetails, callback?: (result: any[]) => void): void;
    export function executeScript(tabId: number, details: InjectDetails, callback?: (result: any[]) => void): void;
    export function get(tabId: number, callback: (tab: Tab) => void): void;
    export function getCurrent(callback: (tab?: Tab) => void): void;
    export function create(createProperties: CreateProperties, callback?: (tab: Tab) => void): void;
    export function move(tabId: number, moveProperties: MoveProperties, callback?: (tab: Tab) => void): void;
    export function move(tabIds: number[], moveProperties: MoveProperties, callback?: (tabs: Tab[]) => void): void;
    export function update(updateProperties: UpdateProperties, callback?: (tab?: Tab) => void): void;
    export function update(tabId: number, updateProperties: UpdateProperties, callback?: (tab?: Tab) => void): void;
    export function remove(tabId: number, callback?: Function): void;
    export function remove(tabIds: number[], callback?: Function): void;
    export function captureVisibleTab(callback: (dataUrl: string) => void): void;
    export function captureVisibleTab(windowId: number, callback: (dataUrl: string) => void): void;
    export function captureVisibleTab(options: CaptureVisibleTabOptions, callback: (dataUrl: string) => void): void;
    export function captureVisibleTab(windowId: number, options: CaptureVisibleTabOptions, callback: (dataUrl: string) => void): void;
    export function reload(tabId?: number, reloadProperties?: ReloadProperties, func?: Function): void;
    export function duplicate(tabId: number, callback?: (tab?: Tab) => void): void;
    export function sendMessage(tabId: number, message: any, responseCallback?: (response: any) => void): void;
    export function connect(tabId: number, connectInfo?: ConnectInfo): runtime.Port;
    export function insertCSS(tabId: number, details: InjectDetails, callback?: Function): void;
    export function highlight(highlightInfo: HighlightInfo, callback: (window: chrome.windows.Window) => void): void;
    export function query(queryInfo: QueryInfo, callback: (result: Tab[]) => void): void;
    export function detectLanguage(callback: (language: string) => void): void;
    export function detectLanguage(tabId: number, callback: (language: string) => void): void;

    var onHighlighted: TabHighlightedEvent;
    var onRemoved: TabRemovedEvent;
    var onUpdated: TabUpdatedEvent;
    var onAttached: TabAttachedEvent;
    var onMoved: TabMovedEvent;
    var onDetached: TabDetachedEvent;
    var onCreated: TabCreatedEvent;
    var onActivated: TabActivatedEvent;
    var onReplaced: TabReplacedEvent;
}

////////////////////
// Top Sites
////////////////////
declare module chrome.topSites {
    interface MostVisitedURL {
        url: string;
        title: string;
    }

    export function get(callback: (data: MostVisitedURL) => void): void;
}

////////////////////
// Text to Speech
////////////////////
declare module chrome.tts {
    interface TtsEvent {
        charIndex?: number;
        errorMessage?: string;
        type: string;
    }

    interface TtsVoice {
        lang?: string;
        gender?: string;
        voiceName?: string;
        extensionsId?: string;
        eventTypes?: string[];
    }

    interface SpeakOptions {
        volume?: number;
        enqueue?: boolean;
        rate?: number;
        onEvent?: (event: TtsEvent) => void;
        pitch?: number;
        lang?: string;
        voiceName?: string;
        extensionId?: string;
        gender?: string;
        requiredEventTypes?: string[];
        desiredEventTypes?: string[];
    }

    export function isSpeaking(callback?: (speaking: boolean) => void): void;
    export function stop(): void;
    export function getVoices(callback?: (voices: TtsVoice[]) => void): void;
    export function speak(utterance: string, options?: SpeakOptions, callback?: Function): void;
}

////////////////////
// Text to Speech Engine
////////////////////
declare module chrome.ttsEngine {
    interface SpeakOptions {
        lang?: string;
        voiceName?: string;
        gender?: string;
        volume?: number;
        rate?: number;
        pitch?: number;
    }

    interface TtsEngineSpeakEvent extends chrome.events.Event {
        addListener(callback: (utterance: string, options: SpeakOptions, sendTtsEvent: (event: chrome.tts.TtsEvent) => void) => void): void;
    }

    interface TtsEngineStopEvent extends chrome.events.Event {
        addListener(callback: Function): void;
    }

    var onSpeak: TtsEngineSpeakEvent;
    var onStop: TtsEngineStopEvent;
}

////////////////////
// Types
////////////////////
declare module chrome.types {
    interface ChromeSettingClearDetails {
        scope?: string;
    }

    interface ChromeSettingSetDetails extends ChromeSettingClearDetails {
        value: any;
    }

    interface ChromeSettingGetDetails {
        incognito?: boolean;
    }

    type DetailsCallback = (details: ChromeSettingGetResultDetails) => void;

    interface ChromeSettingGetResultDetails {
        levelOfControl: string;
        value: any;
        incognitoSpecific?: boolean;
    }

    interface ChromeSettingChangedEvent extends chrome.events.Event {
        addListener(callback: DetailsCallback): void;
    }

    interface ChromeSetting {
        details: {
            scope?: string;
            callback?: Function;
        };
        set(details: ChromeSettingSetDetails, callback?: Function): void;
        get(details: ChromeSettingGetDetails, callback?: DetailsCallback): void;
        clear(details: ChromeSettingClearDetails, callback?: Function): void;
        onChange: ChromeSettingChangedEvent;
    }
}

////////////////////
// Web Navigation
////////////////////
declare module chrome.webNavigation {
    interface GetFrameDetails {
        processId: number;
        tabId: number;
        frameId: number;
    }

    interface GetFrameResultDetails {
        url: string;
        errorOccurred: boolean;
        parentFrameId: number;
    }

    interface GetAllFrameDetails {
        tabId: number;
    }

    interface GetAllFrameResultDetails extends GetFrameResultDetails {
        processId: number;
        frameId: number;
    }

    interface CallbackBasicDetails {
        tabId: number;
        timeStamp: number;
    }

    interface CallbackDetails extends CallbackBasicDetails {
        processId: number;
        url: string;
        frameId: number;
    }

    interface CallbackTransitionDetails extends CallbackDetails {
        transitionType: string;
        transitionQualifiers: string[];
    }

    interface ReferenceFragmentUpdatedDetails extends CallbackTransitionDetails {
    }

    interface CompletedDetails extends CallbackDetails {
    }

    interface HistoryStateUpdatedDetails extends CallbackTransitionDetails {
    }

    interface CreatedNavigationTargetDetails extends CallbackBasicDetails {
        url: string;
        sourceTabId: number;
        sourceProcessId: number;
        sourceFrameId: number;
    }

    interface TabReplacedDetails extends CallbackBasicDetails {
        replacedTabId: number;
    }

    interface BeforeNavigateDetails extends CallbackDetails {
        parentFrameId: number;
    }

    interface CommittedDetails extends CallbackTransitionDetails {
    }

    interface DomContentLoadedDetails extends CallbackDetails {
    }

    interface ErrorOccurredDetails extends CallbackDetails {
        error: string;
    }

    interface WebNavigationEventFilters {
        url: chrome.events.UrlFilter[];
    }

    interface WebNavigationReferenceFragmentUpdatedEvent extends chrome.events.Event {
        addListener(callback: (details: ReferenceFragmentUpdatedDetails) => void, filters?: WebNavigationEventFilters): void;
    }

    interface WebNavigationCompletedEvent extends chrome.events.Event {
        addListener(callback: (details: CompletedDetails) => void, filters?: WebNavigationEventFilters): void;
    }

    interface WebNavigationHistoryStateUpdatedEvent extends chrome.events.Event {
        addListener(callback: (details: HistoryStateUpdatedDetails) => void, filters?: WebNavigationEventFilters): void;
    }

    interface WebNavigationCreatedNavigationTargetEvent extends chrome.events.Event {
        addListener(callback: (details: CreatedNavigationTargetDetails) => void, filters?: WebNavigationEventFilters): void;
    }

    interface WebNavigationTabReplacedEvent extends chrome.events.Event {
        addListener(callback: (details: TabReplacedDetails) => void): void;
    }

    interface WebNavigationBeforeNavigateEvent extends chrome.events.Event {
        addListener(callback: (details: BeforeNavigateDetails) => void, filters?: WebNavigationEventFilters): void;
    }

    interface WebNavigationCommittedEvent extends chrome.events.Event {
        addListener(callback: (details: CommittedDetails) => void, filters?: WebNavigationEventFilters): void;
    }

    interface WebNavigationDomContentLoadedEvent extends chrome.events.Event {
        addListener(callback: (details: DomContentLoadedDetails) => void, filters?: WebNavigationEventFilters): void;
    }

    interface WebNavigationErrorOccurredEvent extends chrome.events.Event {
        addListener(callback: (details: ErrorOccurredDetails) => void, filters?: WebNavigationEventFilters): void;
    }

    export function getFrame(details: GetFrameDetails, callback: (details?: GetFrameResultDetails) => void): void;
    export function getAllFrames(details: GetAllFrameDetails, callback: (details?: GetAllFrameResultDetails[]) => void): void;

    var onReferenceFragmentUpdated: WebNavigationReferenceFragmentUpdatedEvent;
    var onCompleted: WebNavigationCompletedEvent;
    var onHistoryStateUpdated: WebNavigationHistoryStateUpdatedEvent;
    var onCreatedNavigationTarget: WebNavigationCreatedNavigationTargetEvent;
    var onTabReplaced: WebNavigationTabReplacedEvent;
    var onBeforeNavigate: WebNavigationBeforeNavigateEvent;
    var onCommitted: WebNavigationCommittedEvent;
    var onDOMContentLoaded: WebNavigationDomContentLoadedEvent;
    var onErrorOccurred: WebNavigationErrorOccurredEvent;
}

////////////////////
// Web Request
////////////////////
declare module chrome.webRequest {
    interface AuthCredentials {
        username: string;
        password: string;
    }

    interface HttpHeader {
        name: string;
        value?: string;
        binaryValue?: ArrayBuffer;
    }

    interface BlockingResponse {
        cancel?: boolean;
        redirectUrl?: string;
        responseHeaders?: HttpHeader[];
        authCredentials?: AuthCredentials;
        requestHeaders?: HttpHeader[];
    }

    interface RequestFilter {
        tabId?: number;
        types?: string[];
        urls: string[];
        windowId?: number;
    }

    interface UploadData {
        bytes?: ArrayBuffer;
        file?: string;
    }

    interface CallbackDetails {
        requestId: string;
        url: string;
        method: string;
        tabId: number;
        frameId: number;
        parentFrameId: number;
        timeStamp: number;
        type: string;
    }

    interface OnCompletedDetails extends CallbackDetails {
        ip?: string;
        statusLine: string;
        responseHeaders?: HttpHeader[];
        fromCache: boolean;
        statusCode: number;
    }

    interface OnHeadersReceivedDetails extends CallbackDetails {
        statusLine: string;
        responseHeaders?: HttpHeader[];
    }

    interface OnBeforeRedirectDetails extends CallbackDetails {
        ip?: string;
        statusLine: string;
        responseHeaders?: HttpHeader[];
        fromCache: boolean;
        redirectUrl: string;
        statusCode: number;
    }

    interface Challenger {
        host: string;
        port: number;
    }

    interface OnAuthRequiredDetails extends CallbackDetails {
        statusLine: string;
        challenger: Challenger;
        responseHeaders?: HttpHeader[];
        isProxy: boolean;
        realm?: string;
        scheme: string;
    }

    interface OnBeforeSendHeadersDetails extends CallbackDetails {
        requestHeaders?: HttpHeader[];
    }

    interface OnErrorOccurredDetails extends CallbackDetails {
        ip?: string;
        fromCache: boolean;
        error: string;
    }

    interface OnResponseStartedDetails extends CallbackDetails {
        ip?: string;
        statusLine: string;
        responseHeaders?: HttpHeader[];
        fromCache: boolean;
        statusCode: number;
    }

    interface OnSendHeadersDetails extends CallbackDetails {
        requestHeaders?: HttpHeader[];
    }

    interface FormData {
        [key: string]: string[];
    }

    interface RequestBody {
        raw?: UploadData[];
        error?: string;
        formData?: FormData;
    }

    interface OnBeforeRequestDetails extends CallbackDetails {
        requestBody?: RequestBody;
    }

    interface WebRequestCompletedEvent extends chrome.events.Event {
        addListener(callback: (details: OnCompletedDetails) => BlockingResponse, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
        removeListener(callback: (details: OnCompletedDetails) => BlockingResponse): void;
    }

    interface WebRequestHeadersReceivedEvent extends chrome.events.Event {
        addListener(callback: (details: OnHeadersReceivedDetails) => BlockingResponse, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
        removeListener(callback: (details: OnHeadersReceivedDetails) => BlockingResponse): void;
    }

    interface WebRequestBeforeRedirectEvent extends chrome.events.Event {
        addListener(callback: (details: OnBeforeRedirectDetails) => BlockingResponse, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
        removeListener(callback: (details: OnBeforeRedirectDetails) => BlockingResponse): void;
    }

    interface WebRequestAuthRequiredEvent extends chrome.events.Event {
        addListener(callback: (details: OnAuthRequiredDetails, callback?: (response: BlockingResponse) => void) => void, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
        removeListener(callback: (details: OnAuthRequiredDetails, callback?: (response: BlockingResponse) => void) => void): void;
    }

    interface WebRequestBeforeSendHeadersEvent extends chrome.events.Event {
        addListener(callback: (details: OnBeforeSendHeadersDetails) => BlockingResponse, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
        removeListener(callback: (details: OnBeforeSendHeadersDetails) => BlockingResponse): void;
    }

    interface WebRequestErrorOccurredEvent extends chrome.events.Event {
        addListener(callback: (details: OnErrorOccurredDetails) => BlockingResponse, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
        removeListener(callback: (details: OnErrorOccurredDetails) => BlockingResponse): void;
    }

    interface WebRequestResponseStartedEvent extends chrome.events.Event {
        addListener(callback: (details: OnResponseStartedDetails) => BlockingResponse, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
        removeListener(callback: (details: OnResponseStartedDetails) => BlockingResponse): void;
    }

    interface WebRequestSendHeadersEvent extends chrome.events.Event {
        addListener(callback: (details: OnSendHeadersDetails) => BlockingResponse, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
        removeListener(callback: (details: OnSendHeadersDetails) => BlockingResponse): void;
    }

    interface WebRequestBeforeRequestEvent extends chrome.events.Event {
        addListener(callback: (details: OnBeforeRequestDetails) => BlockingResponse, filter?: RequestFilter, opt_extraInfoSpec?: string[]): void;
        removeListener(callback: (details: OnBeforeRequestDetails) => BlockingResponse): void;
    }

    var MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES: number;

    export function handlerBehaviorChanged(callback?: Function): void;

    var onCompleted: WebRequestCompletedEvent;
    var onHeadersReceived: WebRequestHeadersReceivedEvent;
    var onBeforeRedirect: WebRequestBeforeRedirectEvent;
    var onAuthRequired: WebRequestAuthRequiredEvent;
    var onBeforeSendHeaders: WebRequestBeforeSendHeadersEvent;
    var onErrorOccurred: WebRequestErrorOccurredEvent;
    var onResponseStarted: WebRequestResponseStartedEvent;
    var onSendHeaders: WebRequestSendHeadersEvent;
    var onBeforeRequest: WebRequestBeforeRequestEvent;
}

////////////////////
// Web Store
////////////////////
declare module chrome.webstore {
    export function install(url?: string, successCallback?: Function, failureCallback?: (error: string) => void): void;
}

////////////////////
// Windows
////////////////////
declare module chrome.windows {
    interface Window {
        tabs?: chrome.tabs.Tab[];
        top: number;
        height: number;
        width: number;
        state: string;
        focused: boolean;
        alwaysOnTop: boolean;
        incognito: boolean;
        type: string;
        id: number;
        left: number;
    }

    interface GetInfo {
        populate?: boolean;
    }

    interface CreateData {
        tabId?: number;
        url?: string;
        top?: number;
        height?: number;
        width?: number;
        focused?: boolean;
        incognito?: boolean;
        type?: string;
        left?: number;
    }

    interface UpdateInfo {
        top?: number;
        drawAttention?: boolean;
        height?: number;
        width?: number;
        state?: string;
        focused?: boolean;
        left?: number;
    }

    interface WindowRemovedEvent extends chrome.events.Event {
        addListener(callback: (windowId: number) => void): void;
    }

    interface WindowCreatedEvent extends chrome.events.Event {
        addListener(callback: (window: Window) => void): void;
    }

    interface WindowFocusChangedEvent extends chrome.events.Event {
        addListener(callback: (windowId: number) => void): void;
    }

    var WINDOW_ID_CURRENT: number;
    var WINDOW_ID_NONE: number;

    export function get(windowId: number, callback: (window: chrome.windows.Window) => void): void;
    export function get(windowId: number, getInfo: GetInfo, callback: (window: chrome.windows.Window) => void): void;
    export function getCurrent(callback: (window: chrome.windows.Window) => void): void;
    export function getCurrent(getInfo: GetInfo, callback: (window: chrome.windows.Window) => void): void;
    export function create(createData?: CreateData, callback?: (window: chrome.windows.Window) => void): void;
    export function getAll(callback: (windows: chrome.windows.Window[]) => void): void;
    export function getAll(getInfo: GetInfo, callback: (windows: chrome.windows.Window[]) => void): void;
    export function update(windowId: number, updateInfo: UpdateInfo, callback?: (window: chrome.windows.Window) => void): void;
    export function remove(windowId: number, callback?: Function): void;
    export function getLastFocused(callback: (window: chrome.windows.Window) => void): void;
    export function getLastFocused(getInfo: GetInfo, callback: (window: chrome.windows.Window) => void): void;

    var onRemoved: WindowRemovedEvent;
    var onCreated: WindowCreatedEvent;
    var onFocusChanged: WindowFocusChangedEvent;
}
