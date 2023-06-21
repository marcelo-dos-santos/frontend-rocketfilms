import { Container, Form } from "./styles";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

export function New() {
    return(
        <Container>
            <Header />
              <main>
                <Form>
                    <header>
                        <Link to="/"><FiArrowLeft />Voltar</Link>
                        <h1>Novo Filme</h1>
                    </header>
                        <div className="input-row">
                            <Input placeholder="Titulo" />
                            <Input inputMode="numeric" pattern="[0-5]" maxLength="1" placeholder="Sua nota (de 0 a 5)" />
                        </div>
                        <TextArea placeholder="Observações" />
                        <Section title="Marcadores" />
                        <div className="mark-row">
                            <NoteItem value="React" />
                            <NoteItem isNew placeholder="Novo Marcador" />
                        </div>
                    <div className="button-row">
                        <Button className="deleteFilm" title="Excluir Filme" />
                        <Button title="Salvar Alterações" />
                    </div>
                </Form>
              </main>
        </Container>
    )
}