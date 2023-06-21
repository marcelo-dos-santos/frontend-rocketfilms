import { Container, Content, UserInterface, NewFilm } from "./styles";
import { FiPlus } from "react-icons/fi";
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Note } from "../../components/Note";

export function Home() {
    return(
        <Container>
          <Header />
            <UserInterface>
                <h1>Meus filmes</h1>
                <NewFilm to="/new">
                <div className="addButton">
                <Button icon={FiPlus} title="Adicionar filme" />
                </div>
                </NewFilm>
            </UserInterface>

            <Content>
                <Note data={{title: 'Interestellar', 
                resume: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...', 
                tags: [{id: '1', name:'Ficção Científica'}, {id: '2', name:'Drama'}, {id: '3', name:'Família'}]}} 
                />
                <Note data={{title: 'Interestellar', 
                resume: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...', 
                tags: [{id: '1', name:'Ficção Científica'}, {id: '2', name:'Drama'}, {id: '3', name:'Família'}]}} 
                />
                <Note data={{title: 'Interestellar', 
                resume: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...', 
                tags: [{id: '1', name:'Ficção Científica'}, {id: '2', name:'Drama'}, {id: '3', name:'Família'}]}} 
                />
            </Content>
        </Container>
    )
}