#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 删除dist
rm dist -r -f

# 生成编译后项目
npm run build

# 进入生成的文件夹
cd ./dist

# 拷贝目录和文件（拷贝自动脚本）
cp -r ../.github ./

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO> 强制推送到gh-pages分支
git push -f https://github.com/smallyangy/smalltools.git master:gh-pages

# 返回根目录
cd -