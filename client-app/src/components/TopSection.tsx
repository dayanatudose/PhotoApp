import React from 'react';
import photoshoot from '../img/tabs.svg';
import styled from 'styled-components';
import {Top, Description, Image, Hide} from '../styles';
const TopSection = () => {
    return (
       <Top>
           <Description>
               <div className = "title">
                   <Hide>
                       <h2>PhotoApp</h2>
                   </Hide>
                   <Hide>
                      <h3>Gaseste <span>fotograful potrivit</span> evenimentului tau!</h3> 
                   </Hide>
               </div>
               <p>Alege, dintr-o gama larga, fotograful potrivit evenimentului pe care il cauti: nunta, botez sau o sedinta foto.</p>
            <button>Cauta Fotografi</button>
           </Description>
           <Image>
               <img src = {photoshoot} alt = "illustration" />
           </Image>
       </Top> 
    );
}

//styled components

export default TopSection;