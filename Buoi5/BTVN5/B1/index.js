const express = require('express');

const Joi = require('Joi');

const app = express();

const mongoose = require('mongoose');

const CourseModel = require('./model/course.model');

const db = 'mongodb://localhost/course-example';

const port = 3004;

mongoose.connect(db);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Api working');
});

app.get('/course/:id', (req, res) => {
    CourseModel.findOne({
        _id: req.params.id
    }).exec((err, course) => {
        if (err) {
            res.send('Co loi xay ra');
        } else {
            res.json(course);
        }
    })
});

app.post('/course', (req, res) => {

    const course = new CourseModel();
    course.name = req.body.name;
    course.price = req.body.price;

    course.save((err, course) => {
        if (err) {
            res.send('Loi xay ra khi luu thong tin course');
        } else {
            res.send(course);
        }
    })
});

app.put('/course/:id', (req, res) => {
    CourseModel.findOneAndUpdate({
        _id: req.params.id
    },
        { $set: { name: req.body.name, price: req.body.price } },
        { upsert: true },
        (err, course) => {
            if (err) {
                console.log(err);
            } else {
                res.send('Da cap nhat thanh cong');
            }
        }
    )
});

app.delete('/course/:id', (req, res) => {
    CourseModel.findByIdAndRemove({
        _id: req.params.id
    }, (err, course) => {
        if (err) {
            console.log(err);
        } else {
            res.send('Da xoa thanh cong');
        }
    })
});

app.listen(port, () => {
    console.log('App listening on port: ', port);
});