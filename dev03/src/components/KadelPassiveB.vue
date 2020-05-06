<template>
  <div class="p-mainBlock__wrap">
    <div class="p-mainBlock__content p-mainBlock--passive__content">
      <div class="p-mainBlock__textBlock p-mainBlock--passive__textBlock">
        <h3 class="p-mainBlock__concept for-sp">
          四季と共に生きる
        </h3>
        <p class="p-mainBlock__detail">
          自然と共に暮らす環境共生住宅は、偏西風や太陽高度など、季節や時間によって変化する自然環境を利用した、夏涼冬暖で一年を通して快適な設計となっています。
        </p>
      </div>
      <ul
        class="p-mainBlock__scrollImage p-mainBlock__imageBlock p-mainBlock--passive__imageBlock"
      >
        <li
          v-for="imageSet in kadel.images.passive.slideBlockB"
          :key="imageSet.img"
        >
          <a :href="require('@/' + imageSet.modal)">
            <img :src="require('@/' + imageSet.img)" :alt="imageSet.alt" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import kadelData from '../assets/kadel.json';
export default {
  name: 'tab-passiveB',
  data() {
    return {
      kadel: kadelData
    };
  }
};
</script>
