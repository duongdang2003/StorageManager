import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateOrder() {
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [weight, setWeight] = useState("");
	const [from, setFrom] = useState("");
	const [destination, setDestination] = useState("");
	const [phone, setPhone] = useState("");
	const [receiverName, setReceiverName] = useState("");
	const [size, setSize] = useState("Small");
	const [kind, setKind] = useState("Regular items");
	const [status, setStatus] = useState(-1);

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		const orderID = (Math.floor(Math.random() * 999999) + 1).toString();
		const date = new Date();
		const createDate = (
			date.getDate() +
			"-" +
			(date.getMonth() + 1) +
			"-" +
			date.getFullYear()
		).toString();
		const cost = Math.floor(Math.random() * 40000) + 20000;
		const state = "new";
		const formData = {
			orderID,
			name,
			weight,
			size,
			date: createDate, // Include the date field here
			destination,
			cost,
			state,
			from,
			phone,
			receiverName,
			kind,
		};
		let result = await fetch("http://localhost:5000/createorder", {
			method: "post",
			body: JSON.stringify(formData),
			headers: {
				"Content-Type": "application/json",
			},
		});
		result = await result.json();
		if (result) {
			setStatus(1);
			console.log("success");
		} else {
			setStatus(0);
		}
	};

	return (
		<div>
			<div class="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
				<div class="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-5xl m-7">
					<h1 class="text-2xl font-bold text-center mb-4 dark:text-gray-200">
						Create Order
					</h1>
					<form action="#">
						<div class="mb-4 w-96">
							<label
								for="email"
								class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
							>
								Name
							</label>
							<input
								type="text"
								id="username"
								class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
								placeholder="Username"
								required
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div class="mb-4">
							<label
								for="password"
								class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
							>
								Weight
							</label>
							<input
								type="text"
								id="password"
								class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
								placeholder="Enter your password"
								required
								onChange={(e) => setWeight(e.target.value)}
							/>
						</div>
						<div class="mb-4">
							<label
								for="password"
								class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
							>
								From
							</label>
							<input
								type="text"
								id="password"
								class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
								placeholder="Enter your password"
								required
								onChange={(e) => setFrom(e.target.value)}
							/>
						</div>
						<div class="mb-4">
							<label
								for="password"
								class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
							>
								Destination
							</label>
							<input
								type="text"
								id="password"
								class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
								placeholder="Enter your password"
								required
								onChange={(e) => setDestination(e.target.value)}
							/>
						</div>
						<div class="mb-4">
							<label
								for="password"
								class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
							>
								Phone
							</label>
							<input
								type="text"
								id="password"
								class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
								placeholder="Enter your password"
								required
								onChange={(e) => setPhone(e.target.value)}
							/>
						</div>
						<div class="mb-4">
							<label
								for="password"
								class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
							>
								Receiver name
							</label>
							<input
								type="text"
								id="password"
								class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
								placeholder="Enter your password"
								required
								onChange={(e) => setReceiverName(e.target.value)}
							/>
						</div>

						<div className="mb-4">
							<div class="w-[150px] text-gray-900 dark:text-gray-100">
								<div class="relative w-full group">
									<label class="text-xs text-gray-400">Select Size</label>
									<button class="py-2.5 px-3 w-full md:text-sm text-site bg-transparent border border-dimmed  focus:border-brand focus:outline-none focus:ring-0 peer flex items-center justify-between rounded font-semibold">
										{size}
									</button>
									<div class="absolute z-[99] top-[100%] left-[50%] translate-x-[-50%] rounded-md overflow-hidden shadow-lg min-w-[200px] w-max peer-focus:visible peer-focus:opacity-100 opacity-0 invisible duration-200 p-1 bg-gray-100 dark:bg-gray-800  border border-dimmed text-xs md:text-sm">
										<div
											class=" w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md"
											onClick={(e) => setSize("Small")}
										>
											Small
										</div>
										<div
											class=" w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md"
											onClick={(e) => setSize("Medium")}
										>
											Medium
										</div>
										<div
											class=" w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md"
											onClick={(e) => setSize("Large")}
										>
											Large
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="mb-4">
							<div class="w-[150px] text-gray-900 dark:text-gray-100">
								<div class="relative w-full group">
									<label class="text-xs text-gray-400">Select Kind</label>
									<button class="py-2.5 px-3 w-full md:text-sm text-site bg-transparent border border-dimmed  focus:border-brand focus:outline-none focus:ring-0 peer flex items-center justify-between rounded font-semibold">
										{kind}
									</button>
									<div class="absolute z-[99] top-[100%] left-[50%] translate-x-[-50%] rounded-md overflow-hidden shadow-lg min-w-[200px] w-max peer-focus:visible peer-focus:opacity-100 opacity-0 invisible duration-200 p-1 bg-gray-100 dark:bg-gray-800  border border-dimmed text-xs md:text-sm">
										<div
											class=" w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md"
											onClick={(e) => setKind("Regular items")}
										>
											Regular items
										</div>
										<div
											class=" w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md"
											onClick={(e) => setKind("Same-day delivery")}
										>
											Same-day delivery
										</div>
										<div
											class=" w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md"
											onClick={(e) => setKind("Frigerated items")}
										>
											Frigerated items
										</div>
										<div
											class=" w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md"
											onClick={(e) => setKind("Fragile items")}
										>
											Fragile items
										</div>
									</div>
								</div>
							</div>
						</div>
						{status == 1 ? (
							<div className="text-green-400 mb-3">Create success</div>
						) : status == 0 ? (
							<div className="text-red-400 mb-3">Create failed</div>
						) : (
							<div></div>
						)}
						<button
							type="submit"
							class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							onClick={handleOnSubmit}
						>
							Register
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
