import { GetServerSidePropsContext, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';

export interface User {
	name: string;
}

export default async function getUserFrom(
	context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
): Promise<User | undefined> {
	const sessionId = context.req.cookies['sessionId'];
	if (!sessionId) return undefined;
	return { name: 'Juan Dela Cruz' };
}
