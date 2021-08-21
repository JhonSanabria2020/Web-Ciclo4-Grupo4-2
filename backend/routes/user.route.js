let express = require("express");
let router = express.Router();
let userSchema = require("../models/User");
const bcrypt = require("bcrypt");

router.route("/login").post((req, res, next) => {
  let body = req.body;
  userSchema.findOne({ email: body.email }, (erro, usuarioDB) => {
    if (erro) {
      return next(erro);
    }
    // Verifica que exista un usuario con el mail escrita por el usuario.
    if (!usuarioDB) {
      return res.status(404).json({
        ok: false,
        err: {
          message: "Usuario o contraseña incorrectos",
        },
      });
    }
    // Valida que la contraseña escrita por el usuario, sea la almacenada en la db
    if (!bcrypt.compareSync(body.password, usuarioDB.password)) {
      return res.status(404).json({
        ok: false,
        err: {
          message: "Usuario o contraseña incorrectos",
        },
      });
    }
    res.json({
      ok: true,
      usuario: usuarioDB,
    });
  });
});

router.route("/register").post((req, res, next) => {
  let {
    foto,
    nombres,
    apellidos,
    cedula,
    nacimiento,
    celular,
    telfijo,
    direccion,
    eps,
    departamento,
    municipio,
    email,
    password,
  } = req.body;

  userSchema.create(
    {
      foto,
      nombres,
      apellidos,
      cedula,
      nacimiento,
      celular,
      telfijo,
      direccion,
      eps,
      departamento,
      municipio,
      email,
      password: bcrypt.hashSync(password, 10),
    },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
      }
    }
  );
});

router.route("/:id").get((req, res, next) => {
  userSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

router.route("/update/:id").put((req, res, next) => {
  userSchema.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.json(data);
        console.log("user updated successfully !");
      }
    }
  );
});

module.exports = router;
