import { useNavigate } from "react-router-dom";

export default function Card(props) {
	const navigate = useNavigate();
	function Redirect() {
		if (props.name == "Add account") {
			navigate("/register");
		} else if (props.name == "Create order") {
			navigate("/createorder");
		} else if (props.name == "Classify Items") {
			navigate("/classifyitem");
		}
	}
	return (
		<div
			className="p-10 border-2 rounded-xl border border-sky-500 cursor-pointer m-5 hover:border-sky-300"
			onClick={() => Redirect()}
		>
			<h1 className="text-white text-2xl">{props.name}</h1>
		</div>
	);
}
