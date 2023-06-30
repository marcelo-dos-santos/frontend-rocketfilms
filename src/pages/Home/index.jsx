import { Container, Content, UserInterface, NewFilm, Search } from "./styles";
import { FiPlus } from "react-icons/fi";
import { HeaderHome } from "../../components/HeaderHome"
import { Button } from "../../components/Button"
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { useState, useEffect } from "react";
import { api } from "../../services";
import { useNavigate } from "react-router-dom";


export function Home() {
const [notes, setNotes] = useState([]);
const [search, setSearch] = useState("");
const navigate = useNavigate();

function handleDetails(id){
    navigate(`/details/${id}`);
}

useEffect(() => {
    async function fetchNotes() {
        const response = await api.get(`/notes?title=${search}`);
        setNotes(response.data)
    }
    fetchNotes();
}, [search])

    return(
        <Container>
          <HeaderHome >
          <Search>
          <Input 
                placeholder="Pesquisar pelo título"
                onChange={e => setSearch(e.target.value)} 
                />
            </Search>
          </HeaderHome>
            <UserInterface>
                <h1>Meus filmes</h1>
                <NewFilm to="/new">
                <div className="addButton">
                <Button icon={FiPlus} title="Adicionar filme" />
                </div>
                </NewFilm>
            </UserInterface>

            <Content>
            {   notes.map(note => (
                    <Note 
                    key={String(note.id)}
                    data={note}
                    rating={note.rating}
                    onClick={() => handleDetails(note.id)}
                    />
                ))
            }
            </Content>
        </Container>
    )
}