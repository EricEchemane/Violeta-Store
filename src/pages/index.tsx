import Icon from '@/components/Icon';
import getUserFrom, { User } from '@/contants/getUserFromSession';
import { Container, Title, Text, Button, Stack, Paper } from '@mantine/core';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

export default function Home({ user }: { user: User }) {
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
						<Text> {JSON.stringify(user, null, 4)} </Text>
						<Button leftIcon={<Icon name='save' />}>Say Hi</Button>
					</Stack>
				</Paper>
			</Container>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const user = await getUserFrom(context);
	if (!user) return { redirect: { destination: '/login', permanent: false } };
	return { props: { user } };
};
