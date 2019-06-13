const { createGzip, createDeflate } = require('zlib')
/*
  压缩功能
*/
module.exports = function(stream, req, res) {
  const acceptEncoding = req.headers['accept-encoding']
  if (!acceptEncoding || !acceptEncoding.match(/\b(gzip|deflate)\b/)) {
    return stream
  } else if (acceptEncoding.match(/\bgzip\b/)) {
    res.setHeader('content-encoding', 'gzip')
    return stream.pipe(createGzip())
  } else if (acceptEncoding.match(/\bdeflate\b/)) {
    res.setHeader('content-encoding', 'deflate')
    return stream.pipe(createDeflate())
  }
}
