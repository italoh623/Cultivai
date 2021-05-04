import { Router } from 'express'
import FeedbacksList from '../lists/FeedbacksList'
import MedicalAppointmentsList from '../lists/MedicalAppointmentsList'
import MedicsList from '../lists/MedicsList'
import SchedulingsList from '../lists/SchedulingsList'
import FeedbackService from '../services/FeedbackService'

const feedbacksRouter = Router()
const feedbacksList = new FeedbacksList()
const medicalAppointmentsList = new MedicalAppointmentsList()
const schedulingsList = new SchedulingsList()
const medicsList = new MedicsList()


feedbacksRouter.post('/', async(request, response) => {
    const { consultaId, rating, descricao } = request.body

    const sendFeedbackService = new FeedbackService(feedbacksList, medicalAppointmentsList, schedulingsList, medicsList)

    await sendFeedbackService.execute({ 
        consultaId,  
        rating,
        descricao
    })

    return response.json({ status: 'Email enviado com sucesso' })
})


feedbacksRouter.get('/', (request, response) => {
    return response.send()
})

feedbacksRouter.delete('/:id', (request, response) => {
    return response.send()
})

export default feedbacksRouter