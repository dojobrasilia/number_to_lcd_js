function lcd(n){
  var numero = []

  if (n == 1 || n == 4 || n == 8 || n == 9){
    
    numero[0] = "   ";
    
    if(n == 1){
      numero[1] = "  |";
    }else{
      numero[1] = "|_|";
    }
    
    numero[2] = "  |";

  }

  if (n == 0 || n == 2 || n==3 || n == 5 || n == 6 || n == 7 || n == 8 || n ==9 ){
    
    numero[0] = " _ ";
    
    if (n == 2 || n==3){
      numero[1] = " _|";
      
    }else if( n == 5 || n == 6){
      numero[1] =  "|_ ";
      
    }else if( n == 7){
      numero[1] =  "| |";
    }
    
    if (n == 2){
      numero[2] = "|_ ";
      
    }else if(n == 3 || n == 5){
      numero[2] = " _|";   
      
    }else if(n == 6 || n == 8){
      numero[2] = "|_|";   
      
    } else if(n == 7){
      numero[2] = "  |";   
    } else if(n == 9){
        numero[2] = " _|";   
      }
    
    
    
  }
  
  
  numero[3] = "   ";

  
  return join(numero);
  
}


function join(numero){
  a = ""
  for(var i=0; i<4 ; i++){
    a += numero[i];
    a += "\n";
  }
  return a;
}
