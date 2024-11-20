Window.addEventListener('DOMContentLoaded',(event)=>{

getVisitCount()
}


const functionApi='';

const getVisitCount=()=>{
    Let count=30;

    fetch(functionApi).then (response=>{
        return response.json{}

    }).then response => {
        console.log("Website called function API")
        count=response.count;
        document.getElementById "counter".Innertext=count;
     }).catch(function(error){
        console.log(error);
        return count

     })

    
}