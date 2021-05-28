const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line


router.get('funds', function (req, res) {
    res.render('funds', { name: 'Foo' })
})


module.exports = router
