import { Container, Profile, Logo} from "./styles";
import { ButtonText } from "../ButtonText";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { useNavigate } from "react-router-dom";



export function HeaderHome({children}) {
    
    
    const {signOut, user} = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    const navigate = useNavigate();

    function handleSignOut(){
        navigate("/");
        signOut();
    }

    return(
        <Container>
            <Logo>
                <span>RocketMovies</span>
            </Logo>

            {children}

            <Profile to="/profile">
                <div>
                    <strong>{user.name}</strong>
                    <span><ButtonText title="sair" onClick={(event) => { event.preventDefault(); handleSignOut();}} /></span>
                </div>
                <img src={avatarUrl} alt="Foto do usuario" />
            </Profile>
        </Container>
    )
}