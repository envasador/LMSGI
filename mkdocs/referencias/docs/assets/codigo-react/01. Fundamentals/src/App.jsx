import { Fragment } from "react"
import Contador from "./components/Contador"
import Eventos from "./components/Eventos"
import Formulario from "./components/Formulario"
import Listas from "./components/Listas"
import Parrafo from "./components/Parrafo"
import Variables from "./components/Variables"

const App = () => {
    return (
        <>
            <h1 className="tex-center">My first App</h1>
            {/* <Parrafo /> */}
            {/* <Variables /> */}
            {/* <Eventos /> */}
            {/* <Contador /> */}
            {/* < Listas /> */}
            < Formulario />
        </>
    )
}


export default App