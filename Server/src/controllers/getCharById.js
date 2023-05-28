const axios = require('axios')
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async(req, res)=>{
    try {
        const {id} = req.params
        const {data} = await axios(`${URL}${id}`)
        //const {name, gender,species,origin,image,status} = await axios(`${URL}${id}`)
        // console.log(data);
        if(!data.name) throw Error('Error Cliente')
        // console.log(Error);
            const character = {
                id:data.id,
                name:data.name,
                gender:data.gender,
                species:data.species,
                origin:data.origin,
                image:data.image,
                status:data.status  
            }
            // const character = {
            //     id,
            //     name,
            //     gender,
            //     species,
            //     origin,
            //     image,
            //     status  
            // }
           return res.status(200).json(character)
        
        // return res.status(404).send('Not found')
    
    } catch (error) {
        if (error.message === 'Error Cliente'){
            res.status(404).send(' La propiedad del personaje no existe')
        }else{
            res.status(500).send(error.response.data.error)// me quedo con el error q lanza la api
        }
        // console.log(error.response.data.error);
    }
    
}
module.exports ={ getCharById}
