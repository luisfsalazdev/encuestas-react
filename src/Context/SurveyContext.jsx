import { createContext, useEffect, useState } from 'react'
import { surveys as data } from '../data/survey'

export const SurveyContext = createContext()

export function SurveyContextProvider(props) {
  const [surveys, setSurveys] = useState([]);

  function createSurvey(survey) {
    setSurveys([
      ...surveys,
      {
        title: survey.title,
        id: surveys.lenght,
        respuesta: survey.respuesta,
      },
    ])
  }

  useEffect(() => {
    setSurveys(data)
  }, [])

  return (
    <SurveyContext.Provider
      value={{
        surveys,
        createSurvey
      }}
    >
      {props.children}
    </SurveyContext.Provider>
  )
}

