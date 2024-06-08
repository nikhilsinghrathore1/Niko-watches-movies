import {loadMovie} from "../reducers/MovieSlice"
export {removeMovie} from "../reducers/MovieSlice"
import axios  from "../../utils/axios"

export const asyncLoadMovie = (id) => async(dispatch , getState) =>{
               try{
                              const detail = await axios.get(`/movie/${id}`)
                              const externalId = await axios.get(`/movie/${id}/external_ids`)
                              const recomand = await axios.get(`/movie/${id}/recommendations`)
                              const similar = await axios.get(`/movie/${id}/similar`)
                              const videos = await axios.get(`/movie/${id}/videos`)
                              const watchProvider = await axios.get(`/movie/${id}/watch/providers`)

                              let fulldata = {
                                             details:detail.data,
                                             exteranal: externalId.data,
                                             rec:recomand.data.results,
                                             similar :similar.data.results,
                                             videos :videos.data.results.find(m=>m.type === "Trailer"),
                                             watchProvider:watchProvider.data.results
                              }
                              dispatch(loadMovie(fulldata))
                              console.log(fulldata)
               }
               catch(err){
                              console.log(err)
               }
}