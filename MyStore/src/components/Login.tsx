
export type datosLogIn = {

    email:string,
    contraseña:string

}

export default function validarLogIn(data: datosLogIn){

    const errores: {[key: string]: string} = {};

    if(data.email.length==0){
        errores.email='Este campo no puede estar vacio'
    }else if(!data.email.includes('@') || !data.email.includes('.')){
        errores.email = 'Proporciona un tipo de correo valido'
    }

    if(data.email.length==0){
        errores.contraseña = 'Este campo no puede estar vacio'
    }

    const valido =Object.keys(errores).length === 0

    return{valido, errores}
}