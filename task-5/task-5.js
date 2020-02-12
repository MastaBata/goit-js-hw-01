let print = prompt('Страна:');
let country = print[0].toUpperCase() + print.slice(1).toLowerCase();
let cash;

switch(country) {
    case "Китай": 
        cash = 100;
        alert(`Доставка в ${country} будет стоить ${cash} кредитов`);
        
        break
  
    case "Чили": 
        cash = 250;
        alert(`Доставка в ${country} будет стоить ${cash} кредитов`);
        
        break

    case "Австралия": 
        cash = 170;
        alert(`Доставка в ${country} будет стоить ${cash} кредитов`);
        
        break
        
    case "Индия": 
        cash = 80;    
        alert(`Доставка в ${country} будет стоить ${cash} кредитов`);
        
        break
    
    case "Ямайка": 
        cash = 120;    
        alert(`Доставка в ${country} будет стоить ${cash} кредитов`);
       
        break    
    
    default:
           
    alert('В вашей стране доставка не доступна')
}