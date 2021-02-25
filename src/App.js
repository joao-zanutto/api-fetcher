import { Grid } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { apiKey } from './credentials';
import ContentBox from './components/ContentBox';
import Header from './components/Header';

const url = 'https://coinlib.io/api/v1/coinlist?key=';

function App() {
	const [coinList, setCoinList] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios.get(url + apiKey + '&pref=BRL').then((response) => {
			setCoinList(response.data.coins);
			setLoading(false);
		});
	}, []);

	return (
		<div className='App'>
			<Grid container direction='column' spacing={10}>
				<Grid item>
					<Header titulo='Casa de criptomoedas da vózinha' />
				</Grid>
				<Grid item container>
					<Grid item xs={0} sm={2} />
					{loading ? 'Carregando lista...' : <ContentBox coinList={coinList} />}

					<Grid item xs={0} sm={2} />
				</Grid>
			</Grid>
		</div>
	);
}
export default App;

//
