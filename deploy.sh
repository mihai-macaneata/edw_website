npm install
npm run build
rm -r src public
rm .browserslistrc .eslintrc.js .babel.config.js .deploy.sh package-lock.json package.json postcss.config.js readme.md vue.config.js
mv dist/* .
rm -r dist
git add .
git commit -m "redeploy"
git push --force origin master:gh-pages
git reset --hard origin/master