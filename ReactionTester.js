let shape = document.getElementById('shape');
let ans = document.getElementById('ans');
shape.addEventListener('click',onClick);
let start;

function onClick()
{   
    let end = new Date().getTime();
    let total = (end - start)/1000;
    ans.innerHTML = total.toFixed(2)+" seconds!";
    shape.style.display = "none";
    
    setTimeout(shapeAppear,Math.random()*2000);
}




setTimeout(shapeAppear(),Math.random()*2000);
function shapeAppear()
{
    
    let num = Math.random();
        let dimension1 = Math.floor(Math.random()*500);
        let dimension2 = Math.floor(Math.random()*500);
    
    if(num<0.5){
              shape.style.borderRadius = "50%";
    }
    else{
        
      shape.style.borderRadius ="0";  
    }
    
    let colo = colorGenerator();
    let colo1 = colorGenerator();
    
    document.body.style.backgroundColor=colo1;
    shape.style.backgroundColor = colo;
    shape.style.top = dimension1+"px";
    shape.style.left = dimension2+"px";
    shape.style.right = dimension1+"px";
    shape.style.bottom = dimension2+"px";
    shape.style.display="block";
    start = new Date().getTime();
}


function colorGenerator()
{
    var letters = '0123456789ABCDEF';
  
                    var color = '#';
  
                    for (var i = 0; i < 6; i++) {
    
                        color += letters[Math.floor(Math.random() * 16)];
  
                    }
 
                    return color;

}
