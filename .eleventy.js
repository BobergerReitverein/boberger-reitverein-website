require('dotenv').config({ path: '.env.local' });

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('style.css');
  eleventyConfig.addPassthroughCopy('images');
  eleventyConfig.addPassthroughCopy('downloads');

  // Renders plain Sanity text blocks as HTML:
  // - double newlines → paragraph breaks
  // - tab-separated lines → <table class="camp-table"> (first row = <thead>)
  // - single newlines within a block → <br>
  eleventyConfig.addFilter('richText', function(text) {
    if (!text) return '';
    const paragraphs = String(text).split(/\n{2,}/);
    return paragraphs.map(para => {
      const lines = para.split('\n').filter(l => l.trim());
      if (!lines.length) return '';
      const isTable = lines.length > 1 && lines.slice(1).some(l => l.includes('\t'));
      if (isTable) {
        const rows = lines.map(l => l.split('\t').map(c => c.trim()));
        const thead = `<thead><tr>${rows[0].map(c => `<th>${c}</th>`).join('')}</tr></thead>`;
        const tbody = `<tbody>${rows.slice(1).map(r =>
          `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`
        ).join('')}</tbody>`;
        return `<div class="camp-table-wrap"><table class="camp-table">${thead}${tbody}</table></div>`;
      }
      return `<p>${lines.join('<br>')}</p>`;
    }).filter(Boolean).join('');
  });

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
