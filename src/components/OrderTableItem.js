import { Link } from "react-router-dom";

export default function OrderTableItem(props) {
	return (
		<Link to="/editorder" state={props.data}>
			<div className="grid grid-cols-12 gap-1 text-gray-200 bg-gray-900 px-5 py-5 m-2 items-center hover:bg-gray-600 rounded-md">
				{/* <div className="col-span-2">{props.orderID}</div> */}
				<div>{props.index}</div>
				<div>{props.name}</div>
				<div>{props.weight}</div>
				<div>{props.size}</div>
				<div>{props.date}</div>
				<div>{props.destination}</div>
				<div>{props.cost}</div>
				<div>{props.state}</div>
				<div>{props.from}</div>
				<div>{props.phone}</div>
				<div>{props.receiverName}</div>
				<div>{props.kind}</div>
			</div>
		</Link>
	);
}
