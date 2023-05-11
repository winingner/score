#!/usr/bin/env sh
 
# 确保脚本抛出遇到的错误
set -e
 
# 生成静态文件， npm run docs:build
npm run build
rm -rf ../gods/dist/*

# 将build生成的dist目录拷贝至上一层目录中
cp -rf docs/.vuepress/dist ../gods/

# 进入生成的文件夹
cd ../gods/dist

# git初始化，每次初始化不影响推送
git init
git add -A
git commit -m 'deploy'
git branch -M master

# 如果你想要部署到 https://USERNAME.github.io
git push -f git@github.com:winingner/winingner.github.io.git master 