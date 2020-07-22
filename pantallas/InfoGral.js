import React from 'react';
import {Text, Container, Body, Header, Content, Accordion, Card} from 'native-base';
import LogoImage from '../img/LogoImage';

const dataArray = [
    { title: "¿Qué es la Contaminación Atmosférica?", content: "La contaminación atmosférica es la presencia en la atmósfera de sustancias en una cantidad que implique molestias o riesgo para la salud de las personas y de los demás seres vivos, vienen de cualquier naturaleza, así como que puedan atacar a distintos materiales, reducir la visibilidad o producir olores desagradables. El nombre de la contaminación atmosférica se aplica por lo general a las alteraciones que tienen efectos dañinos en los seres vivos y los elementos materiales." },
    { title: "¿Cuales son los gases contaminantes?", content: "Los principales responsables de la contaminación atmosférica son, por lo general:Dióxido de carbono (CO2) y otros gases de efecto invernadero, como el metano (CH4). Monóxido de carbono (CO), particularmente tóxico y dañino para la vida. Los óxidos de azufre (SOx) y de nitrógeno (NOx), que al llegar a la atmósfera se combinan con el vapor de agua y producen ácido sulfúrico, generando las llamadas lluvias ácidas. El ozono (O3), que si bien se halla naturalmente en un estrato específico de la atmósfera, al incrementar su presencia en otros estratos, se descompone frente a la radiación solar y libera enormes cantidades de energía, calentando la atmósfera artificialmente. Las partículas en suspensión (PM, del inglés Particulate Matter) son todas las partículas sólidas y líquidas que se encuentran suspendidas en el aire, la mayor parte de las cuales suponen un peligro. Esta mezcla compleja contiene, entre otras cosas, polvo, polen, hollín, humo y pequeñas gotas" },
    { title: "¿Qué es la contaminación Sonora?", content: "Se llama contaminación acústica, contaminación sónica o contaminación sonora al exceso de sonido que altera las condiciones normales del ambiente en una determinada zona." },
    { title: "¿Como se origina?", content: "La contaminación acústica puede proceder de múltiples fuentes, pero estas son las principales: Tráfico automovilístico, Tráfico aéreo, Obras de Construcción, Restauración y ocio nocturno y por último los animales" },
    { title: "¿Qué plantas puedo plantar?", content: "pegar información de vero" },
  ];

export default class InfoGral extends React.Component {
    render() {
        return (
        <>
        <Header style ={{backgroundColor: '#00B18F', height: 60}} >
            <Body>
            <LogoImage />
            </Body>
        </Header>

        <Content padder>
            <Accordion dataArray={dataArray} expanded={0} contentStyle={{}} headerStyle={{backgroundColor:'#BFEBD0', color: 'white', marginTop: 5}}/>
        </Content>
        </>
        );
    }   
}