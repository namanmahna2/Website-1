const xpress = require('express');
const router = xpress.Router();


router.route('/').get((req, res) => {
    res.status(200).send(`The form has been collected. Thank You the submission`)
})

module.exports = router