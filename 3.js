// $('meta');


// for  web server

const cheerio = require('cheerio');
const request = require('request');



request('https://example.com', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

      console.log($("meta").attr("content"));
      //or 
      console.log($("meta").get(1).attr("content")); // index of the meta tag
  }
});
