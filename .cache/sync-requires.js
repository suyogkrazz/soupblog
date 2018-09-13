// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("C:/Users/user/Workspace/soupblog/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-post-template-js": preferDefault(require("C:\\Users\\user\\Workspace\\soupblog\\src\\templates\\PostTemplate.js")),
  "component---src-templates-page-template-js": preferDefault(require("C:\\Users\\user\\Workspace\\soupblog\\src\\templates\\PageTemplate.js")),
  "component---cache-dev-404-page-js": preferDefault(require("C:\\Users\\user\\Workspace\\soupblog\\.cache\\dev-404-page.js")),
  "component---src-pages-contact-js": preferDefault(require("C:\\Users\\user\\Workspace\\soupblog\\src\\pages\\contact.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\Users\\user\\Workspace\\soupblog\\src\\pages\\index.js")),
  "component---src-pages-search-js": preferDefault(require("C:\\Users\\user\\Workspace\\soupblog\\src\\pages\\search.js"))
}

exports.json = {
  "layout-index.json": require("C:\\Users\\user\\Workspace\\soupblog\\.cache\\json\\layout-index.json"),
  "giving-fewer-fucks.json": require("C:\\Users\\user\\Workspace\\soupblog\\.cache\\json\\giving-fewer-fucks.json"),
  "success.json": require("C:\\Users\\user\\Workspace\\soupblog\\.cache\\json\\success.json"),
  "about.json": require("C:\\Users\\user\\Workspace\\soupblog\\.cache\\json\\about.json"),
  "starters.json": require("C:\\Users\\user\\Workspace\\soupblog\\.cache\\json\\starters.json"),
  "kiss-my-ass.json": require("C:\\Users\\user\\Workspace\\soupblog\\.cache\\json\\kiss-my-ass.json"),
  "dev-404-page.json": require("C:\\Users\\user\\Workspace\\soupblog\\.cache\\json\\dev-404-page.json"),
  "contact.json": require("C:\\Users\\user\\Workspace\\soupblog\\.cache\\json\\contact.json"),
  "index.json": require("C:\\Users\\user\\Workspace\\soupblog\\.cache\\json\\index.json"),
  "search.json": require("C:\\Users\\user\\Workspace\\soupblog\\.cache\\json\\search.json")
}