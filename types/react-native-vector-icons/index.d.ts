// Type definitions for react-native-vector-icons 4.2
// Project: https://github.com/oblador/react-native-vector-icons
// Definitions by: Kyle Roach <https://github.com/iRoachie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';
import { Icon } from './Icon';
import { TextProperties } from 'react-native';

/**
 * Returns your own custom font based on the glyphMap where the key is the icon name
 * and the value is either a UTF-8 character or it's character code. fontFamily is the name
 * of the font NOT the filename. Open the font in Font Book.app or similar to learn the name.
 * Optionally pass the third fontFile argument for android support, it should be a path
 * to the font file in you asset folder.
 *
 * @param glyphMap
 * @param fontFamily
 * @param fontFile
 */
export function createIconSet(
  glyphMap: {},
  fontFamily: string,
  fontFile?: string
): Icon;

/**
 * Convenience method to create a custom font based on a fontello config file.
 * Don't forget to import the font as described above and drop the config.json
 * somewhere convenient in your project.
 *
 * Example usage
 * import { createIconSetFromFontello } from 'react-native-vector-icons';
 * import fontelloConfig from './config.json';
 * const Icon = createIconSetFromFontello(fontelloConfig);
 *
 * @see http://fontello.com
 * @export
 * @param {{}} config
 * @returns {Icon}
 */
export function createIconSetFromFontello(config: {}): Icon;

/**
 * Convenience method to create a custom font from IcoMoon
 * Make sure you're using the Download option in IcoMoon, and use the .json file that's
 * included in the .zip you've downloaded. You'll also need to import the .ttf font
 * file into your project
 *
 * Example usage
 * import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
 * import icoMoonConfig from './config.json';
 * const Icon = createIconSetFromIcoMoon(icoMoonConfig);
 *
 * @see https://icomoon.io/app
 * @export
 * @param {{}} config
 * @returns {Icon}
 */
export function createIconSetFromIcoMoon(config: {}): Icon;
