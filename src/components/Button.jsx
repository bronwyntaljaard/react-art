export default function Button({ children, ...props }) {
	return (
		<button
			className="px-4 py-2 font-semibold rounded uppercase text-stone-900 bg-amber-400 hover:bg-amber-500"
			{...props}
		>
			{children}
		</button>
	);
}
