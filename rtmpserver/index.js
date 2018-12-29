/**
 * This is all code pulled from https://www.npmjs.com/package/node-media-server
 * It is used to run the server that streams are sent to from OBS
 * and received from for our application
 **/
const { NodeMediaServer } = require("node-media-server");

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 60,
    ping_timeout: 30
  },
  http: {
    port: 8000,
    allow_origin: "*"
  }
};

var nms = new NodeMediaServer(config);
nms.run();
