import Producto from '../models/producto';

const productoCtrl={};

productoCtrl.getPrueba = (req, res)=>{
    res.send('Hola desde el servidor');
    }


export default productoCtrl;