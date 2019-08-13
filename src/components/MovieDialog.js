import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import CardMedia from '@material-ui/core/CardMedia';

import './MovieDialog.css';


export default class MovieDialog extends React.Component {
  render() {
  const {movie, handleClose} = this.props;
  let title = null;
  let content = null;

if (movie) {
      title = <DialogTitle id="form-dialog-title">{movie.title}</DialogTitle>;

      content = (
        <DialogContent>
          <DialogContentText>{movie.overview}</DialogContentText>
          <CardMedia
            className="movie-detail-image"
            image={`http://image.tmdb.org/t/p/w342${movie.poster_path}`}
            title={movie.title}
          />
          <TextField
            label="Released on"
            disabled
            value={movie.release_date}
            fullWidth
          />
          <TextField
            label="Popularity"
            disabled
            value={movie.popularity}
            fullWidth
          />
          <TextField
            label="Vote average"
            disabled
            value={movie.vote_average}
            fullWidth
          />
          <TextField
            label="Vote count"
            disabled
            value={movie.vote_count}
            fullWidth
          />
        </DialogContent>
      );
    }
  

  return (
      <Dialog
        open={!!movie}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        {title}
        {content}
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
}
}
