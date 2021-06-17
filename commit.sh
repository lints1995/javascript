# !/bin/zsh
# 确保脚本抛出遇到的错误
set -e
# 提交
git add .
read -p "commit信息：" description
git commit -m $description
git push origin master
