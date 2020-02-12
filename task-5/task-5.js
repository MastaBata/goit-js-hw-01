let print = prompt('Страна:');
let country = print.toLowerCase();
let cash;

switch(country) {
    case "китай": 
        cash = 100;
        alert(`Доставка в ${country} будет стоить ${cash} кредитов`);
        
        break
  
    case "чили": 
        cash = 250;
        alert(`Доставка в ${country} будет стоить ${cash} кредитов`);
        
        break

    case "австралия": 
        cash = 170;
        alert(`Доставка в ${country} будет стоить ${cash} кредитов`);
        
        break
        
    case "индия": 
        cash = 80;    
        alert(`Доставка в ${country} будет стоить ${cash} кредитов`);
        
        break
    
    case "ямайка": 
        cash = 120;    
        alert(`Доставка в ${country} будет стоить ${cash} кредитов`);
       
        break    
    
    default:
           
    alert('В вашей стране доставка не доступна')
}