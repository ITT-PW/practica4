
     function getdata() {
        var dato1=document.getElementById("dato1").value;
        var mul=document.getElementById("multiplicador").value;
        var datos=document.getElementById("datos");
        var total=parseInt(dato1)*parseFloat(mul);

    
        datos.innerHTML=" su resultado es "+total;
    }
