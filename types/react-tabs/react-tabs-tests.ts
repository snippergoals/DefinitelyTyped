import * as React from "react";
import * as ReactDOM from "react-dom";
import { Tabs, TabList, Tab, TabPanel, resetIdCounter } from "react-tabs";

resetIdCounter();

class TestApp extends React.Component<{}> {
    onSelect = (index: number, last: number, event: Event) => {
        console.log("selected tab: " + index.toString());
        console.log("last tab: " + last.toString());
        console.log("event: " + event.type);
    }

    render() {
        return React.createElement(Tabs, {onSelect: this.onSelect, selectedIndex: 1},
                   React.createElement(TabList, {className: "test-class"},
                       React.createElement(Tab, {disabled: true}, "Tab1"),
                       React.createElement(Tab, {}, "Tab2"),
                       React.createElement(Tab, {}, "Tab3")),
                   React.createElement(TabPanel, {}, React.createElement("h2", {}, "Content1")),
                   React.createElement(TabPanel, {}, React.createElement("h2", {}, "Content2")),
                   React.createElement(TabPanel, {}, React.createElement("h2", {}, "Content3")));
    }
}

ReactDOM.render(React.createElement(TestApp, {}), document.getElementById("test-app"));
