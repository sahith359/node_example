const express = require('express');
const router = express.Router();
const {getContact,getContacts,editContacts,createContacts,deleteContact} = require('../controllers/contactController');
const validateToken = require('../middleware/validateTokenHandler');

router.use(validateToken)
router.route("/").get(getContacts);
router.route("/").post(createContacts);
router.route("/:id").put(editContacts);
router.route("/:id").get(getContact);
router.route("/:id").delete(deleteContact);

module.exports = router