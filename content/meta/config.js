const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Soup Blog", // <title>
  shortSiteTitle: "Soup Blog", // <title> ending for posts and pages
  siteDescription: "PersonalBlog.",
  siteUrl: "https://sworupkc.com.np",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Sworup K.C",
  authorTwitterAccount: "suyogkrazz",
  // info
  infoTitle: "Sworup K.C",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "PersonalBlog - Sworup K.C",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.bg,
  manifestThemeColor: colors.bg,
  manifestDisplay: "standalone",
  // social
  authorSocialLinks: [
    { name: "twitter", url: "https://twitter.com/sworupkc" },
    { name: "instagram", url: "https://www.instagram.com/sworup.kc/" },
    { name: "facebook", url: "https://www.facebook.com/sworupkc0" }
  ]
};
