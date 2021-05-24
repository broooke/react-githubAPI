import React, { useContext } from 'react'
import { Search } from '../components/Search'
import { Fragment } from 'react'
import { Card } from '../components/Card'
import { GithubContext } from '../context/github/githubContext'

export const Home = () => {
    const {loading, users} = useContext(GithubContext)

    return (
        <Fragment>
            <Search />
            <div className='row mt-3'>
                {loading 
                    ? <p className="text-center">Загрузка...</p>
                    : users.map(user=>(
                            <div className='col-sm-4 mb-4' key={user.id}>
                                <Card user={user} />
                            </div>
                        )
                    )
                }
            </div>
        </Fragment>
    )
}