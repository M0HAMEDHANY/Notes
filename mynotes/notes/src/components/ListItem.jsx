import React from 'react'
import { Link } from 'react-router-dom'
const ListItem = ({ note }) => {

    let getDate = (note) => {
        return new Date(note.updated).toLocaleDateString();
    }

    let getTitle = (note) => {
        let title = note.body.split('\n')[0];
        if (title.length > 100) {
            title += '...';
        }
        return title;
    }

    let getContent = (note) => {
        let title = getTitle(note);
        let content = note.body.replaceAll('\n', ' ');
        content = content.replaceAll(title, '');
        if (content.length > 100) {
            content = content.slice(0, 100) + '...';
        }
        return content;
    } 
    return (

        <Link to={`/note/${note.id}`} className='list-container'>
            <li className='list-title'>{getTitle(note)}</li>
            <p><span className='list-content'>{getContent(note)}</span></p>
            <p><span className='list-date'>{getDate(note)}</span></p>
        </Link>

    )
}

export default ListItem

