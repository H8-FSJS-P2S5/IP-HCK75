const express = require('express')
const UserController = require('../controllers/UserConstroller')
const AlbumController = require('../controllers/AlbumController')
const { errorHandler } = require('../middleware/errorHandler')
const authentication = require('../middleware/authentication')
const AlbumUserController = require('../controllers/AlbumUserController')
const { isAdmin } = require('../middleware/authorization')
const GeminiController = require('../controllers/geminiConroller')
const router = express.Router()

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/loginGoogle', UserController.googleLogin)

router.use(authentication)
router.post('/gemini', GeminiController.gemini)
router.get('/', AlbumController.home)
router.post('/cart/:id', AlbumUserController.cart)
router.get('/cart', AlbumUserController.getCart)
router.delete('/deletecart/:id', AlbumUserController.deleteCart)
router.get('/admin', isAdmin, AlbumController.adminHome)
router.post('/addAlbum', isAdmin, AlbumController.addAlbum)
router.put('/update/:id', isAdmin, AlbumController.updateAlbumById)
router.delete('/delete/:id', isAdmin, AlbumController.deleteAlbumById)

router.use(errorHandler)

module.exports = router