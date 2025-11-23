
export type DatosRegistro = {
  nombreCompleto: string;
  usuario: string;
  correo: string;
  domicilio: string;
  telefono: string;
  fechaNacimiento: string;
  contrasena: string;
  confContrasena: string;
};

export default function ValidacionRegistro(data: DatosRegistro){

    const errores: {[key: string]: string} = {};
    const fechavalidar =  new Date();
    const fechaNacimientoConv = new Date(data.fechaNacimiento);

    if(data.nombreCompleto.length==0){
        errores.nombreCompleto = 'Este campo no puede estar vacio'
    } 

    if(data.correo.length==0 ){
       errores.correo='Este campo no puede estar vacio'
    }else if(!data.correo.includes('@') || !data.correo.includes('.')){
        
        errores.correo='Ingresa un correo valido'
    }

    if(data.usuario.includes(' ')){
        errores.usuario='El nombre de  usuario no puede incluir espacios'
    }else if(data.usuario.length==0){
        errores.usuario='Este campo no puede estar vacio'
    }

    if(data.domicilio.length==0){
        errores.domicilio='Este campo no puede estar vacio'
    }

    if(data.telefono.length==0){
        errores.telefono='Este campo no puede estar vacio'
    }else if(data.telefono.length<8){
        errores.telefono='Ingresa un numero de telefono valido'
    }

    if(data.fechaNacimiento.length==0){
        errores.fechaNacimiento='Este campo no puede estar vacio'
    }else if(fechaNacimientoConv>=fechavalidar){
        errores.fechaNacimiento='Fecha de nacimiento no puede ser igual o mayor que la fecha actual'
    }

    if(data.contrasena.length==0){
        errores.contrasena='Este campo no puede estar vacio'
    }else if(data.contrasena.length<8){
        errores.contrasena='Contrasena debe contener minimo 8 caracteres'
    }else if(data.confContrasena.length==0 ){
          errores.confContrasena='Este campo no puede estar vacio'     
    }else if(data.contrasena!==data.confContrasena){
        errores.confContrasena='Contrasenas deben de ser iguales' 
    }

    const valido =Object.keys(errores).length === 0

    return{valido, errores}

}