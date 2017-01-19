/// <reference types="jasmine" />
import Qty from "js-quantities";

// From project readme

let qty: Qty;

qty = new Qty('23 ft'); // constructor
qty = Qty('23 ft'); // factory

qty = new Qty(124, 'cm'); // => 1.24 meter
qty = Qty(124, 'cm'); // => 1.24 meter

qty = Qty('1m'); // => 1 meter
qty = Qty('m'); // =>  1 meter (scalar defaults to 1)

qty = Qty('1 N*m');
qty = Qty('1 N m'); // * is optional

qty = Qty('1 m/s');

qty = Qty('1 m^2/s^2');
qty = Qty('1 m^2 s^-2'); // negative powers
qty = Qty('1 m2 s-2'); // ^ is optional

qty = Qty('1 m^2 kg^2 J^2/s^2 A');

qty = Qty('1.5'); // unitless quantity
qty = Qty(1.5); // number as initializing value

qty = Qty('1 attoparsec/microfortnight');

let qtyCopy: Qty;

qtyCopy = Qty(qty); // quantity could be copied when used as initializing value

Qty.parse('1 m'); // => 1 meter
Qty.parse('foo'); // => null

Qty.getKinds(); // => Array of names of every well-known kind of units

Qty.getUnits('currency'); // => [ 'dollar', 'cents' ]
// Or all alphabetically sorted
Qty.getUnits(); // => [ 'acre','Ah','ampere','AMU','angstrom']

Qty.getAliases('m'); // => [ 'm', 'meter', 'meters', 'metre', 'metres' ]

const qty1 = Qty('1m');
const qty2 = Qty('2m');

qty1.isCompatible(qty2); // => true or false

qty.kind(); // => 'length', 'area', etc...

qty.isUnitless(); // => true or false
qty.isBase(); // => true if quantity is represented with base units

qty.toBase(); // converts to SI units (10 cm => 0.1 m) (new instance)

qty.toFloat(); // returns scalar of unitless quantity (otherwise throws error)

qty.to('m'); // converts quantity to meter if compatible or throws an error (new instance)
qty1.to(qty2); // converts quantity to same unit of qty2 if compatible or throws an error (new instance)

qty.inverse(); // converts quantity to its inverse ('100 m/s' => '.01 s/m')
// Inverses can be used, but there is no special checking to
// rename the units
Qty('10ohm').inverse(); // '.1/ohm' (not '.1S', although they are equivalent)
// however, the 'to' command will convert between inverses also
Qty('10ohm').to('S'); // '.1S'

var convert = Qty.swiftConverter('m/h', 'ft/s'); // Configures converter

// Converting single value
var converted = convert(2500); // => 2.278..

// Converting large array of values
var convertedSerie = convert([2500, 5000]); // => [2.278.., 4.556.., ...]

qty1.eq(qty2); // => true if both quantities are equal (1m == 100cm => true)
qty1.same(qty2); // => true if both quantities are same (1m == 100cm => false)
qty1.lt(qty2); // => true if qty1 is stricty less than qty2
qty1.lte(qty2); // => true if qty1 is less than or equal to qty2
qty1.gt(qty2); // => true if qty1 is stricty greater than qty2
qty1.gte(qty2); // => true if qty1 is greater than or equal to qty2

qty1.compareTo(qty2); // => -1 if qty1 < qty2, => 0 if qty1 == qty2, => 1 if qty1 > qty2

qty = Qty('5.17 ft');
qty.toPrec('ft'); // => 5 ft
qty.toPrec('0.5 ft'); // => 5 ft
qty.toPrec('0.25 ft'); // => 5.25 ft
qty.toPrec('0.1 ft'); // => 5.2 ft
qty.toPrec('0.05 ft'); // => 5.15 ft
qty.toPrec('0.01 ft'); // => 5.17 ft
qty.toPrec('0.00001 ft'); // => 5.17 ft
qty.toPrec('2 ft'); // => 6 ft
qty.toPrec('2'); // => 6 ft

qty = Qty('6.3782 m');
qty.toPrec('dm'); // => 6.4 m
qty.toPrec('cm'); // => 6.38 m
qty.toPrec('mm'); // => 6.378 m
qty.toPrec('5 cm'); // => 6.4 m
qty.toPrec('10 m'); // => 10 m
qty.toPrec(0.1); // => 6.3 m

qty = Qty('1.146 MPa');
qty.toPrec('0.1 bar'); // => 1.15 MPa

qty = Qty('1.146 MPa');
qty.toString(); // => '1.146 MPa'

qty = Qty('1.146 MPa');
qty.toString('bar'); // => '11.46 bar'
qty.to('bar').toString(); // => '11.46 bar'

qty = Qty('1.146 MPa');
qty.toPrec(0.1).toString(); // => '1.1 MPa'
qty.to('bar').toPrec(0.1).toString(); // => '11.5 bar'

qty = Qty('1.1234 m');
qty.format(); // same units, default formatter => '1.234 m'
qty.format('cm'); // converted to 'cm', default formatter => '123.45 cm'

var configurableRoundingFormatter = function (maxDecimals: number) {
  return function (scalar: number, units: string) {
    var pow = Math.pow(10, maxDecimals);
    var rounded = Math.round(scalar * pow) / pow;

    return rounded + ' ' + units;
  };
};

qty = Qty('1.1234 m');

// same units, custom formatter => '1.12 m'
qty.format(configurableRoundingFormatter(2));

// convert to 'cm', custom formatter => '123.4 cm'
qty.format('cm', configurableRoundingFormatter(1));

Qty.formatter = configurableRoundingFormatter(2);
qty = Qty('1.1234 m');
qty.format(); // same units, current default formatter => '1.12 m'

Qty('37 tempC').to('tempF'); // => 98.6 tempF

let scalar: number = 42;

Qty('100 tempC').add('10 degC');  // 110 tempC
Qty('100 tempC').sub('10 degC');  // 90 tempC
Qty('100 tempC').add('50 tempC'); // throws error
Qty('100 tempC').sub('50 tempC'); // 50 degC
Qty('50 tempC').sub('100 tempC'); // -50 degC
Qty('100 tempC').mul(scalar);     // 100*scalar tempC
Qty('100 tempC').div(scalar);     // 100/scalar tempC
Qty('100 tempC').mul(qty);        // throws error
Qty('100 tempC').div(qty);        // throws error
Qty('100 tempC*unit');            // throws error
Qty('100 tempC/unit');            // throws error
Qty('100 unit/tempC');            // throws error
Qty('100 tempC').inverse();       // throws error

Qty('100 tempC').to('degC'); // => 100 degC

Qty('100 degC').to('tempC'); // => -173.15 tempC

Qty('0 tempC').add('100 degC'); // => 100 tempC

try {
  // code triggering an error inside JS-quantities
} catch (e) {
  if (e instanceof Qty.Error) {
    // ...
  } else {
    // ...
  }
}

// From project spec

describe("js-quantities", function () {
  "use strict";

  describe("initialization", function () {
    it("should create unit only", function () {
      var qty = Qty("m");
      expect(qty.numerator).toEqual(["<meter>"]);
      expect(qty.scalar).toBe(1);
    });

    it("should create unitless", function () {
      var qty = Qty("1");
      expect(qty.toFloat()).toBe(1);
      expect(qty.numerator).toEqual(["<1>"]);
      expect(qty.denominator).toEqual(["<1>"]);
      qty = Qty("1.5");
      expect(qty.toFloat()).toBe(1.5);
      expect(qty.numerator).toEqual(["<1>"]);
      expect(qty.denominator).toEqual(["<1>"]);
    });

    it("should create unitless from numbers", function () {
      var qty = Qty(1.5);
      expect(qty.toFloat()).toBe(1.5);
      expect(qty.numerator).toEqual(["<1>"]);
      expect(qty.denominator).toEqual(["<1>"]);
    });

    it("should create from numbers with explicit units", function () {
      var qty = Qty(1.5, "m");
      expect(qty.scalar).toBe(1.5);
      expect(qty.numerator).toEqual(["<meter>"]);
      expect(qty.denominator).toEqual(["<1>"]);
    });

    it("temperatures should have base unit in kelvin", function () {
      var qty = Qty("1 tempK").toBase();
      expect(qty.scalar).toBe(1);
      expect(qty.units()).toBe("tempK");

      qty = Qty("1 tempR").toBase();
      expect(qty.scalar).toBe(5 / 9);
      expect(qty.units()).toBe("tempK");

      qty = Qty("0 tempC").toBase();
      expect(qty.scalar).toBe(273.15);
      expect(qty.units()).toBe("tempK");

      qty = Qty("0 tempF").toBase();
      expect(qty.scalar).toBeCloseTo(255.372, 3);
      expect(qty.units()).toBe("tempK");
    });

    it("temperature degrees should have base unit in kelvin", function () {
      var qty = Qty("1 degK").toBase();
      expect(qty.scalar).toBe(1);
      expect(qty.units()).toBe("degK");

      qty = Qty("1 degR").toBase();
      expect(qty.scalar).toBe(5 / 9);
      expect(qty.units()).toBe("degK");

      qty = Qty("1 degC").toBase();
      expect(qty.scalar).toBe(1);
      expect(qty.units()).toBe("degK");

      qty = Qty("1 degF").toBase();
      expect(qty.scalar).toBe(5 / 9);
      expect(qty.units()).toBe("degK");
    });

    it("should not create temperatures below absolute zero", function () {
      expect(function () { Qty("-1 tempK"); }).toThrow("Temperatures must not be less than absolute zero");
      expect(function () { Qty("-273.16 tempC"); }).toThrow("Temperatures must not be less than absolute zero");
      expect(function () { Qty("-459.68 tempF"); }).toThrow("Temperatures must not be less than absolute zero");
      expect(function () { Qty("-1 tempR"); }).toThrow("Temperatures must not be less than absolute zero");

      var qty = Qty("1 tempK");
      expect(function () { qty.mul("-1"); }).toThrow("Temperatures must not be less than absolute zero");

      qty = Qty("0 tempK");
      expect(function () { qty.sub("1 degK"); }).toThrow("Temperatures must not be less than absolute zero");

      qty = Qty("-273.15 tempC");
      expect(function () { qty.sub("1 degC"); }).toThrow("Temperatures must not be less than absolute zero");

      qty = Qty("-459.67 tempF");
      expect(function () { qty.sub("1 degF"); }).toThrow("Temperatures must not be less than absolute zero");

      qty = Qty("0 tempR");
      expect(function () { qty.sub("1 degR"); }).toThrow("Temperatures must not be less than absolute zero");
    });

    it("should create simple", function () {
      var qty = Qty("1m");
      expect(qty.scalar).toBe(1);
      expect(qty.numerator).toEqual(["<meter>"]);
      expect(qty.denominator).toEqual(["<1>"]);
    });

    it("should create negative", function () {
      var qty = Qty("-1m");
      expect(qty.scalar).toBe(-1);
      expect(qty.numerator).toEqual(["<meter>"]);
      expect(qty.denominator).toEqual(["<1>"]);
    });

    it("should create compound", function () {
      var qty = Qty("1 N*m");
      expect(qty.scalar).toBe(1);
      expect(qty.numerator).toEqual(["<newton>", "<meter>"]);
      expect(qty.denominator).toEqual(["<1>"]);
    });

    it("should create pressure units in term of height of water", function () {
      var qty = Qty("1 inH2O");
      expect(qty.scalar).toBe(1);
      expect(qty.numerator).toEqual(["<inh2o>"]);

      qty = Qty("1 cmH2O");
      expect(qty.scalar).toBe(1);
      expect(qty.numerator).toEqual(["<cmh2o>"]);
    });

    it("should create with denominator", function () {
      var qty = Qty("1 m/s");
      expect(qty.scalar).toBe(1);
      expect(qty.numerator).toEqual(["<meter>"]);
      expect(qty.denominator).toEqual(["<second>"]);
    });

    it("should create with denominator only", function () {
      var qty = Qty("1 /s");
      expect(qty.scalar).toBe(1);
      expect(qty.numerator).toEqual(["<1>"]);
      expect(qty.denominator).toEqual(["<second>"]);

      qty = Qty("1 1/s");
      expect(qty.scalar).toBe(1);
      expect(qty.numerator).toEqual(["<1>"]);
      expect(qty.denominator).toEqual(["<second>"]);

      qty = Qty("1 s^-1");
      expect(qty.scalar).toBe(1);
      expect(qty.numerator).toEqual(["<1>"]);
      expect(qty.denominator).toEqual(["<second>"]);
    });

    it("should create with powers", function () {
      var qty = Qty("1 m^2/s^2");
      expect(qty.scalar).toBe(1);
      expect(qty.numerator).toEqual(["<meter>", "<meter>"]);
      expect(qty.denominator).toEqual(["<second>", "<second>"]);
      qty = Qty("1 m^2 kg^2 J^2/s^2");
      expect(qty.scalar).toBe(1);
      expect(qty.numerator).toEqual(["<meter>", "<meter>", "<kilogram>", "<kilogram>", "<joule>", "<joule>"]);
      expect(qty.denominator).toEqual(["<second>", "<second>"]);
      qty = Qty("1 m^2/s^2*J^3");
      expect(qty.scalar).toBe(1);
      expect(qty.numerator).toEqual(["<meter>", "<meter>"]);
      expect(qty.denominator).toEqual(["<second>", "<second>", "<joule>", "<joule>", "<joule>"]);
    });

    it("should create with zero power", function () {
      var qty = Qty("1 m^0");
      expect(qty.scalar).toBe(1);
      expect(qty.numerator).toEqual(["<1>"]);
      expect(qty.denominator).toEqual(["<1>"]);
    });

    it("should create with negative powers", function () {
      var qty = Qty("1 m^2 s^-2");
      expect(qty.scalar).toBe(1);
      expect(qty.numerator).toEqual(["<meter>", "<meter>"]);
      expect(qty.denominator).toEqual(["<second>", "<second>"]);
      expect(qty.same(Qty("1 m^2/s^2"))).toBe(true);
    });

    it("should accept powers without ^ syntax (simple)", function () {
      var qty1 = Qty("1 m2");
      var qty2 = Qty("1 m^2");
      expect(qty1.eq(qty2)).toBe(true);
    });

    it("should accept powers without ^ syntax (negative power)", function () {
      var qty1 = Qty("1 m-2");
      var qty2 = Qty("1 m^-2");
      expect(qty1.eq(qty2)).toBe(true);
    });

    it("should accept powers without ^ syntax (compound)", function () {
      var qty1 = Qty("1 m^2 kg^2 J^2/s^2");
      var qty2 = Qty("1 m2 kg2 J2/s2");
      expect(qty1.eq(qty2)).toBe(true);
    });

    it("should accept powers without ^ syntax (compound and negative power)", function () {
      var qty1 = Qty("1 m^2 kg^2 J^2 s^-2");
      var qty2 = Qty("1 m2 kg2 J2 s-2");
      expect(qty1.eq(qty2)).toBe(true);
    });

    it("should throw 'Unit not recognized' error when initializing with an invalid unit", function () {
      expect(function () { Qty("aa"); }).toThrow("Unit not recognized");
      expect(function () { Qty("m/aa"); }).toThrow("Unit not recognized");
      expect(function () { Qty("m-"); }).toThrow("Unit not recognized");
      expect(function () { Qty("N*m"); }).not.toThrow("Unit not recognized");
      // mm is millimeter, but mmm is not a valid unit
      expect(function () { Qty("mmm"); }).toThrow("Unit not recognized");
    });

    it("should accept empty string as unitless 1", function () {
      expect(Qty("").same(Qty("1"))).toBe(true);
      expect(Qty("   ").same(Qty("1"))).toBe(true);
    });

    it("should throw error when passing NaN", function () {
      expect(
        function () { Qty(NaN); }
      ).toThrow("Only string, number or quantity accepted as single " +
      "initialization value");
    });

    it("should throw 'Unit not recognized' error when initializing with an invalid unit and a 0 exponent", function () {
      expect(function () { Qty("3p0"); }).toThrow("Unit not recognized");
      expect(function () { Qty("3p-0"); }).toThrow("Unit not recognized");
    });

    it("should set baseScalar", function () {
      var qty = Qty("0.018 MPa");
      expect(qty.baseScalar).toBe(18000);

      qty = Qty("66 cm3");
      expect(qty.baseScalar).toBe(0.000066);
    });

    it("should keep init value as is", function () {
      var initValue = "  66 cm3  ";
      var qty = Qty(initValue);

      expect(qty.initValue).toEqual(initValue);
    });

    it("should allow whitespace-wrapped value", function () {
      expect(function () { Qty("  2 MPa  "); }).not.toThrow();
    });

    it("should allow whitespaces between sign and scalar", function () {
      var qty = Qty("-  1m");

      expect(qty.scalar).toEqual(-1);
      expect(qty.units()).toEqual("m");
    });

    it("should throw an error when parsing negative quantity " +
      "with no scalar", function () {
        expect(function () { Qty("-m"); }).toThrow("Unit not recognized");
      });
  });

  describe("isCompatible", function () {
    it("should return true with compatible quantities", function () {
      var qty1 = Qty("1 m*kg/s");
      var qty2 = Qty("1 in*pound/min");
      expect(qty1.isCompatible(qty2)).toBe(true);
      qty2 = Qty("1 in/min");
      expect(qty1.isCompatible(qty2)).toBe(false);
    });

    it("should return true with dimensionless quantities", function () {
      var qty1 = Qty("1");
      var qty2 = Qty("2");
      expect(qty1.isCompatible(qty2)).toBe(true);
    });
  });

  describe("conversion", function () {
    it("should convert to base units", function () {
      var qty = Qty("100 cm");
      expect(qty.toBase().scalar).toBe(1);
      expect(qty.toBase().units()).toBe("m");
      qty = Qty("10 cm");
      expect(qty.toBase().scalar).toBe(0.1);
      expect(qty.toBase().units()).toBe("m");
      qty = Qty("0.3 mm^2 ms^-2");
      expect(qty.toBase().scalar).toBe(0.3);
      expect(qty.toBase().units()).toBe("m2/s2");
    });

    it("should convert to compatible units", function () {
      var qty = Qty("10 cm");
      expect(qty.to("ft").scalar).toBe(Qty.divSafe(0.1, 0.3048));
      qty = Qty("2m^3");
      expect(qty.to("l").scalar).toBe(2000);

      qty = Qty("10 cm");
      expect(qty.to(Qty("m")).scalar).toBe(0.1);
      expect(qty.to(Qty("20m")).scalar).toBe(0.1);

      qty = Qty("1 m3");
      expect(qty.to("cm3").scalar).toBe(1000000);

      qty = Qty("1 cm3");
      expect(qty.to("mm3").scalar).toBe(1000);

      qty = Qty("550 cm3");
      expect(qty.to("cm^3").scalar).toBe(550);

      qty = Qty("0.000773 m3");
      expect(qty.to("cm^3").scalar).toBe(773);
    });

    describe('percents', function () {
      it("should convert from % to unitless", function () {
        expect(Qty("10 %").to("").same(Qty("0.1"))).toBe(true);
      });

      it("should convert from unitless to %", function () {
        expect(Qty("0.1").to("%").same(Qty("10 %"))).toBe(true);
      });
    });

    it("should convert temperatures to compatible units", function () {
      var qty = Qty("0 tempK");
      expect(qty.to("tempC").scalar).toBe(-273.15);

      qty = Qty("0 tempF");
      expect(qty.to("tempK").scalar).toBeCloseTo(255.372, 3);

      qty = Qty("32 tempF");
      expect(qty.to("tempC").scalar).toBe(0);

      qty = Qty("0 tempC");
      expect(qty.to("tempF").scalar).toBeCloseTo(32, 10);
    });

    it("should convert temperature degrees to compatible units", function () {
      var qty = Qty("0 degK");
      expect(qty.to("degC").scalar).toBe(0);

      qty = Qty("1 degK/s");
      expect(qty.to("degC/min").scalar).toBe(60);

      qty = Qty("100 cm/degF");
      expect(qty.to("m/degF").scalar).toBe(1);

      qty = Qty("10 degC");
      expect(qty.to("degF").scalar).toBe(18);
    });

    it("should convert temperature degrees to temperatures", function () {
      // according to ruby-units, deg -> temp conversion adds the degress to 0 kelvin before converting
      var qty = Qty("100 degC");
      expect(qty.to("tempC").scalar).toBeCloseTo(-173.15, 10);

      qty = Qty("273.15 degC");
      expect(qty.to("tempC").scalar).toBe(0);

      qty = Qty("460.67 degF");
      expect(qty.to("tempF").scalar).toBeCloseTo(1, 10);
    });

    it("should convert temperatures to temperature degrees", function () {
      // according to ruby-units, temp -> deg conversion always uses the 0 relative degrees
      var qty = Qty("100 tempC");
      expect(qty.to("degC").scalar).toBe(100);

      qty = Qty("0 tempK");
      expect(qty.to("degC").scalar).toBe(0);

      qty = Qty("0 tempF");
      expect(qty.to("degK").scalar).toBe(0);

      qty = Qty("18 tempF");
      expect(qty.to("degC").scalar).toBe(10);

      qty = Qty("10 tempC");
      expect(qty.to("degF").scalar).toBe(18);
    });

    it("should calculate inverses", function () {
      var qty = Qty("1 ohm");
      var result = qty.to("siemens");
      expect(result.scalar).toBe(1);
      expect(result.kind()).toBe("conductance");

      qty = Qty("10 ohm");
      result = qty.to("siemens");
      expect(result.scalar).toBe(0.1);
      expect(result.kind()).toBe("conductance");

      qty = Qty("10 siemens");
      result = qty.to("ohm");
      expect(result.scalar).toBe(0.1);
      expect(result.kind()).toBe("resistance");

      qty = Qty("10 siemens");
      result = qty.inverse();
      expect(result.eq(".1 ohm")).toBe(true);
      expect(result.kind()).toBe("resistance");

      // cannot inverse a quantity with a 0 scalar
      qty = Qty("0 ohm");
      expect(function () { qty.inverse(); }).toThrow("Divide by zero");

      qty = Qty("10 ohm").inverse();
      result = qty.to("S");
      expect(result.scalar).toBe(0.1);
      expect(result.kind()).toBe("conductance");

      qty = Qty("12 in").inverse();
      // TODO: Swap toBeCloseTo with toBe once divSafe is fixed
      expect(qty.to("ft").scalar).toBeCloseTo(1, 10);
    });

    it("should return itself if target units are the same", function () {
      var qty = Qty("123 cm3");

      expect(qty.to("cm3")).toBe(qty);
      expect(qty.to("cm^3")).toBe(qty);

      qty = Qty("123 mcg");
      expect(qty.to("ug")).toBe(qty);
    });

    it("should be cached", function () {
      var qty = Qty("100 m"),
        converted = qty.to("ft");

      expect(qty.to("ft") === converted).toBe(true);
    });
  });

  describe("comparison", function () {
    it("should return true when comparing equal quantities", function () {
      var qty1 = Qty("1cm");
      var qty2 = Qty("10mm");
      expect(qty1.eq(qty2)).toBe(true);
    });

    it("should compare compatible quantities", function () {
      var qty1 = Qty("1cm");
      var qty2 = Qty("1mm");
      var qty3 = Qty("10mm");
      var qty4 = Qty("28A");
      expect(qty1.compareTo(qty2)).toBe(1);
      expect(qty2.compareTo(qty1)).toBe(-1);
      expect(qty1.compareTo(qty3)).toBe(0);
      expect(function () { qty1.compareTo(qty4); }).toThrow("Incompatible units");

      expect(qty1.lt(qty2)).toBe(false);
      expect(qty1.lt(qty3)).toBe(false);
      expect(qty1.lte(qty3)).toBe(true);
      expect(qty1.gte(qty3)).toBe(true);
      expect(qty1.gt(qty2)).toBe(true);
      expect(qty2.gt(qty1)).toBe(false);
    });

    it("should compare identical quantities", function () {
      var qty1 = Qty("1cm");
      var qty2 = Qty("1cm");
      var qty3 = Qty("10mm");
      expect(qty1.same(qty2)).toBe(true);
      expect(qty1.same(qty3)).toBe(false);
    });

    it("should accept strings as parameter", function () {
      var qty = Qty("1 cm");
      expect(qty.lt("0.5 cm")).toBe(false);
      expect(qty.lte("1 cm")).toBe(true);
      expect(qty.gte("3 mm")).toBe(true);
      expect(qty.gt("5 m")).toBe(false);
    });

  });

  describe("non-ASCII character", function () {
    describe("µ", function () {
      it("should be supported as prefix", function () {
        // µ as greek letter
        expect(Qty("1 \u03BCm").eq(Qty("1 um"))).toBe(true);
        // µ as micro sign
        expect(Qty("1 \u00B5m").eq(Qty("1 um"))).toBe(true);
      });
    });

    describe("Ω", function () {
      it("should be accepted as unit for ohm", function () {
        // Ω as greek letter
        expect(Qty("1 \u03A9").eq(Qty("1 ohm"))).toBe(true);
        // Ω as ohm sign
        expect(Qty("1 \u2126").eq(Qty("1 ohm"))).toBe(true);
      });
    });
  });

  describe("math", function () {

    it("should add quantities", function () {
      var qty1 = Qty("2.5m");
      var qty2 = Qty("3m");
      expect(qty1.add(qty2).scalar).toBe(5.5);

      expect(qty1.add("3m").scalar).toBe(5.5);

      qty2 = Qty("3cm");
      var result = qty1.add(qty2);
      expect(result.scalar).toBe(2.53);
      expect(result.units()).toBe("m");

      result = qty2.add(qty1);
      expect(result.scalar).toBe(253);
      expect(result.units()).toBe("cm");

      // make sure adding 2 of the same non-base units work
      result = Qty("5cm").add("3cm");
      expect(result.scalar).toBe(8);
      expect(result.units()).toBe("cm");
    });

    it("should fail to add unlike quantities", function () {
      var qty1 = Qty("3m");
      var qty2 = Qty("2s");
      expect(function () { qty1.add(qty2); }).toThrow("Incompatible units");
      expect(function () { qty2.add(qty1); }).toThrow("Incompatible units");
    });

    it("should fail to add inverse quantities", function () {
      var qty1 = Qty("10S");
      var qty2 = qty1.inverse();
      expect(function () { qty1.add(qty2); }).toThrow("Incompatible units");
      expect(function () { qty2.add(qty1); }).toThrow("Incompatible units");

      qty1 = Qty("10S");
      qty2 = Qty("0.1ohm");
      expect(function () { qty1.add(qty2); }).toThrow("Incompatible units");
      expect(function () { qty2.add(qty1); }).toThrow("Incompatible units");
    });

    it("should subtract quantities", function () {
      var qty1 = Qty("2.5m");
      var qty2 = Qty("3m");
      expect(qty1.sub(qty2).scalar).toBe(-0.5);

      expect(qty1.sub("2m").scalar).toBe(0.5);
      expect(qty1.sub("-2m").scalar).toBe(4.5);

      qty2 = Qty("3cm");
      var result = qty1.sub(qty2);
      expect(result.scalar).toBe(2.47);
      expect(result.units()).toBe("m");

      result = qty2.sub(qty1);
      expect(result.scalar).toBe(-247);
      expect(result.units()).toBe("cm");
    });

    it("should fail to subtract unlike quantities", function () {
      var qty1 = Qty("3m");
      var qty2 = Qty("2s");
      expect(function () { qty1.sub(qty2); }).toThrow("Incompatible units");
      expect(function () { qty2.sub(qty1); }).toThrow("Incompatible units");
    });

    it("should fail to subtract inverse quantities", function () {
      var qty1 = Qty("10S");
      var qty2 = qty1.inverse();
      expect(function () { qty1.sub(qty2); }).toThrow("Incompatible units");
      expect(function () { qty2.sub(qty1); }).toThrow("Incompatible units");

      qty1 = Qty("10S");
      qty2 = Qty("0.1ohm");
      expect(function () { qty1.sub(qty2); }).toThrow("Incompatible units");
      expect(function () { qty2.sub(qty1); }).toThrow("Incompatible units");
    });

    it("should multiply quantities", function () {
      var qty1 = Qty("2.5m");
      var qty2 = Qty("3m");
      var result = qty1.mul(qty2);
      expect(result.scalar).toBe(7.5);
      expect(result.units()).toBe("m2");
      expect(result.kind()).toBe("area");

      qty2 = Qty("3cm");
      result = qty1.mul(qty2);
      expect(result.scalar).toBe(0.075);
      expect(result.units()).toBe("m2");

      result = qty2.mul(qty1);
      expect(result.scalar).toBe(750);
      expect(result.units()).toBe("cm2");

      result = qty1.mul(3.5);
      expect(result.scalar).toBe(8.75);
      expect(result.units()).toBe("m");

      result = qty1.mul(0);
      expect(result.scalar).toBe(0);
      expect(result.units()).toBe("m");

      result = qty1.mul(Qty("0m"));
      expect(result.scalar).toBe(0);
      expect(result.units()).toBe("m2");

      qty2 = Qty("1.458 m");
      result = qty1.mul(qty2);
      expect(result.scalar).toBe(3.645);
      expect(result.units()).toBe("m2");
    });

    it("should multiply unlike quantities", function () {
      var qty1 = Qty("2.5 m");
      var qty2 = Qty("3 N");

      var result = qty1.mul(qty2);
      expect(result.scalar).toBe(7.5);

      qty1 = Qty("2.5 m^2");
      qty2 = Qty("3 kg/m^2");

      result = qty1.mul(qty2);
      expect(result.scalar).toBe(7.5);
      expect(result.units()).toBe("kg");
    });

    it("should multiply inverse quantities", function () {
      var qty1 = Qty("10S");
      var qty2 = Qty(".5S").inverse(); // 2/S
      var qty3 = qty1.inverse();           // .1/S

      var result = qty1.mul(qty2);
      expect(result.scalar).toBe(20);
      expect(result.isUnitless()).toBe(true);
      expect(result.units()).toBe("");
      // swapping operands should give the same outcome
      result = qty2.mul(qty1);
      expect(result.scalar).toBe(20);
      expect(result.isUnitless()).toBe(true);
      expect(result.units()).toBe("");

      result = qty1.mul(qty3);
      expect(result.scalar).toBe(1);
      expect(result.isUnitless()).toBe(true);
      expect(result.units()).toBe("");
      // swapping operands should give the same outcome
      result = qty3.mul(qty1);
      expect(result.scalar).toBe(1);
      expect(result.isUnitless()).toBe(true);
      expect(result.units()).toBe("");
    });

    it("should divide quantities", function () {
      var qty1 = Qty("2.5m");
      var qty2 = Qty("3m");
      var qty3 = Qty("0m");

      expect(function () { qty1.div(qty3); }).toThrow("Divide by zero");
      expect(function () { qty1.div(0); }).toThrow("Divide by zero");
      expect(qty3.div(qty1).scalar).toBe(0);

      var result = qty1.div(qty2);
      expect(result.scalar).toBe(2.5 / 3);
      expect(result.units()).toBe("");
      expect(result.kind()).toBe("unitless");

      var qty4 = Qty("3cm");
      result = qty1.div(qty4);
      expect(result.scalar).toBe(2.5 / 0.03);
      expect(result.units()).toBe("");

      result = qty4.div(qty1);
      expect(result.scalar).toBe(0.012);
      expect(result.units()).toBe("");

      result = qty1.div(3.5);
      expect(result.scalar).toBe(2.5 / 3.5);
      expect(result.units()).toBe("m");
    });

    it("should divide unlike quantities", function () {
      var qty1 = Qty("7.5kg");
      var qty2 = Qty("2.5m^2");

      var result = qty1.div(qty2);
      expect(result.scalar).toBe(3);
      expect(result.units()).toBe("kg/m2");
    });

    it("should divide inverse quantities", function () {
      var qty1 = Qty("10 S");
      var qty2 = Qty(".5 S").inverse(); // 2/S
      var qty3 = qty1.inverse();            // .1/S

      var result = qty1.div(qty2);
      expect(result.scalar).toBe(5);
      expect(result.units()).toBe("S2");

      result = qty2.div(qty1);
      expect(result.scalar).toBe(0.2);
      expect(result.units()).toBe("1/S2");

      result = qty1.div(qty3);
      expect(result.scalar).toBe(100);
      expect(result.units()).toBe("S2");

      result = qty3.div(qty1);
      expect(result.scalar).toBe(0.01);
      expect(result.units()).toBe("1/S2");
    });

  });

  describe("math with temperatures", function () {

    it("should add temperature degrees", function () {
      var qty = Qty("2degC");
      expect(qty.add("3degF").scalar).toBeCloseTo(11 / 3, 10);
      expect(qty.add("-1degC").scalar).toBe(1);

      qty = Qty("2 degC");
      var result = qty.add("2 degF");
      expect(result.scalar).toBe(28 / 9);
      expect(result.units()).toBe("degC");

      qty = Qty("2degK");
      result = qty.add("3degC");
      expect(result.scalar).toBe(5);
      expect(result.units()).toBe("degK");

      qty = Qty("2degC");
      result = qty.add("2degK");
      expect(result.scalar).toBe(4);
      expect(result.units()).toBe("degC");
    });

    it("should not add two temperatures", function () {
      var qty = Qty("2tempC");
      expect(function () { qty.add("1 tempF"); }).toThrow("Cannot add two temperatures");
      expect(function () { qty.add("1 tempC"); }).toThrow("Cannot add two temperatures");
    });

    it("should add temperatures to degrees", function () {
      var qty = Qty("2degC");
      var result = qty.add("3tempF");
      expect(result.scalar).toBe(33 / 5);
      expect(result.units()).toBe("tempF");

      result = qty.add("-1tempC");
      expect(result.scalar).toBe(1);
      expect(result.units()).toBe("tempC");

      qty = Qty("2 tempC");
      result = qty.add("2 degF");
      expect(result.scalar).toBe(28 / 9);
      expect(result.units()).toBe("tempC");
    });

    it("should subtract degrees from degrees", function () {
      var qty = Qty("2degC");
      expect(qty.sub("1.5degK").scalar).toBe(0.5);
      expect(qty.sub("-2degC").scalar).toBe(4);
      expect(qty.sub("1degF").scalar).toBe(2 - 5 / 9);
      expect(qty.sub("-1degC").scalar).toBe(3);

      var result = qty.sub("degC");
      expect(result.scalar).toBe(1);
      expect(result.units()).toBe("degC");
    });

    it("should subtract degrees from temperatures", function () {
      var qty = Qty("2tempC");
      expect(qty.sub("1.5degK").scalar).toBe(0.5);
      expect(qty.sub("-2degC").scalar).toBe(4);
      expect(qty.sub("1degF").scalar).toBe(2 - 5 / 9);
      expect(qty.sub("-1degC").scalar).toBe(3);

      var result = qty.sub("degC");
      expect(result.scalar).toBe(1);
      expect(result.units()).toBe("tempC");
    });

    it("should subtract temperatures from temperatures", function () {
      var qty = Qty("2tempC");

      var result = qty.sub("1.5tempK");
      expect(result.scalar).toBe(273.65);
      expect(result.units()).toBe("degC");

      result = qty.sub("-2tempC");
      expect(result.scalar).toBe(4);
      expect(result.units()).toBe("degC");

      result = qty.sub("32tempF");
      expect(result.scalar).toBe(2);
      expect(result.units()).toBe("degC");
    });

    it("should not subtract temperatures from degrees", function () {
      var qty = Qty("2degC");
      expect(function () { qty.sub("1 tempF"); }).toThrow("Cannot subtract a temperature from a differential degree unit");
      expect(function () { qty.sub("1 tempC"); }).toThrow("Cannot subtract a temperature from a differential degree unit");
    });

    it("should multiply temperature degrees", function () {
      var qty = Qty("2degF");
      var result = qty.mul(3);
      expect(result.scalar).toBe(6);
      expect(result.units()).toBe("degF");

      result = qty.mul("3degF");
      expect(result.scalar).toBe(6);
      expect(result.units()).toBe("degF2");

      // TODO: Should we convert degrees ("2 degK" to "degC") before we do the math?
      qty = Qty("2degC");
      result = qty.mul("2degK");
      expect(result.scalar).toBe(4);
      expect(result.units()).toBe("degC*degK");

      qty = Qty("2degC");
      result = qty.mul("degF");
      expect(result.scalar).toBe(2);
      expect(result.units()).toBe("degC*degF");
    });

    it("should not multiply temperatures except by scalar", function () {
      var qty = Qty("2tempF");
      expect(function () { qty.mul("1 tempC"); }).toThrow("Cannot multiply by temperatures");
      expect(function () { qty.mul("1 degC"); }).toThrow("Cannot multiply by temperatures");
      expect(function () { Qty("1 tempC*s"); }).toThrow("Cannot multiply by temperatures");

      var result = qty.mul(2);
      expect(result.scalar).toBe(4);
      expect(result.units()).toBe("tempF");

      result = Qty("2").mul(qty);
      expect(result.scalar).toBe(4);
      expect(result.units()).toBe("tempF");
    });

    it("should multiply temperature degrees with unlike quantities", function () {
      var qty1 = Qty("2.5 degF");
      var qty2 = Qty("3 m");

      var result = qty1.mul(qty2);
      expect(result.scalar).toBe(7.5);

      qty1 = Qty("2.5 degF");
      qty2 = Qty("3 kg/degF");

      result = qty1.mul(qty2);
      expect(result.scalar).toBe(7.5);
      expect(result.units()).toBe("kg");
    });

    it("should divide temperature degrees with unlike quantities", function () {
      var qty1 = Qty("7.5degF");
      var qty2 = Qty("2.5m^2");

      var result = qty1.div(qty2);
      expect(result.scalar).toBe(3);
      expect(result.units()).toBe("degF/m2");
    });

    it("should divide temperature degree quantities", function () {
      var qty = Qty("2.5 degF");

      expect(function () { qty.div("0 degF"); }).toThrow("Divide by zero");
      expect(function () { qty.div(0); }).toThrow("Divide by zero");
      expect(Qty("0 degF").div(qty).scalar).toBe(0);
      expect(Qty("0 degF").div(qty).units()).toBe("");

      var result = qty.div("3 degF");
      expect(result.scalar).toBe(2.5 / 3);
      expect(result.units()).toBe("");
      expect(result.kind()).toBe("unitless");

      result = qty.div(3);
      expect(result.scalar).toBe(2.5 / 3);
      expect(result.units()).toBe("degF");
      expect(result.kind()).toBe("temperature");

      // TODO: Should we convert "2 degC" to "degF" before we do the math?
      result = qty.div("2 degC");
      expect(result.scalar).toBe(1.25);
      expect(result.units()).toBe("degF/degC");
    });

    it("should not divide with temperatures except by scalar", function () {
      expect(function () { Qty("tempF").div("1 tempC"); }).toThrow("Cannot divide with temperatures");
      expect(function () { Qty("tempF").div("1 degC"); }).toThrow("Cannot divide with temperatures");
      expect(function () { Qty("2").div("tempF"); }).toThrow("Cannot divide with temperatures");
      expect(function () { Qty("2 tempF/s"); }).toThrow("Cannot divide with temperatures");
      expect(function () { Qty("2 s/tempF"); }).toThrow("Cannot divide with temperatures");

      // inverse is division: 1/x
      expect(function () { Qty("tempF").inverse(); }).toThrow("Cannot divide with temperatures");

      var result = Qty("4 tempF").div(2);
      expect(result.scalar).toBe(2);
      expect(result.units()).toBe("tempF");
    });

  });

  describe("errors", function () {
    it("should be instance of Qty.Error", function () {
      try {
        Qty("aa");
      } catch (e) {
        expect(e instanceof Qty.Error).toBeTruthy();
      }
    });
  });

  describe("utility methods", function () {

    it("should accept string as parameter for compatibility tests", function () {
      var qty = Qty("1 mm");

      expect(qty.isCompatible("2 mm")).toBe(true);
      expect(qty.isCompatible("2 mm^3")).toBe(false);
    });

    it("should return kind", function () {
      var qty = Qty("1 mm");
      expect(qty.kind()).toBe("length");

      qty = Qty("1 N");
      expect(qty.kind()).toBe("force");
    });

    it("should know if a quantity is in base units", function () {
      var qty = Qty("100 cm");
      expect(qty.isBase()).toBe(false);

      qty = Qty("1m");
      expect(qty.isBase()).toBe(true);
    });

    it("should return unit part of quantities", function () {
      var qty = Qty("1");
      expect(qty.units()).toBe("");
      qty = Qty("1 /s");
      expect(qty.units()).toBe("1/s");
      qty = Qty("100 cm");
      expect(qty.units()).toBe("cm");
      qty = Qty("100 cm/s");
      expect(qty.units()).toBe("cm/s");
      qty = Qty("1 cm^2");
      expect(qty.units()).toBe("cm2");
      qty = Qty("1 cm^2/s^2");
      expect(qty.units()).toBe("cm2/s2");
      qty = Qty("1 cm^2*J^3/s^2*A^2");
      expect(qty.units()).toBe("cm2*J3/s2*A2");
    });

  });

  describe("toString", function () {
    it("should generate readable human output", function () {
      var qty = Qty("2m");
      expect(qty.toString()).toBe("2 m");
      expect(qty.toString("cm")).toBe("200 cm");
      expect(qty.toString("km")).toBe("0.002 km");
      expect(function () { qty.toString("A"); }).toThrow("Incompatible units");

      qty = Qty("24.5m/s");
      expect(qty.toString()).toBe("24.5 m/s");
      expect(function () { qty.toString("m"); }).toThrow("Incompatible units");
      expect(qty.toString("km/h")).toBe("88.2 km/h");

      qty = Qty("254kg/m^2");
      expect(qty.toString()).toBe("254 kg/m2");

      qty = Qty("2");
      expect(qty.toString()).toBe("2");
    });

    it("should round readable human output when max decimals is specified", function () {
      var qty = (Qty("2m")).div(3);
      expect(qty.toString("cm", 2)).toBe("66.67 cm");

      qty = Qty("2.8m");
      expect(qty.toString("m", 0)).toBe("3 m");
      expect(qty.toString("cm", 0)).toBe("280 cm");
      qty = Qty("2.818m");
      expect(qty.toString("cm", 0)).toBe("282 cm");
    });

    it("should round to max decimals", function () {
      var qty = (Qty("2.987654321 m"));

      expect(qty.toString(3)).toBe("2.988 m");
      expect(qty.toString(0)).toBe("3 m");
    });

    it("should round according to precision passed as quantity", function () {
      var qty = Qty("5.17 ft");

      expect(qty.toString(Qty("ft"))).toBe("5 ft");
      expect(qty.toString(Qty("2 ft"))).toBe("6 ft");
      expect(qty.toString(Qty("0.5 ft"))).toBe("5 ft");
      expect(qty.toString(Qty("0.1 ft"))).toBe("5.2 ft");
      expect(qty.toString(Qty("0.05 ft"))).toBe("5.15 ft");
      expect(qty.toString(Qty("0.01 ft"))).toBe("5.17 ft");
      expect(qty.toString(Qty("0.0001 ft"))).toBe("5.17 ft");
    });

    it("should return same output with successive calls", function () {
      var qty = Qty("123 cm3");
      expect(qty.toString("cm3", 0)).toBe("123 cm3");
      expect(qty.toString("cm3", 0)).toBe("123 cm3");
    });

    it("should return identical output when called with no parameters or same units", function () {
      var qty = Qty("123 cm3");
      expect(qty.toString()).toBe(qty.toString("cm3"));
    });

  });

  describe("format", function () {
    describe("provided default formatter", function () {
      it("should be applied to output", function () {
        var qty = (Qty("2.987654321 m"));

        expect(qty.format()).toBe("2.987654321 m");
      });
    });

    describe("custom formatter", function () {
      var roundingFormatter = function (maxDecimals: number) {
        return function (scalar: number, units: string) {
          var pow = Math.pow(10, maxDecimals);
          var rounded = Math.round(scalar * pow) / pow;

          return rounded + " " + units;
        };
      };

      it("should be applied to output", function () {
        var qty = (Qty("2.987654321 m"));

        expect(qty.format(roundingFormatter(3))).toBe("2.988 m");
        expect(qty.format(roundingFormatter(0))).toBe("3 m");
      });

      it("should be applied after conversion to target units", function () {
        var qty = (Qty("2m")).div(3);
        expect(qty.format("cm", roundingFormatter(2))).toBe("66.67 cm");

        var intRoundingFormatter = roundingFormatter(0);
        qty = Qty("2.8m");
        expect(qty.format("m", intRoundingFormatter)).toBe("3 m");
        expect(qty.format("cm", intRoundingFormatter)).toBe("280 cm");
        qty = Qty("2.818m");
        expect(qty.format("cm", intRoundingFormatter)).toBe("282 cm");
      });

      describe("globally set as default formatter", function () {
        var previousFormatter: Qty.Formatter;

        beforeEach(function () {
          previousFormatter = Qty.formatter;
          Qty.formatter = roundingFormatter(3);
        });

        afterEach(function () {
          // Restore previous formatter
          Qty.formatter = previousFormatter;
        });

        it("should be applied when no formatter is passed", function () {
          var qty = (Qty("2.987654321 m"));

          expect(qty.format()).toBe("2.988 m");
        });
      });
    });
  });

  describe("precision rounding", function () {
    it("should round according to precision passed as quantity with same units", function () {
      var qty = Qty("5.17 ft");

      expect(qty.toPrec(Qty("ft")).toString()).toBe("5 ft");
      expect(qty.toPrec(Qty("2 ft")).toString()).toBe("6 ft");
      expect(qty.toPrec(Qty("10 ft")).toString()).toBe("10 ft");
      expect(qty.toPrec(Qty("0.5 ft")).toString()).toBe("5 ft");
      expect(qty.toPrec(Qty("0.1 ft")).toString()).toBe("5.2 ft");
      expect(qty.toPrec(Qty("0.05 ft")).toString()).toBe("5.15 ft");
      expect(qty.toPrec(Qty("0.01 ft")).toString()).toBe("5.17 ft");
      expect(qty.toPrec(Qty("0.0001 ft")).toString()).toBe("5.17 ft");
      expect(qty.toPrec(Qty("0.25 ft")).toString()).toBe("5.25 ft");
    });

    it("should allow string as precision parameter", function () {
      var qty = Qty("5.17 ft");

      expect(qty.toPrec("ft").toString()).toBe("5 ft");
      expect(qty.toPrec("0.5 ft").toString()).toBe("5 ft");
      expect(qty.toPrec("0.05 ft").toString()).toBe("5.15 ft");
    });

    it("should round according to precision passed as quantity with different prefixes", function () {
      var qty = Qty("6.3782 m");

      expect(qty.toPrec(Qty("dm")).toString()).toBe("6.4 m");
      expect(qty.toPrec(Qty("cm")).toString()).toBe("6.38 m");
      expect(qty.toPrec(Qty("mm")).toString()).toBe("6.378 m");

      expect(qty.toPrec(Qty("5 cm")).toString()).toBe("6.4 m");
    });

    it("should round according to precision passed as quantity with different compatible units", function () {
      var qty = Qty("1.146 MPa");
      expect(qty.toPrec(Qty("0.1 bar")).toString()).toBe("1.15 MPa");
      expect(qty.toPrec(Qty("0.01 MPa")).toString()).toBe("1.15 MPa");
      expect(qty.toPrec(Qty("dbar")).toString()).toBe("1.15 MPa");

      // Tests below are mainly a safety net because not sure if there is
      // any usefulness to do things like that
      qty = Qty("5.171234568 ft");
      expect(qty.toPrec(Qty("m")).toString()).toBe("6.561679790026248 ft");
      expect(qty.toPrec(Qty("dm")).toString()).toBe("5.249343832020998 ft");
      expect(qty.toPrec(Qty("cm")).toString()).toBe("5.183727034120736 ft");
      expect(qty.toPrec(Qty("mm")).toString()).toBe("5.170603674540684 ft");
    });
  });

  describe("mulSafe", function () {
    it("should multiply while trying to avoid numerical errors", function () {
      expect(Qty.mulSafe(0.1, 0.1)).toBe(0.01);
      expect(Qty.mulSafe(1e-11, 123.456789)).toBe(1.23456789e-9);
      expect(Qty.mulSafe(6e-12, 100000)).toBe(6e-7);
    });
  });

  describe("divSafe", function () {
    it("should divide while trying to avoid numerical errors", function () {
      expect(Qty.divSafe(0.000773, 0.000001)).toBe(773);
      // TODO uncomment and fix
      //expect(Qty.divSafe(24.5, 0.2777777777777778)).toBe(88.2);
    });
  });

  describe("Qty.parse", function () {
    it("should not throw if parsed argument is a string", function () {
      expect(function () { Qty.parse("foo"); }).not.toThrow("Argument should be a string");
    });

    it("should return parsed quantity when passing a valid quantity", function () {
      expect((Qty.parse("2.5 m") instanceof Qty)).toBe(true);
    });

    it("should return null when passing an invalid quantity", function () {
      expect(Qty.parse("aa")).toBeNull();
    });
  });

  describe("Qty.swiftConverter", function () {
    it("should return a function", function () {
      expect(typeof Qty.swiftConverter("m/h", "ft/s")).toBe("function");
    });

    it("should throw when passing incompatible units", function () {
      expect(function () { Qty.swiftConverter("m", "s"); }).toThrow("Incompatible units");
    });

    describe("converter", function () {
      describe("single value", function () {
        it("should convert value", function () {
          // TODO Same test but with m/h -> ft/s triggers rounding issue
          // (For the sake of speed, converter does not check and fix rounding issues)
          var converter = Qty.swiftConverter("m/h", "m/s");

          expect(converter(2500)).toEqual(Qty("2500 m/h").to("m/s").scalar);
        });

        it("should returned value unchanged when units are identical", function () {
          var converter = Qty.swiftConverter("m/h", "m/h");

          expect(converter(2500)).toEqual(2500);
        });

        it("should convert temperatures", function () {
          var converter = Qty.swiftConverter("tempF", "tempC");

          expect(converter(32)).toEqual(0);
        });

        it("should convert degrees", function () {
          var converter = Qty.swiftConverter("degC", "degF");

          expect(converter(10)).toEqual(18);
        });
      });

      describe("array of values", function () {
        it("should be converted", function () {
          var converter = Qty.swiftConverter("MPa", "bar"),
            values = [250, 10, 15],
            expected = [2500, 100, 150];

          expect(converter(values)).toEqual(expected);
        });
      });
    });
  });

  describe("Qty.getKinds", function () {
    it("should return an array of kind names", function () {
      expect(Qty.getKinds()).toContain("resistance");
    });

    it("should not contain duplicate kind names", function () {
      var kinds = Qty.getKinds();
      var map: { [key: string]: number } = {};
      kinds.forEach(function (kind) {
        map[kind] = 1;
      });
      expect(kinds.length).toEqual(Object.keys(map).length);
    });
  });

  describe("Qty.getUnits", function () {
    it("should return an array of units of kind", function () {
      expect(Qty.getUnits("currency")).toContain("dollar");
    });
    it("should return an array of all units without arg", function () {
      expect(Qty.getUnits()).toContain("sievert");
    });
    it("should throw unknown kind", function () {
      expect(function () { Qty.getUnits('bogusKind'); }).toThrow("Kind not recognized");
    });
  });

  describe("Qty.getAliases", function () {
    it("should return array of alternative names for unit", function () {
      expect(Qty.getAliases("m")).toContain("meter");
      expect(Qty.getAliases("meter")).toContain("metre");
      expect(Qty.getAliases("N")).toContain("newton");
    });
  });

  describe("information", function () {
    describe("bits and bytes", function () {
      it("should have 'information' as kind", function () {
        expect(Qty("3 b").kind()).toBe("information");
        expect(Qty("5 B").kind()).toBe("information");
      });

      it("could be pluralized", function () {
        expect(Qty("3 bits").eq(Qty("3 b"))).toBe(true);
        expect(Qty("5 bytes").eq(Qty("5 B"))).toBe(true);
      });
    });

    describe("rate", function () {
      it("should accept bps and Bps aliases", function () {
        expect(Qty("3 bps").eq(Qty("3 b/s"))).toBe(true);
        expect(Qty("5 Bps").eq(Qty("5 B/s"))).toBe(true);
      });

      it("should be parsed when prefixed", function () {
        expect(Qty("3 kbps").eq(Qty("3 kb/s"))).toBe(true);
        expect(Qty("5 MBps").eq(Qty("5 MB/s"))).toBe(true);
      });

      it("should have 'information_rate' as kind", function () {
        expect(Qty("3 bps").kind()).toBe("information_rate");
        expect(Qty("5 Bps").kind()).toBe("information_rate");
      });
    });
  });

  describe("non regression tests", function () {
    describe("Wh (#38)", function () {
      it("should be parsed", function () {
        expect(Qty("Wh").eq(Qty("3600 J"))).toBe(true);
      });

      it("should be parsed when prefixed", function () {
        expect(Qty("kWh").eq(Qty("1000 Wh"))).toBe(true);
      });
    });

    describe("Ah (#25)", function () {
      it("should be parsed", function () {
        expect(Qty("Ah").eq(Qty("3600 C"))).toBe(true);
      });

      it("should be parsed when prefixed", function () {
        expect(Qty("mAh").eq(Qty("3.6 C"))).toBe(true);
      });
    });

    describe("Farad (#67)", function () {
      it('should be equal to its definition', function () {
        expect(Qty("1 F").eq(Qty("1 C").div(Qty("1 V")))).toBe(true);
      });

      it('should not be defined as base unit', function () {
        var qty = Qty("F");

        expect(qty.isBase()).toBe(false);
        expect(qty.toBase().units()).toEqual("s4*A2/m2*kg");
      });

      it('should be parsed when prefixed', function () {
        var qty = Qty("100 nF");

        expect(qty.eq(Qty("100 F").div(1e9))).toBe(true);
        expect(qty.baseScalar).toEqual(1e-7);
      });
    });
  });
});
