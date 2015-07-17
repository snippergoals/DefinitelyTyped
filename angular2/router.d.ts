// Type definitions for Angular v2.0.0-alpha.30
// Project: http://angular.io/
// Definitions by: angular team <https://github.com/angular/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// ***********************************************************
// This file is generated by the Angular build process.
// Please do not create manual edits or send pull requests
// modifying this file.
// ***********************************************************
///<reference path="./angular2.d.ts"/>



/**
 * @module
 * @public
 * @description
 * Maps application URLs into application states, to support deep-linking and navigation.
 */
declare module ng {

  /**
   * # Router
   * The router is responsible for mapping URLs to components.
   * 
   * You can see the state of the router by inspecting the read-only field `router.navigating`.
   * This may be useful for showing a spinner, for instance.
   * 
   * ## Concepts
   * Routers and component instances have a 1:1 correspondence.
   * 
   * The router holds reference to a number of "outlets." An outlet is a placeholder that the
   * router dynamically fills in depending on the current URL.
   * 
   * When the router navigates from a URL, it must first recognizes it and serialize it into an
   * `Instruction`.
   * The router uses the `RouteRegistry` to get an `Instruction`.
   * 
   * @exportedAs angular2/router
   */
  class Router {
    
     navigating: boolean;
    
     lastNavigationAttempt: string;
    
     previousUrl: string;
    
     registry: RouteRegistry;
    
     parent: Router;
    
     hostComponent: any;
    

    /**
     * Constructs a child router. You probably don't need to use this unless you're writing a reusable
     * component.
     */
     childRouter(hostComponent: any): Router;
    

    /**
     * Register an object to notify of route changes. You probably don't need to use this unless
     * you're writing a reusable component.
     */
     registerOutlet(outlet: RouterOutlet): Promise<boolean>;
    

    /**
     * Dynamically update the routing configuration and trigger a navigation.
     * 
     * # Usage
     * 
     * ```
     * router.config({ 'path': '/', 'component': IndexCmp});
     * ```
     * 
     * Or:
     * 
     * ```
     * router.config([
     *   { 'path': '/', 'component': IndexComp },
     *   { 'path': '/user/:id', 'component': UserComp },
     * ]);
     * ```
     */
     config(config: StringMap<string, any>| List<StringMap<string, any>>): Promise<any>;
    

    /**
     * Navigate to a URL. Returns a promise that resolves when navigation is complete.
     * 
     * If the given URL begins with a `/`, router will navigate absolutely.
     * If the given URL does not begin with `/`, the router will navigate relative to this component.
     */
     navigate(url: string): Promise<any>;
    

    /**
     * Subscribe to URL updates from the router
     */
     subscribe(onNext: any): void;
    

    /**
     * Updates this router and all descendant routers according to the given instruction
     */
     commit(instruction: Instruction): Promise<any>;
    

    /**
     * Removes the contents of this router's outlet and all descendant outlets
     */
     deactivate(): Promise<any>;
    

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
     generate(linkParams: List<any>): string;
  }
  
  class RootRouter extends Router {
    
     commit(instruction: any): Promise<any>;
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
  class RouterOutlet {
    

    /**
     * Given an instruction, update the contents of this outlet.
     */
     activate(instruction: Instruction): Promise<any>;
    
     deactivate(): Promise<any>;
    
     canDeactivate(instruction: Instruction): Promise<boolean>;
  }
  

  /**
   * The RouterLink directive lets you link to specific parts of your app.
   * 
   * Consider the following route configuration:
   * 
   * ```
   * @RouteConfig({
   *   path: '/user', component: UserCmp, as: 'user'
   * });
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
   * 
   * @exportedAs angular2/router
   */
  class RouterLink {
    
     visibleHref: string;
    
     routeParams: void;
    
     onClick(): boolean;
  }
  
  class RouteParams {
    
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
     config(parentComponent: any, config: StringMap<string, any>): void;
    

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
     generate(linkParams: List<any>, parentComponent: any): string;
  }
  
  class LocationStrategy {
    
     path(): string;
    
     pushState(ctx: any, title: string, url: string): void;
    
     forward(): void;
    
     back(): void;
    
     onPopState(fn: any): void;
    
     getBaseHref(): string;
  }
  
  class HashLocationStrategy extends LocationStrategy {
    
     onPopState(fn: EventListener): void;
    
     getBaseHref(): string;
    
     path(): string;
    
     pushState(state: any, title: string, url: string): void;
    
     forward(): void;
    
     back(): void;
  }
  
  class HTML5LocationStrategy extends LocationStrategy {
    
     onPopState(fn: EventListener): void;
    
     getBaseHref(): string;
    
     path(): string;
    
     pushState(state: any, title: string, url: string): void;
    
     forward(): void;
    
     back(): void;
  }
  

  /**
   * This is the service that an application developer will directly interact with.
   * 
   * Responsible for normalizing the URL against the application's base href.
   * A normalized URL is absolute from the URL host, includes the application's base href, and has no
   * trailing slash:
   * - `/my/app/user/123` is normalized
   * - `my/app/user/123` **is not** normalized
   * - `/my/app/user/123/` **is not** normalized
   */
  class Location {
    
     path(): string;
    
     normalize(url: string): string;
    
     normalizeAbsolutely(url: string): string;
    
     go(url: string): void;
    
     forward(): void;
    
     back(): void;
    
     subscribe(onNext: any, onThrow?: any, onReturn?: any): void;
  }
  
  var appBaseHrefToken : OpaqueToken ;
  
  class Instruction {
    reuseComponentsFrom(oldInstruction: Instruction): void;
    params(): StringMap<string, string>;
    hasChild(): boolean;
  }

  /**
   * Responsible for performing each step of navigation.
   * "Steps" are conceptually similar to "middleware"
   */
  class Pipeline {
    
     steps: List<Function>;
    
     process(instruction: Instruction): Promise<any>;
  }
  
  var routerDirectives : List<any> ;
  
  var routerInjectables : List<any> ;
  
  var RouteConfig:any;
  
}

declare module "angular2/router" {
  export = ng;
}
