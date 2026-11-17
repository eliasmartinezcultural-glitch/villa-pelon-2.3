window.ProgressionData={missions:[
{id:'meet-amalia',title:'Una primera conversación',description:'Acercate a Amalia y conocé su mirada sobre el lugar.',event:'talk',target:'Amalia',goal:1,reward:5,requires:[]},
{id:'meet-tomas',title:'Conocer a quien cuida la huerta',description:'Buscá a Tomás y conversá sobre el trabajo cotidiano.',event:'talk',target:'Tomás',goal:1,reward:5,requires:['meet-amalia']},
{id:'collect-archive',title:'Armar un pequeño archivo',description:'Reuní tres pistas para empezar a ordenar la memoria del territorio.',event:'discover',target:'*',goal:3,reward:10,requires:['meet-amalia']},
{id:'visit-barn',title:'Conocer el galpón',description:'Encontrá el galpón de trabajo y explorá este espacio de la maqueta.',event:'visit',target:'Galpón de trabajo',goal:1,reward:5,requires:['meet-tomas']},
{id:'first-workday',title:'Una jornada compartida',description:'Completá una tarea cotidiana en el galpón.',event:'work',target:'Galpón de trabajo',goal:1,reward:12,requires:['visit-barn']}
]};