/**
 * Typescript definition tests for d3/d3-drag module
 * 
 * Note: These tests are intended to test the definitions only
 * in the sense of typing and call signature consistency. They
 * are not intended as functional tests.
 */

import * as d3Drag from 'd3-drag';
import { event, select, Selection } from 'd3-selection';

// NB: Consider alternative approachto getting live event-binding
// when using webpack as suggested by @ocombe in response to
// event binding question https://github.com/d3/d3-zoom/issues/32#issuecomment-229889310 
// d3.getEvent = () => require("d3-selection").event;
//
// This can be used in callbacks

// -----------------------------------------------------------------------------
// Preparatory Steps
// -----------------------------------------------------------------------------

interface CircleDatum {
    nodeId: string;
    name: string;
    label: string;
    x: number;
    y: number;
    r: number;
    color: string;
}

interface CustomSubject {
    nodeId: string;
    name: string;
    cx: number;
    cy: number;
    r: number;
}

let svg: SVGSVGElement;

let circles: Selection<SVGCircleElement, CircleDatum, SVGSVGElement, any>;

// -----------------------------------------------------------------------------
// Test Define DragBehavior
// -----------------------------------------------------------------------------

// variables to hold drag behaviors to be attached to svg circles with CircleDatum datum type

// This drag behavior will use the default subject accessor which returns the current datum of the dragged element,
// or, if the datum is undefined, returns the position object {x: number, y: number} for the dragged element.
let circleDrag: d3Drag.DragBehavior<SVGCircleElement, CircleDatum, CircleDatum | d3Drag.SubjectPosition>;

// This drag behavior will use a custom subject accessor to set the subject of the drag event
let circleCustomDrag: d3Drag.DragBehavior<SVGCircleElement, CircleDatum, CustomSubject | d3Drag.SubjectPosition>;


// create new drag behavior ------------------------------------------

circleDrag = d3Drag.drag<SVGCircleElement, CircleDatum>(); // Use short form method
circleCustomDrag = d3Drag.drag<SVGCircleElement, CircleDatum, CustomSubject | d3Drag.SubjectPosition>();

// set and get container element/accessor ----------------------------

let containerAccessor: (this: SVGCircleElement, d: CircleDatum, i: number, group: Array<SVGCircleElement> | NodeListOf<SVGCircleElement>) => d3Drag.DragContainerElement;

containerAccessor = function (d, i, group) {
    console.log('Node Id of circle: ', d.nodeId);
    // console.log(this.a); // fails, a is not a property of SVGCircleElement
    return this.ownerSVGElement; // this-type is SVGCircleElement
};

// Test chainability
circleDrag = circleDrag
    .container(function (d, i, group) { // container accessor function setter
        console.log('Node Id of circle: ', d.nodeId); // CircleDatum type
        // console.log(this.a); // fails, a is not a property of SVGCircleElement
        return this.ownerSVGElement; // this-type is SVGCircleElement
    });

// Test chainability
circleDrag = circleDrag
    .container(containerAccessor);

// Test chainability
circleDrag = circleDrag
    .container(svg); // fixed container element

containerAccessor = circleDrag.container();

// set and get filter ---------------------------------------------------------

let filterFn: (this: SVGCircleElement, datum: CircleDatum, index?: number, group?: Array<SVGCircleElement> | NodeListOf<SVGCircleElement>) => boolean;

filterFn = function (d) {
    return (d.color !== 'green' && this.r.baseVal.value < 10) ? !event.button : true; // 'this' is SVGCircleElement and d is CircleDatum
};

// chainable
circleDrag = circleDrag.filter(function (d, i, group) {

    return (d.color !== 'green' && this.r.baseVal.value < 10) ? !event.button : true; // 'this' is SVGCircleElement and d is CircleDatum
});

// getter
filterFn = circleDrag.filter();

// set and get subject ---------------------------------------------------------

circleCustomDrag.subject(function (d) {
    // Cast event type for completeness, otherwise event is of type any.
    let e = <d3Drag.D3DragEvent<SVGCircleElement, CircleDatum, CustomSubject | d3Drag.SubjectPosition>>event;

    if (d == null) {
        return { x: e.x, y: e.y };
    } else {
        // remap input data to subject output data
        return {
            nodeId: d.nodeId,
            name: d.name,
            cx: d.x,
            cy: d.y,
            r: d.r
        };
    }
});

// test getter
let subjectAccessor: (this: SVGCircleElement, datum?: CircleDatum, index?: number, group?: Array<SVGCircleElement> | NodeListOf<SVGCircleElement>) => CustomSubject | d3Drag.SubjectPosition;

subjectAccessor = circleCustomDrag.subject();

// set and get event handler ---------------------------------------------------

function dragstarted(this: SVGCircleElement, d: CircleDatum) {
    // cast d3 event to drag event. Otherwise, d3 event is currently defined as type 'any'
    let e = <d3Drag.D3DragEvent<SVGCircleElement, CircleDatum, CircleDatum | d3Drag.SubjectPosition>>event;
    e.sourceEvent.stopPropagation();
    select(this).classed('dragging', true);
}

function dragged(this: SVGCircleElement, d: CircleDatum) {
    // cast d3 event to drag event. Otherwise, d3 event is currently defined as type 'any'
    let e = <d3Drag.D3DragEvent<SVGCircleElement, CircleDatum, CircleDatum | d3Drag.SubjectPosition>>event;
    select(this).attr('cx', d.x = e.x).attr('cy', d.y = e.y);
}

function dragended(this: SVGCircleElement, d: CircleDatum) {
    select(this).classed('dragging', false);
}

function wrongDragHandler1(this: SVGCircleElement, d: { wrongData: number }) {
    // do whatever;
}

function wrongDragHandler2(this: SVGRectElement, d: CircleDatum) {
    // do whatever;
}

// Test chainability
circleDrag = circleDrag
    // .on('start', wrongDragHandler1) // fails, wrong datum type in handler
    // .on('start', wrongDragHandler2) // fails, wrong this-type for DOM Element context
    .on('start', dragstarted)
    .on('drag', dragged)
    .on('end', dragended);

// remove event listeners for a drag event type
circleDrag.on('start.tmp', null);

let handler: (this: SVGCircleElement, d?: CircleDatum, i?: number, group?: Array<SVGCircleElement> | NodeListOf<SVGCircleElement>) => void = circleDrag.on('start');
// let wrongHandler1: (this:SVGRectElement, d?:CircleDatum, i?: number, group?: Array<SVGRectElement> | NodeListOf<SVGRectElement>)=> void = circleDrag.on('start'); // fails, wrong dragged DOM event
// let wrongHandler2: (this:SVGCircleElement, d?:{test: number}, i?: number, group?: Array<SVGCircleElement> | NodeListOf<SVGCircleElement>)=> void = circleDrag.on('start'); // fails, handler with wrong datum type

// -----------------------------------------------------------------------------
// Test Attach Drag Behavior
// -----------------------------------------------------------------------------

circles.call(circleDrag);

let wrongSelection: Selection<HTMLDivElement, any, any, any>;

// wrongSelection.call(circleDrag); // fails, as dragged elements are not of type specified for drag behavior

// -----------------------------------------------------------------------------
// Test Drag Event Interface
// -----------------------------------------------------------------------------


let e: d3Drag.D3DragEvent<SVGCircleElement, CircleDatum, CircleDatum | d3Drag.SubjectPosition>;


circleDrag = e.target; // target return drag behavior

let type: string = e.type;
let subject: CircleDatum | d3Drag.SubjectPosition = e.subject;
let x: number = e.x;
let y: number = e.y;
let dx: number = e.dx;
let dy: number = e.dy;
let identified: 'mouse' | number = e.identifier;
let active: number = e.active;
let sourceEvent: any = e.sourceEvent;

// register temporary event listeners (i.e. for current drag gesture in progress only)
// As always, the below tests are for signature only, no functional purpose

// remove event listeners for a given event type
e = e.on('start.tmp', null); // chainability test through reassigment

e = e.on('drag', dragged);
// e = e.on('drag', wrongDragHandler1); // fails, wrong datum type in handler
// e = e.on('drag', wrongDragHandler2); // fails, wrong this-type for DOM Element context

handler = e.on('dragged');
// let wrongHandler3: (this:SVGRectElement, d?:CircleDatum, i?: number, group?: Array<SVGRectElement> | NodeListOf<SVGRectElement>)=> void = e.on('dragged'); // fails, wrong dragged DOM event
// let wrongHandler4: (this:SVGCircleElement, d?:{test: number}, i?: number, group?: Array<SVGCircleElement> | NodeListOf<SVGCircleElement>)=> void = e.on('dragged'); // fails, handler with wrong datum type


// -----------------------------------------------------------------------------
// Test dragDisable() and dragEnable()
// -----------------------------------------------------------------------------

let w: Window;
d3Drag.dragDisable(w);

d3Drag.dragEnable(w);

d3Drag.dragEnable(w, true);
