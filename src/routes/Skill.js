const { Router } = require('express');
const router = Router();
const { createSkill, editSkill, getSkills } = require('../controllers/Skill.controller');
const validationCreateSkill = require('../helpers/schemasValidation/createSkillValidation');
const validationEditSkill = require('../helpers/schemasValidation/editSkillValidation');
const validationMiddleware = require('../middlewares/validationMiddleware');


router.get('/get/skills', getSkills);
router.post('/create/skill', validationMiddleware(validationCreateSkill), createSkill);
router.put('/edit/skill/:skillId', validationMiddleware(validationEditSkill), editSkill);

module.exports = router;
