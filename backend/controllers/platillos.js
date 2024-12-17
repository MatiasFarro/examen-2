const Platillo = require('../models/platillos');

exports.verPlatillo = async (req, res) => {
    try {
        const { id } = req.params;
        const plato = await Platillo.findById(id);
        res.status(200).json({ message: "Platillos encontrados", data: plato });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.obtenerPlatillos = async (req, res) => {
    try {
        const plato = await Platillo.find();
        res.send(plato);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.añadirPlatillo = async (req, res) => {
    try {
        const { nombre, ingredientes, precio, imagenes } = req.body;
        const plato = await Platillo.create({ nombre, ingredientes, precio, imagenes });
        res.status(201).send(plato);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.actualizarPlatillo = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, ingredientes, precio, imagenes } = req.body;
        const plato = await Platillo.findByIdAndUpdate(
            id,
            { nombre, ingredientes, precio, imagenes },
            { new: true, runValidators: true }
        );
        res.status(200).send(plato);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.eliminarPlatillo = async (req, res) => {
    try {
        const { id } = req.params;
        await Platillo.deleteOne({ _id: id });
        res.send("Plato eliminado correctamente.");
    } catch (error) {
        res.status(500).send(error.message);
    }
};
