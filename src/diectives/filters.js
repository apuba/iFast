/**
 * Created by houxingzhang on 2017-02-27.
 */
import Vue from 'vue'
import moment from 'moment'
import accounting from '../plugins/accounting'

// 货币过滤器
Vue.filter('moneyFormat', function (val, type) {
  return accounting.formatMoney(val, type || '￥')
})
// 日期时间 格式参考：http://momentjs.cn/
Vue.filter('dateFormat', function (val, format) {
  moment.locale('zh-cn')
  return moment(val).format(format)
})
// 货币过滤器
Vue.filter('stockFormat', function (val, type) {
  return val==-999999?'不限制':val
})
Vue.directive('focus', function (el) {
  //el.focus()
  //console.log(1111)
  //window.addEventListener('scroll', function () {
  //  console.log(222)
  //},false)
})

Vue.filter('orderStatus',function(val){
  let s
  switch (val){
    case 'MAKING': //制作中
      s = '制'
          break;
    case 'EFFECT': //已生效、已支付
      s = '已'
          break;
    case 'APPROVED': // 待支付
      s = '待'
          break;
    case 'DELETED': //　已删除
          s = '删'
          break;
    case 'CLOSED': // 已关闭
      s = '关'
          break;
    case 'CANCELLED': //　已取消
      s = '消'
          break;
  }
  return s
})

