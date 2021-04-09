import { defineComponent } from 'vue';
import './foo.css';

export const Foo = defineComponent({
  name: 'Foo',
  setup() {
    return () => <div class="jsx">from TSX</div>;
  }
});
