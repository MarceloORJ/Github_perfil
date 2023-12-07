import { useState, useEffect } from "react";

const Formulario = () => {

    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    //mount
    //update
    //onmount

    useEffect(() => {
        console.log("O componente iniciou");

        return () =>{
            console.log("o componente finalizou");
        }
    }, [])

    useEffect(() => {
        console.log("O estado nome mudou");
    }, [nome])

    useEffect(() => {
        console.log("MateriaA mudou para: " +materiaA);
    }, [materiaA, materiaB,materiaC])


    const alteraNome = (evento) => {
        // console.log(evento.target.value)
        // setNome(evento.target.value);
        setNome(estadoAnterior => {
            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma/3;

        if(media >= 7){
            return (
                <p>Olá {nome},você foi aprovado</p>
            )
        }
        else{
            return (
                <p>Olá {nome}, você não foi aprovado</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (  
                    <li key={item}>{item}</li>
                    /*aki volta o conceito de que, se for usar mais de uma tag,
                    deve fazer o encapsulamento com outra tag, normalmenteo com o " <> </> "                        
                    <> 
                        <b>{item}</b>
                        <li>{item}</li>
                    </>*/
                ))}
            </ul>

            <input type="text" placeholder="seuNome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={({target}) => setMateriaA(parseFloat(target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseFloat(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseFloat(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}


export default Formulario;