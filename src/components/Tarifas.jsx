// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import html2canvas from "html2canvas";

import TarifasData from "./TarifasData";
import "./Tarifas.css"

function Tarifas() {

    const tablaRef = useRef(null);

    function capturarTabla() {
        const tabla = tablaRef.current;
        html2canvas(tabla).then(function (canvas) {
          const pngUrl = canvas.toDataURL("image/png");
          const downloadLink = document.createElement("a");
          downloadLink.href = pngUrl;
          downloadLink.download = "Tarifas.png";
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
        });
      }

    return (  
        <div>
            <table ref={tablaRef}>
                <tbody>
                    <tr>
                        <td colSpan={3} className="encabezado">Tarifas Urbanos Rojos</td>
                    </tr>
                    <tr>
                        <td colSpan={3} className="nota">A todos los usuarios que nos favorecen con su preferencia, les informamos que a partir del día 31 de octubre de 2019, se hara un incremento a la tarifa, quedando de la siguiente manera:</td>
                    </tr>
                    {TarifasData.map((tarifa, index) => (
                        <tr key={index}>
                            <td className="lugar">{index + 1}</td>
                            <td className="lugar">{tarifa.lugar}</td>
                            <td className="precio">{tarifa.precio}</td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan={3} className="nota">La tarifa es autorizada por la Secretaria de Movilidad y Transporte.</td>
                    </tr>
                    <tr>
                        <td colSpan={3} className="nota">Acuerdo publicado en el periodico oficial de puebla con fecha: 22 de octubre de 2019.</td>
                    </tr>
                </tbody>
            </table>
            <div className="contenedor-boton">
                <button onClick={capturarTabla} className="boton-capturar">Capturar Tarifas</button>
            </div>
            
        </div>
    );
}

export default Tarifas;