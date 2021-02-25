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

export default function Item({ coin }) {
	const classes = useStyles();
	let color = 'green';
	if (coin.delta_24h < 0) color = 'red';

	return (
		<Card className={classes.root} variant='outlined'>
			<CardContent>
				<Typography
					className={classes.title}
					color='textSecondary'
					gutterBottom>
					{coin.name}
				</Typography>
				<Typography variant='h5' component='h2'>
					{coin.symbol}
				</Typography>
				<Typography className={classes.pos} color='textSecondary'>
					R$ {coin.price}
				</Typography>
				<Typography variant='body2' component='p'>
					Variação 24h
				</Typography>
				<Typography variant='body2' component='p' style={{ color: color }}>
					{coin.delta_24h} %
				</Typography>
			</CardContent>
		</Card>
	);
}
