const port = 8080
const host = '127.0.0.1'
const root = process.cwd()

module.exports = {
  port,
  host,
  root,
  compress: /\.(html|js|css|md|json)/,
  // 缓存时间
  cache: {
    // 单位毫秒
    maxAge: 60 * 60 * 1000,
    expires: true,
    cacheControl: true,
    lastModified: true,
    etag: true
  }
}
