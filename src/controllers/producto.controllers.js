import Producto from '../models/producto';

const productoCtrl={};

productoCtrl.getPrueba = (req, res)=>{
    res.send('Hola desde el servidor');
    };

productoCtrl.productoNuevo= async (req, res)=>{
        try{

        const nuevoProducto = new Producto({
            nombreProducto: req.body.nombreProducto,
            descripcion: req.body.descripcion,
            imagen: req.body.imagen,
            compania: req.body.compania,
            precio: req.body.precio,
            stock: req.body.stock
        })
        await nuevoProducto.save();

        res.status(201).json({
            mensaje:"producto agregado a la bd"
        })

    }catch(error){
        console.log(error)
        res.status(500).json({
            mensaje:"error al agregar producto"
        })
    }
}


export default productoCtrl;