const Image = require("@11ty/eleventy-img");
const now = String(Date.now());

let pathPrefix = "/11ty-photobook/";

async function imageShortcode(src, alt, classes, widthClasses) {
  if(alt === undefined) {
    // You bet we throw an error on missing alt (alt="" works okay)
    throw new Error(`Missing \`alt\` on myImage from: ${src}`);
  }

  let metadata = await Image(src, {
    widths: [2000],
    formats: ["jpeg"],
    urlPath: `${pathPrefix}/images/`,
    outputDir: "./_site/images/"
  });

  let data = metadata.jpeg[metadata.jpeg.length - 1];
  return `<div class="flex-shrink-0 ${widthClasses}"><img class="block ${classes}" src="${data.url}" width="${data.width}" height="${data.height}" alt="${alt}" loading="lazy" decoding="async"></div>`;
}

module.exports = function (eleventyConfig) {

  eleventyConfig.addWatchTarget('./styles/tailwind.config.js');
  eleventyConfig.addWatchTarget('./styles/tailwind.css');

  eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' });

  eleventyConfig.addShortcode('version', function () {
    return now
  });

  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

  return {
    pathPrefix
  }
};
