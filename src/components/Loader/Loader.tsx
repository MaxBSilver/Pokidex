import { CircularProgress } from '@material-ui/core';
import React from 'react';
import { createUseStyles } from 'react-jss';

export const Loader: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.loaderWrapper}>
      <CircularProgress />
    </div>
  );
};

const useStyles = createUseStyles({
  loaderWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
});
