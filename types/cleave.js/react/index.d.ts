import * as React from "react";
import { CleaveOptions } from "../options";

type InitHandler = (owner: React.ReactInstance) => void;

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    onInit?: InitHandler;
    options: CleaveOptions;
    htmlRef?: (i: any) => void;
}

declare var Cleave: React.ComponentClass<Props>;
export = Cleave;
