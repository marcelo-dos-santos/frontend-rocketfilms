import { Container, Content, UserInterface } from "./styles";
import { FiPlus } from "react-icons/fi";
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Note } from "../../components/Note";

export function Home() {
    return(
        <Container>
          <Header />
            <UserInterface>
                <h1>Meus Filmes</h1>
                <Button icon={FiPlus} title="Adicionar novo filme" />
            </UserInterface>

            <Content>
                <Note data={{title: 'React', resume: 'Sexo sexo sexo', tags: [{id: '1', name:'react'}, {id: '2', name:'node'}]}} />
            </Content>
        </Container>
    )
}