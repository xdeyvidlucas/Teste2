import "./Profiles.css";

import eleven from '../Imagens/eleven.jpeg';
import lacasa from '../Imagens/lacasa.jpeg';
import kids from '../Imagens/kids.png';
import adiconar from '../Imagens/+.png';
import SelecaoPerfil from "../Components/SelecaoPerfil";

function Profile () {
  
  const usuario1 = {
    nome: 'Lucas',
    foto: lacasa
    
  };
  const usuario2 = {
    nome: 'Luna',
    foto: kids
    
  };
  const perfilkids = {
    nome: 'Luk',
    foto: eleven
    
  };
  const adicionarperfil = {
    nome: 'Adicionar Perfil',
    foto: adiconar
    
  };
      
      const usuarios = [usuario1, usuario2, perfilkids, adicionarperfil]
      
      return( 
       <SelecaoPerfil listaDeUsuarios={usuarios}/>
       
      );
};

   

export default Profile;