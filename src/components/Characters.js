import React from 'react'

export default function Characters(props) {
    const characters = props.characters;
    const setcharacters = props.setcharacters;
    const resetCharacters = ()=> {
        setcharacters(null);
    }
  return (
    <div className='characters'>
        <h3>Personajes</h3>
        <span className='back-home' onClick={resetCharacters}>volver a home</span>
        <div className='container-characters'>
            {characters.map((characters, index)=>(
                <div className='character-container' key={index}>
                    <div className='img'>
                        <img src={characters.image} alt={characters.name} />
                    </div>
                    <div>
                    <p>{characters.name}</p>
                    <p className='gender'>{characters.gender}</p>
                    <h6>{characters.status == 'Alive'?(
                        <><span className='alive'/>Alive</>
                    ):(
                        <><spam className='dead'/>Dead</>
                    )}</h6>
                    <p className='text-grey'>
                        <span>episodes: </span>
                        <span>{characters.episode.length}</span>
                    </p>
                    <p className='text-grey'>
                        <span className='specie'>{characters.species}</span>
                    </p>
                    </div>
                </div>
            ))}
        </div>
        <span className='back-home' onClick={resetCharacters}>volver a home</span>
    </div>
  )
}
