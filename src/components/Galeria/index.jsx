import styled from "styled-components"
import Titulo from "../Titulo"
import Populares from "./Populares"
import Tags from "./Tag"
import Imagen from "./Imagen"


const GaleriaContainer = styled.div`
    display:flex;
    gap:24px;
`
const SeccionFluida = styled.section`
    flex-grow:1;
`
const ImagenesContainer = styled.section`
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    gap:24px;
`

const Galeria = ({ fotos = [], setTag, alSeleccionarFoto, alAlternarFavorito }) => {
    return (
        <>
            <Tags setTag={setTag} />
            <GaleriaContainer>
                <SeccionFluida>
                    <Titulo>Navegue por la galeria</Titulo>
                    <ImagenesContainer>
                        {fotos.map(foto =>
                            <Imagen
                                alAlternarFavorito={alAlternarFavorito}
                                alSolicitarZoom={alSeleccionarFoto}
                                key={foto.id}
                                foto={foto} />)}
                    </ImagenesContainer>

                </SeccionFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria