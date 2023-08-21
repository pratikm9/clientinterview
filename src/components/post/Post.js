import { Box, Button, Card } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../header/Navbar';

function Post() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const response = await axios.get(
			'https://jsonplaceholder.typicode.com/posts'
		);
		setPosts(response.data);
	};

	return (
		<div>
			<Box sx={{ backgroundColor: '#f7f7f7', marginTop: '20px' }}>
				{posts.map((post, id) => {
					return (
						<Card
							sx={{
								backgroundColor: 'white',
								padding: '10px',
								margin: '10px',
								textAlign: 'left',
							}}
							key={id}
						>
							<Button
								sx={{ color: 'black' }}
								variant="text"
								style={{ backgroundColor: 'transparent' }}
							>
								<Link
									to={`/posts/${post.id}`}
									style={{ textDecoration: 'none' }}
								>
									{post.title}
								</Link>
							</Button>
						</Card>
					);
				})}
			</Box>
		</div>
	);
}

export default Post;
