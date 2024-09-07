declare global {
  interface Array<T> {
    customFilter(
      callbackFn: (value: T, index: number, array: T[]) => boolean,
      thisArg?: any
    ): T[];
  }
}
