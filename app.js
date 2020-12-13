const express = require('express')
const app = express()

const MenuController = require('./controllers/MenuController')

const port = 3000

const menuController = new MenuController()


app.get('/menu', (req, res) => {
    res.send(
        menuController.listMenu()
    )
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})