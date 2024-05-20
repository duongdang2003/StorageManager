import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export default function EditOrder(props) {
	const navigate = useNavigate();
	const location = useLocation();
	console.log(location.state.receiverName);

	const [name, setName] = useState(location.state.name);
	const [weight, setWeight] = useState(location.state.weight);
	const [from, setFrom] = useState(location.state.from);
	const [destination, setDestination] = useState(location.state.destination);
	const [phone, setPhone] = useState(location.state.phone);
	const [receiverName, setReceiverName] = useState(location.state.receiverName);
	const [size, setSize] = useState(location.state.size);
	const [kind, setKind] = useState(location.state.kind);
	const [status, setStatus] = useState(-1);
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		const orderID = location.state.orderID;
		const createDate = location.state.date;
		const cost = location.state.cost;
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
		console.log(orderID);
		let result = await fetch(
			`http://localhost:5000/editorder/${location.state._id}`,
			{
				method: "PUT",
				body: JSON.stringify(formData),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		result = await result.json();
		console.log(result);
		console.log(result.status);

		if (result) {
			setStatus(1);
			console.log("update success");
		} else {
			setStatus(0);
		}
	};
	const handleDelete = async () => {
		let result = await fetch(
			`http://localhost:5000/deleteorder/${location.state._id}`,
			{
				method: "DELETE",
			}
		);
		result = await result.json();
		if (result.message) {
			console.log("Delete success");
			navigate("/classifyitem"); // Redirect to orders list or another appropriate page
		} else {
			console.log("Delete failed");
		}
	};

	return (
		<div>
			<div class="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
				<div class="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-5xl m-7">
					<h1 class="text-2xl font-bold text-center mb-4 dark:text-gray-200">
						Edit Order
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
								value={name}
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
								value={weight}
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
								value={from}
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
								value={destination}
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
								value={phone}
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
								value={receiverName}
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
							<div className="text-green-400 mb-3">Update success</div>
						) : status == 0 ? (
							<div className="text-red-400 mb-3">Update failed</div>
						) : (
							<div></div>
						)}
						<button
							type="submit"
							class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							onClick={handleOnSubmit}
						>
							Update
						</button>
						<div
							onClick={handleOpen}
							class="w-full cursor-pointer flex justify-center my-3 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							Delete order
						</div>
						<div>
							<Modal
								open={open}
								onClose={handleClose}
								aria-labelledby="modal-modal-title"
								aria-describedby="modal-modal-description"
							>
								<div
									class="w-full fixed top-20 left-1/4 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
									role="dialog"
									aria-modal="true"
									aria-labelledby="modal-headline"
								>
									<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
										<div class="sm:flex sm:items-start">
											<div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
												<svg
													width="64px"
													height="64px"
													class="h-6 w-6 text-red-600"
													fill="none"
													viewBox="0 0 24.00 24.00"
													xmlns="http://www.w3.org/2000/svg"
													stroke="#ef4444"
													stroke-width="0.45600000000000007"
												>
													<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
													<g
														id="SVGRepo_tracerCarrier"
														stroke-linecap="round"
														stroke-linejoin="round"
													></g>
													<g id="SVGRepo_iconCarrier">
														<path
															d="M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V8C11.25 7.58579 11.5858 7.25 12 7.25Z"
															fill="#ef4444"
														></path>
														<path
															d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z"
															fill="#ef4444"
														></path>
														<path
															fill-rule="evenodd"
															clip-rule="evenodd"
															d="M8.2944 4.47643C9.36631 3.11493 10.5018 2.25 12 2.25C13.4981 2.25 14.6336 3.11493 15.7056 4.47643C16.7598 5.81544 17.8769 7.79622 19.3063 10.3305L19.7418 11.1027C20.9234 13.1976 21.8566 14.8523 22.3468 16.1804C22.8478 17.5376 22.9668 18.7699 22.209 19.8569C21.4736 20.9118 20.2466 21.3434 18.6991 21.5471C17.1576 21.75 15.0845 21.75 12.4248 21.75H11.5752C8.91552 21.75 6.84239 21.75 5.30082 21.5471C3.75331 21.3434 2.52637 20.9118 1.79099 19.8569C1.03318 18.7699 1.15218 17.5376 1.65314 16.1804C2.14334 14.8523 3.07658 13.1977 4.25818 11.1027L4.69361 10.3307C6.123 7.79629 7.24019 5.81547 8.2944 4.47643ZM9.47297 5.40432C8.49896 6.64148 7.43704 8.51988 5.96495 11.1299L5.60129 11.7747C4.37507 13.9488 3.50368 15.4986 3.06034 16.6998C2.6227 17.8855 2.68338 18.5141 3.02148 18.9991C3.38202 19.5163 4.05873 19.8706 5.49659 20.0599C6.92858 20.2484 8.9026 20.25 11.6363 20.25H12.3636C15.0974 20.25 17.0714 20.2484 18.5034 20.0599C19.9412 19.8706 20.6179 19.5163 20.9785 18.9991C21.3166 18.5141 21.3773 17.8855 20.9396 16.6998C20.4963 15.4986 19.6249 13.9488 18.3987 11.7747L18.035 11.1299C16.5629 8.51987 15.501 6.64148 14.527 5.40431C13.562 4.17865 12.8126 3.75 12 3.75C11.1874 3.75 10.4379 4.17865 9.47297 5.40432Z"
															fill="#ef4444"
														></path>
													</g>
												</svg>
											</div>
											<div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
												<h3
													class="text-lg leading-6 font-medium text-gray-900"
													id="modal-headline"
												>
													{" "}
													Delete Item{" "}
												</h3>
												<div class="mt-2">
													<p class="text-sm text-gray-500">
														{" "}
														Are you sure you want to delete{" "}
														<span class="font-bold">Sample Item</span>? This
														action cannot be undone.{" "}
													</p>
												</div>
											</div>
										</div>
									</div>
									<div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
										<button
											type="button"
											class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
											onClick={handleDelete}
										>
											{" "}
											Delete{" "}
										</button>
										<button
											type="button"
											class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
											onClick={handleClose}
										>
											{" "}
											Cancel{" "}
										</button>
									</div>
								</div>
							</Modal>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
