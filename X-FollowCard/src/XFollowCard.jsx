import { useState } from "react"

export function XFollowCard({children , userName, initialIsFollowing}){
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo' :'Seguir'
    const buttonCassName = isFollowing ? 'x-followCard-button is-following': 'x-followCard-button'

    const handleClick = () => setIsFollowing(!isFollowing)
    
    return (
        <article className="x-followCard">
        <header className="x-followCard-header">
            <img className="x-followCard-avatar" alt="Avatar de unavatar.io" src={`https://unavatar.io/${userName}`}></img>
            <div className="x-followCard-info">
                <strong>{children}</strong>
                <span className='x-followCard-infoUserName'>@{userName}</span>
            </div>
        </header>
        <aside>
            <button className={buttonCassName} onClick={handleClick}>               
                <span className="x-followCard-text">{text}</span>
                <span className="x-followCard-stopFollow">Dejar de seguir</span>
            </button>
        </aside>
    </article>
    )
}