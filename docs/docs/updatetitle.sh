
for file in `find . -name "*.md"|grep -v index.md`
do
mydate=`date "+%Y-%m-%d %H:%M:%S"`

echo $file;
docname=`echo $file|rev|cut -d /  -f 1 |rev|cut -d "." -f 1`
titlenum=`cat $file|head -n 5|grep title|wc -l`
echo $titlenum
if [ $titlenum -eq 0 ];then 


echo "需要处理"
sed -i "" "1 i \
---
" $file
sed -i ""  "1 i \
description: $docname
" $file
sed -i "" "1 i \
date: $mydate
"  $file

sed -i "" "1 i \
echo title: $docname
" $file
sed -i "" "1 i \
---
" $file

fi

done
