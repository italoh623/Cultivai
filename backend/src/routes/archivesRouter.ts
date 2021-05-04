import { Router } from 'express'
import Archive from '../models/Archive'


const archivesRouter = Router()

const archives = []

archivesRouter.post('/', (request, response) => {
    const { tipo, nome, crm, obs, description, tamanho, conteudo } = request.body

    const archive = new Archive()

    Object.assign(archive, {
        tipo, 
        nome,
        crm,
        obs,
        description, 
        tamanho,
        conteudo,
        created_at: new Date,
        updated_at: new Date
    })

    archives.push(archive)

    return response.json(archive)
})

archivesRouter.put('/', (request, response) => {
    return response.send()
})

archivesRouter.get('/', (request, response) => {
    return response.send()
})

archivesRouter.delete('/:id', (request, response) => {
    return response.send()
})

export default archivesRouter
