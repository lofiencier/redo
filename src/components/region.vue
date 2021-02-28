<template>
  <div>
    <Select v-for="(region, index) in regions" :key="'region-' + index" v-model="selected[index]" @change="value => onChange(value, index + 1)">
      <Option v-for="(division, i) in region" :key="'division-' + i" :arial-value="division.divisionId">
        {{ division.divisionName }}
      </Option>
    </Select>
  </div>
</template>

<script>
import ax from 'axios';
import Select from './select';
import Option from './option';
import qs from 'query-string';
const url = 'https://user-web-api.wanshifu.com/address/getDistrictList';

export default {
  data:() => ({
    regions: [],
    selected: []
  }),
  mounted(){
    this.getRegion();
  },
  methods:{
    onChange(regionId, next){
      this.getRegion(regionId, next);
    },
    async getRegion(regionId, next) {
      const { data }  = await ax.post(
        url, 
        { parentDivisionId: regionId }, 
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          transformRequest: (data) => qs.stringify(data)
        }
      );
      if(data.status == 1 && data.data && data.data.length != 0) {
        const replacement = !!this.selected[next - 1] ? 9999 : 0;
        this.regions.splice(next, replacement, data.data);
        this.selected.splice(next, 9999);
      }
    }
  },
  components: { 
    Select,
    Option
  },
  props: ['placeholders', 'values']
}
</script>

<style>

</style>