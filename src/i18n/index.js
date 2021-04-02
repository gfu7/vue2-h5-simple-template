import Vue from 'vue'
import VueI18n from 'vue-i18n'

const locale = 'cn' // 根据自己的实际进行设置

Vue.use(VueI18n)

// 获取url参数_lang初始化语言
const messages = {
  en: require('../assets/i18n/en.json'),
  cn: require('../assets/i18n/cn.json'),
  tc: require('../assets/i18n/tc.json')
}

export const i18n = new VueI18n({
  locale: locale || 'cn', // 设置地区
  messages, // 设置地区信息
  fallbackLocale: 'cn',
  formatFallbackMessages: true
})

/ html标签上语言标记
let _htm = document.getElementsByTagName('html')[0];
_htm.setAttribute('lang',i18n.locale || 'cn');
Vue.prototype.$locale = i18n.locale;
