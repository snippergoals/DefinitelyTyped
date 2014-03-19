// This file contains common part of defintions for rx.time.d.ts and rx.lite.d.ts
// Do not include the file separately.

///<reference path="rx-lite.ts" />

declare module Rx {
	export interface TimeInterval<T> {
		value: T;
		interval: number;
	}

	export interface Timestamp<T> {
		value: T;
		timestamp: number;
	}

	export interface Observable<T> {
		delay(dueTime: number, scheduler?: IScheduler): Observable<T>;
		throttle(dueTime: number, scheduler?: IScheduler): Observable<T>;
		timeInterval(scheduler?: IScheduler): Observable<TimeInterval<T>>;
		timestamp(scheduler?: IScheduler): Observable<Timestamp<T>>;
		sample(interval: number, scheduler?: IScheduler): Observable<T>;
		sample<TSample>(sampler: Observable<TSample>, scheduler?: IScheduler): Observable<T>;
		timeout(dueTime: Date, other?: Observable<T>, scheduler?: IScheduler): Observable<T>;
		timeout(dueTime: number, other?: Observable<T>, scheduler?: IScheduler): Observable<T>;

		delaySubscription(dueTime: number, scheduler?: IScheduler): Observable<T>;
		delayWithSelector(delayDurationSelector: (item: T) => number): Observable<T>;
		delayWithSelector(subscriptionDelay: number, delayDurationSelector: (item: T) => number): Observable<T>;

		timeoutWithSelector<TTimeout>(firstTimeout: Observable<TTimeout>, timeoutdurationSelector?: (item: T) => Observable<TTimeout>, other?: Observable<T>): Observable<T>;
		throttleWithSelector<TTimeout>(throttleDurationSelector: (item: T) => Observable<TTimeout>): Observable<T>;

		skipLastWithTime(duration: number, scheduler?: IScheduler): Observable<T>;
		takeLastWithTime(duration: number, timerScheduler?: IScheduler, loopScheduler?: IScheduler): Observable<T>;

		takeLastBufferWithTime(duration: number, scheduler?: IScheduler): Observable<T[]>;
		takeWithTime(duration: number, scheduler?: IScheduler): Observable<T>;
		skipWithTime(duration: number, scheduler?: IScheduler): Observable<T>;

		skipUntilWithTime(startTime: Date, scheduler?: IScheduler): Observable<T>;
		takeUntilWithTime(endTime: Date, scheduler?: IScheduler): Observable<T>;
	}

	interface ObservableStatic {
		interval(period: number, scheduler?: IScheduler): Observable<number>;
		interval(dutTime: number, period: number, scheduler?: IScheduler): Observable<number>;
		timer(dueTime: number, period: number, scheduler: IScheduler): Observable<number>;
		timer(dueTime: number, scheduler: IScheduler): Observable<number>;
	}
}
