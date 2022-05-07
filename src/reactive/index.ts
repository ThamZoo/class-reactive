import { reactive, ref, computed } from '@vue/reactivity';

import { watch } from '@vue/runtime-core';

export { watch, reactive, ref, computed };

export { useWatch } from './react';

// Decortor
export function Reactive(target: any, key: string) {
  const privatePropKey = Symbol(key);

  Reflect.defineProperty(target, key, {
    get(this: any) {
      return this[privatePropKey];
    },
    set(this: any, newValue: any) {
      const reActive = reactive({ value: newValue });

      this[privatePropKey] = reActive;
      return true;
    },
  });

  if (target[key] == null) {
    target[key] = {};
  }
}
