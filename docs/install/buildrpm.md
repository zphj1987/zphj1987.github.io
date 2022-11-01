# lustre的打包编译(lustre内核)

## 编译相关
因为官方的包存在安装的问题，所以需要自己打包，本文档就是详细记录打包的步骤的,需要合入官方的patch

## 处理方法
### 添加源
```bash
[root@lab110 ~]# cat /etc/yum.repos.d/lustre.repo
[lustre-server]
name=lustre-server
baseurl=https://downloads.whamcloud.com/public/lustre/lustre-2.15.1/el8.6/server/
gpgcheck=0
enable=1
```

### 安装内核
```bash
yum install kernel-4.18.0-372.9.1.el8_lustre.x86_64 kernel-devel-4.18.0-372.9.1.el8_lustre.x86_64
```
这里说明一下，dkms是动态编译内核，也就是会自动去根据当前使用的内核版本进行模块的编译，ldiskfs底层是需要修改带lustre的patch的内核的，而zfs的底层是不需要打patch的内核的，客户端是不需要打patch的内核的

总结一下也就是：

如果使用的是openzfs的底层，内核是没有约束的，只需要看是不是编译能通过即可,打包的时候会根据当前打包环境生成kmod的模块，而安装的时候有两种方式，kmod方式和dkms的方式，kmod需要限定内核的，dkms不限定内核

基于上面的我们目前做一下约束:
- 1、打包使用lustre官方提供的内核(后续如果需要kmod安装方式，再切换我们自己的内核环境打包,或者使用os自带内核打包)
- 2、运行环境server我们也都使用lustre官方提供的内核（有特殊需求再改）
- 3、运行环境client我们也都使用lustre官方提供的内核（有特殊需求再改）
- 4、目前都以dkms方式安装

后面会修改一个版本支持默认系统内核(TODO)


