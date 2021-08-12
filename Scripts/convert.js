$(document).ready(()=>{
    $('#start').click(()=>{
        let i = $('#tasaI').val()
        let f = $('#tasaF').val()
        let Ti = div100($('#t_1').val())
        let Tf = mult100(TEMto(f,toTEM(i,Ti)))
        $('#t_2').val(Tf.toFixed(4))
    })
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl)
    })
    var popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
        trigger: 'focus'
    })
})
var dic = {tem: 1, tet: 2, tes: 3, tea: 4, tnm:5, tnt:6,tns:7, tna:8}

function toTEM(x,y){
    let z = new Number
    if(x==dic['tem']){
        z = y
    }else if(x==dic['tet']){ 
        z = (1+y)**(1/3)-1
    }else if(x==dic['tes']){
        z = (1+y)**(1/6)-1
    }else if(x==dic['tea']){
        z = (1+y)**(1/12)-1
    }else if(x==dic['tnm']){
        z = y
    }else if(x==dic['tnt']){
        z = y/3
    }else if(x==dic['tns']){
        z = y/6
    }else if(x==dic['tna']){
        z = y/12
    }else{
        z=0
    }
    return z
}

function TEMto(x,y){
    let z = new Number
    if(x==dic['tem']){
        z = y
    }else if(x==dic['tet']){ 
        z = (1+y)**(3)-1
    }else if(x==dic['tes']){
        z = (1+y)**(6)-1
    }else if(x==dic['tea']){
        z = (1+y)**(12)-1
    }else if(x==dic['tnm']){
        z = y
    }else if(x==dic['tnt']){
        z = y*3
    }else if(x==dic['tns']){
        z = y*6
    }else if(x==dic['tna']){
        z = y*12
    }else{
        z=0
    }
    return z
}

function div100(x){return x/100}

function mult100(x){return x*100}