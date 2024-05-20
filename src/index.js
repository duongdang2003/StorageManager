import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MainMenu from "./components/MainMenu";
import StorageStaff from "./components/StorageStaff";
import Form from "./components/Form";
import LoginForm from "./components/LoginForm";
import Admin from "./components/Admin";
import Customer from "./components/Customer";
import CreateOrder from "./components/CreateOrder";
import ClassifyItem from "./components/ClassifyItem";
import EditOrder from "./components/EditOrder";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<App />} />
					<Route path="register" element={<Form />} />
					<Route path="customer" element={<Customer />} />
					<Route path="admin" element={<Admin />} />
					<Route path="classifyitem" element={<ClassifyItem />} />
					<Route path="createorder" element={<CreateOrder />} />
					<Route path="editorder" element={<EditOrder />} />
					<Route path="login" element={<LoginForm />} />
					<Route path="storageStaff" element={<StorageStaff />} />
					<Route path="*" />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
