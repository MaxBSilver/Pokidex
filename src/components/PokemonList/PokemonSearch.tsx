import { Search } from '@material-ui/icons';
import { createUseStyles } from 'react-jss';

interface PokemonSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export const PokemonSearch: React.FC<PokemonSearchProps> = ({
  value,
  onChange,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Search />
      <input
        type="text"
        autoFocus={true}
        className={classes.input}
        placeholder="Search Pokemon"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
const useStyles = createUseStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#131924',
    border: '1px solid #555',
    borderRadius: 8,
    padding: '10px 14px',
    maxWidth: 400,
    width: '100%',
    marginBottom: '24px',

    '&:focus-within': {
      borderColor: '#aaa',
    },
  },
  input: {
    flex: 1,
    backgroundColor: '#131924',
    border: 'none',
    outline: 'none',
    fontSize: '16px',
    '&::placeholder': {
      color: '#888',
    },
  },
});
