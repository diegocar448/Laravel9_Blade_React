import React, {useState, useEffect} from 'react'

//components
import Button from '../components/Button';
import Loading from '../components/Loading';

//axios
import url from '../services/url';


const Post = () => {
    //states
    let [loading, setLoading] = useState(true);
    let [lista, setLista] = useState([]);

    useEffect(() => {
        url.get("/postslistagem")
            .then((response) => {
                setLista(response.data);
                setLoading(false);
            })
    }, []);


    if(loading === false){

        return (
            <div className="col-md-12">
                <div className="card card-primary card-outline">
                    <div className="card-header">
                        <h3 className="card-title">
                            <Button title="Criar Postagem"></Button>
                        </h3>
                    </div>
                    <div className="card-body pad table-responsive">
                        <table className="table table-bordered text-center">
                            <tbody>
                                <tr>
                                    <th>Titulo</th>
                                    <th>Corpo</th>

                                </tr>
                                {
                                    lista.length > 0
                                    ?
                                    lista?.map((tag) => (
                                        <tr key={tag}>
                                            <td>{tag.title}</td>
                                            <td>{tag.body}</td>

                                        </tr>
                                    ))
                                    :
                                    <tr>
                                        <td>Não ha registros</td>
                                    </tr>

                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )

    }else{
        return ( <Loading /> )
    }

}

export default Post
