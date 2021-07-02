const express = require('express');
const router = express.Router();
const db = require('../db/db');
const Gig = require('../models/Gig');


// @route       GET /gigs/
// @desc        Get all Gigs
// @access      public
router.get('/', (req, res) => {
    Gig.findAll()
        .then(gigs => { res.render('gigs', { gigs }) })
        .catch(err => console.log(err))
})

// @route       GET /gigs/add
// @desc        add a Gig
// @access      public

router.get('/add', (req, res) => {
    res.render('add')
})



// @route       POST /gigs/add
// @desc        add a Gig
// @access      public
router.post('/add', async (req, res) => {
    try {
        const data = {
            title: 'Dev',
            tech: 'React, Js, HTML, CSS',
            budget: '$3000',
            description: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the/.",
            contact_email: "user1@gmail.com"
        }

        let { title, tech, description, budget, contact_email } = data;

        //Insert into table
        const createGig = await Gig.create({
            title,
            tech,
            description,
            budget,
            contact_email
        });

        res.redirect('/gigs');
    } catch (error) {
        console.log(error);
    }
})


module.exports = router;