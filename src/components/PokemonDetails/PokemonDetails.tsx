import {
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';
import { createUseStyles } from 'react-jss';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetPokemonDetails } from '../../hooks/useGetPokemonDetails';
import { Loader } from '../Loader';
import { LabelValue } from './LabelValue';

export const PokemonDetailsDialog = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { id = '' } = useParams();
  const open = !!id;

  const handleClose = () => navigate('/pokemon');
  const { pokemon, loading } = useGetPokemonDetails(id);

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogTitle className={classes.dialogHeader}>
        <Typography variant="h6">Pokemon Details</Typography>
      </DialogTitle>
      <Divider />
      <DialogContent className={classes.dialogContent}>
        {loading ? (
          <Loader />
        ) : pokemon ? (
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5} className={classes.imageWrapper}>
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className={classes.image}
              />
            </Grid>
            <Grid item xs={12} sm={7}>
              <Typography variant="h4" gutterBottom>
                {pokemon.name}
              </Typography>

              <LabelValue label="Number">{parseInt(pokemon.number)}</LabelValue>
              <LabelValue label="Classification">
                {pokemon.classification}
              </LabelValue>
              <LabelValue label="Type">
                {pokemon.types.map((type) => (
                  <Chip
                    color="primary"
                    key={type}
                    label={type}
                    className={classes.typeChip}
                    size="small"
                  />
                ))}
              </LabelValue>
              <LabelValue label="Height">
                {pokemon.height.minimum} – {pokemon.height.maximum}
              </LabelValue>
              <LabelValue label="Weight">
                {pokemon.weight.minimum} – {pokemon.weight.maximum}
              </LabelValue>
              <LabelValue label="Resistant">
                {pokemon.resistant?.map((type) => (
                  <Chip
                    key={type.trim()}
                    label={type.trim()}
                    className={classes.typeChip}
                    size="small"
                    color="primary"
                  />
                )) ?? 'N/A'}
              </LabelValue>
              <LabelValue label="Weaknesses">
                {pokemon.weaknesses.map((type) => (
                  <Chip
                    key={type}
                    label={type}
                    className={classes.typeChip}
                    size="small"
                    color="secondary"
                  />
                ))}
              </LabelValue>
              <LabelValue label="Flee Rate">
                {`${(pokemon.fleeRate * 100).toFixed(2)}%`}
              </LabelValue>
              <LabelValue label="HP">
                {pokemon.maxHP.toLocaleString()}
              </LabelValue>
              <LabelValue label="CP">
                {pokemon.maxCP.toLocaleString()}
              </LabelValue>
            </Grid>
          </Grid>
        ) : (
          <Typography>Pokemon not found</Typography>
        )}
        <DialogActions className="dialogHeader">
          <Button onClick={handleClose} variant="outlined">
            Close
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

const useStyles = createUseStyles({
  dialogHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#131924',
  },
  dialogContent: {
    backgroundColor: '#131924',
    minHeight: 400,
  },
  imageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    backgroundColor: '#131924',
    borderRadius: 8,
    width: '100%',
    maxWidth: 250,
    objectFit: 'contain',
  },
  typeChip: {
    margin: '0 4px',
  },
});
