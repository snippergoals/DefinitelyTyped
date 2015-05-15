// Type definitions for FabricJS v1.5.0
// Project: http://fabricjs.com/
// Definitions by: Oliver Klemencic <https://github.com/oklemencic/>, edited by Joseph Livecchi <https://github.com/joewashear007/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// Support AMD require
declare module "fabric" {
  export = fabric;
}

declare module fabric {

  var isLikelyNode: boolean;
  var isTouchSupported: boolean;

  /////////////////////////////////////////////////////////////
  // farbic Functions
  /////////////////////////////////////////////////////////////

  function createCanvasForNode(width: number, height: number): ICanvas;

  // Parse
  // ----------------------------------------------------------
  /**
   * Creates markup containing SVG referenced elements like patterns, gradients etc.
   * @param {fabric.Canvas} canvas instance of fabric.Canvas
   */
  function createSVGRefElementsMarkup(canvas: IStaticCanvas): string;
  /**
   * Creates markup containing SVG font faces
   * @param {Array} objects Array of fabric objects
   */
  function createSVGFontFacesMarkup(objects: IObject[]): string;
  /**
  * Takes string corresponding to an SVG document, and parses it into a set of fabric objects
  * @param {String} string
  * @param {Function} callback
  * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
  */
  function loadSVGFromString(string: string, callback: (results: IObject[], options) => void, reviver?: (el, obj) => void);
  /**
  * Takes url corresponding to an SVG document, and parses it into a set of fabric objects. Note that SVG is fetched via XMLHttpRequest, so it needs to conform to SOP (Same Origin Policy)
  * @param {String} url
  * @param {Function} callback
  * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
  */
  function loadSVGFromURL(url, callback: (results: IObject[], options) => void, reviver?: (el, obj) => void);
  /**
     * Returns CSS rules for a given SVG document
     * @param {SVGDocument} doc SVG document to parse
     */
  function getCSSRules(doc: SVGElement): any;

  function parseElements(elements: any[], callback, options, reviver);
  /**
    * Parses "points" attribute, returning an array of values
    * @param {String} points points attribute string
    */
  function parsePointsAttribute(points: string): any[];
  /**
  * Parses "style" attribute, retuning an object with values
  * @param {SVGElement} element Element to parse
  */
  function parseStyleAttribute(element: SVGElement): any;
  /**
  * Transforms an array of svg elements to corresponding fabric.* instances
  * @param {Array} elements Array of elements to parse
  * @param {Function} callback Being passed an array of fabric instances (transformed from SVG elements)
  * @param {Object} [options] Options object
  * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
  */
  function parseElements(elements: any[], callback: Function, options?: any, reviver?: Function): void;
  /**
  * Returns an object of attributes' name/value, given element and an array of attribute names;
  * Parses parent "g" nodes recursively upwards.
  * @param {DOMElement} element Element to parse
  * @param {Array} attributes Array of attributes to parse
  */
  function parseAttributes(elemen: HTMLElement, attributes: string[], svgUid?: string): { [key: string]: string }
  /**
  * Parses an SVG document, returning all of the gradient declarations found in it
  * @param {SVGDocument} doc SVG document to parse
  */
  function getGradientDefs(doc: SVGElement): { [key: string]: any };
  /**
  * Parses a short font declaration, building adding its properties to a style object
  * @param {String} value font declaration
  * @param {Object} oStyle definition
  */
  function parseFontDeclaration(value: string, oStyle: any): void;
  /**
   * Parses an SVG document, converts it to an array of corresponding fabric.* instances and passes them to a callback
   * @param {SVGDocument} doc SVG document to parse
   * @param {Function} callback Callback to call when parsing is finished; It's being passed an array of elements (parsed from a document).
   * @param {Function} [reviver] Method for further parsing of SVG elements, called after each fabric object created.
   */
  function parseSVGDocument(doc: SVGElement, callback: (results, options) => void, reviver?: (el, obj) => void);
  /**
   * Parses "transform" attribute, returning an array of values
   * @param {String} attributeValue String containing attribute value
   */
  function parseTransformAttribute(attributeValue: string): number[];

  // fabric Log
  // ---------------
  /**
  * Wrapper around `console.log` (when available) 
  */
  function log(values);
  /**
  * Wrapper around `console.warn` (when available) 
  */
  function warn(values);


  ////////////////////////////////////////////////////
  // Classes
  ////////////////////////////////////////////////////
  var Canvas: ICanvasStatic;
  var StaticCanvas: IStaticCanvasStatic;

  var Color: IColorStatic;
  var Pattern: IPatternStatic;
  var Intersection: IIntersectionStatic;
  var Point: IPointStatic

  var Circle: ICircleStatic;
  var Ellipse: IEllipseStatic;
  var Group: IGroupStatic;
  var Image: IImageStatic
  var Line: ILineStatic;
  var Object: IObjectStatic;
  var Path: IPathStatic;
  var PathGroup: IPathGroupStatic
  var Polygon: IPolygonStatic
  var Polyline: IPolylineStatic;
  var Rect: IRectStatic;
  var Shadow: IShadowStatic;
  var Text: ITextStatic;
  var IText: IITextStatic;
  var Triangle: ITriangleStatic

  var util: Util;

  ///////////////////////////////////////////////////////////////////////////////
  // Data Object Interfaces - These intrface are not specific part of fabric, 
  // They are just helpful for for defining function paramters
  //////////////////////////////////////////////////////////////////////////////
  interface IDataURLOptions {
    /**
    * The format of the output image. Either "jpeg" or "png" 
    */
    format?: string;
    /**
    * Quality level (0..1). Only used for jpeg 
    */
    quality?: number;
    /**
    * Multiplier to scale by 
    */
    multiplier?: number;
    /**
    * Cropping left offset. Introduced in v1.2.14 
    */
    left?: number;
    /**
    * Cropping top offset. Introduced in v1.2.14 
    */
    top?: number;
    /**
    * Cropping width. Introduced in v1.2.14 
    */
    width?: number;
    /**
    * Cropping height. Introduced in v1.2.14 
    */
    height?: number;
  }

  interface IEvent {
    e: Event;
    target?: IObject;
  }

  interface IFillOptions {
    /**
    * options.source Pattern source 
    */
    source: string|HTMLImageElement;
    /**
    * Repeat property of a pattern (one of repeat, repeat-x, repeat-y or no-repeat) 
    */
    repeat?: string;
    /**
    * Pattern horizontal offset from object's left/top corner 
    */
    offsetX?: number;
    /**
    * Pattern vertical offset from object's left/top corner  
    */
    offsetY?: number;
  }


  interface IToSVGOptions {
    /**
    * If true xml tag is not included 
    */
    suppressPreamble: boolean;
    /**
    * SVG viewbox object 
    */
    viewBox: IViewBox;
    /**
    * Encoding of SVG output 
    */
    encoding: string;
  }

  interface IViewBox {
    /**
    * x-cooridnate of viewbox 
    */
    x: number;
    /**
    * y-coordinate of viewbox 
    */
    y: number;
    /**
    * Width of viewbox 
    */
    width: number;
    /**Height of viewbox  */
    height: number;
  }

  interface IFilter {
    new (): IFilter;
    new (options: any): IFilter;
  }

  interface IEventList {
    [index: string]: (e: Event) => void;
  }

  
  ///////////////////////////////////////////////////////////////////////////////
  // Mixins Interfaces 
  //////////////////////////////////////////////////////////////////////////////
  interface ICollection<T> {
    /**
    * Adds objects to collection, then renders canvas (if `renderOnAddRemove` is not `false`)
    * Objects should be instances of (or inherit from) fabric.Object
    * @param {...fabric.Object} object Zero or more fabric instances
    */
    add(...object: IObject[]): T;

    /**
    * Inserts an object into collection at specified index, then renders canvas (if `renderOnAddRemove` is not `false`)
    * An object should be an instance of (or inherit from) fabric.Object
    * @param {Object} object Object to insert
    * @param {Number} index Index to insert object at
    * @param {Boolean} nonSplicing When `true`, no splicing (shifting) of objects occurs
    * @return {Self} thisArg
    * @chainable
    */
    insertAt(object: IObject, index: number, nonSplicing: boolean): T;

    /**
    * Removes objects from a collection, then renders canvas (if `renderOnAddRemove` is not `false`)
    * @param {...fabric.Object} object Zero or more fabric instances
    * @return {Self} thisArg
    * @chainable
    */
    remove(...object: IObject[]): T;

    /**
    * Executes given function for each object in this group
    * @param {Function} callback
    * @param {Object} context Context (aka thisObject)
    * @return {Self} thisArg
    */
    forEachObject(callback: (element: IObject, index: number, array: IObject[]) => any, context?: any): T;

    /**
    * Returns an array of children objects of this instance
    * Type parameter introduced in 1.3.10
    * @param {String} [type] When specified, only objects of this type are returned
    * @return {Array}
    */
    getObjects(type?: string): IObject[];


    /**
   * Returns object at specified index
   * @param {Number} index
   * @return {Self} thisArg
   */
    item(index: number): T;

    /**
    * Returns true if collection contains no objects
    * @return {Boolean} true if collection is empty
    */
    isEmpty(): boolean;

    /**
    * Returns a size of a collection (i.e: length of an array containing its objects)
    * @return {Number} Collection size
    */
    size(): number;

    /**
    * Returns true if collection contains an object
    * @param {Object} object Object to check against
    * @return {Boolean} `true` if collection contains an object
    */
    contains(object: IObject): boolean;

    /**
    * Returns number representation of a collection complexity
    * @return {Number} complexity
    */
    complexity(): number;
  }

  interface IObservable<T> {
    /**
     * Observes specified event
     * @deprecated `observe` deprecated since 0.8.34 (use `on` instead)
     * @param {String|Object} eventName Event name (eg. 'after:render') or object with key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler})
     * @param {Function} handler Function that receives a notification when an event of the specified type occurs
     */
    on(eventName: string|any, handler: (e: IEvent) => any): T;
    /**
    * Fires event with an optional options object
    * @deprecated `fire` deprecated since 1.0.7 (use `trigger` instead)
    * @param {String} eventName Event name to fire
    * @param {Object} [options] Options object
    */
    trigger(eventName: string, options?: any): T;
    /**
     * Stops event observing for a particular event handler. Calling this method
     * without arguments removes all handlers for all events
     * @deprecated `stopObserving` deprecated since 0.8.34 (use `off` instead)
     * @param {String|Object} eventName Event name (eg. 'after:render') or object with key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler})
     * @param {Function} handler Function to be deleted from EventListeners
     */
    off(eventName: string|any, handler: (e) => any): T;
  }

  // animation mixin
  // ----------------------------------------------------
  interface ICanvasAnimation<T> {
    FX_DURATION: number;
    /**
     * Centers object horizontally with animation.
     * @param {fabric.Object} object Object to center
     * @param {Object} [callbacks] Callbacks object with optional "onComplete" and/or "onChange" properties
     * @param {Function} [callbacks.onComplete] Invoked on completion
     * @param {Function} [callbacks.onChange] Invoked on every step of animation
     */
    fxCenterObjectH(object: IObject, callbacks?: { onComplete: Function; onChange: Function; }): T;

    /**
     * Centers object vertically with animation.
     * @param {fabric.Object} object Object to center
     * @param {Object} [callbacks] Callbacks object with optional "onComplete" and/or "onChange" properties
     * @param {Function} [callbacks.onComplete] Invoked on completion
     * @param {Function} [callbacks.onChange] Invoked on every step of animation
     */
    fxCenterObjectV(object: IObject, callbacks?: { onComplete: Function; onChange: Function; }): T;

    /**
     * Same as `fabric.Canvas#remove` but animated
     * @param {fabric.Object} object Object to remove
     * @param {Object} [callbacks] Callbacks object with optional "onComplete" and/or "onChange" properties
     * @param {Function} [callbacks.onComplete] Invoked on completion
     * @param {Function} [callbacks.onChange] Invoked on every step of animation
     * @return {fabric.Canvas} thisArg
     * @chainable
     */
    fxRemove(object: IObject, callbacks?: { onComplete: Function; onChange: Function; }): T;
  }
  interface IObjectAnimation<T> {
    /**
      * Animates object's properties
      * object.animate('left', ..., {duration: ...});
      * @param property Property to animate
      * @param value Value to animate property
      * @param options The animation options
      */
    animate(property: string, value: number | string, options?: IAnimationOptions): IObject;
    /**
    * Animates object's properties
    * object.animate({ left: ..., top: ... }, { duration: ... });
    * @param properties Properties to animate 
    * @param value Options object
    */
    animate(properties: any, options?: IAnimationOptions): IObject;
  }
  interface IAnimationOptions {
    /**
    * Allows to specify starting value of animatable property (if we don't want current value to be used). 
    */
    from?: string|number;
    /**
    * Defaults to 500 (ms). Can be used to change duration of an animation. 
    */
    duration?: number;
    /**
    * Callback; invoked on every value change
    */
    onChange?: Function;
    /**
    * Callback; invoked when value change is completed
    */
    onComplete?: Function
    /**
    * Easing function. Default: fabric.util.ease.easeInSine 
    */
    easing?: Function;
    /**
     *  Value to modify the property by, default: end - start
     */
    by?: number;
  }
  

  ///////////////////////////////////////////////////////////////////////////////
  // General Fabric Interfaces 
  //////////////////////////////////////////////////////////////////////////////
  interface IColor {
    /**
    * Returns source of this color (where source is an array representation; ex: [200, 200, 100, 1]) 
    */
    getSource(): number[];

    /**
    * Sets source of this color (where source is an array representation; ex: [200, 200, 100, 1]) 
    */
    setSource(source: number[]);

    /**
    * Returns color represenation in RGB format ex: rgb(0-255,0-255,0-255) 
    */
    toRgb(): string;

    /**
    * Returns color represenation in RGBA format ex: rgba(0-255,0-255,0-255,0-1) 
    */
    toRgba(): string;

    /**
    * Returns color represenation in HSL format ex: hsl(0-360,0%-100%,0%-100%) 
    */
    toHsl(): string;

    /**
    * Returns color represenation in HSLA format ex: hsla(0-360,0%-100%,0%-100%,0-1) 
    */
    toHsla(): string;

    /**
    * Returns color represenation in HEX format ex: FF5555 
    */
    toHex(): string;

    /**
    * Gets value of alpha channel for this color 
    */
    getAlpha(): number;

    /**
    * Sets value of alpha channel for this color
    * @param {Number} alpha Alpha value 0-1
    */
    setAlpha(alpha: number);

    /**
    * Transforms color to its grayscale representation 
    */
    toGrayscale(): IColor;

    /**
    * Transforms color to its black and white representation
    * @param {Number} threshold
    */
    toBlackWhite(threshold: number): IColor;
    /**
    * Overlays color with another color
    * @param {String|fabric.Color} otherColor
    */
    overlayWith(otherColor: string|IColor): IColor;
  }
  interface IColorStatic {
    /**
      * Color class
      * The purpose of Color is to abstract and encapsulate common color operations;
      * @param {String} color optional in hex or rgb(a) format
      */
    new (color?: string): IColor;

    /**
    * Returns new color object, when given a color in RGB format
    * @param {String} color Color value ex: rgb(0-255,0-255,0-255)
    */
    fromRgb(color): IColor
    /**
    * Returns new color object, when given a color in RGBA format
    * @param {String} color Color value ex: rgb(0-255,0-255,0-255)
    */
    fromRgba(color): IColor
    /**
    * Returns array represenatation (ex: [100, 100, 200, 1]) of a color that's in RGB or RGBA format
    * @param {String} color Color value ex: rgb(0-255,0-255,0-255), rgb(0%-100%,0%-100%,0%-100%)
    */
    sourceFromRgb(color: string): number[];
    /**
    * Returns new color object, when given a color in HSL format
    * @param {String} color Color value ex: hsl(0-260,0%-100%,0%-100%)
    */
    fromHsl(color: string): IColor
    /**
    * Returns new color object, when given a color in HSLA format
    * @param {String} color Color value ex: hsl(0-260,0%-100%,0%-100%)
    */
    fromHsla(color: string): IColor
    /**
    * Returns array represenatation (ex: [100, 100, 200, 1]) of a color that's in HSL or HSLA format.
    * @param {String} color Color value ex: hsl(0-360,0%-100%,0%-100%) or hsla(0-360,0%-100%,0%-100%, 0-1)
    */
    sourceFromHsl(color: string): number[];
    /**
    * Returns new color object, when given a color in HEX format
    * @param {String} color Color value ex: FF5555
    */
    fromHex(color: string): IColor

    /**
    * Returns array represenatation (ex: [100, 100, 200, 1]) of a color that's in HEX format
    * @param {String} color ex: FF5555
    */
    sourceFromHex(color: string): number[];
    /**
    * Returns new color object, when given color in array representation (ex: [200, 100, 100, 0.5])
    * @param {Array} source
    */
    fromSource(source: number[]): IColor;
    prototype: any;
  }

  interface IGradientOptions {
    /**
    * @param {String} [options.type] Type of gradient 'radial' or 'linear' 
    */
    type?: string;
    /**
    * x-coordinate of start point
    */
    x1?: number;
    /**
    * y-coordinate of start point
    */
    y1?: number;
    /**
    * x-coordinate of end point
    */
    x2?: number;
    /**
    * y-coordinate of end point
    */
    y2?: number;
    /**
    * Radius of start point (only for radial gradients)
    */
    r1?: number;
    /**
    * Radius of end point (only for radial gradients)
    */
    r2?: number;
    /**
    * Color stops object eg. {0:string; 1:string;
    */
    colorStops?: any;
  }
  interface IGradient extends IGradientOptions {
    /**
     * Adds another colorStop
     * @param {Object} colorStop Object with offset and color
     */
    addColorStop(colorStop: any): IGradient;
    /**
     * Returns object representation of a gradient
     */
    toObject(): any;
    /**
     * Returns SVG representation of an gradient
     * @param {Object} object Object to create a gradient for
     * @param {Boolean} normalize Whether coords should be normalized
     * @return {String} SVG representation of an gradient (linear/radial)
     */
    toSVG(object: IObject, normalize?: boolean): string;

    /**
     * Returns an instance of CanvasGradient
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    toLive(ctx: CanvasRenderingContext2D, object?: IPathGroup): CanvasGradient;
  }
  interface IGrandientStatic {
    new (options?: IGradientOptions): IGradient;
    /**
     * Returns instance from an SVG element
     * @param {SVGGradientElement} el SVG gradient element
     * @param {fabric.Object} instance
     */
    fromElement(el: SVGGradientElement, instance: IObject): IGradient;
    /**
     * Returns instance from its object representation
     * @param {Object} obj
     * @param {Object} [options] Options object
     */
    fromObject(obj: any, options: any[]): IGradient;
  }

  interface IIntersection {
    /**
    * Appends a point to intersection 
    */
    appendPoint(point: IPoint);
    /**
    * Appends points to intersection 
    */
    appendPoints(points: IPoint[]);
  }
  interface IIntersectionStatic {
    /**
     * Intersection class
     */
    new (status?: string);
    /**
    * Checks if polygon intersects another polygon 
    */
    intersectPolygonPolygon(points1: IPoint[], points2: IPoint[]): IIntersection;
    /**
    * Checks if line intersects polygon
    */
    intersectLinePolygon(a1: IPoint, a2: IPoint, points: IPoint[]): IIntersection
    /**
    * Checks if one line intersects another
    */
    intersectLineLine(a1: IPoint, a2: IPoint, b1: IPoint, b2: IPoint): IIntersection
    /**
    * Checks if polygon intersects rectangle 
    */
    intersectPolygonRectangle(points: IPoint[], r1: number, r2: number): IIntersection;
  }

  interface IPatternOptions {
    /**
    * Repeat property of a pattern (one of repeat, repeat-x, repeat-y or no-repeat) 
    */
    repeat: string;

    /**
    * Pattern horizontal offset from object's left/top corner 
    */
    offsetX: number;

    /**
    * Pattern vertical offset from object's left/top corner 
    */
    offsetY: number;
    /**
    * The source for the pattern
    */
    source: string|HTMLImageElement;
  }
  interface IPattern extends IPatternOptions {
    new (options?: IPatternOptions): IPattern;

    initialise(options?: IPatternOptions): IPattern;
    /**
    * Returns an instance of CanvasPattern
    */
    toLive(ctx: CanvasRenderingContext2D): IPattern;

    /**
    * Returns object representation of a pattern
    */
    toObject(): any;
    /**
    * Returns SVG representation of a pattern
    * @param {fabric.Object} object
    */
    toSVG(object: IObject): string;
  }
  interface IPatternStatic {
    new (options?: IPatternOptions): IPattern;
    prototype: any;
  }

  interface IPoint {
    x: number;
    y: number;
    /**
    * Adds another point to this one and returns another one
    * @param {fabric.Point} that
    * @return {fabric.Point} new Point instance with added values
    */
    add(that: IPoint): IPoint;

    /**
    * Adds another point to this one
    * @param {fabric.Point} that
    * @return {fabric.Point} thisArg
    */
    addEquals(that: IPoint): IPoint;

    /**
    * Adds value to this point and returns a new one
    * @param {Number} scalar
    * @return {fabric.Point} new Point with added value
    */
    scalarAdd(scalar: number): IPoint;

    /**
    * Adds value to this point
    * @param {Number} scalar
    * @return {fabric.Point} thisArg
    */
    scalarAddEquals(scalar: number): IPoint;

    /**
    * Subtracts another point from this point and returns a new one
    * @param {fabric.Point} that
    * @return {fabric.Point} new Point object with subtracted values
    */
    subtract(that: IPoint): IPoint

    /**
    * Subtracts another point from this point
    * @param {fabric.Point} that
    * @return {fabric.Point} thisArg
    */
    subtractEquals(that): IPoint;

    /**
    * Subtracts value from this point and returns a new one
    * @param {Number} scalar
    * @return {fabric.Point}
    */
    scalarSubtract(scalar: number): IPoint;

    /**
    * Subtracts value from this point
    * @param {Number} scalar
    * @return {fabric.Point} thisArg
    */
    scalarSubtractEquals(scalar: number): IPoint;

    /**
    * Miltiplies this point by a value and returns a new one
    * @param {Number} scalar
    * @return {fabric.Point}
    */
    multiply(scalar: number): IPoint;

    /**
    * Miltiplies this point by a value
    * @param {Number} scalar
    * @return {fabric.Point} thisArg
    */
    multiplyEquals(scalar): IPoint;

    /**
    * Divides this point by a value and returns a new one
    * @param {Number} scalar
    * @return {fabric.Point}
    */
    divide(scalar): IPoint;

    /**
    * Divides this point by a value
    * @param {Number} scalar
    * @return {fabric.Point} thisArg
    */
    divideEquals(scalar: number): IPoint;

    /**
    * Returns true if this point is equal to another one
    * @param {fabric.Point} that
    * @return {Boolean}
    */
    eq(that: IPoint): IPoint;

    /**
    * Returns true if this point is less than another one
    * @param {fabric.Point} that
    * @return {Boolean}
    */
    lt(that: IPoint): IPoint;

    /**
    * Returns true if this point is less than or equal to another one
    * @param {fabric.Point} that
    * @return {Boolean}
    */
    lte(that: IPoint): IPoint;

    /**
    * Returns true if this point is greater another one
    * @param {fabric.Point} that
    * @return {Boolean}
    */
    gt(that: IPoint): IPoint;

    /**
    * Returns true if this point is greater than or equal to another one
    * @param {fabric.Point} that
    * @return {Boolean}
    */
    gte(that: IPoint): IPoint;

    /**
    * Returns new point which is the result of linear interpolation with this one and another one
    * @param {fabric.Point} that
    * @param {Number} t
    * @return {fabric.Point}
    */
    lerp(that, t: number): IPoint;

    /**
    * Returns distance from this point and another one
    * @param {fabric.Point} that
    * @return {Number}
    */
    distanceFrom(that: IPoint): number;

    /**
    * Returns the point between this point and another one
    * @param {fabric.Point} that
    * @return {fabric.Point}
    */
    midPointFrom(that: IPoint): IPoint;

    /**
    * Returns a new point which is the min of this and another one
    * @param {fabric.Point} that
    * @return {fabric.Point}
    */
    min(that: IPoint): IPoint;

    /**
    * Returns a new point which is the max of this and another one
    * @param {fabric.Point} that
    * @return {fabric.Point}
    */
    max(that: IPoint): IPoint;

    /**
    * Returns string representation of this point
    * @return {String}
    */
    toString(): string;

    /**
    * Sets x/y of this point
    * @param {Number} x
    * @param {Number} y
    */
    setXY(x, y: IPoint): IPoint;

    /**
    * Sets x/y of this point from another point
    * @param {fabric.Point} that
    */
    setFromPoint(that: IPoint): IPoint;

    /**
    * Swaps x/y of this point and another point
    * @param {fabric.Point} that
    */
    swap(that: IPoint): IPoint;
  }
  interface IPointStatic {
    new (x, y): IPoint;
    prototype: any;
  }

  interface IShadowOptions {
    /**
    * Whether the shadow should affect stroke operations 
    */
    affectStrike: boolean;
    /**
    * Shadow blur 
    */
    blur: number;
    /**
    * Shadow color 
    */
    color: string;
    /**
    * Indicates whether toObject should include default values 
    */
    includeDefaultValues: boolean;
    /**
    * Shadow horizontal offset 
    */
    offsetX: number;
    /**
    * Shadow vertical offset 
    */
    offsetY: number;
  }
  interface IShadow extends IShadowOptions {
    initialize(options?: IShadowOptions|string): IShadow;
    /**
    * Returns object representation of a shadow 
    */
    toObject(): IObject;
    /**
    * Returns a string representation of an instance, CSS3 text-shadow declaration 
    */
    toString(): string;
    /**
    * Returns SVG representation of a shadow
    * @param {fabric.Object} object
    */
    toSVG(object: IObject): string;

    /**
    * Regex matching shadow offsetX, offsetY and blur, Static 
    */
    reOffsetsAndBlur: RegExp
  }
  interface IShadowStatic {
    new (options?: IShadowOptions): IShadow
    reOffsetsAndBlur: RegExp;
  }

  ///////////////////////////////////////////////////////////////////////////////
  // Canvas Interfaces
  //////////////////////////////////////////////////////////////////////////////
  interface ICanvasDimensions {
    /**
    * Width of canvas element 
    */
    width: number;
    /**
    * Height of canvas element 
    */
    height: number;
  }
  interface ICanvasDimensionsOptions {
    /**
    * Set the given dimensions only as canvas backstore dimensions
    */
    backstoreOnly?: boolean;
    /**
    * Set the given dimensions only as css dimensions 
    */
    cssOnly?: boolean;
  }

  interface IStaticCanvasOptions {
    /**
    * Indicates whether the browser can be scrolled when using a touchscreen and dragging on the canvas 
    */
    allowTouchScrolling?: boolean;
    /**
    * Indicates whether this canvas will use image smoothing, this is on by default in browsers    
    */
    imageSmoothingEnabled?: boolean;

    /**
    * Indicates whether objects should remain in current stack position when selected. When false objects are brought to top and rendered as part of the selection group 
    */
    preserveObjectStacking?: boolean;

    /**
    * The transformation (in the format of Canvas transform) which focuses the viewport 
    */
    viewportTransform?: number[];



    freeDrawingColor?: string;
    freeDrawingLineWidth?: number;

    /**
    * Background color of canvas instance. 
    * Should be set via setBackgroundColor 
    */
    backgroundColor?: string | IPattern;
    /**
    * Background image of canvas instance.
    * Should be set via setBackgroundImage
    * <b>Backwards incompatibility note:</b> The "backgroundImageOpacity" and "backgroundImageStretch" properties are deprecated since 1.3.9.
    */
    backgroundImage?: IImage;
    backgroundImageOpacity?: number;
    backgroundImageStretch?: number;
    /**
    * Function that determines clipping of entire canvas area
    * Being passed context as first argument. See clipping canvas area
    */
    clipTo?: (context: CanvasRenderingContext2D) => void;

    /**
    * Indicates whether object controls (borders/controls) are rendered above overlay image 
    */
    controlsAboveOverlay?: boolean;

    /**
    * Indicates whether toObject/toDatalessObject should include default values 
    */
    includeDefaultValues?: boolean;
    /**
    * Overlay color of canvas instance.
    * Should be set via setOverlayColor
    */
    overlayColor?: string | IPattern;
    /**
    * Overlay image of canvas instance.
    * Should be set via setOverlayImage
    * <b>Backwards incompatibility note:</b> The "overlayImageLeft" and "overlayImageTop" properties are deprecated since 1.3.9.
    */
    overlayImage?: IImage;
    overlayImageLeft?: number;
    overlayImageTop?: number;
    /**
    * Indicates whether add, insertAt and remove should also re-render canvas.
    * Disabling this option could give a great performance boost when adding/removing a lot of objects to/from canvas at once
    * (followed by a manual rendering after addition/deletion)
    */
    renderOnAddRemove?: boolean;
    /**
    * Indicates whether objects' state should be saved 
    */
    stateful?: boolean;
  }
  interface IStaticCanvas extends IObservable<IStaticCanvas>, IStaticCanvasOptions, ICollection<IStaticCanvas>, ICanvasAnimation<IStaticCanvas> {
    /**
    * Calculates canvas element offset relative to the document
    * This method is also attached as "resize" event handler of window
    */
    calcOffset(): IStaticCanvas;

    /**
    * Sets {@link fabric.StaticCanvas#overlayImage|overlay image} for this canvas
    * @param {(fabric.Image|String)} image fabric.Image instance or URL of an image to set overlay to
    * @param {Function} callback callback to invoke when image is loaded and set as an overlay
    * @param {Object} [options] Optional options to set for the {@link fabric.Image|overlay image}.
    */
    setOverlayImage(image: IImage | string, callback: Function, options?: IObjectOptions): IStaticCanvas;

    /**
    * Sets {@link fabric.StaticCanvas#backgroundImage|background image} for this canvas
    * @param {(fabric.Image|String)} image fabric.Image instance or URL of an image to set background to
    * @param {Function} callback Callback to invoke when image is loaded and set as background
    * @param {Object} [options] Optional options to set for the {@link fabric.Image|background image}.
    */
    setBackgroundImage(image: IImage|string, callback: Function, options?: IObjectOptions): IStaticCanvas;

    /**
    * Sets {@link fabric.StaticCanvas#overlayColor|background color} for this canvas
    * @param {(String|fabric.Pattern)} overlayColor Color or pattern to set background color to
    * @param {Function} callback Callback to invoke when background color is set
    */
    setOverlayColor(overlayColor: string|IPattern, callback: Function): IStaticCanvas;

    /**
    * Sets {@link fabric.StaticCanvas#backgroundColor|background color} for this canvas
    * @param {(String|fabric.Pattern)} backgroundColor Color or pattern to set background color to
    * @param {Function} callback Callback to invoke when background color is set
    */
    setBackgroundColor(backgroundColor: string|IPattern, callback: Function): IStaticCanvas;

    /**
    * Returns canvas width (in px) 
    */
    getWidth(): number;

    /**
    * Returns canvas height (in px)
    */
    getHeight(): number;

    /**
    * Sets width of this canvas instance
    * @param {Number|String} value                         Value to set width to
    * @param {Object}        [options]                     Options object
    */
    setWidth(value: number|string, options?: ICanvasDimensionsOptions): IStaticCanvas

    /**
    * Sets height of this canvas instance
    * @param {Number|String} value                         Value to set height to
    * @param {Object}        [options]                     Options object
    */
    setHeight(value: number|string, options?: ICanvasDimensionsOptions): IStaticCanvas

    /**
    * Sets dimensions (width, height) of this canvas instance. when options.cssOnly flag active you should also supply the unit of measure (px/%/em)
    * @param {Object}        dimensions                    Object with width/height properties
    * @param {Object}        [options]                     Options object
    */
    setDimensions(dimensions: ICanvasDimensions, options?: ICanvasDimensionsOptions): IStaticCanvas;
     
    /**
    * Returns canvas zoom level 
    */
    getZoom(): number;

    /**
    * Sets viewport transform of this canvas instance
    * @param {Array} vpt the transform in the form of context.transform
    */
    setViewportTransform(vpt: number[]): IStaticCanvas;
     

    /**
    * Sets zoom level of this canvas instance, zoom centered around point
    * @param {fabric.Point} point to zoom with respect to
    * @param {Number} value to set zoom to, less than 1 zooms out
    */
    zoomToPoint(point: IPoint, value: number): IStaticCanvas;

    /**
    * Sets zoom level of this canvas instance
    * @param {Number} value to set zoom to, less than 1 zooms out
    */
    setZoom(value: number): IStaticCanvas;

    /**
    * Pan viewport so as to place point at top left corner of canvas
    * @param {fabric.Point} point to move to
    */
    absolutePan(point: IPoint): IStaticCanvas;

    /**
    * Pans viewpoint relatively
    * @param {fabric.Point} point (position vector) to move by
    */
    relativePan(point: IPoint): IStaticCanvas;

    /**
    * Returns <canvas> element corresponding to this instance 
    */
    getElement(): HTMLCanvasElement;

    /**
    * Returns currently selected object, if any 
    */
    getActiveObject(): IObject;

    /**
    * Returns currently selected group of object, if any 
    */
    getActiveGroup(): IGroup;

    /**
    * Clears specified context of canvas element
    * @param {CanvasRenderingContext2D} ctx Context to clear
    * @chainable
    */
    clearContext(ctx: CanvasRenderingContext2D): IStaticCanvas;

    /**
    * Returns context of canvas where objects are drawn 
    */
    getContext(): CanvasRenderingContext2D;

    /**
    * Clears all contexts (background, main, top) of an instance 
    */
    clear(): IStaticCanvas;

    /**
    * Renders both the top canvas and the secondary container canvas.
    * @param {Boolean} [allOnTop] Whether we want to force all images to be rendered on the top canvas
    * @chainable
    */
    renderAll(allOnTop?: boolean): IStaticCanvas;

    /**
    * Method to render only the top canvas.
    * Also used to render the group selection box.
    * @chainable
    */
    renderTop(): IStaticCanvas;

    /**
    * Returns coordinates of a center of canvas.
    * Returned value is an object with top and left properties
    */
    getCenter(): { top: number; left: number; }

    /**
    * Centers object horizontally.
    * You might need to call `setCoords` on an object after centering, to update controls area.
    * @param {fabric.Object} object Object to center horizontally
    */
    centerObjectH(object: IObject): IStaticCanvas;

    /**
    * Centers object vertically.
    * You might need to call `setCoords` on an object after centering, to update controls area.
    * @param {fabric.Object} object Object to center vertically
    */
    centerObjectV(object: IObject): IStaticCanvas;

    /**
    * Centers object vertically and horizontally.
    * You might need to call `setCoords` on an object after centering, to update controls area.
    * @param {fabric.Object} object Object to center vertically and horizontally
    */
    centerObject(object: IObject): IStaticCanvas;

    /**
    * Returs dataless JSON representation of canvas
    * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
    */
    toDatalessJSON(propertiesToInclude?: any[]): string;

    /**
    * Returns object representation of canvas
    * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
    */
    toObject(propertiesToInclude?: any[]): any; 

    /**
    * Returns dataless object representation of canvas
    * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
    */
    toDatalessObject(propertiesToInclude?: any[]): any;

    /**
    * When true, getSvgTransform() will apply the StaticCanvas.viewportTransform to the SVG transformation. When true,
    * a zoomed canvas will then produce zoomed SVG output.
    */
    svgViewportTransformation: boolean;

    /**
    * Returns SVG representation of canvas
    * @param {Object} [options] Options object for SVG output
    * @param {Function} [reviver] Method for further parsing of svg elements, called after each fabric object converted into svg representation.
    */
    toSVG(options: IToSVGOptions, reviver?: Function): string;

    /**
    * Moves an object to the bottom of the stack of drawn objects
    * @param {fabric.Object} object Object to send to back
    * @chainable
    */
    sendToBack(object: IObject): IStaticCanvas;

    /**
    * Moves an object to the top of the stack of drawn objects
    * @param {fabric.Object} object Object to send
    * @chainable
    */
    bringToFront(object: IObject): IStaticCanvas;

    /**
    * Moves an object down in stack of drawn objects
    * @param {fabric.Object} object Object to send
    * @param {Boolean} [intersecting] If `true`, send object behind next lower intersecting object
    * @chainable
    */
    sendBackwards(object: IObject): IStaticCanvas;

    /**
    * Moves an object up in stack of drawn objects
    * @param {fabric.Object} object Object to send
    * @param {Boolean} [intersecting] If `true`, send object in front of next upper intersecting object
    * @chainable
    */
    bringForward(object: IObject): IStaticCanvas;
    /**
    * Moves an object to specified level in stack of drawn objects
    * @param {fabric.Object} object Object to send
    * @param {Number} index Position to move to
    * @chainable
    */
    moveTo(object: IObject, index: number): IStaticCanvas;

    /**
    * Clears a canvas element and removes all event listeners 
    */
    dispose(): IStaticCanvas;

    /**
    * Returns a string representation of an instance 
    */
    toString(): string;

    /**
    * Provides a way to check support of some of the canvas methods
    * (either those of HTMLCanvasElement itself, or rendering context)
    *
    * @param {String} methodName Method to check support for;
    *                            Could be one of "getImageData", "toDataURL", "toDataURLWithQuality" or "setLineDash"
    * @return {Boolean | null} `true` if method is supported (or at least exists),
    *                          `null` if canvas element or context can not be initialized
    */
    supports(methodName: string): boolean;
    EMPTY_JSON: string;

    // methods
    onBeforeScaleRotate(target: IObject);
    toGrayscale(propertiesToInclude: any[]): string;
  }
  interface IStaticCanvasStatic {
    /**
    * Constructor
    * @param {HTMLElement|String} element <canvas> element to initialize instance on
    * @param {Object} [options] Options object
    */
    new (element: HTMLCanvasElement | string, options?: ICanvasOptions): IStaticCanvas;

    EMPTY_JSON: string;
    /**
     * Provides a way to check support of some of the canvas methods
     * (either those of HTMLCanvasElement itself, or rendering context)
     * @param {String} methodName Method to check support for; Could be one of "getImageData", "toDataURL", "toDataURLWithQuality" or "setLineDash"
     */
    supports(methodName: string): boolean;
    prototype: any;
    /**
     * Returns JSON representation of canvas
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     */
    toJSON(propertiesToInclude?: any[]): string;
  }

  interface ICanvasOptions extends IStaticCanvasOptions {
    /**
    * When true, objects can be transformed by one side (unproportionally)
    */
    uniScaleTransform?: boolean;

    /**
    * When true, objects use center point as the origin of scale transformation.
    * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
    */
    centeredScaling?: boolean;

    /**
    * When true, objects use center point as the origin of rotate transformation.
    * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
    */
    centeredRotation?: boolean;

    /**
    * Indicates that canvas is interactive. This property should not be changed.
    */
    interactive?: boolean;

    /**
    * Indicates whether group selection should be enabled
    */
    selection?: boolean;

    /**
    * Color of selection
    */
    selectionColor?: string;

    /**
    * Default dash array pattern
    * If not empty the selection border is dashed
    */
    selectionDashArray?: any[];

    /**
    * Color of the border of selection (usually slightly darker than color of selection itself)
    */
    selectionBorderColor?: string;

    /**
    * Width of a line used in object/group selection
    */
    selectionLineWidth?: number;

    /**
    * Default cursor value used when hovering over an object on canvas
    */
    hoverCursor?: string;

    /**
    * Default cursor value used when moving an object on canvas
    */
    moveCursor?: string;

    /**
    * Default cursor value used for the entire canvas
    */
    defaultCursor?: string;

    /**
    * Cursor value used during free drawing
    */
    freeDrawingCursor?: string;

    /**
    * Cursor value used for rotation point
    */
    rotationCursor?: string;

    /**
    * Default element class that's given to wrapper (div) element of canvas
    */
    containerClass?: string;

    /**
    * When true, object detection happens on per-pixel basis rather than on per-bounding-box
    */
    perPixelTargetFind?: boolean;

    /**
    * Number of pixels around target pixel to tolerate (consider active) during object detection
    */
    targetFindTolerance?: number;

    /**
    * When true, target detection is skipped when hovering over canvas. This can be used to improve performance.
    */
    skipTargetFind?: boolean;

    /**
    * When true, mouse events on canvas (mousedown/mousemove/mouseup) result in free drawing.
    * After mousedown, mousemove creates a shape,
    * and then mouseup finalizes it and adds an instance of `fabric.Path` onto canvas.
    */
    isDrawingMode?: boolean;
  }
  interface ICanvas extends IStaticCanvas, ICanvasOptions {
    // constructors
    new (element: HTMLCanvasElement|string, options: ICanvasOptions): ICanvas;

    _objects: IObject[];

    // fields
    freeDrawingColor: string;
    freeDrawingLineWidth: number;

    /**
    * Checks if point is contained within an area of given object
    * @param {Event} e Event object
    * @param {fabric.Object} target Object to test against
    */
    containsPoint(e: Event, target: IObject): boolean;
    /**
    * Deactivates all objects on canvas, removing any active group or object
    * @return {fabric.Canvas} thisArg
    */
    deactivateAll(): ICanvas;
    /**
    * Deactivates all objects and dispatches appropriate events
    * @param {Event} [e] Event (passed along when firing)
    * @return {fabric.Canvas} thisArg
    */
    deactivateAllWithDispatch(e?: Event): ICanvas;
    /**
    * Discards currently active group
    * @param {Event} [e] Event (passed along when firing)
    * @return {fabric.Canvas} thisArg
    */
    discardActiveGroup(e?: Event): ICanvas;
    /**
    * Discards currently active object
    * @param {Event} [e] Event (passed along when firing)
    * @return {fabric.Canvas} thisArg
    * @chainable
    */
    discardActiveObject(e?: Event): ICanvas;
    /**
    * Draws objects' controls (borders/controls)
    * @param {CanvasRenderingContext2D} ctx Context to render controls on
    */
    drawControls(ctx: CanvasRenderingContext2D): void;
    drawDashedLine(ctx: CanvasRenderingContext2D, x: number, y: number, x2: number, y2: number, dashArray: number[]): ICanvas;
    /**
    * Method that determines what object we are clicking on
    * @param {Event} e mouse event
    * @param {Boolean} skipGroup when true, group is skipped and only objects are traversed through
    */
    findTarget(e: MouseEvent, skipGroup: boolean): ICanvas;
    /**
    * Returns currently active group
    * @return {fabric.Group} Current group
    */
    getActiveGroup(): IGroup;
    /**
    * Returns currently active object
    * @return {fabric.Object} active object
    */
    getActiveObject(): IObject;
    /**
    * Returns pointer coordinates relative to canvas.
    * @param {Event} e
    * @return {Object} object with "x" and "y" number values
    */
    getPointer(e: Event, ignoreZoom?: boolean, upperCanvasEl?: CanvasRenderingContext2D): { x: number; y: number; };
    /**
    * Returns context of canvas where object selection is drawn
    * @return {CanvasRenderingContext2D}
    */
    getSelectionContext(): CanvasRenderingContext2D;
    /**
    * Returns <canvas> element on which object selection is drawn
    * @return {HTMLCanvasElement}
    */
    getSelectionElement(): HTMLCanvasElement;
    /**
    * Returns true if object is transparent at a certain location
    * @param {fabric.Object} target Object to check
    * @param {Number} x Left coordinate
    * @param {Number} y Top coordinate
    */
    isTargetTransparent(target: IObject, x: number, y: number): boolean;
    /**
    * Sets active group to a speicified one
    * @param {fabric.Group} group Group to set as a current one
    * @param {Event} [e] Event (passed along when firing)
    */
    setActiveGroup(group: IGroup, e?: Event): ICanvas;
    /**
    * Sets given object as the only active object on canvas
    * @param {fabric.Object} object Object to set as an active one
    * @param {Event} [e] Event (passed along when firing "object:selected")
    */
    setActiveObject(object: IObject, e?: Event): ICanvas;
    /**
    * Set the cursor type of the canvas element
    * @param {String} value Cursor type of the canvas element.
    * @see http://www.w3.org/TR/css3-ui/#cursor
    */
    setCursor(value: string): void;


    loadFromJSON(json, callback: () => void): void;
    loadFromDatalessJSON(json, callback: () => void): void;
  }
  interface ICanvasStatic {
    /**
    * Constructor
    * @param {HTMLElement|String} element <canvas> element to initialize instance on
    * @param {Object} [options] Options object
    */
    new (element: HTMLCanvasElement | string, options?: ICanvasOptions): ICanvas;

    EMPTY_JSON: string;
    /**
     * Provides a way to check support of some of the canvas methods
     * (either those of HTMLCanvasElement itself, or rendering context)
     * @param {String} methodName Method to check support for; Could be one of "getImageData", "toDataURL", "toDataURLWithQuality" or "setLineDash"
     */
    supports(methodName: string): boolean;
    prototype: any;
    /**
     * Returns JSON representation of canvas
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     */
    toJSON(propertiesToInclude?: any[]): string;
  }



  ///////////////////////////////////////////////////////////////////////////////
  // Shape Interfaces
  //////////////////////////////////////////////////////////////////////////////

  interface ICircleOptions extends IObjectOptions {
    /**
     * Radius of this circle
     */
    radius?: number;
    /**
     * Start angle of the circle, moving clockwise
     */
    startAngle?: number;

    /**
     * End angle of the circle
     */
    endAngle?: number;
  }
  interface ICircle extends IObject, ICircleOptions {
    initialize(options?: ICircleOptions): ICircle;

    /**
     * Returns complexity of an instance
     * @return {Number} complexity of this instance
     */
    complexity(): number;
    /**
    * Returns horizontal radius of an object (according to how an object is scaled)
    * @return {Number}
    */
    getRadiusX(): number;
    /**
     * Returns vertical radius of an object (according to how an object is scaled)
     * @return {Number}
     */
    getRadiusY(): number;
    /**
     * Sets radius of an object (and updates width accordingly)
     * @return {Number}
     */
    setRadius(value: number): number;

    /**
     * Returns object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toObject(propertiesToInclude?: any[]): any;
    /**
     * Returns svg representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG(reviver?: Function): string;
  }
  interface ICircleStatic {
    /**
   * List of attribute names to account for when parsing SVG element (used by {@link fabric.Circle.fromElement})
   */
    ATTRIBUTE_NAMES: string[];
    /**
    * Returns Circle instance from an SVG element
    * @param {SVGElement} element Element to parse
    * @param {Object} [options] Options object
    */
    fromElement(element: SVGElement, options: ICircleOptions): ICircle;
    /**
     * Returns Circle instance from an object representation
     * @param {Object} object Object to create an instance from
     */
    fromObject(object: any): ICircle;
    /**
     * Circle class
     */
    new (options?: ICircleOptions): ICircle;
    prototype: any;
  }

  interface IEllipseOptions extends IObjectOptions {
    /**
    * Horizontal radius
    */
    rx?: number;
    /**
     * Vertical radius
     */
    ry?: number;
  }
  interface IEllipse extends IObject, IEllipseOptions {
    initialize(options?: IEllipseOptions): IEllipse;
    /**
     * Returns horizontal radius of an object (according to how an object is scaled)
     * @return {Number}
     */
    getRx(): number;

    /**
     * Returns Vertical radius of an object (according to how an object is scaled)
     * @return {Number}
     */
    getRy(): number;
    /**
     * Returns object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toObject(propertiesToInclude?: any[]): any;
    /**
     * Returns svg representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG(reviver?: Function): string;
    /**
     * Returns complexity of an instance
     * @return {Number} complexity
     */
    complexity(): number;
  }
  interface IEllipseStatic {
    new (options?: IEllipseOptions): IEllipse;
    /**
   * List of attribute names to account for when parsing SVG element (used by {@link fabric.Ellipse.fromElement})
   */
    ATTRIBUTE_NAMES: string[];

    /**
     * Returns Ellipse instance from an SVG element
     * @param {SVGElement} element Element to parse
     * @param {Object} [options] Options object
     */
    fromElement(element: SVGElement, options?: IEllipseOptions): IEllipse

    /**
     * Returns Ellipse instance from an object representation
     * @param {Object} object Object to create an instance from
     */
    fromObject(object: any): IEllipse;
  }

  interface IGroup extends IObject, ICollection<IGroup> {
    initialize(objects?: IObject[], options?: IObjectOptions): any;
    type: string;

    activateAllObjects(): IGroup;
    /**
     * Adds an object to a group; Then recalculates group's dimension, position.
     * @param {Object} object
     * @return {fabric.Group} thisArg
     * @chainable
     */
    addWithUpdate(object: IObject): IGroup;
    containsPoint(point): boolean;
    /**
   * Destroys a group (restoring state of its objects)
   * @return {fabric.Group} thisArg
   * @chainable
   */
    destroy(): IGroup;
    /**
    * Returns requested property
    * @param {String} prop Property to get
    * @return {Any}
    */
    get(prop: string): any;
    /**
    * Checks whether this group was moved (since `saveCoords` was called last)
    * @return {Boolean} true if an object was moved (since fabric.Group#saveCoords was called)
    */
    hasMoved(): boolean;
    /**
     * Removes an object from a group; Then recalculates group's dimension, position.
     * @param {Object} object
     * @return {fabric.Group} thisArg
     * @chainable
     */
    removeWithUpdate(object: IObject): IGroup;
    /**
     * Renders instance on a given context
     * @param {CanvasRenderingContext2D} ctx context to render instance on
     */
    render(ctx: CanvasRenderingContext2D): void;
    /**
      * Removes objects from a collection, then renders canvas (if `renderOnAddRemove` is not `false`)
      * @param {...fabric.Object} object Zero or more fabric instances
      * @return {Self} thisArg
      * @chainable
      */
    remove(...object: IObject[]): IGroup;
    /**
     * Saves coordinates of this instance (to be used together with `hasMoved`)
     * @saveCoords
     * @return {fabric.Group} thisArg
     * @chainable
     */
    saveCoords(): IGroup;
    /**
     * Sets coordinates of all group objects
     * @return {fabric.Group} thisArg
     * @chainable
     */
    setObjectsCoords(): IGroup;
    toGrayscale(): IGroup;
    /**
     * Returns object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toObject(propertiesToInclude?: any[]): any;
    /**
     * Returns string represenation of a group
     * @return {String}
     */
    toString(): string;
    /**
     * Returns svg representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG(reviver?: Function): string;
  }
  interface IGroupStatic {
    /**
     * Constructor
     * @param {Object} objects Group objects
     * @param {Object} [options] Options object
     */
    new (items?: any[], options?: IObjectOptions): IGroup;
    /**
     * Returns {@link fabric.Group} instance from an object representation
     * @param {Object} object Object to create a group from
     * @param {Function} [callback] Callback to invoke when an group instance is created
     */
    fromObject(object: any, callback: (group: IGroup) => any): void;
  }

  interface IImageOptions extends IObjectOptions {
    /**
     * crossOrigin value (one of "", "anonymous", "allow-credentials")
     */
    crossOrigin: string;

    /**
     * AlignX value, part of preserveAspectRatio (one of "none", "mid", "min", "max")
     * This parameter defines how the picture is aligned to its viewport when image element width differs from image width.
     */
    alignX: string;

    /**
     * AlignY value, part of preserveAspectRatio (one of "none", "mid", "min", "max")
     * This parameter defines how the picture is aligned to its viewport when image element height differs from image height.
     */
    alignY: string;

    /**
     * meetOrSlice value, part of preserveAspectRatio  (one of "meet", "slice").
     * if meet the image is always fully visibile, if slice the viewport is always filled with image.
     * @see http://www.w3.org/TR/SVG/coords.html#PreserveAspectRatioAttribute
     */
    meetOrSlice: string;

    /**
     * Image filter array 
     */
    filters: IFilter[];
  }
  interface IImage extends IObject, IImageOptions {
    initialize(element?: string|HTMLImageElement, options?: IImageOptions);
    /**
    * Applies filters assigned to this image (from "filters" array)
    * @param {Function} callback Callback is invoked when all filters have been applied and new image is generated
    */
    applyFilters(callback: Function);
    /**
     * Returns a clone of an instance
     * @param {Function} callback Callback is invoked with a clone as a first argument
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     */
    clone(callback?: Function, propertiesToInclude?: any[]): IObject;
    /**
     * Returns complexity of an instance
     * @return {Number} complexity of this instance
     */
    complexity(): number;
    /**
     * Returns image element which this instance if based on
     * @return {HTMLImageElement} Image element
     */
    getElement(): HTMLImageElement;
    /**
     * Returns original size of an image
     * @return {Object} Object with "width" and "height" properties
     */
    getOriginalSize(): { width: number; height: number; };
    /**
     * Returns source of an image
     * @return {String} Source of an image
     */
    getSrc(): string;
    render(ctx: CanvasRenderingContext2D, noTransform: boolean);

    /**
    * Sets image element for this instance to a specified one.
    * If filters defined they are applied to new image.
    * You might need to call `canvas.renderAll` and `object.setCoords` after replacing, to render new image and update controls area.
    * @param {HTMLImageElement} element
    * @param {Function} [callback] Callback is invoked when all filters have been applied and new image is generated
    * @param {Object} [options] Options object
    */
    setElement(element: HTMLImageElement, callback: Function, options: IImageOptions): IImage;
    /**
     * Sets crossOrigin value (on an instance and corresponding image element)
     */
    setCrossOrigin(value): IImage;
    /**
     * Returns object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} Object representation of an instance
     */
    toObject(propertiesToInclude?: any[]): any;
    /**
     * Returns string representation of an instance
     * @return {String} String representation of an instance
     */
    toString(): string;
    /**
     * Returns SVG representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG(reviver?: Function): string;
    /**
     * Sets source of an image
     * @param {String} src Source string (URL)
     * @param {Function} [callback] Callback is invoked when image has been loaded (and all filters have been applied)
     * @param {Object} [options] Options object
     */
    setSrc(src: string, callback: Function, options: IImageOptions): IImage;
  }
  interface IImageStatic {
    /**
     * Constructor
     * @param {HTMLImageElement | String} element Image element
     * @param {Object} [options] Options object
     */
    new (element: HTMLImageElement, objObjects: IObjectOptions): IImage;
    /**
   * Creates an instance of fabric.Image from an URL string
   * @param {String} url URL to create an image from
   * @param {Function} [callback] Callback to invoke when image is created (newly created image is passed as a first argument)
   * @param {Object} [imgOptions] Options object
   */
    fromURL(url: string, callback?: (image: IImage) => any, objObjects?: IObjectOptions): IImage;
    /**
   * Creates an instance of fabric.Image from its object representation
   * @static
   * @param {Object} object Object to create an instance from
   * @param {Function} [callback] Callback to invoke when an image instance is created
   */
    fromObject(object: any, callback: (image: IImage) => {}): void;
    /**
   * Returns Image instance from an SVG element
   * @param {SVGElement} element Element to parse
   * @param {Function} callback Callback to execute when fabric.Image object is created
   * @param {Object} [options] Options object
   */
    fromElement(element: SVGElement, callback: Function, options?: IImageOptions): void;
    prototype: any;
    /**
   * Default CSS class name for canvas
   */
    CSS_CANVAS: string;

    filters: IAllFilters
  }

  interface ILineOptions extends IObjectOptions {
    /**
     * x value or first line edge
     */
    x1: number;
    /**
     * x value or second line edge
     */
    x2: number;
    /**
     * y value or first line edge
     */
    y1: number;
    /**
     * y value or second line edge
     */
    y2: number;
  }
  interface ILine extends IObject, ILineOptions {
    /**
     * Returns complexity of an instance
     * @return {Number} complexity
     */
    complexity(): number;
    initialize(points?: number[], options?: ILineOptions): ILine;
    /**
     * Returns object representation of an instance
     * @methd toObject
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toObject(propertiesToInclude: any[]): any;
    /**
     * Returns SVG representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG(reviver?: Function): string;
  }
  interface ILineStatic {
    ATTRIBUTE_NAMES: string[];
    /**
   * Returns fabric.Line instance from an SVG element
   * @param {SVGElement} element Element to parse
   * @param {Object} [options] Options object
   */
    fromElement(element: SVGElement, options?: ILineOptions): ILine;
    /**
   * Returns fabric.Line instance from an object representation
   * @param {Object} object Object to create an instance from
   */
    fromObject(object): ILine;
    prototype: any;
    /**
     * Constructor
     * @param {Array} [points] Array of points
     * @param {Object} [options] Options object
     */
    new (points?: number[], objObjects?: IObjectOptions): ILine;
  }

  interface IObjectOptions {
    /**
    * Type of an object (rect, circle, path, etc.).
    * Note that this property is meant to be read-only and not meant to be modified.
    * If you modify, certain parts of Fabric (such as JSON loading) won't work correctly.
    */
    type?: string;

    /**
    * Horizontal origin of transformation of an object (one of "left", "right", "center") 
    */
    originX?: string;

    /**
    * Vertical origin of transformation of an object (one of "top", "bottom", "center") 
    */
    originY?: string;

    /**
    * Top position of an object. Note that by default it's relative to object center. You can change this by setting originY={top/center/bottom} 
    */
    top?: number;

    /**
    * Left position of an object. Note that by default it's relative to object center. You can change this by setting originX={left/center/right} 
    */
    left?: number;

    /**
    * Object width 
    */
    width?: number;

    /**
    * Object height 
    */
    height?: number;

    /**
    * Object scale factor (horizontal) 
    */
    scaleX?: number;

    /**
    * Object scale factor (vertical) 
    */
    scaleY?: number;

    /**
    * When true, an object is rendered as flipped horizontally 
    */
    flipX?: boolean;

    /**
    * When true, an object is rendered as flipped vertically 
    */
    flipY?: boolean;

    /**
    * Opacity of an object 
    */
    opacity?: number;

    /**
    * Angle of rotation of an object (in degrees)   
    */
    angle?: number;

    /**
    * Size of object's controlling corners (in pixels)   
    */
    cornerSize?: number;

    /**
    * When true, object's controlling corners are rendered as transparent inside (i.e. stroke instead of fill)  
    */
    transparentCorners?: boolean;

    /**
    * Default cursor value used when hovering over this object on canvas   
    */
    hoverCursor?: string;

    /**
    * Padding between object and its controlling borders (in pixels)   
    */
    padding?: number;

    /**
    * Color of controlling borders of an object (when it's active)   
    */
    borderColor?: string;

    /**
    * Color of controlling corners of an object (when it's active)   
    */
    cornerColor?: string;

    /**
    * When true, this object will use center point as the origin of transformation
    * when being scaled via the controls.
    * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
    */
    centeredScaling?: boolean;

    /**
    * When true, this object will use center point as the origin of transformation
    * when being rotated via the controls.
    * <b>Backwards incompatibility note:</b> This property replaces "centerTransform" (Boolean).
    */
    centeredRotation?: boolean;

    /**
    * Color of object's fill  
    */
    fill?: string;

    /**
    * Fill rule used to fill an object
    * accepted values are nonzero, evenodd
    * <b>Backwards incompatibility note:</b> This property was used for setting globalCompositeOperation until v1.4.12 (use `fabric.Object#globalCompositeOperation` instead)
    */
    fillRule?: string;

    /**
    * Composite rule used for canvas globalCompositeOperation   
    */
    globalCompositeOperation?: string;

    /**
    * Background color of an object. Only works with text objects at the moment. 
    */
    backgroundColor?: string;

    /**
    * When defined, an object is rendered via stroke and this property specifies its color   
    */
    stroke?: string;

    /**
    * Width of a stroke used to render this object  
    */
    strokeWidth?: number;

    /**
    * Array specifying dash pattern of an object's stroke (stroke must be defined)   
    */
    strokeDashArray?: any[];

    /**
    * Line endings style of an object's stroke (one of "butt", "round", "square") 
    */
    strokeLineCap?: string;

    /**
    * Corner style of an object's stroke (one of "bevil", "round", "miter")   
    */
    strokeLineJoin?: string;

    /**
    * Maximum miter length (used for strokeLineJoin = "miter") of an object's stroke 
    */
    strokeMiterLimit?: number;

    /**
    * Shadow object representing shadow of this shape 
    */
    shadow?: IShadow|string;

    /**
    * Opacity of object's controlling borders when object is active and moving 
    */
    borderOpacityWhenMoving?: number;

    /**
    * Scale factor of object's controlling borders 
    */
    borderScaleFactor?: number;

    /**
    * Transform matrix (similar to SVG's transform matrix) 
    */
    transformMatrix?: any[];

    /**
    * Minimum allowed scale value of an object 
    */
    minScaleLimit?: number;

    /**
    * When set to `false`, an object can not be selected for modification (using either point-click-based or group-based selection).
    * But events still fire on it.
    */
    selectable?: boolean;

    /**
    * When set to `false`, an object can not be a target of events. All events propagate through it. Introduced in v1.3.4 
    */
    evented?: boolean;

    /**
    * When set to `false`, an object is not rendered on canvas 
    */
    visible?: boolean;

    /**
    * When set to `false`, object's controls are not displayed and can not be used to manipulate object 
    */
    hasControls?: boolean;

    /**
    * When set to `false`, object's controlling borders are not rendered 
    */
    hasBorders?: boolean;

    /**
    * When set to `false`, object's controlling rotating point will not be visible or selectable 
    */
    hasRotatingPoint?: boolean;

    /**
    * Offset for object's controlling rotating point (when enabled via `hasRotatingPoint`) 
    */
    rotatingPointOffset?: number;

    /**
    * When set to `true`, objects are "found" on canvas on per-pixel basis rather than according to bounding box 
    */
    perPixelTargetFind?: boolean;

    /**
    * When `false`, default object's values are not included in its serialization 
    */
    includeDefaultValues?: boolean;

    /**
    * Function that determines clipping of an object (context is passed as a first argument)
    * Note that context origin is at the object's center point (not left/top corner)
    * @type Function
    */
    clipTo?: Function;

    /**
    * When `true`, object horizontal movement is locked 
    */
    lockMovementX?: boolean;

    /**
    * When `true`, object vertical movement is locked 
    */
    lockMovementY?: boolean;

    /**
    * When `true`, object rotation is locked 
    */
    lockRotation?: boolean;

    /**
    * When `true`, object horizontal scaling is locked 
    */
    lockScalingX?: boolean;

    /**
    * When `true`, object vertical scaling is locked 
    */
    lockScalingY?: boolean;

    /**
    * When `true`, object non-uniform scaling is locked 
    */
    lockUniScaling?: boolean;

    /**
    * When `true`, object cannot be flipped by scaling into negative values 
    */
    lockScalingFlip?: boolean;

    /**
    * Not used by fabric, just for convenience 
    */
    name?: string;

    /**
    * Not used by fabric, just for convenience 
    */
    data?: any;
  }
  interface IObject extends IObservable<IObject>, IObjectOptions, IObjectAnimation<IObject> {


    getCurrentWidth(): number;
    getCurrentHeight(): number;

    getAngle(): number;
    setAngle(value: number): IObject;

    getBorderColor(): string;
    setBorderColor(value: string): IObject;

    getBorderScaleFactor(): number;


    getCornersize(): number;
    setCornersize(value: number): IObject;

    getFill(): string;
    setFill(value: string): IObject;

    getFillRule(): string;
    setFillRule(value: string): IObject;

    getFlipX(): boolean;
    setFlipX(value: boolean): IObject;

    getFlipY(): boolean;
    setFlipY(value: boolean): IObject;

    getHeight(): number;
    setHeight(value: number): IObject;

    getLeft(): number;
    setLeft(value: number): IObject;

    getOpacity(): number;
    setOpacity(value: number): IObject;

    overlayFill: string;
    getOverlayFill(): string;
    setOverlayFill(value: string): IObject;

    getScaleX(): number;
    setScaleX(value: number): IObject;

    getScaleY(): number;
    setScaleY(value: number): IObject;

    setShadow(options: any): IObject;
    getShadow(): IObject;

    stateProperties: any[];
    getTop(): number;
    setTop(value: number): IObject;

    getWidth(): number;
    setWidth(value: number): IObject;

    /* * Sets object's properties from options
    * @param {Object} [options] Options object
    */
    setOptions(options: any): void;

    /**
    * Transforms context when rendering an object
    * @param {CanvasRenderingContext2D} ctx Context
    * @param {Boolean} fromLeft When true, context is transformed to object's top/left corner. This is used when rendering text on Node
    */
    transform(ctx: CanvasRenderingContext2D, fromLeft: boolean): void;

    /**
    * Returns an object representation of an instance
    * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
    */
    toObject(propertiesToInclude?: any[]): any; 

    /**
    * Returns (dataless) object representation of an instance
    * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
    */
    toDatalessObject(propertiesToInclude?: any[]): any;

    /**
    * Returns a string representation of an instance 
    */
    toString(): string;

    /**
    * Basic getter
    * @param {String} property Property name
    */
    get(property: string): any;

    /**
    * Sets property to a given value. When changing position/dimension -related properties (left, top, scale, angle, etc.) `set` does not update position of object's borders/controls.
    * If you need to update those, call `setCoords()`.
    * @param {String|Object} key Property name or object (if object, iterate over the object properties)
    * @param {Object|Function} value Property value (if function, the value is passed into it and its return value is used as a new one)
    */
    set(key: string|any, value: any|Function): IObject;

    /**
    * Toggles specified property from `true` to `false` or from `false` to `true`
    * @param {String} property Property to toggle
    */
    toggle(property: string): IObject;

    /**
    * Sets sourcePath of an object
    * @param {String} value Value to set sourcePath to
    */
    setSourcePath(value): IObject

    /**
    * Retrieves viewportTransform from Object's canvas if possible
    * @method getViewportTransform
    * @memberOf fabric.Object.prototype
    */
    getViewportTransform(): boolean;
     

    /**
    * Renders an object on a specified context
    * @param {CanvasRenderingContext2D} ctx Context to render on
    * @param {Boolean} [noTransform] When true, context is not transformed
    */
    render(ctx: CanvasRenderingContext2D, noTransform?: boolean): void;

    /**
    * Clones an instance
    * @param {Function} callback Callback is invoked with a clone as a first argument
    * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
    */
    clone(callback: Function, propertiesToInclude?: any[]): IObject;

    /**
    * Creates an instance of fabric.Image out of an object
    * @param {Function} callback callback, invoked with an instance as a first argument
    */
    cloneAsImage(callback: (image: IImage) => any): IObject;
    

    /**
    * Converts an object into a data-url-like string
    * @param options Options object
    */
    toDataURL(options: IDataURLOptions): string;

    /**
    * Returns true if specified type is identical to the type of an instance
    * @param {String} type Type to check against
    */
    isType(type: string): boolean;

    /**
    * Returns complexity of an instance
    */
    complexity(): number;

    /**
    * Returns a JSON representation of an instance
    * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
    */
    toJSON(propertiesToInclude?: any[]): any;


    
    /**
    * Sets gradient (fill or stroke) of an object
    * <b>Backwards incompatibility note:</b> This method was named "setGradientFill" until v1.1.0
    * @param {String} property Property name 'stroke' or 'fill'
    * @param {Object} [options] Options object
    */
    setGradient(property: string, options: IGradientOptions): IObject; 

    /**
    * Sets pattern fill of an object
    * @param {Object} options Options object
    */
    setPatternFill(options: IFillOptions): IObject;

    /**
    * Sets shadow of an object
    * @param {String} [options] Options object or string (e.g. "2px 2px 10px rgba(0,0,0,0.2)")
    */
    setShadow(options?: string): IObject;
    /**
    * Sets shadow of an object
    * @param [options] Options object
    */
    setShadow(options: IShadow): IObject;

    /**
    * Sets "color" of an instance (alias of `set('fill', …)`)
    * @param {String} color Color value
    */
    setColor(color: string): IObject;

    /**
    * Sets "angle" of an instance
    * @param {Number} angle Angle value
    */
    setAngle(angle: number): IObject

    /**
    * Sets "angle" of an instance
    * @param {Number} angle Angle value
    */
    rotate(angle: number): IObject

    /**
    * Centers object horizontally on canvas to which it was added last.
    * You might need to call `setCoords` on an object after centering, to update controls area.
    */
    centerH(): void;

    /**
    * Centers object vertically on canvas to which it was added last.
    * You might need to call `setCoords` on an object after centering, to update controls area.
    */
    centerV(): void;

    /**
    * Centers object vertically and horizontally on canvas to which is was added last
    * You might need to call `setCoords` on an object after centering, to update controls area.
    */
    center(): void;

    /**
    * Removes object from canvas to which it was added last
    */
    remove(): IObject;

    /**
    * Returns coordinates of a pointer relative to an object
    * @param {Event} e Event to operate upon
    * @param {Object} [pointer] Pointer to operate upon (instead of event)
    */
    getLocalPointer(e: Event, pointer: any): any;

    // methods
    bringForward(intersecting?: boolean): IObject;
    bringToFront(): IObject;
    drawBorders(context: CanvasRenderingContext2D): IObject;
    drawCorners(context: CanvasRenderingContext2D): IObject;
    getBoundingRect(): { left: number; top: number; width: number; height: number };
    getBoundingRectHeight(): number;
    getBoundingRectWidth(): number;
    getSvgStyles(): string;
    getSvgTransform(): string;
    hasStateChanged(): boolean;
    initialize(options: any);
    intersectsWithObject(other: IObject): boolean;
    intersectsWithRect(selectionTL: any, selectionBR: any): boolean;
    isActive(): boolean;
    isContainedWithinObject(other: IObject): boolean;
    isContainedWithinRect(selectionTL: any, selectionBR: any): boolean;
    saveState(): IObject;
    scale(value: number): IObject;
    scaleToHeight(value: number): IObject;
    scaleToWidth(value: number): IObject;
    sendBackwards(intersecting?: boolean): IObject;
    sendToBack(): IObject;

    setActive(active: boolean): IObject;
    setCoords();
    setOptions(options: any);
    setSourcePath(value: string): IObject;
    toGrayscale(): IObject;
  }
  interface IObjectStatic {
    prototype: any;
  }

  interface IPathOptions extends IObjectOptions {
    /**
     * Array of path points
     */
    path?: any[];

    /**
     * Minimum X from points values, necessary to offset points
     */
    minX?: number;

    /**
     * Minimum Y from points values, necessary to offset points
     */
    minY?: number;
  }
  interface IPath extends IObject, IPathOptions {
    initialize(path?: any[], options?: IPathOptions): IPath;

    /**
     * Returns number representation of an instance complexity
     * @return {Number} complexity of this instance
     */
    complexity(): number;

    /**
     * Renders path on a specified context
     * @param {CanvasRenderingContext2D} ctx context to render path on
     * @param {Boolean} [noTransform] When true, context is not transformed
     */
    render(ctx: CanvasRenderingContext2D, noTransform: boolean): void;
    /**
     * Returns dataless object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toDatalessObject(propertiesToInclude?: any[]): any;
    /**
     * Returns object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toObject(propertiesToInclude?: any[]): any;
    /**
     * Returns string representation of an instance
     * @return {String} string representation of an instance
     */
    toString(): string;
    /**
     * Returns svg representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG(reviver?: Function): string;
  }
  interface IPathStatic {
    /**
     * Creates an instance of fabric.Path from an SVG <path> element
     * @param {SVGElement} element to parse
     * @param {Function} callback Callback to invoke when an fabric.Path instance is created
     * @param {Object} [options] Options object
     */
    fromElement(element: SVGElement, callback: (path: IPath) => any, options?: IPathOptions): void;
    /**
     * Creates an instance of fabric.Path from an object
     * @param {Object} object
     * @param {Function} callback Callback to invoke when an fabric.Path instance is created
     */
    fromObject(object: any, callback: (path: IPath) => any): void;
    /**
     * Constructor
     * @param {Array|String} path Path data (sequence of coordinates and corresponding "command" tokens)
     * @param {Object} [options] Options object
     */
    new (path?: string|any[], options?: IPathOptions): IPath;
  }

  interface IPathGroup extends IObject {
    initialize(paths: IPath[], options?: IObjectOptions);
    /**
     * Returns number representation of object's complexity
     * @return {Number} complexity
     */
    complexity(): number;
    /**
     * Returns true if all paths in this group are of same color
     * @return {Boolean} true if all paths are of the same color (`fill`)
     */
    isSameColor(): boolean;
    /**
    * Renders this group on a specified context
    * @param {CanvasRenderingContext2D} ctx Context to render this instance on
    */
    render(ctx: CanvasRenderingContext2D);
    /**
     * Returns dataless object representation of this path group
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} dataless object representation of an instance
     */
    toDatalessObject(propertiesToInclude?: any[]): any;
    toGrayscale(): IPathGroup;
    /**
    * Returns object representation of this path group
    * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
    * @return {Object} object representation of an instance
    */
    toObject(propertiesToInclude?: any[]): any;
    /**
     * Returns a string representation of this path group
     * @return {String} string representation of an object
     */
    toString(): string;
    /**
     * Returns svg representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG(reviver?: Function): string;
    /**
     * Returns all paths in this path group
     * @return {Array} array of path objects included in this path group
     */
    getObjects(): IPath[];
  }
  interface IPathGroupStatic {
    fromObject(object): IPathGroup;
    /**
     * Constructor
     * @param {Array} paths
     * @param {Object} [options] Options object
     */
    new (paths: IPath[], options?: IObjectOptions): IPathGroup;
    /**
   * Creates fabric.PathGroup instance from an object representation
   * @static
   * @memberOf fabric.PathGroup
   * @param {Object} object Object to create an instance from
   * @param {Function} callback Callback to invoke when an fabric.PathGroup instance is created
   */
    fromObject(object: any, callback: (group: IPathGroup) => any): void;
    prototype: any;
  }

  interface IPolygonOptions extends IObjectOptions {
    /**
     * Points array
     */
    points?: IPoint[]

    /**
     * Minimum X from points values, necessary to offset points
     */
    minX?: number;

    /**
     * Minimum Y from points values, necessary to offset points
     */
    minY?: number;
  }
  interface IPolygon extends IObject, IPolygonOptions {
    /**
     * Returns complexity of an instance
     * @return {Number} complexity of this instance
     */
    complexity(): number;

    /**
     * Returns object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toObject(propertiesToInclude?: any[]): any;
    /**
     * Returns svg representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG(reviver?: Function): string;
  }
  interface IPolygonStatic {
    /**
    * List of attribute names to account for when parsing SVG element (used by `fabric.Polygon.fromElement`)
    */
    ATTRIBUTE_NAMES: string[];

    /**
     * Returns Polygon instance from an SVG element
     * @param {SVGElement} element Element to parse
     * @param {Object} [options] Options object
     */
    fromElement(element: SVGElement, options?: IPolygonOptions): IPolygon;
    /**
   * Returns fabric.Polygon instance from an object representation
   * @param {Object} object Object to create an instance from
   */
    fromObject(object: any): IPolygon;
    /**
     * Constructor
     * @param {Array} points Array of points
     * @param {Object} [options] Options object
     */
    new (points: { x: number; y: number }[], options?: IObjectOptions, skipOffset?: boolean): IPolygon;
    prototype: any;
  }

  interface IPolylineOptions extends IObjectOptions {
    /**
     * Points array
     */
    points?: IPoint[]

    /**
     * Minimum X from points values, necessary to offset points
     */
    minX?: number;

    /**
     * Minimum Y from points values, necessary to offset points
     */
    minY?: number;
  }
  interface IPolyline extends IObject, IPolylineOptions {
    initialize(points: IPoint[], options?: IPolylineOptions);
    /**
     * Returns complexity of an instance
     * @return {Number} complexity of this instance
     */
    complexity(): number;
    /**
     * Returns object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} Object representation of an instance
     */
    toObject(propertiesToInclude?: any[]): any;
    /**
     * Returns SVG representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG(reviver?: Function): string;
  }
  interface IPolylineStatic {
    /**
    * List of attribute names to account for when parsing SVG element (used by `fabric.Polygon.fromElement`)
    */
    ATTRIBUTE_NAMES: string[];

    /**
     * Returns Polyline  instance from an SVG element
     * @param {SVGElement} element Element to parse
     * @param {Object} [options] Options object
     */
    fromElement(element: SVGElement, options?: IPolylineOptions): IPolyline;
    /**
   * Returns fabric.Polyline instance from an object representation
   * @param {Object} object Object to create an instance from
   */
    fromObject(object: any): IPolyline;
    /**
     * Constructor
     * @param {Array} points Array of points (where each point is an object with x and y)
     * @param {Object} [options] Options object
     * @param {Boolean} [skipOffset] Whether points offsetting should be skipped
     */
    new (points: { x: number; y: number }[], options?: IPolylineOptions): IPolyline;
    prototype: any;
  }

  interface IRectOptions extends IObjectOptions {
    x?: number;
    y?: number;
    /**
     * Horizontal border radius
     */
    rx?: number;

    /**
     * Vertical border radius
     */
    ry?: number;

  }
  interface IRect extends IObject, IRectOptions {
    initialize(points?: number[], options?: any): IRect;
    /**
     * Returns complexity of an instance
     * @return {Number} complexity
     */
    complexity(): number;
    /**
     * Returns object representation of an instance
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toObject(propertiesToInclude: any[]): any;
    /**
     * Returns svg representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG(reviver?: Function): string;
  }
  interface IRectStatic {
    /**
   * List of attribute names to account for when parsing SVG element (used by `fabric.Rect.fromElement`)
   */
    ATTRIBUTE_NAMES: string[];
    /**
   * Returns Rect instance from an SVG element
   * @param {SVGElement} element Element to parse
   * @param {Object} [options] Options object
   */
    fromElement(element: SVGElement, options?: IRectOptions): IRect;
    /**
   * Returns Rect instance from an object representation
   * @param {Object} object Object to create an instance from
   */
    fromObject(object: any): IRect;
    /**
     * Constructor
     * @param {Object} [options] Options object
     */
    new (options?: IRectOptions): IRect;
    prototype: any;
  }

  interface ITextOptions extends IObjectOptions {
    /**
     * Font size (in pixels)
     */
    fontSize?: number;
    /**
     * Font weight (e.g. bold, normal, 400, 600, 800)
     */
    fontWeight?: number|string;
    /**
    * Font family
    */
    fontFamily?: string;
    /**
     * Text decoration Possible values?: "", "underline", "overline" or "line-through".
     */
    textDecoration?: string;
    /**
     * Text alignment. Possible values?: "left", "center", or "right".
     */
    textAlign?: string;
    /**
     * Font style . Possible values?: "", "normal", "italic" or "oblique".
     */
    fontStyle?: string;
    /**
     * Line height
     */
    lineHeight?: number;
    /**
    * When defined, an object is rendered via stroke and this property specifies its color.
    * <b>Backwards incompatibility note?:</b> This property was named "strokeStyle" until v1.1.6
    */
    stroke?: string;
    /**
     * Shadow object representing shadow of this shape.
     * <b>Backwards incompatibility note?:</b> This property was named "textShadow" (String) until v1.2.11
     */
    shadow?: IShadow|string;
    /**
     * Background color of text lines
     * @type String
     * @default
     */
    textBackgroundColor?: string;

    path?: string;
    useNative?: Boolean;
    text?: string;
  }
  interface IText extends IObject, ITextOptions {


    initialize(text: string, options?: IITextOptions): IText;
    /**
     * Returns complexity of an instance
     * @return {Number} complexity
     */
    complexity(): number;
    /**
    * Returns string representation of an instance
    * @return {String} String representation of text object
    */
    toString(): string;
    /**
     * Renders text instance on a specified context
     * @param {CanvasRenderingContext2D} ctx Context to render on
     */
    render(ctx: CanvasRenderingContext2D, noTransform: boolean);
    /**
     * Returns object representation of an instance
     * @method toObject
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toObject(propertiesToInclude?: any[]): IObject;
    /**
     * Returns SVG representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG(reviver?: Function): string;
    /**
     * Retrieves object's fontSize
     */
    getFontSize(): number;
    /**
     * Sets object's fontSize
     * @param {Number} fontSize Font size (in pixels)
     */
    setFontSize(fontSize): IText;
    /**
     * Retrieves object's fontWeight
     */
    getFontWeight(): number|string;
    /**
     * Sets object's fontWeight
     * @method setFontWeight
     * @param {(Number|String)} fontWeight Font weight
     */
    setFontWeight(fontWeight: string|number): IText;
    /**
     * Retrieves object's fontFamily
     */
    getFontFamily(): string;
    /**
     * Sets object's fontFamily
     * @param {String} fontFamily Font family
     */
    setFontFamily(fontFamily: string): IText;
    /**
     * Retrieves object's text
     */
    getText(): string;
    /**
     * Sets object's text
     * @param {String} text Text
     */
    setText(text: string): IText;
    /**
     * Retrieves object's textDecoration
     */
    getTextDecoration(): string;
    /**
     * Sets object's textDecoration
     * @param {String} textDecoration Text decoration
     */
    setTextDecoration(textDecoration: string): IText;
    /**
     * Retrieves object's fontStyle
     */
    getFontStyle(): string;
    /**
     * Sets object's fontStyle
     * @param {String} fontStyle Font style
     */
    setFontStyle(fontStyle: string): IText;
    /**
     * Retrieves object's lineHeight
     */
    getLineHeight(): number;
    /**
     * Sets object's lineHeight
     * @param {Number} lineHeight Line height
     */
    setLineHeight(lineHeight: number): IText;
    /**
     * Retrieves object's textAlign
     */
    getTextAlign(): string;
    /**
     * Sets object's textAlign
     * @param {String} textAlign Text alignment
     */
    setTextAlign(textAlign: string): IText;
    /**
     * Retrieves object's textBackgroundColor
     */
    getTextBackgroundColor(): string;
    /**
     * Sets object's textBackgroundColor
     * @param {String} textBackgroundColor Text background color
     */
    setTextBackgroundColor(textBackgroundColor: string): IText;

  }
  interface ITextStatic {
    /**
  * List of attribute names to account for when parsing SVG element (used by `fabric.Text.fromElement`)
  */
    ATTRIBUTE_NAMES: string[];
    /**
     * Default SVG font size
     */
    DEFAULT_SVG_FONT_SIZE: number;
    /**
     * Constructor
     * @param {String} text Text string
     * @param {Object} [options] Options object
     */
    new (text: string, options?: ITextOptions): IText;

    /**
     * Returns fabric.Text instance from an SVG element (<b>not yet implemented</b>)
     * @param {SVGElement} element Element to parse
     * @param {Object} [options] Options object
     */
    fromElement(element: SVGElement, options?: ITextOptions): IText
    
    /**
     * Returns fabric.Text instance from an object representation
     * @param {Object} object Object to create an instance from
     */
    fromObject(object: any): IText;
  }

  interface IITextOptions extends IObjectOptions, ITextOptions {
    /**
     * Index where text selection starts (or where cursor is when there is no selection)
     */
    selectionStart?: number;

    /**
     * Index where text selection ends
     */
    selectionEnd?: number;

    /**
     * Color of text selection
     */
    selectionColor?: string;

    /**
     * Indicates whether text is in editing mode
     */
    isEditing?: boolean;

    /**
     * Indicates whether a text can be edited
     */
    editable?: boolean;

    /**
     * Border color of text object while it's in editing mode
     */
    editingBorderColor?: string;

    /**
     * Width of cursor (in px)
     */
    cursorWidth?: number;

    /**
     * Color of default cursor (when not overwritten by character style)
     */
    cursorColor?: string;

    /**
     * Delay between cursor blink (in ms)
     */
    cursorDelay?: number;

    /**
     * Duration of cursor fadein (in ms)
     */
    cursorDuration?: number;

    /**
     * Object containing character styles
     * (where top-level properties corresponds to line number and 2nd-level properties -- to char number in a line)
     */
    styles?: any;

    /**
     * Indicates whether internal text char widths can be cached
     */
    caching?: boolean;
  }
  interface IIText extends IObject, IText, IITextOptions {
    initialize(text?: string, options?: IITextOptions): IText;

    /**
    * Returns true if object has no styling
    */
    isEmptyStyles(): boolean;
    render(ctx: CanvasRenderingContext2D, noTransform: boolean);
    /**
     * Returns object representation of an instance
     * @method toObject
     * @param {Array} [propertiesToInclude] Any properties that you might want to additionally include in the output
     * @return {Object} object representation of an instance
     */
    toObject(propertiesToInclude?: any[]): IObject;

    setText(value: string): IText;
    /**
     * Sets selection start (left boundary of a selection)
     * @param {Number} index Index to set selection start to
     */
    setSelectionStart(index: number): void;
    /**
     * Sets selection end (right boundary of a selection)
     * @param {Number} index Index to set selection end to
     */
    setSelectionEnd(index: number): void;
    /**
    * Gets style of a current selection/cursor (at the start position)
    * @param {Number} [startIndex] Start index to get styles at
    * @param {Number} [endIndex] End index to get styles at
    * @return {Object} styles Style object at a specified (or current) index
    */
    getSelectionStyles(startIndex: number, endIndex: number): any;
    /**
     * Sets style of a current selection
     * @param {Object} [styles] Styles object
     * @return {fabric.IText} thisArg
     * @chainable
     */
    setSelectionStyles(styles: any): IText;

    /**
    * Renders cursor or selection (depending on what exists)
    */
    renderCursorOrSelection(): void;

    /**
     * Returns 2d representation (lineIndex and charIndex) of cursor (or selection start)
     * @param {Number} [selectionStart] Optional index. When not given, current selectionStart is used.
     */
    get2DCursorLocation(selectionStart?: number): void;
    /**
     * Returns complete style of char at the current cursor
     * @param {Number} lineIndex Line index
     * @param {Number} charIndex Char index
    * @return {Object} Character style
     */
    getCurrentCharStyle(lineIndex: number, charIndex: number): any;

    /**
     * Returns fontSize of char at the current cursor
     * @param {Number} lineIndex Line index
     * @param {Number} charIndex Char index
     * @return {Number} Character font size
     */
    getCurrentCharFontSize(lineIndex: number, charIndex: number): number;

    /**
     * Returns color (fill) of char at the current cursor
     * @param {Number} lineIndex Line index
     * @param {Number} charIndex Char index
     * @return {String} Character color (fill)
     */
    getCurrentCharColor(lineIndex: number, charIndex: number): string;
    /**
     * Renders cursor
     * @param {Object} boundaries
     */
    renderCursor(boundaries): void;

    /**
    * Renders text selection
    * @param {Array} chars Array of characters
    * @param {Object} boundaries Object with left/top/leftOffset/topOffset
    */
    renderSelection(chars: string[], boundaries: any): void;

  }
  interface IITextStatic extends ITextStatic {
    /**
     * Constructor
     * @param {String} text Text string
     * @param {Object} [options] Options object
     */
    new (text: string, options?: IITextOptions): IIText;
    /**
   * Returns fabric.IText instance from an object representation
   * @param {Object} object Object to create an instance from
   */
    fromObject(object: any): IIText;
  }

  interface ITriangleOptions extends IObjectOptions { }
  interface ITriangle extends IObject {
    initialize(options: IObjectOptions): ITriangle;
    
    /**
     * Returns complexity of an instance
     * @return {Number} complexity of this instance
     */

    complexity(): number;
    /**
     * Returns SVG representation of an instance
     * @param {Function} [reviver] Method for further parsing of svg representation.
     * @return {String} svg representation of an instance
     */
    toSVG(reviver?: Function): string;
  }
  interface ITriangleStatic {
    /**
     * Constructor
     * @param {Object} [options] Options object
     */
    new (options?: ITriangleOptions): ITriangle;
    /**
   * Returns Triangle instance from an object representation
   * @param {Object} object Object to create an instance from
   */
    fromObject(object: any): ITriangle;
  }

  ////////////////////////////////////////////////////////////
  // Filters
  ////////////////////////////////////////////////////////////
  interface IAllFilters {
    BaseFilter: {
      /**
       * Constructor
       * @param {Object} [options] Options object
       */
      new (options?: any): IBaseFilter;
    }
  }
  interface IBaseFilter {
    /**
     * Sets filter's properties from options
     * @param {Object} [options] Options object
     */
    setOptions(options?: any): void;
    /**
     * Returns object representation of an instance
     */
    toObject(): any; 

    /**
     * Returns a JSON representation of an instance
     */
    toJSON(): string;
  }
}
interface IBrightnessFilter {
}
interface IInvertFilter {
}
interface IRemoveWhiteFilter {
}
interface IGrayscaleFilter {
}
interface ISepiaFilter {
}
interface ISepia2Filter {
}
interface INoiseFilter {
}
interface IGradientTransparencyFilter {
}
interface IPixelateFilter {
}
interface IConvoluteFilter {
}


///////////////////////////////////////////////////////////////////////////////
// Fabric util Interface
//////////////////////////////////////////////////////////////////////////////
interface IUtilAnimationOptions {
  /**
  * Starting value
  */
  startValue?: number;
  /**
  * Ending value
  */
  endValue?: number;
  /** 
   * Value to modify the property by
   */
  byValue: number;
  /**
  * Duration of change (in ms)
  */
  duration?: number;
  /**
  * Callback; invoked on every value change
  */
  onChange?: Function;
  /**
  * Callback; invoked when value change is completed
  */
  onComplete?: Function
  /**
  * Easing function
  */
  easing?: Function;
}
interface IUtilAnimation {
  /**
  * Changes value from one to another within certain period of time, invoking callbacks as value is being changed.
  * @param {Object} [options] Animation options
  */
  animate(options?: IUtilAnimationOptions): void;
  /**
 * requestAnimationFrame polyfill based on http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 * In order to get a precise start time, `requestAnimFrame` should be called as an entry into the method
 * @param {Function} callback Callback to invoke
 */
  requestAnimFrame(callback: Function): void;
}

interface IUtilAnimEase {
  easeInBack(): Function;
  easeInBounce(): Function;
  easeInCirc(): Function;
  easeInCubic(): Function;
  easeInElastic(): Function;
  easeInExpo(): Function;
  easeInOutBack(): Function;
  easeInOutBounce(): Function;
  easeInOutCirc(): Function;
  easeInOutCubic(): Function;
  easeInOutElastic(): Function;
  easeInOutExpo(): Function;
  easeInOutQuad(): Function;
  easeInOutQuart(): Function;
  easeInOutQuint(): Function;
  easeInOutSine(): Function;
  easeInQuad(): Function;
  easeInQuart(): Function;
  easeInQuint(): Function;
  easeInSine(): Function;
  easeOutBack(): Function;
  easeOutBounce(): Function;
  easeOutCirc(): Function;
  easeOutCubic(): Function;
  easeOutElastic(): Function;
  easeOutExpo(): Function;
  easeOutQuad(): Function;
  easeOutQuart(): Function;
  easeOutQuint(): Function;
  easeOutSine(): Function;
}

interface IUtilArc {
  /**
   * Draws arc
   * @param {CanvasRenderingContext2D} ctx
   * @param {Number} fx
   * @param {Number} fy
   * @param {Array} coords
   */
  drawArc(ctx: CanvasRenderingContext2D, fx: number, fy: number, coords: number[]): void;
  /**
   * Calculate bounding box of a elliptic-arc
   * @param {Number} fx start point of arc
   * @param {Number} fy
   * @param {Number} rx horizontal radius
   * @param {Number} ry vertical radius
   * @param {Number} rot angle of horizontal axe
   * @param {Number} large 1 or 0, whatever the arc is the big or the small on the 2 points
   * @param {Number} sweep 1 or 0, 1 clockwise or counterclockwise direction
   * @param {Number} tx end point of arc
   * @param {Number} ty
   */
  getBoundsOfArc(fx: number, fy: number, rx: number, ry: number, rot: number, large: number, sweep: number, tx: number, ty: number): IPoint[];
  /**
   * Calculate bounding box of a beziercurve
   * @param {Number} x0 starting point
   * @param {Number} y0
   * @param {Number} x1 first control point
   * @param {Number} y1
   * @param {Number} x2 secondo control point
   * @param {Number} y2
   * @param {Number} x3 end of beizer
   * @param {Number} y3
   */
  getBoundsOfCurve(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): IPoint[];

}

interface IUtilDomEvent {
  /**
 * Cross-browser wrapper for getting event's coordinates
 * @param {Event} event Event object
 * @param {HTMLCanvasElement} upperCanvasEl &lt;canvas> element on which object selection is drawn
 */
  getPointer(event: Event, upperCanvasEl: HTMLCanvasElement): IPoint;

  /**
 * Adds an event listener to an element
 * @param {HTMLElement} element
 * @param {String} eventName
 * @param {Function} handler
 */
  addListener(element: HTMLElement, eventName: string, handler: Function): void;

  /**
 * Removes an event listener from an element
 * @param {HTMLElement} element
 * @param {String} eventName
 * @param {Function} handler
 */
  removeListener(element: HTMLElement, eventName: string, handler: Function): void;
}

interface IUtilDomMisc {
  /**
   * Takes id and returns an element with that id (if one exists in a document)
   * @param {String|HTMLElement} id
   */
  getById(id: string|HTMLElement): HTMLElement;
  /**
  * Converts an array-like object (e.g. arguments or NodeList) to an array
  * @param {Object} arrayLike
  */
  toArray(arrayLike: any): any[];
  /**
   * Creates specified element with specified attributes
   * @memberOf fabric.util
   * @param {String} tagName Type of an element to create
   * @param {Object} [attributes] Attributes to set on an element
   * @return {HTMLElement} Newly created element
   */
  makeElement(tagName: string, attributes?: any): HTMLElement;
  /**
   * Adds class to an element
   * @param {HTMLElement} element Element to add class to
   * @param {String} className Class to add to an element
   */
  addClass(element: HTMLElement, classname: string): void;
  /**
   * Wraps element with another element
   * @param {HTMLElement} element Element to wrap
   * @param {HTMLElement|String} wrapper Element to wrap with
   * @param {Object} [attributes] Attributes to set on a wrapper
   */
  wrapElement(element: HTMLElement, wrapper: HTMLElement|string, attributes?: any): HTMLElement;
  /**
 * Returns element scroll offsets
 * @param {HTMLElement} element Element to operate on
 * @param {HTMLElement} upperCanvasEl Upper canvas element
 */
  getScrollLeftTop(element: HTMLElement, upperCanvasEl: HTMLElement): { left: number; right: number; }
  /**
   * Returns offset for a given element
   * @param {HTMLElement} element Element to get offset for
   */
  getElementOffset(element: HTMLElement): { left: number; right: number; }
  /**
    * Returns style attribute value of a given element
    * @param {HTMLElement} element Element to get style attribute for
    * @param {String} attr Style attribute to get for element
    */
  getElementStyle(elment: HTMLElement, attr: string): string;
  /**
  * Inserts a script element with a given url into a document; invokes callback, when that script is finished loading
  * @memberOf fabric.util
  * @param {String} url URL of a script to load
  * @param {Function} callback Callback to execute when script is finished loading
  */
  getScript(url: string, callback: Function): void;
  /**
   * Makes element unselectable
   * @param {HTMLElement} element Element to make unselectable
   */
  makeElementUnselectable(element: HTMLElement): HTMLElement;
  /**
   * Makes element selectable
   * @param {HTMLElement} element Element to make selectable
   */
  makeElementSelectable(element: HTMLElement): HTMLElement;
}

interface IUtilDomRequest {
  /**
 * Cross-browser abstraction for sending XMLHttpRequest
 * @param {String} url URL to send XMLHttpRequest to
 * @param {Object} [options] Options object
 * @param {String} [options.method="GET"]
 * @param {Function} options.onComplete Callback to invoke when request is completed
 */
  request(url: string, options?: { method?: string; onComplete: Function }): XMLHttpRequest;
}

interface IUtilDomStyle {
  /**
   * Cross-browser wrapper for setting element's style
   * @param {HTMLElement} element
   * @param {Object} styles
   */
  setStyle(element: HTMLElement, styles: any): HTMLElement;
}

interface IUtilArray {
  /**
   * Invokes method on all items in a given array
   * @param {Array} array Array to iterate over
   * @param {String} method Name of a method to invoke
   */
  invoke(array: any[], method: string): any[];
  /**
   * Finds minimum value in array (not necessarily "first" one)
   * @param {Array} array Array to iterate over
   * @param {String} byProperty
   */
  min(array: any[], byProperty: string): any;
  /**
 * Finds maximum value in array (not necessarily "first" one)
 * @param {Array} array Array to iterate over
 * @param {String} byProperty
 */
  max(array: any[], byProperty: string): any;
}

interface IUtilClass {
  /**
   * Helper for creation of "classes".
   * @param {Function} [parent] optional "Class" to inherit from
   * @param {Object} [properties] Properties shared by all instances of this class
   *                  (be careful modifying objects defined here as this would affect all instances)
   */
  createClass(parent: Function, properties?: any);
  /**
   * Helper for creation of "classes".
   * @param {Object} [properties] Properties shared by all instances of this class
   *                  (be careful modifying objects defined here as this would affect all instances)
   */
  createClass(properties?: any);

}

interface IUtilObject {
  /**
  * Copies all enumerable properties of one object to another
  * @param {Object} destination Where to copy to
  * @param {Object} source Where to copy from
  */
  extend(destination: any, source: any): any;

  /**
   * Creates an empty object and copies all enumerable properties of another object to it
   * @memberOf fabric.util.object
   * @param {Object} object Object to clone
   * @return {Object}
   */
  clone(object: any): any
}

interface IUtilString {
  /**
   * Camelizes a string
   * @param {String} string String to camelize
   */
  camelize(string: string): string;

  /**
   * Capitalizes a string
   * @param {String} string String to capitalize
   * @param {Boolean} [firstLetterOnly] If true only first letter is capitalized
   * and other letters stay untouched, if false first letter is capitalized
   * and other letters are converted to lowercase.
   */
  capitalize(string: string, firstLetterOnly: boolean): string;

  /**
   * Escapes XML in a string
   * @param {String} string String to escape
   */
  escapeXml(string: string): string;
}

interface IUtilMisc {
  /**
   * Removes value from an array.
   * Presence of value (and its position in an array) is determined via `Array.prototype.indexOf`
   * @param {Array} array
   * @param {Any} value
   */
  removeFromArray(array: any[], value: any): any[];

  /**
   * Returns random number between 2 specified ones.
   * @param {Number} min lower limit
   * @param {Number} max upper limit
   */
  getRandomInt(min: number, max: number): number;

  /**
   * Transforms degrees to radians.
   * @param {Number} degrees value in degrees
   */
  degreesToRadians(degrees: number): number;

  /**
   * Transforms radians to degrees.
   * @memberOf fabric.util
   * @param {Number} radians value in radians
   */
  radiansToDegrees(radians: number): number;

  /**
   * Rotates `point` around `origin` with `radians`
   * @param {fabric.Point} point The point to rotate
   * @param {fabric.Point} origin The origin of the rotation
   * @param {Number} radians The radians of the angle for the rotation
   */
  rotatePoint(point: IPoint, origin: IPoint, radians: number): IPoint;

  /**
   * Apply transform t to point p
   * @param  {fabric.Point} p The point to transform
   * @param  {Array} t The transform
   * @param  {Boolean} [ignoreOffset] Indicates that the offset should not be applied
   */
  transformPoint(p: IPoint, t: any[], ignoreOffset?: boolean): IPoint

  /**
   * Invert transformation t
   * @param {Array} t The transform
   */
  invertTransform(t: any[]): any[];

  /**
   * A wrapper around Number#toFixed, which contrary to native method returns number, not string.
   * @param {Number|String} number number to operate on
   * @param {Number} fractionDigits number of fraction digits to "leave"
   */
  toFixed(number: number, fractionDigits: number): number;

  /**
   * Converts from attribute value to pixel value if applicable.
   * Returns converted pixels or original value not converted.
   * @param {Number|String} value number to operate on
   */
  parseUnit(value: number|string, fontSize?: number): number|string;

  /**
   * Function which always returns `false`.
   */
  falseFunction(): boolean

  /**
   * Returns klass "Class" object of given namespace
   * @param {String} type Type of object (eg. 'circle')
   * @param {String} namespace Namespace to get klass "Class" object from
   */
  getKlass(type: string, namespace: string): any;

  /**
   * Returns object of given namespace
   * @param {String} namespace Namespace string e.g. 'fabric.Image.filter' or 'fabric'
   */
  resolveNamespace(namespace: string): any;

  /**
   * Loads image element from given url and passes it to a callback
   * @param {String} url URL representing an image
   * @param {Function} callback Callback; invoked with loaded image
   * @param {Any} [context] Context to invoke callback in
   * @param {Object} [crossOrigin] crossOrigin value to set image element to
   */
  loadImage(url: string, callback: (image: HTMLImageElement) => {}, context?: any, crossOrigin?: boolean): void;

  /**
   * Creates corresponding fabric instances from their object representations
   * @param {Array} objects Objects to enliven
   * @param {Function} callback Callback to invoke when all objects are created
   * @param {String} namespace Namespace to get klass "Class" object from
   * @param {Function} reviver Method for further parsing of object elements, called after each fabric object created.
   */
  enlivenObjects(objects: any[], callback: Function, namespace: string, reviver?: Function): void;

  /**
   * Groups SVG elements (usually those retrieved from SVG document)
   * @param {Array} elements SVG elements to group
   * @param {Object} [options] Options object
   */
  groupSVGElements(elements: any[], options?: any, path?: any): IPathGroup

  /**
   * Populates an object with properties of another object
   * @param {Object} source Source object
   * @param {Object} destination Destination object
   * @param {Array} properties Propertie names to include
   */
  populateWithProperties(source: any, destination: any, properties: any): void;

  /**
   * Draws a dashed line between two points
   *
   * This method is used to draw dashed line around selection area.
   *
   * @param {CanvasRenderingContext2D} ctx context
   * @param {Number} x  start x coordinate
   * @param {Number} y start y coordinate
   * @param {Number} x2 end x coordinate
   * @param {Number} y2 end y coordinate
   * @param {Array} da dash array pattern
   */
  drawDashedLine(ctx: CanvasRenderingContext2D, x: number, y: number, x2: number, y2: number, da: any[]): void;

  /**
   * Creates canvas element and initializes it via excanvas if necessary
   * @param {CanvasElement} [canvasEl] optional canvas element to initialize;
   * when not given, element is created implicitly
   */
  createCanvasElement(canvasEl?: HTMLCanvasElement): HTMLCanvasElement;

  /**
   * Creates image element (works on client and node)
   */
  createImage(): HTMLImageElement;

  /**
   * Creates accessors (getXXX, setXXX) for a "class", based on "stateProperties" array
   * @param {Object} klass "Class" to create accessors for
   */
  createAccessors(klass: any): any;

  /**
   * @param {fabric.Object} receiver Object implementing `clipTo` method
   * @param {CanvasRenderingContext2D} ctx Context to clip
   */
  clipContext(receiver: IObject, ctx: CanvasRenderingContext2D): void;

  /**
   * Multiply matrix A by matrix B to nest transformations
   * @param  {Array} a First transformMatrix
   * @param  {Array} b Second transformMatrix
   */
  multiplyTransformMatrices(a: any[], b: any[]): any[]

  /**
   * Returns string representation of function body
   * @param {Function} fn Function to get body of
   */
  getFunctionBody(fn: Function): string;

  /**
   * Returns true if context has transparent pixel
   * at specified location (taking tolerance into account)
   * @param {CanvasRenderingContext2D} ctx context
   * @param {Number} x x coordinate
   * @param {Number} y y coordinate
   * @param {Number} tolerance Tolerance
   */
  isTransparent(ctx: CanvasRenderingContext2D, x: number, y: number, tolerance: number): boolean;
}


interface Util extends IUtilAnimation, IUtilArc, IObservable<Util>, IUtilDomEvent, IUtilDomMisc,
  IUtilDomRequest, IUtilDomStyle, IUtilClass, IUtilMisc {
  ease: IUtilAnimEase;
  array: IUtilArray;
  object: IUtilObject;
  string: IUtilString;
}
}
