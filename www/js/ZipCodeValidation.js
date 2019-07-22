var zipcodedata;
var flag;
function getZipCodeData(){
    $.getJSON("../zipcodes.json",function(data){
        zipcodedata=data
        flag=true;
        console.log(data)        
    })
}
function validateZipcode(){     
    console.log("hai"+$('#zipInput').val());
    if(flag){
    for(var i=0;i<zipcodedata.zipcodes.length;i++){
        //console.log(document.getElementById("zipInput").value+" "+zipcodedata.zipcodes[i].zipcode==document.getElementById('zipInput').value);
        if(zipcodedata.zipcodes[i].zipcode==$('#zipInput').val()){
            document.getElementById("resZip").innerHTML="<font color=green><h4>Quote Successfully Done</h4></font>";
            break;
        }
        else{
            document.getElementById("resZip").innerHTML="<font color=red><h4>Pet Insurance is not available your location</h4></font>";
        }
}
    }
}