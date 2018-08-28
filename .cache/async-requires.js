// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-post-template-js": require("gatsby-module-loader?name=component---src-templates-post-template-js!/home/vayu-suyog/WorkSpace/blog/soupblog/src/templates/PostTemplate.js"),
  "component---src-templates-page-template-js": require("gatsby-module-loader?name=component---src-templates-page-template-js!/home/vayu-suyog/WorkSpace/blog/soupblog/src/templates/PageTemplate.js"),
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!/home/vayu-suyog/WorkSpace/blog/soupblog/.cache/dev-404-page.js"),
  "component---src-pages-contact-js": require("gatsby-module-loader?name=component---src-pages-contact-js!/home/vayu-suyog/WorkSpace/blog/soupblog/src/pages/contact.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/home/vayu-suyog/WorkSpace/blog/soupblog/src/pages/index.js"),
  "component---src-pages-search-js": require("gatsby-module-loader?name=component---src-pages-search-js!/home/vayu-suyog/WorkSpace/blog/soupblog/src/pages/search.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/home/vayu-suyog/WorkSpace/blog/soupblog/.cache/json/layout-index.json"),
  "retreat-to-tatopani.json": require("gatsby-module-loader?name=path---retreat-to-tatopani!/home/vayu-suyog/WorkSpace/blog/soupblog/.cache/json/retreat-to-tatopani.json"),
  "about.json": require("gatsby-module-loader?name=path---about!/home/vayu-suyog/WorkSpace/blog/soupblog/.cache/json/about.json"),
  "starters.json": require("gatsby-module-loader?name=path---starters!/home/vayu-suyog/WorkSpace/blog/soupblog/.cache/json/starters.json"),
  "success.json": require("gatsby-module-loader?name=path---success!/home/vayu-suyog/WorkSpace/blog/soupblog/.cache/json/success.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/home/vayu-suyog/WorkSpace/blog/soupblog/.cache/json/dev-404-page.json"),
  "contact.json": require("gatsby-module-loader?name=path---contact!/home/vayu-suyog/WorkSpace/blog/soupblog/.cache/json/contact.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/home/vayu-suyog/WorkSpace/blog/soupblog/.cache/json/index.json"),
  "search.json": require("gatsby-module-loader?name=path---search!/home/vayu-suyog/WorkSpace/blog/soupblog/.cache/json/search.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/home/vayu-suyog/WorkSpace/blog/soupblog/.cache/layouts/index.js")
}