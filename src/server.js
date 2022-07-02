/* eslint-disable no-undef */
/* eslint-disable key-spacing */
/* eslint-disable indent */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable keyword-spacing */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */

const Hapi = require('@hapi/hapi')
const router = require('./router')

const koneksi = async () => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
        routes: {
            cors: {
                origin :['*']
            }
        }
    })

    server.route(router)
    await server.start()
    
    
    console.log(`Server berhasil berjalan pada ${server.info.uri}`)
    }

koneksi()


