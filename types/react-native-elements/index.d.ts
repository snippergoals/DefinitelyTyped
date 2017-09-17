// Type definitions for react-native-elements 0.16
// Project: https://github.com/react-native-training/react-native-elements#readme
// Definitions by: Kyle Roach <https://github.com/iRoachie>
//                 Ifiok Jr. <https://github.com/ifiokjr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';
import {
    ViewStyle,
    TextStyle,
    ImageStyle,
    ImageURISource,
    TouchableWithoutFeedbackProps,
    TouchableHighlightProperties,
    TouchableOpacityProperties,
    ViewProperties,
    TextInputProperties,
    TextInput,
    StatusBarProperties,
    KeyboardType,
    KeyboardTypeIOS,
    StyleProp,
} from 'react-native';

/**
 * Supports auto complete for most used types as well as any other string type.
 */
export type IconType =
    | 'material'
    | 'material-community'
    | 'simple-line-icon'
    | 'zocial'
    | 'font-awesome'
    | 'octicon'
    | 'ionicon'
    | 'foundation'
    | 'evilicon'
    | 'entypo'
    | string;

export interface IconObject {
    name?: string;
    color?: string;
    size?: number;
    type?: IconType;
    style?: any;
}

export interface AvatarIcon extends IconObject {
    iconStyle?: StyleProp<TextStyle>;
}

export interface TextProps {
    /**
     * font size 40
     */
    h1?: boolean;

    /**
     * font size 34
     */
    h2?: boolean;

    /**
     * font size 28
     */
    h3?: boolean;

    /**
     * font size 22
     */
    h4?: boolean;

    /**
     * font family name
     */
    fontFamily?: string;

    /**
     * Additional styling for Text
     */
    style?: StyleProp<TextStyle>;
}

/**
 * HTML Style Headings
 *
 * @see https://react-native-training.github.io/react-native-elements/API/HTML_style_headings/
 */
export class Text extends React.Component<TextProps, any> {}

export interface AvatarProps {
    /**
     * Component for enclosing element (eg: TouchableHighlight, View, etc)
     *
     * @default TouchableOpacity
     */
    component?: React.ComponentClass;

    /**
     * Width for the Avatar
     *
     * @default 34
     */
    width?: number;

    /**
     * Height for the Avatar
     *
     * @default 34
     */
    height?: number;

    /**
     * Callback function when pressing component
     */
    onPress?(): void;

    /**
     * Callback function when long pressing component
     */
    onLongPress?(): void;

    /**
     * Styling for outer container
     */
    containerStyle?: StyleProp<ViewStyle>;

    /**
     * Image source
     */
    source?: ImageURISource;

    /**
     * Style for avatar image
     */
    avatarStyle?: ImageStyle;

    /**
     * Determines the shape of avatar
     *
     * @default false
     */
    rounded?: boolean;

    /**
     * Renders title in the avatar
     */
    title?: string;

    /**
     * Style for the title
     */
    titleStyle?: StyleProp<TextStyle>;

    /**
     * Style for the view outside image or icon
     */
    overlayContainerStyle?: StyleProp<ViewStyle>;

    /**
     * Opacity when pressed
     *
     * @default 0.2
     */
    activeOpacity?: number;

    /**
     * Icon for the avatar
     */
    icon?: AvatarIcon;

    /**
     * extra styling for icon component
     */
    iconStyle?: StyleProp<TextStyle>;

    /**
     * Small sized icon
     */
    small?: boolean;

    /**
     * Medium sized icon
     */
    medium?: boolean;

    /**
     * Large sized icon
     */
    large?: boolean;

    /**
     * Extra-large sized icon
     */
    xlarge?: boolean;
}

/**
 * Avatar Component
 *
 * @see https://react-native-training.github.io/react-native-elements/API/avatar/
 */
export class Avatar extends React.Component<AvatarProps, any> {}

export interface ButtonIcon extends IconObject {
    buttonStyle?: StyleProp<TextStyle>;
}

export interface ButtonProps extends TouchableWithoutFeedbackProps {
    /**
     * Specify other component such as TouchableOpacity or other
     *
     * @default TouchableHighlight (iOS), TouchableNativeFeedback (android)
     */
    component?: React.ComponentClass;

    /**
     * Additional styling for button component
     *
     * @default null
     */
    buttonStyle?: StyleProp<ViewStyle>;

    /**
     * Button title
     */
    title: string;

    /**
     * Makes button large
     *
     * @default false
     */
    large?: boolean;

    /**
     * Specify different font family
     *
     * @default System font (iOS), Sans Serif (android)
     */
    fontFamily?: string;

    /**
     * Specify font weight for title
     *
     * @default null
     */
    fontWeight?: string;

    /**
     * Moves icon to right of title
     *
     * @default false
     */
    iconRight?: boolean;

    /**
     * onPress method
     */
    onPress(): void;

    /**
     * onLongPress method
     */
    onLongPress?(): void;

    /**
     * Icon configuration
     */
    icon?: ButtonIcon;

    /**
     * Specify other icon component instead of default. The component will have all values from the icon prop
     *
     * @default MaterialIcon
     * @see https://github.com/oblador/react-native-vector-icons#icon-component
     */
    iconComponent?: JSX.Element;

    /**
     * Background color of button
     *
     * @default #397af8
     */
    backgroundColor?: string;

    /**
     * Adds border radius to button
     *  (Note: if you set this, don't forget to also set borderRadius to containerViewStyle prop, otherwise unexpected behaviour might occur)
     *
     * @default 0
     */
    borderRadius?: number;

    /**
     * Font color
     *
     * @default #fff
     */
    color?: string;

    /**
     * Text styling
     *
     * @default null
     */
    textStyle?: StyleProp<TextStyle>;

    /**
     * Font size
     *
     * @default 18
     */
    fontSize?: number;

    /**
     * Underlay color for button press
     *
     * @default transparent
     */
    underlayColor?: string;

    /**
     * Flag to add raised button styling
     *
     * @default false
     */
    raised?: boolean;

    /**
     * Indicates button is disabled
     *
     * @default false
     */
    disabled?: boolean;

    /**
     * Disabled button styling
     *
     * @default null
     */
    disabledStyle?: StyleProp<ViewStyle>;

    /**
     * Styling for Component container
     *
     * @default null
     */
    containerViewStyle?: StyleProp<ViewStyle>;
}

/**
 * Button component
 *
 * @see https://react-native-training.github.io/react-native-elements/API/buttons/
 */
export class Button extends React.Component<ButtonProps, any> {}

export interface BadgeProps {
    /**
     * Text value to be displayed by badge
     *
     * @default null
     */
    value?: string | number;

    /**
     * Style for the outer badge component
     */
    containerStyle?: StyleProp<ViewStyle>;

    /**
     * Style for the outer-most badge component
     */
    wrapperStyle?: StyleProp<ViewStyle>;

    /**
     * Style for the text in the badge
     */
    textStyle?: StyleProp<TextStyle>;

    /**
     * Override the default badge contents, mutually exclusive with 'value' property
     */
    children?: JSX.Element;

    /**
     * Custom component to replace the badge outer component
     *
     * @default View (if onPress then TouchableOpacity)
     */
    component?: React.ComponentClass;

    /**
     * Function called when pressed on the badge
     */
    onPress?(): void;
}

/**
 * Badge component
 *
 * @see https://react-native-training.github.io/react-native-elements/API/badge/
 */
export class Badge extends React.Component<BadgeProps, any> {}

export interface CardProps {
    /**
     * Flex direction (row or column)
     *
     * @default 'column'
     */
    flexDirection?: 'column' | 'row';

    /**
     * Outer container style
     */
    containerStyle?: StyleProp<ViewStyle>;

    /**
     * Inner container style
     */
    wrapperStyle?: StyleProp<ViewStyle>;

    /**
     * Card title
     */
    title?: string;

    /**
     * Additional title styling (if title provided)
     */
    titleStyle?: StyleProp<TextStyle>;

    /**
     * Title rendered over the image
     * (only works if image prop is present)
     */
    featuredTitle?: string;

    /**
     * Styling for featured title
     */
    featuredTitleStyle?: StyleProp<TextStyle>;

    /**
     * Subtitle rendered over the image
     * (only works if image prop is present)
     */
    featuredSubtitle?: string;

    /**
     * Styling for featured subtitle
     */
    featuredSubtitleStyle?: StyleProp<TextStyle>;

    /**
     * Additional divider styling
     * (if title provided)
     */
    dividerStyle?: StyleProp<ViewStyle>;

    /**
     * Specify different font family
     *
     * @default System font bold (iOS), Sans Serif Bold (android)
     */
    fontFamily?: string;

    /**
     * Specify image styling if image is provided
     */
    imageStyle?: ImageStyle;

    /**
     * Specify styling for view surrounding image
     */
    imageWrapperStyle?: StyleProp<ViewStyle>;

    /**
     * Add an image as the heading with the image prop
     */
    image?: ImageURISource;
}

/**
 * Card component
 *
 * @see https://react-native-training.github.io/react-native-elements/API/card/
 */
export class Card extends React.Component<CardProps, any> {}

/**
 * Set the buttons within a Group.
 */
export interface ElementObject {
    element: JSX.Element | React.ReactType;
}

/**
 * Set the border styles for a component.
 */
export interface InnerBorderStyleProperty {
    color?: string;
    width?: number;
}

export interface ButtonGroupProps {
    /**
     * Current selected index of array of buttons
     */
    selectedIndex: number;

    /**
     * Method to update Button Group Index
     */
    onPress(selectedIndex: number): void;

    /**
     * Array of buttons for component, if returning a component, must be an object with { element: componentName }
     */
    buttons: string[] | ElementObject[];

    /**
     * Choose other button component such as TouchableOpacity
     *
     * @default TouchableHighlight
     */
    component?: React.ComponentClass;

    /**
     * Specify styling for main button container
     */
    containerStyle?: StyleProp<ViewStyle>;

    /**
     * inherited styling	specify styling for button
     */
    buttonStyle?: StyleProp<ViewStyle>;

    /**
     * Specify color for selected state of button
     *
     * @default 'white'
     */
    selectedBackgroundColor?: string;

    /**
     * Specify specific styling for text
     */
    textStyle?: StyleProp<TextStyle>;

    /**
     * Specify specific styling for text in the selected state
     */
    selectedTextStyle?: StyleProp<TextStyle>;

    /**
     * inherited styling	object { width, color }	update the styling of the interior border of the list of buttons
     */
    innerBorderStyle?: InnerBorderStyleProperty;

    /**
     * Specify underlayColor for TouchableHighlight
     *
     * @default 'white'
     */
    underlayColor?: string;

    /**
     * Disables the currently selected button if true
     *
     * @default false
     */
    disableSelected?: boolean;

    /**
     * Determines what the opacity of the wrapped view should be when touch is active.
     */
    activeOpacity?: number;

    /**
     * Border radius for the container
     */
    containerBorderRadius?: number;

    /**
     * Styling for the final border edge
     */
    lastBorderStyle?: StyleProp<TextStyle | ViewStyle>;

    /**
     *
     * Called immediately after the underlay is hidden
     */
    onHideUnderlay?(): void;

    /**
     * Called immediately after the underlay is shown
     */
    onShowUnderlay?(): void;

    /**
     * Animate the touchable to a new opacity.
     */
    setOpacityTo?(value: number): void;
}

export class ButtonGroup extends React.Component<ButtonGroupProps, any> {}

export interface CheckBoxProps {
    /**
     * Icon family, can be one of the following
     * (required only if specifying an icon that is not from font-awesome)
     */
    iconType?: IconType;

    /**
     *  Specify React Native component for main button
     */
    component?: React.ComponentClass;

    /**
     * Flag for checking the icon
     *
     * @default false
     */
    checked: boolean;

    /**
     * Moves icon to right of text.
     *
     * @default false
     */
    iconRight?: boolean;

    /**
     * Aligns checkbox to right
     *
     * @default false
     */
    right?: boolean;

    /**
     * Aligns checkbox to center
     *
     *  @default false
     */
    center?: boolean;

    /**
     * Title of checkbox
     */
    title?: string | JSX.Element;

    /**
     * Style of main container
     */
    containerStyle?: StyleProp<ViewStyle>;

    /**
     * style of text
     */
    textStyle?: StyleProp<TextStyle>;

    /**
     * onLongPress function for checkbox
     */
    onLongPress?(): void;

    /**
     * onLongPress function for checkbox
     */
    onLongIconPress?(): void;

    /**
     * onPress function for container
     */
    onPress?(): void;

    /**
     * onPress function for checkbox
     */
    onIconPress?(): void;

    /**
     * Default checked icon (Font Awesome Icon)
     *
     * @default 'check-square-o'
     */
    checkedIcon?: string;

    /**
     * Default checked icon (Font Awesome Icon)
     *
     * @default 'square-o'
     */
    uncheckedIcon?: string;

    /**
     * Default checked color
     *
     * @default 'green'
     */
    checkedColor?: string;

    /**
     * Default unchecked color
     * @default '#bfbfbf'
     */
    uncheckedColor?: string;

    /**
     * Specify a custom checked message
     */
    checkedTitle?: string;

    /**
     * Specify different font family
     * @default 'System font bold (iOS)'
     * @default 'Sans Serif Bold (android)'
     */
    fontFamily?: string;
}
export class CheckBox extends React.Component<CheckBoxProps, any> {}

export interface DividerProps {
    /**
     * Style the divider
     *
     * @default {height: 1, backgroundColor: #e1e8ee}
     */
    style?: StyleProp<ViewStyle>;
}

export class Divider extends React.Component<DividerProps, any> {}

export interface FormValidationMessageProps extends ViewProperties {
    /**
     * Style of the container
     */
    containerStyle?: StyleProp<ViewStyle>;

    /**
     * Style of the text within the label message
     */
    labelStyle?: StyleProp<TextStyle>;

    /**
     * Font family for the message
     */
    fontFamily?: string;
}
export class FormValidationMessage extends React.Component<
    FormValidationMessageProps,
    any
> {}

export interface FormInputProps extends TextInputProperties {
    /**
     * TextInput container styling
     */
    containerStyle?: StyleProp<ViewStyle>;

    /**
     * TextInput styling
     */
    inputStyle?: StyleProp<TextStyle>;

    /**
     * @deprecated
     * Get ref of TextInput
     */
    textInputRef?(ref: TextInput): void;

    /**
     * @deprecated
     * Get ref of TextInput container
     */
    containerRef?(ref: any): void;

    /**
     * Shake the TextInput if not a falsy value and different from the previous value
     */
    shake?: any;
}

export class FormInput extends React.Component<FormInputProps, any> {
    /**
     * Holds reference to the stored input.
     */
    input: TextInput;

    /**
     * Shake the TextInput
     *
     * eg `this.formInputRef.shake()`
     */
    shake(): void;

    /**
     * Call focus on the TextInput
     */
    focus(): void;

    /**
     * Call blur on the TextInput
     */
    blur(): void;

    /**
     * Call clear on the TextInput
     */
    clearText(): void;
}

export interface FormLabelProps extends ViewProperties {
    /**
     * Additional label container style
     */
    containerStyle?: StyleProp<ViewStyle>;

    /**
     * Additional label styling
     */
    labelStyle?: StyleProp<TextStyle>;

    /**
     * Specify different font family
     *
     * @default System font bold (iOS), Sans Serif Bold (android)
     */
    fontFamily?: string;
}

export class FormLabel extends React.Component<FormLabelProps, any> {}

export interface GridProps extends ViewProperties {
    /**
     * Outer grid styling
     */
    containerStyle?: StyleProp<ViewStyle>;

    /**
     * Opacity on pressing
     *
     * @type {number}
     * @memberof GridProps
     */
    activeOpacity?: number;

    /**
     * onPress method
     */
    onPress?(): void;

    children: React.ReactNode;
}

/**
 * @deprecated
 * Warning: Grid has been deprecated and will be removed in a future version of React Native Elements
 *
 * @see https://react-native-training.github.io/react-native-elements/API/grid
 */
export class Grid extends React.Component<GridProps, any> {}

export interface SubGridProps extends ViewProperties {
    /**
     * Size for column or row
     */
    size?: number;

    /**
     * Opacity on pressing
     *
     * @default 1
     */
    activeOpacity?: number;

    /**
     * Styling for the outer column or row
     */
    containerStyle?: StyleProp<ViewStyle>;

    /**
     * onPress method
     */
    onPress?(): void;
}

/**
 * @deprecated
 * Warning: Row has been deprecated and will be removed in a future version of React Native Elements
 * @see https://react-native-training.github.io/react-native-elements/API/grid/#row
 */
export class Row extends React.Component<SubGridProps, any> {}

/**
 * @deprecated
 * Warning: Col has been deprecated and will be removed in a future version of React Native Elements
 *
 * @see https://react-native-training.github.io/react-native-elements/API/grid/#column
 *
 */
export class Col extends React.Component<SubGridProps, any> {}

export interface HeaderIcon extends IconObject {
    icon?: string;
}

/**
 * Defines the types that can be used in a header sub component
 */
export type HeaderSubComponent = JSX.Element | TextProps | HeaderIcon;

export interface HeaderProps extends ViewProperties {
    /**
     * Accepts all props for StatusBar
     */
    statusBarProps?: StatusBarProperties;

    /**
     * Configuration object for default component (icon: string, ...props for React Native Elements Icon) or a valid React Element	define your left component here
     */
    leftComponent?: HeaderSubComponent;

    /**
     * Configuration object for default component (text: string, ...props for React Native Text component) valid React Element	define your center component here
     */
    centerComponent?: HeaderSubComponent;

    /**
     * Configuration object for default component (icon: string, ...props for React Native Elements Icon component) or a valid React Element	define your right component here
     */
    rightComponent?: HeaderSubComponent;

    /**
     * Sets backgroundColor of the parent component
     */
    backgroundColor?: string;

    /**
     * Styling for outer container
     */
    outerContainerStyles?: StyleProp<ViewStyle>;

    /**
     * Styling for inner container
     */
    innerContainerStyles?: StyleProp<ViewStyle>;
}

/**
 * Header component
 * @see https://react-native-training.github.io/react-native-elements/API/header/
 */
export class Header extends React.Component<HeaderProps, any> {}

export interface IconProps {
    /**
     * Name of icon
     */
    name: string;

    /**
     * Type (defaults to material, options are material-community, zocial, font-awesome, octicon, ionicon, foundation, evilicon, simple-line-icon, or entypo)
     * @default 'material'
     */
    type?: IconType;

    /**
     * Size of icon
     * @default 26
     */
    size?: number;

    /**
     * Color of icon
     *
     * @default 'black'
     */
    color?: string;

    /**
     * Additional styling to icon
     */
    iconStyle?: StyleProp<TextStyle | ViewStyle>;

    /**
     * View if no onPress method is defined, TouchableHighlight if onPress method is defined	React Native component	update React Native Component
     */
    component?: React.ComponentClass;

    /**
     * onPress method for button
     */
    onPress?(): void;

    /**
     * onLongPress method for button
     */
    onLongPress?(): void;

    /**
     * UnderlayColor for press event
     */
    underlayColor?: string;

    /**
     * Reverses color scheme
     *
     * @default false
     */
    reverse?: boolean;

    /**
     * Adds box shadow to button
     *
     * @default false
     */
    raised?: boolean;

    /**
     * Add styling to container holding icon
     */
    containerStyle?: StyleProp<ViewStyle>;

    /**
     * Specify reverse icon color
     *
     * @default 'white'
     */
    reverseColor?: string;
}

/**
 * Icon component
 * @see https://react-native-training.github.io/react-native-elements/API/icons/
 */
export class Icon extends React.Component<IconProps, any> {}

export interface ListProps extends ViewProperties {
    /**
     * Style the list container
     * @default '{marginTop: 20, borderTopWidth: 1, borderBottomWidth: 1, borderBottomColor: #cbd2d9}'
     */
    containerStyle?: StyleProp<ViewStyle>;
}

/**
 * List component
 * @see https://react-native-training.github.io/react-native-elements/API/lists/
 */
export class List extends React.Component<ListProps, any> {}

export interface ListItemProps {
    /**
     * Left avatar. This is the React Native Image source prop. Avatar can be used in parallel to leftIcon if needed.
     */
    avatar?: ImageURISource | ImageURISource[];

    /**
     * Avatar styling. This is the React Native Image style prop
     */
    avatarStyle?: ImageStyle;

    /**
     * Avatar outer container styling
     */
    avatarContainerStyle?: StyleProp<ViewStyle>;

    /**
     * Avatar overlay container styling
     */
    avatarOverlayContainerStyle?: StyleProp<ViewStyle>;

    /**
     * Set chevron color
     *
     * @default '#bdc6cf'
     */
    chevronColor?: string;

    /**
     * View or TouchableHighlight if onPress method is added as prop
     * Replace element with custom element
     */
    component?: React.ComponentClass;

    /**
     * Additional main container styling
     */
    containerStyle?: StyleProp<ViewStyle>;

    /**
     * Additional wrapper styling
     */
    wrapperStyle?: StyleProp<ViewStyle>;

    /**
     * Define underlay color for TouchableHighlight
     *
     * @default 'white'
     */
    underlayColor?: string;

    /**
     * Specify different font family
     *
     * @default 'HelevticaNeue' (iOS)
     * @default 'Sans Serif' (android)
     */
    fontFamily?: string;

    /**
     * Set if you do not want a chevron
     *
     * @default false
     */
    hideChevron?: boolean;

    /**
     * onPress method for link
     */
    onPress?(): void;

    /**
     * onLongPress method for link
     */
    onLongPress?(): void;

    /**
     * Make left avatar round
     *
     * @default false
     */
    roundAvatar?: boolean;

    /**
     * Main title for list item, can be text or custom view
     */
    title?: string;

    /**
     * Number of lines for title
     *
     * @default 1
     */
    titleNumberOfLines?: number;

    /**
     * Additional title styling
     */
    titleStyle?: StyleProp<TextStyle>;

    /**
     * Provide styling for title container
     */
    titleContainerStyle?: StyleProp<ViewStyle>;

    /**
     * Subtitle text or custom view
     */
    subtitle?: string | JSX.Element;

    /**
     * Number of lines for Subtitle
     *
     * @default	1
     */
    subtitleNumberOfLines?: number;

    /**
     * Provide styling for subtitle container
     */
    subtitleContainerStyle?: StyleProp<ViewStyle>;

    /**
     * Additional subtitle styling
     */
    subtitleStyle?: StyleProp<TextStyle>;

    /**
     * Provide a rightTitle to have a title show up on the right side of the button
     */
    rightTitle?: string;

    /**
     * Number of lines for Right Title
     *
     * @default 1
     */
    rightTitleNumberOfLines?: number;

    /**
     * Style the outer container of the rightTitle text
     *
     * @default "{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}""
     */
    rightTitleContainerStyle?: StyleProp<ViewStyle>;

    /**
     * Style the text of the rightTitle text
     *
     * @default "{marginRight: 5, color: '#bdc6cf'}"
     */
    rightTitleStyle?: StyleProp<TextStyle>;

    /**
     * Add a label with your own styling by providing a label={} prop to ListItem
     */
    label?: JSX.Element;

    /**
     * Icon configuration for left icon, either a name from the icon library (like material) or a React Native element like Image.
     * leftIcon can be used in parallel to avatar if needed.
     * {name, color, style, type}
     * (type defaults to material icons) OR React Native element
     */
    leftIcon?: IconObject | JSX.Element;

    /**
     * Attaches an onPress on left Icon
     */
    leftIconOnPress?(): void;

    /**
     * Attaches an onLongPress on left Icon
     */
    leftIconOnLongPress?(): void;

    /**
     * Underlay color for left Icon
     *
     * @default	'white'
     */
    leftIconUnderlayColor?: string;

    /**
     * {name: 'chevron-right'}	object {name, color, style, type} (type defaults to material icons) OR
     * React Native element	icon configuration for right icon, either a name from the icon library (like material) or a React Native element like Image.
     * Shows up unless hideChevron is set
     */
    rightIcon?: IconObject | JSX.Element;

    /**
     * Attaches an onPress on right Icon
     */
    onPressRightIcon?(): void;

    /**
     * Add a switch to the right side of your component
     *
     * @default false
     */
    switchButton?: boolean;

    /**
     * Add a callback function when the switch is toggled
     */
    onSwitch?(value: boolean): void;

    /**
     * If true the user won't be able to toggle the switch. Default value is false.
     * @default false
     */
    switchDisabled?: boolean;

    /**
     * Background color when the switch is turned on.
     */
    switchOnTintColor?: string;

    /**
     * Color of the foreground switch grip.
     */
    switchThumbTintColor?: string;

    /**
     * Border color on iOS and background color on Android when the switch is turned off.
     */
    switchTintColor?: string;

    /**
     * The value of the switch. If true the switch will be turned on. Default value is false.
     *
     * @default false
     */
    switched?: boolean;

    /**
     * Whether to have the right title area be an input text component.
     *
     * @default false
     */
    textInput?: boolean;

    /**
     * Can tell TextInput to automatically capitalize certain characters.
     */
    textInputAutoCapitalize?: boolean;

    /**
     * Can tell TextInput to automatically capitalize certain characters.
     */
    textInputAutoCorrect?: boolean;

    /**
     * If true, focuses the input on componentDidMount. The default value is false.
     */
    textInputAutoFocus?: boolean;

    /**
     * If false, text is not editable. The default value is true.
     */
    textInputEditable?: boolean;

    /**
     * 	Can be one of the following:
     * 'default', 'email-address', 'numeric', 'phone-pad', 'ascii-capable', 'numbers-and-punctuation', 'url', 'number-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search'
     */
    textInputKeyboardType?: KeyboardType | KeyboardTypeIOS;

    /**
     * Limits the maximum number of characters that can be entered.
     */
    textInputMaxLength?: number;

    /**
     * If true, the text input can be multiple lines. The default value is false.
     */
    textInputMultiline?: boolean;

    /**
     * 	Callback that is called when the text input's text changes. Changed text is passed as an argument to the callback handler.
     */
    textInputOnChangeText?(text: string): void;

    /**
     * 	Callback that is called when the text input is focused.
     */
    textInputOnFocus?(): void;

    /**
     * Manually set value of the input
     */
    textInputValue?: string;

    /**
     * If true, obscures the text entered so that sensitive text like passwords stay secure.
     */
    textInputSecure?: boolean;

    /**
     * 	Style for the input text
     */
    textInputStyle?: StyleProp<TextStyle>;

    /**
     * 	Style for the container surrounding the input text
     */
    textInputContainerStyle?: StyleProp<ViewStyle>;

    /**
     * Placeholder for the text input
     */
    textInputPlaceholder?: string;

    /**
     * 	Callback that is called when the text input is blurred.
     */
    textInputOnBlur?(): void;

    /**
     * If true, all text will automatically be selected on focus.
     */
    textInputSelectTextOnFocus?: boolean;

    /**
     * Determines how the return key should look. For more info see the React Native docs
     */
    textInputReturnKeyType?: string;

    /**
     * Add a badge to the ListItem by using this prop
     *
     */
    badge?: BadgeProps | ElementObject;
}

/**
 * ListItem component
 * @see https://react-native-training.github.io/react-native-elements/API/lists/
 */
export class ListItem extends React.Component<ListItemProps, any> {}

export interface ButtonInformation {
    title: string;
    icon: string;
    buttonStyle?: StyleProp<ViewStyle>;
}

export interface PricingCardProps {
    /**
     * Title
     */
    title?: string;

    /**
     * Price
     */
    price: string;

    /**
     * Color scheme for button & title
     */
    color: string;

    /**
     * Pricing information
     */
    info?: string[];

    /**
     * {title, icon, buttonStyle}
     * Button information
     */
    button: ButtonInformation;

    /**
     * Function to be run when button is pressed
     */
    onButtonPress?(): void;

    /**
     * Outer component styling
     */
    containerStyle?: StyleProp<ViewStyle>;

    /**
     * Inner wrapper component styling
     */
    wrapperStyle?: StyleProp<ViewStyle>;

    /**
     * Specify title font family
     *
     * System font (font weight 800) (iOS)
     * Sans Serif Black (android)
     */
    titleFont?: string;

    /**
     * Specify pricing font family
     *
     * System font (font weight 700) (iOS)
     * Sans Serif Bold (android)
     */
    pricingFont?: string;

    /**
     * Specify pricing information font family
     *
     * System font bold (iOS)
     * Sans Serif Bold (android)
     */
    infoFont?: string;

    /**
     * Specify button font family
     *
     * System font (iOS)
     * Sans Serif (android)
     */
    buttonFont?: string;
}

/**
 * PricingCard component
 * @see https://react-native-training.github.io/react-native-elements/API/pricing/
 */
export class PricingCard extends React.Component<PricingCardProps, any> {}

export interface RatingProps {
    /**
     * Callback method when the user finishes rating. Gives you the final rating value as a whole number
     */
    onFinishRating(rating: number): void;

    /**
     * Choose one of the built-in types: star, rocket, bell, heart or use type custom to render a custom image
     */
    type?: 'star' | 'rocket' | 'bell' | 'heart' | 'custom';

    /**
     * Pass in a custom image source; use this along with type='custom' prop above
     */
    ratingImage?: ImageURISource | string | number;

    /**
     * Pass in a custom fill-color for the rating icon; use this along with type='custom' prop above
     *
     * @default '#f1c40f'
     */
    ratingColor?: string;

    /**
     * Pass in a custom background-fill-color for the rating icon; use this along with type='custom' prop above
     *
     * @default 'white'
     */
    ratingBackgroundColor?: string;

    /**
     * Number of rating images to display
     *
     * @default 5
     */
    ratingCount?: number;

    /**
     * The size of each rating image
     *
     * @default 50
     */
    imageSize?: number;

    /**
     * Displays the Built-in Rating UI to show the rating value in real-time
     */
    showRating?: boolean;

    /**
     * Whether the rating can be modiefied by the user
     *
     * @default false
     */
    readonly?: boolean;

    /**
     * The initial rating to render
     *
     * @default ratingCount/2
     */
    startingValue?: number;

    /**
     * The number of decimal places for the rating value; must be between 0 and 20
     *
     * @default undefined
     */
    fractions?: number;

    /**
     * Exposes style prop to add additonal styling to the container view
     */
    style?: StyleProp<ViewStyle>;
}

/**
 * Rating component
 * @see https://react-native-training.github.io/react-native-elements/API/rating/
 */
export class Rating extends React.Component<RatingProps, any> {}
