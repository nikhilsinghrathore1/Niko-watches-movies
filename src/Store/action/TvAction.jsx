import {loadtv} from "../reducers/TvSlice"
export {removetv} from "../reducers/TvSlice"
import axios  from "../../utils/axios"

export const asyncLoadTv = (id) => async(dispatch , getState) =>{
               try{
                              const detail = await axios.get(`/tv/${id}`)
                              const externalId = await axios.get(`/tv/${id}/external_ids`)
                              const recomand = await axios.get(`/tv/${id}/recommendations`)
                              const similar = await axios.get(`/tv/${id}/similar`)
                              const videos = await axios.get(`/tv/${id}/videos`)
                              const watchProvider = await axios.get(`/tv/${id}/watch/providers`)

                              let fulldata = {
                                             details:detail.data,
                                             exteranal: externalId.data,
                                             rec:recomand.data.results,
                                             similar :similar.data.results,
                                             // videos :videos.data.results.find(m=>m.type === "Trailer"),
                                             watchProvider:watchProvider.data.results
                              }
                              dispatch(loadtv(fulldata))
                              console.log(fulldata)
               }
               catch(err){
                              console.log(err)
               }
}