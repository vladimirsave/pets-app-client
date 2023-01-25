import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationTopMenu from './components/TopMenu'
import BannerTransition from './components/Banner'
import PetPage from './components/PetComponents/EditPetModal'
import AppContext from './components/context/AppContext';
import jwt_decode from 'jwt-decode';


function App() {
  const [petsList, setPetsList] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [petsViewList, setPetsViewList] = useState([]);
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser')) || false); //use saved token to local storage when login
  const [token, setToken] = useState(localStorage.getItem('token') || false);
  const [bioPetFromAI, setBioPetFromAI] = useState([]);
  const [needFetchNotAdopted, setNeedFetchNotAdopted] = useState(false);
  const [needFetchNotFosted, setNeedFetchNotFosted] = useState(false);
  const [searchTypeOfPet, setSearchTypeOfPet] = useState('false');
  const [needSearch, setNeedSearch] = useState(false);
  const [wordForSearch, setWordForSearch] = useState('');
  const [userAdmin, setUserAdmin] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const forButtons = token ? jwt_decode(token) : false;
  

  const fetchPets = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/`);
      const petsL = res.data;
      setPetsList(petsL);
      let currentListOfPets = petsL.sort(function (a, b) {
        let A1 = a.id; let B2 = b.id; return B2 - A1;
      });

      let curListFor = currentListOfPets.map(currentValue => currentValue);
      setPetsViewList(curListFor);
 

    } catch (err) {
      console.log(err);
    }
  };

  const fetchNotAdoptedPets = async () => {
    try {
      // setPetsViewList([]);
      const res = await axios.get(`http://localhost:8080/notadopted`);
      const petsL = res.data;
      setPetsList(petsL);
      let currentListOfPets = petsL.sort(function (a, b) {
        let A1 = a.id; let B2 = b.id; return B2 - A1;
      });
      let curListFor = currentListOfPets.map(currentValue => currentValue);
      setPetsViewList(curListFor);
    } catch (err) {
      console.log(err);
    }
  };
  
  const fetchNotFostedPets = async () => {
    try {
      // setPetsViewList([]);
 
      const res = await axios.get(`http://localhost:8080/notfosted`);
 
      const petsL = res.data;
 
      setPetsList(petsL);
      let currentListOfPets = petsL.sort(function (a, b) {
        let A1 = a.id; let B2 = b.id; return B2 - A1;
      });
 
      let curListFor = currentListOfPets.map(currentValue => currentValue);
      setPetsViewList(curListFor);
 
    } catch (err) {
      console.log(err);
    }
  };

  const fetchSearch = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/petsearch/${searchTypeOfPet}/${wordForSearch}`);
      console.log ('http://localhost:8080/petsearch/'+searchTypeOfPet+'/'+wordForSearch)
      console.log(res.data);
      const petsL = res.data;
 
      if (petsL) {setPetsList(petsL);
      let currentListOfPets = petsL.sort(function (a, b) {
        let A1 = a.id; let B2 = b.id; return B2 - A1;
      });
 
      let curListFor = currentListOfPets.map(currentValue => currentValue);
 
      setPetsViewList(curListFor);
      console.log('Serch pets', petsViewList);}
      else {console.log(petsL);}
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAdminPets = async () => {
    try {
      setPetsViewList([]);
    
      const res = await axios.get(`http://localhost:8080/admin/pets`);
  
      const petsL = res.data;
 
      setPetsList(petsL);
      let currentListOfPets = petsL.sort(function (a, b) {
        let A1 = a.id; let B2 = b.id; return B2 - A1;
      });
 
      let curListFor = currentListOfPets.map(currentValue => currentValue);
      setPetsViewList(curListFor);
 
    } catch (err) {
      console.log(err);
    }
  };

  const fetchUsers = async () => {
    try {

      const res = await axios.get(`http://localhost:8080/users/all`);

      const usersL = res.data;

      let currentListOfUsers = usersL.sort(function (a, b) {
        let A1 = a.id; let B2 = b.id; return B2 - A1;
      });

      setUsersList(currentListOfUsers);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(token);
    fetchNotAdoptedPets(); 
    fetchNotFostedPets();
    fetchPets();
    fetchUsers();
  }, []);


  useEffect(() => {
    if (needFetchNotAdopted) {
      fetchNotAdoptedPets();
      setNeedFetchNotAdopted(false);
    }; 
    if (needFetchNotFosted) {
      fetchNotFostedPets();
      setNeedFetchNotFosted(false);
    };
  }, [needFetchNotAdopted, needFetchNotFosted]);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
      return;
    }
    console.log ('1',searchTypeOfPet);
    console.log ('1',wordForSearch);
    if (wordForSearch || searchTypeOfPet) {
      fetchSearch();
    }
  }, [wordForSearch,searchTypeOfPet]);

  return (
    <AppContext.Provider value={{ forButtons, fetchNotFostedPets, petsViewList, fetchUsers, setUserAdmin, fetchAdminPets, setWordForSearch, wordForSearch, setNeedSearch, searchTypeOfPet, setSearchTypeOfPet, petsViewList, setNeedFetchNotFosted, fetchPets, setNeedFetchNotAdopted, needFetchNotAdopted, fetchNotAdoptedPets, usersList, setUsersList, 
    currentUser, setCurrentUser, 
    setToken, token, petsViewList, petsList, setPetsList, bioPetFromAI, setBioPetFromAI }}>
      <div>
        <div className="">
          <NavigationTopMenu />
        </div>

        <div className="">
          {/* <div>
            <BannerTransition />
          </div> */}

          {/* <div>
            <PetPage />
          </div> */}

          {/* <div className='mainContainer'>
            <PetForm addPet={addPet} />
            <PetsListBlock petsList={petsList} deletePet={deletePet} />
          </div> */}

        </div>

      </div>
    </AppContext.Provider>
  );
}

export default App;