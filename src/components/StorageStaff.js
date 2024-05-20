import Card from "./Card";
export default function StorageStaff() {
	return (
		<div class="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
			<div className="flex justify-between">
				<Card name="Classify Items" />
				<Card name="Create order" />
			</div>
		</div>
	);
}
