const Platillos = require("../models/platillos");



exports.crearOrdenes = async (req, res) => {

    try {

        const ordenes = new Ordenes(req.body);



        await ordenes.save();

        res.send(clientes);





    } catch (error) {

        console.log(error);

        res.status(500).send('Hubo un error');

    }

}



exports.obtenerOrden = async (req, res) => {



    try {

        const { idMesa } = req.params;

        const ordenes = await Ordenes.findOne(idMesa);

        res.json(ordenes);





    } catch (error) {

        console.log(error);

        res.status(500).send('Hubo un error');

    }



}





exports.actualizarOrdenes = async (req, res) => {



    try {



        const { id } = req.params;

        const { estado } = req.body;



        const ordenes = await Orden.findByIdAndUpdate(

            id,

            { estado },

            { new: true, runValidators: true }

        );

        res.json(ordenes);

    } catch (error) {

        console.log(error);

        res.status(500).send('Hubo un error');

    }



}



exports.eliminarOrdenes = async (req, res) => {



    try {



        let ordenes = await Ordenes.findById(req.params.id);



        if (!ordenes) {

            res.status(404).json({ msg: 'No existen ordenes' });

        }



        ordenes = await Ordenes.findOneAndRemove(req.params.id);



        res.json({ msg: 'El cliente: ' + ordenes.nombre + ' se ha eliminado' });



    } catch (error) {

        console.log(error);

        res.status(500).send('Hubo un error');

    }



}