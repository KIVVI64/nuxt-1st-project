import express from "express";

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Main route
app.get("/api", (req, res) => {
  res.send(
    "Udaje dobrze napisane API? :) \n CurrentOrigin: " + req.headers.origin
  );
});

// Require API routes
//const templateRoutes = require('./src/routes/template.routes')
const clicksRoutes = require("./src/routes/clicks.routes");
const teacherRoutes = require("./src/routes/teacher.routes");
const teacherInfoRoutes = require("./src/routes/teacher-info.routes");
const teacherFactsRoutes = require("./src/routes/teacher-facts.routes");
const teacherCommentRoutes = require("./src/routes/teacher-comment.routes");
const pointRoutes = require("./src/routes/point.routes");
const schoolRoutes = require("./src/routes/school.routes");
const userRoutes = require("./src/routes/user.routes");

// using as middleware
app.use("/api/clicks", clicksRoutes);
app.use("/api/teacher", teacherRoutes);
app.use("/api/teacher_info", teacherInfoRoutes);
app.use("/api/teacher_facts", teacherFactsRoutes);
app.use("/api/teacher_comment", teacherCommentRoutes);
app.use("/api/point", pointRoutes);
app.use("/api/school", schoolRoutes);
app.use("/api/user", userRoutes);

// Non existing routes
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

// Handle errors
/*app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});*/

export default app;
