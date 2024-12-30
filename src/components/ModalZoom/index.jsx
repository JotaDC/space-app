import BotonIcono from "../BotonIcono"
import Imagen from "../Galeria/Imagen"
import { styled } from "styled-components"

const Overlay = styled.div`
    background-color:rgba(0,0,0,0.7);
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    

`
const DialogEstilizado = styled.dialog`
    position:absolute;
    top:5%;
    background:transparent;
    padding:0;
    border:0;
    width:60%;
    display:flex;
    justify-content:center;
    form{
        button{
            position:relative;
            top:20px;
            right:60px;
        }
    }
`

const ModalZoom = ({ foto, alCerrar, alAlternarFavorito }) => {
    return (
        <>
            {foto && <>
                <Overlay>
                    <DialogEstilizado open={!!foto} onClose={alCerrar} >
                        <Imagen expandida={true} foto={foto} 
                        alAlternarFavorito={alAlternarFavorito}/>
                        <form method="dialog">
                            <BotonIcono>
                                <img src="/iconos/cerrar.png" alt="Icono de Cerrar" />
                            </BotonIcono>
                        </form>
                    </DialogEstilizado>
                </Overlay>

            </>}

        </>
    )
}
export default ModalZoom