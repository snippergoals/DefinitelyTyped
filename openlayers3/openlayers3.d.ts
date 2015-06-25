﻿// Type definitions for OpenLayers v3.6.0
// Project: http://openlayers.org/
// Definitions by: Wouter Goedhart <https://github.com/woutergd>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/**
 * A high-performance, feature-packed library for all your mapping needs.
 */
declare module ol {

    /**
     * An attribution for a layer source.
     */
    class Attribution {
        /**
         * @constructor
         * @param options Attribution options.
         */
        constructor(options: AttributionOptions);

        /** 
         * Get the attribution markup. 
         * @returns The attribution HTML.
         */
        getHTML(): string;
    }
    interface AttributionOptions {

        /** HTML markup for this attribution. */
        html: string;
    }

    /**
     * An expanded version of standard JS Array, adding convenience methods for manipulation. Add and remove changes to the Collection trigger a Collection event. Note that this does not cover changes to the objects within the Collection; they trigger events on the appropriate object, not on the Collection as a whole.
     */
    class Collection<T> extends ol.Object {

        /**
         * @constructor
         * @param values Array.
         */
        constructor(values: Array<T>)

        /**
         * Remove all elements from the collection.
         */
        clear(): void;

        /**
         * Add elements to the collection. This pushes each item in the provided array to the end of the collection.
         * @param arr Array.
         * @returns This collection.
         */
        extend(arr: Array<T>): Collection<T>;

        /**
         * Iterate over each element, calling the provided callback.
         * @param f The function to call for every element. This function takes 3 arguments (the element, the index and the array).
         * @param ref The object to use as this in f.
         */
        forEach(f: (element: T, index: number, array: Array<T>) => void, ref?: any): void;

        /**
         * Get a reference to the underlying Array object. Warning: if the array is mutated, no events will be dispatched by the collection, and the collection's "length" property won't be in sync with the actual length of the array.
         * @returns Array.
         */
        getArray(): Array<T>;

        /**
         * Get the length of this collection.
         * @returns The length of the array.
         */
        getLength(): number;

        /**
         * Insert an element at the provided index.
         * @param index Index.
         * @param elem Element.
         */
        insertAt(index: number, elem: T): void;

        /**
         * Get the element at the provided index.
         * @param index Index.
         * @returns Element.
         */
        item(index: number): T;

        /** 
         * Remove the last element of the collection and return it. Return undefined if the collection is empty.
         * @returns Element
         */
        pop(): T;

        /**
         * Insert the provided element at the end of the collection.
         * @param Element.
         * @returns Length.
         */
        push(elem: T): number;

        /**
         * Remove the first occurrence of an element from the collection.
         * @param elem Element.
         * @returns The removed element or undefined if none found.
         */
        remove(elem: T): T;

        /**
         * Remove the element at the provided index and return it. Return undefined if the collection does not contain this index.
         * @param index Index.
         * @returns Value.
         */
        removeAt(index: number): T;

        /** 
         * Set the element at the provided index.
         * @param index Index.
         * @param elem Element.
         */
        setAt(index: number, elem: T): void;
    }

    /**
     * Events emitted by ol.Collection instances are instances of this type.
     */
    class CollectionEvent<T> {

        /**
         * The element that is added to or removed from the collection.
         */
        element: T;
    }

    /**
     * The ol.DeviceOrientation class provides access to information from DeviceOrientation events.
     */
    class DeviceOrientation extends ol.Object {

        /**
         * @constructor
         * @param options Options.
         */
        constructor(options: DeviceOrientationOptions);

        /**
         * Rotation around the device z-axis (in radians).
         * @returns The euler angle in radians of the device from the standard Z axis. 
         */
        getAlpha(): number;

        /**
         * Rotation around the device x-axis (in radians).
         * @returns The euler angle in radians of the device from the planar X axis.
         */
        getBeta(): number;

        /**
         * Rotation around the device y-axis (in radians).
         * @returns The euler angle in radians of the device from the planar Y axis. 
         */
        getGamma(): number;

        /**
         * The heading of the device relative to north (in radians).
         * @returns The heading of the device relative to north, in radians, normalizing for different browser behavior.
         */
        getHeading(): number;

        /**
         * Determine if orientation is being tracked.
         * @returns Changes in device orientation are being tracked.
         */
        getTracking(): boolean;

        /**
         * Enable or disable tracking of device orientation events.
         * @param tracking The status of tracking changes to alpha, beta and gamma. If true, changes are tracked and reported immediately. 
         */
        setTracking(tracking: boolean): void;
    }
    interface DeviceOrientationOptions {

        /**
         * Start tracking. Default is false.
         */
        tracking?: boolean;
    }

    /**
     * Events emitted by ol.interaction.DragBox instances are instances of this type.
     */
    class DragBoxEvent {

        /**
         * The coordinate of the drag event.
         */
        coordinate: ol.Coordinate;
    }

    /**
     * A vector object for geographic features with a geometry and other attribute properties, similar to the features in vector file formats like GeoJSON.
     */
    class Feature extends ol.Object {

        /**
         * @constructor
         * @param geometry Geometry.
         */
        constructor(geometry: ol.geom.Geometry);

        /**
         * Clone this feature. If the original feature has a geometry it is also cloned. The feature id is not set in the clone.
         * @returns The clone.
         */
        clone(): Feature;

        /**
         * Get the feature's default geometry. A feature may have any number of named geometries. The "default" geometry (the one that is rendered by default) is set when calling ol.Feature#setGeometry.
         * @returns The default geometry for the feature.
         */
        getGeometry(): ol.geom.Geometry;

        /**
         * Get the name of the feature's default geometry. By default, the default geometry is named geometry.
         * @returns Get the property name associated with the default geometry for this feature.
         */
        getGeometryName(): string;

        /**
         * @returns Id.
         */
        getId(): string;

        /**
         * Get the feature's style. This return for this method depends on what was provided to the ol.Feature#setStyle method.
         * The feature style.
         */
        // TODO: Implement FeatureStyleFunction
        getStyle(): ol.style.Style | Array<ol.style.Style> | any;

        /**
         * Get the feature's style function.
         * @returns Return a function representing the current style of this feature.
         */
        // TODO: Implement FeatureStyleFunction
        getStyleFunction(): any;

        /**
         * Set the default geometry for the feature. This will update the property with the name returned by ol.Feature#getGeometryName.
         * @param geometry The new geometry.
         */
        setGeometry(geometry: ol.geom.Geometry): void;

        /**
         * Set the property name to be used when getting the feature's default geometry. When calling ol.Feature#getGeometry, the value of the property with this name will be returned.
         * @param name The property name of the default geometry.
         */
        setGeometryName(name: string): void;

        /**
         * Set the feature id. The feature id is considered stable and may be used when requesting features or comparing identifiers returned from a remote source. The feature id can be used with the ol.source.Vector#getFeatureById method.
         * @param id The feature id.
         */
        setId(id: number): void;
        setId(id: string): void;

        /**
         * Set the style for the feature. This can be a single style object, an array of styles, or a function that takes a resolution and returns an array of styles. If it is null the feature has no style (a null style).
         * @param style Style for this feature.
         */
        // TODO: Implement FeatureStyleFunction
        setStyle(style: ol.style.Style): void;
        setStyle(style: Array<ol.style.Style>): void;
        setStyle(style: any): void;
    }

    /**
     * A mechanism for changing the style of a small number of features on a temporary basis, for example highlighting.
     */
    class FeatureOverlay {

        /**
         * @constructor
         * @param options Options.
         */
        constructor(options: FeatureOverlayOptions);

        /**
         * Add a feature to the overlay.
         * @param feature Feature.
         */
        addFeature(feature: ol.Feature): void;

        /**
         * Get the features on the overlay.
         * @returns Features collection.
         */
        getFeatures: ol.Collection<ol.Feature>;

        /**
         * Get the map associated with the overlay.
         * @returns The map with which this feature overlay is associated. 
         */
        getMap(): ol.Map;

        /**
         * Get the style for features. This returns whatever was passed to the style option at construction or to the setStyle method.
         * @returns Overlay style.
         */
        // TODO: implement stylefunction
        getStyle(): ol.style.Style | Array<ol.style.Style> | any;

        /**
         * Get the style function
         * @returns Style function
         */
        getStyleFunction(): any;

        /**
         * Remove a feature from the overlay.
         * @param feature The feature to be removed.
         */
        removeFeature(feature: ol.Feature): void;

        /**
         * Set the features for the overlay.
         * @param features Features collection.
         */
        setFeatures(features: ol.Collection<ol.Feature>): void;

        /**
         * Set the map for the overlay.
         * @param map Map.
         */
        setMap(map: ol.Map): void;

        /**
         * Set the style for features. This can be a single style object, an array of styles, or a function that takes a feature and resolution and returns an array of styles.
         * @param style Overlay style
         */
        // TODO: implement stylefunction
        setStyle(style: ol.style.Style): void;
        setStyle(style: Array<ol.style.Style>): void;
        setStyle(style: any): void;
    }
    interface FeatureOverlayOptions {
        
        /**
         * Features
         */
        // TODO: implement stylefunction
        features?: Array<ol.Feature> | Collection<ol.Feature> | any;

        /**
         * Map
         */
        map: Map;

        /**
         * Style
         */
        style: style.Style | Array<style.Style>;
    }

    /**
     * Helper class for providing HTML5 Geolocation capabilities. The Geolocation API is used to locate a user's position.
     */
    class Geolocation extends ol.Object {

        /**
         * @constructor
         * @param options Options.
         */
        constructor(options: GeolocationOptions);

        /**
         * Get the accuracy of the position in meters.
         * @returns The accuracy of the position measurement in meters.
         */
        getAccuracy(): number;

        /**
         * Get a geometry of the position accuracy.
         * @returns A geometry of the position accuracy. 
         */
        getAccuracyGeometry(): ol.geom.Geometry;

        /**
         * Get the altitude associated with the position.
         * @returns The altitude of the position in meters above mean sea level. 
         */
        getAltitude(): number;

        /**
         * Get the altitude accuracy of the position.
         * @returns The accuracy of the altitude measurement in meters. 
         */
        getAltitudeAccuracy(): number;

        /**
         * Get the heading as radians clockwise from North.
         * @returns The heading of the device in radians from north.
         */
        getHeading(): number;

        /**
         * Get the position of the device.
         * @returns The current position of the device reported in the current projection.
         */
        getPosition(): ol.Coordinate;

        /**
         * Get the projection associated with the position.
         * @returns The projection the position is reported in. 
         */
        getProjection(): ol.proj.Projection;

        /**
         * Get the speed in meters per second.
         * @returns The instantaneous speed of the device in meters per second.
         */
        getSpeed(): number;

        /**
         * Determine if the device location is being tracked.
         * @returns The device location is being tracked. 
         */
        getTracking(): boolean;

        /**
         * Get the tracking options.
         * @returns PositionOptions as defined by the HTML5 Geolocation spec.
         */
        getTrackingOptions(): PositionOptions;

        /**
         * Set the projection to use for transforming the coordinates.
         * @param projection The projection the position is reported in.
         */
        setProjection(projection: ol.proj.Projection): void;

        /**
         * Enable or disable tracking.
         * @param tracking Enable tracking
         */
        setTracking(tracking: boolean): void;

        /**
         * Set the tracking options.
         * @param PositionOptions as defined by the HTML5 Geolocation spec.
         */
        setTrackingOptions(options: PositionOptions): void;
    }
    interface GeolocationOptions {

        /**
         * Start Tracking. Default is false.
         */
        tracking?: boolean;

        /**
         * Tracking options. See http://www.w3.org/TR/geolocation-API/#position_options_interface.
         */
        trackingOptions?: PositionOptions;

        /**
         * The projection the position is reported in.
         */
        projection?: ol.proj.ProjectionLike;
    }

    /**
     * Render a grid for a coordinate system on a map.
     */
    class Graticule {
        /**
         * @constructor
         * @param options Options.
         */
        constructor(options: GraticuleOptions);

        /** 
         * Get the map associated with this graticule. 
         * @returns The map.
         */
        getMap(): Map;

        /** 
         * Get the list of meridians. Meridians are lines of equal longitude. 
         * @returns The meridians.
         */
        getMeridians(): Array<ol.geom.LineString>;

        /** 
         * Get the list of parallels. Pallels are lines of equal latitude. 
         * @returns The parallels.
         */
        getParallels(): Array<ol.geom.LineString>;
    
        /** 
         * Set the map for this graticule.The graticule will be rendered on the provided map. 
         * @param map Map
         */
        setMap(map: Map): void;
    }
    interface GraticuleOptions {

        /** Reference to an ol.Map object. */
        map?: Map;

        /** The maximum number of meridians and parallels from the center of the map. The default value is 100, which means that at most 200 meridians and 200 parallels will be displayed. The default value is appropriate for conformal projections like Spherical Mercator. If you increase the value more lines will be drawn and the drawing performance will decrease. */
        maxLines?: number;

        /** The stroke style to use for drawing the graticule. If not provided, the lines will be drawn with rgba(0,0,0,0.2), a not fully opaque black. */
        strokeStyle?: style.Stroke;

        /** The target size of the graticule cells, in pixels. Default value is 100 pixels. */
        targetSize?: number;
    }

    /**
     * 
     */
    class Image extends ol.ImageBase {

        /**
         * Get the HTML image element (may be a Canvas, Image, or Video).
         * @param context Object.
         * @returns Image.
         */
        getImage(context: HTMLCanvasElement | HTMLImageElement | HTMLVideoElement): Image;
    }

    /**
     * 
     */
    class ImageBase {
    }

    /**
     * 
     */
    class ImageTile extends ol.Tile {

        /**
         * Get the HTML image element for this tile (may be a Canvas, Image, or Video).
         * @param context Object.
         * @returns Image.
         */
        getImage(context: HTMLCanvasElement | HTMLImageElement | HTMLVideoElement): Image;
    }

    /**
     * Implementation of inertial deceleration for map movement.
     */
    class Kinetic {

        /**
         * @constructor
         * @param decay Rate of decay (must be negative).
         * @param Minimum velocity (pixels/millisecond).
         * @param Delay to consider to calculate the kinetic initial values (milliseconds).
         */
        constructor(decay: number, minVelocity: number, delay: number);
    }

    /**
     * The map is the core component of OpenLayers. For a map to render, a view, one or more layers, and a target container are needed.
     */
    class Map extends ol.Object {

        /**
         * @constructor
         * @params options Options.
         */
        constructor(options: MapOptions);

        /**
         * Add the given control to the map.
         * @param control Control.
         */
        addControl(control: ol.control.Control): void;

        /**
         * Add the given interaction to the map.
         * @param interaction Interaction to add.
         */
        addInteraction(interaction: ol.interaction.Interaction): void;

        /**
         * Adds the given layer to the top of this map. If you want to add a layer elsewhere in the stack, use getLayers() and the methods available on ol.Collection.
         * @param Layer.
         */
        addLayer(layer: ol.layer.Base): void;

        /**
         * Add the given overlay to the map.
         * @param overlay Overlay.
         */
        addOverlay(overlay: ol.Overlay): void;

        /**
         * Add functions to be called before rendering. This can be used for attaching animations before updating the map's view. The ol.animation namespace provides several static methods for creating prerender functions.
         * @param var_args Any number of pre-render functions.
         */
        // TODO: Implement PreRenderFunction
        beforeRender(var_args: any): void;

        /**
         * Detect features that intersect a pixel on the viewport, and execute a callback with each intersecting feature. Layers included in the detection can be configured through opt_layerFilter. Feature overlays will always be included in the detection.
         * @param pixel Pixel.
         * @param callback Feature callback. The callback will be called with two arguments. The first argument is one feature at the pixel, the second is the layer of the feature. If the detected feature is not on a layer, but on a ol.FeatureOverlay, then the second argument to this function will be null. To stop detection, callback functions can return a truthy value.
         * @param ref Value to use as this when executing callback.
         * @param layerFilter Layer filter function. The filter function will receive one argument, the layer-candidate and it should return a boolean value. Only layers which are visible and for which this function returns true will be tested for features. By default, all visible layers will be tested. Feature overlays will always be tested.
         * @param ref2 Value to use as this when executing layerFilter.
         * @returns Callback result, i.e. the return value of last callback execution, or the first truthy callback return value. 
         */
        forEachFeatureAtPixel(pixel: ol.Pixel, callback: (feature: ol.Feature, layer: ol.layer.Layer) => any, ref?: any, layerFilter?: (layerCandidate: ol.layer.Layer) => boolean, ref2?: any): void;

        /**
         * Detect layers that have a color value at a pixel on the viewport, and execute a callback with each matching layer. Layers included in the detection can be configured through opt_layerFilter. Feature overlays will always be included in the detection.
         * @param pixel Pixel.
         * @param callback Layer callback. Will receive one argument, the layer that contains the color pixel. If the detected color value is not from a layer, but from a ol.FeatureOverlay, then the argument to this function will be null. To stop detection, callback functions can return a truthy value.
         * @param ref Value to use as this when executing callback.
         * @param layerFilter Layer filter function. The filter function will receive one argument, the layer-candidate and it should return a boolean value. Only layers which are visible and for which this function returns true will be tested for features. By default, all visible layers will be tested. Feature overlays will always be tested.
         * @param ref2 Value to use as this when executing layerFilter.
         * @returns Callback result, i.e. the return value of last callback execution, or the first truthy callback return value. 
         */
        forEachLayerAtPixel(pixel: ol.Pixel, callback: (layer: ol.layer.Layer) => any, ref?: any, layerFilter?: (layerCandidate: ol.layer.Layer) => boolean, ref2?: any): void;

        /**
         * Get the map controls. Modifying this collection changes the controls associated with the map.
         * @returns Controls.
         */
        getControls(): ol.Collection<ol.control.Control>;

        /**
         * Get the coordinate for a given pixel. This returns a coordinate in the map view projection.
         * @param pixel Pixel position in the map viewport.
         * @returns The coordinate for the pixel position. 
         */
        getCoordinateFromPixel(pixel: ol.Pixel): ol.Coordinate;

        /**
         * Returns the geographical coordinate for a browser event.
         * @param event Event.
         * @returns Coordinate.
         */
        getEventCoordinate(event: Event): ol.Coordinate;

        /**
         * Returns the map pixel position for a browser event relative to the viewport.
         * @param event Event.
         * @returns Pixel.
         */
        getEventPixel(event: Event): ol.Pixel;

        /**
         * Get the map interactions. Modifying this collection changes the interactions associated with the map.
         * @returns Interactions
         */
        getInteractions(): ol.Collection<ol.interaction.Interaction>;

        /**
         * Get the layergroup associated with this map.
         * @returns A layer group containing the layers in this map. 
         */
        getLayerGroup(): ol.layer.Group;

        /**
         * Get the collection of layers associated with this map.
         * @returns Layers.
         */
        getLayers(): ol.Collection<ol.layer.Base>;

        /**
         * Get the map overlays. Modifying this collection changes the overlays associated with the map.
         * @returns Overlays.
         */
        getOverlays(): ol.Collection<ol.Overlay>;

        /**
         * Get the pixel for a coordinate. This takes a coordinate in the map view projection and returns the corresponding pixel.
         * @param coordinate A map coordinate.
         * @returns A pixel position in the map viewport.
         */
        getPixelFromCoordinate(coordinate: ol.Coordinate): ol.Pixel;

        /**
         * Get the size of this map.
         * @returns The size in pixels of the map in the DOM. 
         */
        getSize(): ol.Size;

        /**
         * Get the target in which this map is rendered. Note that this returns what is entered as an option or in setTarget: if that was an element, it returns an element; if a string, it returns that.
         * @returns The Element or id of the Element that the map is rendered in. 
         */
        getTarget(): Element | string;

        /**
         * Get the DOM element into which this map is rendered. In contrast to getTarget this method always return an Element, or null if the map has no target.
         * @returns The element that the map is rendered in.
         */
        getTargetElement(): Element;

        /** 
         * Get the view associated with this map. A view manages properties such as center and resolution. 
         * @returns The view that controls this map.
         */
        getView(): View;

        /**
         * Get the element that serves as the map viewport.
         * @returns Viewport.
         */
        getViewport(): Element;

        /**
         * Detect if features intersect a pixel on the viewport. Layers included in the detection can be configured through opt_layerFilter. Feature overlays will always be included in the detection.
         * @param pixel Pixel.
         * @param layerFilter Layer filter function. The filter function will receive one argument, the layer-candidate and it should return a boolean value. Only layers which are visible and for which this function returns true will be tested for features. By default, all visible layers will be tested. Feature overlays will always be tested.
         * @param ref Value to use as this when executing layerFilter.
         * @returns Is there a feature at the given pixel?
         */
        hasFeatureAtPixel(pixel: ol.Pixel, layerFilter?: (layer: ol.layer.Layer) => boolean, ref?: any): boolean;

        /**
         * Remove the given control from the map.
         * @param Control.
         * @returns The removed control (or undefined if the control was not found). 
         */
        removeControl(control: ol.control.Control): ol.control.Control;

        /**
         * Remove the given interaction from the map.
         * @param interaction Interaction to remove.
         * @returns The removed interaction (or undefined if the interaction was not found). 
         */
        removeInteraction(interaction: ol.interaction.Interaction): ol.interaction.Interaction;

        /**
         * Removes the given layer from the map.
         * @param Layer.
         * @returns The removed layer (or undefined if the layer was not found). 
         */
        removeLayer(layer: ol.layer.Base): ol.layer.Base;

        /**
         * Remove the given overlay from the map.
         * @param Overlay.
         * @returns The removed overlay (or undefined if the overlay was not found).
         */
        removeOverlay(overlay: ol.Overlay): ol.Overlay;

        /**
         * Request a map rendering (at the next animation frame).
         */
        render(): void;

        /**
         * Requests an immediate render in a synchronous manner.
         */
        renderSync(): void;

        /**
         * Sets the layergroup of this map.
         * @param layerGroup A layer group containing the layers in this map.
         */
        setLayerGroup(layerGroup: ol.layer.Group): void;

        /**
         * Set the size of this map.
         * @param size The size in pixels of the map in the DOM.
         */
        setSize(size: ol.Size): void;

        /**
         * Set the target element to render this map into.
         * @param target The Element or id of the Element that the map is rendered in.
         */
        setTarget(target: Element): void;
        setTarget(target: string): void;

        /** 
         * Set the view for this map. 
         * @param view The view that controls this map.
         */
        setView(view: View): void;

        /** 
         * Force a recalculation of the map viewport size. This should be called when third-party code changes the size of the map viewport. 
         * */
        updateSize(): void;
    }
    interface MapOptions {

        /** Controls initially added to the map. If not specified, ol.control.defaults() is used. */
        controls?: any;

        /** The ratio between physical pixels and device-independent pixels (dips) on the device. If undefined then it gets set by using window.devicePixelRatio. */
        pixelRatio?: number;

        /** Interactions that are initially added to the map. If not specified, ol.interaction.defaults() is used. */
        interactions?: any;

        /** The element to listen to keyboard events on. This determines when the KeyboardPan and KeyboardZoom interactions trigger. For example, if this option is set to document the keyboard interactions will always trigger. If this option is not specified, the element the library listens to keyboard events on is the map target (i.e. the user-provided div for the map). If this is not document the target element needs to be focused for key events to be emitted, requiring that the target element has a tabindex attribute. */
        keyboardEventTarget?: any;

        /** Layers. If this is not defined, a map with no layers will be rendered. Note that layers are rendered in the order supplied, so if you want, for example, a vector layer to appear on top of a tile layer, it must come after the tile layer. */
        layers?: Array<any>

        /** When set to true, tiles will be loaded during animations. This may improve the user experience, but can also make animations stutter on devices with slow memory. Default is false. */
        loadTilesWhileAnimating?: boolean;

        /** When set to true, tiles will be loaded while interacting with the map. This may improve the user experience, but can also make map panning and zooming choppy on devices with slow memory. Default is false. */
        loadTilesWhileInteracting?: boolean;

        /** The map logo. A logo to be displayed on the map at all times. If a string is provided, it will be set as the image source of the logo. If an object is provided, the src property should be the URL for an image and the href property should be a URL for creating a link. To disable the map logo, set the option to false. By default, the OpenLayers 3 logo is shown. */
        logo?: any;

        /** Overlays initially added to the map. By default, no overlays are added. */
        overlays?: any;

        /** Renderer. By default, Canvas, DOM and WebGL renderers are tested for support in that order, and the first supported used. Specify a ol.RendererType here to use a specific renderer. Note that at present only the Canvas renderer supports vector data. */
        renderer?: any;

        /** The container for the map, either the element itself or the id of the element. If not specified at construction time, ol.Map#setTarget must be called for the map to be rendered. */
        target?: any;

        /** The map's view. No layer sources will be fetched unless this is specified at construction time or through ol.Map#setView. */
        view?: ViewOptions;
    }

    /**
     * Events emitted as map browser events are instances of this type. See ol.Map for which events trigger a map browser event.
     */
    class MapBrowserEvent extends MapEvent {

        /**
         * The coordinate of the original browser event
         */
        coordinate: Coordinate;

        /**
         * Indicates if the map is currently being dragged. Only set for POINTERDRAG and POINTERMOVE events. Default is false.
         */
        dragging: boolean;
        
        /**
         * The frame state at the time of the event
         */
        // TODO: Replace with olx.FrameState
        frameState: any;

        /**
         * The map where the event occured
         */
        map: Map;

        /**
         * The original browser event
         */
        originalEvent: Event;

        /** 
         * The pixel of the original browser event.
         */
        pixel: Pixel;

        
        // Methods

        /**
         * Prevents the default browser action.
         */
        preventDefault(): void;

        /**
         * Prevents further propagation of the current event.
         */
        stopPropagation(): void;
    }

    /**
     * Events emitted as map events are instances of this type. See ol.Map for which events trigger a map event.
     */
    class MapEvent {

        /**
         * The frame state at the time of the event.
         */
        // TODO: Replace with olx.FrameState
        frameState: any;

        /**
         * The map where the event occurred.
         */
        map: Map;
    }

    /**
     * Abstract base class; normally only used for creating subclasses and not instantiated in apps. Most non-trivial classes inherit from this.
     */
    class Object extends Observable {

        /**
         * @constructor
         * @param values An object with key-value pairs.
         */
        constructor(values?: Object);

        /**
         * Gets a value.
         * @param key Key name.
         * @returns Value.
         */
        get(key: string): any;

        /** 
         * Get a list of object property names.
         * @returns List of property names.
         */
        getKeys(): Array<string>;

        /** 
         * Get an object of all property names and values.
         * @returns Object.
         */
        getProperties(): Object;

        /**
         * @returns Revision.
         */
        getRevision(): number;

        /** 
         * Sets a value.
         * @param key Key name.
         * @param value Value.
         */
        set(key: string, value: any): void;

        /** 
         * Sets a collection of key-value pairs. Note that this changes any existing properties and adds new ones (it does not remove any existing properties).
         * @param Values.
         */
        setProperties(values: Object): void;

        /**
         * Unsets a property.
         */
        unset(key: string): void;
    }

    /**
     * Events emitted by ol.Object instances are instances of this type.
     */
    class ObjectEvent {

        /**
         * The name of the property whose value is changing.
         */
        key: string;

        /**
         * The old value. To get the new value use e.target.get(e.key) where e is the event object.
         */
        oldValue: any;
    }

    /**
     * Abstract base class; normally only used for creating subclasses and not instantiated in apps. An event target providing convenient methods for listener registration and unregistration. A generic change event is always available through ol.Observable#changed.
     */
    class Observable {

        /**
         * Removes an event listener using the key returned by on() or once().
         */
        unByKey(key: any): void;

        /**
         * Increases the revision counter and dispatches a 'change' event.
         */
        changed(): void;

        /**
         * @returns Revision.
         */
        getRevision(): number;

        /**
         * Listen for a certain type of event.
         * @param type The event type.
         * @param listener The listener function.
         * @param ref The object to use as this in listener.
         * @returns Unique key for the listener.
         */
        on(type: string, listener: (event: MapBrowserEvent) => void, ref?: any): any;

        /**
         * Listen for a certain type of event.
         * @param type The array of event types.
         * @param listener The listener function.
         * @param ref The object to use as this in listener.
         * @returns Unique key for the listener.
         */
        on(type: Array<string>, listener: (event: MapBrowserEvent) => void, ref?: any): any;

        /**
         * Listen once for a certain type of event.
         * @param type The event type.
         * @param listener The listener function.
         * @param ref The object to use as this in listener.
         * @returns Unique key for the listener.
         */
        once(type: string, listener: (event: MapBrowserEvent) => void, ref?: any): any;

        /**
         * Listen once for a certain type of event.
         * @param type The array of event types.
         * @param listener The listener function.
         * @param ref The object to use as this in listener.
         * @returns Unique key for the listener.
         */
        once(type: Array<string>, listener: (event: MapBrowserEvent) => void, ref?: any): any;

        /**
         * Unlisten for a certain type of event.
         * @param type The array of event types.
         * @param listener The listener function.
         * @param ref The object to use as this in listener.
         * @returns Unique key for the listener.
         */
        un(type: Array<string>, listener: (event: MapBrowserEvent) => void, ref?: any): any;

        /**
         * Removes an event listener using the key returned by on() or once(). Note that using the ol.Observable.unByKey static function is to be preferred.
         * @param key The key returned by on() or once()
         */
        unByKey(key: any): void;
    }

    /**
     * An element to be displayed over the map and attached to a single map location.
     */
    class Overlay extends ol.Object {

        /**
         * @constructor
         * @param options Overlay options.
         */
        constructor(options: OverlayOptions);

        /**
         * Get the DOM element of this overlay.
         * @returns The Element containing the overlay.
         */
        getElement(): Element;

        /**
         * Get the map associated with this overlay.
         * @returns The map that the overlay is part of.
         */
        getMap(): ol.Map;

        /**
         * Get the offset of this overlay.
         * @returns The offset.
         */
        getOffset(): Array<number>;

        /**
         * Get the current position of this overlay.
         * @returns The spatial point that the overlay is anchored at.
         */
        getPosition(): ol.Coordinate;

        /**
         * Get the current positioning of this overlay.
         * @returns How the overlay is positioned relative to its point on the map.
         */
        getPositioning(): ol.OverlayPositioning;

        /**
         * Set the DOM element to be associated with this overlay.
         * @param element The element containing the overlay.
         */
        setElement(element: Element): void;

        /**
         * Set the map to be associated with this overlay.
         * @param map The map that the overlay is part of.
         */
        setMap(map: Map): void;

        /**
         * Set the offset for this overlay.
         * @param offset Offset.
         */
        setOffset(offset: Array<number>): void;

        /**
         * Set the position for this overlay. If the position is undefined the overlay is hidden.
         * @param position The spatial point that the overlay is anchored at.
         */
        setPosition(position: ol.Coordinate): void;

        /**
         * Set the positioning for this overlay.
         * @param How the overlay is positioned relative to its point on the map.
         */
        setPositioning(positioning: ol.OverlayPositioning): void;
    }
    interface OverlayOptions {

        /**
         * The overlay element.
         */
        element?: Element;

        /**
         * Offsets in pixels used when positioning the overlay. The fist element in the array is the horizontal offset. A positive value shifts the overlay right. The second element in the array is the vertical offset. A positive value shifts the overlay down. Default is [0, 0].
         */
        offset?: Array<number>;

        /**
         * The overlay position in map projection.
         */
        position?: ol.Coordinate;

        /**
         * Defines how the overlay is actually positioned with respect to its position property. Possible values are 'bottom-left', 'bottom-center', 'bottom-right', 'center-left', 'center-center', 'center-right', 'top-left', 'top-center', and 'top-right'. Default is 'top-left'.
         */
        positioning?: ol.OverlayPositioning;

        /**
         * Whether event propagation to the map viewport should be stopped. Default is true. If true the overlay is placed in the same container as that of the controls (CSS class name ol-overlaycontainer-stopevent); if false it is placed in the container with CSS class name ol-overlaycontainer.
         */
        stopEvent?: boolean;

        /**
         * Whether the overlay is inserted first in the overlay container, or appended. Default is true. If the overlay is placed in the same container as that of the controls (see the stopEvent option) you will probably set insertFirst to true so the overlay is displayed below the controls.
         */
        insertFirst?: boolean;

        /**
         * If set to true the map is panned when calling setPosition, so that the overlay is entirely visible in the current viewport. The default is false.
         */
        autoPan?: boolean;

        /**
         * The options used to create a ol.animation.pan animation. This animation is only used when autoPan is enabled. By default the default options for ol.animation.pan are used. If set to null the panning is not animated.
         */
        //TODO: replace with olx.animation.PanOptions
        autoPanAnimation?: any;

        /**
         * The margin (in pixels) between the overlay and the borders of the map when autopanning. The default is 20.
         */
        autoPanMargin?: number;
    }

    /**
     * Events emitted by ol.interaction.Select instances are instances of this type.
     */
    class SelectEvent {

        /**
         * Deselected features array.
         */
        deselected: Array<ol.Feature>;

        /**
         * Associated ol.MapBrowserEvent;
         */
        mapBrowserEvent: ol.MapBrowserEvent;

        /**
         * Selected features array.
         */
        selected: Array<ol.Feature>
    }

    /**
     * Class to create objects that can be used with ol.geom.Polygon.circular.
     */
    class Sphere {

        /**
         * @constructor
         * @param radius Radius.
         */
        constructor(radius: number);

        /**
         * Returns the geodesic area for a list of coordinates.
         * @param coordinates List of coordinates of a linear ring. If the ring is oriented clockwise, the area will be positive, otherwise it will be negative.
         * @returns Area.
         */
        geodesicArea(coordinates: Array<ol.Coordinate>): number;

        /**
         * Returns the distance from c1 to c2 using the haversine formula.
         * @param c1 Coordinate 1.
         * @param c2 Coordinate 2.
         * @returns Haversine distance.
         */
        haversineDistance(c1: ol.Coordinate, c2: ol.Coordinate): number;
    }

    /**
     * Base class for tiles.
     */
    class Tile {

        /**
         * Get the tile coordinate for this tile.
         * @returns TileCoord.
         */
        getTileCoord(): ol.TileCoord;
    }

    /**
     * An ol.View object represents a simple 2D view of the map.
     */
    class View extends ol.Object {

        /**
         * @constructor
         * @param options Options.
         */
        constructor(options: ViewOptions);

        /**
         * Calculate the extent for the current view state and the passed size. The size is the pixel dimensions of the box into which the calculated extent should fit. In most cases you want to get the extent of the entire map, that is map.getSize().
         * @param size Box pixel size
         * @returns Extent.
         */
        calculateExtent(size: ol.Size): ol.Extent;

        /**
         * Center on coordinate and view position.
         * @param coordinate Coordinate.
         * @param size Box pixel size
         * @param position Position on the view to center on
         */
        centerOn(coordinate: ol.Coordinate, size: ol.Size, position: ol.Pixel): void;

        /**
         * Get the constrained center of this view.
         * @param center Center.
         * @returns Constrained center.
         */
        constrainCenter(center: ol.Coordinate): ol.Coordinate;

        /**
         * Get the constrained resolution of this view.
         * @param resolution: Resolution.
         * @param delta Delta. Default is 0.
         * @param direction Direction. Default is 0.
         * @returns Constrained resolution
         */
        constrainResolution(resolution: number, delta?: number, direction?: number): number;

        /**
         * Fit the map view to the passed extent and size. The size is pixel dimensions of the box to fit the extent into. In most cases you will want to use the map size, that is map.getSize().
         * @param extent Extent.
         * @param size Box pixel size.
         */
        fitExtent(extent: ol.Extent, size: ol.Size): void;

        /**
         * Fit the given geometry into the view based on the given map size and border.
         * @param geometry Geometry.
         * @param size Box pixel size.
         * @param options Options
         */
        fitGeometry(geometry: ol.geom.SimpleGeometry, size: ol.Size, options?: ViewFitGeometryOptions): void;

        /**
         * Get the view center.
         * @returns The center of the view.
         */
        getCenter(): ol.Coordinate;

        /**
         * Get the view projection
         * @returns The projection of the view.
         */
        getProjection(): ol.proj.Projection;

        /**
         * Get the view resolution
         * @returns The resolution of the view.
         */
        getResolution(): number;

        /**
         * Get the view rotation
         * @returns The rotation of the view in radians
         */
        getRotation(): number;

        /**
         * Get the current zoom level. Return undefined if the current resolution is undefined or not a "constrained resolution".
         * @returns Zoom.
         */
        getZoom(): number;

        /**
         * Rotate the view around a given coordinate.
         * @param rotation New rotation value for the view.
         * @param anchor The rotation center.
         */
        rotate(rotation: number, anchor: ol.Coordinate): void;

        /**
         * Set the center of the current view.
         * @param center The center of the view.
         */
        setCenter(center: ol.Coordinate): void;

        /**
         * Set the resolution for this view.
         * @param resolution The resolution of the view.
         */
        setResolution(resolution: number): void;

        /**
         * Set the rotation for this view.
         * @param rotation The rotation of the view in radians.
         */
        setRotation(rotation: number): void;

        /**
         * Zoom to a specific zoom level.
         * @param zoom Zoom level.
         */
        setZoom(zoom: number): void;
    }
    interface ViewOptions {

        /** The initial center for the view. The coordinate system for the center is specified with the projection option. Default is undefined, and layer sources will not be fetched if this is not set. */
        center?: Coordinate;

        /** Rotation constraint. false means no constraint. true means no constraint, but snap to zero near zero. A number constrains the rotation to that number of values. For example, 4 will constrain the rotation to 0, 90, 180, and 270 degrees. The default is true. */
        constrainRotation?: boolean;

        /** Enable rotation. Default is true. If false a rotation constraint that always sets the rotation to zero is used. The constrainRotation option has no effect if enableRotation is false. */
        enableRotation?: boolean;

        /**The extent that constrains the center, in other words, center cannot be set outside this extent. Default is undefined. */
        extent?: Extent;

        /** The maximum resolution used to determine the resolution constraint. It is used together with minResolution (or maxZoom) and zoomFactor. If unspecified it is calculated in such a way that the projection's validity extent fits in a 256x256 px tile. If the projection is Spherical Mercator (the default) then maxResolution defaults to 40075016.68557849 / 256 = 156543.03392804097. */
        maxResolution?: number;

        /** The minimum resolution used to determine the resolution constraint. It is used together with maxResolution (or minZoom) and zoomFactor. If unspecified it is calculated assuming 29 zoom levels (with a factor of 2). If the projection is Spherical Mercator (the default) then minResolution defaults to 40075016.68557849 / 256 / Math.pow(2, 28) = 0.0005831682455839253. */
        minResolution?: number;

        /** The maximum zoom level used to determine the resolution constraint. It is used together with minZoom (or maxResolution) and zoomFactor. Default is 28. Note that if minResolution is also provided, it is given precedence over maxZoom. */
        maxZoom?: number;

        /** The minimum zoom level used to determine the resolution constraint. It is used together with maxZoom (or minResolution) and zoomFactor. Default is 0. Note that if maxResolution is also provided, it is given precedence over minZoom. */
        minZoom?: number;

        /** The projection. Default is EPSG:3857 (Spherical Mercator). */
        projection?: any;

        /** The initial resolution for the view. The units are projection units per pixel (e.g. meters per pixel). An alternative to setting this is to set zoom. Default is undefined, and layer sources will not be fetched if neither this nor zoom are defined. */
        resolution?: number;

        /** Resolutions to determine the resolution constraint. If set the maxResolution, minResolution, minZoom, maxZoom, and zoomFactor options are ignored. */
        resolutions?: Array<number>;

        /** The initial rotation for the view in radians (positive rotation clockwise). Default is 0. */
        rotation?: number;

        /** Only used if resolution is not defined. Zoom level used to calculate the initial resolution for the view. The initial resolution is determined using the ol.View#constrainResolution method. */
        zoom?: number;

        /** The zoom factor used to determine the resolution constraint. Default is 2. */
        zoomFactor?: number;
    }
    interface ViewFitGeometryOptions {

        /**
         * Padding (in pixels) to be cleared inside the view. Values in the array are top, right, bottom and left padding. Default is [0, 0, 0, 0].
         */
        padding?: Array<number>;

        /**
         * Constrain the resolution. Default is true.
         */
        constrainResolution?: boolean;

        /**
         * Get the nearest extent. Default is false.
         */
        nearest?: boolean;

        /**
         * Minimum resolution that we zoom to. Default is 0.
         */
        minResolution?: number;

        /**
         * Maximum zoom level that we zoom to. If minResolution is given, this property is ignored.
         */
        maxZoom?: number;
    }

    // NAMESPACES

    /**
     * The animation static methods are designed to be used with the ol.Map#beforeRender method.
     */
    module animation {

        /**
         * Generate an animated transition that will "bounce" the resolution as it approaches the final value.
         * @param options Bounce options.
         */
        //TODO: return ol.PreRenderFunction
        function bounce(options: AnimationBounceOptions): any;
        interface AnimationBounceOptions {
            
            /**
             * The resolution to start the bounce from, typically map.getView().getResolution().
             */
            resolution: number;

            /**
             * The start time of the animation. Default is immediately.
             */
            start?: number;

            /**
             * The duration of the animation in milliseconds. Default is 1000.
             */
            duration?: number;

            /**
             * The easing function to use. Can be an ol.easing or a custom function. Default is ol.easing.upAndDown.
             */
            // TODO: Check if it is an ol.easing function
            easing: () => void;
        }

        /**
         * Generate an animated transition while updating the view center.
         * @param options Pan options.
         */
        //TODO: return ol.PreRenderFunction
        function pan(options: AnimationPanOptions): any;
        interface AnimationPanOptions {
            
            /**
             * The resolution to start the bounce from, typically map.getView().getResolution().
             */
            source: ol.Coordinate;

            /**
             * The start time of the animation. Default is immediately.
             */
            start?: number;

            /**
             * The duration of the animation in milliseconds. Default is 1000.
             */
            duration?: number;

            /**
             * The easing function to use. Can be an ol.easing or a custom function. Default is ol.easing.upAndDown.
             */
            // TODO: Check if it is an ol.easing function
            easing: () => void;
        }

        /**
         * Generate an animated transition while updating the view rotation.
         * @param options Rotate options.
         */
        //TODO: return ol.PreRenderFunction
        function rotate(options: AnimationRotateOptions): any;
        interface AnimationRotateOptions {
            
            /**
             * The rotation value (in radians) to begin rotating from, typically map.getView().getRotation(). If undefined then 0 is assumed.
             */
            rotation?: number;

            /**
             * The rotation center/anchor. The map rotates around the center of the view if unspecified.
             */
            anchor?: ol.Coordinate;

            /**
             * The start time of the animation. Default is immediately.
             */
            start?: number;

            /**
             * The duration of the animation in milliseconds. Default is 1000.
             */
            duration?: number;

            /**
             * The easing function to use. Can be an ol.easing or a custom function. Default is ol.easing.upAndDown.
             */
            // TODO: Check if it is an ol.easing function
            easing: () => void;
        }

        /**
         * Generate an animated transition while updating the view resolution.
         * @param options Zoom options.
         */
        function pan(options: AnimationZoomOptions): any;
        interface AnimationZoomOptions {
            
            /**
             * The resolution to begin zooming from, typically map.getView().getResolution().
             */
            resolution: number;

            /**
             * The start time of the animation. Default is immediately.
             */
            start?: number;

            /**
             * The duration of the animation in milliseconds. Default is 1000.
             */
            duration?: number;

            /**
             * The easing function to use. Can be an ol.easing or a custom function. Default is ol.easing.upAndDown.
             */
            // TODO: Check if it is an ol.easing function
            easing: () => void;
        }
    }

    /**
     * Return the color as an array. This function maintains a cache of calculated arrays which means the result should not be modified.
     */
    module color {

        /**
         * Return the color as an array. This function maintains a cache of calculated arrays which means the result should not be modified.
         * @param color Color.
         */
        function asArray(color: ol.Color): ol.Color;
        function asArray(color: string): ol.Color;

        /**
         * Return the color as an rgba string.
         * @param color Color.
         */
        function asString(color: ol.Color): string;
        function asString(color: string): string;
    }

    module control {

        /**
         * Set of controls included in maps by default. Unless configured otherwise, this returns a collection containing an instance of each of the following controls: ol.control.Zoom, ol.control.Rotate, ol.control.Attribution
         * @param options Defaults options
         * @returns Control.s
         */
        function defaults(opt_options: ControlDefaultsOptions): ol.Collection<ol.control.Control>;
        interface ControlDefaultsOptions {

            /**
             * Attribution. Default is true.
             */
            attribution?: boolean;

            /**
             * Attribution options.
             */
            //TODO: Replace with olx.control.AttributionOptions
            attributionOptions?: any;

            /**
             * Rotate. Default is true;
             */
            rotate?: boolean;

            /**
             * Rotate options
             */
            //TODO: Replace with olx.control.RotateOptions
            rotateOptions?: any;
            
            /**
             * Zoom. Default is true
             */
            zoom?: boolean;

            /**
             * 
             */
            //TODO: Replace with olx.control.ZoomOptions
            zoomOptions?: any;
        }

        /**
         * Units for the scale line. Supported values are 'degrees', 'imperial', 'nautical', 'metric', 'us'.
         */
        interface ScaleLineUnits extends String { }

        class Attribution {
        }

        class Control {
        }

        class FullScreen {
        }

        class MousePosition {
        }

        class OverviewMap {
        }

        class Rotate {
        }

        class ScaleLine {
        }

        class Zoom {
        }

        class ZoomSlider {
        }

        class ZoomToExtent {
        }
    }

    module coordinate {
    }

    module easing {
    }

    module events {
        module condition {
        }
    }

    module extent {
    }

    module featureloader {
    }

    module format {

        // Type definitions
        interface IGCZ extends String { }

        // Classes
        class EsriJSON {
        }

        class Feature {
        }

        class GeoJSON {
        }

        class GML {
        }

        class GML2 {
        }

        class GML3 {
        }

        class GMLBase {
        }

        class GPX {
        }

        class IGC {
        }

        class JSONFeature {
        }

        class KML {
        }

        class OSMXML {
        }

        class Polyline {
        }

        class TextFeature {
        }

        class TopoJSON {
        }

        class WFS {
        }

        class WKT {
        }

        class WMSCapabilities {
        }

        class WMSGetFeatureInfo {
        }

        class WMTSCapabilities {
        }

        class XML {
        }

        class XMLFeature {
        }
    }

    module geom {
        
        // Type definitions
        interface GeometryLayout extends String { }
        interface GeometryType extends String { }

        class Circle {
        }

        class Geometry {
        }

        class GeometryCollection {
        }

        class LinearRing {
        }

        class LineString {
            new(): LineString;
        }

        class MultiLineString {
        }

        class MultiPoint {
        }

        class MultiPolygon {
        }

        class Point {
        }

        class Polygon {
        }

        class SimpleGeometry {
        }
    }

    module has {
    }

    module interaction {

        class DoubleClickZoom {
        }

        class DragAndDrop {
        }

        class DragAndDropEvent {
        }

        class DragBox {
        }

        class DragPan {
        }

        class DragRotate {
        }

        class DragRotateAndZoom {
        }

        class DragZoom {
        }

        class Draw {
        }

        class DrawEvent {
        }

        class Interaction {
        }

        class KeyboardPan {
        }

        class KeyboardZoom {
        }

        class Modify {
        }

        class MouseWheelZoom {
        }

        class PinchRotate {
        }

        class PinchZoom {
        }

        class Pointer {
        }

        class Select {
        }

        class Snap {
        }
    }

    module layer {

        /**
         * Abstract base class; normally only used for creating subclasses and not instantiated in apps. Note that with ol.layer.Base and all its subclasses, any property set in the options is set as a ol.Object property on the layer object, so is observable, and has get/set accessors.
         */
        class Base extends ol.Object {

            /**
             * @constructor
             * @param options Layer options.
             */
            constructor(options?: BaseOptions);

            /**
             * Return the brightness of the layer.
             * @returns The brightness of the layer.
             */
            getBrightness(): number;

            /**
             * Return the contrast of the layer.
             * @returns The contrast of the layer.
             */
            getContrast(): number;

            /**
             * Return the extent of the layer or undefined if it will be visible regardless of extent.
             * @returns The layer extent.
             */
            getExtent(): ol.Extent;

            /**
             * Return the hue of the layer.
             * @returns The hue of the layer
             */
            getHue(): number;

            /**
             * Return the maximum resolution of the layer.
             * @returns The maximum resolution of the layer
             */
            getMaxResolution(): number;

            /**
             * Return the minimum resolution of the layer.
             * @returns The minimum resolution of the layer. 
             */
            getMinResolution(): number;

            /**
             * Return the opacity of the layer (between 0 and 1).
             * @returns The opacity of the layer.
             */
            getOpacity(): number;

            /**
             * Return the saturation of the layer.
             * @returns The saturation of the layer.
             */
            getSaturation(): number;

            /**
             * Return the visibility of the layer (true or false).
             * The visibility of the layer
             */
            getVisible(): boolean;

            /**
             * Adjust the layer brightness. A value of -1 will render the layer completely black. A value of 0 will leave the brightness unchanged. A value of 1 will render the layer completely white. Other values are linear multipliers on the effect (values are clamped between -1 and 1).
             * @param brightness The brightness of the layer
             */
            setBrightness(brigthness: number): void;

            /**
             * Adjust the layer contrast. A value of 0 will render the layer completely grey. A value of 1 will leave the contrast unchanged. Other values are linear multipliers on the effect (and values over 1 are permitted).
             * @param contrast The contrast of the layer
             */
            setContrast(contrast: number): void;

            /**
             * Set the extent at which the layer is visible. If undefined, the layer will be visible at all extents.
             * @param extent The extent of the layer
             */
            setExtent(extent?: ol.Extent): void;

            /**
             * Apply a hue-rotation to the layer. A value of 0 will leave the hue unchanged. Other values are radians around the color circle.
             * @param hue The hue of the layer
             */
            setHue(hue: number): void;

            /**
             * Set the maximum resolution at which the layer is visible.
             * @param maxResolution The maximum resolution of the layer.
             */
            setMaxResolution(maxResolution: number): void;

            /**
             * Set the minimum resolution at which the layer is visible.
             * @param minResolution The minimum resolution of the layer.
             */
            setMinResolution(minResolution: number): void;

            /**
             * Set the opacity of the layer, allowed values range from 0 to 1.
             * @param opactity The opacity of the layer.
             */
            setOpacity(opacity: number): void;

            /**
             * Adjust layer saturation. A value of 0 will render the layer completely unsaturated. A value of 1 will leave the saturation unchanged. Other values are linear multipliers of the effect (and values over 1 are permitted).
             * @param saturation The saturation of the layer.
             */
            setSaturation(saturation: number): void;

            /**
             * Set the visibility of the layer (true or false).
             * @param visible The visibility of the layer.
             */
            setVisible(visible: boolean): void;
        }

        /**
         * A ol.Collection of layers that are handled together.
         */
        class Group extends ol.layer.Base {

            /**
             * @constructor
             * @param options Layer options.
             */
            constructor(options?: GroupOptions);

            /**
             * Returns the collection of layers in this group.
             * @returns Collection of layers that are part of this group.
             */
            getLayers(): ol.Collection<ol.layer.Base>;

            /**
             * Set the collection of layers in this group.
             * @param layers Collection of layers that are part of this group.
             */
            setLayers(layers: ol.Collection<ol.layer.Base>): void;
        }

        /**
         * Layer for rendering vector data as a heatmap. Note that any property set in the options is set as a ol.Object property on the layer object; for example, setting title: 'My Title' in the options means that title is observable, and has get/set accessors.
         */
        class Heatmap extends ol.layer.Vector {

            /**
             * @constructor
             * @param options Options
             */
            constructor(options?: HeatmapOptions);

            /**
             * Return the blur size in pixels.
             * @returns Blur size in pixels
             */
            getBlur(): number;

            /**
             * Return the gradient colors as array of strings.
             * @returns Colors
             */
            getGradient(): Array<string>;

            /**
             * Return the size of the radius in pixels.
             * @returns Radius size in pixel
             */
            getRadius(): number;

            /**
             * Set the blur size in pixels.
             * @param blur Blur size in pixels
             */
            setBlur(blur: number): void;

            /**
             * Set the gradient colors as array of strings.
             * @param colors Gradient
             */
            setGradient(colors: Array<string>): void;

            /**
             * Set the size of the radius in pixels.
             * @param radius Radius size in pixels
             */
            setRadius(radius: number): void;
        }

        /**
         * Server-rendered images that are available for arbitrary extents and resolutions. Note that any property set in the options is set as a ol.Object property on the layer object; for example, setting title: 'My Title' in the options means that title is observable, and has get/set accessors.
         */
        class Image extends ol.layer.Layer {

            /**
             * @constructor
             * @param options Layer options
             */
            constructor(options?: ImageOptions);

            /**
             * Return the associated source of the image layer.
             * @returns Source.
             */
            getSource(): ol.source.Image;
        }

        /**
         * Abstract base class; normally only used for creating subclasses and not instantiated in apps. A visual representation of raster or vector map data. Layers group together those properties that pertain to how the data is to be displayed, irrespective of the source of that data.
         */
        class Layer extends ol.layer.Base {

            /**
             * @constructor 
             * @param options Layer options
             */
            constructor(options?: LayerOptions);

            /**
             * Get the layer source.
             * @returns The layer source (or null if not yet set)
             */
            getSource(): ol.source.Source;

            /**
             * Set the layer source.
             * @param source The layer source.
             */
            setSource(source: ol.source.Source): void;
        }
        
        /**
         * For layer sources that provide pre-rendered, tiled images in grids that are organized by zoom levels for specific resolutions. Note that any property set in the options is set as a ol.Object property on the layer object; for example, setting title: 'My Title' in the options means that title is observable, and has get/set accessors.
         */
        class Tile extends ol.layer.Layer {

            /**
             * @constructor
             * @param options Tile layer options.
             */
            constructor(options?: TileOptions);

            /**
             * Return the level as number to which we will preload tiles up to.
             * @retruns The level to preload tiled up to.
             */
            getPreload(): number;

            /**
             * Return the associated tilesource of the layer.
             * @returns Source
             */
            getSource(): ol.source.Tile;

            /**
             * Whether we use interim tiles on error.
             * @returns Use interim tiles on error.
             */
            getUseInterimTilesOnError(): boolean;

            /**
             * Set the level as number to which we will preload tiles up to.
             * @param preload The level to preload tiled up to
             */
            setPreload(preload: number): void;

            /**
             * Set whether we use interim tiles on error.
             * @param useInterimTilesOnError Use interim tiles on error.
             */
            setUseInterimTilesOnError(useInterimTilesOnError: boolean): void;
        }

        /**
         * Vector data that is rendered client-side. Note that any property set in the options is set as a ol.Object property on the layer object; for example, setting title: 'My Title' in the options means that title is observable, and has get/set accessors.
         */
        class Vector extends ol.layer.Layer {

            /**
             * @constructor
             * @param options Options
             */
            constructor(options?: VectorOptions);

            /**
             * Return the associated vectorsource of the layer.
             * @returns Source.
             */
            getSource(): ol.source.Vector;

            /**
             * Get the style for features. This returns whatever was passed to the style option at construction or to the setStyle method.
             */
            // TODO: Replace returntype any with ol.style.StyleFunction
            getStyle(): ol.style.Style | Array<ol.style.Style> | any;

            /**
             * Get the style function.
             * @returns Layer style function
             */
            // TODO: Replace returntype any with ol.style.StyleFunction
            getStyleFunction(): any;

            /**
             * Set the style for features. This can be a single style object, an array of styles, or a function that takes a feature and resolution and returns an array of styles. If it is undefined the default style is used. If it is null the layer has no style (a null style), so only features that have their own styles will be rendered in the layer. See ol.style for information on the default style.
             */
            setStyle();

            /**
             * Set the style for features. This can be a single style object, an array of styles, or a function that takes a feature and resolution and returns an array of styles. If it is undefined the default style is used. If it is null the layer has no style (a null style), so only features that have their own styles will be rendered in the layer. See ol.style for information on the default style.
             * @param layer Layer style
             */
            setStyle(style: ol.style.Style);

            /**
             * Set the style for features. This can be a single style object, an array of styles, or a function that takes a feature and resolution and returns an array of styles. If it is undefined the default style is used. If it is null the layer has no style (a null style), so only features that have their own styles will be rendered in the layer. See ol.style for information on the default style.
             * @param layer Layer style
             */
            setStyle(style: Array<ol.style.Style>);

            /**
             * Set the style for features. This can be a single style object, an array of styles, or a function that takes a feature and resolution and returns an array of styles. If it is undefined the default style is used. If it is null the layer has no style (a null style), so only features that have their own styles will be rendered in the layer. See ol.style for information on the default style.
             * @param Layer style
             */
            // TODO: Replace 'any' with ol.style.StyleFunction
            setStyle(style: any);
        }

        interface BaseOptions {

            /**
             * Brightness. Default is 0.
             */
            brightness?: number;

            /**
             * Contrast. Default is 1.
             */
            contrast?: number;

            /**
             * Hue. Default is 0.
             */
            hue?: number;

            /**
             * Opacity (0, 1). Default is 1.
             */
            opacity?: number;

            /**
             * Saturation. Default is 1.
             */
            saturation?: number;

            /**
             * Visibility. Default is true.
             */
            visible?: boolean;

            /**
             * The bounding extent for layer rendering. The layer will not be rendered outside of this extent.
             */
            extent?: ol.Extent;

            /**
             * The minimum resolution (inclusive) at which this layer will be visible.
             */
            minResolution?: number;

            /**
             * The maximum resolution (exclusive) below which this layer will be visible.
             */
            maxResolution?: number;
        }

        interface LayerOptions extends BaseOptions {

            /**
             * The layer source (or null if not yet set).
             */
            source?: ol.source.Source;
        }

        interface GroupOptions extends BaseOptions {

            /**
             * Child layers
             */
            layers?: Array<ol.layer.Base> | ol.Collection<ol.layer.Base>;
        }

        interface TileOptions extends LayerOptions {

            /**
             * Preload. Load low-resolution tiles up to preload levels. By default preload is 0, which means no preloading.
             */
            preload?: number;

            /**
             * Source for this layer.
             */
            source?: ol.source.Tile;

            /**
             * Use interim tiles on error. Default is true.
             */
            useInterimTilesOnError?: boolean;
        }

        interface ImageOptions extends LayerOptions {
        }

        interface VectorOptions extends LayerOptions {

            /**
             * When set to true, feature batches will be recreated during animations. This means that no vectors will be shown clipped, but the setting will have a performance impact for large amounts of vector data. When set to false, batches will be recreated when no animation is active. Default is false.
             */
            updateWhileAnimating?: boolean;

            /**
             * When set to true, feature batches will be recreated during interactions. See also updateWhileInteracting. Default is false.
             */
            updateWhileInteracting?: boolean;

            /**
             * Render order. Function to be used when sorting features before rendering. By default features are drawn in the order that they are created. Use null to avoid the sort, but get an undefined draw order.
             */
            // TODO: replace any with the expected function, unclear in documentation what the parameters are
            renderOrder?: any;

            /**
             * The buffer around the viewport extent used by the renderer when getting features from the vector source for the rendering or hit-detection. Recommended value: the size of the largest symbol, line width or label. Default is 100 pixels.
             */
            renderBuffer?: number;

            /**
             * Source.
             */
            source?: ol.source.Vector;

            /**
             * Layer style. See ol.style for default style which will be used if this is not defined.
             */
            style?: ol.style.Style | Array<ol.style.Style> | any;
        }

        interface HeatmapOptions extends VectorOptions {

            /**
             * The color gradient of the heatmap, specified as an array of CSS color strings. Default is ['#00f', '#0ff', '#0f0', '#ff0', '#f00'].
             */
            gradient?: Array<String>;

            /**
             * Radius size in pixels. Default is 8.
             */
            radius?: number;

            /**
             * Blur size in pixels. Default is 15.
             */
            blur?: number;

            /**
             * Shadow size in pixels. Default is 250.
             */
            shadow?: number;
        }
    }

    module loadingstrategy {
    }

    module proj {

        // Type definitions
        interface ProjectionLike extends String { }
        interface Units extends String { }

        // Methods

        /**
         * Meters per unit lookup table.
         */
        //TODO: validate!
        var METERS_PER_UNIT: Object;

        /**
         * Registers coordinate transform functions to convert coordinates between the source projection and the destination projection. The forward and inverse functions convert coordinate pairs; this function converts these into the functions used internally which also handle extents and coordinate arrays.
         * @param source Source projection
         * @param destination Destination projection
         * @param forward The forward transform function (that is, from the source projection to the destination projection) that takes a ol.Coordinate as argument and returns the transformed ol.Coordinate.
         * @param inverse The inverse transform function (that is, from the destination projection to the source projection) that takes a ol.Coordinate as argument and returns the transformed ol.Coordinate.
         */
        function addCoordinateTransforms(source: ProjectionLike, destination: ProjectionLike, forward: (coordinate: Coordinate) => Coordinate, inverse: (coordinate: Coordinate) => Coordinate): void;

        /**
         * Registers transformation functions that don't alter coordinates. Those allow to transform between projections with equal meaning.
         * @param projections Projections.
         */
        function addEquivalentProjections(projections: Array<Projection>): void;

        /**
         * Add a Projection object to the list of supported projections that can be looked up by their code.
         * @param projection Projection instance.
         */
        function addProjection(projection: Projection): void;

        /**
         * Transforms a coordinate from longitude/latitude to a different projection.
         * @param coordinate Coordinate as longitude and latitude, i.e. an array with longitude as 1st and latitude as 2nd element.
         * @param projection Target projection. The default is Web Mercator, i.e. 'EPSG:3857'.
         */
        function fromLonLat(coordinate: Coordinate, opt_projection: ProjectionLike): Coordinate;

        /**
         * Fetches a Projection object for the code specified.
         * @param projectionLike Either a code string which is a combination of authority and identifier such as "EPSG:4326", or an existing projection object, or undefined.
         * @returns Projection object, or null if not in list.
         */
        function get(projectionLike: ProjectionLike): Projection;

        /**
         * Given the projection-like objects, searches for a transformation function to convert a coordinates array from the source projection to the destination projection.
         * @param source Source.
         * @param destination Destination.
         * @returns Transform function.
         */
        // TODO: Transformfunction
        function getTransform(source: ProjectionLike, destination: ProjectionLike): any;

        /**
         * Transforms a coordinate to longitude/latitude.
         * @param coordinate Projected coordinate.
         * @param projection Projection of the coordinate. The default is Web Mercator, i.e. 'EPSG:3857'.
         * @returns Coordinate as longitude and latitude, i.e. an array with longitude as 1st and latitude as 2nd element.
         */
        function toLonLat(coordinate: Coordinate, projection: ProjectionLike): Coordinate;

        /**
         * Transforms a coordinate from source projection to destination projection. This returns a new coordinate (and does not modify the original).
         * @param coordinate Coordinate.
         * @param source Source projection-like.
         * @param destination Destination projection-like.
         * @returns Coordinate.
         */
        function transform(coordinate: Coordinate, source: ProjectionLike, destination: ProjectionLike): Coordinate;

        /**
         * Transforms an extent from source projection to destination projection. This returns a new extent (and does not modify the original).
         * @param extent The extent to transform.
         * @param source Source projection-like.
         * @param destination Destination projection-like.
         * @returns The transformed extent.
         */
        function transformExtent(extent: Extent, source: ProjectionLike, destination: ProjectionLike): Extent;

        interface Projection {
        }
    }

    module render {

        class Event {
        }

        class VectorContext {
        }

        module canvas {
            class Immediate {
            }
        }
    }

    module source {

        class BingMaps {
        }

        class Cluster {
        }

        class Image {
        }

        class ImageCanvas {
        }

        class ImageEvent {
        }

        class ImageMapGuide {
        }

        class ImageStatic {
        }

        class ImageVector {
        }

        class ImageWMS {
        }

        class MapQuest {
            constructor(options: any);
        }

        class OSM {
        }

        class Source {
        }

        class Stamen {
        }

        class Tile {
        }

        class TileArcGISRest {
        }

        class TileDebug {
        }

        class TileEvent {
        }

        class TileImage {
        }

        class TileJSON {
        }

        class TileUTFGrid {
        }

        class TileVector {
        }

        class TileWMS {
        }

        class Vector {
        }

        class VectorEvent {
        }

        class WMTS {
        }

        class XYZ {
        }

        class Zoomify {
        }

        // Namespaces
        module wms {
            interface ServerType extends String { }
        }

        // Type definitions
        interface State extends String { }
        interface WMTSRequestEncoding extends String { }
    }

    module style {

        class AtlasManager {
        }

        class Circle {
        }

        class Fill {
        }

        class Icon {
        }

        class Image {
        }

        class RegularShape {
        }

        class Stroke {
            constructor();
        }

        class Style {
        }

        class Text {
        }
    }

    module tilegrid {

        class TileGrid {
        }

        class WMTS {
        }

        class Zoomify {
        }
    }

    module webgl {

        class Context {
            new(canvas: HTMLCanvasElement, gl: WebGLRenderingContext): Context;

            /** 
            Get the WebGL rendering context
             @returns The rendering context.
            */
            getGL(): WebGLRenderingContext;

            /**
             * Get the frame buffer for hit detection.
             * @returns The hit detection frame buffer.
             */
            getHitDetectionFramebuffer(): WebGLFramebuffer;

            /**
             * Use a program. If the program is already in use, this will return false.
             * @param program Program.
             * @returns Changed.
             */
            useProgram(program: WebGLProgram): boolean;
        }
    }

    // Type definitions

    /** 
     * A function returning the canvas element ({HTMLCanvasElement}) used by the source as an image. The arguments passed to the function are: ol.Extent the image extent, {number} the image resolution, {number} the device pixel ratio, ol.Size the image size, and ol.proj.Projection the image projection. The canvas returned by this function is cached by the source. The this keyword inside the function references the ol.source.ImageCanvas. 
     */
    function CanvasFunctionType(extent: Extent, resolution: number, pixelRatio: number, size: Size, projection: proj.Projection): HTMLCanvasElement;

    /** 
     * A color represented as a short array [red, green, blue, alpha]. red, green, and blue should be integers in the range 0..255 inclusive. alpha should be a float in the range 0..1 inclusive. 
     */
    interface Color extends Array<number> { }
    
    /**
     * An array of numbers representing an xy coordinate. Example: [16, 48]. 
     */
    interface Coordinate extends Array<number> { }

    /** 
     * A function that takes a ol.Coordinate and transforms it into a {string}. 
     */
    function CoordinateFormatType(coordinate?: Coordinate): string;

    /** 
     * An array of numbers representing an extent: [minx, miny, maxx, maxy]. 
     */
    interface Extent extends Array<number> { }

    /** 
     * Overlay position: 'bottom-left', 'bottom-center', 'bottom-right', 'center-left', 'center-center', 'center-right', 'top-left', 'top-center', 'top-right' 
     */
    interface OverlayPositioning extends String { }

    /**
     * An array with two elements, representing a pixel. The first element is the x-coordinate, the second the y-coordinate of the pixel. 
     */
    interface Pixel extends Array<number> { }

    /** 
     * Available renderers: 'canvas', 'dom' or 'webgl'. 
     */
    interface RendererType extends String { }
    
    /** 
     * An array of numbers representing a size: [width, height]. 
     */
    interface Size extends Array<number> { }

    /** 
     * An array of three numbers representing the location of a tile in a tile grid. The order is z, x, and y. z is the zoom level. 
     */
    interface TileCoord extends Array<number> { }

    // Functions 

    /**
     * A transform function accepts an array of input coordinate values, an optional output array, and an optional dimension (default should be 2). The function transforms the input coordinate values, populates the output array, and returns the output array.
     */
    function TransformFunction(input: Array<number>, output?: Array<number>, dimension?: number): Array<number>;
}