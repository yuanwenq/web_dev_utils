(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{438:function(i,l,t){"use strict";t.r(l);var v=t(2),_=Object(v.a)({},(function(){var i=this,l=i._self._c;return l("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[l("ol",[l("li",[l("p",[i._v("推广页面带上渠道号（或者说渠道唯一标识码）")])]),i._v(" "),l("li",[l("p",[i._v("获取下载地址的时候，推广页面传入渠道号，系统类型，系统版本号，（IP+系统类型+系统版本号组成一个key记录渠道号），还需要用ip+系统类型组成一个key，\n记录渠道id，因为js获取系统版本号的时候，与原生的获取系统版本号有误差，可能导致挂靠不上，此时就需要用ip+系统类型获取渠道id进行挂靠")])]),i._v(" "),l("li",[l("p",[i._v("粘贴板(用户在落地页点击下载按钮时，将渠道号写入粘贴板，等app下载完成之后进行注册时从粘贴板中获取渠道号传入)")])]),i._v(" "),l("li",[l("p",[i._v("用户注册接口(客户端传入渠道号，粘贴板渠道号)")]),i._v(" "),l("ol",[l("li",[i._v("优先判断渠道号是否为非官方渠道，如果不是则直接挂靠到该渠道号上")]),i._v(" "),l("li",[i._v("用IP+系统类型+系统版本号获取到渠道id，进行挂靠，如果找不到就需要ip+系统类型获取渠道id")]),i._v(" "),l("li",[i._v("如果存在粘贴板渠道号，则挂靠到该渠道号上")]),i._v(" "),l("li",[i._v("如果还找不到就是挂靠到主公司")])])])])])}),[],!1,null,null,null);l.default=_.exports}}]);