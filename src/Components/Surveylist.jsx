import SurveyCard from './SurveyCard'
import { useContext } from 'react';
import {SurveyContext} from '../Context/SurveyContext'   


function Surveylist() {
  const {surveys} = useContext(SurveyContext)



  if (surveys.length === 0) {
    return <h1>No hay respuestas</h1>
  }

  return (
    <div className='grid grid-cols-4 gap-2 p-4 rounded-md'>
      {surveys.map((survey) => (
        <SurveyCard key={survey.id} survey={survey} />
      ))}
    </div>
  );
}

export default Surveylist
