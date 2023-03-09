import Icon from '@/components/Icon';
import { Container, Title, Text, Button } from '@mantine/core';
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

			<Container>
				<Title> Hello, World!</Title>
				<Text> From Eric Echemane</Text>
				<Button leftIcon={<Icon name='save' />}>Say Hi</Button>
			</Container>
		</>
	);
}
