import { Grid } from '@material-ui/core';
import Item from './Item';

const ContentBox = ({ coinList }) => {
	return (
		<Grid item container xs={12} sm={8} spacing={2}>
			{coinList.map((coin) => {
				return (
					<Grid item xs={12}>
						<Item coin={coin} />
					</Grid>
				);
			})}
		</Grid>
	);
};

export default ContentBox;
