// Type definitions for node-fluent-ffmpeg 2.1
// Project: https://github.com/fluent-ffmpeg/node-fluent-ffmpeg
// Definitions by: KIM Jaesuck a.k.a. gim tcaesvk <https://github.com/tcaesvk>, DingWeizhe <https://github.com/DingWeizhe>
// Definitions: https://github.com/DefinitelyType/DefinitelyTyped

/// <reference types="node" />

import * as events from "events";
import * as stream from "stream";

declare namespace Ffmpeg {
    interface FfmpegCommandLogger {
        error(...data: any[]): void;
        warning(...data: any[]): void;
        info(...data: any[]): void;
        debug(...data: any[]): void;
    }

    interface FfmpegCommandOptions {
        logger?: FfmpegCommandLogger;
        niceness?: number;
        priority?: number;
        presets?: string;
        preset?: string;
        stdoutLines?: number;
        timeout?: number;
        source?: string | stream.Readable;
    }

    interface FilterSpecification {
        filter: string;
        inputs: string | string[];
        outputs: string | string[];
        options?: any | string | any[];
    }

    type GetPreset = (command: FfmpegCommand) => string;

    interface Filter {
        description: string;
        input: string;
        multipleInputs: boolean;
        output: string;
        multipleOutputs: boolean;
    }
    interface Filters {
        [key: string]: Filter;
    }
    type FiltersCallback = (err: Error, filters: Filters) => void;

    interface Codec {
        type: string;
        description: string;
        canDecode: boolean;
        canEncode: boolean;
        drawHorizBand?: boolean;
        directRendering?: boolean;
        weirdFrameTruncation?: boolean;
        intraFrameOnly?: boolean;
        isLossy?: boolean;
        isLossless?: boolean;
    }
    interface Codecs {
        [key: string]: Codec;
    }
    type CodecsCallback = (err: Error, codecs: Codecs) => void;

    interface Encoder {
        type: string;
        description: string;
        frameMT: boolean;
        sliceMT: boolean;
        experimental: boolean;
        drawHorizBand: boolean;
        directRendering: boolean;
    }
    interface Encoders {
        [key: string]: Encoder;
    }
    type EncodersCallback = (err: Error, encoders: Encoders) => void;

    interface Format {
        description: string;
        canDemux: boolean;
        canMux: boolean;
    }
    interface Formats {
        [key: string]: Format;
    }
    type FormatsCallback = (err: Error, formats: Formats) => void;

    interface FfprobeData {
        stream: any[];
        format: any;
        chapters: any[];
    }

    interface ScreenshotsConfig {
        count?: number;
        folder?: string;
        filename?: string;
        timemarks?: number[] | string[];
        timestamps?: number[] | string[];
        fastSeek?: boolean;
        size?: string;
    }

    interface AudioVideoFilter {
        filter: string;
        options: string | string[] | object;
    }

    class FfmpegCommand extends events.EventEmitter {
        constructor(options?: FfmpegCommandOptions);
        constructor(input?: string | stream.Readable, options?: FfmpegCommandOptions);

        // options/inputs
        mergeAdd(source: string | stream.Readable): FfmpegCommand;
        addInput(source: string | stream.Readable): FfmpegCommand;
        input(source: string | stream.Readable): FfmpegCommand;
        withInputFormat(format: string): FfmpegCommand;
        inputFormat(format: string): FfmpegCommand;
        fromFormat(format: string): FfmpegCommand;
        withInputFps(fps: number): FfmpegCommand;
        withInputFPS(fps: number): FfmpegCommand;
        withFpsInput(fps: number): FfmpegCommand;
        withFPSInput(fps: number): FfmpegCommand;
        inputFPS(fps: number): FfmpegCommand;
        inputFps(fps: number): FfmpegCommand;
        fpsInput(fps: number): FfmpegCommand;
        FPSInput(fps: number): FfmpegCommand;
        nativeFramerate(): FfmpegCommand;
        withNativeFramerate(): FfmpegCommand;
        native(): FfmpegCommand;
        setStartTime(seek: string | number): FfmpegCommand;
        seekInput(seek: string | number): FfmpegCommand;
        loop(duration: string | number): FfmpegCommand;

        // options/audio
        withNoAudio(): FfmpegCommand;
        noAudio(): FfmpegCommand;
        withAudioCodec(codec: string): FfmpegCommand;
        audioCodec(codec: string): FfmpegCommand;
        withAudioBitrate(bitrate: string | number): FfmpegCommand;
        audioBitrate(bitrate: string | number): FfmpegCommand;
        withAudioChannels(channels: number): FfmpegCommand;
        audioChannels(channels: number): FfmpegCommand;
        withAudioFrequency(freq: number): FfmpegCommand;
        audioFrequency(freq: number): FfmpegCommand;
        withAudioQuality(quality: number): FfmpegCommand;
        audioQuality(quality: number): FfmpegCommand;
        withAudioFilter(filters: string | string[] | AudioVideoFilter[]): FfmpegCommand;
        withAudioFilters(filters: string | string[] | AudioVideoFilter[]): FfmpegCommand;
        audioFilter(filters: string | string[] | AudioVideoFilter[]): FfmpegCommand;
        audioFilters(filters: string | string[] | AudioVideoFilter[]): FfmpegCommand;

        // options/video;
        withNoVideo(): FfmpegCommand;
        noVideo(): FfmpegCommand;
        withVideoCodec(codec: string): FfmpegCommand;
        videoCodec(codec: string): FfmpegCommand;
        withVideoBitrate(bitrate: string | number): FfmpegCommand;
        videoBitrate(bitrate: string | number): FfmpegCommand;
        withVideoFilter(filters: string | string[] | AudioVideoFilter[]): FfmpegCommand;
        withVideoFilters(filters: string | string[] | AudioVideoFilter[]): FfmpegCommand;
        videoFilter(filters: string | string[] | AudioVideoFilter[]): FfmpegCommand;
        videoFilters(filters: string | string[] | AudioVideoFilter[]): FfmpegCommand;
        withOutputFps(fps: number): FfmpegCommand;
        withOutputFPS(fps: number): FfmpegCommand;
        withFpsOutput(fps: number): FfmpegCommand;
        withFPSOutput(fps: number): FfmpegCommand;
        withFps(fps: number): FfmpegCommand;
        withFPS(fps: number): FfmpegCommand;
        outputFPS(fps: number): FfmpegCommand;
        outputFps(fps: number): FfmpegCommand;
        fpsOutput(fps: number): FfmpegCommand;
        FPSOutput(fps: number): FfmpegCommand;
        fps(fps: number): FfmpegCommand;
        FPS(fps: number): FfmpegCommand;
        takeFrames(frames: number): FfmpegCommand;
        withFrames(frames: number): FfmpegCommand;
        frames(frames: number): FfmpegCommand;

        // options/videosize
        keepPixelAspect(): FfmpegCommand;
        keepDisplayAspect(): FfmpegCommand;
        keepDisplayAspectRatio(): FfmpegCommand;
        keepDAR(): FfmpegCommand;
        withSize(size: string): FfmpegCommand;
        setSize(size: string): FfmpegCommand;
        size(size: string): FfmpegCommand;
        withAspect(aspect: string | number): FfmpegCommand;
        withAspectRatio(aspect: string | number): FfmpegCommand;
        setAspect(aspect: string | number): FfmpegCommand;
        setAspectRatio(aspect: string | number): FfmpegCommand;
        aspect(aspect: string | number): FfmpegCommand;
        aspectRatio(aspect: string | number): FfmpegCommand;
        applyAutopadding(pad: boolean, color: string): FfmpegCommand;
        applyAutoPadding(pad: boolean, color: string): FfmpegCommand;
        applyAutopad(pad: boolean, color: string): FfmpegCommand;
        applyAutoPad(pad: boolean, color: string): FfmpegCommand;
        withAutopadding(pad: boolean, color: string): FfmpegCommand;
        withAutoPadding(pad: boolean, color: string): FfmpegCommand;
        withAutopad(pad: boolean, color: string): FfmpegCommand;
        withAutoPad(pad: boolean, color: string): FfmpegCommand;
        autoPad(pad: boolean, color: string): FfmpegCommand;
        autopad(pad: boolean, color: string): FfmpegCommand;

        // options/output
        addOutput(target: string | stream.Writable, pipeopts?: { end?: boolean }): FfmpegCommand;
        output(target: string | stream.Writable, pipeopts?: { end?: boolean }): FfmpegCommand;
        seekOutput(seek: string | number): FfmpegCommand;
        seek(seek: string | number): FfmpegCommand;
        withDuration(duration: string | number): FfmpegCommand;
        setDuration(duration: string | number): FfmpegCommand;
        duration(duration: string | number): FfmpegCommand;
        toFormat(format: string): FfmpegCommand;
        withOutputFormat(format: string): FfmpegCommand;
        outputFormat(format: string): FfmpegCommand;
        format(format: string): FfmpegCommand;
        map(spec: string): FfmpegCommand;
        updateFlvMetadata(): FfmpegCommand;
        flvmeta(): FfmpegCommand;
        preset(format: string): FfmpegCommand;

        // options/custom
        addInputOption(options: string[]): FfmpegCommand;
        addInputOption(...options: string[]): FfmpegCommand;
        addInputOptions(options: string[]): FfmpegCommand;
        addInputOptions(...options: string[]): FfmpegCommand;
        withInputOption(options: string[]): FfmpegCommand;
        withInputOption(...options: string[]): FfmpegCommand;
        withInputOptions(options: string[]): FfmpegCommand;
        withInputOptions(...options: string[]): FfmpegCommand;
        inputOption(options: string[]): FfmpegCommand;
        inputOption(...options: string[]): FfmpegCommand;
        inputOptions(options: string[]): FfmpegCommand;
        inputOptions(...options: string[]): FfmpegCommand;
        addOutputOption(options: string[]): FfmpegCommand;
        addOutputOption(...options: string[]): FfmpegCommand;
        addOutputOptions(options: string[]): FfmpegCommand;
        addOutputOptions(...options: string[]): FfmpegCommand;
        addOption(options: string[]): FfmpegCommand;
        addOption(...options: string[]): FfmpegCommand;
        addOptions(options: string[]): FfmpegCommand;
        addOptions(...options: string[]): FfmpegCommand;
        withOutputOption(options: string[]): FfmpegCommand;
        withOutputOption(...options: string[]): FfmpegCommand;
        withOutputOptions(options: string[]): FfmpegCommand;
        withOutputOptions(...options: string[]): FfmpegCommand;
        withOption(options: string[]): FfmpegCommand;
        withOption(...options: string[]): FfmpegCommand;
        withOptions(options: string[]): FfmpegCommand;
        withOptions(...options: string[]): FfmpegCommand;
        outputOption(options: string[]): FfmpegCommand;
        outputOption(...options: string[]): FfmpegCommand;
        outputOptions(options: string[]): FfmpegCommand;
        outputOptions(...options: string[]): FfmpegCommand;
        filterGraph(spec: string | FilterSpecification[], map: string[]): FfmpegCommand;
        complexFilter(spec: string | FilterSpecification[], map: string[]): FfmpegCommand;

        // options/misc
        usingPreset(proset: string | GetPreset): FfmpegCommand;
        pnreset(proset: string | GetPreset): FfmpegCommand;

        // processor
        renice(niceness: number): FfmpegCommand;
        kill(signal: string): FfmpegCommand;

        // capabilities
        setFfmpegPath(path: string): FfmpegCommand;
        setFfprobePath(path: string): FfmpegCommand;
        setFlvtoolPath(path: string): FfmpegCommand;
        availableFilters(callback: FiltersCallback): void;
        getAvailableFilters(callback: FiltersCallback): void;
        availableCodecs(callback: CodecsCallback): void;
        getAvailableCodecs(callback: CodecsCallback): void;
        availableEncoders(callback: EncodersCallback): void;
        getAvailableEncoders(callback: EncodersCallback): void;
        availableFormats(callback: FormatsCallback): void;
        getAvailableFormats(callback: FormatsCallback): void;

        // ffprobe
        /* tslint:disable:unified-signatures */
        ffprobe(callback: (err: any, data: FfprobeData) => void): (err: any, data: FfprobeData) => void;
        ffprobe(index: number, callback: (err: any, data: FfprobeData) => void): (err: any, data: FfprobeData) => void;
        ffprobe(options: string[], callback: (err: any, data: FfprobeData) => void): (err: any, data: FfprobeData) => void;
        ffprobe(index: number, options: string[], callback: (err: any, data: FfprobeData) => void): (err: any, data: FfprobeData) => void;
        /* tslint:enable:unified-signatures */

        // recipes
        saveToFile(output: string): FfmpegCommand;
        save(output: string): FfmpegCommand;
        writeToStream(stream: stream.Writable, options?: { end?: boolean }): stream.Writable;
        pipe(stream: stream.Writable, options?: { end?: boolean }): stream.Writable;
        stream(stream: stream.Writable, options?: { end?: boolean }): stream.Writable;
        takeScreenshots(config: number | ScreenshotsConfig, folder?: string): FfmpegCommand;
        thumbnail(config: number | ScreenshotsConfig, folder?: string): FfmpegCommand;
        thumbnails(config: number | ScreenshotsConfig, folder?: string): FfmpegCommand;
        screenshot(config: number | ScreenshotsConfig, folder?: string): FfmpegCommand;
        screenshots(config: number | ScreenshotsConfig, folder?: string): FfmpegCommand;
        mergeToFile(target: string | stream.Writable, options?: { end?: boolean }): FfmpegCommand;
        concatenate(target: string | stream.Writable, options?: { end?: boolean }): FfmpegCommand;
        concat(target: string | stream.Writable, options?: { end?: boolean }): FfmpegCommand;
        clone(): FfmpegCommand;
        run(): void;
    }
}
declare function Ffmpeg(options?: Ffmpeg.FfmpegCommandOptions): Ffmpeg.FfmpegCommand;
declare function Ffmpeg(input?: string | stream.Readable, options?: Ffmpeg.FfmpegCommandOptions): Ffmpeg.FfmpegCommand;

export = Ffmpeg;
