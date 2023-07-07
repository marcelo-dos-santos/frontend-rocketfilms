import { Container, Form } from "./styles";
import { FiArrowLeft } from "react-icons/fi";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services";

export function Update() {
  const [data, setData] = useState({});
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const [newTag, setNewTag] = useState("");
  const [tags, setTags] = useState([]);

  const params = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();


  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleUpdateFilm() {
    if (!title) {
      return alert("Digite o nome do filme");
    }
    if (newTag) {
      return alert(
        "Existem tags para serem adicionados! Clique para adicionar ou deixe o campo vazio."
      );
    }

    await api.patch(`/notes/${params.id}`, {
      title,
      description,
      tags,
      rating,
    });
    alert("Filme atualizado com sucesso!");
    navigate(`/details/${params.id}`);
  }

  function handleBack(){
    navigate(-1)
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      const noteData = response.data;
      setData(noteData);
      setTitle(noteData.title);
      setRating(noteData.rating);
      setTags(
        Array.isArray(noteData.tags)
          ? noteData.tags.map(tag => tag.title || tag.name)
          : []
      );
      console.log(noteData);
    }
  
    fetchNote();
  }, [params.id]);
  

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
              <span>
                <FiArrowLeft />
                <ButtonText title="Voltar" isActive onClick={handleBack} />
              </span>
            <h1>{data.title}</h1>
          </header>
          <div className="input-row">
            <Input
              placeholder="Titulo"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              inputMode="numeric"
              pattern="[0-5]"
              maxLength="1"
              placeholder="Sua nota (de 0 a 5)"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <TextArea
            placeholder="Observações"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Section title="Marcadores" />
          <div className="mark-row">
            {tags.map((tag, index) => (
              <NoteItem
                key={String(index)}
                value={tag}
                onClick={() => {
                  handleRemoveTag(tag);
                }}
              />
            ))}
            <NoteItem
              isNew
              placeholder="Novo Marcador"
              onChange={(e) => setNewTag(e.target.value)}
              value={newTag}
              onClick={handleAddTag}
            />
          </div>
          <div className="button-row">
            <Button className="deleteFilm" title="Excluir Filme" />
            <Button
              title="Salvar Alterações"
              onClick={handleUpdateFilm}
            />
          </div>
        </Form>
      </main>
    </Container>
  );
}
