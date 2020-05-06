<template v-slot:designA>
  <div class="p-mainBlock__wrap p-mainBlock--design__wrap">
    <div class="p-mainBlock__content p-mainBlock--design__content">
      <div class="p-mainBlock__textBlock p-mainBlock--design__textBlock">
        <h3 class="p-mainBlock__concept for-sp">
          理想をかたちに
        </h3>
        <p class="p-mainBlock__detail">
          数多くの賞を受賞する建築デザイナーがお聞かせいただいたご家族のたくさんの想いとご希望を自由な設計とプラスアルファなご提案で理想の住まいへとかたちにいたします。
        </p>
      </div>
      <ul
        class="p-mainBlock__scrollImage p-mainBlock__imageBlock p-mainBlock--design__imageBlock"
      >
        <li
          v-for="imageSet in kadel.images.design.slideBlockA"
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
