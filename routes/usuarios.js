const { Router } = require("express");
const {
  usuarioGet,
  usuarioDelete,
  usuarioPost,
  usuarioPut,
} = require("../controllers/usuarios");

const router = Router();

router.get("/", usuarioGet);

router.put("/:id", usuarioPut);
router.post("/", usuarioPost);
router.delete("/", usuarioDelete);

module.exports = router;
