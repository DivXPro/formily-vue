import { createForm } from '@formily/core';

export default {
  props: [
    'values',
    'defaultValues',
    'initialValues',
    'actions',
    'effects',
    'form',
    'onChange',
    'onSubmit',
    'onReset',
    'onValidateFailed',
    'children',
    'useDirty',
    'editable',
    'validateFirst'
  ],
  data() {
    return {
      formData: null,
      provideCache: {}
    };
  },
  provide() {
    return {
      getForm: () => this.formData
    };
  },
  created() {
    this.formData = createForm({
      initialValues: this.initialValues,
      values: this.values
    });
  }
};
