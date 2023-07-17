var inputdata1="";
var concatdec="";
var tabbin1=[];
var tabdec1=[];
var concatdec="";
columns="";
rows="";
tab=[];
matrix1=[];



function converting1(which){

    if(which==1){
        for(let i=0;i<inputdata1.length;i++){
            
                let tmp=inputdata1.charAt(i).charCodeAt(0);
        
        
        
         
                tabbin1[i]=convertto8bits1(tmp.toString());
                
            
        }
        // console.log("tabbin1",tabbin1);
        concatdec=tabbin1.join("");
        // console.log("first",concatdec.length,concatdec);        
    }
    else if(which==2){

let index=0;

for(let i=0;i<concatdec.length;i=i+8){
    
    tab[index]=concatdec.slice(i,i+8);
    
    index++;
    
}


    }
    else if(which==3){
       


        let len=tab.length;
        
        for(let i=0;i<len;i++){
            
            let tmp1=tab[i];
            
            
            
             tabdec1[i]=converttodecimal1(tmp1.toString());
          

        }

        let groupsize=3;
        let tmparr=[]
        for(let i=0;i<tabdec1.length;i=i+groupsize){
            tmparr.push([tabdec1[i],tabdec1[i+1],tabdec1[i+2]]);
        }
        let index=0;
        
        for(let i=0;i<rows;i++){
            let row=[];
            for(let j=0;j<columns;j++){
                row.push(tmparr[index]);
                index++;
                
            }
            matrix1.push(row);
        }
        console.log("matrix",matrix1);
        // concatdec=tabdec1.join("");
        // console.log("second",concatdec.length,concatdec); 
    }



}
function convertto8bits1(variable1){


let con="";



if(variable1!=61){
  

    
  
    variable1=Number(variable1);
    if(variable1>=97 && variable1<=122){
        variable1=variable1-71;
    }
    else if(variable1>=65 && variable1<=90){
        variable1=variable1-65;
    }
    
    else if(variable1>=48 && variable1<=57){
        variable1=variable1+4;
    }
    else if(variable1==43){
        variable1=variable1+19;
    }else if(variable1==47){
        variable1=variable1+16;
    }
    
 let len=variable1.toString(2).length;
 for(let i=0;i<6-len;i++){
    con+="0";
    
}
con+=variable1.toString(2);

return con;
}

   


    return con;





}


function converttodecimal1(variable1){
    let con="";
    let len=variable1.toString().length;
    

variable1=Number.parseInt(variable1,2);






con=variable1;


return con;
}
function initdecode(inp){
    

     inputdata1="";
     concatdec="";
     tabbin1=[];
     tabdec1=[];
     concatdec="";
    columns="";
    rows="";
    tab=[];
    matrix1=[];

const startTime = performance.now();
inputdata1=inp;

let t=0;
let stop=0;

for(let i=0;i<inputdata1.length;i++){
if(inputdata1.charAt(i)=="-"){
    
    t=i;
}
}

for (let i = 0; i < t; i++) {
    if (inputdata1.charAt(i) == "-") {
      stop++;
      continue;
    }
    if (stop == 0) {
      rows += inputdata1.charAt(i);
     
    } else {
      columns += inputdata1.charAt(i);
      
    }

}
rows = parseInt(rows);
columns = parseInt(columns);
console.log(columns,rows);
inputdata1=inputdata1.substring(t+1);

converting1(1);
converting1(2);
converting1(3);
const endTime = performance.now();
const executionTime = endTime - startTime;

console.log(`Execution time: ${executionTime} milliseconds`);
console.log("other big matrix",matrix1.length,matrix1[0].length);
return matrix1;
}





