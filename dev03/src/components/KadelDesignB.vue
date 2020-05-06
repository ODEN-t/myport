<template>
  <div class="p-mainBlock__wrap p-mainBlock--design__wrap">
    <div class="p-mainBlock__content p-mainBlock--design__content">
      <div class="p-mainBlock__textBlock p-mainBlock--design__textBlock">
        <h3 class="p-mainBlock__concept for-sp">
          繊細な住宅設計
        </h3>
        <p class="p-mainBlock__detail">
          「暮らしやすい間取り」「快適な家事動線」綿密なヒアリングをもとに実際の暮らしをしっかりと配慮し、ご家族の笑顔であふれる快適な住まいを設計いたします。
        </p>
      </div>
      <ul
        class="p-mainBlock__scrollImage p-mainBlock__imageBlock p-mainBlock--design__imageBlock"
      >
        <li
          v-for="imageSet in kadel.images.design.slideBlockB"
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
  name: 'tab-designB',
  data() {
    return {
      kadel: kadelData
    };
  }
};
</script>
