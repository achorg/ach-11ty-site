# ach-11ty-site


This is a port of Ivy Rose's ACH website using Gatsby

It uses 11ty 2.0 for multilingual support. When running locally, you'll need to add /en to get the index page. Note the netlify.toml files adds redirects so that this isn't a problem elsewhere. 

It also uses PageFind for search. In .eleventy.js there's a line that will build the index during the build. This is currently turned off until the search UI is add to the site. 

