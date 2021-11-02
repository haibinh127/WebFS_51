const express = require('express');

const router = express.Router();

const answerController = require('../controllers/answer.controller');

//tạo 1 câu trả lời
router.post('/create', answerController.create_answer);

//lấy tất cả các answer của một câu hỏi
router.get('/:question_id', answerController.get_answers);

//xóa 1 câu trả lời
router.delete('/:id', answerController.delete_answer);

module.exports = router;