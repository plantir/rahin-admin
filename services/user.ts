import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'
import { BaseService } from './helper/BaseService'
import { IUser } from '~/models/user'
export default class UserService extends BaseService<IUser> {
  constructor(public $axios: NuxtAxiosInstance) {
    super($axios, 'admin/users')
  }
}

declare module 'vue/types/vue' {
  interface NuxtServiceInstance {
    user: UserService
  }
}
