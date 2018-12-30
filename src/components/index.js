import Vue from "vue";
import Msg from './Msg/index.vue';
Msg.install = Vue => Vue.component(Msg.name, Msg)
// const Components = {
//   Msg
// };
export default {Msg};