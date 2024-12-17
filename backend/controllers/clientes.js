const Clientes = require("../models/clientes");

exports.crearClientes = async (req, res) => {
    try {
        const clientes = new Clientes(req.body);

        await clientes.save();
        res.send(clientes);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerCliente = async (req, res) => {

    try {
        const {id} = req.params;
        const clientes = await Clientes.findById(id);
        res.json(clientes);
        
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}


exports.actualizarClientes = async (req, res) => {

    try {

        const {_id, nombre, descripcion} = new Clientes(req.body);
        let clientes = await Clientes.findById(req.params.id);

        if(!clientes){
            res.status(404).json({ msg: 'No existen clientes'});
        }

        clientes._id = _id;
        clientes.nombre = nombre;
        clientes.descripcion = descripcion;


        console.log(clientes)

       clientes= await Clientes.findOneAndUpdate({ _id: req.params.id }, clientes, { new: true } );
        res.json(clientes);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.verClientes = async (req, res) => {

    try {

        let clientes = await Clientes.findById(req.params.id);

        if(!clientes){
            res.status(404).json({ msg: 'No existen clientes'});
        }

        res.json(clientes);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.eliminarClientes = async (req, res) => {

    try {

        let clientes = await Clientes.findById(req.params.id);

        if(!clientes){
            res.status(404).json({ msg: 'No existen clientes'});
        }

        clientes = await Clientes.findOneAndRemove(req.params.id);

        res.json({ msg: 'El cliente: ' + clientes.nombre + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

