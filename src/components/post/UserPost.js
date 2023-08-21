import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserNav from '../header/UserNav';
import { Box, Card, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

function UserPost() {
	const [userPost, setUserPosts] = useState([]);
	const [username, setUserName] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		fetchDataPost();
		fetchDataUsers();
	}, [id]);

	// useEffect(() => {
	// 	fetchDataUsers();
	// }, []);

	const fetchDataPost = async () => {
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/posts/${id}`
		);

		setUserPosts(response.data);
	};

	const fetchDataUsers = async () => {
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/users/${id}/`
		);
		setUserName(response.data);
	};

	return (
		<Box
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
				backgroundColor: '#f7f7f7',
			}}
		>
			<Box
				sx={{
					maxWidth: '600px',
					padding: '10px',
				}}
			>
				<Card
					sx={{
						backgroundColor: 'white',
						padding: '20px',
						boxShadow: '20px',
						borderRadius: '10px',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							width: '100%',
							marginBottom: '10px',
						}}
					>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'flex-start',
							}}
						>
							<Typography>
								<span style={{ fontWeight: 'bold' }}>Name:</span>{' '}
								{username.name}
							</Typography>
							<Typography>
								<span style={{ fontWeight: 'bold' }}>Phone:</span>{' '}
								{username.phone}
							</Typography>
						</Box>
						<Box>
							<Typography>
								<span style={{ fontWeight: 'bold' }}>Email:</span>{' '}
								{username.email}
							</Typography>
						</Box>
					</Box>
					<hr />
					<Box textAlign={'left'}>
						<Box sx={{ marginBottom: '10px', marginTop: '10px' }}>
							<Typography>
								{' '}
								<span style={{ fontWeight: 'bold' }}>Title:</span>{' '}
								{userPost.title}
							</Typography>
						</Box>
						<Box>
							<Typography>
								<span style={{ fontWeight: 'bold' }}>Body:</span>{' '}
								{userPost.body}
							</Typography>
						</Box>
					</Box>
				</Card>
			</Box>
		</Box>
	);
}

export default UserPost;
