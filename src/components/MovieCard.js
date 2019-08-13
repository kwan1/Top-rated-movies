import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './MovieCard.css';
class MovieCard extends React.Component{
	selectMovie =() => {
		const {movie, selectMovie} = this.props;
		selectMovie(movie);
	};
	render()
	{
		const {movie} = this.props;

return (
      <Card className="movie-card">
        <CardMedia
          className="movie-image"
          image={`http://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
          title={movie.title}
        />
        <CardContent>
          <Typography variant="headline" component="h2">
            {movie.title}
          </Typography>
          <Typography component="p">{movie.overview}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={this.selectMovie}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
}
}

export default MovieCard;