<template>
  <div class="noties">
    <div class="tree">
      <div class="resourses-block">
        <div v-for="(resourse, i) in resources" :key="i" class="resourses">
          <div class="resourses-name">
            <span class="name">{{resourse.name}}</span>
            <div class="show" @click="resourse.show = !resourse.show" />
          </div>
          <div 
            v-for="(ress, i) in resourse.ress" :key="i" 
            :class="{ 'hide': !resourse.show }" class="resourses-set">
            <p class="name-ru">{{ress.name}}</p> 
            <p class="name-en">{{ress.nameEn}}</p>           
          </div>
        </div>
      </div>
    </div>
    
          <!-- <div class="resourses-count">
            <input type="number" v-model="resourse.count">
            <input type="checkbox" v-model="">
          </div> -->
  </div>
</template>

<script>
export default {
  data(){
    return {
      resources: [
        {
          type: 'complex',
          name: 'Сложные ресурсы',
          show: false,
          ress: [
            {
              count: 0,
              name: 'Метеоритный слиток',
              nameEn: 'starmetalIngot'
            },
            {
              count: 0,
              name: 'Стальной слиток',
              nameEn: 'stealIngot'
            },
          ]
        },
        {
          type: 'processed',
          name: 'Обработанные ресурсы',
          show: false,
          ress: [
            {
              count: 0,
              name: 'Железный слиток',
              nameEn: 'ironIngot'
            },
            {
              count: 0,
              name: 'Кожа',
              nameEn: 'leathers'
            },
            {
              count: 0,
              name: 'Ткань',
              nameEn: 'linen'
            },
            {
              count: 0,
              name: 'Древесный уголь',
              nameEn: 'charcoal'
            },
          ]
        },
        {
          type: 'row',
          name: 'Не обработанные ресурсы',
          show: false,
          ress: [
            {
              count: 0,
              name: 'Лён',
              nameEn: 'flux'
            },
            {
              count: 0,
              name: 'Ветки',
              nameEn: 'branches'
            },
            {
              count: 0,
              name: 'Метеоритная руда',
              nameEn: 'starmetalOre',
            },
            {
              count: 0,
              name: 'Железная руда',
              nameEn: 'ironOre'
            },
            {
              count: 0,
              name: 'Сыромятная кожа',
              nameEn: 'rawhide'
            },
            {
              count: 0,
              name: 'Волокно',
              nameEn: 'fiber'
            },
          ]
        }
      ]
    }
  },
  computed: {
    starmetalPlateGauntlets(){
      return []
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.show{
  cursor: pointer;
  border: 1px solid #333;
  padding: 1em;
}
.hide{
  display: none !important;
}
.resourses-block{
  background: #fff;
  width: 100%;
}
.resourses{
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 0 0.3em;
}
.resourses-set{
  width: 100%;
  padding: .2em;
  border-bottom: 1px solid #ccc;
}
.resourses-set > *{
  display: flex;
  font-weight: 600;
}
.resourses-set .name-ru{
  width: 100%;
  color: #333;
}
.resourses-set .name-en{
  padding: .2em;
  width: 100%;
  color: #b9b9b9;
}
.resourses-name{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4em 0;
  border-bottom: 1px solid #5c5c5c;
}
.resourses-name span{
  color: #333333;
  font-weight: 600;
  font-size: 1.2em;
  padding: 0.2em 0;
}
.resourses-name span:last-child{
  font-size: 1em;
}
.resourses-count{
  display: flex;
  align-items: flex-end;
  padding: 1em;
  width: 10%;
}
.resourses-count input{
  border: 1px solid #333;
  width: 100%;
  color: #333;
}
input[type='number']::-webkit-inner-spin-button{
  -webkit-appearance: none;
}
</style>