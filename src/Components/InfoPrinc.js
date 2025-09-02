import "./InfoPrinc.css"
import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { FaVolumeUp } from "react-icons/fa";
import { TbNumber12Small } from "react-icons/tb";
import { SiNetflix } from "react-icons/si";

function InfoPrinc() {

    return (

        <div className="detInical">

            <div className="logoNet">
                <SiNetflix className="logo" />
                <span className="nomeFilm">F I L M E</span>
            </div>

            <div className="title">
                <span className="nomeFilme1"> Luta Pela Fé </span>
                <span className="nomeFilme2">A História do Padre Stu</span>
            </div>

            <div className="info">

                <div className="option">
                    <div className="assistir">
                        <FaPlay /> <span> Assistir</span>
                    </div>

                    <div className="mais">
                        <CiCircleInfo className="circulo" /> <span> Mais informações</span>
                    </div>
                </div>

                <div className="infos">
                    <FaVolumeUp className="volume" /> |
                    <TbNumber12Small className="idade" />
                </div>

            </div>

        </div>
    );
}

export default InfoPrinc;