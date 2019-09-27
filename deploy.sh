npm run build
find . ! -name '.git/' ! -name 'dist/' ! -name '.gitignore' ! -name 'node_modules/' -delete
mv dist/* .
git add .
git commit -m "redeploy"
git push --force origin master:gh-pages
git reset --hard origin/master