// Type definitions for muicss React bindings v09.36
// Project: https://www.muicss.com/
// Definitions by: Samuel Neff <https://github.com/samuelneff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

/// <reference types="react" />

declare module "muicss/react" {
    export import Appbar = Muicss.Appbar;
    export import Button = Muicss.Button;
    export import Checkbox = Muicss.Checkbox;
    export import Col = Muicss.Col;
    export import Container = Muicss.Container;
    export import Divider = Muicss.Divider;
    export import Dropdown = Muicss.Dropdown;
    export import DropdownItem = Muicss.DropdownItem;
    export import Form = Muicss.Form;
    export import Input = Muicss.Input;
    export import Option = Muicss.Option;
    export import Panel = Muicss.Panel;
    export import Radio = Muicss.Radio;
    export import Row = Muicss.Row;
    export import Select = Muicss.Select;
    export import Tab = Muicss.Tab;
    export import Tabs = Muicss.Tabs;
    export import Textarea = Muicss.Textarea;
}

declare module 'muicss/lib/react/appbar' {
    export import Appbar = Muicss.Appbar;
    export default Appbar;
}

declare module 'muicss/lib/react/button' {
    export import Button = Muicss.Button;
    export default Button;
}

declare module 'muicss/lib/react/checkbox' {
    export import Checkbox = Muicss.Checkbox;
    export default Checkbox;
}

declare module 'muicss/lib/react/col' {
    export import Col = Muicss.Col;
    export default Col;
}

declare module 'muicss/lib/react/container' {
    export import Container = Muicss.Container;
    export default Container;
}

declare module 'muicss/lib/react/divider' {
    export import Divider = Muicss.Divider;
    export default Divider;
}

declare module 'muicss/lib/react/dropdown' {
    export import Dropdown = Muicss.Dropdown;
    export default Dropdown;
}

declare module 'muicss/lib/react/dropdown-item' {
    export import DropdownItem = Muicss.DropdownItem;
    export default DropdownItem;
}

declare module 'muicss/lib/react/form' {
    export import Form = Muicss.Form;
    export default Form;
}

declare module 'muicss/lib/react/input' {
    export import Input = Muicss.Input;
    export default Input;
}

declare module 'muicss/lib/react/option' {
    export import Option = Muicss.Option;
    export default Option;
}

declare module 'muicss/lib/react/panel' {
    export import Panel = Muicss.Panel;
    export default Panel;
}

declare module 'muicss/lib/react/radio' {
    export import Radio = Muicss.Radio;
    export default Radio;
}

declare module 'muicss/lib/react/row' {
    export import Row = Muicss.Row;
    export default Row;
}

declare module 'muicss/lib/react/select' {
    export import Select = Muicss.Select;
    export default Select;
}

declare module 'muicss/lib/react/tab' {
    export import Tab = Muicss.Tab;
    export default Tab;
}

declare module 'muicss/lib/react/tabs' {
    export import Tabs = Muicss.Tabs;
    export default Tabs;
}

declare module 'muicss/lib/react/textarea' {
    export import Textarea = Muicss.Textarea;
    export default Textarea;
}

declare namespace Muicss {
    export class Appbar extends React.Component<DivProps> {}
    export class Button extends React.Component<ButtonProps> {}
    export class Checkbox extends React.Component<CheckboxProps> {}
    export class Col extends React.Component<ColProps> {}
    export class Container extends React.Component<ContainerProps> {}
    export class Divider extends React.Component<DividerProps> {}
    export class Dropdown extends React.Component<DropdownProps> {}
    export class DropdownItem extends React.Component<DropdownItemProps> {}
    export class Form extends React.Component<FormProps> {}
    export class Input extends React.Component<InputProps> {}
    export class Panel extends React.Component<PanelProps> {}
    export class Option extends React.Component<OptionProps> {}
    export class Radio extends React.Component<RadioProps> {}
    export class Row extends React.Component<RowProps> {}
    export class Select extends React.Component<SelectProps> {}
    export class Tab extends React.Component<TabProps> {}
    export class Tabs extends React.Component<TabsProps> {}
    export class Textarea extends React.Component<TextareaProps> {}

    export interface ButtonProps extends React.DetailedHTMLFactory<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
        color?: string;
        size?: string;
        variant?: string;
        onMouseDown?: React.MouseEventHandler<{}>;
        onMouseUp?: React.MouseEventHandler<{}>;
        onMouseLeave?: React.MouseEventHandler<{}>;
        onTouchStart?: React.MouseEventHandler<{}>;
        onTouchEnd?: React.MouseEventHandler<{}>;
    }

    export interface CheckboxProps extends React.DetailedHTMLFactory<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        label?: React.ReactNode;
        autoFocus?: boolean;
        checked?: boolean;
        defaultChecked?: boolean;
        defaultValue?: string | string[];
        disabled?: boolean;
        form?: string;
        name?: string;
        required?: boolean;
        value?: string | string[] | number;
        onChange?: React.ChangeEventHandler<HTMLInputElement>;
    }

    export interface ColProps extends DivProps {
        xs?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
        'xs-offset'?: number;
        'sm-offset'?: number;
        'md-offset'?: number;
        'lg-offset'?: number;
        'xl-offset'?: number;
    }

    export interface ContainerProps extends DivProps {
        fluid?: boolean;
    }

    export interface DivProps extends React.DetailedHTMLFactory<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
    export interface DividerProps extends DivProps {}

    export interface DropdownItemProps extends React.DetailedHTMLFactory<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
        link?: string;
        target?: string;
        value?: any;
    }

    export interface DropdownProps extends React.DetailedHTMLFactory<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
        onSelect?: React.MouseEventHandler<HTMLDivElement>; // proxy of menu item's onClick
        onClick?: React.MouseEventHandler<HTMLDivElement>; // click the button to show dropdown
        onOutsideClick?: React.MouseEventHandler<HTMLDivElement>;
        onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;

        color?: string;
        variant?: string;
        size?: string;
        label?: React.ReactNode;
        alignMenu?: 'left' | 'right';
        disabled?: boolean;
    }

    export interface FormProps extends React.DetailedHTMLFactory<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
        inline?: boolean;
    }

    export interface InputProps extends React.DetailedHTMLFactory<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
        inputRef?: React.Ref<HTMLInputElement>;
        onLabelClick?: React.MouseEventHandler<HTMLInputElement>;
        hint?: string; // placeholder
        invalid?: boolean;
        label?: React.ReactNode;
        floatingLabel?: boolean;
    }

    export interface OptionProps extends React.DetailedHTMLFactory<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement> {
        label?: string;
        value?: string | string[] | number;
    }

    export interface PanelProps extends DivProps {}
    export interface RadioProps extends CheckboxProps {}

    export interface RowProps extends DivProps {
        xs?: number;
        sm?: number;
        md?: number;
        lg?: number;
    }

    export interface SelectProps extends DivProps {
        label?: React.ReactNode;
        name?: string;
        readOnly?: boolean;
        useDefault?: boolean;
        onChange?: React.ChangeEventHandler<HTMLDivElement>;
        onClick?: React.MouseEventHandler<HTMLDivElement>;
        onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
    }

    export interface TabProps {
        value?: any;
        label?: React.ReactNode;
        onActive?: (tab: Tab) => void;
    }

    export interface TabsProps extends DivProps {
        defaultSelectedIndex?: number;
        selectedIndex?: number;
        justified?: boolean;
        onChange?: (index: number, value: any, tab: Tab, event: Event) => void;
    }

    export interface TextareaProps extends React.DetailedHTMLFactory<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
        inputRef?: React.Ref<HTMLTextAreaElement>;
        onLabelClick?: React.MouseEventHandler<HTMLInputElement>;
        hint?: string; // placeholder
        invalid?: boolean;
        label?: React.ReactNode;
        floatingLabel?: boolean;
    }
}
