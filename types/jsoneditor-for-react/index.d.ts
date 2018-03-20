// Type definitions for jsoneditor-for-react 0.0.1
// Project: https://github.com/mixj93/jsoneditor-for-react#readme
// Definitions by: JoshGoldberg <https://github.com/joshuakgoldberg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from "react"
import JSONEditor, { JSONEditorOptions } from "jsoneditor"

export interface IReactJsoneditorProps {
    values: Object
}

export default class ReactJsoneditor extends React.Component<IReactJsoneditorProps> {
    private editor?: JSONEditor
    private options?: JSONEditorOptions
}
