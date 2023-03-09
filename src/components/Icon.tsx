type Props = { name: string };

export default function Icon({ name }: Props) {
	return <span className='material-symbols-outlined'>{name}</span>;
}
