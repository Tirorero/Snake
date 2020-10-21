function map() {
    document.getElementById('div0').textContent = ''
    for( let i = 0; i<document.getElementById("size").value;i++) {
        
        var new_div = document.createElement("div");
        
        document.getElementById("div0").append(new_div)
    }
}



function idiki() {
    let divs = document.getElementsByTagName("div");
    for(let i = 0; i<divs.length; i++) {
        divs[i].setAttribute("id", "div" + i);
        
        if(document.getElementById("size").value == 25){
            document.getElementById("div0").style.width = "85px"
        }
        else if(document.getElementById("size").value == 100){
        document.getElementById("div0").style.width = "170px"
    }else if(document.getElementById("size").value == 400){
        document.getElementById("div0").style.width = "340px"
    }else if(document.getElementById("size").value == 1600){
        document.getElementById("div0").style.width = "680px"
    }

}}

let j = Math.floor(Math.random() * document.getElementById("size").value + 1)
let l = Math.floor(Math.random() * document.getElementById("size").value + 1)

let fragments = [j,j]

let fragments_2 = fragments
function start() {
    j = Math.floor(Math.random() * document.getElementById("size").value + 1)
    document.getElementById("div" + j).style.background = "darkgreen"
    fragments = [j,j]
    fragments_2 = fragments
    
}

let speed = document.getElementById("speedid").value



let barrier_sr = [];
let barrier_sl = [];
let barrier_mr = [];
let barrier_ml = [];
let barrier_lr = [];
let barrier_ll = [];
let barrier_er = [];
let barrier_el = [];


for(let i = 5; i <= 25;i+=5 ){
    barrier_sr.push(i)
}
for(let i = 1; i <= 21;i+=5 ){
    barrier_sl.push(i)
}
for(let i = 10; i <= 100;i+=10 ){
    barrier_mr.push(i)
}
for(let i = 1; i <= 91;i+=10 ){
    barrier_ml.push(i)
}
for(let i = 20; i <= 400;i+=20 ){
    barrier_lr.push(i)
}
for(let i = 1; i <= 381;i+=20 ){
    barrier_ll.push(i)
}
for(let i = 40; i <= 1600;i+=40 ){
    barrier_er.push(i)
}
for(let i = 1; i <= 1561;i+=40 ){
    barrier_el.push(i)
}


let points = 0
var varup
var vardown
var varright
var varleft


    function up() {  
        
        if(j != fragments[1] + 20 && j != fragments[1] + 5 && j != fragments[1] + 10 && j != fragments[1] + 40) {
        clearInterval(varright)
        clearInterval(varleft)
        clearInterval(vardown)
        clearInterval(varup)

         varup = setInterval(function() {  
            

            
                
            let divs = document.getElementsByTagName("div");
            for(let k = 0; k<divs.length; k++) {
                divs[k].style.background = 'gainsboro'}; 

                let div0 = document.getElementById("div0");
            for(let k = 0; k<1; k++) {
                div0.style.background = 'black'};

                

                

                

                
        
        


  for ( let i=(fragments.length-1); i > 0; i--) {
    
    
    fragments_2[i] = fragments[i-1];
    
    
  }
  if(document.getElementById("size").value == 25){
    fragments_2[0] = fragments_2[1]-5;
}
else if(document.getElementById("size").value == 100){
    fragments_2[0] = fragments_2[1]-10;
}else if(document.getElementById("size").value == 400){
    fragments_2[0] = fragments_2[1]-20;
}else if(document.getElementById("size").value == 1600){
    fragments_2[0] = fragments_2[1]-40;
}

if(fragments[0] < 1){
    clearInterval(varup)
    alert("Porażka")
    return

}
  
  fragments = fragments_2;

  for(let f = 0; f < fragments.length; f++) {
    document.getElementById("div" + fragments[f]).style.background = 'lightgreen'
    
    
    
    
    };
  

    if(document.getElementById("size").value == 25){
        j-=5
    }
    else if(document.getElementById("size").value == 100){
    j-=10
}else if(document.getElementById("size").value == 400){
    j-=20
}else if(document.getElementById("size").value == 1600){
    j-=40
}
                
            
            document.getElementById("div" + j).style.background = "darkgreen"; 
            
            if(l == j){
                fragments.push(fragments[fragments.length - 1]);
                points++ 
            }

            document.getElementById("pointsid").innerHTML = points

            while(l == j || fragments.includes(l) == true){
                l = Math.floor(Math.random() * document.getElementById("size").value + 1);
            }
            
                document.getElementById("div" + l).style.background = "red"
                
                if(fragments.slice(1).includes(j) == true) {

                    alert("Porażka")
                    clearInterval(varright)
        clearInterval(varleft)
        clearInterval(vardown)
        clearInterval(varup)
                }
                
                
                            
                    
                              
        }, speed)
      }}
      
      function right() {  

        if(j != fragments[1] - 1) {
        

        clearInterval(varup)
        clearInterval(vardown)
        clearInterval(varleft)
        clearInterval(varright)
        varright = setInterval(function() {   
             
            let divs = document.getElementsByTagName("div");
        for(let k = 0; k<divs.length; k++) {
            divs[k].style.background = 'gainsboro'};

            let div0 = document.getElementById("div0");
            for(let k = 0; k<1; k++) {
                div0.style.background = 'black'};



                


        
        
        


        for ( let i=(fragments.length-1); i > 0; i--) {
    
    
            fragments_2[i] = fragments[i-1];
            
            
          }

          if(barrier_sr.includes(j) == true && document.getElementById("size").value == 25){
            clearInterval(varright)
            alert("Porażka")
            return
        
        }else if(barrier_mr.includes(j) == true && document.getElementById("size").value == 100){
            clearInterval(varright)
            alert("Porażka")
            return
        }else if(barrier_lr.includes(j) == true && document.getElementById("size").value == 400){
            clearInterval(varright)
            alert("Porażka")
            return
        }else if(barrier_er.includes(j) == true && document.getElementById("size").value == 1600){
            clearInterval(varright)
            alert("Porażka")
            return
        }
          
          fragments_2[0] = fragments_2[1]+1;
          
          fragments = fragments_2;
        
          for(let f = 0; f < fragments.length; f++) {
            document.getElementById("div" + fragments[f]).style.background = 'lightgreen'
            
            
            
            
            };
          
        
        
        


        
            
            j++;
            document.getElementById("div" + j).style.background = "darkgreen";  

            if(l == j){
                fragments.push(fragments[fragments.length - 1])
                points++ 
            }

            document.getElementById("pointsid").innerHTML = points

            while(l == j || fragments.includes(l) == true){
                l = Math.floor(Math.random() * document.getElementById("size").value + 1);
            }
            
                document.getElementById("div" + l).style.background = "red"
                
                
                if(fragments.slice(1).includes(j) == true) {

                    alert("Porażka")
                    clearInterval(varright)
        clearInterval(varleft)
        clearInterval(vardown)
        clearInterval(varup)
                }
                
                
                
               
                            
                    
                              
        }, speed)
      }}
      function left() {  
        
        if(j != fragments[1] + 1) {
        clearInterval(varup)
        clearInterval(vardown)
        clearInterval(varright)
        clearInterval(varleft)
        varleft = setInterval(function() {  
            
            let divs = document.getElementsByTagName("div");
        for(let k = 0; k<divs.length; k++) {
            divs[k].style.background = 'gainsboro'}; 

            let div0 = document.getElementById("div0");
            for(let k = 0; k<1; k++) {
                div0.style.background = 'black'};

            
        

        for ( let i=(fragments.length-1); i > 0; i--) {
    
    
            fragments_2[i] = fragments[i-1];
            
            
          }
          
            
            if(barrier_sl.includes(j) == true && document.getElementById("size").value == 25){
                clearInterval(varleft)
                alert("Porażka")
                return
            
            }else if(barrier_ml.includes(j) == true && document.getElementById("size").value == 100){
                clearInterval(varleft)
                alert("Porażka")
                return
            }else if(barrier_ll.includes(j) == true && document.getElementById("size").value == 400){
                clearInterval(varleft)
                alert("Porażka")
                return
            }else if(barrier_el.includes(j) == true && document.getElementById("size").value == 1600){
                clearInterval(varleft)
                alert("Porażka")
                return
            }
          
          fragments_2[0] = fragments_2[1]-1;
          
          fragments = fragments_2;
        
          for(let f = 0; f < fragments.length; f++) {
            document.getElementById("div" + fragments[f]).style.background = 'lightgreen'
            
            
            
            
            };
          
        
            
            
            
            j--;
            document.getElementById("div" + j).style.background = "darkgreen"; 
            
            if(l == j){
                fragments.push(fragments[fragments.length - 1])
                points++
            }

            document.getElementById("pointsid").innerHTML = points

            while(l == j || fragments.includes(l) == true){
                l = Math.floor(Math.random() * document.getElementById("size").value + 1);
            }
            
                document.getElementById("div" + l).style.background = "red"
                
                
                if(fragments.slice(1).includes(j) == true) {

                    alert("Porażka")
                    clearInterval(varright)
        clearInterval(varleft)
        clearInterval(vardown)
        clearInterval(varup)
                }
                
               
                            
                    
                              
        }, speed)
      }}
      function down() {  
        
         if(j != fragments[1] - 20 && j != fragments[1] - 5 && j != fragments[1] - 10 && j != fragments[1] - 40) {  
        clearInterval(varup)
        clearInterval(varright)
        clearInterval(varleft)
        clearInterval(vardown)
        vardown = setInterval(function() {   
             
            let divs = document.getElementsByTagName("div");
        for(let k = 0; k<divs.length; k++) {
            divs[k].style.background = 'gainsboro'};

            let div0 = document.getElementById("div0");
            for(let k = 0; k<1; k++) {
                div0.style.background = 'black'};

            
        

        for ( let i=(fragments.length-1); i > 0; i--) {
    
    
            fragments_2[i] = fragments[i-1];
            
            
          }
          

          if(document.getElementById("size").value == 25){
            fragments_2[0] = fragments_2[1]+5;
        }
        else if(document.getElementById("size").value == 100){
            fragments_2[0] = fragments_2[1]+10;
        }else if(document.getElementById("size").value == 400){
            fragments_2[0] = fragments_2[1]+20;
        }else if(document.getElementById("size").value == 1600){
            fragments_2[0] = fragments_2[1]+40;
        }
        if(fragments[0] > (document.getElementById("size").value)){
            clearInterval(vardown)
            alert("Porażka")
            return
        }
          
          fragments = fragments_2;
        
          for(let f = 0; f < fragments.length; f++) {
            document.getElementById("div" + fragments[f]).style.background = 'lightgreen'
            
            
            
            
            };
          
        
        
            if(document.getElementById("size").value == 25){
                j+=5
            }
            else if(document.getElementById("size").value == 100){
            j+=10
        }else if(document.getElementById("size").value == 400){
            j+=20
        }else if(document.getElementById("size").value == 1600){
            j+=40
        }
            
            
            document.getElementById("div" + j).style.background = "darkgreen";  
            
            if(l == j){
                fragments.push(fragments[fragments.length - 1])
                points++
            }

            document.getElementById("pointsid").innerHTML = points

            while(l == j || fragments.includes(l) == true){
                l = Math.floor(Math.random() * document.getElementById("size").value + 1);
            }
            
                document.getElementById("div" + l).style.background = "red"
                
                
                
                if(fragments.slice(1).includes(j) == true) {

                    alert("Porażka")
                    clearInterval(varright)
        clearInterval(varleft)
        clearInterval(vardown)
        clearInterval(varup)
                }
                            
                    
                              
        }, speed)
      }}

      window.addEventListener("keyup", function(event) {
        
        if (event.keyCode === 38) {
          
          event.preventDefault();
          
          document.getElementById("up").click();
        }
      }); 
      window.addEventListener("keyup", function(event) {
        
        if (event.keyCode === 39) {
          
          event.preventDefault();
          
          document.getElementById("right").click();
        }
      }); 
      window.addEventListener("keyup", function(event) {
        
        if (event.keyCode === 40) {
          
          event.preventDefault();
          
          document.getElementById("down").click();
        }
      }); 
      window.addEventListener("keyup", function(event) {
        
        if (event.keyCode === 37) {
          
          event.preventDefault();
          
          document.getElementById("left").click();
        }
      }); 


      function speedd() {
        speed = document.getElementById("speedid").value
    }