# 动态添加cnzz统计代码与百度统计

## 介绍

在实际业务开发中，经常有记录落地页数据来源的需求。

有两个基本原因:
1. 推广渠道质量: 因为落地页往往是给到推广渠道商去进行相关的推广，公司需要看该推广渠道是否能带来有效的数据。
2. 运营操作: 方便运营人员进行后续相关的操作。

## 代码

### cnzz统计 与 百度统计
```javascript
// 百度统计
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?xxxxxxxxxxxxxxxxx";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>

// cnzz统计
<script type="text/javascript">document.write(unescape("%3Cspanid='cnzz_stat_icon_000000001'%3E%3C/span%3E%3Cscript src='https://v1.cnzzcom/z_stat.php%3Fid%0000001' type='text/javascript'%3E%3C/script%3E"))</script>
```

### 动态追加
```javascript
appendStatistics(type, script) {
  if (!type) return;
  // cnzz
  if (type == 1) {
    let reg = /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%?=~_|]/g;
    let result = script.match(reg);

    var cnzz_s_tag = document.createElement('script');
    cnzz_s_tag.type = 'text/javascript';
    cnzz_s_tag.async = true;
    cnzz_s_tag.charset = 'utf-8';
    cnzz_s_tag.src = `${unescape(result[0])}&async=1`;
    var root_s = document.getElementsByTagName('script')[0];
    root_s.parentNode.insertBefore(cnzz_s_tag, root_s);
  }
  // 百度统计
  else if (type == 2) {
    let scriptVal = script.replace('<script>', '');
    scriptVal = scriptVal.replace('</script>', '');
    let newScript = document.createElement('script');
    newScript.type = 'text/javascript';
    newScript.innerHTML = scriptVal;
    document.body.appendChild(newScript);
  }
}
```

## 业务场景

1. 多落地页的情况下
2. 频繁修改落地页域名
3. 频繁替换落地页统计代码

## 参考

- [CNZZ 如何将JS代码更换成异步统计代码？](https://help.cnzz.com/support/kuaisuanzhuangdaima/2016/1011/185.html)