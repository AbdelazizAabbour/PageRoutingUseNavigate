import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Profile(){
    // hado homa les state li fihhom  ghadi n jeme3o  data 
    // ou  fihom  heta state navagite bach raje3o l page l9edima

    const [nom , setName]= useState("")
    const [prenom , setprename]= useState("")
    const [email , setEmail]= useState("")
    const [select , setSelector]= useState("")
    const [select1 , setSelector1]= useState("")
    const navagite = useNavigate();
    
    const option = ["2002","2001","2000","1999","1998","1997","1996","1995","1994","1993","1992","1991","1990"]
    const option1 = [ "Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"]

    // Hhade l fuction deyal retoure l page l9dima 
    const hadelNavigate =()=>(
        navagite("/")
    )
   
    function HandelSubmit(e){
        e.preventDefault()

        if(select === "" || nom ==="" || prenom ==="" || email ==="" || select1 ===""){
        return alert('======// (:  khasek te3amer ga3e les input oky  :) //======')
        }

        alert(`nom : ${nom}  \n prename : ${prenom} \n email : ${email} \n  Anneé : ${select} \n  Mois : ${select1} `)
    }


    return (
        <div>
            <h1>remplaire form babe</h1>
            <form onSubmit={HandelSubmit}>
              Name : <input type="text" placeholder="enter voter name" value={nom}
              onChange={(e)=> setName(e.target.value)}
              /> <br /><br />

              Prename : <input type="text" placeholder="enter voter prename" value={prenom}
              onChange={(e)=> setprename(e.target.value)}
              /> <br /><br />

              Email : <input type="text" placeholder="enter voter email" value={email}
              onChange={(e)=> setEmail(e.target.value)}
              /><br /><br />

                {/* hadi hia selection li fiha gha les année ou  rah khedama b map  */}

              Anneé : <select value={select} onChange={(e)=>setSelector(e.target.value)}>
                <option value="">====Choise Année====</option>
                    {option.map((aziz,i)=>(
                        <option key={i} value={aziz}>{aziz}</option>
                    ))}
              </select><br /><br />

              {/* hadi hia l selection  tania li rah fiha gha les mois  mekhedoma b map  */}
              
              Mois : <select value={select1} onChange={(e)=>setSelector1(e.target.value)}>
                <option value="">====Choise Mois====</option>
                {option1.map((aziz,i)=>(
                    <option key={i} value={aziz} >{aziz}</option>
                ))}
              </select> <br /><br />
             <button type="Submit">Envoi</button> <br /><br />
            </form>

            {/*Haga khedemenah b useNavegate hia li ghadi dena l  page l9edima */}
             <button onClick={hadelNavigate}>gooo back</button>   

            

        </div>
    )
}

export default Profile;