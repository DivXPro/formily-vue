<template>
  <el-form>
    <slot></slot>
  </el-form>
</template>

<script>
import formMixin from '../mixins/form.mixin';

export default {
  name: 'Form',
  mixins: [formMixin]
};
</script>
