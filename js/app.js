
function ingreseData(){
    let nombre= prompt("¡Hola! ¿Cuál es tu nombre?");
    let edad= prompt("¿Cuántos años tenés?");
    let comuna= prompt("¿En cuál comuna porteña vivís?");

    let oración= "Mi nombre es " + nombre + ", tengo " + edad + "años y vivo en la Comuna " + comuna + "."
    alert(oración)
    

}

let pregunta_base = "SI";
function dataIngresada(){
    let pregunta= prompt("¿Los datos ingresados son correctos? Escriba SI o NO");

    if (pregunta_base === pregunta) {
        mostrarPag();
    } else{
        ingreseData();
        dataIngresada();
    }
}

function mostrarPag(){
     alert("¡Te damos la bienvenida!");
}

ingreseData();
dataIngresada();

//REGISTRO E INICIO DE SESIÓN//

const formingre = document.getElementById("formularioingreso")
const formregis = document.getElementById("formularioregistro")
const iralinicio = document.getElementById("iralinicio")
const cerrarinicio = document.getElementById("cerrarinicio")
const cerrarregistro = document.getElementById("cerrarregistro")
const registradobien = document.getElementById("registradobien")
const iniciobien = document.getElementById("iniciobien")


formingre.addEventListener("submit", validarformulario1)

function validarformulario1(e){
    e.preventDefault(); iniciobien.innerHTML = `<p>¡Has iniciado sesión correctamente!</p>`; cerrarinicio.innerHTML = `<a href="" data-bs-dismiss="modal">Cerrar</a>`
} 
 validarformulario1()

function resetinicia(){
    iniciobien.innerHTML = `<p></p>`; cerrarinicio.innerHTML = `<a href="" data-bs-dismiss="modal"></a>`
}
 resetinicia()


 
function promptingresar(){
    formregis.addEventListener("submit", validarformulario2)

 function validarformulario2(e){
    e.preventDefault(); registradobien.innerHTML = `<p>¡Te has registrado correctamente!</p>`;iralinicio.innerHTML = `<a href="" data-bs-toggle="modal" data-bs-target="#exampleModal">Iniciar sesión</a>`; cerrarregistro.innerHTML = `<a href="" data-bs-dismiss="modal">Cerrar</a>`
 }
 validarformulario2()
}
 promptingresar()



