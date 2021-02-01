const db = firebase.firestore()

const datosForm = document.getElementById('datos-form');

datosForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const nombres = datosForm['nombres'].value;
    const apellidos = datosForm['Apellidos'].value;
    const fechaNacimiento = datosForm['fecha-nacimiento'].value;
    const sexo = datosForm['sexo'].value;
    const email = datosForm['email'].value;
    const preg1 = datosForm['preg-1'].value;
    const preg2 = datosForm['preg-2'].value;
    const pendPreg2 = datosForm['pend-preg2'].value;
    const preg3 = datosForm['preg-3'].value;
    const pendPreg3 = datosForm['pend-preg3'].value;
    const preg4 = datosForm['preg-4'].value;
    const pendPreg4 = datosForm['pend-preg4'].value;
    const preg5 = datosForm['preg-5'].value;
    const pendPreg5 = datosForm['pend-preg5'].value;
    const preg6 = datosForm['preg-6'].value;
    const pendPreg6 = datosForm['pend-preg6'].value;
    const preg7 = datosForm['preg-7'].value;
    const pendPreg7 = datosForm['pend-preg7'].value;
    const preg8 = datosForm['preg-8'].value;
    const sugerencias = datosForm['sugerencias'].value;

   const response = await db.collection('kpitados').doc().set({
        nombres,
        apellidos,
        fechaNacimiento,
        sexo,
        email,
        preg1,
        preg2,
        pendPreg2,
        preg3,
        pendPreg3,
        preg4,
        pendPreg4,
        preg5,
        pendPreg5,
        preg6,
        pendPreg6,
        preg7,
        pendPreg7,
        preg8,
        sugerencias
    })
    console.log(response);

    console.log(nombres,
        apellidos,
        fechaNacimiento,
        sexo,
        email,
        preg1,
        preg2,
        pendPreg2,
        preg3,
        pendPreg3,
        preg4,
        pendPreg4,
        preg5,
        pendPreg5,
        preg6,
        pendPreg6,
        preg7,
        pendPreg7,
        preg8,
        sugerencias);
    
})

