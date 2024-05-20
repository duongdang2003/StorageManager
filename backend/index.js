// Code  for mongoose config in backend
// Filename - backend/index.js

// To connect with your mongoDB database
const mongoose = require("mongoose");
mongoose.connect(
	"mongodb://localhost:27017/",
	{
		dbName: "storage_manager",
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	(err) =>
		err ? console.log(err) : console.log("Connected to yourDB-name database")
);

// Schema for users of app
const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	pwd: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		required: true,
	},
});
const OrderScheme = new mongoose.Schema({
	orderID: {
		type: String,
		required: true,
		unique: true,
	},
	name: {
		type: String,
		required: true,
	},
	weight: {
		type: Number,
		required: true,
	},
	size: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
	destination: {
		type: String,
		required: true,
	},
	cost: {
		type: Number,
		required: true,
	},
	state: {
		type: String,
		required: true,
	},
	from: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	receiverName: {
		type: String,
		required: true,
	},
	kind: {
		type: String,
		required: true,
	},
});
const User = mongoose.model("users", UserSchema);
const Order = mongoose.model("orders", OrderScheme);

User.createIndexes();

// For backend and express
const express = require("express");
const app = express();
const cors = require("cors");
const { type } = require("@testing-library/user-event/dist/type");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {
	resp.send("App is Working");
});

app.post("/register", async (req, resp) => {
	try {
		const user = new User(req.body);
		let result = await user.save();
		result = result.toObject();
		if (result) {
			delete result.pwd;
			resp.send(req.body);
			console.log(result);
		} else {
			console.log("User already register");
		}
	} catch (e) {
		resp.send(false);
	}
});

// Login endpoint
app.post("/login", async (req, resp) => {
	try {
		const { username, pwd } = req.body;
		const user = await User.findOne({ username, pwd });
		if (user) {
			// If user found, return success message and role
			resp.send({ message: "Login successful!", role: user.role });
		} else {
			resp.status(401).send("Invalid credentials");
		}
	} catch (e) {
		resp.status(500).send("Something Went Wrong");
	}
});

// create order
app.post("/createorder", async (req, resp) => {
	try {
		const order = new Order(req.body);
		let result = await order.save();
		result = result.toObject();
		resp.send(true);
	} catch (e) {
		resp.send(e);
	}
});

app.get("/getorders", async (req, res) => {
	console.log("get all order");
	try {
		// Query the database to find all orders
		const allOrders = await Order.find({});

		// Return the orders as JSON response
		console.log(allOrders);
		res.json(allOrders);
	} catch (error) {
		// If an error occurs, send an error response
		res.status(500).json({ error: "Internal server error" });
	}
});
app.put("/editorder/:orderID", async (req, resp) => {
	try {
		const orderID = req.params.orderID;
		const updateData = req.body;

		// Find the order by its ID and update it with the new data
		const updatedOrder = await Order.findOneAndUpdate(
			{ _id: orderID },
			updateData,
			{ new: true } // This option returns the updated document
		);

		if (updatedOrder) {
			resp.json({ message: "Order updated successfully", order: updatedOrder });
		} else {
			resp.status(404).json({ error: "Order not found" });
		}
	} catch (e) {
		resp.status(500).json({ error: "Something went wrong", details: e });
	}
});
app.delete("/deleteorder/:orderID", async (req, resp) => {
	const { orderID } = req.params;

	try {
		const deletedOrder = await Order.findOneAndDelete({ orderID });
		if (deletedOrder) {
			resp.json({ message: "Order deleted successfully" });
		} else {
			resp.status(404).json({ error: "Order not found" });
		}
	} catch (e) {
		resp.status(500).json({ error: "Internal server error" });
	}
});
app.listen(5000);
