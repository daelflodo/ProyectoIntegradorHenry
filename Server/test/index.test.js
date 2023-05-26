const app = require('../src/app');
const session = require('supertest');
const request = session(app);

describe("Test de RUTAS",()=>{
    describe('GET /rickandmorty/character/:id',()=>{
        it('Responde con status: 200', async ()=> {
            // await agent.get('/rickandmorty/character/1').expect(200)
            const response = await request.get('/rickandmorty/character/1')
            expect(response.statusCode).toBe(200) 
        })
    })
})

