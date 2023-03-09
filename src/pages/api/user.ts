import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
	switch (req.method?.toLowerCase()) {
		case 'post':
			res.setHeader(
				'Set-Cookie',
				`sessionId=jas8dyasudasidas8767as6d; Path=/; Max-Age=${3600}; Secure; HttpOnly`
			);
			res.status(200).end();
			break;

		default:
			res.status(405).end();
			break;
	}
}
