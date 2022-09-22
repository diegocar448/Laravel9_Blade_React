import url from "../services/url";

export const deletePost = async (id) => {





    let t = await url.post(`/deletepost/${id}`)
                            .then((response) => {
                                return response;
                            })
                            .catch((response) => {
                                return response;
                            });


    return t;


}
