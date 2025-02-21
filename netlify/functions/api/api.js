require('dotenv').config();
import serverless from "serverless-http";

const app = require("./app").default;

export const handler = serverless(app);
