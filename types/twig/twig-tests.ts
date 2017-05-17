
import twig = require('twig');

var value: any;
var str: string;
var num: number;
var bool: boolean;

var params: twig.Parameters = {
	id: value,
	path: value,
	base: value,
	blocks: value,
	macros: value,
	method: value,
	name: value,
	options: value,
	url: value
};

var temp: twig.Template;
var compOpts: twig.CompileOptions = {
	filename: str,
	settings: value
};

var compiled:(context: any) => any;

temp = twig.twig(params);
twig.extendFilter(str, (left: any, ...params: any[]) => {
	return str;
});
twig.extendFunction(str, (...params: any[]) => {
	return str;
});
twig.extendTest(str, (value: any) => bool);
twig.extendTag(value);
compiled = twig.compile(str, compOpts);
twig.renderFile(str, compOpts, (err, result) => {

});
twig.__express(str, compOpts, (err, result) => {

});
twig.cache(bool);
