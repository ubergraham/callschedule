// api/on-call.js
const data = require('../data.json');

module.exports = (req, res) => {
    const { date, specialty } = req.query; // Add 'specialty' as a new query parameter

    const filteredData = data.doctors.filter(doctor => {
        const startDate = new Date(doctor['On Call Start Date']);
        const endDate = new Date(doctor['On Call End Date']);
        const queryDate = date ? new Date(date) : null;

        // Check if date is within range and if specialty matches (if provided)
        return (!queryDate || (queryDate >= startDate && queryDate <= endDate)) &&
            (!specialty || doctor.Specialty.toLowerCase() === specialty.toLowerCase());
    });

    res.json(filteredData);
};