
$(document).ready(function(){
    
    $('#simular').click(function(){

        if(validation()==true){
        
            var K = parseFloat(document.getElementById("capital").value)
            var TEA = parseFloat(document.getElementById("tea").value)/100
            var n = parseFloat(document.getElementById("periodo").value)
            
            let TEM = (-1+((1+TEA)**(1/12)))

            var cuota = valCuota();
            var interes = 0
            var principal = 0
            var KacumI = K
            var Kacum = K
            var Ia = 0
            var Pa = 0
            var allInteres = 0
            var allPrestamo = cuota * n

            var card = document.getElementById("card")
            // $('#card').fadeIn(1000)
            // card.style.display = 'block'
            // card.style.overflow = 'hidden'
            card.style.maxHeight = card.scrollHeight + "px"
            // var coll = document.getElementsByClassName("collapsible");
            // var i;

            // for (i = 0; i < coll.length; i++) {
            // coll[i].addEventListener("click", function() {
            //     this.classList.toggle("active");
            //     var content = this.nextElementSibling;
            //     if (content.style.maxHeight){
            //     content.style.maxHeight = null;
            //     } else {
            //     content.style.maxHeight = content.scrollHeight + "px";
            //     }
            // });
            // }

            $('tbody th').remove();
            $('tbody td').remove();
            for(let i = 0; i<n;i++){
                KacumI = Kacum
                interes = Kacum * TEM
                principal = cuota-interes
                Kacum = Kacum - principal
                Ia = Ia + interes
                Pa = Pa + principal
                $('tbody').append("<tr>"+
                "<th scope='row'>" +(i+1)+ "</th>"+
                "<td class='amount'>"+KacumI.toFixed(2)+"</td>"+
                "<td class='amount'>"+cuota.toFixed(2)+"</td>"+
                "<td class='amount'>"+principal.toFixed(2)+"</td>"+
                "<td class='amount'>"+interes.toFixed(2)+"</td>"+
                "<td class='amount'>"+Kacum.toFixed(2)+"</td>"+
                "<td class='amount'>"+Pa.toFixed(2)+"</td>"+
                "<td class='amount'>"+Ia.toFixed(2)+"</td>"+
                +"</tr>")
                
                allInteres = allInteres+interes
        }
        $('#cuota').text(cuota.toFixed(2));
        $('#totalInteres').text(allInteres.toFixed(2));
        $('#totalPrestamo').text(allPrestamo.toFixed(2));
        }
    })

    // $('#capital').blur(function(){
    //     $('#tea').focus();
    // })
    $('#tea').blur(function(){
        let tea = parseFloat($('#tea').val()/100) //en jquery para obtener el valor de un input se usa val()
        let tem = valTEM(tea)
        let tna = valTNA(tem)
        
        tem = tem * 100
        tna = tna * 100

        $('#tna').val(tna.toFixed(2));
        $('#tem').val(tem.toFixed(2));
        
    })

    $('#tna').blur(()=>{
        let tna = parseFloat($('#tna').val()/100)
        let tem = tna/12
        let tea = valTEA(tem)

        tem = tem*100
        tea = tea*100

        $('#tem').val(tem.toFixed(2));
        $('#tea').val(tea.toFixed(2));
        // $('#periodo').focus();
    })

    $('#tem').blur(()=>{
        let tem = parseFloat($('#tem').val()/100)
        let tna = valTNA(tem)
        let tea = valTEA(tem)

        tna = tna * 100
        tea = tea *100

        $('#tna').val(tna.toFixed(2));
        $('#tea').val(tea.toFixed(2));
        // $('#periodo').focus();
    })
    // var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    // var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    //   return new bootstrap.Popover(popoverTriggerEl)
    // })
    // var popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
    //     trigger: 'focus'
    //   })
})

function valCuota(){
    var K = parseFloat(document.getElementById("capital").value)
    var TEA = parseFloat(document.getElementById("tea").value)/100
    var n = parseFloat(document.getElementById("periodo").value)
    
    let TEM = (-1+((1+TEA)**(1/12)))
    let cuota = K * (TEM*((1+TEM)**(n)))/(-1+((1+TEM)**n))
    return cuota
}

function validation(){
    var K = parseFloat(document.getElementById("capital").value)
    var TEA = parseFloat(document.getElementById("tea").value)/100
    var n = parseFloat(document.getElementById("periodo").value)
    if(isNaN(K)){ //si K es diferente de un numero mandara un alerta
        document.getElementById("capital").focus()
        return false
    }else if(isNaN(TEA)){//si TEA es diferente de un número
        document.getElementById("tea").focus()
        return false
    }else if(isNaN(n)){
        document.getElementById("periodo").focus()
        return false
    }else {
        return true
    }
}

function valTEM(TEA){
    
    let TEM = (-1+((1+TEA)**(1/12)))
    return TEM
}

function valTNA(TEM){
    let TNA = TEM*12
    return TNA
}

function valTEA(TEM){
    let TEA = (-1+(1+TEM)**12)
    return TEA
}