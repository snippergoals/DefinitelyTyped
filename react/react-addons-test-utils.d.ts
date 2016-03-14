// Type definitions for React v0.14 (react-addons-test-utils)
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>, AssureSign <http://www.assuresign.com>, Microsoft <https://microsoft.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="react.d.ts" />

declare namespace __React {
    interface SyntheticEventData {
        altKey?: boolean;
        button?: number;
        buttons?: number;
        clientX?: number;
        clientY?: number;
        changedTouches?: TouchList;
        charCode?: boolean;
        clipboardData?: DataTransfer;
        ctrlKey?: boolean;
        deltaMode?: number;
        deltaX?: number;
        deltaY?: number;
        deltaZ?: number;
        detail?: number;
        getModifierState?(key: string): boolean;
        key?: string;
        keyCode?: number;
        locale?: string;
        location?: number;
        metaKey?: boolean;
        pageX?: number;
        pageY?: number;
        relatedTarget?: EventTarget;
        repeat?: boolean;
        screenX?: number;
        screenY?: number;
        shiftKey?: boolean;
        targetTouches?: TouchList;
        touches?: TouchList;
        view?: AbstractView;
        which?: number;
    }

    interface EventSimulator {
        (element: Element, eventData?: SyntheticEventData): void;
        (component: Component<any, any>, eventData?: SyntheticEventData): void;
    }

    interface MockedComponentClass {
        new(): any;
    }

    class ShallowRenderer {
        getRenderOutput<E extends ReactElement<any>>(): E;
        getRenderOutput(): ReactElement<any>;
        render(element: ReactElement<any>, context?: any): void;
        unmount(): void;
    }

    namespace __Addons {
        namespace TestUtils {
            namespace Simulate {
                export var blur: EventSimulator;
                export var change: EventSimulator;
                export var click: EventSimulator;
                export var cut: EventSimulator;
                export var doubleClick: EventSimulator;
                export var drag: EventSimulator;
                export var dragEnd: EventSimulator;
                export var dragEnter: EventSimulator;
                export var dragExit: EventSimulator;
                export var dragLeave: EventSimulator;
                export var dragOver: EventSimulator;
                export var dragStart: EventSimulator;
                export var drop: EventSimulator;
                export var focus: EventSimulator;
                export var input: EventSimulator;
                export var keyDown: EventSimulator;
                export var keyPress: EventSimulator;
                export var keyUp: EventSimulator;
                export var mouseDown: EventSimulator;
                export var mouseEnter: EventSimulator;
                export var mouseLeave: EventSimulator;
                export var mouseMove: EventSimulator;
                export var mouseOut: EventSimulator;
                export var mouseOver: EventSimulator;
                export var mouseUp: EventSimulator;
                export var paste: EventSimulator;
                export var scroll: EventSimulator;
                export var submit: EventSimulator;
                export var touchCancel: EventSimulator;
                export var touchEnd: EventSimulator;
                export var touchMove: EventSimulator;
                export var touchStart: EventSimulator;
                export var wheel: EventSimulator;
            }

            export function renderIntoDocument<T extends Element>(
                element: DOMElement<any, T>): T;
            export function renderIntoDocument<P>(
                element: ReactElement<P>): Component<P, any>;
            export function renderIntoDocument<C extends Component<any, any>>(
                element: ReactElement<any>): C;

            export function mockComponent(
                mocked: MockedComponentClass, mockTagName?: string): typeof TestUtils;

            export function isElementOfType<T extends HTMLElement>(
                element: ReactElement<any>, type: string): element is ReactHTMLElement<T>;
            export function isElementOfType<P extends DOMAttributes, T extends Element>(
                element: ReactElement<any>, type: string): element is DOMElement<P, T>;
            export function isElementOfType<P>(
                element: ReactElement<any>, type: SFC<P>): element is SFCElement<P>;
            export function isElementOfType<P, T extends Component<P, {}>, C extends ComponentClass<P>>(
                element: ReactElement<any>, type: ClassType<P, T, C>): element is CElement<P, T>;

            export function isDOMComponent(instance: ReactInstance): instance is Element;
            export function isCompositeComponent(instance: ReactInstance): instance is Component<any, any>;
            export function isCompositeComponentWithType(
                instance: ReactInstance,
                type: ComponentClass<any>): boolean;

            export function findAllInRenderedTree(
                root: Component<any, any>,
                fn: (i: ReactInstance) => boolean): ReactInstance[];

            export function scryRenderedDOMComponentsWithClass(
                root: Component<any, any>,
                className: string): Element[];
            export function findRenderedDOMComponentWithClass(
                root: Component<any, any>,
                className: string): Element;

            export function scryRenderedDOMComponentsWithTag(
                root: Component<any, any>,
                tagName: string): Element[];
            export function findRenderedDOMComponentWithTag(
                root: Component<any, any>,
                tagName: string): Element;

            export function scryRenderedComponentsWithType<T extends Component<{}, {}>>(
                root: Component<any, any>,
                type: { new(): T }): T[];

            export function findRenderedComponentWithType<T extends Component<{}, {}>>(
                root: Component<any, any>,
                type: { new(): T }): T;

            export function createRenderer(): ShallowRenderer;
        }
    }
}

declare module "react-addons-test-utils" {
    import TestUtils = __React.__Addons.TestUtils;
    export = TestUtils;
}
