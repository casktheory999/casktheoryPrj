import { Link } from "react-router-dom"
import { Route, Routes } from 'react-router-dom'
import EventDetailPage from "./EventDetailPage"

export default function News() {
    return (
    <div>最新消息
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <Link to='/EventDetailPage'>活動內頁</Link>
    </div>
    )
}