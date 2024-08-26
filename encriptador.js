const d = document;
const textMsj = d.querySelector(".form__text");
const imgResultado = d.querySelector(".result__img");
const loaderReading = d.querySelector(".loader");
const resultTitle= d.querySelector(".result__title");
const resultText= d.querySelector(".result__text");
const btnEncriptar = d.querySelector(".btn__encriptar");
const botonDesencriptar = d.querySelector(".btn__desencriptar1");
const btnCopiar = d.querySelector(".btn__copiar");



const llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  //Funcion Encriptar
  function encriptarMensaje(mensaje) {
    let mensajeEncriptado = "";
    for (let i = 0; i < mensaje.length; i++) {
      let letra = mensaje[i];
      let encriptada = letra;
      for (let j = 0; j < llaves.length; j++) {
        if (letra === llaves[j][0]) {
          encriptada = llaves[j][1]; // Reemplaza la letra por su equivalente encriptado
          break; // Termina el bucle cuando se encuentra la correspondencia
        }
      }
      mensajeEncriptado += encriptada;
    }
  
    return mensajeEncriptado;
 
}
 
  // function desencriptar
function desencriptarMensaje(mensaje) {
    let mensajeDesencriptado = mensaje;
    for (let i = 0; i < llaves.length; i++) {
      let regex = new RegExp(llaves[i][1], "g");
      mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]); // Reemplaza el texto encriptado por su equivalente original
    }
    return mensajeDesencriptado; // Devuelve el mensaje desencriptado
}

textMsj.addEventListener("input", (e) =>{
    imgResultado.style.display = "none";
    loaderReading.style.display = "block";
    resultTitle.textContent = "Capturando Mensaje";
    resultText.textContent = "";
     
})

    btnEncriptar.addEventListener("click", (e) =>{
    e.preventDefault();
    let mensaje = textMsj.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // convertir Mayusculas a minusculas
    
    let mensajeEncriptado = encriptarMensaje(mensaje);
    resultText.textContent = mensajeEncriptado;
    loaderReading.style.display = "none";
    btnCopiar.style.display = "block";
    resultTitle.textContent = "El resultado es:";
    
    })
       

    btnCopiar.addEventListener('click', ()=>{
        let textoCopiado = resultText.textContent;
        navigator.clipboard.writeText(textoCopiado).then(()=> {
            imgResultado.style.display = "block";
            loaderReading.classList.add("hidden");
            resultTitle.textContent = "El texto se copio";
            btnCopiar.classList.add("hidden");
            resultText.textContent = ""
        })
    });
    botonDesencriptar.addEventListener("click", (e) =>{ 
    e.preventDefault();
    let mensaje = textMsj.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let mensajeDesencriptado= desencriptarMensaje(mensaje);
    resultText.textContent = mensajeDesencriptado;
    loaderReading.style.display = "none";
    btnCopiar.style.display = "block";
    resultTitle.textContent = "El resultado es:";

    })

