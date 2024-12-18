import './App.css'
import { XFollowCard } from './XFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo H.',
        isFollowing: false
    },
    {
        userName: 'Kikobeats',
        name: 'Kikobeats',
        isFollowing: false
    },
    {
        userName: 'duckduckgo',
        name: 'Duck Go',
        isFollowing: false
    },
]

export function App() {
    return (
        <section className='App'>
            {users.map(user => {
                const { userName, name, isFollowing } = user
                return (
                    <XFollowCard key= {userName} userName={userName} initialIsFollowing={isFollowing}>
                        {name}
                    </XFollowCard>
                )
            })}

        </section>


    )
}

// Función simplificada

// export function App () {
//     return (
//       <section className='App'>
//         {
//           users.map(({ userName, name, isFollowing }) => (
//             <TwitterFollowCard
//               key={userName}
//               userName={userName}
//               initialIsFollowing={isFollowing}
//             >
//               {name}
//             </TwitterFollowCard>
//           ))
//         }
//       </section>
//     )
//   }