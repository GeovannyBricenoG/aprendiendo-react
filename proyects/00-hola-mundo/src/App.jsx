import './App.css'
import { TwitterFollowCard } from './twitterFollowCard'
export function App () {
    
return(
    <section className='app'>
    <TwitterFollowCard isfollowing username="@luisgod" name="Luis Amaya"/>
    <TwitterFollowCard isfollowing={false} username="@Kenethdevil" name="Keneth Sanchez"/>
    <TwitterFollowCard isfollowing username="@rafaonlyone" name="Rafael Martinez"/>
    <TwitterFollowCard isfollowing username="@navarroeldestructor" name="Olger Navarro"/>
    </section>
     
)

}