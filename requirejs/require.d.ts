/* 
require-2.1.5.d.ts may be freely distributed under the MIT license.

Copyright (c) 2013 Josh Baldwin https://github.com/jbaldwin/require.d.ts

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation 
files (the "Software"), to deal in the Software without 
restriction, including without limitation the rights to use, 
copy, modify, merge, publish, distribute, sublicense, and/or sell 
copies of the Software, and to permit persons to whom the 
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be 
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES 
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR 
OTHER DEALINGS IN THE SOFTWARE.
*/

interface RequireError extends Error {

	/**
	* Error Type
	**/
	requireType: string;

	/**
	* Required modules.
	**/
	requireModules: string[];

	/**
	* Original error, might be null.
	**/
	originalError: Error;
}

interface RequireShim {

	/**
	* List of dependencies.
	**/
	deps?: string[];

	/**
	* Name the module will be exported as.
	**/
	exports?: string;

	/**
	* Initialize function with all dependcies passed in,
	* if the function returns a value then that value is used
	* as the module export value instead of the object
	* found via the 'exports' string.
	* @param dependencies
	* @return
	**/
	init?: (...dependencies: any[]) => any;
}

interface RequireConfig {

	// The root path to use for all module lookups.
	baseUrl?: string;

	// Path mappings for module names not found directly under 
	// baseUrl.
	paths?: { [key: string]: string; };

	// Dictionary of Shim's.
	// does not cover case of key->string[]
	shim?: { [key: string]: RequireShim; };

	/**
	* For the given module prefix, instead of loading the
	* module with the given ID, substitude a different
	* module ID.
	*
	* @example
	* requirejs.config({
	*	map: {
	*		'some/newmodule': {
	*			'foo': 'foo1.2'
	*		},
	*		'some/oldmodule': {
	*			'foo': 'foo1.0'
	*		}
	*	}
	* });
	**/
	map?: {
		[id: string]: {
			[id: string]: string;
		};
	};

	/**
	* AMD configurations, use module.config() to access in
	* define() functions
	**/
	config?: { [id: string]: {}; };

	/**
	* Configures loading modules from CommonJS packages.
	**/
	packages?: {};

	/**
	* The number of seconds to wait before giving up on loading
	* a script.  The default is 7 seconds.
	**/
	waitSeconds?: number;

	/**
	* A name to give to a loading context.  This allows require.js
	* to load multiple versions of modules in a page, as long as
	* each top-level require call specifies a unique context string.
	**/
	context?: string;

	/**
	* An array of dependencies to load.
	**/
	deps?: string[];

	/**
	* A function to pass to require that should be require after
	* deps have been loaded.
	* @param modules
	**/
	callback?: (...modules: any[]) => void;

	/**
	* If set to true, an error will be thrown if a script loads
	* that does not call define() or have shim exports string
	* value that can be checked.
	**/
	enforceDefine?: boolean;

	/**
	* If set to true, document.createElementNS() will be used
	* to create script elements.
	**/
	xhtml?: boolean;

	/**
	* Extra query string arguments appended to URLs that RequireJS
	* uses to fetch resources.  Most useful to cachce bust when
	* the browser or server is not configured correcty.
	*
	* @example
	* urlArgs: "bust= + (new Date()).getTime()
	**/
	urlArgs?: string;

	/**
	* Specify the value for the type="" attribute used for script
	* tags inserted into the document by RequireJS.  Default is
	* "text/javascript".  To use Firefox's JavasScript 1.8
	* features, use "text/javascript;version=1.8".
	**/
	scriptType?: string;

}

// todo: not sure what to do with this guy
interface RequireModule {

	/**
	*
	**/
	config(): {};

}

interface RequireMap {
	prefix: string;
	name: string;
	parentMap: RequireMap;
	url: string;
	originalName: string;
	fullName: string;
}

interface Require {

	/**
	* Configure require.js
	**/
	config(config: RequireConfig): Require;

	/**
	* Start the main app logic.
	* Callback is optional.
	* Can alternatively use deps and callback.
	* @param modules Required modules to load.
	**/
	(modules: string[]): void;

	/**
	* @see Require()
	* @param ready Called when required modules are ready.
	**/
	(modules: string[], ready: (...modules: any[]) => void ): void;

	/**
	* Generate URLs from require module
	* @param module Module to URL
	* @return URL string
	**/
	toUrl(module: string): string;

	/**
	* On Error override
	* @param err
	**/
	onError(err: RequireError): void;

	/**
	* Undefine a module
	* @param module Module to undefine.
	**/
	undef(module: string): void;

	/**
	* Semi-private function, overload in special instance of undef()
	**/
	onResourceLoad(context: Object, map: RequireMap, depArray: RequireMap[]): void;
}

interface RequireDefine {

	/**
	* Define Simple Name/Value Pairs
	* @param config Dictionary of Named/Value pairs for the config.
	**/
	(config: { [key: string]: any; }): void;

	/**
	* Define function.
	* @param func: The function module.
	**/
	(func: () => any): void;

	/**
	* Define function with dependencies.
	* @param deps List of dependencies module IDs.
	* @param ready Callback function when the dependencies are loaded.
	*	callback param deps module dependencies
	*	callback return module definition
	**/
	(deps: string[], ready: (...deps: any[]) => any): void;

	/**
	*  Define module with simplified CommonJS wrapper.
	* @param ready
	*	callback require requirejs instance
	*	callback exports exports object
	*	callback module module
	*	callback return module definition
	**/
	(ready: (require: Require, exports: { [key: string]: any; }, module: RequireModule) => any): void;

	/**
	* Define a module with a name and dependencies.
	* @param name The name of the module.
	* @param deps List of dependencies module IDs.
	* @param ready Callback function when the dependencies are loaded.
	*	callback deps module dependencies
	*	callback return module definition
	**/
	(name: string, deps: string[], ready: (...deps: any[]) => any): void;
}

// Ambient declarations for 'require' and 'define'
declare var require: Require;
declare var define: RequireDefine;
