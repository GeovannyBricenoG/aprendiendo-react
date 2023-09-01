
export function TwitterFollowCard ({children,userName,isfollowing}){
   //primera forma de pasar la info a el Src de la Img
  //const imgSrc = `https://unavatar.io/${username}`
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
            <button className="tw-followCard-button">
            Seguir
            </button>
        </aside>
    </article>
)
}