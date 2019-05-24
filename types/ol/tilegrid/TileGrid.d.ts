import { Coordinate } from 'ol/coordinate';
import { Extent } from 'ol/extent';
import { Size } from 'ol/size';
import { TileCoord } from 'ol/tilecoord';
import TileRange from 'ol/TileRange';
export interface Options {
    extent?: Extent;
    minZoom?: number;
    origin?: Coordinate;
    origins?: Coordinate[];
    resolutions: number[];
    sizes?: Size[];
    tileSize?: number | Size;
    tileSizes?: Size[];
}
export default class TileGrid {
    constructor(options: Options);
    protected minZoom: number;
    protected maxZoom: number;
    getExtent(): Extent;
    getFullTileRange(z: number): TileRange;
    getMaxZoom(): number;
    getMinZoom(): number;
    getOrigin(z: number): Coordinate;
    getResolution(z: number): number;
    getResolutions(): number[];
    getTileCoordCenter(tileCoord: TileCoord): Coordinate;
    forEachTileCoordParentTileRange<T>(tileCoord: TileCoord, callback: ((this: T, param1: number, param2: TileRange) => boolean), opt_this?: T, opt_tileRange?: TileRange, opt_extent?: Extent): boolean;
    getTileCoordExtent(tileCoord: TileCoord, opt_extent?: Extent): Extent;
    getTileCoordForCoordAndResolution(coordinate: Coordinate, resolution: number, opt_tileCoord?: TileCoord): TileCoord;
    getTileCoordForCoordAndZ(coordinate: Coordinate, z: number, opt_tileCoord?: TileCoord): TileCoord;
    getTileCoordResolution(tileCoord: TileCoord): number;
    getTileRangeExtent(z: number, tileRange: TileRange, opt_extent?: Extent): Extent;
    getTileRangeForExtentAndZ(extent: Extent, z: number, opt_tileRange?: TileRange): TileRange;
    getTileSize(z: number): number | Size;
    getZForResolution(resolution: number, opt_direction?: number): number;
    forEachTileCoord(extent: Extent, zoom: number, callback: ((param0: TileCoord) => void)): void;
    getTileCoordChildTileRange(tileCoord: TileCoord, opt_tileRange?: TileRange, opt_extent?: Extent): TileRange;
}
