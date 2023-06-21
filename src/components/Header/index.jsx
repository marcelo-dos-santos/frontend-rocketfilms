import { Container, Profile, Logo, Search } from "./styles";
import { Input } from "../../components/Input"
import { ButtonText } from "../ButtonText";



export function Header() {
    return(
        <Container>
            <Logo>
                <span>RocketMovies</span>
            </Logo>

            <Search>
                <Input 
                placeholder="Pesquisar pelo título" 
                />
            </Search>

            <Profile to="/profile">
                <div>
                    <strong>Marcelo</strong>
                    <span><ButtonText title="sair" /></span>
                </div>
                <img src="https://github.com/marcelo-dos-santos.png" alt="Foto do usuario" />
            </Profile>
        </Container>
    )
}