import React, { useEffect } from 'react'
import {useDispatch , useSelector} from "react-redux"
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import{asyncLoadTv, removetv} from "../Store/action/TvAction"
import Loading from '../template/Loading'

const TvDetails = () => {
  const {pathname} = useLocation()
  const navigate = useNavigate()
  const {info} = useSelector(state=>state.tv)
const dispatch = useDispatch()
const {id} = useParams()
// console.log(info)

  useEffect(() => {
    dispatch(asyncLoadTv(id))
    return ()=>{
      dispatch(removetv())
    }
  }, [id])
  
  // console.log(info.details.name || info.details.title || info.details.original_name || info.details.original_title)

  return info?(
    <div className='w-full relative h-[170vh] overflow-hidden bg-[#1D1C23] '>

    <div className='w-full absolute z-20 h-full pt-16 px-20  bg-black/65'>
      <div className='w-full h-[47%] flex px-16 '>
    <div className='w-[35%] h-[100%] rounded-md shadow-lg  shadow-white/10 overflow-hidden text-white  '>
      <img className='w-full h-full object-cover ' src={`https://image.tmdb.org/t/p/original/${info.details.backdrop_path || info.details.profile_path}`}  alt="not showing" />


    </div>
    <div className='w-full text-white ml-7 '>
      <div>
        <h1 className=' text-7xl -mt-2  font-bold'>{info.details.name || info.details.title || info.details.original_name || info.details.original_title} <small className='text-xl -ml-3 opacity-50'>({info.details.first_air_date.split("-")[0]})</small> </h1>
      <p className='opacity-60 text-xs mt-1 ml-3'>"{info.details.tagline}"</p>
      </div>

        <p className='w-[65%] text-[15px] opacity-85 mt-4 '>{info.details.overview.slice(0,200)}</p>
        
        <div className='mt-5 flex items-center gap-1'>
        <h1 className='text-xl opacity-80 font-semibold'>Netizen Score:</h1>
        <div className='w-12 flex items-center justify-center text-xl font-bold h-12 rounded-full text-white bg-yellow-600'>{(info.details.vote_average*10).toFixed()}<sup>%</sup> </div>
        <h1 className='text-xl opacity-80 ml-5 capitalize'>release date : {info.details.release_date}</h1>

        </div>
        <div className='flex gap-3 pt-7 text-white items-center'>
       <h1 className='text-lg font-semibold  capitalize'>available on:</h1>
        <div className='flex gap-2'> 
          <img className='w-10 h-10 shadow-white/20 shadow-sm object-cover rounded' src="data:image/png;base64,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" alt="not showing" />
          <img className='w-10 h-10 shadow-white/20 shadow-sm object-cover rounded' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAZlBMVEX////jAAD85uf1vb31tbfsb3HlCRXmGCHqXmHzoqXnLjPnLDHym53lAAj/+/ztbnLqTlLoO0DvgIPlAA/wjI/1sLL98PH96+zpRkr0qavue3350tPnIinsaW33w8X619jpVln4ystDGPaRAAABIklEQVRIie2S23KDIBCG9wejRhA1eKgxavL+L9kl9ABOM9PLTofvYhnW/WABiRKJROL/s1lNU34iWVSVaqlTPHT0xkMhNzu7kqsVJq+ISrsEosSNJpSUganIoq6Rk3KzTOLsShoIWrEJKIpE7ONT1M+5yQuOyhqOmRdPLD6w9pgP4sWLZ5/4ECkWqYAFxaKFb3WdtfkWLxcZiZo3OIg3zJ9n/BKr2tWF4ggXI7G3Xe3ERmZBq8suInEDloM4r/jFGVugOYjn7bWojfHiju72PEkgavKiqvKOE/yK7g79c8Dt48QThh7DUVxxp4Fr6jsnmisH3btvj7JsVUMlBF8NCXSh6B5+6TcaRdRIiJloGiT/ctjD7Piq/ocVXq6dSCQSf493w2wM3Ccs+rAAAAAASUVORK5CYII=" alt="not showing" />
          <img className='w-10 h-10 shadow-white/20 shadow-sm object-cover rounded' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAe1BMVEUamP8AAAAbnf8amv8bn/8Tcr4LQnEYjOgWftMYiucSarENUYkVecscof8UdcMZkvMKO2QJM1cMR3oSZqkKN10PWJUXhd8Wg9ccpP8IK0oHJEIDESUQXZ0PVo8FHTcCCRsAAAwBCBYFGzAHK0YEGSkOTn8QYJwLQmwFIjhR1hg1AAACSUlEQVRIie2U3XKjMAyFOZbNjwkYcIBAEtK0S9P3f8KV3HRmp1Oz273Y2YsoMcbAZ8nSsZPkYQ/7P4w0/R1nJ/ct8uNjlSKn+/j3E5BS3PgvP8dNkQuNJyJ+FuNUNzeA1wbmWJ6Q7XAGZm4tqROwFDGSw/PjDGdwSW0vYJOn6PIWhYEd0Kg46LSFMagrXQroK4tdxbfp01jjtgUqnptDJfUO8jy1zLG/TEsZTTODWdVh+AIs4Q5VLDcC4opGog1gzaBnkOcqODfoN0IdvSFypiAaTCJ9YRzfOnK+t1uhOikWUbiE/r3JUFG8juUlTPoh042SfyYDQUVrQ++b7HtyNdhLGlSH8Q/B4JHFOciSVCUgKS0POfqNbab6dqBkn2atV5Rep5ZBlx5no1Q9X6ddrBoS41mzsgd0VYO0PzJ4OVqWao4jj/KoT8Jy4MLnKBM862oFC7Q+eLDU82qHLuqS5eKOc8Vghr2W5HiwtXqCo4z7qMeBd6BVweOiJTmsvsxp3WDQOdKox0TPAFHOa5yw2gWjw2Lqc2Iw1TPqeF7JXkpF49NZuQlLdx1VfQGeEzkA4OMO7yqTi5w6SnpyFI6c0H3L7tqOSzwR0URpLRFE3576yEsyL7zI13gduRhf7iVn82F3jdcxYcGx4vSnPUsscLMenuMe5ZsV+HHecdE5pySbRFNhb0DtED2QA6mHm8jsul9fvbX+fJPV4ZX06RaP9I660xt+tcZIVddtLKBKu7q/vby9vbSrz+9b+M/qHxanpG0W/mEP+3f2E+KBHQtjfC2uAAAAAElFTkSuQmCC" alt="not showing" />
        </div>
    </div>
    <div className='flex gap-3 pt-2 text-white items-center'>
       <h1 className='text-lg font-semibold  capitalize'>rent on:</h1>
        <div className='flex gap-2'> 
          <img className='w-10 h-10 shadow-white/20 shadow-sm object-cover rounded' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABpCAMAAABIxpznAAAAclBMVEXx8fQVFRUxMTESEhIsLCwYGBgAAAApKSn5+fkaGhomJiYgICAcHBz////09Pf5+ftYWFlOTk/BwcLk5Oefn58MDAxISEiTk5Orq6ulpaXg4OBeXl5paWl+fn5UVFN4eHnU1NU5OTnLy8y4uLlBQUGKiow0XJuxAAAD50lEQVR4nO2b65KqOhBGiTEtCAkIRpGLCOj7v+LpcHGLY+nI7Kpp98mylBj4kTXNR2LBOI7FYrFYLBaLxWKxWCyW/wEqDJWTvKQ/jixKOc22yqPj5jnHY1RU6Ukpoi5hsq/BWy2/xUrA7uCQNFFp7S8Xb7D0z3H426P+SljytzQ6Fb6nZ1J572oY2N797YFPCffBHI/FIkhJ5UQ1MM9jsYCElEmxnivil4RiomI21wM50SlJWM5MiIEf6IjI9yaQKeuj/O3xX0ng4ezdjfOl4lKTCYlq9PfWJVPN0RaS3xYYCVs+Q+SKJpP2MP2ZSENG5CBwOTtfhMzSMdyK1VOW5v0RIvzR8P31C73PEAl4dH5hMkBbROSOzP3PE1nf4RVSShgrojV/UhzSIuBI2cLwRaSHbW0aZtjrL0pAWERgQZrF1Qqrs/PvXf9I0xTxwVBmW7MJBhHX/RARfR2V3m2zLM3XddE4Tlygoc+NyFkzfy04G3x8xjlJkfHvDYXC80i6WYIf2EiBVU2MIk0Tb85x02z6Ip3bpokCiiI9rHB75LBxIthL8wU/In4yZmbsrMLvQLIiPZANBgMq17rMTGeWnTbG6dQf1/YXNR9fpERgKMhm6iEvuEODyUgNIHyOjaNnRJQrczHa0xOBy1TEXQVdt7lqmRbgubXHY3kuZbb0CYscpiJO39+JmEJojEaGfZCasFAWSe8qcicSnBPXXXr+GiuzEJRF9ncZKfREBMcsMTdiI2VyLQhFETz3pyIn4U1ENIYj1rDto0JXJIBwemrJGIJbER9waqnxIu1EgqZI0IPzw53JyRtExJgiWdTY/acgJEV0cS9ywF2dCBsOcGVbmqD4wQhFERzUxEQ6PutEZIQTIu73NJ5WmHjtBbRF+HIqcjF7jEhWVgtj0k01JjrERQIo+yViv1JsYUwOdhy5Ma2NSElWxLsCe1z6NpeyVbhhXTLEOjbT/IZ3KTnhCnLB6It4sKvO5tfhqoqA9V0M6qLIfRF4HpbkuNndRoSsiMeBe4EXMNA3fVprcW3y28M9WiLCmw0pEfGcp56fJPLY7l8RGSElwoR5Gdgni6TAvoJOY+OFCJ07Vu0jkW8gujeQuYeompkiPXTu6jrJT0Q4UImI40imf1CQiM6TD7ha/4EIoSe2MCT8FnPCfNeD+xkdEUdVUxN04Y9gveKtJVzoRARFMtAPR/4SDbSemQ0P80y0jkl5YE0uc0w0HIg9ZWqeM4X7nLwEIKUUkIGwOb+nAnAksziZoJw0gjcoWqpP+TtKJe2lyqOX5NU+TshqGJQKw1C9JCT97yMWi8VisVgsFovFYrFY/iL/AfAlfweUH7PvAAAAAElFTkSuQmCC" alt="not showing" />
        </div>
    </div>
    <div className='w-full  pt-5'>

        <button onClick={()=>navigate(`${pathname}/trailer`)} className='w-[28%] font-semibold capitalize rounded-md h-12 bg-[#6556CD]'>
        <i class="ri-play-fill mr-1"></i>
          watch trailer
        </button>
    </div>
    </div>
    </div>

    <div className='w-full h-[60vh] pt-32'>

    <h1 className='text-white text-xl mb-1 opacity-60'>May also like..</h1>
    <div className='w-full justify-start  text-white  flex  overflow-auto  flex-nowrap gap-12  '>
{info.rec.map(e=>(
                              
                              <div onClick={()=>navigate(`/${e.media_type}/${e.id}`)} className='w-[18%] flex-shrink-0 relative h-[365px] text-[21.5px] font-semibold rounded overflow-hidden'>
                              <img className='w-full h-[80%] object-cover' src={e.backdrop_path || e.profile_path?`https://image.tmdb.org/t/p/original/${e.backdrop_path || e.profile_path}`:"data:image/png;base64,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"} alt="not showing" />
                              <h1 className='mt-2 opacity-60'>{e.name || e.title || e.original_name || e.original_title}</h1>
                              <div className='w-12 flex items-center justify-center absolute bottom-[20%] -right-[0%] h-12 rounded-full text-white bg-yellow-600'>{(e.vote_average*10).toFixed()}<sup>%</sup> </div>
               </div>
               ))}
</div>

    </div>


    </div>


      <nav className='relative z-30 text-white p-3'>
      <i onClick={()=>navigate(-1)} className="text-2xl ri-arrow-left-line"></i>
      {/* <i class="ri-earth-fill"></i> */}

      </nav>
      <img className='w-full  absolute top-0  h-screen' src={
          info.details.backdrop_path || info.details.profile_path
            ? `https://image.tmdb.org/t/p/original/${
              info.details.backdrop_path || info.details.profile_path
              }`
            : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAACUCAMAAADMOLmaAAAAWlBMVEXu7u7///+fn5/MzMzx8fGioqL09PT5+fltbW3BwcHq6ur8/Pxzc3NwcHDJycmurq6ZmZnd3d23t7fT09NoaGiBgYGoqKiSkpLk5ORhYWGMjIx7e3tUVFRbW1tgKzRyAAAMF0lEQVR4nO2cC3OruA6AeRgbG/ATjAO7//9vXsmQlJB2i6HbnXsmOjMnQHD5Ksl6GGiWXROS55nlVuarNMLxu5SBsuUoI+cvcBEwo3nugDDkH9II4+Qd0gi6QlL63xCCkjgQ0vxJGhKctCukC2SFPKPKy4R5TgCQN/leGkYdXyG5NOuv0DTslwlBOwYI3QvgqjUjH17pBFt/D5py1auEYOQSCLMvCBEnuHJBtNyFbJk6CYq8StjklFvL6deECJmZu8FlCapMQrxICEYO1lr36oZ7c7NQ2tUrZUlhKv0SIajDKWvNd4CLZGsQsuI3CRkaeeeGlLEvIXHqSJI3hy9xkRDcEIzM96oS7kvEHFIOOMVvEcIEMWDkcqM+CHllSeRX4ScnoEODk+fXCMHIajVyQ42U1OWupNKLLwgD+CF8d/wa1wjBWqBCtWoH+EpDlMsN5YqjLzYvxm7AyDLFyNcIMdYoq5a6RpSyLKUQShmYPspymVPzMslxYpUpRr5EiKWVVNbHusaUKJI5RA5WKThcvrojXeqghMueJCQwLqA/WSBkkMsWwNKh1QFPYQRCnTY7f8RKLSnpnSIEvGC40iOYFjTGGymlMc4thCjcQKHlFp2aJ1/E7PwvExJKgrSq0IW2MaEow1BZkHAjYQllYaDEoFfCYeqKrRaZ4jYp1qQSEsoM9wXggYwmb2BGKBFk+RDKGtZQV66HJAl+O1tCLHaPp7w0QpIJY/VYPITmAlyOs3IrAgrXD2IpgrdbI0MCYklGPk5IhLPFqD/4Csty45Uq6RawgcS72cW5rT4cEWONSzPyccKgtnQg2kF+814ZsSV0Uj7tNqDlcmNkC7EmyciHCZndARZFgODmvSVPSnsWGYiHePQofRwYOaWuSSEkL4CK5lmhvG3cl4CLkcFV70aWkFCaNDc8TCj2hBouW3rlXfY1IExlY+VSKsTEaGOxmxg/jp73okPweOVVRcLOyIsjyiiO5oQxRqFJwD4BK7WkuiaFkKodYJXlrIDsm7tnQumQaRXEgvLBOMqkM3kJhGkJJYGQuJ0SoeQylaok28+T50TciKhT2RjpGIT3MtXIx6PNzhEh1uTWq0Jke8JlBYeaEAJqb/laCioz4WOxmwaYkFOezTwSyLHKe+b2hEuLQhdH/PiSGQZG9nlirEkhlE9K1GBk7yuevwRDuShxr1s4CirkiQklhZCYJ0Coq2VRFYa4vZjVEcmOPIPg7RPrmiRCSHtbIwtIKFXlxT8sNuy0SBwkcZo6k5Nqm23eq2gefFXxr9tikJ17xjro3yQk5TahsNwVVWW/6jmXHLf1TkMtJKDkWJNEGKoPQmzngLDS2j7WqrH5XAVLyfLZyMJABkpZr0knzMiHI1ZQ14CRUQpd2XUZOECrIh+ymyjQ5HtOk2NNEiGVD0IoXoOuHlJUFpeBM+NewB5uiJWaTE55aYTE6IcbQj1fVFspKm8hVjfic0gZhMdWP90Nkzoppj+MnOtnwtXgkrCGGFfuMaFQrJQiySkvkZDyFdGznEBH9YKIkF6arCHBPEPKBsvx9HCdSEjM2ujBpcqHPl8gC8VdYFRsIKVhUAediTWp/fIj1uSbBPOJJiuveGhyXK1bG3uo1AryC4R8SXksz4pn+dTg1pCGBWhjZIlGrs7M5FTCxbYjzSn3Wn/HCAaHUEkbYUIDVcaJuiaZkJiYVjQUykwY7kf9vSYryw3JQ1Hp1Eb5DGEmVveLJWBDM1kcgoTqHz5P1DXphGSNN6M1azaGhrgqvrc3cPLURvkcobtnlTG62NqScFU9e+VnhKnrNecIs019A5oDF1sgScBlp3+0tw8nqoYThLu2WRderff0GDV2/AevtGfqmhOEL21zNHgp6IIpuN955cPI8lS4PkGYjXtChNSem7VlCaVVnzmlOVM1nCDMaPUJ4QJpZYiQuMipdvau/FkjpxPyFzN/OCXUiEuzDKGy9ONW3epcyjtBmIUvCZcFeBuatUNtjPXVerY+VbyeI8z8l3hgZ0Mw5hG6PnPBDLcxVI7NWTc8QfipmfWouAnxVtX6cx9PKy2h8rSRT9zx+SzeeOhDNngPykeozE4mlFOE5tnMVaVcxr68PL175VkVnrmv91gd0bqCgl988zwXgeYq/Umlzfj0EesiGNYORryY9vMxF24Sn2kcTAEJGJLIpQsfv9yZQSyDXu436FB+6zrn5U14Xd6E1+VNeF3ehNflTXhd3oTX5U14Xd6E1+VNeF3ehNflTXhd/hRCQpfFGbr28bi/belJ3KPrWR8b93GPMXHQskUPrgkcOwtfiMBPySUOoA6fnTEfK0qO80AoPgsZCfBNo7jSia8piOUUGnh8lJxkxKwvn4Vjaz6HTnJ92+I1p3piGWHj3PZ1O6vH2rmqa0fY0LY9XJUEOHvAxS6hu7YtF+2rue1wkKXUwvcgffmzhN0kyEKYDXU7+AIo/apF8iDsNMsYciEhccBRezyDjX07j6qa2oVwQPlZQtAAXwipbdtRMGaGdnbkmXCe60BCPc+LDlXdjt0QQIMlQLmGMeocobbuy+Zn/RB1qPtJLDosuhktTlXbWfpE2OmpU7nqJt1FwqGbXN+D67IRfkGK64gwc4Cw5pkQ4RDgYcK+HHpOkDCgWnDmyrmrsmfCgreTmVpeICGO4llbj+gY7QBzJODDf0gYrTwfW9k+TOhcfRNbQgKExY5Qk2GGfyTqEPxxDlTBMCIGICdE/dXfpoCEM0j9w4Rlpns/LoSzQR3ytvPPftjpTPZtL7PFyuCFpbF1pyhZfLb0czciYa3wMfOf9cO+ZBJmaDcxUnUtZ3iHDz73fijAqi1GmYFRvqgKRhFWdeizJB8WQvhpPz5T+pKSCaIJEJZtnJe8beew16GgdrB0IRwh5N1uNwgzjoZb21rW3Alrjs8Z/2zEvgGh6VucywwMd+tvfde6XTysdchoQ7Og6yEv51qzpsldW1eU8q6DIbeuHgXGQ0T/2x+6hXGQcBjAjVgxTBqgGNfDPE+Fe1zBDjBV2ThUS4oT1TA2fJiiEwg9FZASXTHN8zBVJSTFYYrCD02VY74gjBHLh4l5WRgMGx9jwWZ4F8OEj30SljHZuoHvMDswLI3fRhGHrn2w+lrvnJD7HRRCnu+lxL2PY3Frc+5jzGbr6M2YP6U+/C/lTXhd/hhCIaB+xf8fu5uPdeOxtx5af7aIx5cUtx0gxPOAa4R81BpqEz6OS83q9YR13qjHeI0wjopSqUd5j8Gs0nqMEcjBUK0Liw1KOY6xz4GgHY/q0Xx//WOEc4eZn5gbJDIk6mO/MkAmwxoW0mGvsVLo7T0NirrrbvjbkPLW9n//XXdYfXEoGJeuBRMfyF/u+7RyhBBq+BnKJrCz7m647+seinmodaBwYZGwKxhWY3dCaqFVabGnIWVfKyaKFupfwqFkWAmhJpNS8gN19hFCNnZThRUKXAKVQKG4AS+rukG1PfSkSKifCLOpm4qujZbta9s0EvSLOvwg7LFtOfLXZI6cIuram7qGS5hYIDpQC2BNnYb9ir3qkLi5U+XcYkkIPVQhOVS97pmwq7i19oB+DhBC5dTKZo7taFHPpoHStSREosk0dgQvOsQ63wmoBaOVoSOtu0i7JcSOuet+hpCAyQLjd99TGVaqBKrUPnamnO51SMIEFSzzUW9AOHk/tXsrLy3zjxASMNeglO+6gmagGG1nJDFdO1tVYTe11yEp63aytmjRGaIfMlqjCV798GcIVRdL4q6tYdL4boCuyGBb3tbx6GDoXYc1z/EtUZjr6who7JCQ0Rx0FgllE8+4Ex6oYb8lJNDbtejUVd3L2AnEJY8GQg3+YYSqA7XcddhOBURhTgAb/x7K2PUOVxt0KQss/4EwnqE5NBLtiOfKH4iHYKbeN5QyM9fQgzfg3jcJRf3fvcIVNnarh8zclojddXVd3xS/9Rx7uYABHiM2tlNDnMvLGb6x65b9iYgtvY+5SXClIApKrypccFiP4htkIuArUCS+TA0O67jySySGHYqv2oNIAXPZLdte0nLdOtAzHzjj3tguq5XroiXdHl2OPRYuX757XdpMWOT8Y6qv/1DehNflTXhd3oTX5U14Xd6E1+VNeF3ehNflTXhd3oTX5U14Xd6E1+X/gPB/US7LFCK3q8EAAAAASUVORK5CYII="
        } alt="not showing" />


    </div>
  ):<Loading/>
}

export default TvDetails;