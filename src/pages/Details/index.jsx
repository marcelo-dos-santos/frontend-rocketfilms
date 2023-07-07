import { Container, Content, Title, Stars, Author, TagFilm } from "./styles"
import {format} from "date-fns"
import { Header } from "../../components/Header"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"
import { FiArrowLeft, FiStar, FiClock, FiRefreshCcw} from "react-icons/fi"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { api } from "../../services"
import { useAuth } from "../../hooks/auth"
import { useNavigate } from "react-router-dom"


export function Details() {
  const navigate = useNavigate();

  const {user} = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  
  const params = useParams();
  const [data, setData] = useState(null)

  const rating = data?.rating ?? 0;

function handleBack(){
  navigate("/")
}

async function handleUpdate() {
    navigate(`/update/${params.id}`);
}


useEffect(() => {
  async function fetchNote() {
    const response = await api.get(`/notes/${params.id}`);
    console.log(response.data);
    setData(response.data);
  }
  fetchNote()
}, [])


  return(
    <Container>
      <Header />
      {  data &&      
        <main>
          <Content>
              <span>
                <div>
                  <FiArrowLeft />
                  <ButtonText title="Voltar" isActive onClick={handleBack} />
                </div>
                <ButtonText title="Editar Nota" onClick={handleUpdate} />
              </span>
              <Title>
              <h1>{data.title}</h1>
              <Stars>
                {Array.from({ length: 5 }, (_, index) => (
                <FiStar key={index} className={`Star ${index < rating ? 'isActive' : ''}`} />
                ))}
              </Stars>
              </Title>
                <Author>
                  <img src={avatarUrl} alt="Foto do usuario" />
                  <div>
                    <p>Por {user.name}</p>
                    <FiClock />
                    <p>{format(new Date(data.created_at), "dd/MM/yyyy 'às' HH:mm")}</p>
                    {data.created_at !== data.updated_at && (
                        <div className="updated">
                          <FiRefreshCcw />
                          <p>{format(new Date(data.updated_at), "dd/MM/yyyy 'às' HH:mm")}</p>
                        </div>  
                    )}
                  </div>
                </Author>
              {  data.tags &&              
                <TagFilm>
                {  
                  data.tags.map(tag => (
                    <Tag 
                    key={String(tag.id)}
                    title={tag.name}
                    />
                  ))                
                }
                </TagFilm>
              }

                <p>{data.description}</p>
          </Content>
        </main>
      }
    </Container>
  )
}