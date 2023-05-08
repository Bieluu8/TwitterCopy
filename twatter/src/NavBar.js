import React from 'react'
import {Link} from 'react-router-dom'

export default function () {
  return (
    <ul>
        <li><Link to="/">Główna</Link></li>
        <li><Link to="/przegladaj">Przegladaj</Link></li>
        <li><Link to="/powiadomienia">Powiadomienia</Link></li>
        <li><Link to="/profil">Profil</Link></li>
    </ul>
  )
}