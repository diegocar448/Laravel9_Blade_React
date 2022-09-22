import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";

//components
import Loading from "../../components/Loading";

//axios
import url from '../../services/url';

//hooks
import {updateSendPost} from '../../hooks/updatePost';
import { useNavigate } from "react-router-dom"; //parar redirecionar o usar depois que criar o post
import { useParams } from "react-router-dom";

const PostEdit = () => {

    const {id} = useParams();


    let [title, setTitle] = useState("");
    let [body, setBody] = useState("");
    let [loading, setLoading] = useState(false);
    let [errors, setErrors] = useState(undefined);
    let post;

    useEffect(() => {


        post = url.post(`/editpost/${id}`)
            .then((response) => {

                console.log(response.data.title)

                setTitle(response.data.title);
                setBody(response.data.body);

                return response
            })

    }, []);



    //usar o navigate para redirecionar para outra pagina
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        let resultado = await updateSendPost({id, title, body });

        console.log(resultado)

        if (resultado.status === 200) {
            setLoading(false);

            navigate("/posts");
        }else{
            setLoading(false);
            setErrors(resultado.response.data.errors);


        }

    }

    // const handleAlert = async (e) => {
    //     console.log(e.target)
    // }

    function handleAlert(e){
        e.target.parentNode.parentNode.parentNode.parentNode.setAttribute("style", "display:none");
    }










    if (loading === false && title !== "" && body !== "") {
        return (
            <>
                <div className="card card-primary">
                    <div className="card-header">
                        <h3 className="card-title">Atualizar Postagem</h3>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Titulo</label>
                                <input
                                    type="text"
                                    name="title"
                                    className="form-control"
                                    placeholder="Titulo"
                                    onChange={ (e) => e.target.value !== "" ? setTitle(e.target.value) : '' }
                                    style={ errors?.title ? { borderColor:'red'} : {}}
                                    value={ title }

                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Texto</label>
                                <input
                                    type="text"
                                    name="texto"
                                    className="form-control"
                                    placeholder="Texto"
                                    onChange={ (e) => e.target.value !== "" ? setBody(e.target.value) : '' }
                                    style={ errors?.body ? { borderColor:'red'} : {}}
                                    value={ body }
                                />
                            </div>
                        </div>

                        <div className="card-footer">
                            <button type='submit' className="btn btn-block bg-gradient-success btn-lg">Atualizar </button>
                            <Link to="/posts" className='btn btn-block bg-gradient-danger btn-lg'>Voltar</Link>
                        </div>
                    </form>
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

            </>
            )

    }else{
        return (
            <Loading />
        )
    }
}

export default PostEdit
