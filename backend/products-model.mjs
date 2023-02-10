// Import dependencies.
import mongoose from "mongoose";
import "dotenv/config";

// Connect based on the .env file parameters.
mongoose.connect(process.env.MONGODB_CONNECT_STRING, { useNewUrlParser: true });
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
  if (err) {
    res.status(500).json({ error: "500:Connection to the server failed." });
  } else {
    console.log(
      "Successfully connected to MongoDB Exercise collection using Mongoose."
    );
  }
});

// SCHEMA: Define the collection's schema.
const productSchema = mongoose.Schema({
  type: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  link:
  {
      data: Buffer,
      type: String,
      required: true
  },
  date: { type: Date, default: Date.now, required: true },
});

// Compile the model from the schema.
const Product= mongoose.model("Product", productSchema);

// RETRIEVE models *****************************************

const findNumberOfProducts = async (filter) => {
  const query = Product.countDocuments();
  return query.exec();
};

// Export our variables for use in the controller file.
export {
  findNumberOfProducts
};
