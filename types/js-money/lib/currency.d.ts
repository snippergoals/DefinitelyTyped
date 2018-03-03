// Type definitions for js-money 0.6
// Project: https://github.com/davidkalosi/js-money#readme
// Definitions by: Kanat Kubash <https://github.com/kanatkubash>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Currencies {
	interface Currency {
		symbol: string;
		name: string;
		symbol_native: string;
		decimal_digits: number;
		rounding: number;
		code: string;
		name_plural: string;
	}
	interface Currencies {
		[key: string]: Currencies.Currency;
		USD: Currencies.Currency;
		CAD: Currencies.Currency;
		EUR: Currencies.Currency;
		BTC: Currencies.Currency;
		AED: Currencies.Currency;
		AFN: Currencies.Currency;
		ALL: Currencies.Currency;
		AMD: Currencies.Currency;
		ARS: Currencies.Currency;
		AUD: Currencies.Currency;
		AZN: Currencies.Currency;
		BAM: Currencies.Currency;
		BDT: Currencies.Currency;
		BGN: Currencies.Currency;
		BHD: Currencies.Currency;
		BIF: Currencies.Currency;
		BND: Currencies.Currency;
		BOB: Currencies.Currency;
		BRL: Currencies.Currency;
		BWP: Currencies.Currency;
		BYR: Currencies.Currency;
		BZD: Currencies.Currency;
		CDF: Currencies.Currency;
		CHF: Currencies.Currency;
		CLP: Currencies.Currency;
		CNY: Currencies.Currency;
		COP: Currencies.Currency;
		CRC: Currencies.Currency;
		CVE: Currencies.Currency;
		CZK: Currencies.Currency;
		DJF: Currencies.Currency;
		DKK: Currencies.Currency;
		DOP: Currencies.Currency;
		DZD: Currencies.Currency;
		EEK: Currencies.Currency;
		EGP: Currencies.Currency;
		ERN: Currencies.Currency;
		ETB: Currencies.Currency;
		GBP: Currencies.Currency;
		GEL: Currencies.Currency;
		GHS: Currencies.Currency;
		GNF: Currencies.Currency;
		GTQ: Currencies.Currency;
		HKD: Currencies.Currency;
		HNL: Currencies.Currency;
		HRK: Currencies.Currency;
		HUF: Currencies.Currency;
		IDR: Currencies.Currency;
		ILS: Currencies.Currency;
		INR: Currencies.Currency;
		IQD: Currencies.Currency;
		IRR: Currencies.Currency;
		ISK: Currencies.Currency;
		JMD: Currencies.Currency;
		JOD: Currencies.Currency;
		JPY: Currencies.Currency;
		KES: Currencies.Currency;
		KHR: Currencies.Currency;
		KMF: Currencies.Currency;
		KRW: Currencies.Currency;
		KWD: Currencies.Currency;
		KZT: Currencies.Currency;
		LAK: Currencies.Currency;
		LBP: Currencies.Currency;
		LKR: Currencies.Currency;
		LTL: Currencies.Currency;
		LVL: Currencies.Currency;
		LYD: Currencies.Currency;
		MAD: Currencies.Currency;
		MDL: Currencies.Currency;
		MGA: Currencies.Currency;
		MKD: Currencies.Currency;
		MMK: Currencies.Currency;
		MOP: Currencies.Currency;
		MUR: Currencies.Currency;
		MXN: Currencies.Currency;
		MYR: Currencies.Currency;
		MZN: Currencies.Currency;
		NAD: Currencies.Currency;
		NGN: Currencies.Currency;
		NIO: Currencies.Currency;
		NOK: Currencies.Currency;
		NPR: Currencies.Currency;
		NZD: Currencies.Currency;
		OMR: Currencies.Currency;
		PAB: Currencies.Currency;
		PEN: Currencies.Currency;
		PHP: Currencies.Currency;
		PKR: Currencies.Currency;
		PLN: Currencies.Currency;
		PYG: Currencies.Currency;
		QAR: Currencies.Currency;
		RON: Currencies.Currency;
		RSD: Currencies.Currency;
		RUB: Currencies.Currency;
		RWF: Currencies.Currency;
		SAR: Currencies.Currency;
		SDG: Currencies.Currency;
		SEK: Currencies.Currency;
		SGD: Currencies.Currency;
		SOS: Currencies.Currency;
		SYP: Currencies.Currency;
		THB: Currencies.Currency;
		TND: Currencies.Currency;
		TOP: Currencies.Currency;
		TRY: Currencies.Currency;
		TTD: Currencies.Currency;
		TWD: Currencies.Currency;
		TZS: Currencies.Currency;
		UAH: Currencies.Currency;
		UGX: Currencies.Currency;
		UYU: Currencies.Currency;
		UZS: Currencies.Currency;
		VEF: Currencies.Currency;
		VND: Currencies.Currency;
		XAF: Currencies.Currency;
		XOF: Currencies.Currency;
		YER: Currencies.Currency;
		ZAR: Currencies.Currency;
		ZMK: Currencies.Currency;
	}
}



declare var Currencies: Currencies.Currencies;
export = Currencies;