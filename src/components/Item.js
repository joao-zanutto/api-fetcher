import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

export default function Item({ title, description, type, price }) {
	const classes = useStyles();

	return (
		<Card className={classes.root} variant='outlined'>
			<CardContent>
				<Typography
					className={classes.title}
					color='textSecondary'
					gutterBottom>
					{title}
				</Typography>
				<Typography variant='h5' component='h2'>
					{description}
				</Typography>
				<Typography className={classes.pos} color='textSecondary'>
					{type}
				</Typography>
				<Typography variant='body2' component='p'>
					{price}
				</Typography>
			</CardContent>
		</Card>
	);
}
