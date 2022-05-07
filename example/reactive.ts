import { Reactive, watch } from '../src/reactive';

// Declare
class DataModel {
  @Reactive
  public sample: any = { data: 2 };

  @Reactive
  public sample2: any = 3;

  public last: any;

  @Reactive
  static object_static: any = { data: 1 };
}

// Used
const sample = new DataModel();

const sample2 = new DataModel();

watch(
  () => sample.sample.value.data,
  (data: any) => {
    console.log(data);
  },
);

watch(
  () => sample2.sample.value.data,
  (data: any) => {
    console.log(data);
  },
);

watch(DataModel.object_static.value, (data: any) => {
  console.log('#', data);
});

// console.log('test');
sample.sample.value.data = 3;
sample2.sample.value.data = 4;
DataModel.object_static.value.data = 2;

// console.log(sample.sample.value.data);
// console.log(sample2.sample.value.data);
