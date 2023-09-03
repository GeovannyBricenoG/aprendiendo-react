import './App.css'
import { TwitterFollowCard } from './twitterFollowCard'


const user =[
    {
        userName:'luisgod',
        name: 'Luis Amaya',
        isFollowing: true
    },
    {
        userName:'kenethdevil',
        name: 'Keneth Sanchez',
        isFollowing: false
    },
    {
        userName:'rafaonlyone',
        name: 'Rafael Martinez',
        isFollowing: true
    }

]
export function App () {
const formatUserName = (userName) => `@${userName}`
return(
    <section className='app'>
   {
    user.map(user=>{
        const { userName, name, isFollowing} = user
        return(
            <TwitterFollowCard
            userName={userName}
            key={userName}
            inicialIsFollowing ={isFollowing}
            >
              {name} 
            </TwitterFollowCard>
        )
    })
   }
    </section>
     
)

}