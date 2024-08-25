const Medication = require('../models/medication');

exports.getMedication = async (req, res) => {
    try {
        const medication = await Medication.findByPk(req.body.id);
        if (medication) {
            res.json(medication);
        } else {
            res.status(404).json({ message: 'Medication not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
