import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header = ({ titulo }) => {
	return (
		<div>
			<AppBar>
				<Toolbar>
					<Typography variant='h5'> {titulo} </Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
