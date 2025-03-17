let random = Math.floor(Math.random() * 100) + 1;
let contadorIntentos = 0;
function maMeIg(event)
{
    event.preventDefault();
    let numIngresado = document.getElementById("numIngresado").value;
    const mensajeContenedor = document.getElementById("mensajeResultado");
    let mensaje = " ";
    let adivino = false;
    if(numIngresado >= 1  && numIngresado <= 100 )
    {
        if (numIngresado < random)
        {
            console.log(random);
            mensaje = 'El número que dijiste es MENOR al número elegido';
            contadorIntentos++;
        }
        else if (numIngresado == random)
        {
            console.log(random);
            adivino = true;
            mensaje = `¡Acertaste! Felicitaciones. Intentaste ${contadorIntentos} veces`;
            setTimeout(function() {
                location.reload();
            }, 4000);
        }
        else if (numIngresado > random)
        {
            console.log(random);
            mensaje = 'El número que dijiste es MAYOR al número elegido';
            contadorIntentos++;
        }
    }
    else
    {
       alert('Por favor, ingrese un número dentro del rango permitido')
    }

    mensajeContenedor.innerHTML = `<p>${mensaje}</p>`;
    maMeIg.submit();
}


