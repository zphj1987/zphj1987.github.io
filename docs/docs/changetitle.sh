
for file in `find . -name "*.md"|grep -v index.md`
do
mydate=`date "+%Y-%m-%d %H:%M:%S"`

echo $file;
docname=`echo $file|rev|cut -d /  -f 1 |rev|cut -d "." -f 1`
titlenum=`cat $file|head -n 5|grep title|wc -l`
echo $titlenum
if [ $titlenum -eq 1 ];then 

echo "需要处理"
sed -i ""  "s/^description:.*/description: $docname/g" $file
sed -i ""  "s/^date:.*/date: $mydate/g" $file
sed -i ""  "s/^title:.*/title: $docname/g" $file

fi

done
