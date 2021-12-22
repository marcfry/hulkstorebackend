import mongoose, {Schema} from 'mongoose';

const productoSchema = new Schema({
    nombreProducto:{
        type: String,
        required: true,
        maxlength: 200,
        unique: true
        
    },
    descripcion:{
        type: String,
        required: true,
        maxlength: 200
        
    },
    imagen:{
        type: String,
        required: true,
        maxlength: 200
        
    },
    compania:{
        type: String,
        required: true        
    },
    precio:{
        type: Number,
        required: true
    },
    stock:{
        type: Number,
        required: true
    }
});

const Producto = mongoose.model('producto', productoSchema);

export default Producto;