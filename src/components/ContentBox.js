import { Grid } from '@material-ui/core';
import Item from './Item';

const ContentBox = () => {
	return (
		<Grid item xs={12} sm={8}>
			<Item
				title='Titulo'
				description='Description'
				price='R$10,00'
				type='unknown'></Item>
		</Grid>
	);
};

export default ContentBox;
