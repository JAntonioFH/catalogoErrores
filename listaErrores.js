class ErroresBancanet{
    constructor({nombreError,descripcionError,acciones=[]}){
        this.nombreError=nombreError;
        this.descripcionError=descripcionError;
        this.acciones=acciones;
    }
}

const errorFeo = new ErroresBancanet(
    {
        nombreError:'Error feo',
        descripcionError:`Error causado por hacer las cosas mal`,
        acciones:
            [
                {
                    numeroAccion:1,
                    detallesAccion:`Ingrese a la banca y haga las cosas de manera correcta`,
                    imagenAccion:"./dinosaur.jpg"
                },
                {
                    numeroAccion:2, 
                    detallesAccion:`Ingrese a la banca y haga las cosas de manera correcta`, 
                    imagenAccion:"./dinosaur.jpg"
                }
            ] 
    }
)


const errorNoTanFeo = new ErroresBancanet(
    {
        nombreError:'Error 001 0023 00058 004',
        descripcionError:`Error causado por hacer las cosas mal`,
        acciones:
            [
                {
                    numeroAccion:1,
                    detallesAccion:`Ingrese a la banca y haga las cosas de manera correcta`,
                    imagenAccion:"./dinosaur.jpg"
                },
                {
                    numeroAccion:2, 
                    detallesAccion:`Ingrese a la banca y haga las cosas de manera correcta`, 
                    imagenAccion:"./dinosaur.jpg"
                }
            ] 
    }
)
const errorBonito = new ErroresBancanet(
    {
        nombreError:'Error 324f004',
        descripcionError:`Error causado por los cookies`,
        acciones:
            [
                {
                    numeroAccion:1,
                    detallesAccion:`Limpie cookies`,
                    imagenAccion:"./dinosaur.jpg"
                },
                {
                    numeroAccion:2, 
                    detallesAccion:`Limpie cookies`, 
                    imagenAccion:"./dinosaur.jpg"
                }
            ] 
    }
)
const errorHorrible = new ErroresBancanet(
    {
        nombreError:'Error asdasd4',
        descripcionError:`Error causado por incidencia del banco`,
        acciones:
            [
                {
                    numeroAccion:1,
                    detallesAccion:`Denos tiempo`,
                    imagenAccion:"./dinosaur.jpg"
                },
                {
                    numeroAccion:2, 
                    detallesAccion:`Denos tiempo`, 
                    imagenAccion:"./dinosaur.jpg"
                }
            ] 
    }
)


