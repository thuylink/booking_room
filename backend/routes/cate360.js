const express = require('express');
const path = require('path');

const router = express.Router();

// Định tuyến GET để trả về hình ảnh
router.get('/:imageName', (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = path.join(__dirname, '../public/uploads/category360', imageName);
  res.sendFile(imagePath);
});

module.exports = router;
