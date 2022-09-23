import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";

//components
import Loading from '../components/Loading';
import Button from '../components/Button';
import { deletePost } from '../hooks/deletePost';
import { buscarPost, storePost, loadPost } from '../hooks/storePost';

//axios
import url from '../services/url';

//hooks
import { useNavigate } from "react-router-dom"; //parar redirecionar o usar depois que criar o post


const Post = () => {
    //states
    let [loading, setLoading] = useState(true);
    let [lista, setLista] = useState([]);
    let [errors, setErrors] = useState(undefined);
    let [buscarTitulo, setBuscarTitulo] = useState("");




    useEffect(() => {
        url.get("/postslistagem")
            .then((response) => {
                setLista(response.data);
                setLoading(false);
            })
    }, []);


    //usar o navigate para redirecionar para outra pagina
    const navigate = useNavigate();


    const handleExcluir = async (e, id) => {
        e.preventDefault();
        setLoading(true);

        let remover = await deletePost(id);

        if(remover.data === 1){

            let loadDaLista = await loadPost();
            setLista(loadDaLista.data)
            setLoading(false);
        }else{
            setLoading(false);
            setErrors(remover);
        }


    }

    const handleBuscar = async (e) => {
        e.preventDefault();

        setLoading(true);

        let buscar = await buscarPost(buscarTitulo);

        if (buscar.status === 200) {
            setLista(buscar.data)

        }else{

        }
        setBuscarTitulo("");
        setLoading(false);
    }

    function handleAlert(e){
        e.target.parentNode.parentNode.parentNode.parentNode.setAttribute("style", "display:none");
    }


    if(loading === false){

        return (
            <div className="col-md-12">
                <div className="card card-primary card-outline">
                    <div className="card-header">
                        <h3 className="card-title">
                            {/* <Button title="Criar Postagem"></Button> */}
                            <Link to="/posts/create" className='btn btn-block bg-gradient-success btn-sm'>Criar primeiro post</Link>
                        </h3>
                    </div>
                    <div className="card-body pad table-responsive">
                        <div className="row">
                            <div className="col-9">
                                <input type="text" className="form-control" placeholder="Digite um Titulo" onChange={ (e) => setBuscarTitulo(e.target.value) } />
                            </div>
                            <div className="col-3">
                                <button className="btn btn-block btn-primary" onClick={(e) => handleBuscar(e)}>
                                    Buscar
                                </button>

                            </div>
                        </div>
                        <br />
                        <table className="table table-bordered text-center">
                            <tbody>
                                <tr>
                                    <th>Titulo</th>
                                    <th>Corpo</th>
                                    <th>Ações</th>
                                </tr>
                                {
                                    lista.length > 0
                                    ?
                                    lista?.map((tag) => (
                                        <tr key={tag.id}>
                                            <td>{tag.title}</td>
                                            <td>{tag.body}</td>
                                            <td>
                                                <Link to={`/posts/edit/${tag.id}`} className="btn btn-block btn-primary" >Editar</Link>
                                                <hr />

                                                <form onSubmit={(e) => handleExcluir(e, tag.id)}>

                                                    <Button classe="btn btn-block btn-danger" title="Excluir"/>
                                                </form>

                                            </td>
                                        </tr>
                                    ))
                                    :
                                    <tr>
                                        <td colSpan="3">Não ha registros</td>
                                    </tr>

                                }
                            </tbody>
                        </table>
                    </div>
                </div>


                {
                    errors ?

                    <div id="toastsContainerTopRight" className="toasts-top-right fixed" style={{ display:'' }}>
                        <div className="toast bg-danger fade show" role="alert" aria-live="assertive" aria-atomic="true">
                            <div className="toast-header">
                                <strong className="mr-auto">Error ao validar os campos</strong>
                                <small></small>
                                <button data-dismiss="toast" type="button" className="ml-2 mb-1 close" aria-label="Close">
                                    <span onClick={(e) => handleAlert(e)} aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="toast-body">
                                Favor verificar os campos
                            </div>
                        </div>
                    </div>
                    :""


                }
            </div>















        )

    }else{
        return ( <Loading /> )
    }

}

export default Post
