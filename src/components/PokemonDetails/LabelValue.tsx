import { Typography } from '@material-ui/core';
import React from 'react';
import { createUseStyles } from 'react-jss';

interface LabelValueProps {
  label: string;
  children: React.ReactNode;
}

export const LabelValue: React.FC<LabelValueProps> = ({ label, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="body1">
        <span className={classes.label}>{label}:</span>
      </Typography>
      {children}
    </div>
  );
};

const useStyles = createUseStyles({
  label: {
    fontWeight: 500,
    marginRight: 4,
    display: 'inline',
  },
  container: {
    marginBottom: 16,
    display: 'flex',
    alignItems: 'center',
  },
});
