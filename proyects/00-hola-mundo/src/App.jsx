import './App.css'
import { TwitterFollowCard } from './twitterFollowCard'
export function App () {
const formatUserName = (userName) => `@${userName}`
return(
    <section className='app'>
    <TwitterFollowCard isfollowing userName="luisgod" >
    Luis Amaya
    </TwitterFollowCard>
    <TwitterFollowCard isfollowing={false} userName="Kenethdevil">
     Keneth Sanchez
     </TwitterFollowCard>
    <TwitterFollowCard isfollowing userName="rafaonlyone">
   Rafael Martinez
   </TwitterFollowCard>
 
    </section>
     
)

}