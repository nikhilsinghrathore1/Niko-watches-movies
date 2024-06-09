import React from "react";
import { useNavigate } from "react-router-dom";

const Searched = ({ data }) => {
  const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/${data.media_type}/${data.id}`)} className="w-full text-[17px] gap-4 bg-black/50 flex items-center px-5 p-[6px] mb-2">
      <img
        className="w-[85px] h-[85px] rounded-lg object-cover"
        src={
          data.backdrop_path || data.profile_path
            ? `https://image.tmdb.org/t/p/original/${
                data.backdrop_path || data.profile_path
              }`
            : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAACUCAMAAADMOLmaAAAAWlBMVEXu7u7///+fn5/MzMzx8fGioqL09PT5+fltbW3BwcHq6ur8/Pxzc3NwcHDJycmurq6ZmZnd3d23t7fT09NoaGiBgYGoqKiSkpLk5ORhYWGMjIx7e3tUVFRbW1tgKzRyAAAMF0lEQVR4nO2cC3OruA6AeRgbG/ATjAO7//9vXsmQlJB2i6HbnXsmOjMnQHD5Ksl6GGiWXROS55nlVuarNMLxu5SBsuUoI+cvcBEwo3nugDDkH9II4+Qd0gi6QlL63xCCkjgQ0vxJGhKctCukC2SFPKPKy4R5TgCQN/leGkYdXyG5NOuv0DTslwlBOwYI3QvgqjUjH17pBFt/D5py1auEYOQSCLMvCBEnuHJBtNyFbJk6CYq8StjklFvL6deECJmZu8FlCapMQrxICEYO1lr36oZ7c7NQ2tUrZUlhKv0SIajDKWvNd4CLZGsQsuI3CRkaeeeGlLEvIXHqSJI3hy9xkRDcEIzM96oS7kvEHFIOOMVvEcIEMWDkcqM+CHllSeRX4ScnoEODk+fXCMHIajVyQ42U1OWupNKLLwgD+CF8d/wa1wjBWqBCtWoH+EpDlMsN5YqjLzYvxm7AyDLFyNcIMdYoq5a6RpSyLKUQShmYPspymVPzMslxYpUpRr5EiKWVVNbHusaUKJI5RA5WKThcvrojXeqghMueJCQwLqA/WSBkkMsWwNKh1QFPYQRCnTY7f8RKLSnpnSIEvGC40iOYFjTGGymlMc4thCjcQKHlFp2aJ1/E7PwvExJKgrSq0IW2MaEow1BZkHAjYQllYaDEoFfCYeqKrRaZ4jYp1qQSEsoM9wXggYwmb2BGKBFk+RDKGtZQV66HJAl+O1tCLHaPp7w0QpIJY/VYPITmAlyOs3IrAgrXD2IpgrdbI0MCYklGPk5IhLPFqD/4Csty45Uq6RawgcS72cW5rT4cEWONSzPyccKgtnQg2kF+814ZsSV0Uj7tNqDlcmNkC7EmyciHCZndARZFgODmvSVPSnsWGYiHePQofRwYOaWuSSEkL4CK5lmhvG3cl4CLkcFV70aWkFCaNDc8TCj2hBouW3rlXfY1IExlY+VSKsTEaGOxmxg/jp73okPweOVVRcLOyIsjyiiO5oQxRqFJwD4BK7WkuiaFkKodYJXlrIDsm7tnQumQaRXEgvLBOMqkM3kJhGkJJYGQuJ0SoeQylaok28+T50TciKhT2RjpGIT3MtXIx6PNzhEh1uTWq0Jke8JlBYeaEAJqb/laCioz4WOxmwaYkFOezTwSyLHKe+b2hEuLQhdH/PiSGQZG9nlirEkhlE9K1GBk7yuevwRDuShxr1s4CirkiQklhZCYJ0Coq2VRFYa4vZjVEcmOPIPg7RPrmiRCSHtbIwtIKFXlxT8sNuy0SBwkcZo6k5Nqm23eq2gefFXxr9tikJ17xjro3yQk5TahsNwVVWW/6jmXHLf1TkMtJKDkWJNEGKoPQmzngLDS2j7WqrH5XAVLyfLZyMJABkpZr0knzMiHI1ZQ14CRUQpd2XUZOECrIh+ymyjQ5HtOk2NNEiGVD0IoXoOuHlJUFpeBM+NewB5uiJWaTE55aYTE6IcbQj1fVFspKm8hVjfic0gZhMdWP90Nkzoppj+MnOtnwtXgkrCGGFfuMaFQrJQiySkvkZDyFdGznEBH9YKIkF6arCHBPEPKBsvx9HCdSEjM2ujBpcqHPl8gC8VdYFRsIKVhUAediTWp/fIj1uSbBPOJJiuveGhyXK1bG3uo1AryC4R8SXksz4pn+dTg1pCGBWhjZIlGrs7M5FTCxbYjzSn3Wn/HCAaHUEkbYUIDVcaJuiaZkJiYVjQUykwY7kf9vSYryw3JQ1Hp1Eb5DGEmVveLJWBDM1kcgoTqHz5P1DXphGSNN6M1azaGhrgqvrc3cPLURvkcobtnlTG62NqScFU9e+VnhKnrNecIs019A5oDF1sgScBlp3+0tw8nqoYThLu2WRderff0GDV2/AevtGfqmhOEL21zNHgp6IIpuN955cPI8lS4PkGYjXtChNSem7VlCaVVnzmlOVM1nCDMaPUJ4QJpZYiQuMipdvau/FkjpxPyFzN/OCXUiEuzDKGy9ONW3epcyjtBmIUvCZcFeBuatUNtjPXVerY+VbyeI8z8l3hgZ0Mw5hG6PnPBDLcxVI7NWTc8QfipmfWouAnxVtX6cx9PKy2h8rSRT9zx+SzeeOhDNngPykeozE4mlFOE5tnMVaVcxr68PL175VkVnrmv91gd0bqCgl988zwXgeYq/Umlzfj0EesiGNYORryY9vMxF24Sn2kcTAEJGJLIpQsfv9yZQSyDXu436FB+6zrn5U14Xd6E1+VNeF3ehNflTXhd3oTX5U14Xd6E1+VNeF3ehNflTXhd/hRCQpfFGbr28bi/belJ3KPrWR8b93GPMXHQskUPrgkcOwtfiMBPySUOoA6fnTEfK0qO80AoPgsZCfBNo7jSia8piOUUGnh8lJxkxKwvn4Vjaz6HTnJ92+I1p3piGWHj3PZ1O6vH2rmqa0fY0LY9XJUEOHvAxS6hu7YtF+2rue1wkKXUwvcgffmzhN0kyEKYDXU7+AIo/apF8iDsNMsYciEhccBRezyDjX07j6qa2oVwQPlZQtAAXwipbdtRMGaGdnbkmXCe60BCPc+LDlXdjt0QQIMlQLmGMeocobbuy+Zn/RB1qPtJLDosuhktTlXbWfpE2OmpU7nqJt1FwqGbXN+D67IRfkGK64gwc4Cw5pkQ4RDgYcK+HHpOkDCgWnDmyrmrsmfCgreTmVpeICGO4llbj+gY7QBzJODDf0gYrTwfW9k+TOhcfRNbQgKExY5Qk2GGfyTqEPxxDlTBMCIGICdE/dXfpoCEM0j9w4Rlpns/LoSzQR3ytvPPftjpTPZtL7PFyuCFpbF1pyhZfLb0czciYa3wMfOf9cO+ZBJmaDcxUnUtZ3iHDz73fijAqi1GmYFRvqgKRhFWdeizJB8WQvhpPz5T+pKSCaIJEJZtnJe8beew16GgdrB0IRwh5N1uNwgzjoZb21rW3Alrjs8Z/2zEvgGh6VucywwMd+tvfde6XTysdchoQ7Og6yEv51qzpsldW1eU8q6DIbeuHgXGQ0T/2x+6hXGQcBjAjVgxTBqgGNfDPE+Fe1zBDjBV2ThUS4oT1TA2fJiiEwg9FZASXTHN8zBVJSTFYYrCD02VY74gjBHLh4l5WRgMGx9jwWZ4F8OEj30SljHZuoHvMDswLI3fRhGHrn2w+lrvnJD7HRRCnu+lxL2PY3Frc+5jzGbr6M2YP6U+/C/lTXhd/hhCIaB+xf8fu5uPdeOxtx5af7aIx5cUtx0gxPOAa4R81BpqEz6OS83q9YR13qjHeI0wjopSqUd5j8Gs0nqMEcjBUK0Liw1KOY6xz4GgHY/q0Xx//WOEc4eZn5gbJDIk6mO/MkAmwxoW0mGvsVLo7T0NirrrbvjbkPLW9n//XXdYfXEoGJeuBRMfyF/u+7RyhBBq+BnKJrCz7m647+seinmodaBwYZGwKxhWY3dCaqFVabGnIWVfKyaKFupfwqFkWAmhJpNS8gN19hFCNnZThRUKXAKVQKG4AS+rukG1PfSkSKifCLOpm4qujZbta9s0EvSLOvwg7LFtOfLXZI6cIuram7qGS5hYIDpQC2BNnYb9ir3qkLi5U+XcYkkIPVQhOVS97pmwq7i19oB+DhBC5dTKZo7taFHPpoHStSREosk0dgQvOsQ63wmoBaOVoSOtu0i7JcSOuet+hpCAyQLjd99TGVaqBKrUPnamnO51SMIEFSzzUW9AOHk/tXsrLy3zjxASMNeglO+6gmagGG1nJDFdO1tVYTe11yEp63aytmjRGaIfMlqjCV798GcIVRdL4q6tYdL4boCuyGBb3tbx6GDoXYc1z/EtUZjr6who7JCQ0Rx0FgllE8+4Ex6oYb8lJNDbtejUVd3L2AnEJY8GQg3+YYSqA7XcddhOBURhTgAb/x7K2PUOVxt0KQss/4EwnqE5NBLtiOfKH4iHYKbeN5QyM9fQgzfg3jcJRf3fvcIVNnarh8zclojddXVd3xS/9Rx7uYABHiM2tlNDnMvLGb6x65b9iYgtvY+5SXClIApKrypccFiP4htkIuArUCS+TA0O67jySySGHYqv2oNIAXPZLdte0nLdOtAzHzjj3tguq5XroiXdHl2OPRYuX757XdpMWOT8Y6qv/1DehNflTXhd3oTX5U14Xd6E1+VNeF3ehNflTXhd3oTX5U14Xd6E1+X/gPB/US7LFCK3q8EAAAAASUVORK5CYII="
        }
        alt="not showing"
      />
      <h1>
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
    </div>
  );
};

export default Searched;
