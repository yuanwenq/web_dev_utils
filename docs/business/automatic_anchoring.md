---
title: "IP自动挂靠"
---

1. 推广页面带上渠道号（或者说渠道唯一标识码）
2. 获取下载地址的时候，推广页面传入渠道号，系统类型，系统版本号，（IP+系统类型+系统版本号组成一个key记录渠道号），还需要用ip+系统类型组成一个key，
记录渠道id，因为js获取系统版本号的时候，与原生的获取系统版本号有误差，可能导致挂靠不上，此时就需要用ip+系统类型获取渠道id进行挂靠
3. 用户注册接口，优先用IP+系统类型+系统版本号获取到渠道id，进行挂靠，如果找不到就需要ip+系统类型获取渠道id，如果还找不到就是挂靠到主公司