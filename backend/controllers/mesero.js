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

    //const { username, password } = req.body;

    /*const user = new Mesero(
        {
           username,
           password
        } 
     );*/

    const { nombre, email, telefono, password } = new Mesero(req.body);
    

    try {
        
        const {id} =req.params;
        
        const mesero = await Mesero.findById(id);
        

        if(!mesero){
            return res.status(404).send("El mesero no existe");
        }

        const validPassword = await mesero.validatePassword(password);

        if(!validPassword){
            return res.status(401).json({auth: false, token: null});
        }

        const token = jwt.sign({id: mesero._id}, config.secret, {
            expiresIn: 60 * 60 * 24
        });
        
        res.json({auth: true, token});
        
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

        let mesero = await Mesero.findById(req.params.id);

        if(!mesero){
            res.status(404).json({ msg: 'No existen mesero'});
        }

        mesero = await Mesero.findOneAndRemove(req.params.id);

        res.json({ msg: 'El mesero ' + mesero.nombre + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

