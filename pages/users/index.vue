<style lang="scss"></style>

<template>
  <section ref="wrapper">
    <v-card>
      <vr-data-grid
        :headers="headers"
        :title="title"
        :service="$service.user"
        :filters="filters"
        :withRecycle="true"
      >
        <template #items="{item}">
          <td>{{ item.id }}</td>
          <td>{{ item.name || '-' }}</td>
          <td>{{ item.family || '-' }}</td>
          <td>{{ item.mobile || '-' | persianDigit }}</td>
          <td class="text-xs-center">
            <template v-if="item.progress_level">
              <v-progress-linear color="cyan" :value="item.progress_level/11*100"></v-progress-linear>
              {{ Math.ceil(item.progress_level/11*100) | persianDigit }} ٪
            </template>
            <template v-else>-</template>
          </td>
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
        text: 'لیست کاربران',
        icon: 'la-users'
      },
      filters: [
        {
          label: 'ایدی',
          model: 'id:='
        },
        {
          label: 'نام',
          model: 'name'
        },
        {
          label: 'نام خانوادگی',
          model: 'family'
        },
        {
          label: 'شماره موبایل',
          model: 'mobile'
        }
      ],
      headers: [
        {
          text: 'آیدی',
          align: 'right',
          value: 'id',
          width: '10%'
        },
        {
          text: 'نام',
          align: 'right',
          value: 'name',
          width: '10%'
        },
        {
          text: 'نام خانوادگی',
          align: 'right',
          value: 'family',
          width: '10%'
        },
        {
          text: 'شماره موبایل',
          align: 'right',
          value: 'mobile',
          width: '10%'
        },
        {
          text: 'مرحله',
          align: 'center',
          value: 'progress_level',
          width: '10%'
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
