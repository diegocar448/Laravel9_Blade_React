import url from "../services/url";




export const loadPost = async () => {



    let t = await url.get('/postslistagem')
                            .then((response) => {
                                return response;
                            })
                            .catch((response) => {
                                return response;
                            });
    return t;
}

export const storePost = async ({title, body}) => {


    let payload = { title: title, body: body };


    let t = await url.post('/storepost', payload)
                            .then((response) => {
                                return response;
                            })
                            .catch((response) => {
                                return response;
                            });


    return t;


}


export const buscarPost = async (title) => {


    let payload = { title: title };


    let t = await url.post('/buscarpost', payload)
                            .then((response) => {
                                return response;
                            })
                            .catch((response) => {
                                return response;
                            });


    return t;


}
