/*
 * @Author: chenzhinjian
 * @Date: 2018-12-28 14:43:00
 * @LastEditTime: 2019-01-02 10:54:15
 * @Description: 
 */
import Vue from "vue";
import Msg from './Msg/index.vue';
import HelloWorld from './HelloWorld.vue';
import numberComma from './tools/number/comma.js'
import base64 from './tools/base64/index'
import querystring from './tools/querystring/index'
Msg.install = Vue => Vue.component(Msg.name, Msg)
const Components = [
  Msg,
  HelloWorld
];
Components.map(component => {
  Vue.component(component.name, component);
})
export {
  Msg,
  HelloWorld,
  base64,
  numberComma,
  querystring
};