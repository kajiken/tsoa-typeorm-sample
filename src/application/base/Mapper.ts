export interface Mapper<Input, Output> {
  mapFrom(param: Omit<Input, 'id'>): Omit<Output, 'id' | 'created' | 'updated'>;
  mapTo(param: Output): Input;
}
