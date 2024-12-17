const Categorias = require("../models/categorias");

exports.crearCategorias = async (req, res) => {
    try {
        const categorias = new Categorias(req.body);

        await categorias.save();
        res.send(categorias);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerCategorias = async (req, res) => {

    try {

        const categorias = await Categorias.find();
        res.json(categorias);
        
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}


exports.actualizarCategorias = async (req, res) => {

    try {

        const {_id, nombre, descripcion} = new Categorias(req.body);
        let categorias = await Categorias.findById(req.params.id);

        if(!categorias){
            res.status(404).json({ msg: 'No existen categorias'});
        }

        categorias._id = _id;
        categorias.nombre = nombre;
        categorias.descripcion = descripcion;


        console.log(categorias)

       categorias= await Categorias.findOneAndUpdate({ _id: req.params.id }, categorias, { new: true } );
        res.json(categorias);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.verCategorias = async (req, res) => {

    try {

        let categorias = await Categorias.findById(req.params.id);

        if(!categorias){
            res.status(404).json({ msg: 'No existen categorias'});
        }

        res.json(categorias);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.eliminarCategorias = async (req, res) => {

    try {

        let categorias = await Categorias.findById(req.params.id);

        if(!categorias){
            res.status(404).json({ msg: 'No existen categorias'});
        }

        categorias = await Categorias.findOneAndRemove(req.params.id);

        res.json({ msg: 'La categoria: ' + categorias.nombre + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

