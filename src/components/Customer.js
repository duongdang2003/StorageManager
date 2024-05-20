import Card from "./Card";

export default function Customer() {
	return (
		<div class="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
			<div className="flex justify-between">
				<Card name="Create order" />
			</div>
		</div>
	);
}
