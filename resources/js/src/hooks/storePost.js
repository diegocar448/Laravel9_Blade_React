import url from "../services/url";


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
