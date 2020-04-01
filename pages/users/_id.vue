<style lang="scss"></style>

<template>
  <section v-if="title">
    <vr-form-generator
      :title="title"
      :loading="loading"
      :item="item"
      :formData="formData"
      :service="$service.user"
    ></vr-form-generator>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import { VRFormData } from 'vrwebdesign-nuxt/modules/nuxt-form-generator'
import quizAnswer from '@/components/quiz/quizAnswer.vue'
export default Vue.extend({
  data() {
    return {
      date: null,
      title: <any>'ایجاد کاربر جدید',
      loading: this.$route.params.id ? false : true,
      formData: <VRFormData>[],
      item: <any>{
        answers: []
      }
    }
  },
  async mounted() {
    if (this.$route.params.id != 'create') {
      this.item = await this.$service.user.$get(this.$route.params.id)
      this.title = `ویرایش کاربر {{name}} {{family}}`
    }
    this.formData = [
      {
        rows: [
          {
            label: 'نام',
            type: 'textField',
            validation: { required: true },
            placeholder: 'نام را به فارسی وارد نمایید',
            model: 'name'
          },
          {
            label: 'نام خانوادگی',
            type: 'textField',
            validation: { required: true },
            placeholder: 'نام خانوادگی را به فارسی وارد نمایید',
            model: 'family'
          },
          {
            label: 'موبایل',
            type: 'textField',
            validation: { required: true, mobile: true },
            placeholder: 'شماره موبایل را وارد نمایید',
            model: 'mobile'
          },
          {
            label: 'تلفن ثابت',
            type: 'textField',
            validation: { mobile: true },
            placeholder: 'شماره ثابت را وارد نمایید',
            model: 'tel'
          },
          {
            label: 'ایمیل',
            type: 'textField',
            validation: { email: true },
            placeholder: 'ایمیل را وارد نمایید',
            model: 'email'
          },
          {
            label: 'مرحله',
            type: 'textField',
            disabled: true,
            model: 'progress_level'
          },
          {
            label: 'جنسیت',
            type: 'radio',
            items: [
              { text: 'پسر', value: 'male' },
              { text: 'دختر', value: 'female', color: 'pink' }
            ],
            placeholder: 'شماره موبایل را وارد نمایید',
            model: 'gender'
          }
        ]
      }
    ]
  }
})
</script>
