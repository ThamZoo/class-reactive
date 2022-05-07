import { useEffect, useReducer } from 'react';

import { watch } from '@vue/runtime-core';

// Decortor
export function useWatch(source: any, options?: any) {
  const forceUpdate = useReducer(() => ({}), {})[1] as () => void;

  useEffect(() => {
    const unMount = watch(source, forceUpdate, options);

    return unMount;
  }, []);

  return source;
}
