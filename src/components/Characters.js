import React from 'react'

export default function Characters(props) {
    const characters = props.characters;
  return (
    <div className='characters'>
        <h3>Personajes</h3>
        <span className='back-home'>volver a home</span>
        <div className='container-characters'>
            {characters.map((characters, index)=>(
                <div className='character-container' key={index}>
                    <div>
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
                        <span>Episodes: </span>
                        <span>{characters.episode.length}</span>
                    </p>

                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
