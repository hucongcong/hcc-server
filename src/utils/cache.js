const {
  maxAge,
  expires,
  cacheControl,
  lastModified,
  etag
} = require('../config').cache
function refreshRes(stats, res) {
  if (expires) {
    res.setHeader('Expires', new Date(Date.now() + maxAge).toUTCString())
  }
  if (cacheControl) {
    res.setHeader('Cache-Control', `public, max-age=${maxAge / 1000}`)
  }
  if (lastModified) {
    res.setHeader('Last-Modified', stats.mtime.toUTCString())
  }
  if (etag) {
    res.setHeader('ETag', `${stats.size}-${stats.mtime}`)
  }
}
module.exports = function(stats, req, res) {
  refreshRes(stats, res)

  const lastModified = req.headers['if-modified-since']
  const etag = req.headers['if-none-match']

  if (!lastModified && !etag) {
    return false
  }

  if (lastModified && lastModified !== res.getHeader('Last-Modified')) {
    // 失效
    return false
  }
  if (etag && etag !== res.getHeader('ETag')) {
    return false
  }
  return true
}
