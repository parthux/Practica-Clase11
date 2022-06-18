"use Strict"; //javascrip moderno On

//Menu Hamburguesa
const menuHamburguesa = document.getElementById('menu');
menuHamburguesa.addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('nav__link--action');
    document.getElementById('lineOne').classList.toggle('nav__img-linea--1');
    document.getElementById('lineTwo').classList.toggle('nav__img-linea--2');
    document.getElementById('lineThree').classList.toggle('nav__img-linea--3');
});

//ValidationFormulario

const form = document.getElementById('formRegistration');
const formInpust = document.querySelectorAll('input');
const selectPais = document.getElementById('pais');
const checksubmit = {
    name: false,
    surname: false,
    useremail: false,
    age: false,
    sexo: false,
    pais: false,
    tema: false
};
const datos = (temp, nameFielset) =>{
    if(temp == true){
        document.getElementById(`${nameFielset}`).classList.remove('form__fielset-incorrecto');
        document.querySelector(`#${nameFielset} .form__paragraph-valitacion`).classList.remove('form__paragraph-valitacion--action');
        document.getElementById(`${nameFielset}`).classList.add('form__fielset-correcto');
    }else{
        document.getElementById(`${nameFielset}`).classList.remove('form__fielset-correcto');
        document.getElementById(`${nameFielset}`).classList.add('form__fielset-incorrecto');
        document.querySelector(`#${nameFielset} .form__paragraph-valitacion`).classList.add('form__paragraph-valitacion--action');
    }
};
const datos2 = (temp, nameFielset) =>{
    if(temp == true){
        document.querySelector(`#${nameFielset} box-icon`).setAttribute('name','check-circle');
    }else{
        document.querySelector(`#${nameFielset} box-icon`).setAttribute('name','x-circle');
    }
};
const  validarFormulario = (e) =>{
    let nameFielset = '';
    let temp = false;
    switch (e.target.name){
        case "name":
            nameFielset= 'fielsetName';
            if (e.target.value.length > 3){
                temp = true;
                datos(temp, nameFielset);
                datos2(temp, nameFielset);
                checksubmit.name =true;
            }else{
                datos(temp, nameFielset);
                datos2(temp, nameFielset);
            }
        break;
        case "surname":
            nameFielset= 'fielsetSurname';
            if (e.target.value.length > 3){
                temp = true;
                datos(temp, nameFielset);
                datos2(temp, nameFielset);
                checksubmit.surname =true;
            }else{
                datos(temp, nameFielset);
                datos2(temp, nameFielset);
            }
        break;
        case "useremail":
            const emailValidation =  /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
            nameFielset= 'fielsetEmail';
            if (emailValidation.test(e.target.value)){
                temp = true;
                datos(temp, nameFielset);
                datos2(temp, nameFielset);
                checksubmit.useremail =true;
            }else{
                datos(temp, nameFielset);
                datos2(temp, nameFielset);
            }
        break;
        case "age":
            nameFielset= 'fielsetAge';
            let stringNumero = Number(e.target.value);
            if (stringNumero > 0 && stringNumero < 100 && Number.isInteger(stringNumero)){
                temp = true;
                datos(temp, nameFielset);
                datos2(temp, nameFielset);
                checksubmit.age =true;
            }else{
                datos(temp, nameFielset);
                datos2(temp, nameFielset);
            }
        break;
        case "sexo":
            nameFielset= 'fielsetSexo';
            if (e.target.checked){
                temp = true;
                datos(temp, nameFielset);
                checksubmit.sexo =true;
            }else{
                datos(temp, nameFielset);
            }
        break;
        case "temasInteres":
            nameFielset= 'fielsetTemas';
            const valCheck= document.querySelector("#fielsetTemas input[type=checkbox]:checked");
            if (valCheck != null){
                temp = true;
                checksubmit.tema=true;
                datos(temp, nameFielset);
            }else{
                datos(temp, nameFielset);
            }
        break;
        case "pais":
            nameFielset= 'fielsetPais';
            if (e.target.value == 'argentina' || e.target.value == 'chile' || e.target.value == 'brasil' || e.target.value == 'uruguay'){
                temp = true;
                datos(temp, nameFielset);
                checksubmit.pais =true;
            }else{
                datos(temp, nameFielset);
            }
        break;
    }
};
formInpust.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
    input.addEventListener('change', validarFormulario);
});
selectPais.addEventListener('change', validarFormulario);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (checksubmit.name == true && checksubmit.surname == true && checksubmit.useremail == true && checksubmit.age == true  && checksubmit.sexo == true && checksubmit.pais == true && checksubmit.tema == true){
        form.reset();
        document.querySelector('#divButtomEnviar .form__paragraph-buttom').classList.remove('form__paragraph-buttom--action');
        document.querySelectorAll('.form__fielset-correcto').forEach((x) =>{
            x.classList.remove('form__fielset-correcto');
        });
        const resetObject = false;
        checksubmit.name= resetObject;
        checksubmit.age= resetObject;
        checksubmit.pais= resetObject;
        checksubmit.sexo= resetObject;
        checksubmit.surname= resetObject;
        checksubmit.tema= resetObject;
        checksubmit.useremail= resetObject;
        document.getElementById('pop-ups').classList.add('pop-ups--action');
    }else{
        document.querySelector('#divButtomEnviar .form__paragraph-buttom').classList.add('form__paragraph-buttom--action');
        let enviarTemp = false;
        let enviarFielset ='';
        if(checksubmit.name == false){
            enviarFielset= 'fielsetName';
            datos(enviarTemp, enviarFielset);
            datos2(enviarTemp, enviarFielset);
        };
        if(checksubmit.surname == false){
            enviarFielset= 'fielsetSurname';
            datos(enviarTemp, enviarFielset);
            datos2(enviarTemp, enviarFielset);
        };
        if(checksubmit.useremail == false){
            enviarFielset= 'fielsetEmail';
            datos(enviarTemp, enviarFielset);
            datos2(enviarTemp, enviarFielset);
        };
        if(checksubmit.age == false){
            enviarFielset= 'fielsetAge';
            datos(enviarTemp, enviarFielset);
            datos2(enviarTemp, enviarFielset);
        };
        if(checksubmit.sexo == false){
            enviarFielset= 'fielsetSexo';
            datos(enviarTemp, enviarFielset);
        };
        if(checksubmit.tema == false){
            enviarFielset= 'fielsetTemas';
            datos(enviarTemp, enviarFielset);
        };
        if(checksubmit.pais == false){
            enviarFielset= 'fielsetPais';
            datos(enviarTemp, enviarFielset);
        };
    }
});

//pop-ups

const popUps = document.getElementById('endpopups');
popUps.addEventListener('click', () =>{
    document.getElementById('pop-ups').classList.remove('pop-ups--action');
})

window.addEventListener('click', () =>{
    document.getElementById('pop-ups').classList.remove('pop-ups--action');
})


