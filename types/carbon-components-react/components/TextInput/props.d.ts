import * as React from "react";
import { ReactInputAttr, RequiresIdProps, ThemeProps, ValidityProps } from "../../typings/shared";

type ExcludedAttributes = "aria-describedby" | "aria-invalid" | "defaultValue" | "id" | "value";
export interface TextInputInheritedProps extends
    Omit<ReactInputAttr, ExcludedAttributes>,
    RequiresIdProps,
    ThemeProps,
    ValidityProps
{
    defaultValue?: TextInputInheritedProps["value"],
    helperText?: React.ReactNode,
    hideLabel?: boolean,
    labelText: NonNullable<React.ReactNode>,
    value?: string | number,
}
