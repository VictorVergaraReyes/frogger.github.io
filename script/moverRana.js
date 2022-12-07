const d=document;
let x=0,y=0;
export default function moveFrog(Event,rana,contenedor,car){
    const $rana=d.getElementById(rana),
        $carro=d.querySelector(car),
        $contenedor=d.querySelector(contenedor),
        
        limitsRana=$rana.getBoundingClientRect(),
        limitsContenedor=$contenedor.getBoundingClientRect(),
        limitsCarro=$carro.getBoundingClientRect();

        //console.log(limitsRana,limitsCarro);
    switch (Event.key){
        case "a":
            //move("left")
            if(limitsRana.left>limitsContenedor.left){
                Event.preventDefault();
                x--};
            break;
        case "w":
            if(limitsRana.top>limitsContenedor.top){
                Event.preventDefault();
                y--};
            //move("up")  
            break;
        case "d":
            if(limitsRana.right<limitsContenedor.right){
                Event.preventDefault();
                x++};
            //move("right") 
            break;
        case "s":
            if(limitsRana.bottom<limitsContenedor.bottom){
                Event.preventDefault();
                y++};
                //move("down")  
            break;
        default:
            break;
    }
$rana.style.transform = `translate(${x*15}px, ${y*15}px)` ;
}


