setInterval(()=>{
    var today = new Date();
    if(today.getSeconds()<10){
        document.getElementById("data").innerHTML= today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear()+' '+today.getHours()+':'+today.getMinutes()+':'+0+today.getSeconds();
    }
    else{
        document.getElementById("data").innerHTML= today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear()+' '+today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
    }
},1000);

