import React, {useContext, useState} from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { GithubContext } from '../context/github/githubContext'

export const Search = () => {
    const [value,setValue] = useState('')
    const {show, hide} = useContext(AlertContext)
    const github = useContext(GithubContext)

    const onSubmit = (event) => {
        if(event.key !== 'Enter') {
            return
        }
        github.clearUsers()
        if (value.trim()) {
            hide()
            github.search(value.trim())
        } else{
            show('Введите данные пользователя!')
        }
    }
    return (
        <div className="form-group">
            <input
                type="text"
                className="form-control"
                value={value}
                onChange={event=>setValue(event.target.value)}
                placeholder="Введите имя пользователя..."
                onKeyPress={onSubmit}
            />
        </div>
    )
}