declare namespace echarts {
    namespace EChartOption {
        /**
         * The y axis in cartesian(rectangular) coordinate.
         * Usually a single grid component can place at most 2 y axis,
         * one on the left and another on the right. offset can be used
         * to avoid overlap when you need to put more than two y axis.
         *
         * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#yAxis
         */
        interface YAxis extends CommonProps.Axis {
            /**
             * The first y axis in grid defaults to be the left (`'left'`)
             * of the grid, and the second y axis is on the other side
             * against the first y axis.
             */
            position?: 'left' | 'right';

            /**
             * Options:
             * + 'value' - Numerical axis, suitable for continuous data.
             * + 'category' Category axis, suitable for discrete category data.
             *   Data should only be set via 'data' for this type.
             * + 'time' Time axis, suitable for continuous time series data.
             *   As compared to value axis, it has a better formatting for time
             *   and a different tick calculation method.
             *   For example, it decides to use month, week, day or hour for tick
             *   based on the range of span.
             * + 'log' Log axis, suitable for log data.
             *
             * @default 'value'
             * @see https://ecomfe.github.io/echarts-doc/public/en/option.html#yAxis.type
             */
            type?: CommonProps.Axis.Type;
        }
    }
}
