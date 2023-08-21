const { EleventyI18nPlugin } = require("@11ty/eleventy");
const { execSync } = require('child_process')

module.exports = function(eleventyConfig) {
    // Output directory: _site
  
    // Copy `assets/` to `_site/assets`
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addPlugin(EleventyI18nPlugin, {
        // any valid BCP 47-compatible language tag is supported
        defaultLanguage: "en", // Required, this site uses Italian
        errorMode: "never"
    });
    // eleventyConfig.on('eleventy.after', () => {
    //     execSync(`npx pagefind --source _site --glob \"**/*.html\"`, { encoding: 'utf-8' })
    // })
  };
