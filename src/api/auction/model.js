import { Schema, model } from 'mongoose';

const gasStationSchema = new Schema({
    adress: {
        type: String,
        minlength: 3
    },
    firm_owner: {
        type: String,
        minlength: 3,
        required: true
    },
    rest_A80: {
        type: Number,
        min: 0
    },
    rest_A92: {
        type: Number,
        min: 0
    },
    rest_A95: {
        type: Number,
        min: 0
    },
    price_A80: {
        type: Number,
        min: 0
    },
    price_A92: {
        type: Number,
        min: 0
    },
    price_A95: {
        type: Number,
        min: 0
    },
});

const GasStation = model("gasStation", gasStationSchema);

export default GasStation;