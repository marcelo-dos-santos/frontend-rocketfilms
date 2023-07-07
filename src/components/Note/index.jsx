import { Container, Rating, Stars } from "./styles"
import { FiStar } from "react-icons/fi"
import {Tag} from "../../components/Tag"

export function Note({data, rating, ...rest}) {
    return (
        <Container {...rest}>
            <h1>{data.title}</h1>
            <Rating>
            <Stars>
          {Array.from({ length: 5 }, (_, index) => (
            <FiStar
              key={index}
              className={`Star ${index < rating ? "isActive" : ""}`}
            />
          ))}
        </Stars>
            </Rating>
            <p>{data.description.length > 260 ? `${data.description.substring(0, 260)}...` : data.description}</p>
            { data.tags &&
        <footer>
        {data.tags.map((tag) => (
          <Tag key={tag.id} title={tag.name} />
        ))}
      </footer>
            }
        </Container>
    )
}