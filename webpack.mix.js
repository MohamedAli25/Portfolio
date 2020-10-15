const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/home_page.js", "public/js")
    .js(
        "resources/js/portfolio_website/typewriter.js",
        "public/js/portfolio_website"
    )
    .sass("resources/sass/home_page.scss", "public/css")
    .sass(
        "resources/sass/portfolio_website/main.scss",
        "public/css/portfolio_website"
    );
