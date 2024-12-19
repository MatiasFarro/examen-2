const jwt = require('jsonwebtoken');

const config = require('../config/global');
const Mesero = require("../models/mesero");

exports.crearMesero = async (req, res) => {
    try {
        
        const { nombre, email, telefono, password} = req.body;
        const mesero = new Mesero(
            {
               nombre,
               email,
               telefono,
               password,
            } 
         );

         //console.log(user)
        
        mesero.password = await mesero.encryptPassword(mesero.password)
        await mesero.save();

        const token = jwt.sign({id: mesero._id}, config.secret, {
            expiresIn: 60 * 60 * 24
        })
        //res.json({message: 'Received'})
        res.json({auth: true, token})

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerMesero = async (req, res) => {

    try {
        
        const mesero = await Mesero.find();
        

        if(!mesero){
            return res.status(404).send("El mesero no existe");
        }

        res.json({message: "meseros encontrados", data:mesero});
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}




exports.actualizarMesero = async (req, res) => {

    try {

        const {_id, nombre, descripcion} = new Mesero(req.body);
        let mesero = await Mesero.findById(req.params.id);

        if(!mesero){
            res.status(404).json({ msg: 'No existen mesero'});
        }

        mesero._id = _id;
        mesero.nombre = nombre;
        mesero.descripcion = descripcion;


        console.log(mesero)

       mesero= await Mesero.findOneAndUpdate({ _id: req.params.id }, mesero, { new: true } );
        res.json(mesero);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.verMesero = async (req, res) => {

    try {

        let mesero = await Mesero.findById(req.params.id);

        if(!mesero){
            res.status(404).json({ msg: 'No existen mesero'});
        }

        res.json(mesero);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.eliminarMesero = async (req, res) => {

    try {

        const { id } = req.params;

        const meseroEliminado = await Mesero.findByIdAndUpdate(id, { activo: false });

        res.status(200).send(`Mesero eliminado correctamente: ${meseroEliminado.nombre}`);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await Mesero.findOne({ email });
      if (!user) return res.status(400).json({ message: 'Credenciales inválidas' });
  
      const validPassword = await user.validPassword(password );
  
      console.log('Contraseña ingresada:', password );
      console.log('Contraseña almacenada:', user.password );
  
      if (!validPassword) {
        return res.status(401).json({ auth: false, token: null });
      }
  
  
      const token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 60 * 60 * 24
      })
  
      res.json({ auth: true, token });
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
