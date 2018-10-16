import { Hit, BasicDoc } from '../types';

// Core
export function createConnector(...args: any[]): any;

// Widget
/**
 * Configure is a widget that lets you provide raw search parameters to the Algolia API.
 * Any of the props added to this widget will be forwarded to Algolia. For more information on the different parameters that can be set, have a look at the reference.
 *
 * https://community.algolia.com/react-instantsearch/widgets/Configure.html
 */
export class Configure extends React.Component<any, any> {}

// DOM
export interface CommonWidgetProps {
  /**
   * All static text rendered by widgets, such as “Load more”, “Show more” are translatable using the translations prop on relevant widgets.
   * This prop is a mapping of keys to translation values. Translation values can be either a String or a (...args: any[]) => any, as some take parameters.
   *
   * https://community.algolia.com/react-instantsearch/guide/i18n.html
   */
  translations?: { [key: string]: string | (...args: any[]) => any };
}

export interface InstantSearchProps {
  apiKey: string;
  appId: string;
  indexName: string;

  algoliaClient?: any;
  searchClient?: any;
  createURL?: (...args: any[]) => any;
  searchState?: any;
  refresh?: boolean;
  onSearchStateChange?: (...args: any[]) => any;
  onSearchParameters?: (...args: any[]) => any;
  resultsState?: any;
  root?: {
    Root: string | (...args: any[]) => any;
    props: any;
  };
}
/**
 * <InstantSearch> is the root component of all React InstantSearch implementations. It provides all the connected components (aka widgets) a means to interact with the searchState.
 *
 * https://community.algolia.com/react-instantsearch/widgets/%3CInstantSearch%3E.html
 */
export class InstantSearch extends React.Component<InstantSearchProps> {}
export class Index extends React.Component<any> {}
export class Breadcrumb extends React.Component<any> {}
export class ClearRefinements extends React.Component<any> {}
export class CurrentRefinements extends React.Component<any> {}
export class HierarchicalMenu extends React.Component<any> {}
export class Highlight extends React.Component<any> {}

export interface HitsProps<T> {
  hitComponent: React.ComponentType<{ hit: Hit<T> }>;
}
/**
 * Displays a list of hits.
 * To configure the number of hits being shown, use the HitsPerPage widget, connectHitsPerPage connector or the Configure widget.
 *
 * https://community.algolia.com/react-instantsearch/widgets/Hits.html
 */
export class Hits<T = BasicDoc> extends React.Component<HitsProps<T>> {}
export class HitsPerPage extends React.Component<any> {}
export class InfiniteHits extends React.Component<any> {}
export class Menu extends React.Component<any> {}
export class MenuSelect extends React.Component<any> {}
export class NumericMenu extends React.Component<any> {}
export class Pagination extends React.Component<any> {}
export class Panel extends React.Component<any> {}
export class PoweredBy extends React.Component<any> {}
export class RangeInput extends React.Component<any> {}
export class RangeSlider extends React.Component<any> {}
export class RatingMenu extends React.Component<any> {}
export class RefinementList extends React.Component<any> {}
export class ScrollTo extends React.Component<any> {}

export interface SearchBoxProps extends CommonWidgetProps {
  focusShortcuts?: string[];
  autoFocus?: boolean;
  defaultRefinement?: string;
  searchAsYouType?: boolean;
  showLoadingIndicator?: boolean;

  submit?: JSX.Element;
  reset?: JSX.Element;
  loadingIndicator?: JSX.Element;

  onSubmit?: (...args: any[]) => any;
  onReset?: (...args: any[]) => any;
}
/**
 * The SearchBox component displays a search box that lets the user search for a specific query.
 *
 * https://community.algolia.com/react-instantsearch/widgets/SearchBox.html
 */
export class SearchBox extends React.Component<SearchBoxProps> {}
export class Snippet extends React.Component<any> {}
export class SortBy extends React.Component<any> {}
/**
 * The Stats component displays the total number of matching hits and the time it took to get them (time spent in the Algolia server).
 */
export class Stats extends React.Component<{translations?: { [key: string]: (n: number, ms: number) => string }}> {}
export class ToggleRefinement extends React.Component<any> {}
