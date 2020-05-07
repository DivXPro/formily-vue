<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Form :initial-values="values" :schema="schema">
      <Field path="title" name="名称"></Field>
    </Form>
  </div>
</template>

<script>
import Form from './components/Form';
import Field from './components/Field';

export default {
  name: 'App',
  components: {
    Form,
    Field
  },
  computed: {
    values() {
      return {
        id: 123,
        title: 'abc'
      };
    },
    schema() {
      return {
        type: 'object',
        properties: {
          string: {
            type: 'string',
            title: 'String',
            'x-component': 'Input'
          }
        }
      };
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
