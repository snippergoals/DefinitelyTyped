// Type definitions for socket.io
// Project: http://socket.io/
// Definitions by: William Orr <https://github.com/worr>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


///<reference path='../node/node.d.ts' />

declare module "socket.io" {
	import http = module('http');

	export function listen(server: http.Server, options: any, fn: Function): SocketManager;
	export function listen(server: http.Server, fn?: Function): SocketManager;
	export function listen(port: Number): SocketManager;
}

interface Socket {
	json:any;
	log: any;
	volatile: any;
	broadcast: any;
	in(room: string): Socket;
	to(room: string): Socket;
	join(name: string, fn: Function): Socket;
	unjoin(name: string, fn: Function): Socket;
	set(key: string, value: any, fn: Function): Socket;
	get(key: string, value: any, fn: Function): Socket;
	has(key: string, fn: Function): Socket;
	del(key: string, fn: Function): Socket;
	disconnect(): Socket;
	send(data: any, fn: Function): Socket;
	emit(ev: any): Socket;
}

interface SocketNamespace {
	clients(room: string): Socket[];
	log: any;
	store: any;
	json: any;
	volatile: any;
	in(room: string): SocketNamespace;
	on(evt: string, fn: Function): SocketNamespace;
	to(room: string): SocketNamespace;
	except(id: any): SocketNamespace;
	send(data: any): any;
	emit(data: any): any;
	socket(sid: any, readable: bool): Socket;
	authorization(fn: Function);
}

interface SocketManager {
	get(key: any): any;
	set(key: any, value: any): SocketManager;
	enable(key: any): SocketManager;
	disable(key: any): SocketManager;
	enabled(key: any): bool;
	disabled(key: any): bool;
	configure(env: string, fn: Function): SocketManager;
	configure(fn: Function): SocketManager;
	of(nsp: string): SocketNamespace;
	on(ns: string, fn: Function): SocketManager;
	sockets: SocketNamespace;
}
