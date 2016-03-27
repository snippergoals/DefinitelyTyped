// Type definitions for Electron v0.37.2
// Project: http://electron.atom.io/
// Definitions by: jedmao <https://github.com/jedmao/>, rhysd <https://rhysd.github.io>, Milan Burda <https://github.com/miniak/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare namespace Electron {

	class EventEmitter implements NodeJS.EventEmitter {
		addListener(event: string, listener: Function): this;
		on(event: string, listener: Function): this;
		once(event: string, listener: Function): this;
		removeListener(event: string, listener: Function): this;
		removeAllListeners(event?: string): this;
		setMaxListeners(n: number): this;
		getMaxListeners(): number;
		listeners(event: string): Function[];
		emit(event: string, ...args: any[]): boolean;
		listenerCount(type: string): number;
	}

	interface Event {
		preventDefault: Function;
		sender: EventEmitter;
	}

	// https://github.com/atom/electron/blob/master/docs/api/app.md

	/**
	 * The app module is responsible for controlling the application's lifecycle.
	 */
	interface App extends NodeJS.EventEmitter {
		/**
		 * Emitted when the application has finished basic startup.
		 * On Windows and Linux, the will-finish-launching event
		 * is the same as the ready event; on OS X, this event represents
		 * the applicationWillFinishLaunching notification of NSApplication.
		 * You would usually set up listeners for the open-file and open-url events here,
		 * and start the crash reporter and auto updater.
		 *
		 * In most cases, you should just do everything in the ready event handler.
		 */
		on(event: 'will-finish-launching', listener: Function): this;
		/**
		 * Emitted when Electron has finished initialization.
		 */
		on(event: 'ready', listener: Function): this;
		/**
		 * Emitted when all windows have been closed.
		 *
		 * This event is only emitted when the application is not going to quit.
		 * If the user pressed Cmd + Q, or the developer called app.quit(),
		 * Electron will first try to close all the windows and then emit the will-quit event,
		 * and in this case the window-all-closed event would not be emitted.
		 */
		on(event: 'window-all-closed', listener: Function): this;
		/**
		 * Emitted before the application starts closing its windows.
		 * Calling event.preventDefault() will prevent the default behaviour, which is terminating the application.
		 */
		on(event: 'before-quit', listener: (event: Event) => void): this;
		/**
		 * Emitted when all windows have been closed and the application will quit.
		 * Calling event.preventDefault() will prevent the default behaviour, which is terminating the application.
		 */
		on(event: 'will-quit', listener: (event: Event) => void): this;
		/**
		 * Emitted when the application is quitting.
		 */
		on(event: 'quit', listener: (event: Event, exitCode: number) => void): this;
		/**
		 * Emitted when the user wants to open a file with the application.
		 * The open-file event is usually emitted when the application is already open
		 * and the OS wants to reuse the application to open the file.
		 * open-file is also emitted when a file is dropped onto the dock and the application
		 * is not yet running. Make sure to listen for the open-file event very early
		 * in your application startup to handle this case (even before the ready event is emitted).
		 *
		 * You should call event.preventDefault() if you want to handle this event.
		 *
		 * Note: This is only implemented on OS X.
		 */
		on(event: 'open-file', listener: (event: Event, url: string) => void): this;
		/**
		 * Emitted when the user wants to open a URL with the application.
		 * The URL scheme must be registered to be opened by your application.
		 *
		 * You should call event.preventDefault() if you want to handle this event.
		 *
		 * Note: This is only implemented on OS X.
		 */
		on(event: 'open-url', listener: (event: Event, url: string) => void): this;
		/**
		 * Emitted when the application is activated, which usually happens when clicks on the applications’s dock icon.
		 * Note: This is only implemented on OS X.
		 */
		on(event: 'activate', listener: Function): this;
		/**
		 * Emitted when a browserWindow gets blurred.
		 */
		on(event: 'browser-window-blur', listener: (event: Event, browserWindow: BrowserWindow) => void): this;
		/**
		 * Emitted when a browserWindow gets focused.
		 */
		on(event: 'browser-window-focus', listener: (event: Event, browserWindow: BrowserWindow) => void): this;
		/**
		 * Emitted when a new browserWindow is created.
		 */
		on(event: 'browser-window-created', listener: (event: Event, browserWindow: BrowserWindow) => void): this;
		/**
		 * Emitted when failed to verify the certificate for url, to trust the certificate
		 * you should prevent the default behavior with event.preventDefault() and call callback(true).
		 */
		on(event: 'certificate-error', listener: (event: Event,
			webContents: WebContents,
			url: string,
			error: string,
			certificate: Certificate,
			callback: (trust: boolean) => void
		) => void): this;
		/**
		 * Emitted when a client certificate is requested.
		 *
		 * The url corresponds to the navigation entry requesting the client certificate
		 * and callback needs to be called with an entry filtered from the list.
		 * Using event.preventDefault() prevents the application from using the first certificate from the store.
		 */
		on(event: 'select-client-certificate', listener: (event: Event,
			webContents: WebContents,
			url: string,
			certificateList: Certificate[],
			callback: (certificate: Certificate) => void
		) => void): this;
		/**
		 * Emitted when webContents wants to do basic auth.
		 *
		 * The default behavior is to cancel all authentications, to override this
		 * you should prevent the default behavior with event.preventDefault()
		 * and call callback(username, password) with the credentials.
		 */
		on(event: 'login', listener: (event: Event,
			webContents: WebContents,
			request: LoginRequest,
			authInfo: LoginAuthInfo,
			callback: (username: string, password: string) => void
		) => void): this;
		/**
		 * Emitted when the gpu process crashes.
		 */
		on(event: 'gpu-process-crashed', listener: Function): this;
		/**
		 * Emitted when the system’s Dark Mode theme is toggled.
		 * Note: This is only implemented on OS X.
		 */
		on(event: 'platform-theme-changed', listener: Function): this;
		on(event: string, listener: Function): this;
		/**
		 * Try to close all windows. The before-quit event will first be emitted.
		 * If all windows are successfully closed, the will-quit event will be emitted
		 * and by default the application would be terminated.
		 *
		 * This method guarantees all beforeunload and unload handlers are correctly
		 * executed. It is possible that a window cancels the quitting by returning
		 * false in beforeunload handler.
		 */
		quit(): void;
		/**
		 * Exits immediately with exitCode.
		 * All windows will be closed immediately without asking user
		 * and the before-quit and will-quit events will not be emitted.
		 */
		exit(exitCode: number): void;
		/**
		 * On Linux, focuses on the first visible window.
		 * On OS X, makes the application the active app.
		 * On Windows, focuses on the application’s first window.
		 */
		focus(): void;
		/**
		 * Hides all application windows without minimizing them.
		 * Note: This is only implemented on OS X.
		 */
		hide(): void;
		/**
		 * Shows application windows after they were hidden. Does not automatically focus them.
		 * Note: This is only implemented on OS X.
		 */
		show(): void;
		/**
		 * Returns the current application directory.
		 */
		getAppPath(): string;
		/**
		 * @returns The path to a special directory or file associated with name.
		 * On failure an Error would throw.
		 */
		getPath(name: AppPathName): string;
		/**
		 * Overrides the path to a special directory or file associated with name.
		 * If the path specifies a directory that does not exist, the directory will
		 * be created by this method. On failure an Error would throw.
		 *
		 * You can only override paths of names defined in app.getPath.
		 *
		 * By default web pages' cookies and caches will be stored under userData
		 * directory, if you want to change this location, you have to override the
		 * userData path before the ready event of app module gets emitted.
		 */
		setPath(name: AppPathName, path: string): void;
		/**
		 * @returns The version of loaded application, if no version is found in
		 * application's package.json, the version of current bundle or executable.
		 */
		getVersion(): string;
		/**
		 * @returns The current application's name, the name in package.json would be used.
		 * Usually the name field of package.json is a short lowercased name, according to
		 * the spec of npm modules. So usually you should also specify a productName field,
		 * which is your application's full capitalized name, and it will be preferred over
		 * name by Electron.
		 */
		getName(): string;
		/**
		  * @returns The current application locale.
		  */
		getLocale(): string;
		/**
		 * Adds path to recent documents list.
		 *
		 * This list is managed by the system, on Windows you can visit the list from
		 * task bar, and on Mac you can visit it from dock menu.
		 *
		 * Note: This is only implemented on OS X and Windows.
		 */
		addRecentDocument(path: string): void;
		/**
		 * Clears the recent documents list.
		 *
		 * Note: This is only implemented on OS X and Windows.
		 */
		clearRecentDocuments(): void;
		/**
		 * Adds tasks to the Tasks category of JumpList on Windows.
		 *
		 * Note: This API is only available on Windows.
		 */
		setUserTasks(tasks: Task[]): void;
		/**
		 * Dynamically sets whether to always send credentials for HTTP NTLM or Negotiate authentication.
		 * Normally, Electron will only send NTLM/Kerberos credentials for URLs that fall under
		 * "Local Intranet" sites (i.e. are in the same domain as you).
		 * However, this detection often fails when corporate networks are badly configured,
		 * so this lets you co-opt this behavior and enable it for all URLs.
		 */
		allowNTLMCredentialsForAllDomains(allow: boolean): void;
		/**
		 * This method makes your application a Single Instance Application instead of allowing
		 * multiple instances of your app to run, this will ensure that only a single instance
		 * of your app is running, and other instances signal this instance and exit.
		 */
		makeSingleInstance(callback: (args: string[], workingDirectory: string) => boolean): boolean;
		/**
		 * Changes the Application User Model ID to id.
		 */
		setAppUserModelId(id: string): void;
		/**
		 * This method returns true if DWM composition (Aero Glass) is enabled,
		 * and false otherwise. You can use it to determine if you should create
		 * a transparent window or not (transparent windows won’t work correctly when DWM composition is disabled).
		 *
		 * Note: This is only implemented on Windows.
		 */
		isAeroGlassEnabled(): boolean;
		/**
		 * @returns If the system is in Dark Mode.
		 * Note: This is only implemented on OS X.
		 */
		isDarkMode(): boolean;
		commandLine: CommandLine;
		/**
		 * Note: This API is only available on Mac.
		 */
		dock: Dock;
	}

	type AppPathName = 'home'|'appData'|'userData'|'temp'|'exe'|'module'|'desktop'|'documents'|'downloads'|'music'|'pictures'|'videos';

	interface CommandLine {
		/**
		 * Append a switch [with optional value] to Chromium's command line.
		 *
		 * Note: This will not affect process.argv, and is mainly used by developers
		 * to control some low-level Chromium behaviors.
		 */
		appendSwitch(_switch: string, value?: string|number): void;
		/**
		 * Append an argument to Chromium's command line. The argument will quoted properly.
		 *
		 * Note: This will not affect process.argv.
		 */
		appendArgument(value: any): void;
	}

	interface Dock {
		/**
		 * When critical is passed, the dock icon will bounce until either the
		 * application becomes active or the request is canceled.
		 *
		 * When informational is passed, the dock icon will bounce for one second.
		 * However, the request remains active until either the application becomes
		 * active or the request is canceled.
		 *
		 * @param type The default is informational.
		 * @returns An ID representing the request.
		 */
		bounce(type?: 'critical' | 'informational'): number;
		/**
		 * Cancel the bounce of id.
		 *
		 * Note: This API is only available on Mac.
		 */
		cancelBounce(id: number): void;
		/**
		 * Sets the string to be displayed in the dock’s badging area.
		 *
		 * Note: This API is only available on Mac.
		 */
		setBadge(text: string): void;
		/**
		 * Returns the badge string of the dock.
		 *
		 * Note: This API is only available on Mac.
		 */
		getBadge(): string;
		/**
		 * Hides the dock icon.
		 *
		 * Note: This API is only available on Mac.
		 */
		hide(): void;
		/**
		 * Shows the dock icon.
		 *
		 * Note: This API is only available on Mac.
		 */
		show(): void;
		/**
		 * Sets the application dock menu.
		 *
		 * Note: This API is only available on Mac.
		 */
		setMenu(menu: Menu): void;
		/**
		 * Sets the image associated with this dock icon.
		 *
		 * Note: This API is only available on Mac.
		 */
		setIcon(icon: NativeImage | string): void;
	}

	interface Task {
		/**
		 * Path of the program to execute, usually you should specify process.execPath
		 * which opens current program.
		 */
		program: string;
		/**
		 * The arguments of command line when program is executed.
		 */
		arguments: string;
		/**
		 * The string to be displayed in a JumpList.
		 */
		title: string;
		/**
		 * Description of this task.
		 */
		description?: string;
		/**
		 * The absolute path to an icon to be displayed in a JumpList, it can be
		 * arbitrary resource file that contains an icon, usually you can specify
		 * process.execPath to show the icon of the program.
		 */
		iconPath: string;
		/**
		 * The icon index in the icon file. If an icon file consists of two or more
		 * icons, set this value to identify the icon. If an icon file consists of
		 * one icon, this value is 0.
		 */
		iconIndex?: number;
	}

	// https://github.com/atom/electron/blob/master/docs/api/auto-updater.md

	/**
	 * This module provides an interface for the Squirrel auto-updater framework.
	 */
	interface AutoUpdater extends NodeJS.EventEmitter {
		/**
		 * Emitted when there is an error while updating.
		 */
		on(event: 'error', listener: (error: Error) => void): this;
		/**
		 * Emitted when checking if an update has started.
		 */
		on(event: 'checking-for-update', listener: Function): this;
		/**
		 * Emitted when there is an available update. The update is downloaded automatically.
		 */
		on(event: 'update-available', listener: Function): this;
		/**
		 * Emitted when there is no available update.
		 */
		on(event: 'update-not-available', listener: Function): this;
		/**
		 * Emitted when an update has been downloaded.
		 * Note: On Windows only releaseName is available.
		 */
		on(event: 'update-downloaded', listener: (event: Event, releaseNotes: string, releaseName: string, releaseDate: Date, updateURL: string) => void): this;
		on(event: string, listener: Function): this;
		/**
		 * Set the url and initialize the auto updater.
		 * The url cannot be changed once it is set.
		 */
		setFeedURL(url: string): void;
		/**
		 * Ask the server whether there is an update, you have to call setFeedURL
		 * before using this API
		 */
		checkForUpdates(): any;
		/**
		 * Restarts the app and installs the update after it has been downloaded.
		 * It should only be called after update-downloaded has been emitted.
		 */
		quitAndInstall(): void;
	}

	// https://github.com/atom/electron/blob/master/docs/api/browser-window.md

	/**
	 * The BrowserWindow class gives you ability to create a browser window.
	 * You can also create a window without chrome by using Frameless Window API.
	 */
	class BrowserWindow extends EventEmitter {
		/**
		 * Emitted when the document changed its title,
		 * calling event.preventDefault() would prevent the native window’s title to change.
		 */
		on(event: 'page-title-updated', listener: (event: Event) => void): this;
		/**
		 * Emitted when the window is going to be closed. It’s emitted before the beforeunload
		 * and unload event of the DOM. Calling event.preventDefault() will cancel the close.
		 */
		on(event: 'close', listener: (event: Event) => void): this;
		/**
		 * Emitted when the window is closed. After you have received this event
		 * you should remove the reference to the window and avoid using it anymore.
		 */
		on(event: 'closed', listener: Function): this;
		/**
		 * Emitted when the web page becomes unresponsive.
		 */
		on(event: 'unresponsive', listener: Function): this;
		/**
		 * Emitted when the unresponsive web page becomes responsive again.
		 */
		on(event: 'responsive', listener: Function): this;
		/**
		 * Emitted when the window loses focus.
		 */
		on(event: 'blur', listener: Function): this;
		/**
		 * Emitted when the window gains focus.
		 */
		on(event: 'focus', listener: Function): this;
		/**
		 * Emitted when the window is shown.
		 */
		on(event: 'show', listener: Function): this;
		/**
		 * Emitted when the window is hidden.
		 */
		on(event: 'hide', listener: Function): this;
		/**
		 * Emitted when window is maximized.
		 */
		on(event: 'maximize', listener: Function): this;
		/**
		 * Emitted when the window exits from maximized state.
		 */
		on(event: 'unmaximize', listener: Function): this;
		/**
		 * Emitted when the window is minimized.
		 */
		on(event: 'minimize', listener: Function): this;
		/**
		 * Emitted when the window is restored from minimized state.
		 */
		on(event: 'restore', listener: Function): this;
		/**
		 * Emitted when the window is getting resized.
		 */
		on(event: 'resize', listener: Function): this;
		/**
		 * Emitted when the window is getting moved to a new position.
		 */
		on(event: 'move', listener: Function): this;
		/**
		 * Emitted when the window enters full screen state.
		 */
		on(event: 'enter-full-screen', listener: Function): this;
		/**
		 * Emitted when the window leaves full screen state.
		 */
		on(event: 'leave-full-screen', listener: Function): this;
		/**
		 * Emitted when the window enters full screen state triggered by HTML API.
		 */
		on(event: 'enter-html-full-screen', listener: Function): this;
		/**
		 * Emitted when the window leaves full screen state triggered by HTML API.
		 */
		on(event: 'leave-html-full-screen', listener: Function): this;
		/**
		 * Emitted when an App Command is invoked. These are typically related
		 * to keyboard media keys or browser commands, as well as the "Back" /
		 * "Forward" buttons built into some mice on Windows.
		 * Note: This is only implemented on Windows.
		 */
		on(event: 'app-command', listener: (event: Event, command: string) => void): this;
		/**
		 * Emitted when scroll wheel event phase has begun.
		 * Note: This is only implemented on OS X.
		 */
		on(event: 'scroll-touch-begin', listener: Function): this;
		/**
		 * Emitted when scroll wheel event phase has ended.
		 * Note: This is only implemented on OS X.
		 */
		on(event: 'scroll-touch-end', listener: Function): this;
		on(event: string, listener: Function): this;
		constructor(options?: BrowserWindowOptions);
		/**
		 * @returns All opened browser windows.
		 */
		static getAllWindows(): BrowserWindow[];
		/**
		 * @returns The window that is focused in this application.
		 */
		static getFocusedWindow(): BrowserWindow;
		/**
		 * Find a window according to the webContents it owns.
		 */
		static fromWebContents(webContents: WebContents): BrowserWindow;
		/**
		 * Find a window according to its ID.
		 */
		static fromId(id: number): BrowserWindow;
		/**
		 * Adds devtools extension located at path. The extension will be remembered
		 * so you only need to call this API once, this API is not for programming use.
		 * @returns The extension's name.
		 */
		static addDevToolsExtension(path: string): string;
		/**
		 * Remove a devtools extension.
		 * @param name The name of the devtools extension to remove.
		 */
		static removeDevToolsExtension(name: string): void;
		/**
		 * The WebContents object this window owns, all web page related events and
		 * operations would be done via it.
		 * Note: Users should never store this object because it may become null when
		 * the renderer process (web page) has crashed.
		 */
		webContents: WebContents;
		/**
		 * Get the unique ID of this window.
		 */
		id: number;
		/**
		 * Force closing the window, the unload and beforeunload event won't be emitted
		 * for the web page, and close event would also not be emitted for this window,
		 * but it would guarantee the closed event to be emitted.
		 * You should only use this method when the renderer process (web page) has crashed.
		 */
		destroy(): void;
		/**
		 * Try to close the window, this has the same effect with user manually clicking
		 * the close button of the window. The web page may cancel the close though,
		 * see the close event.
		 */
		close(): void;
		/**
		 * Focus on the window.
		 */
		focus(): void;
		/**
		 * Remove focus on the window.
		 */
		blur(): void;
		/**
		 * @returns Whether the window is focused.
		 */
		isFocused(): boolean;
		/**
		 * Shows and gives focus to the window.
		 */
		show(): void;
		/**
		 * Shows the window but doesn't focus on it.
		 */
		showInactive(): void;
		/**
		 * Hides the window.
		 */
		hide(): void;
		/**
		 * @returns Whether the window is visible to the user.
		 */
		isVisible(): boolean;
		/**
		 * Maximizes the window.
		 */
		maximize(): void;
		/**
		 * Unmaximizes the window.
		 */
		unmaximize(): void;
		/**
		 * @returns Whether the window is maximized.
		 */
		isMaximized(): boolean;
		/**
		 * Minimizes the window. On some platforms the minimized window will be
		 * shown in the Dock.
		 */
		minimize(): void;
		/**
		 * Restores the window from minimized state to its previous state.
		 */
		restore(): void;
		/**
		 * @returns Whether the window is minimized.
		 */
		isMinimized(): boolean;
		/**
		 * Sets whether the window should be in fullscreen mode.
		 */
		setFullScreen(flag: boolean): void;
		/**
		 * @returns Whether the window is in fullscreen mode.
		 */
		isFullScreen(): boolean;
		/**
		 * This will have a window maintain an aspect ratio.
		 * The extra size allows a developer to have space, specified in pixels,
		 * not included within the aspect ratio calculations.
		 * This API already takes into account the difference between a window’s size and its content size.
		 *
		 * Note: This API is available only on OS X.
		 */
		setAspectRatio(aspectRatio: number, extraSize?: Dimension): void;
		/**
		 * Resizes and moves the window to width, height, x, y.
		 */
		setBounds(options: Rectangle, animate?: boolean): void;
		/**
		 * @returns The window's width, height, x and y values.
		 */
		getBounds(): Rectangle;
		/**
		 * Resizes the window to width and height.
		 */
		setSize(width: number, height: number, animate?: boolean): void;
		/**
		 * @returns The window's width and height.
		 */
		getSize(): number[];
		/**
		 * Resizes the window's client area (e.g. the web page) to width and height.
		 */
		setContentSize(width: number, height: number, animate?: boolean): void;
		/**
		 * @returns The window's client area's width and height.
		 */
		getContentSize(): number[];
		/**
		 * Sets the minimum size of window to width and height.
		 */
		setMinimumSize(width: number, height: number): void;
		/**
		 * @returns The window's minimum width and height.
		 */
		getMinimumSize(): number[];
		/**
		 * Sets the maximum size of window to width and height.
		 */
		setMaximumSize(width: number, height: number): void;
		/**
		 * @returns The window's maximum width and height.
		 */
		getMaximumSize(): number[];
		/**
		 * Sets whether the window can be manually resized by user.
		 */
		setResizable(resizable: boolean): void;
		/**
		 * @returns Whether the window can be manually resized by user.
		 */
		isResizable(): boolean;
		/**
		 * Sets whether the window can be moved by user. On Linux does nothing.
		 * Note: This API is available only on OS X and Windows.
		 */
		setMovable(movable: boolean): void;
		/**
		 * Note: This API is available only on OS X and Windows.
		 * @returns Whether the window can be moved by user. On Linux always returns true.
		 */
		isMovable(): boolean;
		/**
		 * Sets whether the window can be manually minimized by user. On Linux does nothing.
		 * Note: This API is available only on OS X and Windows.
		 */
		setMinimizable(minimizable: boolean): void;
		/**
		 * Note: This API is available only on OS X and Windows.
		 * @returns Whether the window can be manually minimized by user. On Linux always returns true.
		 */
		isMinimizable(): boolean;
		/**
		 * Sets whether the window can be manually maximized by user. On Linux does nothing.
		 * Note: This API is available only on OS X and Windows.
		 */
		setMaximizable(maximizable: boolean): void;
		/**
		 * Note: This API is available only on OS X and Windows.
		 * @returns Whether the window can be manually maximized by user. On Linux always returns true.
		 */
		isMaximizable(): boolean;
		/**
		 * Sets whether the maximize/zoom window button toggles fullscreen mode or maximizes the window.
		 */
		setFullScreenable(fullscreenable: boolean): void;
		/**
		 * @returns Whether the maximize/zoom window button toggles fullscreen mode or maximizes the window.
		 */
		isFullScreenable(): boolean;
		/**
		 * Sets whether the window can be manually closed by user. On Linux does nothing.
		 * Note: This API is available only on OS X and Windows.
		 */
		setClosable(closable: boolean): void;
		/**
		 * Note: This API is available only on OS X and Windows.
		 * @returns Whether the window can be manually closed by user. On Linux always returns true.
		 */
		isClosable(): boolean;
		/**
		 * Sets whether the window should show always on top of other windows. After
		 * setting this, the window is still a normal window, not a toolbox window
		 * which can not be focused on.
		 */
		setAlwaysOnTop(flag: boolean): void;
		/**
		 * @returns Whether the window is always on top of other windows.
		 */
		isAlwaysOnTop(): boolean;
		/**
		 * Moves window to the center of the screen.
		 */
		center(): void;
		/**
		 * Moves window to x and y.
		 */
		setPosition(x: number, y: number, animate?: boolean): void;
		/**
		 * @returns The window's current position.
		 */
		getPosition(): number[];
		/**
		 * Changes the title of native window to title.
		 */
		setTitle(title: string): void;
		/**
		 * Note: The title of web page can be different from the title of the native window.
		 * @returns The title of the native window.
		 */
		getTitle(): string;
		/**
		 * Starts or stops flashing the window to attract user's attention.
		 */
		flashFrame(flag: boolean): void;
		/**
		 * Makes the window do not show in Taskbar.
		 */
		setSkipTaskbar(skip: boolean): void;
		/**
		 * Enters or leaves the kiosk mode.
		 */
		setKiosk(flag: boolean): void;
		/**
		 * @returns Whether the window is in kiosk mode.
		 */
		isKiosk(): boolean;
		/**
		 * The native type of the handle is HWND on Windows, NSView* on OS X,
		 * and Window (unsigned long) on Linux.
		 * @returns The platform-specific handle of the window as Buffer.
		 */
		getNativeWindowHandle(): Buffer;
		/**
		 * Hooks a windows message. The callback is called when the message is received in the WndProc.
		 * Note: This API is available only on Windows.
		 */
		hookWindowMessage(message: number, callback: Function): void;
		/**
		 * @returns Whether the message is hooked.
		 */
		isWindowMessageHooked(message: number): boolean;
		/**
		 * Unhook the window message.
		 */
		unhookWindowMessage(message: number): void;
		/**
		 * Unhooks all of the window messages.
		 */
		unhookAllWindowMessages(): void;
		/**
		 * Sets the pathname of the file the window represents, and the icon of the
		 * file will show in window's title bar.
		 * Note: This API is available only on OS X.
		 */
		setRepresentedFilename(filename: string): void;
		/**
		 * Note: This API is available only on OS X.
		 * @returns The pathname of the file the window represents.
		 */
		getRepresentedFilename(): string;
		/**
		 * Specifies whether the window’s document has been edited, and the icon in
		 * title bar will become grey when set to true.
		 * Note: This API is available only on OS X.
		 */
		setDocumentEdited(edited: boolean): void;
		/**
		 * Note: This API is available only on OS X.
		 * @returns Whether the window's document has been edited.
		 */
		isDocumentEdited(): boolean;
		focusOnWebView(): void;
		blurWebView(): void;
		/**
		 * Captures the snapshot of page within rect, upon completion the callback
		 * will be called. Omitting the rect would capture the whole visible page.
		 * Note: Be sure to read documents on remote buffer in remote if you are going
		 * to use this API in renderer process.
		 * @param callback Supplies the image that stores data of the snapshot.
		 */
		capturePage(rect: Rectangle, callback: (image: NativeImage) => void): void;
		capturePage(callback: (image: NativeImage) => void): void;
		/**
		 * Same with webContents.print([options])
		 */
		print(options?: PrintOptions): void;
		/**
		 * Same with webContents.printToPDF([options])
		 */
		printToPDF(options: PrintToPDFOptions, callback: (error: Error, data: Buffer) => void): void;
		/**
		 * Same with webContents.loadURL(url).
		 */
		loadURL(url: string, options?: LoadURLOptions): void;
		/**
		 * Same with webContents.reload.
		 */
		reload(): void;
		/**
		 * Sets the menu as the window top menu.
		 * Note: This API is not available on OS X.
		 */
		setMenu(menu: Menu): void;
		/**
		 * Sets the progress value in the progress bar.
		 * On Linux platform, only supports Unity desktop environment, you need to
		 * specify the *.desktop file name to desktopName field in package.json.
		 * By default, it will assume app.getName().desktop.
		 * @param progress Valid range is [0, 1.0]. If < 0, the progress bar is removed.
		 * If greater than 0, it becomes indeterminate.
		 */
		setProgressBar(progress: number): void;
		/**
		 * Sets a 16px overlay onto the current Taskbar icon, usually used to convey
		 * some sort of application status or to passively notify the user.
		 * Note: This API is only available on Windows 7 or above.
		 * @param overlay The icon to display on the bottom right corner of the Taskbar
		 * icon. If this parameter is null, the overlay is cleared
		 * @param description Provided to Accessibility screen readers.
		 */
		setOverlayIcon(overlay: NativeImage, description: string): void;
		/**
		 * Sets whether the window should have a shadow. On Windows and Linux does nothing.
		 * Note: This API is available only on OS X.
		 */
		setHasShadow(hasShadow: boolean): void;
		/**
		 * Note: This API is available only on OS X.
		 * @returns whether the window has a shadow. On Windows and Linux always returns true.
		 */
		hasShadow(): boolean;
		/**
		 * Add a thumbnail toolbar with a specified set of buttons to the thumbnail image
		 * of a window in a taskbar button layout.
		 * @returns Whether the thumbnail has been added successfully.
		 */
		setThumbarButtons(buttons: ThumbarButton[]): boolean;
		/**
		 * Shows pop-up dictionary that searches the selected word on the page.
		 * Note: This API is available only on OS X.
		 */
		showDefinitionForSelection(): void;
		/**
		 * Sets whether the window menu bar should hide itself automatically. Once set
		 * the menu bar will only show when users press the single Alt key.
		 * If the menu bar is already visible, calling setAutoHideMenuBar(true) won't
		 * hide it immediately.
		 */
		setAutoHideMenuBar(hide: boolean): void;
		/**
		 * @returns Whether menu bar automatically hides itself.
		 */
		isMenuBarAutoHide(): boolean;
		/**
		 * Sets whether the menu bar should be visible. If the menu bar is auto-hide,
		 * users can still bring up the menu bar by pressing the single Alt key.
		 */
		setMenuBarVisibility(visibile: boolean): void;
		/**
		 * @returns Whether the menu bar is visible.
		 */
		isMenuBarVisible(): boolean;
		/**
		 * Sets whether the window should be visible on all workspaces.
		 * Note: This API does nothing on Windows.
		 */
		setVisibleOnAllWorkspaces(visible: boolean): void;
		/**
		 * Note: This API always returns false on Windows.
		 * @returns Whether the window is visible on all workspaces.
		 */
		isVisibleOnAllWorkspaces(): boolean;
		/**
		 * Ignore all moused events that happened in the window.
		 * Note: This API is available only on OS X.
		 */
		setIgnoreMouseEvents(ignore: boolean): void;
	}

	type ThumbarButtonFlags = 'enabled' | 'disabled' | 'dismissonclick' | 'nobackground' | 'hidden' | 'noninteractive';

	interface ThumbarButton {
		icon: NativeImage | string;
		click: Function;
		tooltip?: string;
		flags?: ThumbarButtonFlags[];
	}

	interface WebPreferences {
		/**
		 * Whether node integration is enabled.
		 * Default: true.
		 */
		nodeIntegration?: boolean;
		/**
		 * Specifies a script that will be loaded before other scripts run in the page.
		 * This script will always have access to node APIs no matter whether node integration is turned on or off.
		 * The value should be the absolute file path to the script.
		 * When node integration is turned off, the preload script can reintroduce
		 * Node global symbols back to the global scope.
		 */
		preload?: string;
		/**
		 * Sets the session used by the page. Instead of passing the Session object directly,
		 * you can also choose to use the partition option instead, which accepts a partition string.
		 * When both session and partition are provided, session would be preferred.
		 * Default: the default session.
		 */
		session?: Session;
		/**
		 * Sets the session used by the page according to the session’s partition string.
		 * If partition starts with persist:, the page will use a persistent session available
		 * to all pages in the app with the same partition. if there is no persist: prefix,
		 * the page will use an in-memory session. By assigning the same partition,
		 * multiple pages can share the same session.
		 * Default: the default session.
		 */
		partition?: string;
		/**
		 * The default zoom factor of the page, 3.0 represents 300%.
		 * Default: 1.0.
		 */
		zoomFactor?: number;
		/**
		 * Enables JavaScript support.
		 * Default: true.
		 */
		javascript?: boolean;
		/**
		 * When setting false, it will disable the same-origin policy (Usually using testing
		 * websites by people), and set allowDisplayingInsecureContent and allowRunningInsecureContent
		 * to true if these two options are not set by user.
		 * Default: true.
		 */
		webSecurity?: boolean;
		/**
		 * Allow an https page to display content like images from http URLs.
		 * Default: false.
		 */
		allowDisplayingInsecureContent?: boolean;
		/**
		 * Allow a https page to run JavaScript, CSS or plugins from http URLs.
		 * Default: false.
		 */
		allowRunningInsecureContent?: boolean;
		/**
		 * Enables image support.
		 * Default: true.
		 */
		images?: boolean;
		/**
		 * Make TextArea elements resizable.
		 * Default: true.
		 */
		textAreasAreResizable?: boolean;
		/**
		 * Enables WebGL support.
		 * Default: true.
		 */
		webgl?: boolean;
		/**
		 * Enables WebAudio support.
		 * Default: true.
		 */
		webaudio?: boolean;
		/**
		 * Whether plugins should be enabled.
		 * Default: false.
		 */
		plugins?: boolean;
		/**
		 * Enables Chromium’s experimental features.
		 * Default: false.
		 */
		experimentalFeatures?: boolean;
		/**
		 * Enables Chromium’s experimental canvas features.
		 * Default: false.
		 */
		experimentalCanvasFeatures?: boolean;
		/**
		 * Enables DirectWrite font rendering system on Windows.
		 * Default: true.
		 */
		directWrite?: boolean;
		/**
		 * A list of feature strings separated by ",".
		 */
		blinkFeatures?: string;
		/**
		 * Sets the default font for the font-family.
		 */
		defaultFontFamily?: {
			/**
			 * Default: Times New Roman.
			 */
			standard?: string;
			/**
			 * Default: Times New Roman.
			 */
			serif?: string;
			/**
			 * Default: Arial.
			 */
			sansSerif?: string;
			/**
			 * Default: Courier New.
			 */
			monospace?: string;
		};
		/**
		 * Default: 16.
		 */
		defaultFontSize?: number;
		/**
		 * Default: 13.
		 */
		defaultMonospaceFontSize?: number;
		/**
		 * Default: 0.
		 */
		minimumFontSize?: number;
		/**
		 * Default: ISO-8859-1.
		 */
		defaultEncoding?: string;
	}

	interface BrowserWindowOptions extends Rectangle {
		/**
		 * Window’s width in pixels.
		 * Default: 800.
		 */
		width?: number;
		/**
		 * Window’s height in pixels.
		 * Default: 600.
		 */
		height?: number;
		/**
		 * Window’s left offset from screen.
		 * Default: center the window.
		 */
		x?: number;
		/**
		 * Window’s top offset from screen.
		 * Default: center the window.
		 */
		y?: number;
		/**
		 * The width and height would be used as web page’s size, which means
		 * the actual window’s size will include window frame’s size and be slightly larger.
		 * Default: false.
		 */
		useContentSize?: boolean;
		/**
		 * Show window in the center of the screen.
		 * Default: true
		 */
		center?: boolean;
		/**
		 * Window’s minimum width.
		 * Default: 0.
		 */
		minWidth?: number;
		/**
		 * Window’s minimum height.
		 * Default: 0.
		 */
		minHeight?: number;
		/**
		 * Window’s maximum width.
		 * Default: no limit.
		 */
		maxWidth?: number;
		/**
		 * Window’s maximum height.
		 * Default: no limit.
		 */
		maxHeight?: number;
		/**
		 * Whether window is resizable.
		 * Default: true.
		 */
		resizable?: boolean;
		/**
		 * Whether window is movable.
		 * Note: This is not implemented on Linux.
		 * Default: true.
		 */
		movable?: boolean;
		/**
		 * Whether window is minimizable.
		 * Note: This is not implemented on Linux.
		 * Default: true.
		 */
		minimizable?: boolean;
		/**
		 * Whether window is maximizable.
		 * Note: This is not implemented on Linux.
		 * Default: true.
		 */
		maximizable?: boolean;
		/**
		 * Whether window is closable.
		 * Note: This is not implemented on Linux.
		 * Default: true.
		 */
		closable?: boolean;
		/**
		 * Whether the window should always stay on top of other windows.
		 * Default: false.
		 */
		alwaysOnTop?: boolean;
		/**
		 * Whether the window should show in fullscreen.
		 * When explicity set to false the fullscreen button will be hidden or disabled on OS X.
		 * Default: false.
		 */
		fullscreen?: boolean;
		/**
		 * Whether the maximize/zoom button on OS X should toggle full screen mode or maximize window.
		 * Default: true.
		 */
		fullscreenable?: boolean;
		/**
		 * Whether to show the window in taskbar.
		 * Default: false.
		 */
		skipTaskbar?: boolean;
		/**
		 * The kiosk mode.
		 * Default: false.
		 */
		kiosk?: boolean;
		/**
		 * Default window title.
		 * Default: "Electron".
		 */
		title?: string;
		/**
		 * The window icon, when omitted on Windows the executable’s icon would be used as window icon.
		 */
		icon?: NativeImage|string;
		/**
		 * Whether window should be shown when created.
		 * Default: true.
		 */
		show?: boolean;
		/**
		 * Specify false to create a Frameless Window.
		 * Default: true.
		 */
		frame?: boolean;
		/**
		 * Whether the web view accepts a single mouse-down event that simultaneously activates the window.
		 * Default: false.
		 */
		acceptFirstMouse?: boolean;
		/**
		 * Whether to hide cursor when typing.
		 * Default: false.
		 */
		disableAutoHideCursor?: boolean;
		/**
		 * Auto hide the menu bar unless the Alt key is pressed.
		 * Default: true.
		 */
		autoHideMenuBar?: boolean;
		/**
		 * Enable the window to be resized larger than screen.
		 * Default: false.
		 */
		enableLargerThanScreen?: boolean;
		/**
		 * Window’s background color as Hexadecimal value, like #66CD00 or #FFF or #80FFFFFF (alpha is supported).
		 * Default: #000 (black) for Linux and Windows, #FFF for Mac (or clear if transparent).
		 */
		backgroundColor?: string;
		/**
		 * Whether window should have a shadow.
		 * Note: This is only implemented on OS X.
		 * Default: true.
		 */
		hasShadow?: boolean;
		/**
		 * Forces using dark theme for the window.
		 * Note: Only works on some GTK+3 desktop environments.
		 * Default: false.
		 */
		darkTheme?: boolean;
		/**
		 * Makes the window transparent.
		 * Default: false.
		 */
		transparent?: boolean;
		/**
		 * The type of window, default is normal window.
		 */
		type?: BrowserWindowType;
		/**
		 * The style of window title bar.
		 */
		titleBarStyle?: 'default' | 'hidden' | 'hidden-inset';
		/**
		 * Settings of web page’s features.
		 */
		webPreferences?: WebPreferences;
	}

	type BrowserWindowType = BrowserWindowTypeLinux | BrowserWindowTypeMac;
	type BrowserWindowTypeLinux = 'desktop' | 'dock' | 'toolbar' | 'splash' | 'notification';
	type BrowserWindowTypeMac = 'desktop' | 'textured';

	interface Rectangle {
		x?: number;
		y?: number;
		width?: number;
		height?: number;
	}

	// https://github.com/atom/electron/blob/master/docs/api/clipboard.md

	/**
	 * The clipboard module provides methods to perform copy and paste operations.
	 */
	interface Clipboard {
		/**
		 * @returns The contents of the clipboard as plain text.
		 */
		readText(type?: ClipboardType): string;
		/**
		 * Writes the text into the clipboard as plain text.
		 */
		writeText(text: string, type?: ClipboardType): void;
		/**
		 * @returns The contents of the clipboard as markup.
		 */
		readHtml(type?: ClipboardType): string;
		/**
		 * Writes markup to the clipboard.
		 */
		writeHtml(markup: string, type?: ClipboardType): void;
		/**
		 * @returns The contents of the clipboard as a NativeImage.
		 */
		readImage(type?: ClipboardType): NativeImage;
		/**
		 * Writes the image into the clipboard.
		 */
		writeImage(image: NativeImage, type?: ClipboardType): void;
		/**
		 * @returns The contents of the clipboard as RTF.
		 */
		readRtf(type?: ClipboardType): string;
		/**
		 * Writes the text into the clipboard in RTF.
		 */
		writeRtf(text: string, type?: ClipboardType): void;
		/**
		 * Clears everything in clipboard.
		 */
		clear(type?: ClipboardType): void;
		/**
		 * @returns Array available formats for the clipboard type.
		 */
		availableFormats(type?: ClipboardType): string[];
		/**
		 * Returns whether the clipboard supports the format of specified data.
		 * Note: This API is experimental and could be removed in future.
		 * @returns Whether the clipboard has data in the specified format.
		 */
		has(format: string, type?: ClipboardType): boolean;
		/**
		 * Reads the data in the clipboard of the specified format.
		 * Note: This API is experimental and could be removed in future.
		 */
		read(format: string, type?: ClipboardType): any;
		/**
		 * Writes data to the clipboard.
		 */
		write(data: {
			text?: string;
			rtf?: string;
			html?: string;
			image?: NativeImage;
		}, type?: ClipboardType): void;
	}

	type ClipboardType = '' | 'selection';

	// https://github.com/atom/electron/blob/master/docs/api/content-tracing.md

	/**
	 * The content-tracing module is used to collect tracing data generated by the underlying Chromium content module.
	 * This module does not include a web interface so you need to open chrome://tracing/
	 * in a Chrome browser and load the generated file to view the result.
	 */
	interface ContentTracing {
		/**
		 * Get a set of category groups. The category groups can change as new code paths are reached.
		 * @param callback Called once all child processes have acked to the getCategories request.
		 */
		getCategories(callback: (categoryGroups: any[]) => void): void;
		/**
		 * Start recording on all processes. Recording begins immediately locally, and asynchronously
		 * on child processes as soon as they receive the EnableRecording request.
		 * @param categoryFilter A filter to control what category groups should be traced.
		 * A filter can have an optional "-" prefix to exclude category groups that contain
		 * a matching category. Having both included and excluded category patterns in the
		 * same list would not be supported.
		 * @param options controls what kind of tracing is enabled, it could be a OR-ed
		 * combination of tracing.DEFAULT_OPTIONS, tracing.ENABLE_SYSTRACE, tracing.ENABLE_SAMPLING
		 * and tracing.RECORD_CONTINUOUSLY.
		 * @param callback Called once all child processes have acked to the startRecording request.
		 */
		startRecording(categoryFilter: string, options: number, callback: Function): void;
		/**
		 * Stop recording on all processes. Child processes typically are caching trace data and
		 * only rarely flush and send trace data back to the main process. That is because it may
		 * be an expensive operation to send the trace data over IPC, and we would like to avoid
		 * much runtime overhead of tracing. So, to end tracing, we must asynchronously ask all
		 * child processes to flush any pending trace data.
		 * @param resultFilePath Trace data will be written into this file if it is not empty,
		 * or into a temporary file.
		 * @param callback Called once all child processes have acked to the stopRecording request.
		 */
		stopRecording(resultFilePath: string, callback:
			/**
			 * @param filePath A file that contains the traced data.
			 */
			(filePath: string) => void
			): void;
		/**
		 * Start monitoring on all processes. Monitoring begins immediately locally, and asynchronously
		 * on child processes as soon as they receive the startMonitoring request.
		 * @param callback Called once all child processes have acked to the startMonitoring request.
		 */
		startMonitoring(categoryFilter: string, options: number, callback: Function): void;
		/**
		 * Stop monitoring on all processes.
		 * @param callback Called once all child processes have acked to the stopMonitoring request.
		 */
		stopMonitoring(callback: Function): void;
		/**
		 * Get the current monitoring traced data. Child processes typically are caching trace data
		 * and only rarely flush and send trace data back to the main process. That is because it may
		 * be an expensive operation to send the trace data over IPC, and we would like to avoid much
		 * runtime overhead of tracing. So, to end tracing, we must asynchronously ask all child
		 * processes to flush any pending trace data.
		 * @param callback Called once all child processes have acked to the captureMonitoringSnapshot request.
		 */
		captureMonitoringSnapshot(resultFilePath: string, callback:
			/**
			 * @param filePath A file that contains the traced data
			 * @returns {}
			 */
			(filePath: string) => void
			): void;
		/**
		 * Get the maximum across processes of trace buffer percent full state.
		 * @param callback Called when the TraceBufferUsage value is determined.
		 */
		getTraceBufferUsage(callback: Function): void;
		/**
		 * @param callback Called every time the given event occurs on any process.
		 */
		setWatchEvent(categoryName: string, eventName: string, callback: Function): void;
		/**
		 * Cancel the watch event. If tracing is enabled, this may race with the watch event callback.
		 */
		cancelWatchEvent(): void;
		DEFAULT_OPTIONS: number;
		ENABLE_SYSTRACE: number;
		ENABLE_SAMPLING: number;
		RECORD_CONTINUOUSLY: number;
	}

	// https://github.com/atom/electron/blob/master/docs/api/crash-reporter.md

	/**
	 * The crash-reporter module enables sending your app's crash reports.
	 */
	interface CrashReporter {
		/**
		 * You are required to call this method before using other crashReporter APIs.
		 */
		start(options: CrashReporterStartOptions): void;
		/**
		 * @returns The date and ID of the last crash report. When there was no crash report
		 * sent or the crash reporter is not started, null will be returned.
		 */
		getLastCrashReport(): CrashReporterPayload;
		/**
		 * @returns All uploaded crash reports. Each report contains the date and uploaded ID.
		 */
		getUploadedReports(): CrashReporterPayload[];
	}

	interface CrashReporterStartOptions {
		/**
		* Default: Electron
		*/
		productName?: string;
		companyName: string;
		/**
		* URL that crash reports would be sent to as POST.
		*/
		submitURL: string;
		/**
		* Send the crash report without user interaction.
		* Default: true.
		*/
		autoSubmit?: boolean;
		/**
		* Default: false.
		*/
		ignoreSystemCrashHandler?: boolean;
		/**
		* An object you can define which content will be send along with the report.
		* Only string properties are send correctly.
		* Nested objects are not supported.
		*/
		extra?: {[prop: string]: string};
	}

	interface CrashReporterPayload extends Object {
		/**
		* E.g., "electron-crash-service".
		*/
		rept: string;
		/**
		* The version of Electron.
		*/
		ver: string;
		/**
		* E.g., "win32".
		*/
		platform: string;
		/**
		* E.g., "renderer".
		*/
		process_type: string;
		ptime: number;
		/**
		* The version in package.json.
		*/
		_version: string;
		/**
		* The product name in the crashReporter options object.
		*/
		_productName: string;
		/**
		* Name of the underlying product. In this case, Electron.
		*/
		prod: string;
		/**
		* The company name in the crashReporter options object.
		*/
		_companyName: string;
		/**
		* The crashreporter as a file.
		*/
		upload_file_minidump: File;
	}

	// https://github.com/atom/electron/blob/master/docs/api/desktop-capturer.md

	/**
	 * The desktopCapturer module can be used to get available sources
	 * that can be used to be captured with getUserMedia.
	 */
	interface DesktopCapturer {
		/**
		 * Starts a request to get all desktop sources.
		 *
		 * Note: There is no guarantee that the size of source.thumbnail is always
		 * the same as the thumnbailSize in options. It also depends on the scale of the screen or window.
		 */
		getSources(options: any, callback: (error: Error, sources: DesktopCapturerSource[]) => any): void;
	}

	interface DesktopCapturerOptions {
		/**
		 * The types of desktop sources to be captured.
		 */
		types?: ('screen' | 'window')[];
		/**
		 * The suggested size that thumbnail should be scaled.
		 * Default: {width: 150, height: 150}
		 */
		thumbnailSize?: Dimension;
	}

	interface DesktopCapturerSource {
		/**
		 * The id of the captured window or screen used in navigator.webkitGetUserMedia.
		 * The format looks like window:XX or screen:XX where XX is a random generated number.
		 */
		id: string;
		/**
		 * The described name of the capturing screen or window.
		 * If the source is a screen, the name will be Entire Screen or Screen <index>;
		 * if it is a window, the name will be the window’s title.
		 */
		name: string;
		/**
		 * A thumbnail image.
		 */
		thumbnail: NativeImage;
	}

	// https://github.com/atom/electron/blob/master/docs/api/dialog.md

	/**
	 * The dialog module provides APIs to show native system dialogs, such as opening files or alerting,
	 * so web applications can deliver the same user experience as native applications.
	 */
	interface Dialog {
		/**
		 * Note: On Windows and Linux an open dialog can not be both a file selector and a directory selector,
		 * so if you set properties to ['openFile', 'openDirectory'] on these platforms, a directory selector will be shown.
		 *
		 * @param callback If supplied, the API call will be asynchronous.
		 * @returns On success, returns an array of file paths chosen by the user,
		 * otherwise returns undefined.
		 */
		showOpenDialog(browserWindow: BrowserWindow, options: OpenDialogOptions, callback?: (fileNames: string[]) => void): string[];
		/**
		 * Note: On Windows and Linux an open dialog can not be both a file selector and a directory selector,
		 * so if you set properties to ['openFile', 'openDirectory'] on these platforms, a directory selector will be shown.
		 *
		 * @param callback If supplied, the API call will be asynchronous.
		 * @returns On success, returns an array of file paths chosen by the user,
		 * otherwise returns undefined.
		 */
		showOpenDialog(options: OpenDialogOptions, callback?: (fileNames: string[]) => void): string[];
		/**
		 * @param callback If supplied, the API call will be asynchronous.
		 * @returns On success, returns the path of file chosen by the user, otherwise
		 * returns undefined.
		 */
		showSaveDialog(browserWindow: BrowserWindow, options: SaveDialogOptions, callback?: (fileName: string) => void): string;
		/**
		 * @param callback If supplied, the API call will be asynchronous.
		 * @returns On success, returns the path of file chosen by the user, otherwise
		 * returns undefined.
		 */
		showSaveDialog(options: SaveDialogOptions, callback?: (fileName: string) => void): string;
		/**
		 * Shows a message box. It will block until the message box is closed.
		 * @param callback If supplied, the API call will be asynchronous.
		 * @returns The index of the clicked button.
		 */
		showMessageBox(browserWindow: BrowserWindow, options: ShowMessageBoxOptions, callback?: (response: any) => void): number;
		/**
		 * Shows a message box. It will block until the message box is closed.
		 * @param callback If supplied, the API call will be asynchronous.
		 * @returns The index of the clicked button.
		 */
		showMessageBox(options: ShowMessageBoxOptions, callback?: (response: any) => void): number;
		/**
		 * Displays a modal dialog that shows an error message.
		 *
		 * This API can be called safely before the ready event the app module emits,
		 * it is usually used to report errors in early stage of startup.
		 * If called before the app readyevent on Linux, the message will be emitted to stderr,
		 * and no GUI dialog will appear.
		 */
		showErrorBox(title: string, content: string): void;
	}

	interface OpenDialogOptions {
		title?: string;
		defaultPath?: string;
		/**
		 * File types that can be displayed or selected.
		 */
		filters?: {
			name: string;
			/**
			 * Extensions without wildcards or dots (e.g. 'png' is good but '.png' and '*.png' are bad).
			 * To show all files, use the '*' wildcard (no other wildcard is supported).
			 */
			extensions: string[];
		}[];
		/**
		 * Contains which features the dialog should use.
		 */
		properties?: ('openFile' | 'openDirectory' | 'multiSelections' | 'createDirectory')[];
	}

	interface SaveDialogOptions {
		title?: string;
		defaultPath?: string;
		/**
		 * File types that can be displayed, see dialog.showOpenDialog for an example.
		 */
		filters?: {
			name: string;
			extensions: string[];
		}[];
	}

	interface ShowMessageBoxOptions {
		/**
		 * On Windows, "question" displays the same icon as "info", unless you set an icon using the "icon" option.
		 */
		type?: 'none' | 'info' | 'error' | 'question' | 'warning';
		/**
		 * Texts for buttons.
		 */
		buttons?: string[];
		/**
		 * Index of the button in the buttons array which will be selected by default when the message box opens.
		 */
		defaultId?: number;
		/**
		 * Title of the message box (some platforms will not show it).
		 */
		title?: string;
		/**
		 * Contents of the message box.
		 */
		message?: string;
		/**
		 * Extra information of the message.
		 */
		detail?: string;
		icon?: NativeImage;
		/**
		 * The value will be returned when user cancels the dialog instead of clicking the buttons of the dialog.
		 * By default it is the index of the buttons that have "cancel" or "no" as label,
		 * or 0 if there is no such buttons. On OS X and Windows the index of "Cancel" button
		 * will always be used as cancelId, not matter whether it is already specified.
		 */
		cancelId?: number;
		/**
		 * On Windows Electron will try to figure out which one of the buttons are common buttons
		 * (like "Cancel" or "Yes"), and show the others as command links in the dialog.
		 * This can make the dialog appear in the style of modern Windows apps.
		 * If you don’t like this behavior, you can set noLink to true.
		 */
		noLink?: boolean;
	}

	// https://github.com/atom/electron/blob/master/docs/api/download-item.md

	/**
	 * DownloadItem represents a download item in Electron.
	 */
	interface DownloadItem extends NodeJS.EventEmitter {
		/**
		 * Emits when the downloadItem gets updated.
		 */
		on(event: 'updated', listener: Function): this;
		/**
		 * Emits when the download is in a terminal state. This includes a completed download,
		 * a cancelled download (via downloadItem.cancel()), and interrupted download that can’t be resumed.
		 */
		on(event: 'done', listener: (event: Event, state: 'completed' | 'cancelled' | 'interrupted') => void): this;
		on(event: string, listener: Function): this;
		/**
		 * Set the save file path of the download item.
		 * Note: The API is only available in session’s will-download callback function.
		 * If user doesn’t set the save path via the API, Electron will use the original
		 * routine to determine the save path (Usually prompts a save dialog).
		 */
		setSavePath(path: string): void;
		/**
		 * Pauses the download.
		 */
		pause(): void;
		/**
		 * Resumes the download that has been paused.
		 */
		resume(): void;
		/**
		 * Cancels the download operation.
		 */
		cancel(): void;
		/**
		 * @returns The origin url where the item is downloaded from.
		 */
		getURL(): string;
		/**
		 * @returns The mime type.
		 */
		getMimeType(): string;
		/**
		 * @returns Whether the download has user gesture.
		 */
		hasUserGesture(): boolean;
		/**
		 * @returns The file name of the download item.
		 * Note: The file name is not always the same as the actual one saved in local disk.
		 * If user changes the file name in a prompted download saving dialog,
		 * the actual name of saved file will be different.
		 */
		getFilename(): string;
		/**
		 * @returns The total size in bytes of the download item. If the size is unknown, it returns 0.
		 */
		getTotalBytes(): number;
		/**
		 * @returns The received bytes of the download item.
		 */
		getReceivedBytes(): number;
		/**
		 * @returns The Content-Disposition field from the response header.
		 */
		getContentDisposition(): string;
	}

	// https://github.com/atom/electron/blob/master/docs/api/global-shortcut.md

	/**
	 * The globalShortcut module can register/unregister a global keyboard shortcut
	 * with the operating system so that you can customize the operations for various shortcuts.
	 * Note: The shortcut is global; it will work even if the app does not have the keyboard focus.
	 * You should not use this module until the ready event of the app module is emitted.
	 */
	interface GlobalShortcut {
		/**
		 * Registers a global shortcut of accelerator.
		 * @param accelerator Represents a keyboard shortcut. It can contain modifiers
		 * and key codes, combined by the "+" character.
		 * @param callback Called when the registered shortcut is pressed by the user.
		 */
		register(accelerator: string, callback: Function): void;
		/**
		 * @param accelerator Represents a keyboard shortcut. It can contain modifiers
		 * and key codes, combined by the "+" character.
		 * @returns Whether the accelerator is registered.
		 */
		isRegistered(accelerator: string): boolean;
		/**
		 * Unregisters the global shortcut of keycode.
		 * @param accelerator Represents a keyboard shortcut. It can contain modifiers
		 * and key codes, combined by the "+" character.
		 */
		unregister(accelerator: string): void;
		/**
		 * Unregisters all the global shortcuts.
		 */
		unregisterAll(): void;
	}

	// https://github.com/atom/electron/blob/master/docs/api/ipc-main.md

	/**
	 * The ipcMain module handles asynchronous and synchronous messages
	 * sent from a renderer process (web page).
	 * Messages sent from a renderer will be emitted to this module.
	 */
	interface IpcMain extends NodeJS.EventEmitter {
		addListener(channel: string, listener: IpcMainEventListener): this;
		on(channel: string, listener: IpcMainEventListener): this;
		once(channel: string, listener: IpcMainEventListener): this;
		removeListener(channel: string, listener: IpcMainEventListener): this;
		removeAllListeners(channel?: string): this;
	}

	type IpcMainEventListener = (event: IpcMainEvent, ...args: any[]) => void;

	interface IpcMainEvent {
		/**
		 * Set this to the value to be returned in a synchronous message.
		 */
		returnValue?: any;
		/**
		 * Returns the webContents that sent the message, you can call sender.send
		 * to reply to the asynchronous message.
		 */
		sender: WebContents;
	}

	// https://github.com/atom/electron/blob/master/docs/api/ipc-renderer.md

	/**
	 * The ipcRenderer module provides a few methods so you can send synchronous
	 * and asynchronous messages from the render process (web page) to the main process.
	 * You can also receive replies from the main process.
	 */
	interface IpcRenderer extends NodeJS.EventEmitter {
		addListener(channel: string, listener: IpcRendererEventListener): this;
		on(channel: string, listener: IpcRendererEventListener): this;
		once(channel: string, listener: IpcRendererEventListener): this;
		removeListener(channel: string, listener: IpcRendererEventListener): this;
		removeAllListeners(channel?: string): this;
		/**
		 * Send ...args to the renderer via channel in asynchronous message, the main
		 * process can handle it by listening to the channel event of ipc module.
		 */
		send(channel: string, ...args: any[]): void;
		/**
		 * Send ...args to the renderer via channel in synchronous message, and returns
		 * the result sent from main process. The main process can handle it by listening
		 * to the channel event of ipc module, and returns by setting event.returnValue.
		 * Note: Usually developers should never use this API, since sending synchronous
		 * message would block the whole renderer process.
		 * @returns The result sent from the main process.
		 */
		sendSync(channel: string, ...args: any[]): any;
		/**
		 * Like ipc.send but the message will be sent to the host page instead of the main process.
		 * This is mainly used by the page in <webview> to communicate with host page.
		 */
		sendToHost(channel: string, ...args: any[]): void;
	}

	type IpcRendererEventListener = (event: IpcRendererEvent, ...args: any[]) => void;

	interface IpcRendererEvent {
		/**
		 * You can call sender.send to reply to the asynchronous message.
		 */
		sender: IpcRenderer;
	}

	// https://github.com/atom/electron/blob/master/docs/api/menu-item.md

	/**
	 * The MenuItem allows you to add items to an application or context menu.
	 */
	class MenuItem {
		/**
		 * Create a new menu item.
		 */
		constructor(options: MenuItemOptions);

		click: (menuItem: MenuItem, browserWindow: BrowserWindow) => void;
		/**
		 * Read-only property.
		 */
		type: MenuItemType;
		/**
		 * Read-only property.
		 */
		role: MenuItemRole | MenuItemRoleMac;
		/**
		 * Read-only property.
		 */
		accelerator: string;
		/**
		 * Read-only property.
		 */
		icon: NativeImage | string;
		/**
		 * Read-only property.
		 */
		submenu: Menu | MenuItemOptions[];

		label: string;
		sublabel: string;
		enabled: boolean;
		visible: boolean;
		checked: boolean;
	}

	type MenuItemType = 'normal' | 'separator' | 'submenu' | 'checkbox' | 'radio';
	type MenuItemRole = 'undo' | 'redo' | 'cut' | 'copy' | 'paste' | 'selectall' | 'minimize' | 'close';
	type MenuItemRoleMac = 'about' | 'hide' | 'hideothers' | 'unhide' | 'front' | 'window' | 'help' | 'services';

	interface MenuItemOptions {
		/**
		 * Callback when the menu item is clicked.
		 */
		click?: (menuItem: MenuItem, browserWindow: BrowserWindow) => void;
		/**
		 * Can be normal, separator, submenu, checkbox or radio.
		 */
		type?: MenuItemType;
		label?: string;
		sublabel?: string;
		/**
		 * An accelerator is string that represents a keyboard shortcut, it can contain
		 * multiple modifiers and key codes, combined by the + character.
		 *
		 * Examples:
		 *   Command+A
		 *   Ctrl+Shift+Z
		 *
		 * Platform notice:
		 *   On Linux and Windows, the Command key would not have any effect,
		 *   you can use CommandOrControl which represents Command on OS X and Control on
		 *   Linux and Windows to define some accelerators.
		 *
		 *   The Super key is mapped to the Windows key on Windows and Linux and Cmd on OS X.
		 *
		 * Available modifiers:
		 *   Command (or Cmd for short)
		 *   Control (or Ctrl for short)
		 *   CommandOrControl (or CmdOrCtrl for short)
		 *   Alt
		 *   Option
		 *   AltGr
		 *   Shift
		 *   Super
		 *
		 * Available key codes:
		 *   0 to 9
		 *   A to Z
		 *   F1 to F24
		 *   Punctuations like ~, !, @, #, $, etc.
		 *   Plus
		 *   Space
		 *   Backspace
		 *   Delete
		 *   Insert
		 *   Return (or Enter as alias)
		 *   Up, Down, Left and Right
		 *   Home and End
		 *   PageUp and PageDown
		 *   Escape (or Esc for short)
		 *   VolumeUp, VolumeDown and VolumeMute
		 *   MediaNextTrack, MediaPreviousTrack, MediaStop and MediaPlayPause
		 *   PrintScreen
		 */
		accelerator?: string;
		/**
		 * In Electron for the APIs that take images, you can pass either file paths
		 * or NativeImage instances. When passing null, an empty image will be used.
		 */
		icon?: NativeImage|string;
		enabled?: boolean;
		visible?: boolean;
		checked?: boolean;
		/**
		 * Should be specified for submenu type menu item, when it's specified the
		 * type: 'submenu' can be omitted for the menu item
		 */
		submenu?: Menu|MenuItemOptions[];
		/**
		 * Unique within a single menu. If defined then it can be used as a reference
		 * to this item by the position attribute.
		 */
		id?: string;
		/**
		 * This field allows fine-grained definition of the specific location within
		 * a given menu.
		 */
		position?: string;
		/**
		 * Define the action of the menu item, when specified the click property will be ignored
		 */
		role?: MenuItemRole | MenuItemRoleMac;
	}

	// https://github.com/atom/electron/blob/master/docs/api/menu.md

	/**
	 * The Menu class is used to create native menus that can be used as application
	 * menus and context menus. This module is a main process module which can be used
	 * in a render process via the remote module.
	 *
	 * Each menu consists of multiple menu items, and each menu item can have a submenu.
	 */
	class Menu extends EventEmitter {
		/**
		 * Creates a new menu.
		 */
		constructor();
		/**
		 * Sets menu as the application menu on OS X. On Windows and Linux, the menu
		 * will be set as each window's top menu.
		 */
		static setApplicationMenu(menu: Menu): void;
		/**
		 * Sends the action to the first responder of application.
		 * This is used for emulating default Cocoa menu behaviors,
		 * usually you would just use the role property of MenuItem.
		 *
		 * Note: This method is OS X only.
		 */
		static sendActionToFirstResponder(action: string): void;
		/**
		 * @param template Generally, just an array of options for constructing MenuItem.
		 * You can also attach other fields to element of the template, and they will
		 * become properties of the constructed menu items.
		 */
		static buildFromTemplate(template: MenuItemOptions[]): Menu;
		/**
		 * Popups this menu as a context menu in the browserWindow. You can optionally
		 * provide a (x,y) coordinate to place the menu at, otherwise it will be placed
		 * at the current mouse cursor position.
		 * @param x Horizontal coordinate where the menu will be placed.
		 * @param y Vertical coordinate where the menu will be placed.
		 */
		popup(browserWindow?: BrowserWindow, x?: number, y?: number): void;
		/**
		 * Appends the menuItem to the menu.
		 */
		append(menuItem: MenuItem): void;
		/**
		 * Inserts the menuItem to the pos position of the menu.
		 */
		insert(position: number, menuItem: MenuItem): void;
		/**
		 * @returns an array containing the menu’s items.
		 */
		items: MenuItem[];
	}

	// https://github.com/atom/electron/blob/master/docs/api/native-image.md

	/**
	 * This class is used to represent an image.
	 */
	class NativeImage {
		/**
		 * Creates an empty NativeImage instance.
		 */
		static createEmpty(): NativeImage;
		/**
		 * Creates a new NativeImage instance from file located at path.
		 */
		static createFromPath(path: string): NativeImage;
		/**
		 * Creates a new NativeImage instance from buffer.
		 * @param scaleFactor 1.0 by default.
		 */
		static createFromBuffer(buffer: Buffer, scaleFactor?: number): NativeImage;
		/**
		 * Creates a new NativeImage instance from dataURL
		 */
		static createFromDataURL(dataURL: string): NativeImage;
		/**
		 * @returns Buffer Contains the image's PNG encoded data.
		 */
		toPng(): Buffer;
		/**
		 * @returns Buffer Contains the image's JPEG encoded data.
		 */
		toJpeg(quality: number): Buffer;
		/**
		 * @returns string The data URL of the image.
		 */
		toDataURL(): string;
		/**
		 * @returns boolean Whether the image is empty.
		 */
		isEmpty(): boolean;
		/**
		 * @returns {} The size of the image.
		 */
		getSize(): any;
		/**
		 * Marks the image as template image.
		 */
		setTemplateImage(option: boolean): void;
		/**
		 * Returns a boolean whether the image is a template image.
		 */
		isTemplateImage(): boolean;
	}

	// https://github.com/atom/electron/blob/master/docs/api/power-monitor.md

	/**
	 * The power-monitor module is used to monitor power state changes.
	 * You should not use this module until the ready event of the app module is emitted.
	 */
	interface PowerMonitor extends NodeJS.EventEmitter {
		/**
		 * Emitted when the system is suspending.
		 */
		on(event: 'suspend', listener: Function): this;
		/**
		 * Emitted when system is resuming.
		 */
		on(event: 'resume', listener: Function): this;
		/**
		 * Emitted when the system changes to AC power.
		 */
		on(event: 'on-ac', listener: Function): this;
		/**
		 * Emitted when system changes to battery power.
		 */
		on(event: 'on-battery', listener: Function): this;
		on(event: string, listener: Function): this;
	}

	// https://github.com/atom/electron/blob/master/docs/api/power-save-blocker.md

	/**
	 * The powerSaveBlocker module is used to block the system from entering
	 * low-power (sleep) mode and thus allowing the app to keep the system and screen active.
	 */
	interface PowerSaveBlocker {
		/**
		 * Starts preventing the system from entering lower-power mode.
		 * @returns an integer identifying the power save blocker.
		 * Note: prevent-display-sleep has higher has precedence over prevent-app-suspension.
		 */
		start(type: 'prevent-app-suspension' | 'prevent-display-sleep'): number;
		/**
		 * @param id The power save blocker id returned by powerSaveBlocker.start.
		 * Stops the specified power save blocker.
		 */
		stop(id: number): void;
		/**
		 * @param id The power save blocker id returned by powerSaveBlocker.start.
		 * @returns a boolean whether the corresponding powerSaveBlocker has started.
		 */
		isStarted(id: number): boolean;
	}

	// https://github.com/atom/electron/blob/master/docs/api/protocol.md

	/**
	 * The protocol module can register a custom protocol or intercept an existing protocol.
	 */
	interface Protocol {
		/**
		 * Registers custom schemes as standard schemes.
		 */
		registerStandardSchemes(schemes: string[]): void;
		/**
		 * Registers custom schemes to handle service workers.
		 */
		registerServiceWorkerSchemes(schemes: string[]): void;
		/**
		 * Registers a protocol of scheme that will send the file as a response.
		 */
		registerFileProtocol(scheme: string, handler: (request: ProtocolRequest, callback: FileProtocolCallback) => void, completion?: (error: Error) => void): void;
		/**
		 * Registers a protocol of scheme that will send a Buffer as a response.
		 */
		registerBufferProtocol(scheme: string, handler: (request: ProtocolRequest, callback: BufferProtocolCallback) => void, completion?: (error: Error) => void): void;
		/**
		 * Registers a protocol of scheme that will send a String as a response.
		 */
		registerStringProtocol(scheme: string, handler: (request: ProtocolRequest, callback: StringProtocolCallback) => void, completion?: (error: Error) => void): void;
		/**
		 * Registers a protocol of scheme that will send an HTTP request as a response.
		 */
		registerHttpProtocol(scheme: string, handler: (request: ProtocolRequest, callback: HttpProtocolCallback) => void, completion?: (error: Error) => void): void;
		/**
		 * Unregisters the custom protocol of scheme.
		 */
		unregisterProtocol(scheme: string, completion?: (error: Error) => void): void;
		/**
		 * The callback will be called with a boolean that indicates whether there is already a handler for scheme.
		 */
		isProtocolHandled(scheme: string, callback: (handled: boolean) => void): void;
		/**
		 * Intercepts scheme protocol and uses handler as the protocol’s new handler which sends a file as a response.
		 */
		interceptFileProtocol(scheme: string, handler: (request: ProtocolRequest, callback: FileProtocolCallback) => void, completion?: (error: Error) => void): void;
		/**
		 * Intercepts scheme protocol and uses handler as the protocol’s new handler which sends a String as a response.
		 */
		interceptStringProtocol(scheme: string, handler: (request: ProtocolRequest, callback: BufferProtocolCallback) => void, completion?: (error: Error) => void): void;
		/**
		 * Intercepts scheme protocol and uses handler as the protocol’s new handler which sends a Buffer as a response.
		 */
		interceptBufferProtocol(scheme: string, handler: (request: ProtocolRequest, callback: StringProtocolCallback) => void, completion?: (error: Error) => void): void;
		/**
		 * Intercepts scheme protocol and uses handler as the protocol’s new handler which sends a new HTTP request as a response.
		 */
		interceptHttpProtocol(scheme: string, handler: (request: ProtocolRequest, callback: HttpProtocolCallback) => void, completion?: (error: Error) => void): void;
		/**
		 * Remove the interceptor installed for scheme and restore its original handler.
		 */
		uninterceptProtocol(scheme: string, completion?: (error: Error) => void): void;
	}

	interface ProtocolRequest {
		url: string;
		referrer: string;
		method: string;
		uploadData?: {
			bytes: Buffer,
			file: string
		}[];
	}

	interface ProtocolCallback {
		(error: number): void;
		(obj: {
			error: number
		}): void;
		(): void;
	}

	interface FileProtocolCallback extends ProtocolCallback {
		(filePath: string): void;
		(obj: {
			path: string
		}): void;
	}

	interface BufferProtocolCallback extends ProtocolCallback {
		(buffer: Buffer): void;
		(obj: {
			data: Buffer,
			mimeType: string,
			charset?: string
		}): void;
	}

	interface StringProtocolCallback extends ProtocolCallback {
		(str: string): void;
		(obj: {
			data: Buffer,
			mimeType: string,
			charset?: string
		}): void;
	}

	interface HttpProtocolCallback extends ProtocolCallback {
		(redirectRequest: {
			url: string;
			method: string;
			session?: Object;
			uploadData?: {
				contentType: string;
				data: string;
			};
		}): void;
	}

	// https://github.com/atom/electron/blob/master/docs/api/remote.md

	/**
	 * The remote module provides a simple way to do inter-process communication (IPC)
	 * between the renderer process (web page) and the main process.
	 */
	interface Remote extends CommonElectron {
		/**
		 * @returns The object returned by require(module) in the main process.
		 */
		require(module: string): any;
		/**
		 * @returns The BrowserWindow object which this web page belongs to.
		 */
		getCurrentWindow(): BrowserWindow;
		/**
		 * @returns The WebContents object of this web page.
		 */
		getCurrentWebContents(): WebContents;
		/**
		 * @returns The global variable of name (e.g. global[name]) in the main process.
		 */
		getGlobal(name: string): any;
		/**
		 * Returns the process object in the main process. This is the same as
		 * remote.getGlobal('process'), but gets cached.
		 */
		process: NodeJS.Process;
	}

	// https://github.com/atom/electron/blob/master/docs/api/screen.md

	/**
	 * The Display object represents a physical display connected to the system.
	 * A fake Display may exist on a headless system, or a Display may correspond to a remote, virtual display.
	 */
	interface Display {
		/**
		 * Unique identifier associated with the display.
		 */
		id: number;
		bounds: Bounds;
		workArea: Bounds;
		size: Dimension;
		workAreaSize: Dimension;
		/**
		 * Output device’s pixel scale factor.
		 */
		scaleFactor: number;
		/**
		 * Can be 0, 1, 2, 3, each represents screen rotation in clock-wise degrees of 0, 90, 180, 270.
		 */
		rotation: number;
		touchSupport: 'available' | 'unavailable' | 'unknown';
	}

	type Bounds = {
		x: number;
		y: number;
		width: number;
		height: number;
	}

	type Dimension = {
		width: number;
		height: number;
	}

	type Point = {
		x: number;
		y: number;
	}

	type DisplayMetrics = 'bounds' | 'workArea' | 'scaleFactor' | 'rotation';

	/**
	 * The screen module retrieves information about screen size, displays, cursor position, etc.
	 * You should not use this module until the ready event of the app module is emitted.
	 */
	interface Screen extends NodeJS.EventEmitter {
		/**
		 * Emitted when newDisplay has been added.
		 */
		on(event: 'display-added', listener: (event: Event, newDisplay: Display) => void): this;
		/**
		 * Emitted when oldDisplay has been removed.
		 */
		on(event: 'display-removed', listener: (event: Event, oldDisplay: Display) => void): this;
		/**
		 * Emitted when one or more metrics change in a display.
		 */
		on(event: 'display-metrics-changed', listener: (event: Event, display: Display, changedMetrics: DisplayMetrics[]) => void): this;
		on(event: string, listener: Function): this;
		/**
		 * @returns The current absolute position of the mouse pointer.
		 */
		getCursorScreenPoint(): Point;
		/**
		 * @returns The primary display.
		 */
		getPrimaryDisplay(): Display;
		/**
		 * @returns An array of displays that are currently available.
		 */
		getAllDisplays(): Display[];
		/**
		 * @returns The display nearest the specified point.
		 */
		getDisplayNearestPoint(point: Point): Display;
		/**
		 * @returns The display that most closely intersects the provided bounds.
		 */
		getDisplayMatching(rect: Bounds): Display;
	}

	// https://github.com/atom/electron/blob/master/docs/api/session.md

	/**
	 * The session module can be used to create new Session objects.
	 * You can also access the session of existing pages by using
	 * the session property of webContents which is a property of BrowserWindow.
	 */
	class Session extends EventEmitter {
		/**
		 * @returns a new Session instance from partition string.
		 */
		static fromPartition(partition: string): Session;
		/**
		 * @returns the default session object of the app.
		 */
		static defaultSession: Session;
		/**
		 * Emitted when Electron is about to download item in webContents.
		 * Calling event.preventDefault() will cancel the download
		 * and item will not be available from next tick of the process.
		 */
		on(event: 'will-download', listener: (event: Event, item: DownloadItem, webContents: WebContents) => void): this;
		on(event: string, listener: Function): this;
		/**
		 * The cookies gives you ability to query and modify cookies.
		 */
		cookies: SessionCookies;
		/**
		 * @returns the session’s current cache size.
		 */
		getCacheSize(callback: (size: number) => void): void;
		/**
		 * Clears the session’s HTTP cache.
		 */
		clearCache(callback: Function): void;
		/**
		 * Clears the data of web storages.
		 */
		clearStorageData(callback: Function): void;
		/**
		 * Clears the data of web storages.
		 */
		clearStorageData(options: ClearStorageDataOptions, callback: Function): void;
		/**
		 * Writes any unwritten DOMStorage data to disk.
		 */
		flushStorageData(): void;
		/**
		 * Sets the proxy settings.
		 */
		setProxy(config: string, callback: Function): void;
		/**
		 * Resolves the proxy information for url.
		 */
		resolveProxy(url: URL, callback: (proxy: any) => any): void;
		/**
		 * Sets download saving directory.
		 * By default, the download directory will be the Downloads under the respective app folder.
		 */
		setDownloadPath(path: string): void;
		/**
		 * Emulates network with the given configuration for the session.
		 */
		enableNetworkEmulation(options: NetworkEmulationOptions): void;
		/**
		 * Disables any network emulation already active for the session.
		 * Resets to the original network configuration.
		 */
		disableNetworkEmulation(): void;
		/**
		 * Sets the certificate verify proc for session.
		 */
		setCertificateVerifyProc(proc: CertificateVerifyProc): void;
		/**
		 * Clears the host resolver cache.
		 */
		clearHostResolverCache(callback: Function): void;
		/**
		 * The webRequest API set allows to intercept and modify contents of a request at various stages of its lifetime.
		 */
		webRequest: any;
	}

	interface ClearStorageDataOptions {
		/**
		 * Should follow window.location.origin’s representation scheme://host:port.
		 */
		origin?: string;
		/**
		 *  The types of storages to clear.
		 */
		storages?: ('appcache' | 'cookies' | 'filesystem' | 'indexdb' | 'localstorage' | 'shadercache' | 'websql' | 'serviceworkers')[];
		/**
		 * The types of quotas to clear.
		 */
		quotas?: ('temporary' | 'persistent' | 'syncable')[];
	}

	interface NetworkEmulationOptions {
		/**
		 * Whether to emulate network outage.
		 */
		offline?: boolean;
		/**
		 * RTT in ms.
		 */
		latency?: number;
		/**
		 * Download rate in Bps.
		 */
		downloadThroughput?: number;
		/**
		 * Upload rate in Bps.
		 */
		uploadThroughput?: number;
	}

	interface CertificateVerifyProc {
		(hostname: string, cert: any, callback: (accepted: boolean) => any): any;
	}

	interface CookieFilter {
		/**
		 * Retrieves cookies which are associated with url. Empty implies retrieving cookies of all urls.
		 */
		url?: string;
		/**
		 * Filters cookies by name.
		 */
		name?: string;
		/**
		 * Retrieves cookies whose domains match or are subdomains of domains.
		 */
		domain?: string;
		/**
		 * Retrieves cookies whose path matches path.
		 */
		path?: string;
		/**
		 * Filters cookies by their Secure property.
		 */
		secure?: boolean;
		/**
		 * Filters out session or persistent cookies.
		 */
		session?: boolean;
	}

	interface Cookie {
		/**
		 * The name of the cookie.
		 */
		name: string;
		/**
		 * The value of the cookie.
		 */
		value: string;
		/**
		 * The domain of the cookie.
		 */
		domain: string;
		/**
		 * Whether the cookie is a host-only cookie.
		 */
		hostOnly: string;
		/**
		 * The path of the cookie.
		 */
		path: string;
		/**
		 * Whether the cookie is marked as secure.
		 */
		secure: boolean;
		/**
		 * Whether the cookie is marked as HTTP only.
		 */
		httpOnly: boolean;
		/**
		 * Whether the cookie is a session cookie or a persistent cookie with an expiration date.
		 */
		session: boolean;
		/**
		 * The expiration date of the cookie as the number of seconds since the UNIX epoch.
		 * Not provided for session cookies.
		 */
		expirationDate?: number;
	}

	interface CookieDetails {
		/**
		 * The URL associated with the cookie.
		 */
		url: string;
		/**
		 * The name of the cookie.
		 * Default: empty.
		 */
		name?: string;
		/**
		 * The value of the cookie.
		 * Default: empty.
		 */
		value?: string;
		/**
		 * The domain of the cookie.
		 * Default: empty.
		 */
		domain?: string;
		/**
		 * The path of the cookie.
		 * Default: empty.
		 */
		path?: string;
		/**
		 * Whether the cookie should be marked as secure.
		 * Default: false.
		 */
		secure?: boolean;
		/**
		 * Whether the cookie should be marked as HTTP only.
		 * Default: false.
		 */
		httpOnly?: boolean;
		/**
		 * The expiration date of the cookie as the number of seconds since the UNIX epoch.
		 * If omitted, the cookie becomes a session cookie.
		 */
		expirationDate?: number;
	}

	interface SessionCookies {
		/**
		 * Sends a request to get all cookies matching filter.
		 */
		get(filter: CookieFilter, callback: (error: Error, cookies: Cookie[]) => void): void;
		/**
		 * Sets the cookie with details.
		 */
		set(details: CookieDetails, callback: (error: Error) => void): void;
		/**
		 * Removes the cookies matching url and name.
		 */
		remove(url: string, name: string, callback: Function): void;
	}

	// https://github.com/atom/electron/blob/master/docs/api/shell.md

	/**
	 * The shell module provides functions related to desktop integration.
	 */
	interface Shell {
		/**
		 * Show the given file in a file manager. If possible, select the file.
		 */
		showItemInFolder(fullPath: string): void;
		/**
		 * Open the given file in the desktop's default manner.
		 */
		openItem(fullPath: string): void;
		/**
		 * Open the given external protocol URL in the desktop's default manner
		 * (e.g., mailto: URLs in the default mail user agent).
		 * @returns true if an application was available to open the URL, false otherwise.
		 */
		openExternal(url: string, options?: {
			/**
			 * Bring the opened application to the foreground.
			 * Default: true.
			 */
			activate: boolean;
		}): boolean;
		/**
		 * Move the given file to trash.
		 * @returns boolean status for the operation.
		 */
		moveItemToTrash(fullPath: string): boolean;
		/**
		 * Play the beep sound.
		 */
		beep(): void;
	}

	// https://github.com/atom/electron/blob/master/docs/api/tray.md

	/**
	 * A Tray represents an icon in an operating system's notification area.
	 */
	interface Tray extends NodeJS.EventEmitter {
		/**
		 * Emitted when the tray icon is clicked.
		 * Note: The bounds payload is only implemented on OS X and Windows.
		 */
		on(event: 'click', listener: (modifiers: Modifiers, bounds: Bounds) => void): this;
		/**
		 * Emitted when the tray icon is right clicked.
		 * Note: This is only implemented on OS X and Windows.
		 */
		on(event: 'right-click', listener: (modifiers: Modifiers, bounds: Bounds) => void): this;
		/**
		 * Emitted when the tray icon is double clicked.
		 * Note: This is only implemented on OS X and Windows.
		 */
		on(event: 'double-click', listener: (modifiers: Modifiers, bounds: Bounds) => void): this;
		/**
		 * Emitted when the tray balloon shows.
		 * Note: This is only implemented on Windows.
		 */
		on(event: 'balloon-show', listener: Function): this;
		/**
		 * Emitted when the tray balloon is clicked.
		 * Note: This is only implemented on Windows.
		 */
		on(event: 'balloon-click', listener: Function): this;
		/**
		 * Emitted when the tray balloon is closed because of timeout or user manually closes it.
		 * Note: This is only implemented on Windows.
		 */
		on(event: 'balloon-closed', listener: Function): this;
		/**
		 * Emitted when any dragged items are dropped on the tray icon.
		 * Note: This is only implemented on OS X.
		 */
		on(event: 'drop', listener: Function): this;
		/**
		 * Emitted when dragged files are dropped in the tray icon.
		 * Note: This is only implemented on OS X
		 */
		on(event: 'drop-files', listener: (event: Event, files: string[]) => void): this;
		/**
		 * Emitted when a drag operation enters the tray icon.
		 * Note: This is only implemented on OS X
		 */
		on(event: 'drag-enter', listener: Function): this;
		/**
		 * Emitted when a drag operation exits the tray icon.
		 * Note: This is only implemented on OS X
		 */
		on(event: 'drag-leave', listener: Function): this;
		/**
		 * Emitted when a drag operation ends on the tray or ends at another location.
		 * Note: This is only implemented on OS X
		 */
		on(event: 'drag-end', listener: Function): this;
		on(event: string, listener: Function): this;
		/**
		 * Creates a new tray icon associated with the image.
		 */
		new(image: NativeImage|string): Tray;
		/**
		 * Destroys the tray icon immediately.
		 */
		destroy(): void;
		/**
		 * Sets the image associated with this tray icon.
		 */
		setImage(image: NativeImage|string): void;
		/**
		 * Sets the image associated with this tray icon when pressed.
		 */
		setPressedImage(image: NativeImage): void;
		/**
		 * Sets the hover text for this tray icon.
		 */
		setToolTip(toolTip: string): void;
		/**
		 * Sets the title displayed aside of the tray icon in the status bar.
		 * Note: This is only implemented on OS X.
		 */
		setTitle(title: string): void;
		/**
		 * Sets whether the tray icon is highlighted when it is clicked.
		 * Note: This is only implemented on OS X.
		 */
		setHighlightMode(highlight: boolean): void;
		/**
		 * Displays a tray balloon.
		 * Note: This is only implemented on Windows.
		 */
		displayBalloon(options?: {
			icon?: NativeImage;
			title?: string;
			content?: string;
		}): void;
		/**
		 * Popups the context menu of tray icon. When menu is passed,
		 * the menu will showed instead of the tray's context menu.
		 * The position is only available on Windows, and it is (0, 0) by default.
		 * Note: This is only implemented on OS X and Windows.
		 */
		popUpContextMenu(menu?: Menu, position?: Point): void;
		/**
		 * Sets the context menu for this icon.
		 */
		setContextMenu(menu: Menu): void;
	}

	interface Modifiers {
		altKey: boolean;
		shiftKey: boolean;
		ctrlKey: boolean;
		metaKey: boolean;
	}

	// https://github.com/atom/electron/blob/master/docs/api/web-contents.md

	/**
	 * A WebContents is responsible for rendering and controlling a web page.
	 */
	interface WebContents extends NodeJS.EventEmitter {
		/**
		 * Emitted when the navigation is done, i.e. the spinner of the tab has stopped spinning,
		 * and the onload event was dispatched.
		 */
		on(event: 'did-finish-load', listener: Function): this;
		/**
		 * This event is like did-finish-load but emitted when the load failed or was cancelled,
		 * e.g. window.stop() is invoked.
		 */
		on(event: 'did-fail-load', listener: (event: Event, errorCode: number, errorDescription: string, validatedURL: string) => void): this;
		/**
		 * Emitted when a frame has done navigation.
		 */
		on(event: 'did-frame-finish-load', listener: (event: Event, isMainFrame: boolean) => void): this;
		/**
		 * Corresponds to the points in time when the spinner of the tab started spinning.
		 */
		on(event: 'did-start-loading', listener: Function): this;
		/**
		 * Corresponds to the points in time when the spinner of the tab stopped spinning.
		 */
		on(event: 'did-stop-loading', listener: Function): this;
		/**
		 * Emitted when details regarding a requested resource are available.
		 * status indicates the socket connection to download the resource.
		 */
		on(event: 'did-get-response-details', listener: (event: Event,
			status: boolean,
			newURL: string,
			originalURL: string,
			httpResponseCode: number,
			requestMethod: string,
			referrer: string,
			headers: any
		) => void): this;
		/**
		 * Emitted when a redirect is received while requesting a resource.
		 */
		on(event: 'did-get-redirect-request', listener: (event: Event,
			oldURL: string,
			newURL: string,
			isMainFrame: boolean,
			httpResponseCode: number,
			requestMethod: string,
			referrer: string,
			headers: any
		) => void): this;
		/**
		 * Emitted when the document in the given frame is loaded.
		 */
		on(event: 'dom-ready', listener: (event: Event) => void): this;
		/**
		 * Emitted when page receives favicon URLs.
		 */
		on(event: 'page-favicon-updated', listener: (event: Event, favicons: string[]) => void): this;
		/**
		 * Emitted when the page requests to open a new window for a url.
		 * It could be requested by window.open or an external link like <a target='_blank'>.
		 *
		 * By default a new BrowserWindow will be created for the url.
		 *
		 * Calling event.preventDefault() will prevent creating new windows.
		 */
		on(event: 'new-window', listener: (event: Event,
			url: string,
			frameName: string,
			disposition: NewWindowDisposition,
			options: BrowserWindowOptions
		) => void): this;
		/**
		 * Emitted when a user or the page wants to start navigation.
		 * It can happen when the window.location object is changed or a user clicks a link in the page.
		 *
		 * This event will not emit when the navigation is started programmatically with APIs like
		 * webContents.loadURL and webContents.back.
		 *
		 * It is also not emitted for in-page navigations, such as clicking anchor links
		 * or updating the window.location.hash. Use did-navigate-in-page event for this purpose.
		 *
		 * Calling event.preventDefault() will prevent the navigation.
		 */
		on(event: 'will-navigate', listener: (event: Event, url: string) => void): this;
		/**
		 * Emitted when a navigation is done.
		 *
		 * This event is not emitted for in-page navigations, such as clicking anchor links
		 * or updating the window.location.hash. Use did-navigate-in-page event for this purpose.
		 */
		on(event: 'did-navigate', listener: (event: Event, url: string) => void): this;
		/**
		 * Emitted when an in-page navigation happened.
		 *
		 * When in-page navigation happens, the page URL changes but does not cause
		 * navigation outside of the page. Examples of this occurring are when anchor links
		 * are clicked or when the DOM hashchange event is triggered.
		 */
		on(event: 'did-navigate-in-page', listener: (event: Event, url: string) => void): this;
		/**
		 * Emitted when the renderer process has crashed.
		 */
		on(event: 'crashed', listener: Function): this;
		/**
		 * Emitted when a plugin process has crashed.
		 */
		on(event: 'plugin-crashed', listener: (event: Event, name: string, version: string) => void): this;
		/**
		 * Emitted when webContents is destroyed.
		 */
		on(event: 'destroyed', listener: Function): this;
		/**
		 * Emitted when DevTools is opened.
		 */
		on(event: 'devtools-opened', listener: Function): this;
		/**
		 * Emitted when DevTools is closed.
		 */
		on(event: 'devtools-closed', listener: Function): this;
		/**
		 * Emitted when DevTools is focused / opened.
		 */
		on(event: 'devtools-focused', listener: Function): this;
		/**
		 * Emitted when failed to verify the certificate for url.
		 * The usage is the same with the "certificate-error" event of app.
		 */
		on(event: 'certificate-error', listener: (event: Event,
			url: string,
			error: string,
			certificate: Certificate,
			callback: (trust: boolean) => void
		) => void): this;
		/**
		 * Emitted when a client certificate is requested.
		 * The usage is the same with the "select-client-certificate" event of app.
		 */
		on(event: 'select-client-certificate', listener: (event: Event,
			url: string,
			certificateList: Certificate[],
			callback: (certificate: Certificate) => void
		) => void): this;
		/**
		 * Emitted when webContents wants to do basic auth.
		 * The usage is the same with the "login" event of app.
		 */
		on(event: 'login', listener: (event: Event,
			request: LoginRequest,
			authInfo: LoginAuthInfo,
			callback: (username: string, password: string) => void
		) => void): this;
		/**
		 * Emitted when a result is available for webContents.findInPage request.
		 */
		on(event: 'found-in-page', listener: (event: Event, result: FoundInPageResult) => void): this;
		/**
		 * Emitted when media starts playing.
		 */
		on(event: 'media-started-playing', listener: Function): this;
		/**
		 * Emitted when media is paused or done playing.
		 */
		on(event: 'media-paused', listener: Function): this;
		/**
		 * Emitted when a page’s theme color changes. This is usually due to encountering a meta tag:
		 * <meta name='theme-color' content='#ff0000'>
		 */
		on(event: 'did-change-theme-color', listener: Function): this;
		/**
		 * Emitted when the cursor’s type changes.
		 * If the type parameter is custom, the image parameter will hold the custom cursor image
		 * in a NativeImage, and the scale will hold scaling information for the image.
		 */
		on(event: 'cursor-changed', listener: (event: Event, type: CursorType, image?: NativeImage, scale?: number) => void): this;
		on(event: string, listener: Function): this;
		/**
		 * Loads the url in the window.
		 * @param url Must contain the protocol prefix (e.g., the http:// or file://).
		 */
		loadURL(url: string, options?: LoadURLOptions): void;
		/**
		 * Initiates a download of the resource at url without navigating.
		 * The will-download event of session will be triggered.
		 */
		downloadURL(url: string): void;
		/**
		 * @returns The URL of current web page.
		 */
		getURL(): string;
		/**
		 * @returns The title of web page.
		 */
		getTitle(): string;
		/**
		 * @returns The favicon of the web page.
		 */
		getFavicon(): NativeImage;
		/**
		 * @returns Whether web page is still loading resources.
		 */
		isLoading(): boolean;
		/**
		 * @returns Whether web page is waiting for a first-response for the main
		 * resource of the page.
		 */
		isWaitingForResponse(): boolean;
		/**
		 * Stops any pending navigation.
		 */
		stop(): void;
		/**
		 * Reloads current page.
		 */
		reload(): void;
		/**
		 * Reloads current page and ignores cache.
		 */
		reloadIgnoringCache(): void;
		/**
		 * @returns Whether the web page can go back.
		 */
		canGoBack(): boolean;
		/**
		 * @returns Whether the web page can go forward.
		 */
		canGoForward(): boolean;
		/**
		 * @returns Whether the web page can go to offset.
		 */
		canGoToOffset(offset: number): boolean;
		/**
		 * Clears the navigation history.
		 */
		clearHistory(): void;
		/**
		 * Makes the web page go back.
		 */
		goBack(): void;
		/**
		 * Makes the web page go forward.
		 */
		goForward(): void;
		/**
		 * Navigates to the specified absolute index.
		 */
		goToIndex(index: number): void;
		/**
		 * Navigates to the specified offset from the "current entry".
		 */
		goToOffset(offset: number): void;
		/**
		 * @returns Whether the renderer process has crashed.
		 */
		isCrashed(): boolean;
		/**
		 * Overrides the user agent for this page.
		 */
		setUserAgent(userAgent: string): void;
		/**
		 * @returns The user agent for this web page.
		 */
		getUserAgent(): string;
		/**
		 * Injects CSS into this page.
		 */
		insertCSS(css: string): void;
		/**
		 * Evaluates code in page.
		 * @param code Code to evaluate.
		 */
		executeJavaScript(code: string, userGesture?: boolean, callback?: (result: any) => void): void;
		/**
		 * Mute the audio on the current web page.
		 */
		setAudioMuted(muted: boolean): void;
		/**
		 * @returns Whether this page has been muted.
		 */
		isAudioMuted(): boolean;
		/**
		 * Executes Edit -> Undo command in page.
		 */
		undo(): void;
		/**
		 * Executes Edit -> Redo command in page.
		 */
		redo(): void;
		/**
		 * Executes Edit -> Cut command in page.
		 */
		cut(): void;
		/**
		 * Executes Edit -> Copy command in page.
		 */
		copy(): void;
		/**
		 * Executes Edit -> Paste command in page.
		 */
		paste(): void;
		/**
		 * Executes Edit -> Paste and Match Style in page.
		 */
		pasteAndMatchStyle(): void;
		/**
		 * Executes Edit -> Delete command in page.
		 */
		delete(): void;
		/**
		 * Executes Edit -> Select All command in page.
		 */
		selectAll(): void;
		/**
		 * Executes Edit -> Unselect command in page.
		 */
		unselect(): void;
		/**
		 * Executes Edit -> Replace command in page.
		 */
		replace(text: string): void;
		/**
		 * Executes Edit -> Replace Misspelling command in page.
		 */
		replaceMisspelling(text: string): void;
		/**
		 * Inserts text to the focused element.
		 */
		insertText(text: string): void;
		/**
		 * Starts a request to find all matches for the text in the web page.
		 * The result of the request can be obtained by subscribing to found-in-page event.
		 * @returns The request id used for the request.
		 */
		findInPage(text: string, options?: FindInPageOptions): number;
		/**
		 * Stops any findInPage request for the webContents with the provided action.
		 */
		stopFindInPage(action: StopFindInPageAtion): void;
		/**
		 * Checks if any serviceworker is registered.
		 */
		hasServiceWorker(callback: (hasServiceWorker: boolean) => void): void;
		/**
		 * Unregisters any serviceworker if present.
		 */
		unregisterServiceWorker(callback: (isFulfilled: boolean) => void): void;
		/**
		 * Prints window's web page. When silent is set to false, Electron will pick up system's default printer and default settings for printing.
		 * Calling window.print() in web page is equivalent to call WebContents.print({silent: false, printBackground: false}).
		 * Note: On Windows, the print API relies on pdf.dll. If your application doesn't need print feature, you can safely remove pdf.dll in saving binary size.
		 */
		print(options?: PrintOptions): void;
		/**
		 * Prints windows' web page as PDF with Chromium's preview printing custom settings.
		 */
		printToPDF(options: PrintToPDFOptions, callback: (error: Error, data: Buffer) => void): void;
		/**
		 * Adds the specified path to DevTools workspace.
		 */
		addWorkSpace(path: string): void;
		/**
		 * Removes the specified path from DevTools workspace.
		 */
		removeWorkSpace(path: string): void;
		/**
		 * Opens the developer tools.
		 */
		openDevTools(options?: {
			/**
			 * Opens devtools in a new window.
			 */
			detach?: boolean;
		}): void;
		/**
		 * Closes the developer tools.
		 */
		closeDevTools(): void;
		/**
		 * Returns whether the developer tools are opened.
		 */
		isDevToolsOpened(): boolean;
		/**
		 * Returns whether the developer tools are focussed.
		 */
		isDevToolsFocused(): boolean;
		/**
		 * Toggle the developer tools.
		 */
		toggleDevTools(): void;
		/**
		 * Starts inspecting element at position (x, y).
		 */
		inspectElement(x: number, y: number): void;
		/**
		 * Opens the developer tools for the service worker context.
		 */
		inspectServiceWorker(): void;
		/**
		 * Send args.. to the web page via channel in asynchronous message, the web page
		 * can handle it by listening to the channel event of ipc module.
		 * Note:
		 *   1. The IPC message handler in web pages do not have a event parameter,
		 *      which is different from the handlers on the main process.
		 *   2. There is no way to send synchronous messages from the main process
		 *      to a renderer process, because it would be very easy to cause dead locks.
		 */
		send(channel: string, ...args: any[]): void;
		/**
		 * Enable device emulation with the given parameters.
		 */
		enableDeviceEmulation(parameters: DeviceEmulationParameters): void;
		/**
		 * Disable device emulation.
		 */
		disableDeviceEmulation(): void;
		/**
		 * Sends an input event to the page.
		 */
		sendInputEvent(event: SendInputEvent): void;
		/**
		 * Begin subscribing for presentation events and captured frames,
		 * The callback will be called when there is a presentation event.
		 */
		beginFrameSubscription(callback: (
			/**
			 * The frameBuffer is a Buffer that contains raw pixel data.
			 * On most machines, the pixel data is effectively stored in 32bit BGRA format,
			 * but the actual representation depends on the endianness of the processor
			 * (most modern processors are little-endian, on machines with big-endian
			 * processors the data is in 32bit ARGB format).
			 */
			frameBuffer: Buffer
		) => void): void;
		/**
		 * End subscribing for frame presentation events.
		 */
		endFrameSubscription(): void;
		/**
		 * @returns If the process of saving page has been initiated successfully.
		 */
		savePage(fullPath: string, saveType: 'HTMLOnly' | 'HTMLComplete' | 'MHTML', callback?: (eror: Error) => void): boolean;
		/**
		 * @returns The session object used by this webContents.
		 */
		session: Session;
		/**
		 * @returns The WebContents that might own this WebContents.
		 */
		hostWebContents: WebContents;
		/**
		 * @returns The WebContents of DevTools for this WebContents.
		 * Note: Users should never store this object because it may become null
		 * when the DevTools has been closed.
		 */
		devToolsWebContents: WebContents;
		/**
		 * @returns Debugger API
		 */
		debugger: Debugger;
	}

	type NewWindowDisposition = 'default' | 'foreground-tab' | 'background-tab' | 'new-window' | 'other';

	/**
	 * Specifies the action to take place when ending webContents.findInPage request.
	 * 'clearSelection' - Translate the selection into a normal selection.
	 * 'keepSelection' - Clear the selection.
	 * 'activateSelection' - Focus and click the selection node.
	 */
	type StopFindInPageAtion = 'clearSelection' | 'keepSelection' | 'activateSelection';

	type CursorType = 'default' | 'crosshair' | 'pointer' | 'text' | 'wait' | 'help' | 'e-resize' | 'n-resize' | 'ne-resize' | 'nw-resize' | 's-resize' | 'se-resize' | 'sw-resize' | 'w-resize' | 'ns-resize' | 'ew-resize' | 'nesw-resize' | 'nwse-resize' | 'col-resize' | 'row-resize' | 'm-panning' | 'e-panning' | 'n-panning' | 'ne-panning' | 'nw-panning' | 's-panning' | 'se-panning' |'sw-panning' | 'w-panning' | 'move' | 'vertical-text' | 'cell' | 'context-menu' | 'alias' | 'progress' | 'nodrop' | 'copy' | 'none' | 'not-allowed' | 'zoom-in' | 'zoom-out' | 'grab' | 'grabbing' | 'custom';

	interface LoadURLOptions {
		/**
		 * HTTP Referrer URL.
		 */
		httpReferrer?: string;
		/**
		 * User agent originating the request.
		 */
		userAgent?: string;
		/**
		 * Extra headers separated by "\n"
		 */
		extraHeaders?: string;
	}

	interface PrintOptions {
		/**
		 * Don't ask user for print settings.
		 * Defaults: false.
		 */
		silent?: boolean;
		/**
		 * Also prints the background color and image of the web page.
		 * Defaults: false.
		 */
		printBackground?: boolean;
	}

	interface PrintToPDFOptions {
		/**
		 * Specify the type of margins to use.
		 *   0 - default
		 *   1 - none
		 *   2 - minimum
		 * Default: 0
		 */
		marginsType?: number;
		/**
		 * Specify page size of the generated PDF.
		 * Default: A4.
		 */
		pageSize?: 'A3' | 'A4' | 'A5' | 'Legal' | 'Letter' | 'Tabloid';
		/**
		 * Whether to print CSS backgrounds.
		 * Default: false.
		 */
		printBackground?: boolean;
		/**
		 * Whether to print selection only.
		 * Default: false.
		 */
		printSelectionOnly?: boolean;
		/**
		 * true for landscape, false for portrait.
		 * Default: false.
		 */
		landscape?: boolean;
	}

	interface Certificate {
		/**
		 * PEM encoded data
		 */
		data: Buffer;
		issuerName: string;
	}

	interface LoginRequest {
		method: string;
		url: string;
		referrer: string;
	}

	interface LoginAuthInfo {
		isProxy: boolean;
		scheme: string;
		host: string;
		port: number;
		realm: string;
	}

	interface FindInPageOptions {
		/**
		 * Whether to search forward or backward, defaults to true
		 */
		forward?: boolean;
		/**
		 * Whether the operation is first request or a follow up, defaults to false.
		 */
		findNext?: boolean;
		/**
		 * Whether search should be case-sensitive, defaults to false.
		 */
		matchCase?: boolean;
		/**
		 * Whether to look only at the start of words. defaults to false.
		 */
		wordStart?: boolean;
		/**
		 * When combined with wordStart, accepts a match in the middle of a word
		 * if the match begins with an uppercase letter followed by a lowercase
		 * or non-letter. Accepts several other intra-word matches, defaults to false.
		 */
		medialCapitalAsWordStart?: boolean;
	}

	interface FoundInPageResult {
		requestId: number;
		/**
		 * Indicates if more responses are to follow.
		 */
		finalUpdate: boolean;
		/**
		 * Position of the active match.
		 */
		activeMatchOrdinal?: number;
		/**
		 * Number of Matches.
		 */
		matches?: number;
		/**
		 * Coordinates of first match region.
		 */
		selectionArea?: any;
	}

	interface DeviceEmulationParameters {
		/**
		 * Specify the screen type to emulated
		 * Default: desktop
		 */
		screenPosition?: 'desktop' | 'mobile';
		/**
		 * Set the emulated screen size (screenPosition == mobile)
		 */
		screenSize?: Dimension;
		/**
		 * Position the view on the screen (screenPosition == mobile)
		 * Default: {x: 0, y: 0}
		 */
		viewPosition?: Point;
		/**
		 * Set the device scale factor (if zero defaults to original device scale factor)
		 * Default: 0
		 */
		deviceScaleFactor: number;
		/**
		 * Set the emulated view size (empty means no override).
		 */
		viewSize?: Dimension;
		/**
		 * Whether emulated view should be scaled down if necessary to fit into available space
		 * Default: false
		 */
		fitToView?: boolean;
		/**
		 * Offset of the emulated view inside available space (not in fit to view mode)
		 * Default: {x: 0, y: 0}
		 */
		offset?: Point;
		/**
		 * Scale of emulated view inside available space (not in fit to view mode)
		 * Default: 1
		 */
		scale: number;
	}

	interface SendInputEvent {
		type: 'mouseDown' | 'mouseUp' | 'mouseEnter' | 'mouseLeave' | 'contextMenu' | 'mouseWheel' | 'mouseMove' | 'keyDown' | 'keyUp' | 'char';
		modifiers: ('shift' | 'control' | 'alt' | 'meta' | 'isKeypad' | 'isAutoRepeat' | 'leftButtonDown' | 'middleButtonDown' | 'rightButtonDown' | 'capsLock' | 'numLock' | 'left' | 'right')[];
	}

	interface SendInputKeyboardEvent extends SendInputEvent {
		keyCode: string;
	}

	interface SendInputMouseEvent extends SendInputEvent {
		x: number;
		y: number;
		button?: 'left' | 'middle' | 'right';
		globalX?: number;
		globalY?: number;
		movementX?: number;
		movementY?: number;
		clickCount?: number;
	}

	interface SendInputMouseWheelEvent extends SendInputEvent {
		deltaX?: number;
		deltaY?: number;
		wheelTicksX?: number;
		wheelTicksY?: number;
		accelerationRatioX?: number;
		accelerationRatioY?: number;
		hasPreciseScrollingDeltas?: number;
		canScroll?: boolean;
	}

	/**
	 * Debugger API serves as an alternate transport for remote debugging protocol.
	 */
	interface Debugger extends NodeJS.EventEmitter {
		/**
		 * Attaches the debugger to the webContents.
		 * @param protocolVersion Requested debugging protocol version.
		 */
		attach(protocolVersion?: string): void;
		/**
		 * @returns Whether a debugger is attached to the webContents.
		 */
		isAttached(): boolean;
		/**
		 * Detaches the debugger from the webContents.
		 */
		detach(): void;
		/**
		 * Send given command to the debugging target.
		 * @param method Method name, should be one of the methods defined by the remote debugging protocol.
		 * @param commandParams JSON object with request parameters.
		 * @param callback Response defined by the ‘returns’ attribute of the command description in the remote debugging protocol.
		 */
		sendCommand(method: string, commandParams?: any, callback?: (error: Error, result: any) => void): void;
		/**
		 * Emitted when debugging session is terminated. This happens either when
		 * webContents is closed or devtools is invoked for the attached webContents.
		 */
		on(event: 'detach', listener: (event: Event, reason: string) => void): this;
		/**
		 * Emitted whenever debugging target issues instrumentation event.
		 * Event parameters defined by the ‘parameters’ attribute in the remote debugging protocol.
		 */
		on(event: 'message', listener: (event: Event, method: string, params: any) => void): this;
		on(event: string, listener: Function): this;
	}

	// https://github.com/atom/electron/blob/master/docs/api/web-frame.md

	/**
	 * The web-frame module allows you to customize the rendering of the current web page.
	 */
	interface WebFrame {
		/**
		 * Changes the zoom factor to the specified factor, zoom factor is
		 * zoom percent / 100, so 300% = 3.0.
		 */
		setZoomFactor(factor: number): void;
		/**
		 * @returns The current zoom factor.
		 */
		getZoomFactor(): number;
		/**
		 * Changes the zoom level to the specified level, 0 is "original size", and each
		 * increment above or below represents zooming 20% larger or smaller to default
		 * limits of 300% and 50% of original size, respectively.
		 */
		setZoomLevel(level: number): void;
		/**
		 * @returns The current zoom level.
		 */
		getZoomLevel(): number;
		/**
		 * Sets the maximum and minimum zoom level.
		 */
		setZoomLevelLimits(minimumLevel: number, maximumLevel: number): void;
		/**
		 * Sets a provider for spell checking in input fields and text areas.
		 */
		setSpellCheckProvider(language: string, autoCorrectWord: boolean, provider: {
			/**
			 * @returns Whether the word passed is correctly spelled.
			 */
			spellCheck: (text: string) => boolean;
		}): void;
		/**
		 * Sets the scheme as secure scheme. Secure schemes do not trigger mixed content
		 * warnings. For example, https and data are secure schemes because they cannot be
		 * corrupted by active network attackers.
		 */
		registerURLSchemeAsSecure(scheme: string): void;
		/**
		 * Resources will be loaded from this scheme regardless of the current page’s Content Security Policy.
		 */
		registerURLSchemeAsBypassingCSP(scheme: string): void;
		/**
		 * Registers the scheme as secure, bypasses content security policy for resources,
		 * allows registering ServiceWorker and supports fetch API.
		 */
		registerURLSchemeAsPrivileged(scheme: string): void;
		/**
		 * Inserts text to the focused element.
		 */
		insertText(text: string): void;
		/**
		 * Evaluates `code` in page.
		 * In the browser window some HTML APIs like `requestFullScreen` can only be
		 * invoked by a gesture from the user. Setting `userGesture` to `true` will remove
		 * this limitation.
		 */
		executeJavaScript(code: string, userGesture?: boolean, callback?: (result: any) => void): void;
	}

	// https://github.com/atom/electron/blob/master/docs/api/web-view-tag.md

	/**
	 * Use the webview tag to embed 'guest' content (such as web pages) in your Electron app.
	 * The guest content is contained within the webview container.
	 * An embedded page within your app controls how the guest content is laid out and rendered.
	 *
	 * Unlike an iframe, the webview runs in a separate process than your app.
	 * It doesn't have the same permissions as your web page and all interactions between your app
	 * and embedded content will be asynchronous. This keeps your app safe from the embedded content.
	 */
	interface WebViewElement extends HTMLElement {
		/**
		 * Returns the visible URL. Writing to this attribute initiates top-level navigation.
		 * Assigning src its own value will reload the current page.
		 * The src attribute can also accept data URLs, such as data:text/plain,Hello, world!.
		 */
		src: string;
		/**
		 * If "on", the webview container will automatically resize within the bounds specified
		 * by the attributes minwidth, minheight, maxwidth, and maxheight.
		 * These constraints do not impact the webview unless autosize is enabled.
		 * When autosize is enabled, the webview container size cannot be less than
		 * the minimum values or greater than the maximum.
		 */
		autosize: string;
		/**
		 * If "on", the guest page in webview will have node integration and can use node APIs
		 * like require and process to access low level system resources.
		 */
		nodeintegration: string;
		/**
		 * If "on", the guest page in webview will be able to use browser plugins.
		 */
		plugins: string;
		/**
		 * Specifies a script that will be loaded before other scripts run in the guest page.
		 * The protocol of script's URL must be either file: or asar:,
		 * because it will be loaded by require in guest page under the hood.
		 *
		 * When the guest page doesn't have node integration this script will still have access to all Node APIs,
		 * but global objects injected by Node will be deleted after this script has finished executing.
		 */
		preload: string;
		/**
		 * Sets the referrer URL for the guest page.
		 */
		httpreferrer: string;
		/**
		 * Sets the user agent for the guest page before the page is navigated to.
		 * Once the page is loaded, use the setUserAgent method to change the user agent.
		 */
		useragent: string;
		/**
		 * If "on", the guest page will have web security disabled.
		 */
		disablewebsecurity: string;
		/**
		 * Sets the session used by the page. If partition starts with persist:,
		 * the page will use a persistent session available to all pages in the app with the same partition.
		 * If there is no persist: prefix, the page will use an in-memory session.
		 * By assigning the same partition, multiple pages can share the same session.
		 * If the partition is unset then default session of the app will be used.
		 *
		 * This value can only be modified before the first navigation,
		 * since the session of an active renderer process cannot change.
		 * Subsequent attempts to modify the value will fail with a DOM exception.
		 */
		partition: string;
		/**
		 * If "on", the guest page will be allowed to open new windows.
		 */
		allowpopups: string;
		/**
		 * A list of strings which specifies the blink features to be enabled separated by ,.
		 */
		blinkfeatures: string;
		/**
		 * Loads the url in the webview, the url must contain the protocol prefix, e.g. the http:// or file://.
		 */
		loadURL(url: string, options?: LoadURLOptions): void;
		/**
		 * @returns URL of guest page.
		 */
		getURL(): string;
		/**
		 * @returns The title of guest page.
		 */
		getTitle(): string;
		/**
		 * @returns Whether guest page is still loading resources.
		 */
		isLoading(): boolean;
		/**
		 * Returns a boolean whether the guest page is waiting for a first-response for the main resource of the page.
		 */
		isWaitingForResponse(): boolean;
		/**
		 * Stops any pending navigation.
		 */
		stop(): void;
		/**
		 * Reloads the guest page.
		 */
		reload(): void;
		/**
		 * Reloads the guest page and ignores cache.
		 */
		reloadIgnoringCache(): void;
		/**
		 * @returns Whether the guest page can go back.
		 */
		canGoBack(): boolean;
		/**
		 * @returns Whether the guest page can go forward.
		 */
		canGoForward(): boolean;
		/**
		 * @returns Whether the guest page can go to offset.
		 */
		canGoToOffset(offset: number): boolean;
		/**
		 * Clears the navigation history.
		 */
		clearHistory(): void;
		/**
		 * Makes the guest page go back.
		 */
		goBack(): void;
		/**
		 * Makes the guest page go forward.
		 */
		goForward(): void;
		/**
		 * Navigates to the specified absolute index.
		 */
		goToIndex(index: number): void;
		/**
		 * Navigates to the specified offset from the "current entry".
		 */
		goToOffset(offset: boolean): void;
		/**
		 * @returns Whether the renderer process has crashed.
		 */
		isCrashed(): boolean;
		/**
		 * Overrides the user agent for the guest page.
		 */
		setUserAgent(userAgent: string): void;
		/**
		 * @returns The user agent for guest page.
		 */
		getUserAgent(): string;
		/**
		 * Injects CSS into the guest page.
		 */
		insertCSS(css: string): void;
		/**
		 * Evaluates code in page. If userGesture is set, it will create the user gesture context in the page.
		 * HTML APIs like requestFullScreen, which require user action, can take advantage of this option for automation.
		 */
		executeJavaScript(code: string, userGesture?: boolean, callback?: (result: any) => void): void;
		/**
		 * Opens a DevTools window for guest page.
		 */
		openDevTools(): void;
		/**
		 * Closes the DevTools window of guest page.
		 */
		closeDevTools(): void;
		/**
		 * @returns Whether guest page has a DevTools window attached.
		 */
		isDevToolsOpened(): boolean;
		/**
		 * @returns Whether DevTools window of guest page is focused.
		 */
		isDevToolsFocused(): boolean;
		/**
		 * Starts inspecting element at position (x, y) of guest page.
		 */
		inspectElement(x: number, y: number): void;
		/**
		 * Opens the DevTools for the service worker context present in the guest page.
		 */
		inspectServiceWorker(): void;
		/**
		 * Set guest page muted.
		 */
		setAudioMuted(muted: boolean): void;
		/**
		 * @returns Whether guest page has been muted.
		 */
		isAudioMuted(): boolean;
		/**
		 * Executes editing command undo in page.
		 */
		undo(): void;
		/**
		 * Executes editing command redo in page.
		 */
		redo(): void;
		/**
		 * Executes editing command cut in page.
		 */
		cut(): void;
		/**
		 * Executes editing command copy in page.
		 */
		copy(): void;
		/**
		 * Executes editing command paste in page.
		 */
		paste(): void;
		/**
		 * Executes editing command pasteAndMatchStyle in page.
		 */
		pasteAndMatchStyle(): void;
		/**
		 * Executes editing command delete in page.
		 */
		delete(): void;
		/**
		 * Executes editing command selectAll in page.
		 */
		selectAll(): void;
		/**
		 * Executes editing command unselect in page.
		 */
		unselect(): void;
		/**
		 * Executes editing command replace in page.
		 */
		replace(text: string): void;
		/**
		 * Executes editing command replaceMisspelling in page.
		 */
		replaceMisspelling(text: string): void;
		/**
		 * Inserts text to the focused element.
		 */
		insertText(text: string): void;
		/**
		 * Starts a request to find all matches for the text in the web page.
		 * The result of the request can be obtained by subscribing to found-in-page event.
		 * @returns The request id used for the request.
		 */
		findInPage(text: string, options?: FindInPageOptions): number;
		/**
		 * Stops any findInPage request for the webview with the provided action.
		 */
		stopFindInPage(action: StopFindInPageAtion): void;
		/**
		 * Prints webview's web page. Same with webContents.print([options]).
		 */
		print(options?: PrintOptions): void;
		/**
		 * Prints webview's web page as PDF, Same with webContents.printToPDF(options, callback)
		 */
		printToPDF(options: PrintToPDFOptions, callback: (error: Error, data: Buffer) => void): void;
		/**
		 * Send an asynchronous message to renderer process via channel, you can also send arbitrary arguments.
		 * The renderer process can handle the message by listening to the channel event with the ipcRenderer module.
		 * See webContents.send for examples.
		 */
		send(channel: string, ...args: any[]): void;
		/**
		 * Sends an input event to the page.
		 * See webContents.sendInputEvent for detailed description of event object.
		 */
		sendInputEvent(event: SendInputEvent): void
		/**
		 * @returns The WebContents associated with this webview.
		 */
		getWebContents(): WebContents;
		/**
		 * Fired when a load has committed. This includes navigation within the current document
		 * as well as subframe document-level loads, but does not include asynchronous resource loads.
		 */
		addEventListener(type: 'load-commit', listener: (event: WebViewElement.LoadCommitEvent) => void, useCapture?: boolean): void;
		/**
		 * Fired when the navigation is done, i.e. the spinner of the tab will stop spinning, and the onload event is dispatched.
		 */
		addEventListener(type: 'did-finish-load', listener: (event: WebViewElement.Event) => void, useCapture?: boolean): void;
		/**
		 * This event is like did-finish-load, but fired when the load failed or was cancelled, e.g. window.stop() is invoked.
		 */
		addEventListener(type: 'did-fail-load', listener: (event: WebViewElement.DidFailLoadEvent) => void, useCapture?: boolean): void;
		/**
		 * Fired when a frame has done navigation.
		 */
		addEventListener(type: 'did-frame-finish-load', listener: (event: WebViewElement.DidFrameFinishLoadEvent) => void, useCapture?: boolean): void;
		/**
		 * Corresponds to the points in time when the spinner of the tab starts spinning.
		 */
		addEventListener(type: 'did-start-loading', listener: (event: WebViewElement.Event) => void, useCapture?: boolean): void;
		/**
		 * Corresponds to the points in time when the spinner of the tab stops spinning.
		 */
		addEventListener(type: 'did-stop-loading', listener: (event: WebViewElement.Event) => void, useCapture?: boolean): void;
		/**
		 * Fired when details regarding a requested resource is available.
		 * status indicates socket connection to download the resource.
		 */
		addEventListener(type: 'did-get-response-details', listener: (event: WebViewElement.DidGetResponseRetails) => void, useCapture?: boolean): void;
		/**
		 * Fired when a redirect was received while requesting a resource.
		 */
		addEventListener(type: 'did-get-redirect-request', listener: (event: WebViewElement.DidGetRedirectRequestEvent) => void, useCapture?: boolean): void;
		/**
		 * Fired when document in the given frame is loaded.
		 */
		addEventListener(type: 'dom-ready', listener: (event: WebViewElement.Event) => void, useCapture?: boolean): void;
		/**
		 * Fired when page title is set during navigation. explicitSet is false when title is synthesized from file URL.
		 */
		addEventListener(type: 'page-title-updated', listener: (event: WebViewElement.PageTitleUpdatedEvent) => void, useCapture?: boolean): void;
		/**
		 * Fired when page receives favicon URLs.
		 */
		addEventListener(type: 'page-favicon-updated', listener: (event: WebViewElement.PageFaviconUpdatedEvent) => void, useCapture?: boolean): void;
		/**
		 * Fired when page enters fullscreen triggered by HTML API.
		 */
		addEventListener(type: 'enter-html-full-screen', listener: (event: WebViewElement.Event) => void, useCapture?: boolean): void;
		/**
		 * Fired when page leaves fullscreen triggered by HTML API.
		 */
		addEventListener(type: 'leave-html-full-screen', listener: (event: WebViewElement.Event) => void, useCapture?: boolean): void;
		/**
		 * Fired when the guest window logs a console message.
		 */
		addEventListener(type: 'console-message', listener: (event: WebViewElement.ConsoleMessageEvent) => void, useCapture?: boolean): void;
		/**
		 * Fired when a result is available for webview.findInPage request.
		 */
		addEventListener(type: 'found-in-page', listener: (event: WebViewElement.FoundInPageEvent) => void, useCapture?: boolean): void;
		/**
		 * Fired when the guest page attempts to open a new browser window.
		 */
		addEventListener(type: 'new-window', listener: (event: WebViewElement.NewWindowEvent) => void, useCapture?: boolean): void;
		/**
		 * Emitted when a user or the page wants to start navigation.
		 * It can happen when the window.location object is changed or a user clicks a link in the page.
		 *
		 * This event will not emit when the navigation is started programmatically with APIs
		 * like <webview>.loadURL and <webview>.back.
		 *
		 * It is also not emitted during in-page navigation, such as clicking anchor links
		 * or updating the window.location.hash. Use did-navigate-in-page event for this purpose.
		 *
		 * Calling event.preventDefault() does NOT have any effect.
		 */
		addEventListener(type: 'will-navigate', listener: (event: WebViewElement.NavigateEvent) => void, useCapture?: boolean): void;
		/**
		 * Emitted when a navigation is done.
		 *
		 * This event is not emitted for in-page navigations, such as clicking anchor links
		 * or updating the window.location.hash. Use did-navigate-in-page event for this purpose.
		 */
		addEventListener(type: 'did-navigate', listener: (event: WebViewElement.NavigateEvent) => void, useCapture?: boolean): void;
		/**
		 * Emitted when an in-page navigation happened.
		 *
		 * When in-page navigation happens, the page URL changes but does not cause
		 * navigation outside of the page. Examples of this occurring are when anchor links
		 * are clicked or when the DOM hashchange event is triggered.
		 */
		addEventListener(type: 'did-navigate-in-page', listener: (event: WebViewElement.NavigateEvent) => void, useCapture?: boolean): void;
		/**
		 * Fired when the guest page attempts to close itself.
		 */
		addEventListener(type: 'close', listener: (event: WebViewElement.Event) => void, useCapture?: boolean): void;
		/**
		 * Fired when the guest page has sent an asynchronous message to embedder page.
		 */
		addEventListener(type: 'ipc-message', listener: (event: WebViewElement.IpcMessageEvent) => void, useCapture?: boolean): void;
		/**
		 * Fired when the renderer process is crashed.
		 */
		addEventListener(type: 'crashed', listener: (event: WebViewElement.Event) => void, useCapture?: boolean): void;
		/**
		 * Fired when the gpu process is crashed.
		 */
		addEventListener(type: 'gpu-crashed', listener: (event: WebViewElement.Event) => void, useCapture?: boolean): void;
		/**
		 * Fired when a plugin process is crashed.
		 */
		addEventListener(type: 'plugin-crashed', listener: (event: WebViewElement.PluginCrashedEvent) => void, useCapture?: boolean): void;
		/**
		 * Fired when the WebContents is destroyed.
		 */
		addEventListener(type: 'destroyed', listener: (event: WebViewElement.Event) => void, useCapture?: boolean): void;
		/**
		 * Emitted when media starts playing.
		 */
		addEventListener(type: 'media-started-playing', listener: (event: WebViewElement.Event) => void, useCapture?: boolean): void;
		/**
		 * Emitted when media is paused or done playing.
		 */
		addEventListener(type: 'media-paused', listener: (event: WebViewElement.Event) => void, useCapture?: boolean): void;
		/**
		 * Emitted when a page's theme color changes. This is usually due to encountering a meta tag:
		 * <meta name='theme-color' content='#ff0000'>
		 */
		addEventListener(type: 'did-change-theme-color', listener: (event: WebViewElement.Event) => void, useCapture?: boolean): void;
		/**
		 * Emitted when DevTools is opened.
		 */
		addEventListener(type: 'devtools-opened', listener: (event: WebViewElement.Event) => void, useCapture?: boolean): void;
		/**
		 * Emitted when DevTools is closed.
		 */
		addEventListener(type: 'devtools-closed', listener: (event: WebViewElement.Event) => void, useCapture?: boolean): void;
		/**
		 * Emitted when DevTools is focused / opened.
		 */
		addEventListener(type: 'devtools-focused', listener: (event: WebViewElement.Event) => void, useCapture?: boolean): void;
		addEventListener(type: string, listener: (event: WebViewElement.Event) => void, useCapture?: boolean): void;
	}

	namespace WebViewElement {
		type Event = ElectronPrivate.GlobalEvent;

		interface LoadCommitEvent extends Event  {
			url: string;
			isMainFrame: string;
		}

		interface DidFailLoadEvent extends Event  {
			errorCode: number;
			errorDescription: string;
			validatedURL: string;
		}

		interface DidFrameFinishLoadEvent extends Event  {
			isMainFrame: boolean;
		}

		interface DidGetResponseRetails extends Event  {
			status: boolean;
			newURL: string;
			originalURL: string;
			httpResponseCode: number;
			requestMethod: string;
			referrer: string;
			headers: any;
		}

		interface DidGetRedirectRequestEvent extends Event {
			oldURL: string;
			newURL: string;
			isMainFrame: boolean;
			httpResponseCode: number;
			requestMethod: string;
			referrer: string;
			headers: any;
		}

		interface PageTitleUpdatedEvent extends Event {
			title: string;
			explicitSet: string;
		}

		interface PageFaviconUpdatedEvent extends Event {
			favicons: string[];
		}

		interface ConsoleMessageEvent extends Event {
			level: number;
			message: string;
			line: number;
			sourceId: string;
		}

		interface FoundInPageEvent extends Event {
			result: FoundInPageResult;
		}

		interface NewWindowEvent extends Event {
			url: string;
			frameName: string;
			disposition: NewWindowDisposition;
			options: BrowserWindowOptions;
		}

		interface NavigateEvent extends Event {
			url: string;
		}

		interface IpcMessageEvent extends Event {
			channel: string;
			args: any[];
		}

		interface PluginCrashedEvent extends Event {
			name: string;
			version: string;
		}
	}

	/**
	 * The BrowserWindowProxy object is returned from window.open and provides limited functionality with the child window.
	 */
	interface BrowserWindowProxy {
		/**
		 * Removes focus from the child window.
		 */
		blur(): void;
		/**
		 * Forcefully closes the child window without calling its unload event.
		 */
		close(): void;
		/**
		 * Set to true after the child window gets closed.
		 */
		closed: boolean;
		/**
		 * Evaluates the code in the child window.
		 */
		eval(code: string): void;
		/**
		 * Focuses the child window (brings the window to front).
		 */
		focus(): void;
		/**
		 * Sends a message to the child window with the specified origin or * for no origin preference.
		 * In addition to these methods, the child window implements window.opener object with no
		 * properties and a single method.
		 */
		postMessage(message: string, targetOrigin: string): void;
	}

	// https://github.com/atom/electron/blob/master/docs/api/synopsis.md

	interface CommonElectron {
		clipboard: Electron.Clipboard;
		crashReporter: Electron.CrashReporter;
		nativeImage: typeof Electron.NativeImage;
		shell: Electron.Shell;

		app: Electron.App;
		autoUpdater: Electron.AutoUpdater;
		BrowserWindow: typeof Electron.BrowserWindow;
		contentTracing: Electron.ContentTracing;
		dialog: Electron.Dialog;
		ipcMain: Electron.IpcMain;
		globalShortcut: Electron.GlobalShortcut;
		Menu: typeof Electron.Menu;
		MenuItem: typeof Electron.MenuItem;
		powerMonitor: Electron.PowerMonitor;
		powerSaveBlocker: Electron.PowerSaveBlocker;
		protocol: Electron.Protocol;
		screen: Electron.Screen;
		session: typeof Electron.Session;
		Tray: Electron.Tray;
		hideInternalModules(): void;
	}

	interface ElectronMainAndRenderer extends CommonElectron {
		desktopCapturer: Electron.DesktopCapturer;
		ipcRenderer: Electron.IpcRenderer;
		remote: Electron.Remote;
		webFrame: Electron.WebFrame;
	}
}

declare namespace ElectronPrivate {
	type GlobalEvent = Event;
}

interface Document {
	createElement(tagName: 'webview'): Electron.WebViewElement;
}

// https://github.com/atom/electron/blob/master/docs/api/window-open.md

interface Window {
	/**
	 * Creates a new window.
	 */
	open(url: string, frameName?: string, features?: string): Electron.BrowserWindowProxy;
}

// https://github.com/atom/electron/blob/master/docs/api/file-object.md

interface File {
	/**
	 * Exposes the real path of the filesystem.
	 */
	path: string;
}

declare module 'electron' {
	var electron: Electron.ElectronMainAndRenderer;
	export = electron;
}

interface NodeRequireFunction {
	(moduleName: 'electron'): Electron.ElectronMainAndRenderer;
}
