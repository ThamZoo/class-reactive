# Class Reactive

Class Reactive is a utility library that endore multiple programing principles like (Separate of concern, DDD, reactive).

Design mainly for typescript decorator & react usage.

### Installation

```
  npm install class-reactive;
```

### Usages

```javascript

import { Reactive, watch } from 'class-reactive';

// Step 1 - Data model
class DataModel {
  @Reactive
  public dataObj: any = { a: 123 };

  @Reactive
  public dataVal: any = 3; // Support primitive value
}

const dataModel = new DataModel();

// use watch to watch for datachange, -- refer to watch in @vue-reactive
watch(() => dataModel.dataObj.value.a, function cb(change: any) {
  console.log(change)
})

dataModel.dataObj.value.a = 2; // this will trigger watch callback

```

### Other Usage

```javascript
// watch all element of object -- note you dont need function
watch(dataModel.dataObj.value, function cb(change: any) {
  console.log(change);
});

dataModel.dataObj.value.b = 2; // this will trigger watch callback if object change
```

### Compute Usage

```javascript
// watch if compute change
watch(
  () => dataModel.dataObj.value.a + dataModel.dataVal.value,
  function cb(total: any) {
    console.log(total);
  },
);

dataModel.dataObj.value.b = 2; // this will trigger watch if any of those 2 value change
```

### With React Hook

```javascript
import { useWatch } from 'class-reactive';

function Component() {
  useWatch(() => dataModel.dataObj.value.a);

  return <div>{dataModel.dataObj.value.a}</div>;
}

dataModel.dataObj.value.a = 2; // this will trigger Component re-render
```
