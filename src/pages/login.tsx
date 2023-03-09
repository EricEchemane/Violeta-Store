import { Button, Container, Stack, Title } from '@mantine/core';
import React from 'react';

async function login() {
	const res = await fetch('/api/user', {
		method: 'post',
		credentials: 'include',
	});
	if (res.status === 200) window.location.href = '/';
}

export default function Login() {
	return (
		<Container>
			<Stack align={'flex-start'}>
				<Title> Login </Title>
				<Button onClick={login}> Login </Button>
			</Stack>
		</Container>
	);
}
