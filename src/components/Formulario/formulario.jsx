import { useState, useEffect } from "react";

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("O componente iniciou");
    }, []);

    useEffect(() => {
        console.log("O componente iniciou");
        return () => {
            console.log("O componente finalizou");
        }
    }, []);

    useEffect(() => {
        console.log("O estado nome mudou");
    }, [nome]);

    useEffect(() => {
        console.log("Materia A mudou para: " + materiaA)
    }, [materiaA, materiaB, materiaC]);

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>Olá {nome}, você foi aprovado com Soma total igual a: {soma} e Média final igual a: {media}</p>
            )
        } else {
            return (
                <p>Olá {nome}, você NÃO foi aprovado com Soma total igual a: {soma} e Média final igual a: {media}</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <input type="text" placeholder="Nome Aluno" onChange={evento => setNome(evento.target.value)} />
            <input type="number" placeholder="Nota matéria A" onChange={evento => setMateriaA(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;