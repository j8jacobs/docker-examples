// https://flaviocopes.com/docker-dockerfiles/

const express = require('express')
const app = express()

app.get('/', (req, res) => res.json({
	msg: 'Hello World',
	env: process.env
}))

app.listen(3000, () => console.log('Server ready'))
