const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// mongoDB connect
mongoose
  .connect(process.env.MONGO_URI, {
    tlsAllowInvalidCertificates: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// /api/v1/* 요청 처리
const apiRoutes = require('./routes/_index');
app.use('/api/v1', apiRoutes);

// Port로 들어오는 요청 수신 설정
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
