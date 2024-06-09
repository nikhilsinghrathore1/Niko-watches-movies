
export {removePerson} from "../reducers/PersonSlice"
import axios  from "../../utils/axios"
import { loadPerson } from "../reducers/PersonSlice"

export const asyncLoadperson = (id) => async(dispatch , getState) =>{
               try{
                              const detail = await axios.get(`/person/${id}`)
                              const externalId = await axios.get(`/person/${id}/external_ids`)
                              const CombinedCredits = await axios.get(`/person/${id}/combined_credits`)
                              const tvCredits = await axios.get(`/person/${id}/tv_credits`)
                              const movieCredits = await axios.get(`/person/${id}/movie_credits`)
                          

                              let fulldata = {
                                             details:detail.data,
                                             exteranal: externalId.data,
                                             CombinedCredits:CombinedCredits.data,
                                             tvCredits:tvCredits.data,
                                             movieCredits:movieCredits.data

                               
                              }
                              dispatch(loadPerson(fulldata))
                              // console.log(fulldata) 
               }
               catch(err){
                              console.log(err)
               }
}