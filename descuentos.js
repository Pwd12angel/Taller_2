//Cramos un array 

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
    let valorCupon ;

    valorCupon = parseInt(inputCupon.value);
    
   
    var reslP = " ",reslC = " ", reslCNuevo = " " ;
    var precioConCupon = 0;

    console.log(valorCupon);
    if (Number.isNaN(valorCupon)){

        console.log("No hay cupon");
        reslP = document.getElementById("Result");
        reslP.innerText = "El precio con descuento es: $" + precioConDescuento ;
   
    }else {

        console.log("Si hay cupon");

        switch(valorCupon){
            case 1:
                 reslP = document.getElementById("Result");
                 reslP.innerText = "El precio con descuento es: $" + precioConDescuento ;
                 
                 reslC = document.getElementById("cup");
                 console.log({precioConDescuento});

                 precioConCupon =  calcularPrecioConDescuento(precioConDescuento,5);

                 reslC.innerText = "Cupon aplicado : " + 1 +" con un 5% de descuento mas";

                
                 reslCNuevo = document.getElementById("ResultCup");
                 
                 reslCNuevo.innerText = "El precio nuevo es: "+precioConCupon ;
                 break;
            case 2:
                reslP = document.getElementById("Result");
                reslP.innerText = "El precio con descuento es: $" + precioConDescuento;
                
                reslC = document.getElementById("cup");
                reslC.innerText = "El cupon es: " + 2;

                precioConCupon =  calcularPrecioConDescuento(precioConDescuento,10);


                reslCNuevo = document.getElementById("ResultCup");
                 reslCNuevo.innerText = "El precio nuevo es: "+precioConCupon;

                break;
            case 3:
                reslP = document.getElementById("Result");
                reslP.innerText = "El precio con descuento es: $" + precioConDescuento;
                
                reslC = document.getElementById("cup");
                reslC.innerText = "El cupon es: " + 3;

                precioConCupon =  calcularPrecioConDescuento(precioConDescuento,20);

                reslCNuevo = document.getElementById("ResultCup");
                reslCNuevo.innerText = "El precio nuevo es: "+precioConCupon;

                break;
        }
    
    }

}

function disable(){
    if(document.getElementById("check").checked == true){
        document.getElementById("InputCupon").disabled = true;
        let campo = document.getElementById("campCupones");
        
        campo.disabled = true;
        campo.style.display = "none";

    }else{
        document.getElementById("InputCupon").disabled = false;
        let campo = document.getElementById("campCupones");
        campo.style.display = "grid";
        console.log(campo);
    }
    
}

