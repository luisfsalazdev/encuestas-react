import Surveylist from './Components/Surveylist'
import SurveyForm from "./Components/SurveyForm"

function App() {  
  return (
    <main className='bg-zinc-900 h-screen'>
      <div className='container mx-auto p-10'>
      <SurveyForm />
      <Surveylist />
      </div>
    </main>
  )
}

export default App
