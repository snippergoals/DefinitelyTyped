import bunyan = require("bunyan");
import bunyanLogentries = require("bunyan-logentries");

var logger: bunyan.Logger = bunyan.createLogger({
  name: "foobar",
  streams: [{
    level: "info",
    stream: bunyanLogentries.createStream({token: "foobar"}),
    type: "raw"
  }]
});
