import * as React from "react";
import { EmbeddedTooltipProps } from "../../typings/shared";
import { TextInputInheritedProps } from "./props";

interface InheritedProps extends TextInputInheritedProps, EmbeddedTooltipProps { }

export interface PasswordInputProps extends InheritedProps { }

declare const PasswordInput: React.FC<PasswordInputProps>;

export default PasswordInput;
