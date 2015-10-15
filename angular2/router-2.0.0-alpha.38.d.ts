// Type definitions for Angular v2.0.0-local_sha.f77234e
// Project: http://angular.io/
// Definitions by: angular team <https://github.com/angular/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// ***********************************************************
// This file is generated by the Angular build process.
// Please do not create manual edits or send pull requests
// modifying this file.
// ***********************************************************

// angular2/router depends transitively on these libraries.
// If you don't have them installed you can install them using TSD
// https://github.com/DefinitelyTyped/tsd

///<reference path="./angular2-2.0.0-alpha.38.d.ts"/>




/**
 * @module
 * @description
 * Maps application URLs into application states, to support deep-linking and navigation.
 */
declare module ngRouter {  
  /**
   * The `Router` is responsible for mapping URLs to components.
   * 
   * You can see the state of the router by inspecting the read-only field `router.navigating`.
   * This may be useful for showing a spinner, for instance.
   * 
   * ## Concepts
   * 
   * Routers and component instances have a 1:1 correspondence.
   * 
   * The router holds reference to a number of {@link RouterOutlet}.
   * An outlet is a placeholder that the router dynamically fills in depending on the current URL.
   * 
   * When the router navigates from a URL, it must first recognize it and serialize it into an
   * `Instruction`.
   * The router uses the `RouteRegistry` to get an `Instruction`.
   */
  class Router {
    
    constructor(registry: RouteRegistry, parent: Router, hostComponent: any);
    
    navigating: boolean;
    
    lastNavigationAttempt: string;
    
    registry: RouteRegistry;
    
    parent: Router;
    
    hostComponent: any;
    
    /**
     * Constructs a child router. You probably don't need to use this unless you're writing a reusable
     * component.
     */
    childRouter(hostComponent: any): Router;
    
    /**
     * Constructs a child router. You probably don't need to use this unless you're writing a reusable
     * component.
     */
    auxRouter(hostComponent: any): Router;
    
    /**
     * Register an outlet to notified of primary route changes.
     * 
     * You probably don't need to use this unless you're writing a reusable component.
     */
    registerPrimaryOutlet(outlet: RouterOutlet): Promise<boolean>;
    
    /**
     * Register an outlet to notified of auxiliary route changes.
     * 
     * You probably don't need to use this unless you're writing a reusable component.
     */
    registerAuxOutlet(outlet: RouterOutlet): Promise<boolean>;
    
    /**
     * Given an instruction, returns `true` if the instruction is currently active,
     * otherwise `false`.
     */
    isRouteActive(instruction: Instruction): boolean;
    
    /**
     * Dynamically update the routing configuration and trigger a navigation.
     * 
     * # Usage
     * 
     * ```
     * router.config([
     *   { 'path': '/', 'component': IndexComp },
     *   { 'path': '/user/:id', 'component': UserComp },
     * ]);
     * ```
     */
    config(definitions: RouteDefinition[]): Promise<any>;
    
    /**
     * Navigate based on the provided Route Link DSL. It's preferred to navigate with this method
     * over `navigateByUrl`.
     * 
     * # Usage
     * 
     * This method takes an array representing the Route Link DSL:
     * ```
     * ['./MyCmp', {param: 3}]
     * ```
     * See the {@link RouterLink} directive for more.
     */
    navigate(linkParams: any[]): Promise<any>;
    
    /**
     * Navigate to a URL. Returns a promise that resolves when navigation is complete.
     * It's preferred to navigate with `navigate` instead of this method, since URLs are more brittle.
     * 
     * If the given URL begins with a `/`, router will navigate absolutely.
     * If the given URL does not begin with `/`, the router will navigate relative to this component.
     */
    navigateByUrl(url: string, _skipLocationChange?: boolean): Promise<any>;
    
    /**
     * Navigate via the provided instruction. Returns a promise that resolves when navigation is
     * complete.
     */
    navigateByInstruction(instruction: Instruction, _skipLocationChange?: boolean): Promise<any>;
    
    /**
     * Updates this router and all descendant routers according to the given instruction
     */
    commit(instruction: Instruction, _skipLocationChange?: boolean): Promise<any>;
    
    /**
     * Subscribe to URL updates from the router
     */
    subscribe(onNext: (value: any) => void): Object;
    
    /**
     * Removes the contents of this router's outlet and all descendant outlets
     */
    deactivate(instruction: Instruction): Promise<any>;
    
    /**
     * Given a URL, returns an instruction representing the component graph
     */
    recognize(url: string): Promise<Instruction>;
    
    /**
     * Navigates to either the last URL successfully navigated to, or the last URL requested if the
     * router has yet to successfully navigate.
     */
    renavigate(): Promise<any>;
    
    /**
     * Generate a URL from a component name and optional map of parameters. The URL is relative to the
     * app's base href.
     */
    generate(linkParams: any[]): Instruction;
    
  }

    
  /**
   * A router outlet is a placeholder that Angular dynamically fills based on the application's route.
   * 
   * ## Use
   * 
   * ```
   * <router-outlet></router-outlet>
   * ```
   */
  interface RouterOutlet {
    
    name: string;
    
    /**
     * Called by the Router to instantiate a new component during the commit phase of a navigation.
     * This method in turn is responsible for calling the `onActivate` hook of its child.
     */
    activate(nextInstruction: ComponentInstruction): Promise<any>;
    
    /**
     * Called by the {@link Router} during the commit phase of a navigation when an outlet
     * reuses a component between different routes.
     * This method in turn is responsible for calling the `onReuse` hook of its child.
     */
    reuse(nextInstruction: ComponentInstruction): Promise<any>;
    
    /**
     * Called by the {@link Router} when an outlet reuses a component across navigations.
     * This method in turn is responsible for calling the `onReuse` hook of its child.
     */
    deactivate(nextInstruction: ComponentInstruction): Promise<any>;
    
    /**
     * Called by the {@link Router} during recognition phase of a navigation.
     * 
     * If this resolves to `false`, the given navigation is cancelled.
     * 
     * This method delegates to the child component's `canDeactivate` hook if it exists,
     * and otherwise resolves to true.
     */
    canDeactivate(nextInstruction: ComponentInstruction): Promise<boolean>;
    
    /**
     * Called by the {@link Router} during recognition phase of a navigation.
     * 
     * If the new child component has a different ng.Type than the existing child component,
     * this will resolve to `false`. You can't reuse an old component when the new component
     * is of a different ng.Type.
     * 
     * Otherwise, this method delegates to the child component's `canReuse` hook if it exists,
     * or resolves to true if the hook is not present.
     */
    canReuse(nextInstruction: ComponentInstruction): Promise<boolean>;
    
  }

    
  /**
   * The RouterLink directive lets you link to specific parts of your app.
   * 
   * Consider the following route configuration:
   * 
   * ```
   * @RouteConfig([
   *   { path: '/user', component: UserCmp, as: 'user' }
   * ]);
   * class MyComp {}
   * ```
   * 
   * When linking to this `user` route, you can write:
   * 
   * ```
   * <a [router-link]="['./user']">link to user component</a>
   * ```
   * 
   * RouterLink expects the value to be an array of route names, followed by the params
   * for that level of routing. For instance `['/team', {teamId: 1}, 'user', {userId: 2}]`
   * means that we want to generate a link for the `team` route with params `{teamId: 1}`,
   * and with a child route `user` with params `{userId: 2}`.
   * 
   * The first route name should be prepended with `/`, `./`, or `../`.
   * If the route begins with `/`, the router will look up the route from the root of the app.
   * If the route begins with `./`, the router will instead look in the current component's
   * children for the route. And if the route begins with `../`, the router will look at the
   * current component's parent.
   */
  class RouterLink {
    
    constructor(_router: Router, _location: Location);
    
    visibleHref: string;
    
    isRouteActive: boolean;
    
    routeParams: any;
    
    onClick(): boolean;
    
  }

    
  /**
   * `RouteParams` is an immutable map of parameters for the given route
   * based on the url matcher and optional parameters for that route.
   * 
   * You can inject `RouteParams` into the constructor of a component to use it.
   * 
   * ## Example
   * 
   * ```
   * import {bootstrap, Component, View} from 'angular2/angular2';
   * import {Router, ROUTER_DIRECTIVES, routerBindings, RouteConfig} from 'angular2/router';
   * 
   * @Component({...})
   * @View({directives: [ROUTER_DIRECTIVES]})
   * @RouteConfig([
   *  {path: '/user/:id', component: UserCmp, as: 'UserCmp'},
   * ])
   * class AppCmp {}
   * 
   * @Component({...})
   * @View({ template: 'user: {{id}}' })
   * class UserCmp {
   *   string: id;
   *   constructor(params: RouteParams) {
   *     this.id = params.get('id');
   *   }
   * }
   * 
   * bootstrap(AppCmp, routerBindings(AppCmp));
   * ```
   */
  class RouteParams {
    
    constructor(params: StringMap<string, string>);
    
    params: StringMap<string, string>;
    
    get(param: string): string;
    
  }

    
  /**
   * The RouteRegistry holds route configurations for each component in an Angular app.
   * It is responsible for creating Instructions from URLs, and generating URLs based on route and
   * parameters.
   */
  class RouteRegistry {
    
    /**
     * Given a component and a configuration object, add the route to this registry
     */
    config(parentComponent: any, config: RouteDefinition): void;
    
    /**
     * Reads the annotations of a component and configures the registry based on them
     */
    configFromComponent(component: any): void;
    
    /**
     * Given a URL and a parent component, return the most specific instruction for navigating
     * the application into the state specified by the url
     */
    recognize(url: string, parentComponent: any): Promise<Instruction>;
    
    /**
     * Given a normalized list with component names and params like: `['user', {id: 3 }]`
     * generates a url with a leading slash relative to the provided `parentComponent`.
     */
    generate(linkParams: any[], parentComponent: any): Instruction;
    
  }

    
  /**
   * `LocationStrategy` is responsible for representing and reading route state
   * from the the browser's URL. Angular provides two strategies:
   * {@link HashLocationStrategy} (default) and {@link PathLocationStrategy}.
   * 
   * This is used under the hood of the {@link Location} service.
   * 
   * Applications should use the {@link Router} or {@link Location} services to
   * interact with application route state.
   * 
   * For instance, {@link HashLocationStrategy} produces URLs like
   * `http://example.com#/foo`, and {@link PathLocationStrategy} produces
   * `http://example.com/foo` as an equivalent URL.
   * 
   * See these two classes for more.
   */
  class LocationStrategy {
    
    path(): string;
    
    pushState(ctx: any, title: string, url: string): void;
    
    forward(): void;
    
    back(): void;
    
    onPopState(fn: (_: any) => any): void;
    
    getBaseHref(): string;
    
  }

    
  /**
   * `HashLocationStrategy` is a {@link LocationStrategy} used to configure the
   * {@link Location} service to represent its state in the
   * [hash fragment](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax)
   * of the browser's URL.
   * 
   * `HashLocationStrategy` is the default binding for {@link LocationStrategy}
   * provided in {@link routerBindings} and {@link ROUTER_BINDINGS}.
   * 
   * For instance, if you call `location.go('/foo')`, the browser's URL will become
   * `example.com#/foo`.
   * 
   * ## Example
   * 
   * ```
   * import {Component, View} from 'angular2/angular2';
   * import {
   *   ROUTER_DIRECTIVES,
   *   routerBindings,
   *   RouteConfig,
   *   Location
   * } from 'angular2/router';
   * 
   * @Component({...})
   * @View({directives: [ROUTER_DIRECTIVES]})
   * @RouteConfig([
   *  {...},
   * ])
   * class AppCmp {
   *   constructor(location: Location) {
   *     location.go('/foo');
   *   }
   * }
   * 
   * bootstrap(AppCmp, [
   *   routerBindings(AppCmp) // includes binding to HashLocationStrategy
   * ]);
   * ```
   */
  class HashLocationStrategy extends LocationStrategy {
    
    constructor();
    
    onPopState(fn: EventListener): void;
    
    getBaseHref(): string;
    
    path(): string;
    
    pushState(state: any, title: string, url: string): void;
    
    forward(): void;
    
    back(): void;
    
  }

    
  /**
   * `PathLocationStrategy` is a {@link LocationStrategy} used to configure the
   * {@link Location} service to represent its state in the
   * [path](https://en.wikipedia.org/wiki/Uniform_Resource_Locator#Syntax) of the
   * browser's URL.
   * 
   * If you're using `PathLocationStrategy`, you must provide a binding for
   * {@link APP_BASE_HREF} to a string representing the URL prefix that should
   * be preserved when generating and recognizing URLs.
   * 
   * For instance, if you provide an `APP_BASE_HREF` of `'/my/app'` and call
   * `location.go('/foo')`, the browser's URL will become
   * `example.com/my/app/foo`.
   * 
   * ## Example
   * 
   * ```
   * import {Component, View, bind} from 'angular2/angular2';
   * import {
   *   APP_BASE_HREF
   *   ROUTER_DIRECTIVES,
   *   routerBindings,
   *   RouteConfig,
   *   Location,
   *   LocationStrategy,
   *   PathLocationStrategy
   * } from 'angular2/router';
   * 
   * @Component({...})
   * @View({directives: [ROUTER_DIRECTIVES]})
   * @RouteConfig([
   *  {...},
   * ])
   * class AppCmp {
   *   constructor(location: Location) {
   *     location.go('/foo');
   *   }
   * }
   * 
   * bootstrap(AppCmp, [
   *   routerBindings(AppCmp),
   *   bind(LocationStrategy).toClass(PathLocationStrategy),
   *   bind(APP_BASE_HREF).toValue('/my/app')
   * ]);
   * ```
   */
  class PathLocationStrategy extends LocationStrategy {
    
    constructor();
    
    onPopState(fn: EventListener): void;
    
    getBaseHref(): string;
    
    path(): string;
    
    pushState(state: any, title: string, url: string): void;
    
    forward(): void;
    
    back(): void;
    
  }

    
  /**
   * `Location` is a service that applications can use to interact with a browser's URL.
   * Depending on which {@link LocationStrategy} is used, `Location` will either persist
   * to the URL's path or the URL's hash segment.
   * 
   * Note: it's better to use {@link Router#navigate} service to trigger route changes. Use
   * `Location` only if you need to interact with or create normalized URLs outside of
   * routing.
   * 
   * `Location` is responsible for normalizing the URL against the application's base href.
   * A normalized URL is absolute from the URL host, includes the application's base href, and has no
   * trailing slash:
   * - `/my/app/user/123` is normalized
   * - `my/app/user/123` **is not** normalized
   * - `/my/app/user/123/` **is not** normalized
   * 
   * ## Example
   * 
   * ```
   * import {Component, View} from 'angular2/angular2';
   * import {
   *   ROUTER_DIRECTIVES,
   *   routerBindings,
   *   RouteConfig,
   *   Location
   * } from 'angular2/router';
   * 
   * @Component({...})
   * @View({directives: [ROUTER_DIRECTIVES]})
   * @RouteConfig([
   *  {...},
   * ])
   * class AppCmp {
   *   constructor(location: Location) {
   *     location.go('/foo');
   *   }
   * }
   * 
   * bootstrap(AppCmp, [routerBindings(AppCmp)]);
   * ```
   */
  class Location {
    
    constructor(platformStrategy: LocationStrategy, href?: string);
    
    platformStrategy: LocationStrategy;
    
    /**
     * Returns the normalized URL path.
     */
    path(): string;
    
    /**
     * Given a string representing a URL, returns the normalized URL path.
     */
    normalize(url: string): string;
    
    /**
     * Given a string representing a URL, returns the normalized URL path.
     * If the given URL doesn't begin with a leading slash (`'/'`), this method adds one
     * before normalizing.
     */
    normalizeAbsolutely(url: string): string;
    
    /**
     * Changes the browsers URL to the normalized version of the given URL, and pushes a
     * new item onto the platform's history.
     */
    go(url: string): void;
    
    /**
     * Navigates forward in the platform's history.
     */
    forward(): void;
    
    /**
     * Navigates back in the platform's history.
     */
    back(): void;
    
    /**
     * Subscribe to the platform's `popState` events.
     */
    subscribe(onNext: (value: any) => void, onThrow?: (exception: any) => void, onReturn?: () => void): void;
    
  }

    
  /**
   * The `APP_BASE_HREF` token represents the base href to be used with the
   * {@link PathLocationStrategy}.
   * 
   * If you're using {@link PathLocationStrategy}, you must provide a binding to a string
   * representing the URL prefix that should be preserved when generating and recognizing
   * URLs.
   * 
   * ## Example
   * 
   * ```
   * import {Component, View} from 'angular2/angular2';
   * import {ROUTER_DIRECTIVES, routerBindings, RouteConfig} from 'angular2/router';
   * 
   * @Component({...})
   * @View({directives: [ROUTER_DIRECTIVES]})
   * @RouteConfig([
   *  {...},
   * ])
   * class AppCmp {
   *   // ...
   * }
   * 
   * bootstrap(AppCmp, [
   *   routerBindings(AppCmp),
   *   PathLocationStrategy,
   *   bind(APP_BASE_HREF).toValue('/my/app')
   * ]);
   * ```
   */
  let APP_BASE_HREF: OpaqueToken;
  

    
  /**
   * Defines route lifecycle method `onActivate`, which is called by the router at the end of a
   * successful route navigation.
   * 
   * For a single component's navigation, only one of either {@link OnActivate} or {@link OnReuse}
   * will be called depending on the result of {@link CanReuse}.
   * 
   * The `onActivate` hook is called with two {@link ComponentInstruction}s as parameters, the first
   * representing the current route being navigated to, and the second parameter representing the
   * previous route or `null`.
   * 
   * If `onActivate` returns a promise, the route change will wait until the promise settles to
   * instantiate and activate child components.
   * 
   * ## Example
   * ```
   * import {Component, View} from 'angular2/angular2';
   * import {OnActivate, ComponentInstruction} from 'angular2/router';
   * 
   * @Component({
   *   selector: 'my-cmp'
   * })
   * @View({
   *  template: '<div>hello!</div>'
   * })
   * class MyCmp implements OnActivate {
   *   onActivate(next: ComponentInstruction, prev: ComponentInstruction) {
   *     this.log = 'Finished navigating from ' + prev.urlPath + ' to ' + next.urlPath;
   *   }
   * }
   * ```
   */
  interface OnActivate {
    
    onActivate(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction): any;
    
  }

    
  /**
   * Defines route lifecycle method `onDeactivate`, which is called by the router before destroying
   * a component as part of a route change.
   * 
   * The `onDeactivate` hook is called with two {@link ComponentInstruction}s as parameters, the first
   * representing the current route being navigated to, and the second parameter representing the
   * previous route.
   * 
   * If `onDeactivate` returns a promise, the route change will wait until the promise settles.
   * 
   * ## Example
   * ```
   * import {Component, View} from 'angular2/angular2';
   * import {OnDeactivate, ComponentInstruction} from 'angular2/router';
   * 
   * @Component({
   *   selector: 'my-cmp'
   * })
   * @View({
   *  template: '<div>hello!</div>'
   * })
   * class MyCmp implements OnDeactivate {
   *   onDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
   *     return this.doFadeAwayAnimation();
   *   }
   * }
   *  ```
   */
  interface OnDeactivate {
    
    onDeactivate(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction): any;
    
  }

    
  /**
   * Defines route lifecycle method `onReuse`, which is called by the router at the end of a
   * successful route navigation when {@link CanReuse} is implemented and returns or resolves to true.
   * 
   * For a single component's navigation, only one of either {@link OnActivate} or {@link OnReuse}
   * will be called, depending on the result of {@link CanReuse}.
   * 
   * The `onReuse` hook is called with two {@link ComponentInstruction}s as parameters, the first
   * representing the current route being navigated to, and the second parameter representing the
   * previous route or `null`.
   * 
   * ## Example
   * ```
   * import {Component, View} from 'angular2/angular2';
   * import {CanReuse, OnReuse, ComponentInstruction} from 'angular2/router';
   * 
   * @Component({
   *   selector: 'my-cmp'
   * })
   * @View({
   *  template: '<div>hello!</div>'
   * })
   * class MyCmp implements CanReuse, OnReuse {
   *   canReuse(next: ComponentInstruction, prev: ComponentInstruction) {
   *     return true;
   *   }
   * 
   *   onReuse(next: ComponentInstruction, prev: ComponentInstruction) {
   *     this.params = next.params;
   *   }
   * }
   * ```
   */
  interface OnReuse {
    
    onReuse(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction): any;
    
  }

    
  /**
   * Defines route lifecycle method `canDeactivate`, which is called by the router to determine
   * if a component can be removed as part of a navigation.
   * 
   * The `canDeactivate` hook is called with two {@link ComponentInstruction}s as parameters, the
   * first representing the current route being navigated to, and the second parameter
   * representing the previous route.
   * 
   * If `canDeactivate` returns or resolves to `false`, the navigation is cancelled. If it returns or
   * resolves to `true`, then the navigation continues, and the component will be deactivated
   * (the {@link OnDeactivate} hook will be run) and removed.
   * 
   * If `canDeactivate` throws or rejects, the navigation is also cancelled.
   * 
   * ## Example
   * ```
   * import {Component, View} from 'angular2/angular2';
   * import {CanDeactivate, ComponentInstruction} from 'angular2/router';
   * 
   * @Component({
   *   selector: 'my-cmp'
   * })
   * @View({
   *  template: '<div>hello!</div>'
   * })
   * class MyCmp implements CanDeactivate {
   *   canDeactivate(next: ComponentInstruction, prev: ComponentInstruction) {
   *     return askUserIfTheyAreSureTheyWantToQuit();
   *   }
   * }
   *  ```
   */
  interface CanDeactivate {
    
    canDeactivate(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction): any;
    
  }

    
  /**
   * Defines route lifecycle method `canReuse`, which is called by the router to determine whether a
   * component should be reused across routes, or whether to destroy and instantiate a new component.
   * 
   * The `canReuse` hook is called with two {@link ComponentInstruction}s as parameters, the first
   * representing the current route being navigated to, and the second parameter representing the
   * previous route.
   * 
   * If `canReuse` returns or resolves to `true`, the component instance will be reused and the
   * {@link OnDeactivate} hook will be run. If `canReuse` returns or resolves to `false`, a new
   * component will be instantiated, and the existing component will be deactivated and removed as
   * part of the navigation.
   * 
   * If `canReuse` throws or rejects, the navigation will be cancelled.
   * 
   * ## Example
   * ```
   * import {Component, View} from 'angular2/angular2';
   * import {CanReuse, OnReuse, ComponentInstruction} from 'angular2/router';
   * 
   * @Component({
   *   selector: 'my-cmp'
   * })
   * @View({
   *  template: '<div>hello!</div>'
   * })
   * class MyCmp implements CanReuse, OnReuse {
   *   canReuse(next: ComponentInstruction, prev: ComponentInstruction) {
   *     return next.params.id == prev.params.id;
   *   }
   * 
   *   onReuse(next: ComponentInstruction, prev: ComponentInstruction) {
   *     this.id = next.params.id;
   *   }
   * }
   *  ```
   */
  interface CanReuse {
    
    canReuse(nextInstruction: ComponentInstruction, prevInstruction: ComponentInstruction): any;
    
  }

    
  /**
   * Defines route lifecycle hook `CanActivate`, which is called by the router to determine
   * if a component can be instantiated as part of a navigation.
   * 
   * The `CanActivate` hook is called with two {@link ComponentInstruction}s as parameters, the first
   * representing
   * the current route being navigated to, and the second parameter representing the previous route or
   * `null`.
   * 
   * Note that unlike other lifecycle hooks, this one uses an annotation rather than an interface.
   * This is because the `CanActivate` function is called before the component is instantiated.
   * 
   * If `CanActivate` returns or resolves to `false`, the navigation is cancelled.
   * If `CanActivate` throws or rejects, the navigation is also cancelled.
   * If `CanActivate` returns or resolves to `true`, navigation continues, the component is
   * instantiated, and the {@link OnActivate} hook of that component is called if implemented.
   * 
   * ## Example
   * ```
   * import {Component} from 'angular2/angular2';
   * import {CanActivate} from 'angular2/router';
   * 
   * @Component({
   *   selector: 'control-panel-cmp'
   * })
   * @View({
   *  template: '<div>Control Panel: ...</div>'
   * })
   * @CanActivate(() => checkIfUserIsLoggedIn())
   * class ControlPanelCmp {
   *   // ...
   * }
   *  ```
   */
  var CanActivate: (hook: (next: ComponentInstruction, prev: ComponentInstruction) => Promise<boolean>| boolean) =>
          ClassDecorator;
  

    
  /**
   * `Instruction` is a tree of {@link ComponentInstruction}s with all the information needed
   * to transition each component in the app to a given route, including all auxiliary routes.
   * 
   * `Instruction`s can be created using {@link Router#generate}, and can be used to
   * perform route changes with {@link Router#navigateByInstruction}.
   * 
   * ## Example
   * 
   * ```
   * import {bootstrap, Component, View} from 'angular2/angular2';
   * import {Router, ROUTER_DIRECTIVES, routerBindings, RouteConfig} from 'angular2/router';
   * 
   * @Component({...})
   * @View({directives: [ROUTER_DIRECTIVES]})
   * @RouteConfig([
   *  {...},
   * ])
   * class AppCmp {
   *   constructor(router: Router) {
   *     var instruction = router.generate(['/MyRoute']);
   *     router.navigateByInstruction(instruction);
   *   }
   * }
   * 
   * bootstrap(AppCmp, routerBindings(AppCmp));
   * ```
   */
  class Instruction {
    
    constructor(component: ComponentInstruction, child: Instruction, auxInstruction: StringMap<string, Instruction>);
    
    component: ComponentInstruction;
    
    child: Instruction;
    
    auxInstruction: StringMap<string, Instruction>;
    
    /**
     * Returns a new instruction that shares the state of the existing instruction, but with
     * the given child {@link Instruction} replacing the existing child.
     */
    replaceChild(child: Instruction): Instruction;
    
  }

    
  /**
   * A `ComponentInstruction` represents the route state for a single component. An `Instruction` is
   * composed of a tree of these `ComponentInstruction`s.
   * 
   * `ComponentInstructions` is a public API. Instances of `ComponentInstruction` are passed
   * to route lifecycle hooks, like {@link CanActivate}.
   * 
   * `ComponentInstruction`s are [https://en.wikipedia.org/wiki/Hash_consing](hash consed). You should
   * never construct one yourself with "new." Instead, rely on {@link Router/PathRecognizer} to
   * construct `ComponentInstruction`s.
   * 
   * You should not modify this object. It should be treated as immutable.
   */
  interface ComponentInstruction {
    
    reuse: boolean;
    
    urlPath: string;
    
    urlParams: string[];
    
    params: StringMap<string, any>;
    
    /**
     * Returns the component type of the represented route, or `null` if this instruction
     * hasn't been resolved.
     */
    componentType: any;
    
    /**
     * Returns a promise that will resolve to component type of the represented route.
     * If this instruction references an {@link AsyncRoute}, the `loader` function of that route
     * will run.
     */
    resolveComponentType(): Promise<ng.Type>;
    
    /**
     * Returns the specificity of the route associated with this `Instruction`.
     */
    specificity: any;
    
    /**
     * Returns `true` if the component type of this instruction has no child {@link RouteConfig},
     * or `false` if it does.
     */
    terminal: any;
    
    /**
     * Returns the route data of the given route that was specified in the {@link RouteDefinition},
     * or `null` if no route data was specified.
     */
    routeData(): Object;
    
  }

    
  /**
   * Creates a token that can be used in a DI Binding.
   * 
   * ### Example ([live demo](http://plnkr.co/edit/Ys9ezXpj2Mnoy3Uc8KBp?p=preview))
   * 
   * ```typescript
   * var t = new OpaqueToken("binding");
   * 
   * var injector = Injector.resolveAndCreate([
   *   bind(t).toValue("bindingValue")
   * ]);
   * 
   * expect(injector.get(t)).toEqual("bindingValue");
   * ```
   * 
   * Using an `OpaqueToken` is preferable to using strings as tokens because of possible collisions
   * caused by multiple bindings using the same string as two different tokens.
   * 
   * Using an `OpaqueToken` is preferable to using an `Object` as tokens because it provides better
   * error messages.
   */
  class OpaqueToken {
    
    constructor(_desc: string);
    
    toString(): string;
    
  }

    
  let ROUTE_DATA: OpaqueToken;
  

    
  /**
   * Token used to bind the component with the top-level {@link RouteConfig}s for the
   * application.
   * 
   * You can use the {@link routerBindings} function in your {@link bootstrap} bindings to
   * simplify setting up these bindings.
   * 
   * ## Example ([live demo](http://plnkr.co/edit/iRUP8B5OUbxCWQ3AcIDm))
   * 
   * ```
   * import {Component, View} from 'angular2/angular2';
   * import {
   *   ROUTER_DIRECTIVES,
   *   ROUTER_BINDINGS,
   *   ROUTER_PRIMARY_COMPONENT,
   *   RouteConfig
   * } from 'angular2/router';
   * 
   * @Component({...})
   * @View({directives: [ROUTER_DIRECTIVES]})
   * @RouteConfig([
   *  {...},
   * ])
   * class AppCmp {
   *   // ...
   * }
   * 
   * bootstrap(AppCmp, [
   *   ROUTER_BINDINGS,
   *   bind(ROUTER_PRIMARY_COMPONENT).toValue(AppCmp)
   * ]);
   * ```
   */
  let ROUTER_PRIMARY_COMPONENT: OpaqueToken;
  

    
  /**
   * A list of directives. To use the router directives like {@link RouterOutlet} and
   * {@link RouterLink}, add this to your `directives` array in the {@link View} decorator of your
   * component.
   * 
   * ## Example ([live demo](http://plnkr.co/edit/iRUP8B5OUbxCWQ3AcIDm))
   * 
   * ```
   * import {Component, View} from 'angular2/angular2';
   * import {ROUTER_DIRECTIVES, routerBindings, RouteConfig} from 'angular2/router';
   * 
   * @Component({...})
   * @View({directives: [ROUTER_DIRECTIVES]})
   * @RouteConfig([
   *  {...},
   * ])
   * class AppCmp {
   *    // ...
   * }
   * 
   * bootstrap(AppCmp, [routerBindings(AppCmp)]);
   * ```
   */
  let ROUTER_DIRECTIVES: any[];
  

    
  /**
   * A list of {@link Binding}s. To use the router, you must add this to your application.
   * 
   * Note that you also need to bind to {@link ROUTER_PRIMARY_COMPONENT}.
   * 
   * You can use the {@link routerBindings} function in your {@link bootstrap} bindings to
   * simplify setting up these bindings.
   * 
   * ## Example ([live demo](http://plnkr.co/edit/iRUP8B5OUbxCWQ3AcIDm))
   * 
   * ```
   * import {Component, View} from 'angular2/angular2';
   * import {
   *   ROUTER_DIRECTIVES,
   *   ROUTER_BINDINGS,
   *   ROUTER_PRIMARY_COMPONENT,
   *   RouteConfig
   * } from 'angular2/router';
   * 
   * @Component({...})
   * @View({directives: [ROUTER_DIRECTIVES]})
   * @RouteConfig([
   *  {...},
   * ])
   * class AppCmp {
   *   // ...
   * }
   * 
   * bootstrap(AppCmp, [
   *   ROUTER_BINDINGS,
   *   bind(ROUTER_PRIMARY_COMPONENT).toValue(AppCmp)
   * ]);
   * ```
   */
  let ROUTER_BINDINGS: any[];
  

    
  /**
   * A list of {@link Binding}s. To use the router, you must add these bindings to
   * your application.
   * 
   * ## Example ([live demo](http://plnkr.co/edit/iRUP8B5OUbxCWQ3AcIDm))
   * 
   * ```
   * import {Component, View} from 'angular2/angular2';
   * import {ROUTER_DIRECTIVES, routerBindings, RouteConfig} from 'angular2/router';
   * 
   * @Component({...})
   * @View({directives: [ROUTER_DIRECTIVES]})
   * @RouteConfig([
   *  {...},
   * ])
   * class AppCmp {
   *   // ...
   * }
   * 
   * bootstrap(AppCmp, [routerBindings(AppCmp)]);
   * ```
   */
  function routerBindings(primaryComponent: ng.Type): Array<any>;
  

    
  /**
   * `Route` is a type of {@link RouteDefinition} used to route a path to a component.
   * 
   * It has the following properties:
   * - `path` is a string that uses the route matcher DSL.
   * - `component` a component type.
   * - `as` is an optional `CamelCase` string representing the name of the route.
   * - `data` is an optional property of any type representing arbitrary route metadata for the given
   * route. It is injectable via the {@link ROUTE_DATA} token.
   * 
   * ## Example
   * ```
   * import {RouteConfig} from 'angular2/router';
   * 
   * @RouteConfig([
   *   {path: '/home', component: HomeCmp, as: 'HomeCmp' }
   * ])
   * class MyApp {}
   * ```
   */
  class Route implements RouteDefinition {
    
    constructor({path, component, as, data}:
                      {path: string, component: ng.Type, as?: string, data?: any});
    
    data: any;
    
    path: string;
    
    component: ng.Type;
    
    as: string;
    
    loader: Function;
    
    redirectTo: string;
    
  }

    
  /**
   * `Redirect` is a type of {@link RouteDefinition} used to route a path to an asynchronously loaded
   * component.
   * 
   * It has the following properties:
   * - `path` is a string that uses the route matcher DSL.
   * - `redirectTo` is a string representing the new URL to be matched against.
   * 
   * ## Example
   * ```
   * import {RouteConfig} from 'angular2/router';
   * 
   * @RouteConfig([
   *   {path: '/', redirectTo: '/home'},
   *   {path: '/home', component: HomeCmp}
   * ])
   * class MyApp {}
   * ```
   */
  class Redirect implements RouteDefinition {
    
    constructor({path, redirectTo}: {path: string, redirectTo: string});
    
    path: string;
    
    redirectTo: string;
    
    as: string;
    
    loader: Function;
    
    data: any;
    
  }

    
  /**
   * `AuxRoute` is a type of {@link RouteDefinition} used to define an auxiliary route.
   * 
   * It takes an object with the following properties:
   * - `path` is a string that uses the route matcher DSL.
   * - `component` a component type.
   * - `as` is an optional `CamelCase` string representing the name of the route.
   * - `data` is an optional property of any type representing arbitrary route metadata for the given
   * route. It is injectable via the {@link ROUTE_DATA} token.
   * 
   * ## Example
   * ```
   * import {RouteConfig, AuxRoute} from 'angular2/router';
   * 
   * @RouteConfig([
   *   new AuxRoute({path: '/home', component: HomeCmp})
   * ])
   * class MyApp {}
   * ```
   */
  class AuxRoute implements RouteDefinition {
    
    constructor({path, component, as}: {path: string, component: ng.Type, as?: string});
    
    data: any;
    
    path: string;
    
    component: ng.Type;
    
    as: string;
    
    loader: Function;
    
    redirectTo: string;
    
  }

    
  /**
   * `AsyncRoute` is a type of {@link RouteDefinition} used to route a path to an asynchronously
   * loaded component.
   * 
   * It has the following properties:
   * - `path` is a string that uses the route matcher DSL.
   * - `loader` is a function that returns a promise that resolves to a component.
   * - `as` is an optional `CamelCase` string representing the name of the route.
   * - `data` is an optional property of any type representing arbitrary route metadata for the given
   * route. It is injectable via the {@link ROUTE_DATA} token.
   * 
   * ## Example
   * ```
   * import {RouteConfig} from 'angular2/router';
   * 
   * @RouteConfig([
   *   {path: '/home', loader: () => Promise.resolve(MyLoadedCmp), as: 'MyLoadedCmp'}
   * ])
   * class MyApp {}
   * ```
   */
  class AsyncRoute implements RouteDefinition {
    
    constructor({path, loader, as, data}: {path: string, loader: Function, as?: string, data?: any});
    
    data: any;
    
    path: string;
    
    loader: Function;
    
    as: string;
    
  }

    
  /**
   * `RouteDefinition` defines a route within a {@link RouteConfig} decorator.
   * 
   * Supported keys:
   * - `path` (required)
   * - `component`, `loader`,  `redirectTo` (requires exactly one of these)
   * - `as` (optional)
   * - `data` (optional)
   * 
   * See also {@link Route}, {@link AsyncRoute}, {@link AuxRoute}, and {@link Redirect}.
   */
  interface RouteDefinition {
    
    path: string;
    
    component?: ng.Type | ComponentDefinition;
    
    loader?: Function;
    
    redirectTo?: string;
    
    as?: string;
    
    data?: any;
    
  }

    
  var RouteConfig: (configs: RouteDefinition[]) => ClassDecorator;
  

    
  interface ComponentDefinition {
    
    type: string;
    
    loader?: Function;
    
    component?: ng.Type;
    
  }

    
  var RouterOutlet: ng.InjectableReference;
  

    
  var ComponentInstruction: ng.InjectableReference;
  

  
}

declare module "angular2/router" {
  export = ngRouter;
}


