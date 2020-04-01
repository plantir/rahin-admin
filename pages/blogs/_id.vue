<style lang="scss"></style>

<template>
  <section v-if="title">
    <vr-form-generator
      :title="title"
      :loading="loading"
      :item="item"
      :formData="formData"
      :service="$service.blog"
    ></vr-form-generator>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import { VRFormData } from 'vrwebdesign-nuxt/modules/nuxt-form-generator'
import quizAnswer from '@/components/quiz/quizAnswer.vue'
import CKeditor from '@/components/base/CKeditor/index.vue'
export default Vue.extend({
  data() {
    return {
      date: null,
      title: <any>'ایجاد مقاله جدید',
      loading: this.$route.params.id ? false : true,
      formData: <VRFormData>[],
      item: <any>{}
    }
  },
  async mounted() {
    if (this.$route.params.id != 'create') {
      this.item = await this.$service.blog.$get(this.$route.params.id)
      this.title = `ویرایش مقاله {{title}} `
    }
    this.formData = [
      {
        rows: [
          {
            label: 'عنوان',
            type: 'textField',
            validation: { required: true },
            placeholder: 'عنوان را به فارسی وارد نمایید',
            model: 'title'
          },
          {
            label: 'خلاصه',
            type: 'textField',
            validation: { required: true },
            placeholder: 'خلاصه را به فارسی وارد نمایید',
            model: 'subtitle'
          },
          {
            label: 'عکس',
            type: 'fileUpload',
            model: 'cover'
          },
          {
            label: 'محتوا',
            component: CKeditor,
            model: 'content'
          }
        ]
      }
    ]
  }
})
</script>
