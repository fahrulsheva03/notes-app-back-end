/* eslint-disable no-undef */
/* eslint-disable comma-spacing */
/* eslint-disable no-trailing-spaces */
/* eslint-disable arrow-spacing */
/* eslint-disable key-spacing */
/* eslint-disable indent */
/* eslint-disable keyword-spacing */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */

const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNotesByIdHandler, deleteNotesByIdHandler } = require('./handler')

const router = [{
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler
}, {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler
},{
    method : 'GET',
    path : '/notes/{id}',
    handler : getNoteByIdHandler
},{
    method : 'PUT',
    path : '/notes/{id}',
    handler : editNotesByIdHandler
},{
    method : 'DELETE',
    path : '/notes/{id}',
    handler: deleteNotesByIdHandler
}]
module.exports = router
