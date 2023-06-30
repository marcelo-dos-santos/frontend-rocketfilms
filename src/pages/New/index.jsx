import { Container, Form } from "./styles";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services";

export function New() {
const [title, setTitle] = useState("");
const [rating, setRating] = useState();
const [description, setDescription] = useState("")

const [newTag, setNewTag] = useState("");
const [tags, setTags] = useState([]);

const navigate = useNavigate();

function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
}

function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
}

async function handleNewFilm() {
    if(!title) {
        return alert("Digite o nome do filme")
    };
    if(newTag) {
        return alert("Existem tags para serem adicionados! Clique para adicionar ou deixe o campo vazio.")
    };
    
    await api.post("/notes", {title, description, tags, rating});
    alert("Filme cadastrado com sucesso!");
    navigate("/");
}


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
                            <Input 
                            placeholder="Titulo"
                            value={title}
                            onChange={e => setTitle(e.target.value)} 
                            />
                            <Input 
                            inputMode="numeric" 
                            pattern="[0-5]" 
                            maxLength="1" 
                            placeholder="Sua nota (de 0 a 5)"
                            value={rating}
                            onChange={e => setRating(e.target.value)} 
                            />
                        </div>
                        <TextArea 
                        placeholder="Observações" 
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        />
                        <Section title="Marcadores" />
                        <div className="mark-row">
                            {
                                tags.map((tag, index) => (
                                    <NoteItem 
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => {handleRemoveTag(tag)}}
                                    />
                                ))
                            }
                            <NoteItem 
                            isNew 
                            placeholder="Novo Marcador" 
                            onChange={e => setNewTag(e.target.value)}
                            value={newTag}
                            onClick={handleAddTag}
                            />
                        </div>
                    <div className="button-row">
                        <Button className="deleteFilm" title="Excluir Filme" />
                        <Button title="Salvar Alterações" onClick={handleNewFilm} />
                    </div>
                </Form>
              </main>
        </Container>
    )
}