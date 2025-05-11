import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Typography,
} from '@material-ui/core';
import { createUseStyles } from 'react-jss';
import { useNavigate } from 'react-router-dom';
import { Pokemon } from '../../hooks/useGetPokemons';

interface PokemonCardProps {
  pokemon: Pokemon;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon,
}: {
  pokemon: Pokemon;
}) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const { name, image, number, types } = pokemon;

  const handleClick = (id: string) => {
    navigate(`/pokemon/${id}`);
  };

  return (
    <Card className={classes.root} elevation={10}>
      <CardActionArea onClick={() => handleClick(pokemon.id)}>
        <CardContent>
          <div className={classes.titleContainer}>
            <Typography variant="h6" className={classes.text}>
              {name}
            </Typography>
            <Avatar>{parseInt(number)}</Avatar>
          </div>
          <img className={classes.media} src={image} alt={`Image of ${name}`} />
          <div>
            {types.map((type) => (
              <Chip label={type} color="primary" className={classes.chip} />
            ))}
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const useStyles = createUseStyles(
  {
    root: {
      width: '100%',
      boxSizing: 'border-box',
      transition: 'transform 0.2s ease-in-out',
      '&:hover': {
        transform: 'scale(1.02)',
      },
    },
    media: {
      height: 160,
      width: '100%',
      objectFit: 'contain',
      marginBottom: '20px',
    },
    text: { color: '#131924' },
    titleContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    chip: { marginTop: '4px', marginLeft: '4px', backgroundColor: '' },
  },
  { name: 'PokemonCard' }
);
