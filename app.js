// var a = 2;
// var b = 1;
// var result= --a - --b + ++b + b--
// alert(result)

// function clicka(){
//     var input = document.getElementById("inp").value;
//      alert(input + " " + "Hello")
// }

    // var input = document.getElementById("num").value;
    // function clickan(){
    //     var input = document.getElementById("num").value;
    //     var paran = document.getElementById("pera");
    //     if (input){
    //         paran.innerHTML = input +" " +"x1 =" + " " + input*1 +"<br />"; 
    //         paran.innerHTML += input +" " +"x2 =" + " " + input*2 +"<br />"; 
    //         paran.innerHTML += input +" " +"x3 =" + " " + input*3 +"<br />"; 
    //         paran.innerHTML += input +" " +"x4 =" + " " + input*4 +"<br />"; 
    //         paran.innerHTML += input +" " +"x5 =" + " " + input*5 +"<br />"; 
    //         paran.innerHTML += input +" " +"x6 =" + " " + input*6 +"<br />"; 
    //         paran.innerHTML += input +" " +"x7 =" + " " + input*7 +"<br />"; 
    //         paran.innerHTML += input +" " +"x8 =" + " " + input*8 +"<br />"; 
    //         paran.innerHTML += input +" " +"x9 =" + " " + input*9 +"<br />"; 
    //         paran.innerHTML +=  input +" " +"x10 =" + " " + input*10 +"<br />"; 
    //          } else{
    //             paran.innerHTML = "5x1 =" + " " + 5*1 +"<br />"; 
    //             paran.innerHTML += "5x2 =" + " " + 5*2 +"<br />"; 
    //             paran.innerHTML += "5x3 =" + " " + 5*3 +"<br />"; 
    //             paran.innerHTML += "5x4 =" + " " + 5*4 +"<br />"; 
    //             paran.innerHTML += "5x5 =" + " " + 5*5 +"<br />"; 
    //             paran.innerHTML += "5x6 =" + " " + 5*6 +"<br />"; 
    //             paran.innerHTML += "5x7 =" + " " + 5*7 +"<br />"; 
    //             paran.innerHTML += "5x8 =" + " " + 5*8 +"<br />"; 
    //             paran.innerHTML += "5x9 =" + " " + 5*9 +"<br />"; 
    //             paran.innerHTML += "5x10 =" + " " + 5*10 +"<br />"; 
    //          }
    // }

    var subject1 = prompt("Enter Your First Subject!");
    var marks1 = prompt("Enter Your Marks of First Subject!");
    var subject2 = prompt("Enter Your Second Subject!");
    var marks2 = prompt("Enter Your Marks of Second Subject!");
    var subject3 = prompt("Enter Your Third Subject!");
    var marks3 = prompt("Enter Your Marks Of Third Subject!");
    var a = parseInt(marks1)
    var b = parseInt(marks2)
    var c = parseInt(marks3)
    var total = 100
    var percen1 = a*100/total;
    var percen2 = b*100/total;
    var percen3 = c*100/total;
    var totalt = total*3;
   var totalm = a+ b+ c
    var totalp = (percen1+percen2+percen3)*(100)/3/100 + "%";
    

    document.getElementById("sub1").innerHTML = subject1;
    document.getElementById("sub2").innerHTML = subject2;
    document.getElementById("sub3").innerHTML = subject3;

    document.getElementById("marks1").innerHTML = marks1;
    document.getElementById("marks2").innerHTML = marks2;
    document.getElementById("marks3").innerHTML = marks3;

    document.getElementById("total1").innerHTML = total;
    document.getElementById("total2").innerHTML = total;
    document.getElementById("total3").innerHTML = total;

    document.getElementById("per1").innerHTML = percen1+"%";
    document.getElementById("per2").innerHTML = percen2+"%";
    document.getElementById("per3").innerHTML = percen3+"%";

    
    document.getElementById("totalm").innerHTML = totalm;
    document.getElementById("totalt").innerHTML = totalt;
    document.getElementById("totalp").innerHTML = totalp;
