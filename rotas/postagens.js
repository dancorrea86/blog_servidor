const express = require('express')
const router = express.Router()

router.get('/postagens', (req, res) => {
  res.json({
    titulo: "Meu primeiro post",
    conteudo: "Era uma vez",
    autor: "Reginaldo"
  })
})

module.exports = router