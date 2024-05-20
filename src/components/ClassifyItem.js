import { useEffect, useState } from "react";
import OrderTableItem from "./OrderTableItem";
import { Link } from "react-router-dom";

export default function ClassifyItem() {
	const [orders, setOrders] = useState([]);
	const [isEditing, setEditing] = useState(false);
	const fetchOrders = async () => {
		try {
			// Make a GET request to the server endpoint that returns orders
			const response = await fetch("http://localhost:5000/getorders"); // Specify absolute URL

			// If the response is not successful, throw an error
			if (!response.ok) {
				throw new Error(`Failed to fetch orders: ${response.statusText}`);
			}

			// Parse the JSON response body
			const ordersResponse = await response.json(); // Parse the response as JSON

			// Log or process the received orders
			// setOrders(ordersResponse);
			setOrders((prevOrders) => [...prevOrders, ...ordersResponse]);
			console.log(orders);
		} catch (error) {
			// Handle errors
			console.error("Error fetching orders:", error.message);
		}
	};
	useEffect(() => {
		fetchOrders();
	}, []);
	useEffect(() => {
		console.log(orders); // Log orders whenever it changes
	}, [orders]); // Run this effect whenever orders changes
	return (
		<div class=" min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
			<div class="flex min-h-screen w-11/12 items-center justify-center">
				<div class="overflow-x-auto">
					<div className="grid grid-cols-12 gap-1 text-gray-100 bg-gray-800 px-5 py-5 m-2 items-center fixed">
						{/* <div className="col-span-2">{props.orderID}</div> */}
						<div className="font-bold">Index</div>
						<div className="font-bold">Name</div>
						<div className="font-bold">Weight</div>
						<div className="font-bold">Size</div>

						<div className="font-bold">Date</div>
						<div className="font-bold">Destination</div>
						<div className="font-bold">Cost</div>
						<div className="font-bold">State</div>
						<div className="font-bold">From</div>
						<div className="font-bold">Phone</div>
						<div className="font-bold">Receiver name</div>
						<div className="font-bold">Kind</div>
					</div>
					<div style={{ marginTop: "80px" }}>
						{orders.map((order, index) => (
							<OrderTableItem
								key={order.orderID}
								index={index + 1}
								orderID={order._id}
								name={order.name}
								weight={order.weight}
								size={order.size}
								date={order.date}
								destination={order.destination}
								cost={order.cost}
								state={order.state}
								from={order.from}
								phone={order.phone}
								receiverName={order.receiverName}
								kind={order.kind}
								data={order}
							/>
						))}
					</div>
				</div>
			</div>
			<div className="fixed text-white z-2 text-3xl right-2 bottom-10 px-4 py-2 bg-black rounded-full bg-gray-700 cursor-pointer">
				<Link to="/register">+</Link>
			</div>
		</div>
	);
}
