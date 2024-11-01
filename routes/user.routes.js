const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API untuk registrasi dan login pengguna
 */

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Registrasi pengguna baru
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 description: Nama pengguna unik
 *                 example: johndoe
 *               password:
 *                 type: string
 *                 description: Kata sandi pengguna
 *                 example: password123
 *     responses:
 *       201:
 *         description: User berhasil diregistrasi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User berhasil register
 *       400:
 *         description: Bad request atau data tidak valid
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Username sudah terdaftar"
 */

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Login pengguna
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 description: Nama pengguna
 *                 example: johndoe
 *               password:
 *                 type: string
 *                 description: Kata sandi pengguna
 *                 example: password123
 *     responses:
 *       200:
 *         description: Login berhasil, token dikirimkan
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Login berhasil
 *                 token:
 *                   type: string
 *                   description: Token JWT untuk autentikasi
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *       400:
 *         description: Username atau password salah
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Username atau password salah"
 */

router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;
