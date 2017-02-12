import Jimp = require('jimp')

// All code below is from node-jimp document
Jimp.read("lenna.png", function (err, data) {
    if (err) throw err;
    data.resize(256, 256)            // resize
         .quality(60)                 // set JPEG quality
         .greyscale()                 // set greyscale
         .write("lena-small-bw.jpg"); // save
});

Jimp.read("lenna.png").then(function (lenna) {
    lenna.resize(256, 256)            // resize
         .quality(60)                 // set JPEG quality
         .greyscale()                 // set greyscale
         .write("lena-small-bw.jpg"); // save
}).catch(function (err) {
    console.error(err);
});

Jimp.read("./path/to/image.jpg", function (err, image) {
    // do stuff with the image (if no exception)
});

Jimp.read("./path/to/image.jpg").then(function (image) {
    // do stuff with the image
}).catch(function (err) {
    // handle an exception
});

Jimp.read(new Buffer(''), function (err, image) {
    // do stuff with the image (if no exception)
});

Jimp.read("http://www.example.com/path/to/lenna.jpg", function (err, image) {
    // do stuff with the image (if no exception)
});

var image = new Jimp(1, 2)
var w = 0
var h = 0
var x = 0
var y = 0
var f = 0
var src = ''
var horz = Jimp.HORIZONTAL_ALIGN_CENTER
var vert = Jimp.VERTICAL_ALIGN_BOTTOM
var deg = 90
var val = 0.5
var hex = 0xFFFFFFFF
var r = 0
var n = 1
/* Resize */
image.contain( w, h);    // scale the image to the given width and height, some parts of the image may be letter boxed
image.cover( w, h);      // scale the image to the given width and height, some parts of the image may be clipped
image.resize( w, h);     // resize the image. Jimp.AUTO can be passed as one of the values.
image.scale(f );         // scale the image by the factor f
image.scaleToFit( w, h ); // scale the image to the largest size that fits inside the given width and height

// An optional resize mode can be passed with all resize methods.

/* Crop */
image.autocrop();                 // automatically crop same-color borders from image (if any)
image.crop( x, y, w, h );         // crop to the given region

/* Composing */
image.blit( src, x, y );
                                  // blit the image with another Jimp image at x, y, optionally cropped.
image.composite( src, x, y );     // composites another Jimp image over this image at x, y
image.mask( src, x, y );          // masks the image with another Jimp image at x, y using average pixel value

/* Flip and rotate */
image.flip( horz, vert );         // flip the image horizontally or vertically
image.mirror( horz, vert );       // an alias for flip
image.rotate( deg );      // rotate the image clockwise by a number of degrees. Optionally, a resize mode can be passed. If `false` is passed as the second parameter, the image width and height will not be resized.

// JPEG images with EXIF orientation data will be automatically re-orientated as appropriate.

/* Colour */
image.brightness( val );          // adjust the brighness by a value -1 to +1
image.contrast( val );            // adjust the contrast by a value -1 to +1
image.dither565();                // ordered dithering of the image and reduce color space to 16-bits (RGB565)
image.greyscale();                // remove colour from the image
image.invert();                   // invert the image colours
image.normalize();                // normalize the channels in an image

/* Alpha channel */
image.fade( f );                  // an alternative to opacity, fades the image by a factor 0 - 1. 0 will haven no effect. 1 will turn the image
image.opacity( f );               // multiply the alpha channel by each pixel by the factor f, 0 - 1
image.opaque();                   // set the alpha channel on every pixel to fully opaque
image.background( hex );          // set the default new pixel colour (e.g. 0xFFFFFFFF or 0x00000000) for by some operations (e.g. image.contain and 

/* Blurs */
image.gaussian( r );              // Gaussian blur the image by r pixels (VERY slow)
image.blur( r );                  // fast blur the image by r pixels

/* Effects */
image.posterize( n );             // apply a posterization effect with n level
image.sepia();                    // apply a sepia wash to the image

image.clone();           // returns a clone of the image
image.resize(250, 250);           // resize the image to 250 x 250
image.resize(Jimp.AUTO, 250);     // resize the height to 250 and scale the width accordingly
image.resize(250, Jimp.AUTO);     // resize the width to 250 and scale the height accordingly

image.resize(250, 250, Jimp.RESIZE_BEZIER);

image.contain(250, 250, Jimp.HORIZONTAL_ALIGN_LEFT | Jimp.VERTICAL_ALIGN_TOP);

var path = ''
var str = ''
var width = 0
Jimp.loadFont( path ).then(function (font) { // load font from .fnt file
    image.print(font, x, y, str);        // print a message on an image
    image.print(font, x, y, str, width); // print a message on an image with text wrapped at width
});

var cb = (err: Error, data: any) => {}
Jimp.loadFont( path, cb ); // using a callback pattern

Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) {
    image.print(font, 10, 10, "Hello world!");
});

image.write( path, cb ); // Node-style callback will be fired when write is successful

var file = "new_name." + image.getExtension();
image.write(file)


var mime = 'image/png'
image.getBuffer( mime, cb ); // Node-style callback will be fired with result
image.getBase64( mime, cb ); // Node-style callback will be fired with result
image.quality( n ); // set the quality of saved JPEG, 0 - 100

var bool = true
var number = 0
image.rgba( bool );             // set whether PNGs are saved as RGBA (true, default) or RGB (false)
image.filterType( number );     // set the filter type for the saved PNG
image.deflateLevel( number );   // set the deflate level for the saved PNG
Jimp.deflateStrategy( number ); // set the deflate for the saved PNG (0-3)

image.color([
    { apply: 'hue', params: [ -90 ] },
    { apply: 'lighten', params: [ 50 ] },
    { apply: 'xor', params: [ '#06D' ] }
]);
  image.convolution([
    [-2,-1, 0],
    [-1, 1, 1],
    [ 0, 1, 2]
  ])
image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
    // x, y is the position of this pixel on the image
    // idx is the position start position of this rgba tuple in the bitmap Buffer
    // this is the image

    var red   = this.bitmap.data[ idx + 0 ];
    var green = this.bitmap.data[ idx + 1 ];
    var blue  = this.bitmap.data[ idx + 2 ];
    var alpha = this.bitmap.data[ idx + 3 ];

    // rgba values run from 0 - 255
    // e.g. this.bitmap.data[idx] = 0; // removes red from this pixel
});
image.getPixelColor(x, y);      // returns the colour of that pixel e.g. 0xFFFFFFFF
image.setPixelColor(hex, x, y); // sets the colour of that pixel

var g = 0
var b = 0
var a = 0
Jimp.rgbaToInt(r, g, b, a); // e.g. converts 255, 255, 255, 255 to 0xFFFFFFFF
Jimp.intToRGBA(hex);        // e.g. converts 0xFFFFFFFF to {r: 255, g: 255, b: 255, a:255}

var image = new Jimp(256, 256, function (err, image) {
    // this image is 256 x 256, every pixel is set to 0x00000000
});

var image = new Jimp(256, 256, 0xFF0000FF, function (err, image) {
    // this image is 256 x 256, every pixel is set to 0xFF0000FF
});

image.hash(); // aHgG4GgoFjA
image.hash(2); // 1010101011010000101010000100101010010000011001001001010011100100

var image1 = new Jimp(0, 1)
var image2 = new Jimp(0, 1)
Jimp.distance(image1, image2); // returns a number 0-1, where 0 means the two images are perceived to be identical

var threshold = 0
var diff = Jimp.diff(image1, image2, threshold); // threshold ranges 0-1 (default: 0.1)
diff.image;   // a Jimp image showing differences
diff.percent; // the proportion of different pixels (0-1), where 0 means the images are pixel identical


var distance = Jimp.distance(image, image2); // perceived distance
var diff = Jimp.diff(image, image2);         // pixel difference

if (distance < 0.15 || diff.percent < 0.15) {
    // images match
} else {
    // not a match
}

Jimp.read("lenna.png", function (err, image) {
    this.greyscale().scale(0.5).write("lena-half-bw.png");
});

Jimp.read("lenna.png", function (err, image) {
    image.greyscale(function(err, image) {
        image.scale(0.5, function (err, image) {
            image.write("lena-half-bw.png");
        });
    });
});