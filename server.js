require('dotenv').config()
const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

app.post('/token', (req, res) => {
    const refreshToken = req.body.token
    if (refreshToken == null) return res.sendStatus(401)
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, email) => {
      if (err) return res.sendStatus(403)
      const accessToken = generateAccessToken({ name: email.name })
      res.json({ accessToken: accessToken })
    })
  })
  
const posts = [
    {
        email: 'virmerson@gmail.com',
        senha: '123'
    }
]

app.get('/posts', (req, res) => {
    res.json(posts)
})

app.get('/acesso', (req, res) => {
    const email = req.body.email
    const senha = { name: email }

    const accessToken = jwt.sign(senha, process.env.ACCESS_TOKEN)
    res.json({ accessToken: accessToken})

})
app.listen(3000)