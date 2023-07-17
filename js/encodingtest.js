var inputdata=[];
var concat="";
var tabbin=[];
var tabdec=[];
var concat1="";
var signature="";





function converting(which){

    if(which==1){
        let str1=[];
        
        for(let i=0;i<inputdata.length;i++){
           for(let j=0;j<inputdata[i].length;j++){
            str1[j]=inputdata[i][j];
           
           }
           concat1=str1.join("");
         
         tabbin[i]=concat1;
         

        }
       
        concat=tabbin.join("");
          
    }
    else if(which==2){
       
        let len=concat.length;
       
        for(let i=0;i<len;i=i+6){
            
            let tmp1=concat.slice(i,i+6);
            
            
            
             tabdec[i]=converttodecimal(tmp1.toString());
            

        }
        concat=tabdec.join("");
        concat=signature+concat
        
    }



}
function convertto8bits(variable1){


let con="";

variable1=Number(variable1);

 let len=variable1.toString(2).length;

for(let i=0;i<8-len;i++){
    con+="0";
    
}
con+=variable1.toString(2);

return con;

}


function converttodecimal(variable1){
    let con="";
    let tmp=variable1;
    
    let len=variable1.toString().length;
    
    if (len === 2) {
        tmp+="0000";
       
      } else if (len === 4) {
        tmp+="00";
      }
variable1=tmp;

//change if wrong

variable1=Number.parseInt(variable1,2);

if(variable1>=0 && variable1<=25){
    variable1=variable1+65;
}
else if(variable1>=26 && variable1<=51){
    variable1=variable1+71;
}

else if(variable1>=52 && variable1<=61){
    variable1=variable1-4;
    
}
else if(variable1==62){
    variable1=variable1-19;
}else if(variable1==63){
    variable1=variable1-16;
}



con=variable1;
let fin=String.fromCharCode(con);
con=fin.toString();

if (len === 2) {
    con += "==";
  } 
  else if (len === 4) {
    con += "=";
  }

return con;
}


function init(mat){
  

   inputdata=[];
 concat="";
 tabbin=[];
 tabdec=[];
 concat1="";
 signature="";

  const startTime = performance.now();
    var matrix = mat;
    matrix=make2d(matrix);
    inputdata=matrix;
    
    signature+=matrix.length;
    signature+="-";
    signature+=matrix[0].length;
    signature+="-";
    console.log(matrix.length,matrix[0].length);
    converting(1);
converting(2);
const endTime = performance.now();
const executionTime = endTime - startTime;

console.log(`Execution time: ${executionTime} milliseconds`);
return concat;
}

function make2d(matrix) {
    var tmp2d = [];
    for (let i = 0; i < matrix.length; i++) {
      var row = [];
      for (let j = 0; j < matrix[i].length; j++) {
        var [red, green, blue] = matrix[i][j];
        let a1 = convertto8bits(red);
        let a2 = convertto8bits(green);
        let a3 = convertto8bits(blue);
        let str = "";
        str = a1 + a2 + a3;
        row.push(str);
      }
      tmp2d.push(row);
    }
    console.log(tmp2d);
    return tmp2d;
  }




