const express = require('express');

const router = express.Router();

const Joi = require('joi');

const ComicModel = require('../model/comic');

const jwt = require('jsonwebtoken');

function comicValidate(comic) {
    var schema = Joi.object(
        {
            title: Joi.string().min(5).required(),
            author: Joi.string().min(10).required(),
        }
    )
    return schema.validate(comic);
}

router.get('/', (req, res) => {
    res.send('Server is running');
});

router.post('/comic', async (req, res) => {

    //comic validation
    const { error } = comicValidate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //check comic exist in db
    const titleExists = await ComicModel.findOne({ title: req.body.title });
    if (titleExists) return res.status(404).send('Comic is already created');

    //create new comic
    const newComic = new ComicModel();
    newComic.title = req.body.title;
    newComic.author = req.body.author;

    //return comic 
    try {

        const comic = await newComic.save();

        //4.generated token string
        var token = jwt.sign({ id: comic._id }, 'daylamacuaquyensachnay');

        //5.return token for user
        res.header('auth-token', token).send(token);
        

    } catch (error) {
        res.status(400).send(error);
    }

});

const checkBookToken = (req, res, next) => {

    const token = req.header('comic-token');

    if (!token) return res.status(401).send('Forbidden !!!');

    try {

        req.comic = jwt.verify(token, 'daylamacuaquyensachnay');

        next();

    } catch (error) {

        res.status(400).send('Token Incorrect');

    }
}

router.get('/comic/:id', checkBookToken, async (req, res) => {

    await ComicModel.findOne({ _id: req.params.id })
        .exec((err, comic) => {
            if (err) {
                res.send('Id not existed');
            } else {

                res.json(comic);

            }
        });

});

module.exports = router;