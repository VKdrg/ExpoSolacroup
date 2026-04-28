import { Link } from "react-router";
import './MenuItems.css'

export const MenuItem = ({ chapter }) => {
    return (
        <Link to={{ pathname: `/chapter/${chapter.id}/cover`, state: chapter }} className="links">
            <p className="ChNb">{chapter.id}</p>
            <p className="p-thin">{chapter.title}</p>
        </Link>
    )
}