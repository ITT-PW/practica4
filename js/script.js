   // alert("hola mundo");
     function getdata() {
        var dato1=document.getElementById("dato1").value;
        var mul=document.getElementById("multiplicador").value;
        var datos=document.getElementById("datos");
        var total=parseInt(dato1)*parseFloat(mul);

    
        datos.innerHTML=" su resultado es "+total;

    }
    // var esteesunstring="este es un string";
    // console.log(esteesunstring.length);
    // console.log(esteesunstring.split(' '));
    // var numero=23.5;
    // var enteros=2;
    // console.log(23.5*2);
