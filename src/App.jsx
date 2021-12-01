import { RepositoryList } from './components/RepositoryList';
import './styles/global.scss';

export function App(){

    type User = {
        name: string
        email: string
        address: {
            city: string
            state: string
        }
    }

    function showWelcomeMessage(user: User){
        return
            `Welcome ${user.name}, your e-mail is ${user.email},
            your city is ${user.address.city} and your state is ${user.address.state}`; 
    }

    showWelcomeMessage({
        name:'John Doe',
        email: 'john@doe.com',
        address: {
            city: 'new York',
            state: 'NY',
        }
    });

    return(
        <RepositoryList />
    )
}