import express from "express";
import { addfunction, deletefunction, showbyid, showfunction, updatefunction } from "./controllersUsers.js";

const routes = express.Router()

.get('/',showfunction)
.post('/input',addfunction)
.delete('/delete:email',deletefunction)
.put('/update:email',updatefunction)
.get('/byid:email',showbyid)

export default routes;
