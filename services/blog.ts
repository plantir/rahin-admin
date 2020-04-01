import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'
import { BaseService } from './helper/BaseService'
import { IBlog } from '~/models/blog'
export default class BlogService extends BaseService<IBlog> {
  constructor(public $axios: NuxtAxiosInstance) {
    super($axios, 'admin/blogs')
  }
}

declare module 'vue/types/vue' {
  interface NuxtServiceInstance {
    blog: BlogService
  }
}
