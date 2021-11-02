const express = require('express');

const router = express.Router();

const likeController = require('../controllers/like.controller');

//like 1 câu hỏi
router.post('/likequestion', likeController.like_question);

//like 1 câu trả lời
router.post('/likeanswer', likeController.like_answer);

// lấy số like của một câu trả lời
router.get('/countlikedanswer', likeController.count_liked_answer);

//lấy số like của một câu hỏi
router.get('/countlikedquestion', likeController.count_liked_question);

//unlike 1 câu hỏi
router.delete('/unlikequestion', likeController.unlike_question);

//unlike 1 câu hỏi
router.delete('/unlikeanswer', likeController.unlike_answer);

module.exports = router;