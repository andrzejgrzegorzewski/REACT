import React from 'react';
import './Word.css';

const Word = props => (
<li>Word in English: <strong>{props.english}</strong>. Word in Polish: <strong>{props.polish}</strong></li>
)

export default Word;