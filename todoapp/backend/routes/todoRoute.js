const {Router} = require("express");
const { gettodo, savetodo,updatetodo,deletetodo } = require("../controllers/todoController");
const router = Router()

router.get('/', gettodo)
router.post('/save', savetodo)
router.post('/update', updatetodo)
router.post('/delete', deletetodo)

module.exports = router;