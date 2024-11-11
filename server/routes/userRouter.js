
import { Router } from "express";
import jwt from 'jsonwebtoken';
import {postLogin,postRegister} from '../controllers/userController.js'

const {sign} = jwt;
const router = Router();


router.post('/register',postRegister)

router.post('/login',postLogin)

export {sign}

export default router;