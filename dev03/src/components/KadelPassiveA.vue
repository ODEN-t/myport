<template>
  <div class="p-mainBlock__wrap">
    <div class="p-mainBlock__content p-mainBlock--passive__content">
      <div class="p-mainBlock__textBlock p-mainBlock--passive__textBlock">
        <h3 class="p-mainBlock__concept for-sp">
          パッシブデザイン
        </h3>
        <p class="p-mainBlock__detail">
          パッシブデザインとは日本建築を下敷きにした自然のエネルギーを生かした建築計画で、目に見えない光や風・熱・空気をデザインすることで快適な暮らしを実現することができます。パッシブデザインを取り入れることで、地球環境だけでなく、大切なご家族の健康面にも効果的です。また、断熱性能が高い「環境共生住宅」では、部屋感の温度差がほとんどなく、冷暖房にかかるコストを大幅に削減できるなど家計への負担も軽減されるため、経済面にも非常に効果的です。
        </p>
        <figure>
          <img
            class="passiveImage"
            :src="require('@/' + kadel.images.passive.passiveFigure.img)"
            :alt="kadel.images.passive.passiveFigure.alt"
          />
        </figure>
      </div>
      <ul
        class="p-mainBlock__scrollImage p-mainBlock__imageBlock p-mainBlock--passive__imageBlock"
      >
        <li
          v-for="imageSet in kadel.images.passive.slideBlockA"
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
  name: 'tab-passiveA',
  data() {
    return {
      kadel: kadelData
    };
  }
};
</script>
