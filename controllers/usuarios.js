const { response, request } = require("express");

const usuarioGet = (req, res = response) => {
  res.json({
    msg: "get API desde el Controllers",
  });
};

const usuarioPut = (req = request, res = response) => {
  const query = req.query;
  res.json({
    msg: "put API desde el Controllers",
  });
};

const usuarioPost = (req, res = response) => {
  const { nombre, edad } = req.body;
  res.json({
    msg: "post API desde el Controllers",
    nombre,
    edad,
  });
};

const usuarioDelete = (req, res = response) => {
  res.json({
    msg: "delete API desde el Controllers",
  });
};

module.exports = {
  usuarioGet,
  usuarioDelete,
  usuarioPost,
  usuarioPut,
};
