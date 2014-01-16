/// <reference path="../knockout/knockout.d.ts" />
/// <reference path="ko-grid.d.ts" />

module KoGridTests
{
    export interface IGridItem {
        name: string;
    }

    export class Tests {
        public items: KnockoutObservableArray<IGridItem>;
        public selectedItems: KnockoutObservableArray<IGridItem>;
        public gridOptionsAlarms: kg.GridOptions<IGridItem>;

        constructor() {
            this.items = ko.observableArray<IGridItem>();
            this.selectedItems = ko.observableArray<IGridItem>();
            this.gridOptionsAlarms = this.createDefaultGridOptions(this.items, this.selectedItems);
        }

        public createDefaultGridOptions<Type>(dataArray: KnockoutObservableArray<Type>, selectedItems: KnockoutObservableArray<Type>): kg.GridOptions<Type> {
            var result = {
                data: dataArray,
                displaySelectionCheckbox: false,
                footerVisible: false,
                multiSelect: false,
                showColumnMenu: false,
                plugins: null,
                selectedItems: selectedItems
            };
            return result;
        }
    }
}