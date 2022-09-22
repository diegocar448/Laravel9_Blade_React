import url from "../services/url";


export const updatePost = async ({title, body}) => {


    let payload = { title: title, body: body };


    let t = await url.post('/updatepost', payload)
                            .then((response) => {
                                return response;
                            })
                            .catch((response) => {
                                return response;
                            });


    return t;


}

export const updateSendPost = async ({id, title, body}) => {


    let payload = { id: id, title: title, body: body };


    let t = await url.post(`/updatepost/${id}`, payload)
                            .then((response) => {
                                return response;
                            })
                            .catch((response) => {
                                return response;
                            });


    return t;


}
