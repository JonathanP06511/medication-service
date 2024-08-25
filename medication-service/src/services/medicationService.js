const soap = require('soap');
const Medication = require('../models/medication');

const service = {
  MedicationService: {
    MedicationPortType: {
      GetMedication: async (args) => {
        const medication = await Medication.findByPk(args.id);
        if (medication) {
          return {
            name: medication.name,
            dosage: medication.dosage,
            quantity: medication.quantity,
          };
        }
        throw new Error('Medication not found');
      },
    },
  },
};

const wsdl = require('fs').readFileSync('./src/soap/medicationService.wsdl', 'utf8');

module.exports = (app) => {
  soap.listen(app, '/soap/medication', service, wsdl);
};
