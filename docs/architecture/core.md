# lustre的核心组件

## lustre的核心组成

lustre的核心组成主要有
- MGS
- MDS
- OSD
- CLIENT

## lustre的初次发布

这个跟大部分的分布式文件系统都是类似的，或者说很多新系统是会参考这个架构，毕竟lustre的开发时间比较早

基本上都是：
- 管理节点
- 元数据节点
- 存储节点
- 客户端

从wiki上面看,lustre的第一个版本是

lustre: December 16, 2003; 19 years ago

看下其它几个比较常用的分布式文件系统:
- ceph:The first line of code that ended up being part of Ceph was written by Sage Weil in 2004 while at a summer internship at LLNL
- gluster:2005

发布时间差不多集中在2003-2005这个时间段，目前ceph和gluster都是红帽在维护，红帽被IBM收购了

lustre则是开始被intel收购，后来又被卖给了DDN，目前主要是DDN维护

三个系统都是开放源代码的

## lustre与其它系统的区别

三者的主要区别:
ceph:
 - 支持块，文件，对象
 - 自带同步冗余
 - 带独立元数据
 - 冗余分发在osd

gluster:
 - 支持文件，块(通过文件转的)
 - 自带同步冗余
 - 无独立元数据
 - 冗余分发在客户端

lustre:
 - 只支持文件
 - 支持异步冗余
 - 带独立元数据
 - 冗余分发在osd

上面的三个系统都对外提供文件服务，从整体功能来说，ceph的功能是最多的，也是运维最复杂了，lustre的是最少的，但是性能是最好的

基于以上的特点，所以在超算领域，基本上需要计算的数据都是使用的lustre的，而lustre因为之前的版本配置复杂，很多技术都是掌握在研究机构自己内部

网上能够看到的资料分享很少，但是从性能上来说，目前来说还是一个不会被另外两个替代的文件系统,继续在专有领域使用
