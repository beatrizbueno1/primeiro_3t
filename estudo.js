
let tabuada = 2;
let nome= "ana clara"

 function escrever(){
    document.write(tabuada +" x 1 ="+(tabuada*1)+"<br>");
    document.write(tabuada +" x 1 ="+(tabuada*1)+"<br>");
    document.write(tabuada +" x 1 ="+(tabuada*1)+"<br>");
    document.write(tabuada +" x 1 ="+(tabuada*1)+"<br>");
    document.write(tabuada +" x 1 ="+(tabuada*1)+"<br>");
    document.write(tabuada +" x 1 ="+(tabuada*1)+"<br>");
    document.write(tabuada +" x 1 ="+(tabuada*1)+"<br>");
    document.write(tabuada +" x 1 ="+(tabuada*1)+"<br>");
    document.write(tabuada +" x 1 ="+(tabuada*1)+"<br>");
    document.write(tabuada +" x 1 ="+(tabuada*1)+"<br>");
    document.write("feito por" + nome)



    function minhaTabuada(){
        for(let i = 1; j <= 9; i++){
        document.write(" tabuada do " +i + " <br> ");
        for(let j = 1; j <=10; j++){
            document.write(i + " x " + " = "(j*j)+ " <br> ");
        }
        document.write("<br>")
        }


        function quadrado(){
            for(let i = 16; i <= 20; i++){
                document.write("0 quadrado de " + i + " é " + (i*i) "<br>")
            }
        }
    }
 }
