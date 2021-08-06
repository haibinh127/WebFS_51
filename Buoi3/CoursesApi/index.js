const Joi = require('Joi');

const express = require('express');

const app = express();

app.use(express.json());

const courses = [
    { id: '1', name: 'C4EJS', price: 2000000 },
    { id: '2', name: 'Code Intensive', price: 3000000 },
    { id: '3', name: 'Web Fullstack', price: 4000000 }
]

app.get('/api/course', function (req, res) {

    res.send(courses);

});

app.post('/api/course', function (req, res) {

    const { error } = validateCourse(req.body);

    if (error) return res.status(400).send(error.details[0].message);

    console.log(error);

    const course = {
        id: courses.length + 1,
        name: req.body.name,
        price: req.body.price
    };

    courses.push(course);

    res.send(courses);

});

app.put('/api/course/:id', function (req, res) {

    const error = `Id ${req.params.id} is not existed`;

    const updatedCourse = {
        name: req.body.name,
        price: req.body.price
    }

    if (courses[req.params.id - 1] != null) {

        courses[req.params.id - 1].name = updatedCourse[`name`];

        courses[req.params.id - 1].price = updatedCourse[`price`];

        console.log("Update Successful")

        res.send(courses);

    } else {

        res.send(error);

    }

})

app.delete('/api/course/:id', function (req, res) {

    const error = `Id ${req.params.id} is not existed`;

    if (courses[req.params.id - 1] != null) {

        delete courses[req.params.id - 1];

        console.log("Delete Successful");

    } else {
        res.send(error);
    }

    res.send(courses);
})

function validateCourse(course) {
    const schema = Joi.object(
        {
            name: Joi.string().min(3).required(),
            price: Joi.number().min(1000000)
        }
    )
    return schema.validate(course);
}

app.listen(8080, () => console.log('Server dang lang nghe tren cong 8080'));