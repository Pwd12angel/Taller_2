//Cramos un array 
let cupones = [
    "Cupon1",
    "Cupon2",
    "Cupon3"
];



function calcularPrecioConDescuento (precio, descuento){
    const porcentajePrecioConDes = 100 - descuento;

    const precioConDescuento = (precio * porcentajePrecioConDes) / 100;

    return precioConDescuento;
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

    //Obtenemos el valor del cupon
    const inputCupon = document.getElementById("InputCupon");
    const valorCupon = inputCupon.value;
    
   
    var reslP = " ",reslC = "" ;

    switch(valorCupon){
        case cupones[0]:
             reslP = document.getElementById("Result");
             reslP.innerText = "El precio con descuento es: $" + precioConDescuento ;
             
             reslC = document.getElementById("cup");
             reslC.innerText = "El cupon es: " + cupones[0];

             break;
        case cupones[1]:
            reslP = document.getElementById("Result");
            reslP.innerText = "El precio con descuento es: $" + precioConDescuento;
            
            reslC = document.getElementById("cup");
            reslC.innerText = "El cupon es: " + cupones[1];

            break;
        case cupones[2]:
            reslP = document.getElementById("Result");
            reslP.innerText = "El precio con descuento es: $" + precioConDescuento;
            
            reslC = document.getElementById("cup");
            reslC.innerText = "El cupon es: " + cupones[2];
            break;
    }

   

}

