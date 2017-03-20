// Type definitions for firmata.js v0.15.0
// Project: https://github.com/firmata/firmata.js
// Definitions by: Troy W. <https://github.com/troywweber7, https://bitbucket.org/troywweber/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare module 'firmata'
{
	import * as SerialPort from 'serialport'
	export = Board;

	/**
	 * Most of these are generated by observing https://github.com/firmata/firmata.js/blob/v0.15.0/lib/firmata.js.
	 *
	 * This is a starting point that appeared to work fine for months within a project of my company, but I give no
	 * guarantee that it cannot be improved.
	 */
	class Board extends NodeJS.EventEmitter
	{
		constructor(serialPort:string, callback?:(error:any) => void)

		public MODES:Board.IPinModes;
		public STEPPER:Board.IStepperConstants;
		public I2C_MODES:Board.II2cModes;
		public SERIAL_MODES:Board.ISerialModes;
		public SERIAL_PORT_IDs:Board.ISerialPortIds;
		public SERIAL_PIN_TYPES:Board.ISerialPinTypes;
		public HIGH:Board.PIN_STATE;
		public LOW:Board.PIN_STATE;
		public pins:Board.IPins[];
		public ports:number[];
		public analogPins:number[];
		public version:Board.IVersion;
		public firmware:Board.IFirmware;
		public settings:Board.ISettings;
		protected transport:SerialPort;
		public reportVersion(callback:() => void):void
		public queryFirmware(callback:() => void):void
		public analogRead(pin:number, callback:(value:number) => void):void
		public analogWrite(pin:number, value:number):void
		public pwmWrite(pin:number, value:number):void
		public servoConfig(pin:number, min:number, max:number):void
		public servoWrite(pin:number, value:number):void
		public pinMode(pin:number, mode:Board.PIN_MODES):void
		public digitalWrite(pin:number, val:Board.PIN_STATE):void
		public digitalRead(pin:number, callback:(val:Board.PIN_STATE) => void):void
		public queryCapabilities(callback:() => void):void
		public queryAnalogMapping(callback:() => void):void
		public queryPinState(pin:number, callback:() => void):void
		// TODO untested --- TWW
		public sendString(str:string):void
		// TODO untested --- TWW
		public sendI2CConfig(delay:number):void
		// TODO untested --- TWW
		public i2cConfig(options:number|{ delay:number }):void
		// TODO untested --- TWW
		public sendI2CWriteRequest(slaveAddress:number, bytes:number[]):void
		// TODO untested --- TWW
		public i2cWrite(address:number, register:number, inBytes:number[]):void
		public i2cWrite(address:number, data:number[]):void
		// TODO untested --- TWW
		public i2cWriteReg(address:number, register:number, byte:number):void
		// TODO untested --- TWW
		public sendI2CReadRequest(address:number, numBytes:number, callback:() => void):void
		// TODO untested --- TWW
		public i2cRead(address:number, register:number, bytesToRead:number, callback:(data:number[]) => void):void
		public i2cRead(address:number, bytesToRead:number, callback:(data:number[]) => void):void
		// TODO untested --- TWW
		public i2cStop(options:number|{ bus:number, address:number }):void
		// TODO untested --- TWW
		public i2cReadOnce(address:number, register:number, bytesToRead:number, callback:(data:number[]) => void):void
		public i2cReadOnce(address:number, bytesToRead:number, callback:(data:number[]) => void):void
		// TODO untested --- TWW
		public sendOneWireConfig(pin:number, enableParasiticPower:boolean):void
		// TODO untested --- TWW
		public sendOneWireSearch(pin:number, callback:() => void):void
		// TODO untested --- TWW
		public sendOneWireAlarmsSearch(pin:number, callback:() => void):void
		// TODO untested --- TWW
		public sendOneWireRead(pin:number, device:number, numBytesToRead:number, callback:() => void):void
		// TODO untested --- TWW
		public sendOneWireReset(pin:number):void
		// TODO untested --- TWW
		public sendOneWireWrite(pin:number, device:number, data:number|number[]):void
		// TODO untested --- TWW
		public sendOneWireDelay(pin:number, delay:number):void
		// TODO untested --- TWW
		public sendOneWireWriteAndRead(pin:number, device:number, data:number|number[], numBytesToRead:number,
			callback:(error?:Error, data?:number) => void):void
		public setSamplingInterval(interval:number):void
		public getSamplingInterval():number
		public reportAnalogPin(pin:number, value:Board.REPORTING):void
		public reportDigitalPin(pin:number, value:Board.REPORTING):void
		// TODO untested/incomplete --- TWW
		public pingRead(opts:any, callback:() => void):void
		public stepperConfig(deviceNum:number, type:number, stepsPerRev:number, dirOrMotor1Pin:number,
			stepOrMotor2Pin:number, motor3Pin?:number, motor4Pin?:number):void
		public stepperStep(deviceNum:number, direction:Board.STEPPER_DIRECTIONS, steps:number, speed:number,
			accel:number|((bool?:boolean) => void), decel?:number, callback?:(bool?:boolean) => void):void
		// TODO untested --- TWW
		public serialConfig(options:{ portId:Board.SERIAL_PORT_IDs, baud:number, rxPin?:number, txPin?:number }):void
		// TODO untested --- TWW
		public serialWrite(portId:Board.SERIAL_PORT_IDs, inBytes:number[]):void
		// TODO untested --- TWW
		public serialRead(portId:Board.SERIAL_PORT_IDs, maxBytesToRead:number, callback:() => void):void
		// TODO untested --- TWW
		public serialStop(portId:Board.SERIAL_PORT_IDs):void
		// TODO untested --- TWW
		public serialClose(portId:Board.SERIAL_PORT_IDs):void
		// TODO untested --- TWW
		public serialFlush(portId:Board.SERIAL_PORT_IDs):void
		// TODO untested --- TWW
		public serialListen(portId:Board.SERIAL_PORT_IDs):void
		// TODO untested --- TWW
		public sysexResponse(commandByte:number, handler:(data:number[]) => void):void
		// TODO untested --- TWW
		public sysexCommand(message:number[]):void
		public reset():void
		public static isAcceptablePort(port:Board.IPort):boolean
		public static requestPort(callback:(error:any, port:Board.IPort) => any):void
		// TODO untested --- TWW
		public static encode(data:number[]):number[]
		// TODO untested --- TWW
		public static decode(data:number[]):number[]
		// TODO untested/incomplete --- TWW
		protected _sendOneWireSearch(type:any, event:any, pin:number, callback:() => void):void
		// TODO untested/incomplete --- TWW
		protected _sendOneWireRequest(pin:number, subcommand:any, device:any, numBytesToRead:any, correlationId:any,
			delay:number, dataToWrite:any, event:any, callback:() => void):void
	}

	namespace Board
	{
		export interface IPinModes
		{
			INPUT:PIN_MODES, OUTPUT:PIN_MODES, ANALOG:PIN_MODES, PWM:PIN_MODES, SERVO:PIN_MODES, SHIFT:PIN_MODES,
			I2C:PIN_MODES, ONEWIRE:PIN_MODES, STEPPER:PIN_MODES, SERIAL:PIN_MODES, PULLUP:PIN_MODES, IGNORE:PIN_MODES,
			PING_READ:PIN_MODES, UNKOWN:PIN_MODES
		}

		export interface IStepperConstants
		{
			TYPE:{ DRIVER:STEPPER_TYPES, TWO_WIRE:STEPPER_TYPES, FOUR_WIRE:STEPPER_TYPES },
			RUNSTATE:{
				STOP:STEPPER_RUN_STATES, ACCEL:STEPPER_RUN_STATES, DECEL:STEPPER_RUN_STATES, RUN:STEPPER_RUN_STATES
			},
			DIRECTION:{ CCW:STEPPER_DIRECTIONS, CW:STEPPER_DIRECTIONS }
		}

		export interface II2cModes
		{
			WRITE:I2C_MODES, READ:I2C_MODES, CONTINUOUS_READ:I2C_MODES, STOP_READING:I2C_MODES
		}

		export interface ISerialModes
		{
			CONTINUOUS_READ:SERIAL_MODES, STOP_READING:SERIAL_MODES
		}

		export interface ISerialPortIds
		{
			HW_SERIAL0:SERIAL_PORT_IDs, HW_SERIAL1:SERIAL_PORT_IDs, HW_SERIAL2:SERIAL_PORT_IDs,
			HW_SERIAL3:SERIAL_PORT_IDs, SW_SERIAL0:SERIAL_PORT_IDs, SW_SERIAL1:SERIAL_PORT_IDs,
			SW_SERIAL2:SERIAL_PORT_IDs, SW_SERIAL3:SERIAL_PORT_IDs, DEFAULT:SERIAL_PORT_IDs,
		}

		export interface ISerialPinTypes
		{
			RES_RX0:SERIAL_PIN_TYPES, RES_TX0:SERIAL_PIN_TYPES, RES_RX1:SERIAL_PIN_TYPES, RES_TX1:SERIAL_PIN_TYPES,
			RES_RX2:SERIAL_PIN_TYPES, RES_TX2:SERIAL_PIN_TYPES, RES_RX3:SERIAL_PIN_TYPES, RES_TX3:SERIAL_PIN_TYPES,
		}

		export interface IPins
		{
			mode:PIN_MODES,
			value:PIN_STATE|number,
			supportedModes:PIN_MODES[],
			analogChannel:number,
			report:REPORTING,
			state:PIN_STATE|PULLUP_STATE, // TODO not sure if this exists anymore... --- TWW
		}

		export interface IFirmware
		{
			name:string,
			version:IVersion,
		}

		export interface ISettings
		{
			reportVersionTimeout:number,
			samplingInterval:number,
			serialport:{
				baudRate:number,
				bufferSize:number
			}
		}

		export interface IPort
		{
			comName:string,
		}

		export interface IVersion
		{
			major:number,
			minor:number
		}

		// TODO these enums could actually be non-const in the future (provides some benefits) --- TWW
		// https://github.com/firmata/firmata.js/blob/v0.15.0/lib/firmata.js#L449-L464
		export const enum PIN_MODES {
			INPUT = 0x00,
			OUTPUT = 0x01,
			ANALOG = 0x02,
			PWM = 0x03,
			SERVO = 0x04,
			SHIFT = 0x05,
			I2C = 0x06,
			ONEWIRE = 0x07,
			STEPPER = 0x08,
			SERIAL = 0x0A,
			PULLUP = 0x0B,
			IGNORE = 0x7F,
			PING_READ = 0x75,
			UNKNOWN = 0x10,
		}

		export const enum PIN_STATE {
			LOW = 0,
			HIGH = 1,
		}

		export const enum REPORTING {
			ON = 1,
			OFF = 0,
		}

		export const enum PULLUP_STATE {
			ENABLED = 1,
			DISABLED = 0,
		}

		// https://github.com/firmata/firmata.js/blob/v0.15.0/lib/firmata.js#L474-L478
		export const enum STEPPER_TYPES {
			DRIVER = 1,
			TWO_WIRE = 2,
			FOUR_WIRE = 4,
		}

		// https://github.com/firmata/firmata.js/blob/v0.15.0/lib/firmata.js#L479-L484
		export const enum STEPPER_RUN_STATES {
			STOP = 0,
			ACCEL = 1,
			DECEL = 2,
			RUN = 3,
		}

		// https://github.com/firmata/firmata.js/blob/v0.15.0/lib/firmata.js#L485-L488
		export const enum STEPPER_DIRECTIONS {
			CCW = 0,
			CW = 1,
		}

		// https://github.com/firmata/firmata.js/blob/v0.15.0/lib/firmata.js#L466-L471
		export const enum I2C_MODES {
			WRITE = 0,
			READ = 1,
			CONTINUOUS_READ = 2,
			STOP_READING = 3
		}

		// https://github.com/firmata/firmata.js/blob/v0.15.0/lib/firmata.js#L491-L494
		export const enum SERIAL_MODES {
			CONTINUOUS_READ = 0x00,
			STOP_READING = 0x01,
		}

		// https://github.com/firmata/firmata.js/blob/v0.15.0/lib/firmata.js#L497-L512
		export const enum SERIAL_PORT_IDs {
			HW_SERIAL0 = 0x00,
			HW_SERIAL1 = 0x01,
			HW_SERIAL2 = 0x02,
			HW_SERIAL3 = 0x03,
			SW_SERIAL0 = 0x08,
			SW_SERIAL1 = 0x09,
			SW_SERIAL2 = 0x10,
			SW_SERIAL3 = 0x11,
			DEFAULT = 0x08,
		}

		// https://github.com/firmata/firmata.js/blob/v0.15.0/lib/firmata.js#L515-L524
		export const enum SERIAL_PIN_TYPES {
			RES_RX0 = 0x00,
			RES_TX0 = 0x01,
			RES_RX1 = 0x02,
			RES_TX1 = 0x03,
			RES_RX2 = 0x04,
			RES_TX2 = 0x05,
			RES_RX3 = 0x06,
			RES_TX3 = 0x07,
		}
	}
}