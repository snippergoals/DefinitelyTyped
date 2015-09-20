// Type definitions for material-ui v0.11.1
// Project: https://github.com/callemall/material-ui
// Definitions by: Nathan Brown <https://github.com/ngbrown>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///<reference path='../react/react.d.ts' />

declare module "material-ui" {
    // The reason for exporting the namespace types (__MaterialUI.*) is to also export the type for casting variable.

    export import AppBar = __MaterialUI.AppBar; // require('material-ui/lib/app-bar');
    export import AppCanvas = __MaterialUI.AppCanvas; // require('material-ui/lib/app-canvas');
    export import Avatar = __MaterialUI.Avatar; // require('material-ui/lib/avatar');
    export import BeforeAfterWrapper = __MaterialUI.BeforeAfterWrapper; // require('material-ui/lib/before-after-wrapper');
    export import Card = __MaterialUI.Card.Card; // require('material-ui/lib/card/card');
    export import CardActions = __MaterialUI.Card.CardActions; // require('material-ui/lib/card/card-actions');
    export import CardExpandable = __MaterialUI.Card.CardExpandable; // require('material-ui/lib/card/card-expandable');
    export import CardHeader = __MaterialUI.Card.CardHeader; // require('material-ui/lib/card/card-header');
    export import CardMedia = __MaterialUI.Card.CardMedia; // require('material-ui/lib/card/card-media');
    export import CardText = __MaterialUI.Card.CardText; // require('material-ui/lib/card/card-text');
    export import CardTitle = __MaterialUI.Card.CardTitle; // require('material-ui/lib/card/card-title');
    export import Checkbox = __MaterialUI.Checkbox; // require('material-ui/lib/checkbox');
    export import CircularProgress = __MaterialUI.CircularProgress; // require('material-ui/lib/circular-progress');
    export import ClearFix = __MaterialUI.ClearFix; // require('material-ui/lib/clearfix');
    export import DatePicker = __MaterialUI.DatePicker.DatePicker; // require('material-ui/lib/date-picker/date-picker');
    export import DatePickerDialog = __MaterialUI.DatePicker.DatePickerDialog; // require('material-ui/lib/date-picker/date-picker-dialog');
    export import Dialog = __MaterialUI.Dialog // require('material-ui/lib/dialog');
    export import DropDownIcon = __MaterialUI.DropDownIcon; // require('material-ui/lib/drop-down-icon');
    export import DropDownMenu = __MaterialUI.DropDownMenu; // require('material-ui/lib/drop-down-menu');
    export import EnhancedButton = __MaterialUI.EnhancedButton; // require('material-ui/lib/enhanced-button');
    export import FlatButton = __MaterialUI.FlatButton; // require('material-ui/lib/flat-button');
    export import FloatingActionButton = __MaterialUI.FloatingActionButton; // require('material-ui/lib/floating-action-button');
    export import FontIcon = __MaterialUI.FontIcon; // require('material-ui/lib/font-icon');
    export import IconButton = __MaterialUI.IconButton; // require('material-ui/lib/icon-button');
    export import IconMenu = __MaterialUI.Menus.IconMenu; // require('material-ui/lib/menus/icon-menu');
    export import LeftNav = __MaterialUI.LeftNav; // require('material-ui/lib/left-nav');
    export import LinearProgress = __MaterialUI.LinearProgress; // require('material-ui/lib/linear-progress');
    export import List = __MaterialUI.Lists.List; // require('material-ui/lib/lists/list');
    export import ListDivider = __MaterialUI.Lists.ListDivider; // require('material-ui/lib/lists/list-divider');
    export import ListItem = __MaterialUI.Lists.ListItem; // require('material-ui/lib/lists/list-item');
    export import Menu = __MaterialUI.Menu.Menu; // require('material-ui/lib/menu/menu');
    export import MenuItem = __MaterialUI.Menu.MenuItem; // require('material-ui/lib/menu/menu-item');
    export import Mixins = __MaterialUI.Mixins; // require('material-ui/lib/mixins/');
    export import Overlay = __MaterialUI.Overlay; // require('material-ui/lib/overlay');
    export import Paper = __MaterialUI.Paper; // require('material-ui/lib/paper');
    export import RadioButton = __MaterialUI.RadioButton; // require('material-ui/lib/radio-button');
    export import RadioButtonGroup = __MaterialUI.RadioButtonGroup; // require('material-ui/lib/radio-button-group');
    export import RaisedButton = __MaterialUI.RaisedButton; // require('material-ui/lib/raised-button');
    export import RefreshIndicator = __MaterialUI.RefreshIndicator; // require('material-ui/lib/refresh-indicator');
    export import Ripples = __MaterialUI.Ripples; // require('material-ui/lib/ripples/');
    export import SelectField = __MaterialUI.SelectField; // require('material-ui/lib/select-field');
    export import Slider = __MaterialUI.Slider; // require('material-ui/lib/slider');
    export import SvgIcon = __MaterialUI.SvgIcon; // require('material-ui/lib/svg-icon');

    import NavigationMenu = require('material-ui/lib/svg-icons/navigation/menu');
    import NavigationChevronLeft = require('material-ui/lib/svg-icons/navigation/chevron-left');
    import NavigationChevronRight = require('material-ui/lib/svg-icons/navigation/chevron-right');
    export var Icons: {
        NavigationMenu: __MaterialUI.NavigationMenu;
        NavigationChevronLeft: __MaterialUI.NavigationChevronLeft;
        NavigationChevronRight: __MaterialUI.NavigationChevronRight;
    };

    export import Styles = __MaterialUI.Styles; // require('material-ui/lib/styles/');
    export import Snackbar = __MaterialUI.Snackbar; // require('material-ui/lib/snackbar');
    export import Tab = __MaterialUI.Tabs.Tab; // require('material-ui/lib/tabs/tab');
    export import Tabs = __MaterialUI.Tabs.Tabs; // require('material-ui/lib/tabs/tabs');
    export import Table = __MaterialUI.Table.Table; // require('material-ui/lib/table/table');
    export import TableBody = __MaterialUI.Table.TableBody; // require('material-ui/lib/table/table-body');
    export import TableFooter = __MaterialUI.Table.TableFooter; // require('material-ui/lib/table/table-footer');
    export import TableHeader = __MaterialUI.Table.TableHeader; // require('material-ui/lib/table/table-header');
    export import TableHeaderColumn = __MaterialUI.Table.TableHeaderColumn; // require('material-ui/lib/table/table-header-column');
    export import TableRow = __MaterialUI.Table.TableRow; // require('material-ui/lib/table/table-row');
    export import TableRowColumn = __MaterialUI.Table.TableRowColumn; // require('material-ui/lib/table/table-row-column');
    export import Theme = __MaterialUI.Theme; // require('material-ui/lib/theme');
    export import Toggle = __MaterialUI.Toggle; // require('material-ui/lib/toggle');
    export import TimePicker = __MaterialUI.TimePicker; // require('material-ui/lib/time-picker');
    export import TextField = __MaterialUI.TextField; // require('material-ui/lib/text-field');
    export import Toolbar = __MaterialUI.Toolbar.Toolbar; // require('material-ui/lib/toolbar/toolbar');
    export import ToolbarGroup = __MaterialUI.Toolbar.ToolbarGroup; // require('material-ui/lib/toolbar/toolbar-group');
    export import ToolbarSeparator = __MaterialUI.Toolbar.ToolbarSeparator; // require('material-ui/lib/toolbar/toolbar-separator');
    export import ToolbarTitle = __MaterialUI.Toolbar.ToolbarTitle; // require('material-ui/lib/toolbar/toolbar-title');
    export import Tooltip = __MaterialUI.Tooltip; // require('material-ui/lib/tooltip');
    export import Utils = __MaterialUI.Utils; // require('material-ui/lib/utils/');

    // export type definitions
    export import TouchTapEvent = __MaterialUI.TouchTapEvent;
    export import TouchTapEventHandler = __MaterialUI.TouchTapEventHandler;
    export import DialogAction = __MaterialUI.DialogAction;
}

declare namespace __MaterialUI {
    import React = __React;

    // ReactLink is from "react/addons"
    interface ReactLink<T> {
        value: T;
        requestChange(newValue: T): void;
    }

    // What's common between React.TouchEvent and React.MouseEvent
    interface TouchTapEvent extends React.SyntheticEvent {
        altKey: boolean;
        ctrlKey: boolean;
        getModifierState(key: string): boolean;
        metaKey: boolean;
        shiftKey: boolean;
    }

    // What's common between React.TouchEventHandler and React.MouseEventHandler
    interface TouchTapEventHandler extends React.EventHandler<TouchTapEvent> { }

    // more specific than React.HTMLAttributes

    interface AppBarProp extends React.Props<React.Component<any, any>> {
        ref?: string | ((component: AppBar) => any);

        iconClassNameLeft?: string;
        iconClassNameRight?: string;
        iconElementLeft?: React.ReactElement<any>;
        iconElementRight?: React.ReactElement<any>;
        iconStyleRight?: string;
        style?: React.CSSProperties;
        showMenuIconButton?: boolean;
        title?: any;
        zDepth?: number;

        onLeftIconButtonTouchTap?: TouchTapEventHandler;
        onRightIconButtonTouchTap?: TouchTapEventHandler;
    }
    export class AppBar extends React.Component<AppBarProp, any>{
    }

    interface AppCanvasProp extends React.Props<AppCanvas> {
        ref?: string | ((component: AppCanvas) => any);

    }
    export class AppCanvas extends React.Component<AppCanvasProp, any> {
    }

    interface AvatarProp extends React.Props<Avatar> {
        ref?: string | ((component: AvatarProp) => any);

        icon?: React.ReactElement<any>;
        backgroundColor?: string;
        color?: string;
        size?: number;
        src?: string;
        style?: React.CSSProperties;
    }
    export class Avatar extends React.Component<AvatarProp, any> {
    }

    interface BeforeAfterWrapperProp extends React.Props<BeforeAfterWrapper> {
        ref?: string | ((component: BeforeAfterWrapper) => any);

    }
    export class BeforeAfterWrapper extends React.Component<BeforeAfterWrapperProp, any> {
    }

    namespace Card {

        interface CardProp extends React.Props<Card> {
            ref?: string | ((component: Card) => any);

            initiallyExpanded?: boolean;
            onExpandedChange?: (isExpanded: boolean) => void;
            style?: React.CSSProperties;
        }
        export class Card extends React.Component<CardProp, any> {
        }

        interface CardActionsProp extends React.Props<CardActions> {
            ref?: string | ((component: CardActions) => any);

            expandable?: boolean;
            showExpandableButton?: boolean;
        }
        export class CardActions extends React.Component<CardActionsProp, any> {
        }

        interface CardExpandableProp extends React.Props<CardExpandable> {
            ref?: string | ((component: CardExpandable) => any);

            onExpanding: (isExpanded: boolean) => void;
            expanded: boolean;
        }
        export class CardExpandable extends React.Component<CardExpandableProp, any> {
        }

        interface CardHeaderProp extends React.Props<CardHeader> {
            ref?: string | ((component: CardHeader) => any);

            expandable?: boolean;
            showExpandableButton?: boolean;
            title?: string | React.ReactElement<any>;
            titleColor?: string;
            titleStyle?: React.CSSProperties;
            subtitle?: string | React.ReactElement<any>;
            subtitleColor?: string;
            subtitleStyle?: React.CSSProperties;
            textStyle?: React.CSSProperties;
            style?: React.CSSProperties;
            avatar: React.ReactElement<any> | string;
        }
        export class CardHeader extends React.Component<CardHeaderProp, any> {
        }

        interface CardMediaProp extends React.Props<CardMedia> {
            ref?: string | ((component: CardMedia) => any);

            expandable?: boolean;
            overlay?: React.ReactElement<any>;
            overlayStyle?: React.CSSProperties;
            overlayContainerStyle?: React.CSSProperties;
            overlayContentStyle?: React.CSSProperties;
            mediaStyle?: React.CSSProperties;
            style?: React.CSSProperties;
        }
        export class CardMedia extends React.Component<CardMediaProp, any> {
        }

        interface CardTextProp extends React.Props<CardText> {
            ref?: string | ((component: CardText) => any);

            expandable?: boolean;
            color?: string;
            style?: React.CSSProperties;
        }
        export class CardText extends React.Component<CardTextProp, any> {
        }

        interface CardTitleProp extends React.Props<CardTitle> {
            ref?: string | ((component: CardTitle) => any);

            expandable?: boolean;
            showExpandableButton?: boolean;
            title?: string | React.ReactElement<any>;
            titleColor?: string;
            titleStyle?: React.CSSProperties;
            subtitle?: string | React.ReactElement<any>;
            subtitleColor?: string;
            subtitleStyle?: React.CSSProperties;
            textStyle?: React.CSSProperties;
            style?: React.CSSProperties;
        }
        export class CardTitle extends React.Component<CardTitleProp, any> {
        }
    }

    // what's not commonly overridden by Checkbox, RadioButton, or Toggle
    interface CommonEnhancedSwitchProp<T> extends React.HTMLAttributesBase<T> {
        // <input/> is root element
        id?: string;
        iconStyle?: React.CSSProperties;
        labelStyle?: React.CSSProperties;
        rippleStyle?: React.CSSProperties;
        thumbStyle?: React.CSSProperties;
        trackStyle?: React.CSSProperties;
        name?: string;
        value?: string;
        label?: string;
        required?: boolean;
        disabled?: boolean;
        defaultSwitched?: boolean;
        disableFocusRipple?: boolean;
        disableTouchRipple?: boolean;
    }

    interface EnhancedSwitchProp extends CommonEnhancedSwitchProp<EnhancedSwitch> {
        // <input/> is root element
        inputType: string;
        switchElement: React.ReactElement<any>;
        onParentShouldUpdate: (isInputChecked: boolean) => void;
        switched: boolean;
        rippleColor?: string;
        onSwitch?: (e: React.MouseEvent, isInputChecked: boolean) => void;
        labelPosition?: string;
    }
    export class EnhancedSwitch extends React.Component<EnhancedSwitchProp, any> {
        isSwitched(): boolean;
        setSwitched(newSwitchedValue: boolean): void;
        getValue(): any;
        isKeyboardFocused(): boolean;
    }

    interface CheckboxProp extends CommonEnhancedSwitchProp<Checkbox> {
        // <EnhancedSwitch/> is root element
        ref?: string | ((component: Checkbox) => any);

        checkedIcon?: React.ReactElement<{ style?: React.CSSProperties }>; // Normally an SvgIcon
        defaultChecked?: boolean;
        iconStyle?: React.CSSProperties;
        label?: string;
        labelStyle?: React.CSSProperties;
        labelPosition?: string;
        style?: React.CSSProperties;
        checked?: boolean;
        unCheckedIcon?: React.ReactElement<{ style?: React.CSSProperties }>; // Normally an SvgIcon

        disabled?: boolean;
        valueLink?: ReactLink<boolean>;
        checkedLink?: ReactLink<boolean>;

        onCheck?: (event: React.MouseEvent, checked: boolean) => void;
    }
    export class Checkbox extends React.Component<CheckboxProp, any> {
        isChecked(): void;
        setChecked(newCheckedValue: boolean): void;
    }

    interface CircularProgressProp extends React.Props<CircularProgress> {
        ref?: string | ((component: CircularProgress) => any);

    }
    export class CircularProgress extends React.Component<CircularProgressProp, any> {
    }

    interface ClearFixProp extends React.Props<ClearFix> {
        ref?: string | ((component: ClearFix) => any);

    }
    export class ClearFix extends React.Component<ClearFixProp, any> {
    }

    namespace DatePicker {
        interface DatePickerProp extends React.Props<DatePicker> {
            ref?: string | ((component: DatePicker) => any);

        }
        export class DatePicker extends React.Component<DatePickerProp, any> {
        }

        interface DatePickerDialogProp extends React.Props<DatePickerDialog> {
            ref?: string | ((component: DatePickerDialog) => any);

        }
        export class DatePickerDialog extends React.Component<DatePickerDialogProp, any> {
        }
    }

    export interface DialogAction {
        text: string;
        ref?: string;

        onTouchTap?: TouchTapEventHandler;
        onClick?: React.MouseEventHandler;
    }
    interface DialogProp extends React.Props<Dialog> {
        ref?: string | ((component: Dialog) => any);

        actions?: Array<DialogAction | React.ReactElement<any>>;
        actionFocus?: string;
        contentClassName?: string;
        contentInnerStyle?: React.CSSProperties;
        contentStyle?: React.CSSProperties;
        modal?: boolean;
        openImmediately?: boolean;
        title?: any;
        autoDetectWindowHeight?: boolean;
        autoScrollBodyContent?: boolean;

        onDismiss?: () => void;
        onShow?: () => void;
    }
    export class Dialog extends React.Component<DialogProp, any> {
        dismiss(): void;
        show(): void;
    }

    interface DropDownIconProp extends React.Props<DropDownIcon> {
        ref?: string | ((component: DropDownIcon) => any);

    }
    export class DropDownIcon extends React.Component<DropDownIconProp, any> {
    }

    interface DropDownMenuProp extends React.Props<DropDownMenu> {
        ref?: string | ((component: DropDownMenu) => any);

        displayMember?: string;
        valueMember?: string;
        autoWidth?: boolean;
        menuItems?: Array<{ text: string, payload: string } | {}>;
        menuItemStyle?: React.CSSProperties[];
        selectedIndex?: number;
        underlineStyle?: React.CSSProperties;
        iconStyle?: React.CSSProperties;
        labelStyle?: React.CSSProperties;
        style?: React.CSSProperties;
        disabled?: boolean;
        valueLink?: ReactLink<any>;
        value?: number;

        onChange?: (e: TouchTapEvent, selectedIndex: number, menuItem: any) => void;
    }
    export class DropDownMenu extends React.Component<DropDownMenuProp, any> {
    }

    // non generally overridden elements of EnhancedButton
    interface SharedEnhancedButtonProp<T> extends React.HTMLAttributesBase<T> {
        containerElement?: string | React.ReactElement<any>;
        disabled?: boolean;
        disableFocusRipple?: boolean;
        disableKeyboardFocus?: boolean;
        disableTouchRipple?: boolean;
        keyboardFocused?: boolean;
        linkButton?: boolean;
        focusRippleColor?: string;
        focusRippleOpacity?: number;
        touchRippleOpacity?: number;
        tabIndex?: number;

        onBlur?: React.FocusEventHandler;
        onFocus?: React.FocusEventHandler;
        onKeyDown?: React.KeyboardEventHandler;
        onKeyUp?: React.KeyboardEventHandler;
        onMouseEnter?: React.MouseEventHandler;
        onMouseLeave?: React.MouseEventHandler;
        onTouchStart?: React.TouchEventHandler;
        onTouchEnd?: React.TouchEventHandler;
        onTouchTap?: TouchTapEventHandler;
    }

    interface EnhancedButtonProp extends SharedEnhancedButtonProp<EnhancedButton> {
        ref?: string | ((component: EnhancedButton) => any);

        onKeyboardFocus?: (e: React.FocusEvent, isKeyboardFocused: boolean) => void;
        touchRippleColor?: string;
        focusRippleColor?: string;
        style?: React.CSSProperties;
    }
    export class EnhancedButton extends React.Component<EnhancedButtonProp, any> {
    }

    interface FlatButtonProp extends SharedEnhancedButtonProp<FlatButton> {
        ref?: string | ((component: FlatButton) => any);

        hoverColor?: string;
        label?: string;
        labelPosition?: string;
        labelStyle?: React.CSSProperties;
        linkButton?: boolean;
        primary?: boolean;
        secondary?: boolean;
        rippleColor?: string;
        style?: React.CSSProperties;

        onKeyboardFocus?: (e: React.KeyboardEvent, isKeyboardFocused: boolean) => void;
    }
    export class FlatButton extends React.Component<FlatButtonProp, any> {
    }

    interface FloatingActionButtonProp extends SharedEnhancedButtonProp<FloatingActionButton> {
        ref?: string | ((component: FloatingActionButton) => any);

        backgroundColor?: string;
        disabled?: boolean;
        disabledColor?: string;
        iconClassName?: string;
        iconStyle?: React.CSSProperties;
        mini?: boolean;
        secondary?: boolean;
        style?: React.CSSProperties;
    }
    export class FloatingActionButton extends React.Component<FloatingActionButtonProp, any> {
    }

    interface FontIconProp extends React.Props<FontIcon> {
        ref?: string | ((component: FontIcon) => any);

        color?: string;
        hoverColor?: string;
        onMouseLeave?: React.MouseEventHandler;
        onMouseEnter?: React.MouseEventHandler;
        style?: React.CSSProperties;
        className?: string;
    }
    export class FontIcon extends React.Component<FontIconProp, any> {
    }

    interface IconButtonProp extends SharedEnhancedButtonProp<IconButton> {
        ref?: string | ((component: IconButton) => any);

        iconClassName?: string;
        iconStyle?: React.CSSProperties;
        style?: React.CSSProperties;
        tooltip?: string;
        tooltipPosition?: string;
        tooltipStyles?: React.CSSProperties;
        touch?: boolean;

        onBlur?: React.FocusEventHandler;
        onFocus?: React.FocusEventHandler;
    }
    export class IconButton extends React.Component<IconButtonProp, any> {
    }

    interface LeftNavProp extends React.Props<LeftNav> {
        ref?: string | ((component: LeftNav) => any);

    }
    export class LeftNav extends React.Component<LeftNavProp, any> {
    }

    interface LinearProgressProp extends React.Props<LinearProgress> {
        ref?: string | ((component: LinearProgress) => any);

    }
    export class LinearProgress extends React.Component<LinearProgressProp, any> {
    }

    namespace Lists {
        interface ListProp extends React.Props<List> {
            ref?: string | ((component: List) => any);

        }
        export class List extends React.Component<ListProp, any> {
        }

        interface ListDividerProp extends React.Props<ListDivider> {
            ref?: string | ((component: ListDivider) => any);

        }
        export class ListDivider extends React.Component<ListDividerProp, any> {
        }

        interface ListItemProp extends React.Props<ListItem> {
            ref?: string | ((component: ListItem) => any);

        }
        export class ListItem extends React.Component<ListItemProp, any> {
        }
    }

    namespace Menu {
        interface MenuProp extends React.Props<Menu> {
            ref?: string | ((component: Menu) => any);

        }
        export class Menu extends React.Component<MenuProp, any> {
        }

        interface MenuItemProp extends React.Props<MenuItem> {
            ref?: string | ((component: MenuItem) => any);

        }
        export class MenuItem extends React.Component<MenuItemProp, any> {
        }
    }

    export namespace Mixins {
        interface ClickAwayable extends React.Mixin<any, any> {
        }
        var ClickAwayable: ClickAwayable

        interface WindowListenable extends React.Mixin<any, any> {
        }
        var WindowListenable: WindowListenable;

        interface StylePropable extends React.Mixin<any, any> {
        }
        var StylePropable: StylePropable

        interface StyleResizable extends React.Mixin<any, any> {
        }
        var StyleResizable: StyleResizable
    }

    interface OverlayProp extends React.Props<Overlay> {
        ref?: string | ((component: Overlay) => any);

    }
    export class Overlay extends React.Component<OverlayProp, any> {
    }

    interface PaperProp extends React.Props<Paper> {
        ref?: string | ((component: Paper) => any);

    }
    export class Paper extends React.Component<PaperProp, any> {
    }

    interface RadioButtonProp extends CommonEnhancedSwitchProp<RadioButton> {
        // <EnhancedSwitch/> is root element
        ref?: string | ((component: RadioButton) => any);

        defaultChecked?: boolean;
        iconStyle?: React.CSSProperties;
        label?: string;
        labelStyle?: React.CSSProperties;
        labelPosition?: string;
        style?: React.CSSProperties;
        value?: string;
    }
    export class RadioButton extends React.Component<RadioButtonProp, any> {
    }

    interface RadioButtonGroupProp extends React.Props<RadioButtonGroup> {
        ref?: string | ((component: RadioButtonGroup) => any);

        defaultSelected?: string;
        labelPosition?: string;
        name: string;
        style?: React.CSSProperties;
        valueSelected?: string;

        onChange?: (e: React.FormEvent, selected: string) => void;
    }
    export class RadioButtonGroup extends React.Component<RadioButtonGroupProp, any> {
        getSelectedValue(): string;
        setSelectedValue(newSelectionValue: string): void;
        clearValue(): void;
    }

    interface RaisedButtonProp extends SharedEnhancedButtonProp<RaisedButton> {
        ref?: string | ((component: RaisedButton) => any);

        className?: string;
        disabled?: boolean;
        label?: string;
        primary?: boolean;
        secondary?: boolean;
        labelStyle?: React.CSSProperties;
        backgroundColor?: string;
        labelColor?: string;
        disabledBackgroundColor?: string;
        disabledLabelColor?: string;
        fullWidth?: boolean;
    }
    export class RaisedButton extends React.Component<RaisedButtonProp, any> {
    }

    interface RefreshIndicatorProp extends React.Props<RefreshIndicator> {
        ref?: string | ((component: RefreshIndicator) => any);

    }
    export class RefreshIndicator extends React.Component<RefreshIndicatorProp, any> {
    }

    namespace Ripples {
        interface CircleRippleProp extends React.Props<CircleRipple> {
            ref?: string | ((component: CircleRipple) => any);

        }
        export class CircleRipple extends React.Component<CircleRippleProp, any> {
        }

        interface FocusRippleProp extends React.Props<FocusRipple> {
            ref?: string | ((component: FocusRipple) => any);

        }
        export class FocusRipple extends React.Component<FocusRippleProp, any> {
        }

        interface TouchRippleProp extends React.Props<TouchRipple> {
            ref?: string | ((component: TouchRipple) => any);

        }
        export class TouchRipple extends React.Component<TouchRippleProp, any> {
        }
    }

    interface SelectFieldProp extends React.Props<SelectField> {
        ref?: string | ((component: SelectField) => any);

        // passed to TextField
        errorStyle?: React.CSSProperties;
        errorText?: string;
        floatingLabelText?: string;
        floatingLabelStyle?: React.CSSProperties;
        fullWidth?: boolean;
        hintText?: string | React.ReactElement<any>;

        // passed to DropDownMenu
        displayMember?: string;
        valueMember?: string;
        autoWidth?: boolean;
        menuItems?: Array<{ text: string, payload: string } | {}>;
        menuItemStyle?: React.CSSProperties[];
        selectedIndex?: number;
        underlineStyle?: React.CSSProperties;
        iconStyle?: React.CSSProperties;
        labelStyle?: React.CSSProperties;
        style?: React.CSSProperties;
        disabled?: boolean;
        valueLink?: ReactLink<any>;
        value?: number;

        onChange?: (e: TouchTapEvent, selectedIndex: number, menuItem: any) => void;

        // own properties
        selectFieldRoot?: string;
    }
    export class SelectField extends React.Component<SelectFieldProp, any> {
    }

    interface SliderProp extends React.Props<Slider> {
        ref?: string | ((component: Slider) => any);

    }
    export class Slider extends React.Component<SliderProp, any> {
    }

    interface SvgIconProp extends React.Props<SvgIcon> {
        ref?: string | ((component: SvgIcon) => any);

    }
    export class SvgIcon extends React.Component<SvgIconProp, any> {
    }

    interface NavigationMenuProp extends React.Props<NavigationMenu> {
        ref?: string | ((component: NavigationMenu) => any);

    }
    export class NavigationMenu extends React.Component<NavigationMenuProp, any> {
    }

    interface NavigationChevronLeftProp extends React.Props<NavigationChevronLeft> {
        ref?: string | ((component: NavigationChevronLeft) => any);

    }
    export class NavigationChevronLeft extends React.Component<NavigationChevronLeftProp, any> {
    }

    interface NavigationChevronRightProp extends React.Props<NavigationChevronRight> {
        ref?: string | ((component: NavigationChevronRight) => any);

    }
    export class NavigationChevronRight extends React.Component<NavigationChevronRightProp, any> {
    }

    export namespace Styles {
        interface AutoPrefix {
            all(styles: any): any;
            set(style: any, key: string, value: string | number): void;
            single(key: string): string;
            singleHyphened(key: string): string;
        }
        export var AutoPrefix: AutoPrefix;

        interface Spacing {
            iconSize?: number;

            desktopGutter?: number;
            desktopGutterMore?: number;
            desktopGutterLess?: number;
            desktopGutterMini?: number;
            desktopKeylineIncrement?: number;
            desktopDropDownMenuItemHeight?: number;
            desktopDropDownMenuFontSize?: number;
            desktopLeftNavMenuItemHeight?: number;
            desktopSubheaderHeight?: number;
            desktopToolbarHeight?: number;
        }
        interface ThemePalette {
            primary1Color?: string,
            primary2Color?: string,
            primary3Color?: string,
            accent1Color?: string,
            accent2Color?: string,
            accent3Color?: string,
            textColor?: string,
            canvasColor?: string,
            borderColor?: string,
            disabledColor?: string
        }
        interface Theme {
            appBar?: {
                color?: string,
                textColor?: string,
                height?: number
            },
            button?: {
                height?: number,
                minWidth?: number,
                iconButtonSize?: number
            },
            checkbox?: {
                boxColor?: string,
                checkedColor?: string,
                requiredColor?: string,
                disabledColor?: string,
                labelColor?: string,
                labelDisabledColor?: string
            },
            datePicker?: {
                color?: string,
                textColor?: string,
                calendarTextColor?: string,
                selectColor?: string,
                selectTextColor?: string,
            },
            dropDownMenu?: {
                accentColor?: string,
            },
            flatButton?: {
                color?: string,
                textColor?: string,
                primaryTextColor?: string,
                secondaryTextColor?: string,
                disabledColor?: string
            },
            floatingActionButton?: {
                buttonSize?: number,
                miniSize?: number,
                color?: string,
                iconColor?: string,
                secondaryColor?: string,
                secondaryIconColor?: string,
                disabledColor?: string,
                disabledTextColor?: string
            },
            leftNav?: {
                width?: number,
                color?: string,
            },
            menu?: {
                backgroundColor?: string,
                containerBackgroundColor?: string,
            },
            menuItem?: {
                dataHeight?: number,
                height?: number,
                hoverColor?: string,
                padding?: number,
                selectedTextColor?: string,
            },
            menuSubheader?: {
                padding?: number,
                borderColor?: string,
                textColor?: string,
            },
            paper?: {
                backgroundColor?: string,
            },
            radioButton?: {
                borderColor?: string,
                backgroundColor?: string,
                checkedColor?: string,
                requiredColor?: string,
                disabledColor?: string,
                size?: number,
                labelColor?: string,
                labelDisabledColor?: string
            },
            raisedButton?: {
                color?: string,
                textColor?: string,
                primaryColor?: string,
                primaryTextColor?: string,
                secondaryColor?: string,
                secondaryTextColor?: string,
                disabledColor?: string,
                disabledTextColor?: string
            },
            slider?: {
                trackSize?: number,
                trackColor?: string,
                trackColorSelected?: string,
                handleSize?: number,
                handleSizeActive?: number,
                handleSizeDisabled?: number,
                handleColorZero?: string,
                handleFillColor?: string,
                selectionColor?: string,
                rippleColor?: string,
            },
            snackbar?: {
                textColor?: string,
                backgroundColor?: string,
                actionColor?: string,
            },
            toggle?: {
                thumbOnColor?: string,
                thumbOffColor?: string,
                thumbDisabledColor?: string,
                thumbRequiredColor?: string,
                trackOnColor?: string,
                trackOffColor?: string,
                trackDisabledColor?: string,
                trackRequiredColor?: string,
                labelColor?: string,
                labelDisabledColor?: string
            },
            toolbar?: {
                backgroundColor?: string,
                height?: number,
                titleFontSize?: number,
                iconColor?: string,
                separatorColor?: string,
                menuHoverColor?: string,
            }
        }
        interface CustomTheme {
            getPalette(): ThemePalette;
            getComponentThemes(palette: ThemePalette, spacing: Spacing): Theme;
        }

        export class ThemeManager {
            spacing: Spacing;
            palette: ThemePalette;
            component: any;
            types: {
                LIGHT: CustomTheme;
                DARK: CustomTheme;
            };

            getCurrentTheme(): CustomTheme;
            setTheme(newTheme: CustomTheme): void;
            setSpacing(newSpacing: Spacing): void;
            setPalette(newPalette: ThemePalette): void;
            setComponentThemes(overrides: Theme): void;
        }

        interface Transitions {
            easeOut(duration?: string, property?: string | string[], delay?: string, easeFunction?: string): string;
            create(duration?: string, property?: string, delay?: string, easeFunction?: string): string;
            easeOutFunction: string;
            easeInOutFunction: string;
        }
        export var Transitions: Transitions;

        class TypographyClass {
            textFullBlack:string;
            textDarkBlack: string;
            textLightBlack: string;
            textMinBlack: string;
            textFullWhite: string;
            textDarkWhite: string;
            textLightWhite: string;

            // font weight
            fontWeightLight: number;
            fontWeightNormal: number;
            fontWeightMedium: number;

            fontStyleButtonFontSize: number;
        }
        export var Typography: TypographyClass;
    }

    interface SnackbarProp extends React.Props<Snackbar> {
        ref?: string | ((component: Snackbar) => any);

    }
    export class Snackbar extends React.Component<SnackbarProp, any> {
    }

    namespace Tabs {
        interface TabProp extends React.Props<Tab> {
            ref?: string | ((component: Tab) => any);

            label?: string;
            value?: string;

            onActive?: (tab: Tab) => void;
        }
        export class Tab extends React.Component<TabProp, any> {
        }

        interface TabsProp extends React.Props<Tabs> {
            ref?: string | ((component: Tabs) => any);

            contentContainerStyle?: React.CSSProperties;
            initialSelectedIndex?: number;
            inkBarStyle?: React.CSSProperties;
            style?: React.CSSProperties;
            tabItemContainerStyle?: React.CSSProperties;
            value?: string | number;

            onChange?: (value: string | number, e: React.FormEvent, tab: Tab) => void;
        }
        export class Tabs extends React.Component<TabsProp, any> {
        }
    }

    namespace Table {
        interface TableProp extends React.Props<Table> {
            ref?: string | ((component: Table) => any);

        }
        export class Table extends React.Component<TableProp, any> {
        }

        interface TableBodyProp extends React.Props<TableBody> {
            ref?: string | ((component: TableBody) => any);

        }
        export class TableBody extends React.Component<TableBodyProp, any> {
        }

        interface TableFooterProp extends React.Props<TableFooter> {
            ref?: string | ((component: TableFooter) => any);

        }
        export class TableFooter extends React.Component<TableFooterProp, any> {
        }

        interface TableHeaderProp extends React.Props<TableHeader> {
            ref?: string | ((component: TableHeader) => any);

        }
        export class TableHeader extends React.Component<TableHeaderProp, any> {
        }

        interface TableHeaderColumnProp extends React.Props<TableHeaderColumn> {
            ref?: string | ((component: TableHeaderColumn) => any);

        }
        export class TableHeaderColumn extends React.Component<TableHeaderColumnProp, any> {
        }

        interface TableRowProp extends React.Props<TableRow> {
            ref?: string | ((component: TableRow) => any);

        }
        export class TableRow extends React.Component<TableRowProp, any> {
        }

        interface TableRowColumnProp extends React.Props<TableRowColumn> {
            ref?: string | ((component: TableRowColumn) => any);

        }
        export class TableRowColumn extends React.Component<TableRowColumnProp, any> {
        }
    }

    interface ThemeProp extends React.Props<Theme> {
        ref?: string | ((component: Theme) => any);

        theme: Styles.CustomTheme;
    }
    export class Theme extends React.Component<ThemeProp, any> {
        static theme(customTheme: Styles.CustomTheme): <P>(Component: React.ComponentClass<P>) => React.ComponentClass<P>;
    }

    interface ToggleProp extends CommonEnhancedSwitchProp<Toggle> {
        // <EnhancedSwitch/> is root element
        ref?: string | ((component: Toggle) => any);

        elementStyle?: React.CSSProperties;
        labelStyle?: React.CSSProperties;
        onToggle?: (e: React.MouseEvent, isInputChecked: boolean) => void;
        toggled?: boolean;
        defaultToggled?: boolean;
    }
    export class Toggle extends React.Component<ToggleProp, any> {
        isToggled(): boolean;
        setToggled(newToggledValue: boolean): void;
    }

    interface TimePickerProp extends React.Props<TimePicker> {
        ref?: string | ((component: TimePicker) => any);

    }
    export class TimePicker extends React.Component<TimePickerProp, any> {
    }

    interface TextFieldProp extends React.Props<TextField> {
        ref?: string | ((component: TextField) => any);

        errorStyle?: React.CSSProperties;
        errorText?: string;
        floatingLabelText?: string;
        floatingLabelStyle?: React.CSSProperties;
        fullWidth?: boolean;
        hintText?: string | React.ReactElement<any>;
        id?: string;
        inputStyle?: React.CSSProperties;
        multiLine?: boolean;
        onEnterKeyDown?: () => void;
        style?: React.CSSProperties;
        rows?: number,
        underlineStyle?: React.CSSProperties;
        underlineFocusStyle?: React.CSSProperties;
        type?: string;

        disabled?: boolean;
        isRtl?: boolean;
        value?: string;
        defaultValue?: string;
        valueLink?: ReactLink<string>;

        onBlur?: React.FocusEventHandler;
        onChange?: React.FormEventHandler;
        onFocus?: React.FocusEventHandler;
        onKeyDown?: React.KeyboardEventHandler;
    }
    export class TextField extends React.Component<TextFieldProp, any> {
        blur(): void;
        clearValue(): void;
        focus(): void;
        getValue(): string;
        setErrorText(newErrorText: string): void;
        setValue(newValue: string): void;
    }

    namespace Toolbar {
        interface ToolbarProp extends React.Props<Toolbar> {
            ref?: string | ((component: Toolbar) => any);

        }
        export class Toolbar extends React.Component<ToolbarProp, any> {
        }

        interface ToolbarGroupProp extends React.Props<ToolbarGroup> {
            ref?: string | ((component: ToolbarGroup) => any);

        }
        export class ToolbarGroup extends React.Component<ToolbarGroupProp, any> {
        }

        interface ToolbarSeparatorProp extends React.Props<ToolbarSeparator> {
            ref?: string | ((component: ToolbarSeparator) => any);

        }
        export class ToolbarSeparator extends React.Component<ToolbarSeparatorProp, any> {
        }

        interface ToolbarTitleProp extends React.Props<ToolbarTitle> {
            ref?: string | ((component: ToolbarTitle) => any);

        }
        export class ToolbarTitle extends React.Component<ToolbarTitleProp, any> {
        }
    }

    interface TooltipProp extends React.Props<Tooltip> {
        ref?: string | ((component: Tooltip) => any);

    }
    export class Tooltip extends React.Component<TooltipProp, any> {
    }

    export namespace Utils {
        interface ColorManipulator {
            fade(color: string, amount: number): string;
            darken(color: string, amount: number): string;
            contrastRatio(background: string, foreground: string): string;
            contrastRatioLevel(background: string, foreground: string): any;
        }
        export var ColorManipulator: ColorManipulator;

        interface CssEvent {
            transitionEndEventName(): string;
            animationEndEventName(): string;
            onTransitionEnd(el: Element, callback: (e: Event) => any): void;
            onAnimationEnd(el: Element, callback: (e: Event) => any): void;
        }
        export var CssEvent: CssEvent;

        interface Dom {
            isDescendant(parent: Element, child: Element): boolean;
            offset(el: Element): { top: number, left: number };
            getStyleAttributeAsNumber(el: Element, attr: string): number;
            addClass(el: Element, className: string): void;
            removeClass(el: Element, className: string): void;
            hasClass(el: Element, className: string): boolean;
            toggleClass(el: Element, className: string): void;
            forceRedraw(el: Element): void;
            withoutTransition(el: Element, callback: () => any): void;
        }
        export var Dom: Dom;

        interface Events {
            once(el: Element, type: string, callback: (e: Event) => any): void;
            on(el: Element, type: string, callback: (e: Event) => any): void;
            off(el: Element, type: string, callback: (e: Event) => any): void;
            isKeyboard(e: Event): boolean;
        }
        export var Events: Events;

        function Extend<T, S1>(base: T, override: S1): (T & S1);

        interface ImmutabilityHelper {
            merge(base: {}, ...args: {}[]): any;
            mergeItem(obj: {}, key: string, newValueObject: {}): any;
            push<T>(array: T[], obj: T): T[];
            shift<T>(array: T[]): T[];
        }
        export var ImmutabilityHelper: ImmutabilityHelper;

        interface KeyCode {
            DOWN: number;
            ESC: number;
            ENTER: number;
            LEFT: number;
            RIGHT: number;
            SPACE: number;
            TAB: number;
            UP: number;
        }
        var KeyCode: KeyCode;

        interface KeyLine {
            Desktop: {
                GUTTER: number;
                GUTTER_LESS: number;
                INCREMENT: number;
                MENU_ITEM_HEIGHT: number;
            };

            getIncrementalDim(dim: number): number;
        }
        export var KeyLine: KeyLine;

        interface UniqueId {
            generate(): string;
        }
        export var UniqueId: UniqueId;

        interface Styles {
            mergeAndPrefix(base: {}, ...args: {}[]): any;
        }
        export var Styles: Styles;
    }

    // New menus available only through requiring directly to the end file
    namespace Menus {
        interface IconMenuProp extends React.Props<IconMenu> {
            ref?: string | ((component: IconMenu) => any);

            closeOnItemTouchTap?: boolean;
            desktop?: boolean;
            iconButtonElement?: React.ReactElement<IconButtonProp>;
            openDirection?: string;
            menuStyle?: React.CSSProperties;
            multiple?: boolean;
            value?: string | Array<string>;
            width?: string | number;
            touchTapCloseDelay?: number;

            onItemTouchTap?: (e: TouchTapEvent, item: React.ReactElement<any>) => void;
            onChange?: (e: React.FormEvent, value: string | Array<string>) => void;
        }
        export class IconMenu extends React.Component<IconMenuProp, any> {
        }

        interface MenuProp extends React.Props<Menu> {
            animated?: boolean;
            autoWidth?: boolean;
            desktop?: boolean;
            listStyle?: React.CSSProperties;
            maxHeight?: number;
            multiple?: boolean;
            openDirection?: string;
            value?: string | Array<string>;
            width?: string | number;
            zDepth?: number;
        }
        export class Menu extends React.Component<MenuProp, any>{
        }

        interface MenuItemProp extends React.Props<MenuItem> {
            checked?: boolean;
            desktop?: boolean;
            disabled?: boolean;
            innerDivStyle?: React.CSSProperties;
            insetChildren?: boolean;
            leftIcon?: React.ReactElement<any>;
            primaryText?: string | React.ReactElement<any>;
            rightIcon?: React.ReactElement<any>;
            secondaryText?: string | React.ReactElement<any>;
            value?: string;

            onEscKeyDown?: React.KeyboardEventHandler;
            onItemTouchTap?: (e: TouchTapEvent, item: React.ReactElement<any>) => void;
            onChange?: (e: React.FormEvent, value: string) => void;
        }
        export class MenuItem extends React.Component<MenuItemProp, any>{
        }

        interface MenuDividerProp extends React.Props<MenuDivider> {
            inset?: boolean;
            style?: React.CSSProperties;
        }
        export class MenuDivider extends React.Component<MenuDividerProp, any>{
        }
    }
}    // __MaterialUI

declare module 'material-ui/lib/app-bar' {
    export = __MaterialUI.AppBar;
}

declare module 'material-ui/lib/app-canvas' {
    export = __MaterialUI.AppCanvas;
}

declare module 'material-ui/lib/avatar' {
    export = __MaterialUI.Avatar;
}

declare module 'material-ui/lib/before-after-wrapper' {
    export = __MaterialUI.BeforeAfterWrapper;
}

declare module 'material-ui/lib/card/card' {
    export = __MaterialUI.Card.Card;
}

declare module 'material-ui/lib/card/card-actions' {
    export = __MaterialUI.Card.CardActions;
}

declare module 'material-ui/lib/card/card-expandable' {
    export = __MaterialUI.Card.CardExpandable;
}

declare module 'material-ui/lib/card/card-header' {
    export = __MaterialUI.Card.CardHeader;
}

declare module 'material-ui/lib/card/card-media' {
    export = __MaterialUI.Card.CardMedia;
}

declare module 'material-ui/lib/card/card-text' {
    export = __MaterialUI.Card.CardText;
}

declare module 'material-ui/lib/card/card-title' {
    export = __MaterialUI.Card.CardTitle;
}

declare module 'material-ui/lib/checkbox' {
    export = __MaterialUI.Checkbox;
}

declare module 'material-ui/lib/circular-progress' {
    export = __MaterialUI.CircularProgress;
}

declare module 'material-ui/lib/clearfix' {
    export = __MaterialUI.ClearFix;
}

declare module 'material-ui/lib/date-picker/date-picker' {
    export = __MaterialUI.DatePicker.DatePicker;
}

declare module 'material-ui/lib/date-picker/date-picker-dialog' {
    export = __MaterialUI.DatePicker.DatePickerDialog;
}

declare module 'material-ui/lib/dialog' {
    export = __MaterialUI.Dialog;
}

declare module 'material-ui/lib/drop-down-icon' {
    export = __MaterialUI.DropDownIcon;
}

declare module 'material-ui/lib/drop-down-menu' {
    export = __MaterialUI.DropDownMenu;
}

declare module 'material-ui/lib/enhanced-button' {
    export = __MaterialUI.EnhancedButton;
}

declare module 'material-ui/lib/flat-button' {
    export = __MaterialUI.FlatButton;
}

declare module 'material-ui/lib/floating-action-button' {
    export = __MaterialUI.FloatingActionButton;
}

declare module 'material-ui/lib/font-icon' {
    export = __MaterialUI.FontIcon;
}

declare module 'material-ui/lib/icon-button' {
    export = __MaterialUI.IconButton;
}

declare module 'material-ui/lib/left-nav' {
    export = __MaterialUI.LeftNav;
}

declare module 'material-ui/lib/linear-progress' {
    export = __MaterialUI.LinearProgress;
}

declare module 'material-ui/lib/lists/list' {
    export = __MaterialUI.Lists.List;
}

declare module 'material-ui/lib/lists/list-divider' {
    export = __MaterialUI.Lists.ListDivider;
}

declare module 'material-ui/lib/lists/list-item' {
    export = __MaterialUI.Lists.ListItem;
}

declare module 'material-ui/lib/menu/menu' {
    export = __MaterialUI.Menu.Menu;
}

declare module 'material-ui/lib/menu/menu-item' {
    export = __MaterialUI.Menu.MenuItem;
}

declare module 'material-ui/lib/mixins/' {
    export import ClickAwayable = __MaterialUI.Mixins.ClickAwayable; // require('material-ui/lib/mixins/click-awayable');
    export import WindowListenable = __MaterialUI.Mixins.WindowListenable; // require('material-ui/lib/mixins/window-listenable');
    export import StylePropable = __MaterialUI.Mixins.StylePropable; // require('material-ui/lib/mixins/style-propable');
    export import StyleResizable = __MaterialUI.Mixins.StyleResizable; // require('material-ui/lib/mixins/style-resizable');
}

declare module 'material-ui/lib/mixins/click-awayable' {
    export = __MaterialUI.Mixins.ClickAwayable;
}

declare module 'material-ui/lib/mixins/window-listenable' {
    export = __MaterialUI.Mixins.WindowListenable;
}

declare module 'material-ui/lib/mixins/style-propable' {
    export = __MaterialUI.Mixins.StylePropable;
}

declare module 'material-ui/lib/mixins/style-resizable' {
    export = __MaterialUI.Mixins.StyleResizable;
}

declare module 'material-ui/lib/overlay' {
    export = __MaterialUI.Overlay;
}

declare module 'material-ui/lib/paper' {
    export = __MaterialUI.Paper;
}

declare module 'material-ui/lib/radio-button' {
    export = __MaterialUI.RadioButton;
}

declare module 'material-ui/lib/radio-button-group' {
    export = __MaterialUI.RadioButtonGroup;
}

declare module 'material-ui/lib/raised-button' {
    export = __MaterialUI.RaisedButton;
}

declare module 'material-ui/lib/refresh-indicator' {
    export = __MaterialUI.RefreshIndicator;
}

declare module 'material-ui/lib/ripples/' {
    export import CircleRipple = __MaterialUI.Ripples.CircleRipple;
    export import FocusRipple = __MaterialUI.Ripples.FocusRipple;
    export import TouchRipple = __MaterialUI.Ripples.TouchRipple;
}

declare module 'material-ui/lib/select-field' {
    export = __MaterialUI.SelectField;
}

declare module 'material-ui/lib/slider' {
    export = __MaterialUI.Slider;
}

declare module 'material-ui/lib/svg-icon' {
    export = __MaterialUI.SvgIcon;
}

declare module 'material-ui/lib/svg-icons/navigation/menu' {
    export = __MaterialUI.NavigationMenu;
}

declare module 'material-ui/lib/svg-icons/navigation/chevron-left' {
    export = __MaterialUI.NavigationChevronLeft;
}

declare module 'material-ui/lib/svg-icons/navigation/chevron-right' {
    export = __MaterialUI.NavigationChevronRight;
}

declare module 'material-ui/lib/styles/' {
    export import AutoPrefix = __MaterialUI.Styles.AutoPrefix; // require('material-ui/lib/styles/auto-prefix');
    export import Colors = __MaterialUI.Styles.Colors; // require('material-ui/lib/styles/colors');
    export import Spacing = require('material-ui/lib/styles/spacing');
    export import ThemeManager = __MaterialUI.Styles.ThemeManager; // require('material-ui/lib/styles/theme-manager');
    export import Transitions = __MaterialUI.Styles.Transitions; // require('material-ui/lib/styles/transitions');
    export import Typography = __MaterialUI.Styles.Typography; // require('material-ui/lib/styles/typography');
}

declare module 'material-ui/lib/styles/auto-prefix' {
    export = __MaterialUI.Styles.AutoPrefix;
}

declare module 'material-ui/lib/styles/spacing' {
    var Spacing: __MaterialUI.Styles.Spacing;
    export = Spacing;
}

declare module 'material-ui/lib/styles/theme-manager' {
    export = __MaterialUI.Styles.ThemeManager;
}

declare module 'material-ui/lib/styles/transitions' {
    export = __MaterialUI.Styles.Transitions;
}

declare module 'material-ui/lib/styles/typography' {
    export = __MaterialUI.Styles.Typography;
}

declare module 'material-ui/lib/snackbar' {
    export = __MaterialUI.Snackbar;
}

declare module 'material-ui/lib/tabs/tab' {
    export = __MaterialUI.Tabs.Tab;
}

declare module 'material-ui/lib/tabs/tabs' {
    export = __MaterialUI.Tabs.Tabs;
}

declare module 'material-ui/lib/table/table' {
    export = __MaterialUI.Table.Table;
}

declare module 'material-ui/lib/table/table-body' {
    export = __MaterialUI.Table.TableBody;
}

declare module 'material-ui/lib/table/table-footer' {
    export = __MaterialUI.Table.TableFooter;
}

declare module 'material-ui/lib/table/table-header' {
    export = __MaterialUI.Table.TableHeader;
}

declare module 'material-ui/lib/table/table-header-column' {
    export = __MaterialUI.Table.TableHeaderColumn;
}

declare module 'material-ui/lib/table/table-row' {
    export = __MaterialUI.Table.TableRow;
}

declare module 'material-ui/lib/table/table-row-column' {
    export = __MaterialUI.Table.TableRowColumn;
}

declare module 'material-ui/lib/theme' {
    export = __MaterialUI.Theme;
}

declare module 'material-ui/lib/toggle' {
    export = __MaterialUI.Toggle;
}

declare module 'material-ui/lib/time-picker' {
    export = __MaterialUI.TimePicker;
}

declare module 'material-ui/lib/text-field' {
    export = __MaterialUI.TextField;
}

declare module 'material-ui/lib/toolbar/toolbar' {
    export = __MaterialUI.Toolbar.Toolbar;
}

declare module 'material-ui/lib/toolbar/toolbar-group' {
    export = __MaterialUI.Toolbar.ToolbarGroup;
}

declare module 'material-ui/lib/toolbar/toolbar-separator' {
    export = __MaterialUI.Toolbar.ToolbarSeparator;
}

declare module 'material-ui/lib/toolbar/toolbar-title' {
    export = __MaterialUI.Toolbar.ToolbarTitle;
}

declare module 'material-ui/lib/tooltip' {
    export = __MaterialUI.Tooltip;
}

declare module 'material-ui/lib/utils/' {
    export import ColorManipulator = __MaterialUI.Utils.ColorManipulator; // require('material-ui/lib/utils/color-manipulator');
    export import CssEvent = __MaterialUI.Utils.CssEvent; // require('material-ui/lib/utils/css-event');
    export import Dom = __MaterialUI.Utils.Dom; // require('material-ui/lib/utils/dom');
    export import Events = __MaterialUI.Utils.Events; // require('material-ui/lib/utils/events');
    export import Extend = __MaterialUI.Utils.Extend; // require('material-ui/lib/utils/extend');
    export import ImmutabilityHelper = __MaterialUI.Utils.ImmutabilityHelper; // require('material-ui/lib/utils/immutability-helper');
    export import KeyCode = __MaterialUI.Utils.KeyCode; // require('material-ui/lib/utils/key-code');
    export import KeyLine = __MaterialUI.Utils.KeyLine; // require('material-ui/lib/utils/key-line');
    export import UniqueId = __MaterialUI.Utils.UniqueId; // require('material-ui/lib/utils/unique-id');
    export import Styles = __MaterialUI.Utils.Styles; // require('material-ui/lib/utils/styles');
}

declare module 'material-ui/lib/utils/color-manipulator' {
    export = __MaterialUI.Utils.ColorManipulator;
}

declare module 'material-ui/lib/utils/css-event' {
    export = __MaterialUI.Utils.CssEvent;
}

declare module 'material-ui/lib/utils/dom' {
    export = __MaterialUI.Utils.Dom;
}

declare module 'material-ui/lib/utils/events' {
    export = __MaterialUI.Utils.Events;
}

declare module 'material-ui/lib/utils/extend' {
    export = __MaterialUI.Utils.Extend;
}

declare module 'material-ui/lib/utils/immutability-helper' {
    export = __MaterialUI.Utils.ImmutabilityHelper;
}

declare module 'material-ui/lib/utils/key-code' {
    export = __MaterialUI.Utils.KeyCode;
}

declare module 'material-ui/lib/utils/key-line' {
    export = __MaterialUI.Utils.KeyLine;
}

declare module 'material-ui/lib/utils/unique-id' {
    export = __MaterialUI.Utils.UniqueId;
}

declare module 'material-ui/lib/utils/styles' {
    export = __MaterialUI.Utils.Styles;
}

declare module "material-ui/lib/menus/icon-menu" {
    export = __MaterialUI.Menus.IconMenu;
}

declare module "material-ui/lib/menus/menu" {
    export = __MaterialUI.Menus.Menu;
}

declare module "material-ui/lib/menus/menu-item" {
    export = __MaterialUI.Menus.MenuItem;
}

declare module "material-ui/lib/menus/menu-divider" {
    export = __MaterialUI.Menus.MenuDivider;
}

declare module "material-ui/lib/styles/colors" {
    export = __MaterialUI.Styles.Colors;
}

declare namespace __MaterialUI.Styles {
    interface Colors {
        red50: string;
        red100: string;
        red200: string;
        red300: string;
        red400: string;
        red500: string;
        red600: string;
        red700: string;
        red800: string;
        red900: string;
        redA100: string;
        redA200: string;
        redA400: string;
        redA700: string;

        pink50: string;
        pink100: string;
        pink200: string;
        pink300: string;
        pink400: string;
        pink500: string;
        pink600: string;
        pink700: string;
        pink800: string;
        pink900: string;
        pinkA100: string;
        pinkA200: string;
        pinkA400: string;
        pinkA700: string;

        purple50: string;
        purple100: string;
        purple200: string;
        purple300: string;
        purple400: string;
        purple500: string;
        purple600: string;
        purple700: string;
        purple800: string;
        purple900: string;
        purpleA100: string;
        purpleA200: string;
        purpleA400: string;
        purpleA700: string;

        deepPurple50: string;
        deepPurple100: string;
        deepPurple200: string;
        deepPurple300: string;
        deepPurple400: string;
        deepPurple500: string;
        deepPurple600: string;
        deepPurple700: string;
        deepPurple800: string;
        deepPurple900: string;
        deepPurpleA100: string;
        deepPurpleA200: string;
        deepPurpleA400: string;
        deepPurpleA700: string;

        indigo50: string;
        indigo100: string;
        indigo200: string;
        indigo300: string;
        indigo400: string;
        indigo500: string;
        indigo600: string;
        indigo700: string;
        indigo800: string;
        indigo900: string;
        indigoA100: string;
        indigoA200: string;
        indigoA400: string;
        indigoA700: string;

        blue50: string;
        blue100: string;
        blue200: string;
        blue300: string;
        blue400: string;
        blue500: string;
        blue600: string;
        blue700: string;
        blue800: string;
        blue900: string;
        blueA100: string;
        blueA200: string;
        blueA400: string;
        blueA700: string;

        lightBlue50: string;
        lightBlue100: string;
        lightBlue200: string;
        lightBlue300: string;
        lightBlue400: string;
        lightBlue500: string;
        lightBlue600: string;
        lightBlue700: string;
        lightBlue800: string;
        lightBlue900: string;
        lightBlueA100: string;
        lightBlueA200: string;
        lightBlueA400: string;
        lightBlueA700: string;

        cyan50: string;
        cyan100: string;
        cyan200: string;
        cyan300: string;
        cyan400: string;
        cyan500: string;
        cyan600: string;
        cyan700: string;
        cyan800: string;
        cyan900: string;
        cyanA100: string;
        cyanA200: string;
        cyanA400: string;
        cyanA700: string;

        teal50: string;
        teal100: string;
        teal200: string;
        teal300: string;
        teal400: string;
        teal500: string;
        teal600: string;
        teal700: string;
        teal800: string;
        teal900: string;
        tealA100: string;
        tealA200: string;
        tealA400: string;
        tealA700: string;

        green50: string;
        green100: string;
        green200: string;
        green300: string;
        green400: string;
        green500: string;
        green600: string;
        green700: string;
        green800: string;
        green900: string;
        greenA100: string;
        greenA200: string;
        greenA400: string;
        greenA700: string;

        lightGreen50: string;
        lightGreen100: string;
        lightGreen200: string;
        lightGreen300: string;
        lightGreen400: string;
        lightGreen500: string;
        lightGreen600: string;
        lightGreen700: string;
        lightGreen800: string;
        lightGreen900: string;
        lightGreenA100: string;
        lightGreenA200: string;
        lightGreenA400: string;
        lightGreenA700: string;

        lime50: string;
        lime100: string;
        lime200: string;
        lime300: string;
        lime400: string;
        lime500: string;
        lime600: string;
        lime700: string;
        lime800: string;
        lime900: string;
        limeA100: string;
        limeA200: string;
        limeA400: string;
        limeA700: string;

        yellow50: string;
        yellow100: string;
        yellow200: string;
        yellow300: string;
        yellow400: string;
        yellow500: string;
        yellow600: string;
        yellow700: string;
        yellow800: string;
        yellow900: string;
        yellowA100: string;
        yellowA200: string;
        yellowA400: string;
        yellowA700: string;

        amber50: string;
        amber100: string;
        amber200: string;
        amber300: string;
        amber400: string;
        amber500: string;
        amber600: string;
        amber700: string;
        amber800: string;
        amber900: string;
        amberA100: string;
        amberA200: string;
        amberA400: string;
        amberA700: string;

        orange50: string;
        orange100: string;
        orange200: string;
        orange300: string;
        orange400: string;
        orange500: string;
        orange600: string;
        orange700: string;
        orange800: string;
        orange900: string;
        orangeA100: string;
        orangeA200: string;
        orangeA400: string;
        orangeA700: string;

        deepOrange50: string;
        deepOrange100: string;
        deepOrange200: string;
        deepOrange300: string;
        deepOrange400: string;
        deepOrange500: string;
        deepOrange600: string;
        deepOrange700: string;
        deepOrange800: string;
        deepOrange900: string;
        deepOrangeA100: string;
        deepOrangeA200: string;
        deepOrangeA400: string;
        deepOrangeA700: string;

        brown50: string;
        brown100: string;
        brown200: string;
        brown300: string;
        brown400: string;
        brown500: string;
        brown600: string;
        brown700: string;
        brown800: string;
        brown900: string;

        blueGrey50: string;
        blueGrey100: string;
        blueGrey200: string;
        blueGrey300: string;
        blueGrey400: string;
        blueGrey500: string;
        blueGrey600: string;
        blueGrey700: string;
        blueGrey800: string;
        blueGrey900: string;

        grey50: string;
        grey100: string;
        grey200: string;
        grey300: string;
        grey400: string;
        grey500: string;
        grey600: string;
        grey700: string;
        grey800: string;
        grey900: string;

        black: string;
        white: string;

        transparent: string;
        fullBlack: string;
        darkBlack: string;
        lightBlack: string;
        minBlack: string;
        faintBlack: string;
        fullWhite: string;
        darkWhite: string;
        lightWhite: string;
    }
    export var Colors: Colors;
}
