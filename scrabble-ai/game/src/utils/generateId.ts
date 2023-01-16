import { nanoid } from 'nanoid/non-secure';

/**
 * Generates a random id with the provided length in A NON-SECURE way
 *
 * @param {number} [length] - The length of the generated id. Defaults to 6
 */
export const generateId = (length?: number) => nanoid(length || 6);
