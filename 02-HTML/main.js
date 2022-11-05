let alerta = document.getElementById("pedido")

console.log ("funciona")

const envio = (button) => {
  button.addEventListener("click", () => {
    alert("Si el formulario esta lleno se ha enviado la solicitud")
  })
}

envio(alerta);