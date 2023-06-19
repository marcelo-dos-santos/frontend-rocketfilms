import { Container, Rating } from "./styles"
import { FiStar } from "react-icons/fi"
import {Tag} from "../../components/Tag"

export function Note({data, rating, ...rest}) {
    return (
        <Container {...rest}>
            <h1>{data.title}</h1>
            <Rating><FiStar className="Star isActive" /><FiStar className="Star isActive" /><FiStar className="Star isActive" /><FiStar className="Star isActive" /><FiStar /></Rating>
            <p>{data.resume}</p>
            { data.tags &&
             <footer>
                {
                    data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                }
             </footer>
            }
        </Container>
    )
}