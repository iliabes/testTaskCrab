export function getCurrentDate(){
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const hours = currentDate.getHours();
    const munites = currentDate.getMinutes();
    
    function  correctmonth(){
        if(month < 10){
            return '0' + month
        }else {
            return month
        }
    } 


  
    return `${day}.${correctmonth()}.${year} ${hours}:${munites}`;
};

export  function generateAti(){
    let min = 11111
    let max = 99999
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }