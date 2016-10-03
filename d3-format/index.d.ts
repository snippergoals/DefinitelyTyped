// Type definitions for D3JS d3-format module v1.0.2
// Project: https://github.com/d3/d3-format/
// Definitions by: Tom Wanzek <https://github.com/tomwanzek>, Alex Ford <https://github.com/gustavderdrache>, Boris Yankov <https://github.com/borisyankov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Specification of locale to use when creating a new FormatLocaleObject
 */
export interface FormatLocaleDefinition {
    /**
     * The decimal point (e.g., ".")
     */
    decimal: '.' | ',';
    /**
     * The group separator (e.g., ","). Note that the thousands property is a misnomer, as\
     * the grouping definition allows groups other than thousands.
     */
    thousands: '.' | ',';
    /**
     * The array of group sizes (e.g., [3]), cycled as needed.
     */
    grouping: number[];
    /**
     * The currency prefix and suffix (e.g., ["$", ""])
     */
    currency: [string, string];
}

/**
 * A Format Locale Object
 */
export interface FormatLocaleObject {

    /**
     * Returns a new format function for the given string specifier. The returned function
     * takes a number as the only argument, and returns a string representing the formatted number.
     *
     * @param specifier A Specifier string
     */
    format(specifier: string): (n: number) => string;

    /**
     * Returns a new format function for the given string specifier. The returned function
     * takes a number as the only argument, and returns a string representing the formatted number.
     * The returned function will convert values to the units of the appropriate SI prefix for the
     * specified numeric reference value before formatting in fixed point notation.
     *
     * @param specifier A Specifier string
     * @param value The reference value to determine the appropriate SI prefix.
     */
    formatPrefix(specifier: string, value: number): (n: number) => string;
}

/**
 * A Format Specifier
 *
 * For details see: {@link https://github.com/d3/d3-format#locale_format}
 */
export interface FormatSpecifier {
    /**
     * fill can be any character. The presence of a fill character is signaled by the align character following it.
     */
    fill: string;
    /**
     * Alignment used for format, as set by choosing one of the following
     *
     * '>' - Forces the field to be right-aligned within the available space. (Default behavior).
     * '<' - Forces the field to be left-aligned within the available space.
     * '^' - Forces the field to be centered within the available space.
     * '=' - Like '>', but with any sign and symbol to the left of any padding.
     */
    align: '>' | '<' | '^' | '=';
    /**
     * The sign can be:
     *
     * '-' - nothing for positive and a minus sign for negative. (Default behavior.)
     * '+' -  a plus sign for positive and a minus sign for negative.
     * '(' - nothing for positive and parentheses for negative.
     * ' '(space) -  a space for positive and a minus sign for negative.
     *
     */
    sign: '-' | '+' | '(' | ' ';
    /**
     * The symbol can be:
     *
     * '$' - apply currency symbols per the locale definition.
     * '#' - for binary, octal, or hexadecimal notation, prefix by 0b, 0o, or 0x, respectively.
     * ''(none) - no symbol.
     */
    symbol: '$' | '#' | '';
    /**
     * The zero (0) option enables zero-padding; this implicitly sets fill to 0 and align to =.
     */
    zero: boolean;
    /**
     * The width defines the minimum field width;
     * if not specified, then the width will be determined by the content.
     */
    width: number | undefined;
    /**
     * The comma (,) option enables the use of a group separator, such as a comma for thousands.
     */
    comma: boolean;
    /**
     * Depending on the type, the precision either indicates the number of digits that follow the decimal point (types 'f' and '%'),
     * or the number of significant digits (types ''​ (none), 'e', 'g', 'r', 's' and 'p'). If the precision is not specified,
     * it defaults to 6 for all types except ''​ (none), which defaults to 12.
     * Precision is ignored for integer formats (types 'b', 'o', 'd', 'x', 'X' and 'c').
     *
     * See precisionFixed and precisionRound for help picking an appropriate precision
     */
    precision: number;
    /**
     * The available type values are:
     *
     * 'e' - exponent notation.
     * 'f' - fixed point notation.
     * 'g' - either decimal or exponent notation, rounded to significant digits.
     * 'r' - decimal notation, rounded to significant digits.
     * 's' - decimal notation with an SI prefix, rounded to significant digits.
     * '%' - multiply by 100, and then decimal notation with a percent sign.
     * 'p' - multiply by 100, round to significant digits, and then decimal notation with a percent sign.
     * 'b' - binary notation, rounded to integer.
     * 'o' - octal notation, rounded to integer.
     * 'd' - decimal notation, rounded to integer.
     * 'x' - hexadecimal notation, using lower-case letters, rounded to integer.
     * 'X' - hexadecimal notation, using upper-case letters, rounded to integer.
     * 'c' - converts the integer to the corresponding unicode character before printing.
     * '' (none) - like g, but trim insignificant trailing zeros.
     *
     * The type 'n' is also supported as shorthand for ',g'. For the 'g', 'n' and ​''(none) types,
     * decimal notation is used if the resulting string would have precision or fewer digits; otherwise, exponent notation is used.
     */
    type: 'e' | 'f' | 'g' | 'r' | 's' | '%' | 'p' | 'b' | 'o' | 'd' | 'x' | 'X' | 'c' | '' | 'n';
    /**
     * Return the object as a specifier string.
     */
    toString(): string;
}

/**
 * Create a new locale-based object which exposes format(...) and formatPrefix(...)
 * methods for the specified locale.
 *
 * @param locale A Format locale definition.
 */
export function formatLocale(locale: FormatLocaleDefinition): FormatLocaleObject;

/**
 * Create a new locale-based object which exposes format(...) and formatPrefix(...)
 * methods for the specified locale definition. The specified locale definition will be
 * set as the new default locale definition.
 *
 * @param defaultLocale A Format locale definition to be used as default.
 */
export function formatDefaultLocale(defaultLocale: FormatLocaleDefinition): FormatLocaleObject;

/**
 * Returns a new format function for the given string specifier. The returned function
 * takes a number as the only argument, and returns a string representing the formatted number.
 *
 * Uses the current default locale.
 *
 * The general form of a specifier is [​[fill]align][sign][symbol][0][width][,][.precision][type].
 * For reference, an explanation of the segments of the specifier string, refer to the FormatSpecifier interface properties.
 *
 * @param specifier A Specifier string
 */
export function format(specifier: string): (n: number) => string;

/**
 * Returns a new format function for the given string specifier. The returned function
 * takes a number as the only argument, and returns a string representing the formatted number.
 * The returned function will convert values to the units of the appropriate SI prefix for the
 * specified numeric reference value before formatting in fixed point notation.
 *
 *  Uses the current default locale.
 *
 * The general form of a specifier is [​[fill]align][sign][symbol][0][width][,][.precision][type].
 * For reference, an explanation of the segments of the specifier string, refer to the FormatSpecifier interface properties.
 *
 * @param specifier A Specifier string
 * @param value The reference value to determine the appropriate SI prefix.
 */
export function formatPrefix(specifier: string, value: number): (n: number) => string;

/**
 * Parses the specified specifier, returning an object with exposed fields that correspond to the
 * format specification mini-language and a toString method that reconstructs the specifier.
 *
 * The general form of a specifier is [​[fill]align][sign][symbol][0][width][,][.precision][type].
 * For reference, an explanation of the segments of the specifier string, refer to the FormatSpecifier interface properties.
 *
 * @param specifier A specifier string.
 */
export function formatSpecifier(specifier: string): FormatSpecifier;

/**
 * Returns a suggested decimal precision for fixed point notation given the specified numeric step value.
 *
 * @param step The step represents the minimum absolute difference between values that will be formatted.
 * (This assumes that the values to be formatted are also multiples of step.)
 */
export function precisionFixed(step: number): number;

/**
 * Returns a suggested decimal precision for use with locale.formatPrefix given the specified
 * numeric step and reference value.
 *
 * @param step The step represents the minimum absolute difference between values that will be formatted.
 * (This assumes that the values to be formatted are also multiples of step.)
 * @param value Reference value determines which SI prefix will be used.
 */
export function precisionPrefix(step: number, value: number): number;


/**
 * Returns a suggested decimal precision for format types that round to significant digits
 * given the specified numeric step and max values.
 *
 * @param step The step represents the minimum absolute difference between values that will be formatted.
 * (This assumes that the values to be formatted are also multiples of step.)
 * @param max max represents the largest absolute value that will be formatted.
 */
export function precisionRound(step: number, max: number): number;
