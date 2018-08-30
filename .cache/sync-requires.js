// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/home/vayu-suyog/WorkSpace/blog/soupblog/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-page-template-js": preferDefault(require("/home/vayu-suyog/WorkSpace/blog/soupblog/src/templates/PageTemplate.js")),
  "component---src-templates-post-template-js": preferDefault(require("/home/vayu-suyog/WorkSpace/blog/soupblog/src/templates/PostTemplate.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/home/vayu-suyog/WorkSpace/blog/soupblog/.cache/dev-404-page.js")),
  "component---src-pages-contact-js": preferDefault(require("/home/vayu-suyog/WorkSpace/blog/soupblog/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/home/vayu-suyog/WorkSpace/blog/soupblog/src/pages/index.js")),
  "component---src-pages-search-js": preferDefault(require("/home/vayu-suyog/WorkSpace/blog/soupblog/src/pages/search.js"))
}

exports.json = {
  "layout-index.json": require("/home/vayu-suyog/WorkSpace/blog/soupblog/.cache/json/layout-index.json"),
  "success.json": require("/home/vayu-suyog/WorkSpace/blog/soupblog/.cache/json/success.json"),
  "starters.json": require("/home/vayu-suyog/WorkSpace/blog/soupblog/.cache/json/starters.json"),
  "about.json": require("/home/vayu-suyog/WorkSpace/blog/soupblog/.cache/json/about.json"),
  "giving-fewer-fucks.json": require("/home/vayu-suyog/WorkSpace/blog/soupblog/.cache/json/giving-fewer-fucks.json"),
  "dev-404-page.json": require("/home/vayu-suyog/WorkSpace/blog/soupblog/.cache/json/dev-404-page.json"),
  "contact.json": require("/home/vayu-suyog/WorkSpace/blog/soupblog/.cache/json/contact.json"),
  "index.json": require("/home/vayu-suyog/WorkSpace/blog/soupblog/.cache/json/index.json"),
  "search.json": require("/home/vayu-suyog/WorkSpace/blog/soupblog/.cache/json/search.json")
}