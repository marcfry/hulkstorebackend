import Producto from '../models/producto'

const productoCtrl = {}

productoCtrl.productoNuevo = async (req, res) => {
  try {
    const nuevoProducto = new Producto({
      nombreProducto: req.body.nombreProducto,
      descripcion: req.body.descripcion,
      imagen: req.body.imagen,
      compania: req.body.compania,
      precio: req.body.precio,
      stock: req.body.stock,
    })
    await nuevoProducto.save()

    res.status(201).json({
      mensaje: 'producto agregado a la bd',
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      mensaje: 'error al agregar producto',
    })
  }
}

productoCtrl.listaProductos = async (req, res) => {
  try {
    const arregloProductos = await Producto.find()
    res.status(200).json(arregloProductos)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      mensaje: 'error al listar producto',
    })
  }
}

productoCtrl.eliminarProducto = async (req, res) => {
  try {
    await Producto.findByIdAndDelete(req.params.id)
    res.status(200).json({
      mensaje: 'producto eliminado de la bd',
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      mensaje: 'error al eliminar producto',
    })
  }
}

productoCtrl.editarProducto = async (req, res) => {
  try {
    await Producto.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({
      mensaje: 'producto modificado de la bd',
    })
  } catch (error) {
    console.log(error)
    res.status(404).json({
      mensaje: 'error al editar producto',
    })
  }
}

productoCtrl.obtenerProducto = async (req, res) =>{
    try{
const productoBuscado = await Producto.findById(req.params.id)
res.status(200).json(productoBuscado)
    }catch (error) {
        console.log(error)
        res.status(404).json({
          mensaje: 'error al editar producto',
        })
      }
}

export default productoCtrl
