#! /bin/bash
#获取当前的目录
rootdir=`pwd`
#遍历目录执行
for dir in `find . -type d|grep -v "assets\|file"`
do
echo "正在更新: $dir"
cd $dir
#echo `pwd`
mdnum=`find ./ -name "*.md"|grep -v index.md|wc -l`
if [ $mdnum != 0 ];then
#echo $mdnum
sh $rootdir/generatemenu.sh > ./index.md
fi
#echo "当前目录"
#回到执行根目录
cd $rootdir

done

