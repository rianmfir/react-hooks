import axios from "axios"
import { useEffect, useState } from "react";
import { Card, Navbar } from "../components"
import * as ReactBootstrap from 'react-bootstrap'

const Page = () => {

    const [error, setError] = useState(null)
    const [response, setResponse] = useState([]);
    const [search, setSearch] = useState('')
    const [dataSearch, setDataSearch] = useState('')
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        try {
            await axios
                .get('https://newsapi.org/v2/top-headlines?country=id&apiKey=d5cc1aabc64f4477afd898614ca734ba')
                .then(res => {
                    setResponse(res.data.articles)
                })
            setLoading(false)
        } catch (err) {
            setError(err)
        }
    }

    useEffect(() => {
        fetchData();
        return () => {
            setResponse([])
            setError(null)
        }
    }, [setResponse, setError])


    useEffect(() => {
        setDataSearch(
            response.filter(
                e => e.title.toLowerCase().includes(search.toLowerCase())
            )
        )
    }, [setDataSearch, response, search])

    const handleChange = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    return (
        <div>
            <Navbar onChange={handleChange} />
            {console.log(dataSearch.length)}

            {
                loading && !error ?
                    (
                        <ReactBootstrap.Spinner animation="border" />
                    ) : error ?
                        (
                            <div>
                                <p>{error.message}</p>
                                {console.log(error.message)}
                            </div>
                        ) : (
                            dataSearch.length !== 0 ?
                                (
                                    <div className="container">
                                        <div className="row" id="news">
                                            <Card data={dataSearch} />
                                        </div>
                                    </div>
                                ) : (
                                    <p className="text-center fw-bold fs-2" style={{ backgroundColor: '#f8aeae' }}>Data Not Found :(</p>
                                )
                        )
            }



        </div>
    )
}

export default Page