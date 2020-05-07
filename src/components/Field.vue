<template>
  <el-form-item :label="name">
    <el-input
      :value="value"
      @change="mutators.change"
      @blue="mutators.blur"
      @focus="mutators.focus"
    />
  </el-form-item>
</template>

<script>
import fieldMixin from '../mixins/field.mixin';

export default {
  name: 'Field',
  mixins: [fieldMixin]
};
</script>
