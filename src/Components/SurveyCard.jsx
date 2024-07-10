import {useContext} from 'react'
import {SurveyContext} from '../Context/SurveyContext'

function SurveyCard({ survey }) {
    
    return (
        <div className='bg-gray-800 text-white'>
            <h1 className='text-xl font-bold'>{survey.title}</h1>
            <p className='text-gray-500 text-sm'>{survey.respuesta}</p>
            
        </div>

    )
}

export default SurveyCard


