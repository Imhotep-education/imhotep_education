const express = require('express')
const app = express()
const ejs = require('ejs')
const bodyParser = require('body-parser')
const http = require('http')
const socketIo = require('socket.io')

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/', (req, res)=>{
	res.render('index')
})

app.get('/account', (req, res)=>{
	res.render('account', {
		user: 'Igna2005',
		crono: {
			primera: {
				materia: 'Lengua',
				nota: undefined,
				hora: '12:30'
			},
			segunda: {
				materia: 'Circuitos electronicos I',
				nota: 'Prueba',
				hora: '13:10'
			}, 
			tercera: {
				materia: 'Circuitos electronicos I',
				nota: 'Prueba',
				hora: '13:50'
			},
			cuarta: {
				materia: 'Circuitos electronicos I',
				nota: 'TP f.d.p',
				hora: '14:30',
			},
			quinta: {
				materia: 'Circuitos electronicos I',
				nota: 'TP f.d.p',
				hora: '15:10',
			},
			sexta: {
				materia: 'Matematica',
				nota: 'Prueba',
				hora: '15:50',
			},
			septima: {
				materia: 'Matematica',
				nota: 'Prueba',
				hora: '16:30'
			}
		},
		tareas: {
			lengua: {
				
			}
		}
	})
})

app.get('/escritorio', (req, res)=>{
	res.render('escritorio')
})

app.post('/register', (req, res)=>{
	const email    = req.body.email
	const password = req.body.password
	const role     = req.body.role

	res.render('/account', {
		email: email,
		role: role,
		action: 'register-form'
	})
})
const server = http.createServer(app);
server.listen(8080, ()=>{
	console.log('Server is running on port 8080')
})