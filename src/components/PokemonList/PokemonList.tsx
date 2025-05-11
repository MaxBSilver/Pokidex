import { Container, Grid } from '@material-ui/core';
import { useMemo, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useGetPokemons } from '../../hooks/useGetPokemons';
import { Loader } from '../Loader';
import { PokemonCard } from './PokemonCard';
import { PokemonSearch } from './PokemonSearch';

export const PokemonList = () => {
  const classes = useStyles();
  const { pokemons, loading } = useGetPokemons();
  const [search, setSearch] = useState('');

  const filteredPokemons = useMemo(() => {
    const searchTerm = search.toLowerCase();
    return pokemons.filter((pkmn) =>
      pkmn.name.toLowerCase().includes(searchTerm)
    );
  }, [search, pokemons]);

  return (
    <Container className={classes.root}>
      <PokemonSearch value={search} onChange={setSearch} />
      {loading ? (
        <Loader />
      ) : (
        <Grid container spacing={5}>
          {filteredPokemons.map((pkmn) => (
            <Grid item key={pkmn.id} xs={12} sm={6} md={4}>
              <PokemonCard pokemon={pkmn} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

const useStyles = createUseStyles(
  {
    root: {
      minWidth: '100%',
      textAlign: 'center',
      padding: '32px',
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'center',
    },
  },
  { name: 'PokemonList' }
);
