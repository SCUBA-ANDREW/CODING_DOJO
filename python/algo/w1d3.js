function encoder(string){
    var char_cnt = 1
    var expected=""
    if(length(string)==0){
        expected=string
    }
    else{
        for(var i=0; i<length(string);i++){

        }
    }
    return expected
}

// console.log(encoder(aaaabbcddd))

str1="a3b2c12d10"

function decoder(str){
    var ex_str=""
    var temp_cnt=""
    var temp_char=""
    for(var i=0;i<=str.length;i++){
        if(isNaN(parseInt(str[i]))){
            
            ex_str+=temp_char.repeat(temp_cnt)
            // console.log(ex_str)
            temp_char=str[i]
            temp_cnt=""
            // console.log(temp_char)
        }
        else{
            temp_cnt+=str[i]
        }
    }
    return ex_str
}
console.log(decoder(str1))