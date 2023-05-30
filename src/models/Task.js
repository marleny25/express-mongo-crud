import {Schema, model} from 'mongoose'

const taskSchema = new Schema({
    title: {
        type: String,
        requiered: true,
        unique: true,
        trim: true
    },

    autor: {
        type: String,
    requiered: true,
    },
    volumen: {
        type: String,
    requiered: true,
    },
    editorial: {
        type: String,
    requiered: true,
    },
    date: {
        type: String,
    requiered: true,
    },
    entrada: {
        type: String,
    requiered: true,
    },
    
    
    done: {
        type: Boolean,
        default:false
    },
    
}, {
    timestamps: true,
    versionKey:false
}
);

export default model('Task', taskSchema);