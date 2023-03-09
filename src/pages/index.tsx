import Icon from '@/components/Icon';
import { Container, Title, Text, Button, Stack, Paper } from '@mantine/core';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Violeta Store</title>
				<meta
					name='description'
					content='Product Inventory of our sari-sari store'
				/>
			</Head>

			<Container py={'lg'}>
				<Paper
					p={'lg'}
					radius={'md'}
				>
					<Stack align={'flex-start'}>
						<Title> Hello, World!</Title>
						<Text> From Eric Echemane</Text>
						<Button leftIcon={<Icon name='save' />}>Say Hi</Button>
					</Stack>
				</Paper>
			</Container>
		</>
	);
}
