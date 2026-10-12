const express = require("express");
const cors = require("cors");

const healthRoutes = require("./routes/healthRoutes");
const designerRoutes = require("./routes/designerRoutes");

const app = express();
app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

app.use("/api", healthRoutes);
app.use("/api/designers", designerRoutes);

// Keep this after all route registrations.
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
