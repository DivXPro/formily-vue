export default {
  inject: ['getForm'],
  props: ['x-component', 'path', 'name'],
  computed: {
    form() {
      return this.getForm();
    },
    mutators() {
      return this.field ? this.form.createMutators(this.field) : {};
    },
    value() {
      return this.field
        ? this.field.state.value || this.field.state.values
        : null;
    }
  },
  data() {
    return {
      field: null
    };
  },
  created() {
    this.field = this.form['registerField']({
      path: this.path,
      name: this.name
    });
  }
};
