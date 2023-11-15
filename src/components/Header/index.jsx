import logoImg from '../../assets/logo.png';
import { Container } from './styles';

export function Header (){
    return (
        <Container>
            <header>
                <img src={ logoImg } alt="Logo G-System" />
            </header>
        </Container>
    )
}