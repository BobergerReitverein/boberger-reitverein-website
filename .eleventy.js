require('dotenv').config({ path: '.env.local' });

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('style.css');
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.addPassthroughCopy('downloads');

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: '_site'
    },
    templateFormats: ['njk', 'html', 'md'],
    htmlTemplateEngine: 'njk'
  };
};
