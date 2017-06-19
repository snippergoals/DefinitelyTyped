import * as React from 'react';
import * as ReactGridLayout from 'react-grid-layout';
import { Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveWidth = WidthProvider(Responsive);

class DefaultGridTest extends React.Component<any> {
  render() {
    const layout = [
      { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
      { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: 'c', x: 4, y: 0, w: 1, h: 2 }
    ];

    return (
      <ReactGridLayout
        cols={12}
        rowHeight={30}
        width={1200}
        layout={layout}
        autoSize={true}
        verticalCompact={true}
      >
        <div key={'a'}>a</div>
        <div key={'b'}>b</div>
        <div key={'c'}>c</div>
      </ReactGridLayout>
    );
  }
}

class ResponsiveGridTest extends React.Component<any> {
  render() {
    return (
      <Responsive
        width={800}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
        <div key="1">a</div>
        <div key="2">b</div>
        <div key="3">c</div>
      </Responsive>
    );
  }
}

class ResponsiveGridWidthProviderTest extends React.Component<any> {
  render() {
    return (
      <ResponsiveWidth
        measureBeforeMount={true}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
        <div key="1">a</div>
        <div key="2">b</div>
        <div key="3">c</div>
      </ResponsiveWidth>
    );
  }
}
