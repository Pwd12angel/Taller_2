//const precioOriginal = 100;

//const descuento = 15;

function calcularPrecioConDescuento (precio, descuento){
    const porcentajePrecioConDes = 100 - descuento;

    const precioConDescuento = (precio * porcentajePrecioConDes) / 100;

    return precioConDescuento;
}

function prueba (){
    return alert ("Hola");

}

function onClickButton (){
    //llamos al id del precio y el descuento 
    const inputPrice = document.getElementById("InputPrice");
    //Sacamos el valor 
    const valorPrecio = inputPrice.value;


    const inputDiscount = document.getElementById("InputDiscount");
    //Sacamos el valor
    const valorDesc = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(valorPrecio,valorDesc);


    const reslP = document.getElementById("Result");

    reslP.innerText = "El precio con descuento es: $" + precioConDescuento;

}

