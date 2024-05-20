import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Form() {
	const [username, setUsername] = useState("");
	const [pwd, setPwd] = useState("");
	const [loginState, setLoginState] = useState(false);
	const navigate = useNavigate();
	const handleOnSubmit = async (e) => {
		e.preventDefault();
		let result = await fetch("http://localhost:5000/login", {
			method: "post",
			body: JSON.stringify({ username, pwd }),
			headers: {
				"Content-Type": "application/json",
			},
		});
		result = await result.json();
		console.warn(result);
		if (result) {
			setUsername("");
			setPwd("");
			console.log(result.role);
			switch (result.role) {
				case "Admin":
					navigate("/admin");
					break;
				case "Storage Staff":
					navigate("/storagestaff");
					break;
				case "Customer":
					navigate("/customer");
					break;
				// Add other role cases if needed
				default:
					// Handle other roles or unexpected values
					break;
			}
		}
	};
	return (
		<div>
			<div class="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
				<div class="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
					<h1 class="text-2xl font-bold text-center mb-4 dark:text-gray-200">
						Login
					</h1>
					<form action="#">
						<div class="mb-4">
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
								type="password"
								id="password"
								class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
								placeholder="Enter your password"
								required
								onChange={(e) => setPwd(e.target.value)}
							/>
						</div>
						<button
							type="submit"
							class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							onClick={handleOnSubmit}
						>
							Login
						</button>
						<div>
							<Link to="/register" className="text-white my-3">
								Register
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
