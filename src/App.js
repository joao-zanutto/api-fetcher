import { Grid } from '@material-ui/core';
import ContentBox from './components/ContentBox';
import Header from './components/Header';

function App() {
	return (
		<div className='App'>
			<Grid container direction='column' spacing={10}>
				<Grid item>
					<Header titulo='Casa da vózinha' />
				</Grid>
				<Grid item container>
					<Grid item xs={0} sm={2} />
					<ContentBox />
					<Grid item xs={0} sm={2} />
				</Grid>
			</Grid>
		</div>
	);
}
export default App;
