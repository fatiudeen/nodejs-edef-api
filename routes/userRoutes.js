import express from 'express'
import { getUser,
        editName, 
        changePassword, 
        editRank,
        newProfileImg, 
        deleteProfileImg, 
        getUsers,
        sendRequest,
        getAllRequests,
        getOneMail,
        getOneRequest,
        getAllMails,
        sendMail,
        logs

            } from '../controllers/user.js'
import {
        allDepts,
        getOneDept,
        getOneUser
} from '../controllers/admin.js'
import verify from '../middlewares/verify.js'
import {upload, avi} from '../middlewares/upload.js'

const router = express.Router()

//manage user data 
router.get("/user", verify, getUser)

router.post("/user/avi", verify, avi.single('avi'), newProfileImg)

router.delete("/user/avi", verify, deleteProfileImg)
 
router.patch("/user/name", verify, editName)

router.patch("/user/rank", verify, editRank)

router.patch("/user/password", verify, changePassword)

//request
router.post("/request", verify, upload.single('file'), sendRequest)

router.get("/request", verify, getAllRequests)

router.get("/request/:requestId", verify, getOneRequest)

router.get("/department", verify, allDepts)

router.get("/department/:id", verify, getOneDept)

//mail 
router.post("/mail", verify, upload.single('file'), sendMail)

router.get("/mail", verify, getAllMails)

router.get("/mail/:mailId", verify, getOneMail)

router.get("/users", verify, getUsers)

router.get("/users/:id", verify, getOneUser)

//logs
router.get("/logs", verify, logs)



export default router