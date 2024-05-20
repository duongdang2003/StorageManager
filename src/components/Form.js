import { useState } from "react";
import { Link } from "react-router-dom";

export default function Form() {
	const [username, setUsername] = useState("");
	const [pwd, setPwd] = useState("");
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [role, setRole] = useState("Admin");
	const [status, setStatus] = useState(-1);
	const handleOnSubmit = async (e) => {
		e.preventDefault();
		let result = await fetch("http://localhost:5000/register", {
			method: "post",
			body: JSON.stringify({ username, pwd, name, email, role }),
			headers: {
				"Content-Type": "application/json",
			},
		});
		result = await result.json();
		console.warn(result);
		if (result) {
			// alert("Data saved succesfully");
			setUsername("");
			setPwd("");
			setName("");
			setEmail("");
			setRole("Admin");
			setStatus(1);
		} else {
			setStatus(0);
		}
	};
	return (
		<div>
			<div class="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
				<div class="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-5xl">
					<h1 class="text-2xl font-bold text-center mb-4 dark:text-gray-200">
						Register
					</h1>
					<form action="#">
						<div class="mb-4 w-96">
							<label
								for="email"
								class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
							>
								Username
							</label>
							<input
								type="text"
								id="username"
								class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
								placeholder="Username"
								required
								onChange={(e) => setUsername(e.target.value)}
							/>
						</div>
						<div class="mb-4">
							<label
								for="password"
								class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
							>
								Password
							</label>
							<input
								type="text"
								id="password"
								class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
								placeholder="Enter your password"
								required
								onChange={(e) => setPwd(e.target.value)}
							/>
						</div>
						<div class="mb-4">
							<label
								for="password"
								class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
							>
								Name
							</label>
							<input
								type="text"
								id="password"
								class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
								placeholder="Enter your password"
								required
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div class="mb-4">
							<label
								for="password"
								class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
							>
								Email
							</label>
							<input
								type="text"
								id="password"
								class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
								placeholder="Enter your password"
								required
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>

						<div className="mb-4">
							<div class="w-[150px] text-gray-900 dark:text-gray-100">
								<div class="relative w-full group">
									<label class="text-xs text-gray-400">Select Role</label>
									<button class="py-2.5 px-3 w-full md:text-sm text-site bg-transparent border border-dimmed  focus:border-brand focus:outline-none focus:ring-0 peer flex items-center justify-between rounded font-semibold">
										{role}
									</button>
									<div class="absolute z-[99] top-[100%] left-[50%] translate-x-[-50%] rounded-md overflow-hidden shadow-lg min-w-[200px] w-max peer-focus:visible peer-focus:opacity-100 opacity-0 invisible duration-200 p-1 bg-gray-100 dark:bg-gray-800  border border-dimmed text-xs md:text-sm">
										<div
											class=" w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md"
											onClick={(e) => setRole("Admin")}
										>
											Admin
										</div>
										<div
											class=" w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md"
											onClick={(e) => setRole("Storage Staff")}
										>
											Storage Staff
										</div>
										<div
											class=" w-full block cursor-pointer hover:bg-white dark:hover:bg-gray-900 dark:bg-gray-800 hover:text-link px-3 py-2 rounded-md"
											onClick={(e) => setRole("Customer")}
										>
											Customer
										</div>
									</div>
								</div>
							</div>
						</div>
						{status == 1 ? (
							<div className="text-green-400 mb-3">Register success</div>
						) : status == 0 ? (
							<div className="text-red-400 mb-3">Register failed</div>
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
						<div>
							<Link to="/login" className="text-white">
								Login
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
