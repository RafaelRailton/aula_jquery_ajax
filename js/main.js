function ConsultaCep(){
let cep = document.getElementById("cep").value;
console.log(cep);
let url = "https://viacep.com.br/ws/"+cep+"/json/";


    $.ajax({
        url: url,
        type: "get",
        success: function(a){
            console.log(a);
           document.getElementById("info").innerHTML = a.cep +"-" + a.logradouro;
        }
    });
}