import './App.css'
import { TwtterFollowCard } from './twitterFollowCard';

const users = [
    {
        userName: 'midudev',
        name: 'Paco Nandez',
        isFollowing: true
    },
    {
        userName: 'elonmask',
        name: 'Martin Bordon',
        isFollowing: false
    },
    {
        userName: 'martinebordon26',
        name: 'Nico Pulka',
        isFollowing: true
    },
    {
        name: 'Paquito Nandez',
        isFollowing: false
    }

]

export function App () {
    return  (
        <section className='App'>
            {
                users.map(user => {
                    const {userName, name, isFollowing} = user;
                    return (
                        <TwtterFollowCard 
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                            
                        >
                        {name}
                        </TwtterFollowCard>
                   ) 
                })
            }
            
            
        </section>
       
    )
}
