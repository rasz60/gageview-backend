const express   = require('express');
const router    = express.Router();
const menu      = require('../models/Menu');

// 메뉴 리스트 조회 (useYn : 'Y')
router.get("/", async (req, res) => {
  try {
    const data = await menu.find({ useYn: "Y"});
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
});

module.exports = router;