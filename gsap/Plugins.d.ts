declare namespace gsap {
    export interface BezierPlugin extends TweenPlugin {
        bezierThrough(values: any[], curviness?: number, quadratic?: boolean, correlate?: string, prepend?: {}, calcDifs?: boolean): {};
        cubicToQuadratic(a: number, b: number, c: number, d: number): any[];
        quadraticToCubic(a: number, b: number, c: number): {};
    }

    export interface CSSRulePlugin extends TweenPlugin {
        getRule(selector: string): {};
    }

    export interface TweenPlugin {
        activate(plugins: any[]): boolean;
    }
}
