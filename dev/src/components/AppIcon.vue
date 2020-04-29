<template>
  <svg
    class="svg-icon"
    :class="styleClasses"
    viewBox="0 0 32 32"
  >
    <title>{{ title || name }}</title>
    <desc v-if="desc">{{ desc }}</desc>
    <path :d="path" />
  </svg>
</template>

<script>
import icons from '../assets/icons.json';

export default {
  name: 'AppIcon',
  props: {
    name: String,
    title: String,
    desc: String,
    size: String,
    color: String
  },
  computed: {
    path: function() {
      return icons[this.name];
    },
    styleClasses: function() {
      return [this.size, this.color].map(val => val && `is-${val}`); // array.prototype.map() arrayを加工して新しく返す && の使用法
    }
  },
};
</script>

<style>
/* default */
.svg-icon {
  width: 1.2em;
  height: 1.2em;
  fill: currentColor;
}

/* sizes */
.svg-icon.is-large {
  width: 2em;
  height: 2em;
}
.svg-icon.is-medium {
  width: 1.6em;
  height: 1.6em;
}
.svg-icon.is-normal {
  width: 1.2em;
  height: 1.2em;
}
.svg-icon.is-small {
  width: 1em;
  height: 1em;
}
.svg-icon.is-tiny {
  width: 0.8em;
  height: 0.8em;
}

/* colors */
.svg-icon.is-primary {
  fill: #d9376e;
}
</style>