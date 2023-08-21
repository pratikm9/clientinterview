import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function UserNav() {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				backgroundColor: 'white',
				margin: '10px',
			}}
		>
			<h1>Pratik More</h1>{' '}
			<Link to={'/'} style={{ textDecoration: 'none' }}>
				<h2>Home</h2>
			</Link>
		</Box>
	);
}

export default UserNav;
