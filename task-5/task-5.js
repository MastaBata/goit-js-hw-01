let print = prompt('Страна:');
let country = print.toLowerCase();
let price;
let cash;
let china = "китай";
let chile = "чили";
let australia  = "австралия";
let india  = "индия";
let jamaica  = "ямайка";


switch(country) {
    case china: 
        cash = 100;
        alert(`Доставка в ${country} будет стоить ${cash} кредитов`);
        
        break
  
    case chile: 
        cash = 250;
        alert(`Доставка в ${country} будет стоить ${cash} кредитов`);
        
        break

    case australia: 
        cash = 170;
        alert(`Доставка в ${country} будет стоить ${cash} кредитов`);
        
        break
        
    case india: 
        cash = 80;    
        alert(`Доставка в ${country} будет стоить ${cash} кредитов`);
        
        break
    
    case jamaica: 
        cash = 120;    
        alert(`Доставка в ${country} будет стоить ${cash} кредитов`);
       
        break    
    
    default:
           
    alert('В вашей стране доставка не доступна')
}