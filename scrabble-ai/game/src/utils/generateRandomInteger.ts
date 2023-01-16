/**
 * Generates a random integer between the provided min and max values
 *
 * @param {GenerateRandomIntegerParams} Params {
 *   min - The minium generated integer value. Defaults to 0,
 *   max - The maximum generated integer value,
 * }
 */
export const generateRandomInteger = ({
  min = 0,
  max,
}: {
  min?: number;
  max: number;
}): number => {
  const minRounded = Math.ceil(min);
  const maxRounded = Math.floor(max);
  return Math.floor(Math.random() * (maxRounded - minRounded + 1) + minRounded);
};
