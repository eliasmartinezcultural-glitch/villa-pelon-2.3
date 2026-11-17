/* Sistemas de mundo: rutinas y clima deterministas. Las personas y escenas son recreaciones ficticias. */
window.WorldSystems=(()=>{
'use strict';
const routines={
 Amalia:[{at:6,x:13,y:12,activity:'en casa'},{at:9,x:17,y:14,activity:'recorriendo el barrio'},{at:13,x:13,y:12,activity:'en casa'},{at:16,x:17,y:14,activity:'conversando con vecinos'},{at:20,x:10,y:16,activity:'descansando'}],
 Tomás:[{at:6,x:25,y:18,activity:'preparando el trabajo'},{at:9,x:22,y:22,activity:'trabajando en la huerta'},{at:13,x:25,y:18,activity:'haciendo una pausa'},{at:15,x:22,y:22,activity:'trabajando en la huerta'},{at:19,x:25,y:18,activity:'volviendo a casa'},{at:22,x:25,y:18,activity:'descansando'}],
 Rosa:[{at:6,x:17,y:23,activity:'en casa'},{at:10,x:13,y:21,activity:'caminando por el sendero'},{at:14,x:17,y:23,activity:'ordenando sus recuerdos'},{at:17,x:13,y:21,activity:'dando un paseo'},{at:20,x:17,y:23,activity:'descansando'}]
};
function npcPosition(n,clock){
 const schedule=routines[n.name];if(!schedule)return {x:n.x,y:n.y,activity:'disponible'};
 const hour=((clock||480)%1440)/60;let current=schedule[0],next=schedule[0];
 for(let i=0;i<schedule.length;i++){if(schedule[i].at<=hour)current=schedule[i];if(schedule[i].at>hour){next=schedule[i];break}if(i===schedule.length-1)next={...schedule[0],at:24}}
 const span=Math.max(.01,next.at-current.at),t=Math.max(0,Math.min(1,(hour-current.at)/span));
 return {x:current.x+(next.x-current.x)*t,y:current.y+(next.y-current.y)*t,activity:current.activity};
}
function npcGreeting(activity,clock){const h=Math.floor((clock||480)/60);if(h<6||h>=22)return 'Parece que está por descansar.';return 'Ahora está '+activity+'.';}
function climate(day){const seasons=['verano','otoño','invierno','primavera'];const weather=['despejado','ventoso','nublado','soleado','fresco'];const d=Math.max(1,day||1);return {season:seasons[Math.floor((d-1)/7)%4],weather:weather[(d*7+Math.floor(d/3))%weather.length]};}
return {npcPosition,npcGreeting,climate};
})();