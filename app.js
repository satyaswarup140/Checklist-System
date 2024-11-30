const express = require("express");
const checklistRoutes = require("./routes/checklistRoutes"); // Adjust the path as necessary

const app = express();
const PORT = 4000;

// Middleware to parse JSON body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up view engine (if using EJS)
app.set("view engine", "ejs");

// Use the checklist routes
app.use("/checklist", checklistRoutes);

// Define a root route
app.get("/", (req, res) => {
    res.render("form"); // Render the form.ejs file
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
