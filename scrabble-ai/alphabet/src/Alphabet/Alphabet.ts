/** The Symbol interface used to define symbols and their properties for a particular Alphabet */
export interface SymbolConfig {
  number: number;
  value: number;
}

/** The Alphabet interface used to set up scrabble-ai with different languages */
export type Alphabet = Record<string, SymbolConfig>;
