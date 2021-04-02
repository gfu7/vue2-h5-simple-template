import axios from 'axios'
import Vue from 'vue'
import {i18n} from '@/utils/i18n'

const _vm = new Vue();

const errorTips = {
  401: i18n.t('errorTips.error_401'),
  403: i18n.t('errorTips.error_403'),
  404: i18n.t('errorTips.error_404'),
  409: i18n.t('errorTips.error_409'),
  500: i18n.t('errorTips.error_500'),
  502: i18n.t('errorTips.error_502'),
  504: i18n.t('errorTips.error_504')
}
