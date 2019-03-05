#!/bin/bash

#date  显示时间，我们可以用时间的不同做为备份文件的名字，这样以前的备份就不会被覆盖

datename=$(date +%Y%m%d%H)"_bak"            #定义时间变量名和显示时间格式

bcfile=myfile/$datename;
# sql=sql.del

# -x 参数判断 $folder 是否存在并且是否具有可执行权限
if [ ! -x "$bcfile" ]; then
   echo "该用户对$bcfile文件夹没有权限"
else 
    echo "该用户对文件夹$bcfile有权限"
fi

#-d判断文件夹是否存在
if [ ! -d "$bcfile" ]; then  
    echo "$bcfile 文件夹不存在,进行创建文件"
    mkdir -p "$bcfile"   #创建与时间相对应的文件
else 
    echo "$bcfile文件存在"
fi 

# -f 参数判断 文件是否存在
# if [ ! -f "$sql" ]; then
#     echo  "$sql文件不存在，进行创建"
#     touch "$sql"
# else 
#     echo  "$sql文件存在"
# fi

#-a：此参数的效果和同时指定"-dpR"参数相同； 
#-d：当复制符号连接时，把目标文件或目录也建立为符号连接，并指向与源文件或目录连接的原始文件或目录；
#-f：强行复制文件或目录，不论目标文件或目录是否已存在；
#-i：覆盖既有文件之前先询问用户；
#-l：对源文件建立硬连接，而非复制文件；
#-p：保留源文件或目录的属性； 
#-R/r：递归处理，将指定目录下的所有文件与子目录一并处理；
#-s：对源文件建立符号连接，而非复制文件； 
#-u：使用这项参数后只会在源文件的更改时间较目标文件更新时或是名称相互对应的目标文件并不存在时，才复制文件； 
#-S：在备份文件时，用指定的后缀“SUFFIX”代替文件的默认后缀； -b：覆盖已存在的文件目标前将目标文件备份； 
#-v：详细显示命令执行的操作。

cp -a -R ./copy-to/* $bcfile  #把要备份的文件复制到上面创建的文件夹内

rm -r ./copy-to/*

cp -avx ./copy-from/* ./copy-to/