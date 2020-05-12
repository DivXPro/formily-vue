<template>
  <el-form-item :label="name">
    <!-- <el-input :value="value" @input="handleChange" /> -->
    <el-button @click="handleChange('xxx')">do</el-button>
  </el-form-item>
</template>

<script>
import fieldMixin from '../mixins/field.mixin';

export default {
  name: 'Field',
  mixins: [fieldMixin]
};
</script>
