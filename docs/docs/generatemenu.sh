#! /bin/bash
mydate=`date "+%Y-%m-%d %H:%M:%S"`
mydir=`pwd | awk -F "/" '{print $NF}'`
p1=$p1"---\n"
p1=$p1"title: $mydir \n"
p1=$p1"date: $mydate \n"
p1=$p1"description: $mydir 的文章\n"
p1=$p1"---\n"
p1=$p1"\n"

for mdfile in `find . -name "*.md"|grep -v index.md|sort`
do
# echo $mdfile
mdfilename=`echo $mdfile|rev|cut -d /  -f 1 |rev`
path=`echo $mdfile|sed 's/.\{2\}//'`
pdir=`echo $path|cut -d / -f 1`
p2dir=`echo $path|cut -d / -f 2`
#&& [[ -z $pdir ]]
# 一级目录如果含有md字段，就不做一级分类了
if [[ $pdir =~ "md" ]] ;then
    :
else
    if [[ $p1 =~ "## $pdir" ]];then
        :
    else
        p1=$p1"## "$pdir"\n"
    fi
fi

# 二级目录如果含有md字段，就不做二级分类了
if [[ "$p2dir" =~ ".md" ]];then
    :
else
    if [[ $p1 =~ "## $p2dir" ]];then
        :
    else
        p1=$p1"### "$p2dir"\n"
    fi
fi

p1=$p1"* [${mdfilename%???}](${path%???}.html)\n"

done
echo $p1
