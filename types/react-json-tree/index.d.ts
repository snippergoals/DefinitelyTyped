// Type definitions for react-json-tree v0.6.6
// Project: https://github.com/alexkuz/react-json-tree/
// Definitions by: Grant Nestor <https://github.com/gnestor>
//                 Zain Afzal <https://github.com/zainafzal08>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import {
    Component,
    Props
} from "react";

export interface JSONTreeProps extends Props<JSONTreeComponent> {
    data: [any] | {};
    hideRoot?: boolean;
    theme?: {} | string;
    invertTheme?: boolean;
    keyPath?: [string | number];
    sortObjectKeys?: Function | boolean;
    shouldExpandNode?: (keyPath: (string | number)[], data: [any] | {}, level: number) => boolean;
    getItemString?: (type: string, data: [any] | {}, itemType: string, itemString: string) => JSX.Element;
    labelRenderer?: (keyPath: string[], nodeType?: string, expanded?: boolean, expandable?: boolean) => JSX.Element;
    valueRenderer?: (displayValue: string|number, rawValue?: string|number|boolean|null, ...keyPath: (string|number)[]) => JSX.Element;
    postprocessValue?: (raw: string) => JSX.Element;
    isCustomNode?: () => boolean;
    collectionLimit?: number;
}

export default class JSONTreeComponent extends Component<JSONTreeProps, {}> { }
