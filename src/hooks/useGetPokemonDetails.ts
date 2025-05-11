import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useMemo } from 'react';

export type PokemonDetail = {
  id: string;
  number: string;
  name: string;
  weight: {
    minimum: number;
    maximum: number;
  };
  height: {
    minimum: number;
    maximum: number;
  };
  classification: string;
  types: string[];
  resistant: string[];
  weaknesses: string[];
  fleeRate: number;
  maxCP: number;
  maxHP: number;
  image: string;
};

const GET_POKEMON_BY_ID = gql`
  query pokemon($id: String) {
    pokemon(id: $id) {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      weaknesses
      fleeRate
      maxCP
      maxHP
      image
    }
  }
`;

export const useGetPokemonDetails = (id: string) => {
  const { data, ...queryRes } = useQuery(GET_POKEMON_BY_ID, {
    variables: { id },
    skip: !id,
  });

  const pokemon: PokemonDetail = useMemo(
    () => data?.pokemon,
    [data]
  );

  return {
    pokemon,
    ...queryRes,
  };
};
