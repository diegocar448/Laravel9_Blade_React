import React, {useEffect, useState} from 'react';

//components
import Loading from "../../components/Loading";

//hooks
import {storePost} from '../../hooks/storePost';
import { useNavigate } from "react-router-dom"; //parar redirecionar o usar depois que criar o post

const PostCreate = () => {

    let [title, setTitle] = useState("");
    let [body, setBody] = useState("");
    let [loading, setLoading] = useState(false);
    let [errors, setErrors] = useState(undefined);

    let teste = 'border-color: red';

    //usar o navigate para redirecionar para outra pagina
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        let resultado = await storePost({ title, body });

        if (resultado.status === 201) {
            setLoading(false);
            setTitle("");
            setBody("");

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



    if (loading === false) {
        return (
            <>
                <div className="card card-primary">
                    <div className="card-header">
                        <h3 className="card-title">Adicionar Postagem</h3>
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
                                    onChange={ (e) => setTitle(e.target.value) }
                                    style={ errors?.title ? { borderColor:'red'} : {}}

                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Texto</label>
                                <input
                                    type="text"
                                    name="texto"
                                    className="form-control"
                                    placeholder="Texto"
                                    onChange={ (e) => setBody(e.target.value) }
                                    style={ errors?.body ? { borderColor:'red'} : {}}
                                />
                            </div>
                        </div>

                        <div className="card-footer">
                            <button type='submit' className="btn btn-block bg-gradient-success btn-lg">Enviar </button>
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

export default PostCreate
