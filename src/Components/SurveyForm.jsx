import { useState,  useContext } from 'react'
import { SurveyContext } from "../Context/SurveyContext"       

function SurveyForm() {
    const [title, setTitle] = useState("")
    const [respuesta, setRespuesta] = useState("");
    const {createSurvey} = useContext(SurveyContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        createSurvey({
            title,
            respuesta
        });
        setTitle("")
        setRespuesta("")
    }

    return (
        <div className='max-w-md mx-auto'>
            <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
                <h1 className='text-2xl font-bold text-white mb-3'>Responde la encuesta</h1>
            <input
                placeholder="Escribe el número de la pregunta"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className='bg-slate-300 p-3 w-full mb-2'
                autoFocus
            />
            <textarea placeholder='Escribe tu respuesta'
                onChange={(e) => setRespuesta(e.target.value)}
                value={respuesta}
                className='bg-slate-300 p-3 w-full mb-2'>
            </textarea>
            <button
            className='bg-indigo-500 px-3 py-1 text-white'>Guardar</button>
        </form>
        </div>
        

    )
}
export default SurveyForm
