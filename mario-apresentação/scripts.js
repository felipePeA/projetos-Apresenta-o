const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function cliqueNoBotao(){
 form.style.left = "50%"
 form.style.left = "translateX(-50%)"
 mascara.style.visibility = "visible"
}
function voltar(){
    form.style.left = "-330px"
    form.style.left = "translateX(0)"
    mascara.style.visibility = "hidden"
}