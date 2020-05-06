<template>
  <div class="p-mainBlock__wrap">
    <div class="p-mainBlock__content p-mainBlock--passive__content">
      <div class="p-mainBlock__textBlock p-mainBlock--passive__textBlock">
        <h3 class="p-mainBlock__concept for-sp">
          土地を活かす
        </h3>
        <p class="p-mainBlock__detail">
          家づくりとは、敷地を丁寧に読み解くところからはじまります。狭小地、三角地、傾斜地など、土地の個性を活かした住まいを設計いたします。また周辺環境を考慮し、堀や坪庭などを有効活用したプライバシーへの配慮、騒音、防犯などの対策も万全にしています。
        </p>
      </div>
      <ul
        class="p-mainBlock__scrollImage p-mainBlock__imageBlock p-mainBlock--passive__imageBlock"
      >
        <li
          v-for="imageSet in kadel.images.passive.slideBlockC"
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
  name: 'tab-passiveC',
  data() {
    return {
      kadel: kadelData
    };
  }
};
</script>
