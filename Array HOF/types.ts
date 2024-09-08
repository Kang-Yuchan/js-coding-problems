declare global {
  interface Array<T> {
    customFilter(
      callbackFn: (value: T, index: number, array: T[]) => boolean,
      thisArg?: any
    ): T[];
  }
  interface Array<T> {
    customMap<U>(
      callbackFn: (value: T, index: number, array: Array<T>) => U,
      thisArg?: any
    ): Array<U>;
  }
}
