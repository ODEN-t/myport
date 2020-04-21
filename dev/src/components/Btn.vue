<template>
    <button @click="_handleCount">
        Count <slot></slot>!
    </button>
</template>

<script>
export default {
    methods: {
        _handleCount() {
            this.$emit("handleCount");
        }
    }
}
</script>
<style scoped>
.button {
  color: red;
}
</style>>