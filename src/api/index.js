import axios from 'axios';

const url= 'https://covid19.mathdro.id/api';

 export const fetchData = async()=>{
    try{

        const {data} = await axios.get (url);

        const modifyData ={
            confirmed:data.confirmed,
            recovered :data.recovered,
            deaths :data.deaths,
            lastUpdate :data.lastUpdate,
        }

        return modifyData;
        



    } catch(error){

    }
}

