/* eslint-disable space-before-blocks */
/* eslint-disable object-curly-spacing */
/* eslint-disable comma-spacing */
/* eslint-disable key-spacing */
/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable indent */
/* eslint-disable keyword-spacing */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */

const { nanoid } = require('nanoid')
const notes = require('./notes.js')


function addNoteHandler (request, h) {
    const { title, tags, body } = request.payload

    const id = nanoid(12)
    const createdAt = new Date().toDateString()
    const updateAt = createdAt
    const catatanBaru = {
        title, tags, body, id, createdAt, updateAt
    }

    notes.push(catatanBaru)

    const isSuccess = notes.filter((note) => note.id === id).length > 0

    if (isSuccess) {
        const response = h.response({
            status: 'Success',
            message: 'Catatan berhasil ditambahkan!',
            note: {
                noteId: id
            }
        })
        response.code(201)
        return response
    }

    const response = h.response({
        status: 'Failed',
        message: 'Data gagal ditambahkan'
    })
    response.code(404)
    return response
}

const getAllNotesHandler = () => ({
    status : 'success',
    data : {
        notes
    }
})

const getNoteByIdHandler = (request, h) => {
    const { id } = request.params

    const note = notes.filter((note) => note.id === id)[0]

    if (note !== undefined) {
        return {
            status :'success',
            data : {
                note
            }
        }
    }

    const response = h.response({
        status :'fail',
        message : 'Data gagal di tampilkan'
    })
    response.code(404)
    return response
}

const editNotesByIdHandler = (request, h) => {
    const {id} = request.params

    const {title,tags,body} = request.payload
    const updateAt = new Date().toISOString()

    const index = notes.findIndex((note) => note.id === id)

    if (index !== -1){
        notes[index] = {
            ...notes[index],
            title,
            tags,
            body,
            updateAt
        }

        const response = h.response({
            status : 'success',
            message : 'Data berhasil diupdate'
        })
        response.code(200)
        return response
    }

    const response = h.response({
        status :'failed',
        message : 'Data gagal diupdate'
    })
    response.code(404)
    return response
}

const deleteNotesByIdHandler = (request,h) => {
    const {id} = request.params

    const index = notes.findIndex((note) => note.id === id)

    if (index !== -1){
        notes.splice(index, 1)
        const response = h.response({
            status : 'success',
            message : 'Data berhasil di hapus'
        })
        response.code(200)
        return response
    }

    const response = h.response({
        status : 'failed',
        message : 'Gagal menghapus data'
    })
    response.code(200)
    return response
}


module.exports = { addNoteHandler , getAllNotesHandler , getNoteByIdHandler , editNotesByIdHandler, deleteNotesByIdHandler}
