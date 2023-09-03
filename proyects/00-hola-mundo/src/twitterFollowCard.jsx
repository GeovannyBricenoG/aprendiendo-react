import { useState } from "react";

export function TwitterFollowCard ({children,userName,inicialIsFollowing}){
   //primera forma de pasar la info a el Src de la Img
  //const imgSrc = `https://unavatar.io/${username}`
  const [isFollowing, setIsFollowing]  = useState(inicialIsFollowing)

const text = isFollowing ? 'Siguiendo' :'Seguir' 
const buttoClassName = isFollowing 
? 'tw-followCard-button  is-following' 
: 'tw-followCard-button'

const handleClick = () =>{
setIsFollowing(!isFollowing)
}
    return(
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img src={`https://unavatar.io/${userName}`}
            alt="el avatar de luis" 
            className='tw-followCard-img' />
            <div className='tw-followCard-div'>
              <stron> {children} </stron>
                <span className='tw-followCard-header-span'>@{userName}</span>
            </div>
        </header>
        <aside>
            <button className={buttoClassName} onClick={handleClick}>
            
            <span className="tw-followCard-text">{text}</span>
            <span className="tw-followCard-stopFollow">Dejar de Seguir</span>
            </button>
        </aside>
    </article>
)
}