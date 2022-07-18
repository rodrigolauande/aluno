import { useState, useEffect } from 'react';
import {firestore} from '../config/firebase';
import DeleteTreino from './deleteTreino'
import CreateTreino from './createTreino'
import Container from './container';
import Titulo from './titulo';

const ref = firestore.collection('usuarios')

function DadosTreino() {

  const [data, setdata] = useState([])
  const [loader, setloader] = useState(true)

  function getData() {                             
    ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      setdata(items)
      setloader(false)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
      <>
      
      <Container>
      <CreateTreino />

      <Titulo nome='Dados do Treino'/>
        <div className="dados_Treino">
          {loader === false && (data.map((dev) => (
          <DeleteTreino dev={dev}/>
          )))}
        </div>
      </Container>
        </>
  );
}

export {ref}
export default DadosTreino;
