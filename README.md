# postcss-loader-watch-config-bug

Demo for issue https://github.com/webpack-contrib/postcss-loader/issues/551

## Steps

1.) Clone repo and run `npm install`

2.) Run `npm run watch`

3.) Change of file `postcss.config.js` does not fire recompilation (e.g. change vars-a.css to vars-b.css but nothing happens, watch does not work; result in browser `public/index.html` is the same)

4.) Optionaly as fallback `postcss-add-dependencies` plugin can be uncomennted in `postcss.config.js` to watch `postcss.config.js` and any other custom dendencies.
