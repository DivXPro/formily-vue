import { createForm } from '@formily/core';

let form;

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
      provideCache: {}
    };
  },
  provide() {
    return {
      getForm: () => form
    };
  },
  created() {
    form = createForm({
      initialValues: { id: 123, title: 'xxx' }
    });
  }
};
