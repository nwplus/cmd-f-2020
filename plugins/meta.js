const cheerio = require('cheerio')

function metaMarkup({ name, description, image, url }) {
  return `
    <meta property="og:type" content="website">
    <meta property="og:title" content="${name}">
    <meta property="og:description" content="${description}">
    <meta property="og:url" content="${url}">
    <meta property="og:image" content="${image}">
    <meta itemprop="name" content="${name}">
    <meta itemprop="description" content="${description}">
    <meta itemprop="url" content="${url}">
    <meta itemprop="image" content="${image}">
  `
}

function meta({ route, html }) {
  // meta tags (fill in your info here / dynamic per route)
  const metaTags = {
    name: 'cmd-f 2020',
    description:
      'British Columbia’s all-female* hackathon. Held March 7-8th, 2020 at UBC',
    image: 'https://cmd-f.nwplus.io/thumbnail.png',
    url: 'https://cmd-f.nwplus.io'
  }

  // Load Nuxt generared HTML
  const $ = cheerio.load(html)

  // Generate meta markup
  const tags = metaMarkup(metaTags)

  // Append them to <head>
  $('head').append(tags)

  // Return new HTML
  return $.html()
}

exports.meta = meta
