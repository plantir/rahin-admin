<style lang="scss"></style>

<template>
  <section ref="wrapper">
    <v-card>
      <vr-data-grid
        :headers="headers"
        :title="title"
        :service="$service.blog"
        :filters="filters"
        :withRecycle="true"
      >
        <template #items="{item}">
          <td>{{ item.id }}</td>
          <td class="text-xs-center py-2">
            <v-avatar size="100" color="grey lighten-4">
              <img v-if="item.cover" :src="item.cover" />
            </v-avatar>
          </td>
          <td>{{ item.title || '-' }}</td>
          <td>{{ item.subtitle || '-' }}</td>
          <td class="text-xs-center">{{ item.created_at | persianDate | persianDigit }}</td>
        </template>
      </vr-data-grid>
    </v-card>
  </section>
</template>
<script>
export default {
  data() {
    return {
      title: {
        text: 'لیست مقاله ها',
        icon: 'la-blog'
      },
      filters: [
        {
          label: 'ایدی',
          model: 'id:='
        },
        {
          label: 'عنوان',
          model: 'title'
        }
      ],
      headers: [
        {
          text: 'آیدی',
          align: 'right',
          value: 'id',
          width: '5%'
        },
        {
          text: 'عکس',
          align: 'center',
          sortable: false,
          width: '10%'
        },
        {
          text: 'عنوان',
          align: 'right',
          value: 'title',
          width: '10%'
        },
        {
          text: 'خلاصه',
          align: 'right',
          value: 'subtitle',
          width: '30%'
        },
        {
          text: 'تاریخ ایجاد',
          align: 'center',
          value: 'created_at',
          width: '10%'
        }
      ]
    }
  },
  async mounted() {}
}
</script>
