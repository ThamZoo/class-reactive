import { Reactive, watch } from '../src/reactive';

class DataModel {
  @Reactive
  public object: any = { data: 1 };

  @Reactive
  public primmitive: any = 1;

  @Reactive
  static object_static: any = { data: 1 };
}

const model = new DataModel();

const model2 = new DataModel();

test('expect object', () => {
  watch(
    () => model.object.value.data,
    (data: any) => expect(data).toBe(2),
  );

  model.object.value.data = 2;
});

test('expect value', () => {
  watch(
    () => model.primmitive.value,
    (data: any) => expect(data).toBe(2),
  );

  model.primmitive.value = 2;
});

test('expect different instance', () => {
  expect(model).not.toBe(model2);
});

test('expect object', () => {
  watch(
    () => DataModel.object_static.value.data,
    (data: any) => expect(data).toBe(2),
  );

  DataModel.object_static.value.data = 2;
});
