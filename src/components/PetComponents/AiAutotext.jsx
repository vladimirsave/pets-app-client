import { useContext } from 'react';
import AppContext from '../context/AppContext';
const axios = require('axios');

function GetBioOfPet(name, bio, petType) {
  console.log('Hellow World');
  const { bioPetFromAI, setBioPetFromAI} = useContext(AppContext);
  console.log (name);
      console.log (bio);
      console.log (petType);
      console.log (bioPetFromAI);
      
  const client = axios.create({
    headers: {
      'Authorization': 'Bearer ' + process.env.OPENAI_API_KEY
    }
  });
  const params = {
    "prompt": "Let's text the biography of " + petType+ "named" +name+ "who"+bio+".",
    "max_tokens": 10
  }
  client.post('https://api.openai.com/v1/engines/text-davinci-003/completions', params)
    .then(result => {
      console.log(result.data);
      setBioPetFromAI(result.data);
    }).catch(err => {
      console.log(err);
    });

  // const bioFromAI = async () => {
  //   try {
  //     const res = await client.post('https://api.openai.com/v1/engines/text-davinci-003/completions', params)
      
  //         console.log(res.data);
          
  //   }catch (err) {
  //     console.log(err);
  //   }
  // };
}

  export default GetBioOfPet