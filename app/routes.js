const express = require('express')
const router = express.Router()

router.post('/match-funding-results', function (req, res) {

  // Get the answer from session data
  const matchFunding = req.session.data['receive-match-funding']

  if (matchFunding === 'No') {
    res.redirect('/not-suitable')
  } else {
    res.redirect('/project-cost')
  }
})


router.get('funds', function (req, res) {
    res.render('funds', { name: 'Foo' })
})


module.exports = router
