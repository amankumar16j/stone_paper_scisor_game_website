function game(u){

    let p_arr=Array.from(document.getElementById("player").innerHTML)
    let c_arr=Array.from(document.getElementById("computer").innerHTML)
    let d_arr=Array.from(document.getElementById("draw").innerHTML)

    let d_count= Number.parseInt(d_arr[0])
    let comp_count=Number.parseInt(c_arr[0])
    let user_count=Number.parseInt(p_arr[0])

    let choice=["Rock","Paper","Scissor"]

    let length=choice.length

    let index=Math.floor(Math.random()*(length+1))
    let c=choice[index]

    if(u==c){
        d_count+=1
        document.getElementById("draw").innerHTML=d_count
        document.getElementById("result").innerHTML="DRAW!!"
    }
    if(u=="Rock"){
        if(c=="Paper"){
            comp_count+=1
            document.getElementById("computer").innerHTML=comp_count
            document.getElementById("result").innerHTML="COMPUTER WON!!"
            
        }
        if(c=="Scissor"){
            user_count+=1
            document.getElementById("player").innerHTML=user_count
            document.getElementById("result").innerHTML="PLAYER WON!!"
        }
    }
    if(u=="Scissor"){
        if(c=="Rock"){
            comp_count+=1
            document.getElementById("computer").innerHTML=comp_count
            document.getElementById("result").innerHTML="COMPUTER WON!!"
            
        }
        if(c=="Paper"){
            user_count+=1
            document.getElementById("player").innerHTML=user_count
            document.getElementById("result").innerHTML="PLAYER WON!!"
        }
    }
    if(u=="Paper"){
        if(c=="Scissor"){
            comp_count+=1
            document.getElementById("computer").innerHTML=comp_count
            document.getElementById("result").innerHTML="COMPUTER WON!!"
        }
        if(c=="Rock"){
            user_count+=1
            document.getElementById("player").innerHTML=user_count
            document.getElementById("result").innerHTML="PLAYER WON!!"
        }
    }

    



}