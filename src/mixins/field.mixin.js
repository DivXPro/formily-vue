export default {
  inject: ['getForm'],
  props: ['x-component', 'path', 'name'],
  computed: {
    form() {
      return this.getForm();
    },
    mutators() {
      return this.field ? this.form.createMutators(this.field) : {};
    }
    // value() {
    //   return this.field
    //     ? this.field.state.value || this.field.state.values
    //     : null;
    // }
  },
  data() {
    return {
      field: null,
      inputValue: null
    };
  },
  created() {
    this.field = this.form['registerField']({
      path: this.path,
      name: this.name
    });
  },
  methods: {
    handleChange() {
      console.log('setState fn', this.field.setState);
      this.field.setState(state => {
        console.log('state', state);
        state.value = 'xxx';
      });
      // if (typeof this.mutators.change === 'function') {
      //   this.mutators.change('xxx');
      // }
    },
    handleBlur() {
      return this.mutators['blur'] ? this.mutators['blur']() : undefined;
    },
    handleFocus() {
      return this.mutators['focus'] ? this.mutators['focus']() : undefined;
    }
  }
};
