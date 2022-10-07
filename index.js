function getProgress (progress){
  if(progress<25){return "Hledáme váš účet"+progress}
  else if (progress<=50&&progress>=25){return "Přihlašujeme vás"+"%"+progress+"%"}
  else if(progress<=75&&progress>=50){return "Aplikace vykresluje vaše data"+progress}
  else if(progress<=100&&progress>=75){return "Už jen chvilku!"+progress}
  
}
console.log(getProgress(75))