import React from "react";
import { MenuVideos, CardVideo } from "./styled";

function Videos(){

    const reproduzVideo = () => {
        alert("O vídeo está sendo reproduzido")
    }

    return(
        <>
            <MenuVideos>
                <CardVideo onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=1 " alt="" width="100%"></img>
                    <h4>Título do vídeo</h4>
                </CardVideo>
                <CardVideo onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=2 " alt="" width="100%"></img>
                    <h4>Título do vídeo</h4>
                </CardVideo>
                <CardVideo onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=3 " alt="" width="100%"></img>
                    <h4>Título do vídeo</h4>
                </CardVideo>
                <CardVideo onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=4 " alt="" width="100%"></img>
                    <h4>Título do vídeo</h4>
                </CardVideo>
                <CardVideo onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=5 " alt="" width="100%"></img>
                    <h4>Título do vídeo</h4>
                </CardVideo>
                <CardVideo onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=6 " alt="" width="100%"></img>
                    <h4>Título do vídeo</h4>
                </CardVideo>
                <CardVideo onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=7 " alt="" width="100%"></img>
                    <h4>Título do vídeo</h4>
                </CardVideo>
                <CardVideo onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=8 " alt="" width="100%"></img>
                    <h4>Título do vídeo</h4>
                </CardVideo>
            </MenuVideos>
        </>
    )
}

export default Videos;