// Type definitions for @loadable/server 5.9
// Project: https://github.com/smooth-code/loadable-components
// Definitions by: Martynas Kadiša <https://github.com/martynaskadisa>
//                 Luis Herranz <https://github.com/luisherranz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { ComponentType, ReactElement, Component } from 'react';

export type ChunkExtractorOptions = {
	/**
	 * Webpack entrypoints to load (default to `["main"]`)
	 */
	entrypoints?: string | string[];
	/**
	 * Optional output path (only for `requireEntrypoint`)
	 */
	outputPath?: string;
  /**
   * Optional namespace in case of multiple apps on same page
   */
  namespace?: string;
} & ({
	/**
	 * Stats file path generated using `@loadable/webpack-plugin`
	 */
	statsFile: string;
 } | {
	 /**
	  * Stats generated using `@loadable/webpack-plugin`.
	  */
	stats: object;
 });

/**
 * Chunk that is received by the AttrFn function.
 */
export interface Chunk {
	chunk: string;
	filename: string;
	linkType: string;
	path: string;
	scriptType: string;
	type: string;
	url: string;
}

/**
 * Used to insert attributes in the get functions.
 */
export type AttrFn = (chunk: Chunk) => {};

/**
 * Used to collect chunks server-side and get them as script tags or script elements
 */
export class ChunkExtractor {
	constructor(options: ChunkExtractorOptions);

	/**
	 * Wrap your application in a `ChunkExtractorManager`
	 */
	collectChunks(
		/**
		 * JSX element that will be wrapped in `ChunkExtractorManager`
		 */
		element: JSX.Element
	): JSX.Element;

	/**
	 * Require the entrypoint of your application as a commonjs module.
	 */
	requireEntrypoint(name?: string): { default: ComponentType };

	/**
	 * Get scripts as a string of `<script>` tags
	 */
	getScriptTags(attr?: {} | AttrFn): string;

	/**
	 * Get scripts as an array of React `<script>` elements.
	 */
  	getScriptElements(attr?: {} | AttrFn): Array<ReactElement<{}>>;

	/**
	 * Get "prefetch" and "preload" links as a string of `<link>` tags
	 */
  	getLinkTags(attr?: {} | AttrFn): string;

	/**
	 * Get "prefetch" and "preload" links as an array of React `<link>` elements
	 */
  	getLinkElements(attr?: {} | AttrFn): Array<ReactElement<{}>>;

	/**
	 * Get style links as a string of `<link>` tags
	 */
  	getStyleTags(attr?: {} | AttrFn): string;

	/**
	 * Get style links as an array of React `<link>` elements
	 */
  	getStyleElements(attr?: {} | AttrFn): Array<ReactElement<{}>>;
}

export interface ChunkExtractorManagerProps {
	extractor: ChunkExtractor;
}

export class ChunkExtractorManager extends Component<ChunkExtractorManagerProps> {}
