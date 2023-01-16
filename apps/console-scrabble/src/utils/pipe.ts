export type PipeFunction<T> = (arg0: T) => T;

/**
 * A higher order function that allows piping data through a list of transforming functions.
 * Limitation - The functions must receive and return the same data type
 *
 * @template T - The type of the provided data
 * @param {T} value - The provided data to transform
 * @param {PipeFunction<T>[]} methods - A list of transforming functions
 * @param {number} [currentDepth] - Index of the transforming function to execute.
 * Used internally in recursive execution
 * @return {*} The provided data transformed by the provided function list
 */
export const pipe = <T>(
  value: T,
  methods: PipeFunction<T>[],
  currentDepth?: number,
): T => {
  const nextMethodIndex = currentDepth || 0;

  if (nextMethodIndex >= methods.length) {
    return value;
  }

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const nextMethod = methods[nextMethodIndex]!;

  return pipe(nextMethod(value), methods, nextMethodIndex + 1);
};
