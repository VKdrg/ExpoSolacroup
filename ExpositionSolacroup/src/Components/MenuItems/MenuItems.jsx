import { Link } from "react-router";
import './MenuItems.css'

export const MenuItem = ({ chapter }) => {
    return (
        <Link to={{ pathname: `/chapter-${chapter.id}`, state: chapter }} className="links">
            <p className="ChNb">{chapter.id}</p>
            <p className="body1">{chapter.title}</p>
        </Link>
    )
}