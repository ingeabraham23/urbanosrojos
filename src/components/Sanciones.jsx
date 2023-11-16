// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import html2canvas from "html2canvas";

import "./Sanciones.css";

function Sanciones() {
  const tablaRef = useRef(null);

  function capturarTabla() {
    const tabla = tablaRef.current;
    html2canvas(tabla).then(function (canvas) {
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "Sanciones.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  return (
    <>
      <table ref={tablaRef}>
        <thead>
          <tr>
            <td className="encabezado" rowSpan={2}>
              #
            </td>
            <td className="encabezado" rowSpan={2}>
              Causas de Sancion
            </td>
            <td className="encabezado" colSpan={3}>
              Sanciones por reporte
            </td>
          </tr>
          <tr>
            <td className="encabezado">1ro</td>
            <td className="encabezado">2do</td>
            <td className="encabezado">3ro</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Circular con exceso de velocidad</td>
            <td>5</td>
            <td>10</td>
            <td>15</td>
          </tr>
          <tr>
            <td>2</td>
            <td>No circular a paso lento</td>
            <td>5</td>
            <td>10</td>
            <td>15</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Rebasar cuando circulen en carretera</td>
            <td>5</td>
            <td>10</td>
            <td>15</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Descargar pasaje en cinta asfaltica o curva</td>
            <td>5</td>
            <td>10</td>
            <td>15</td>
          </tr>
          <tr>
            <td className="baja">5</td>
            <td className="baja">Manejar en estado de ebriedad</td>
            <td className="baja" colSpan={3}>
              Baja definitiva
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Falta de precaucion y mala operacion del vehículo</td>
            <td>5</td>
            <td>10</td>
            <td>15</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Tener acompañante dentro del vehiculo</td>
            <td>5</td>
            <td>10</td>
            <td>15</td>
          </tr>
          <tr>
            <td>8</td>
            <td>No concluir el recorrido completo</td>
            <td>5</td>
            <td>10</td>
            <td>15</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Llamar por telefono o fumar mientras conduce</td>
            <td>5</td>
            <td>10</td>
            <td>15</td>
          </tr>
          <tr>
            <td>10</td>
            <td>
              Circular fuera de ruta y lugares preestablecidos a cualquier hora
            </td>
            <td>5</td>
            <td>10</td>
            <td>15</td>
          </tr>
          <tr>
            <td>11</td>
            <td>
              Cualquier reporte por parte del usuario se sancionara a criterio
            </td>
            <td>5</td>
            <td>10</td>
            <td>15</td>
          </tr>
          <tr>
            <td className="baja">12</td>
            <td className="baja">
              Falta de respeto, agresion al jefe de terminal y checador
            </td>
            <td className="baja" colSpan={3}>
              Baja definitiva
            </td>
          </tr>
          <tr>
            <td className="baja">13</td>
            <td className="baja">
              Falta de respeto o agresion a los permisionarios
            </td>
            <td className="baja" colSpan={3}>
              Baja definitiva
            </td>
          </tr>
          <tr>
            <td>14</td>
            <td>Obsenidades mientras conduce</td>
            <td>5</td>
            <td>10</td>
            <td>15</td>
          </tr>
          <tr>
            <td>15</td>
            <td>Obsenidades dentro de la terminal</td>
            <td>5</td>
            <td>10</td>
            <td>15</td>
          </tr>
          <tr>
            <td className="baja">16</td>
            <td className="baja">Agresion verbal o fisica entre compañeros</td>
            <td className="baja" colSpan={3}>
              Baja definitiva
            </td>
          </tr>
          <tr>
            <td>17</td>
            <td>Agresiona conductores en la vía pública</td>
            <td>5</td>
            <td>10</td>
            <td>15</td>
          </tr>
          <tr>
            <td>18</td>
            <td>Traer la unidad sucia</td>
            <td>5</td>
            <td>10</td>
            <td>15</td>
          </tr>
          <tr>
            <td>19</td>
            <td>Mala presentación del conductor</td>
            <td>5</td>
            <td>10</td>
            <td>15</td>
          </tr>
          <tr>
            <td className="baja">20</td>
            <td className="baja">
              Dejar la unidad en manos de personal no autorizado
            </td>
            <td className="baja" colSpan={3}>
              Baja definitiva
            </td>
          </tr>
          <tr>
            <td className="otra">21</td>
            <td className="otra">
              Por falta de cumplimiento ruta <br></br> Carrizal - San miguel
            </td>
            <td className="otra" colSpan={3}>
              Se para camioneta al día siguiente
            </td>
          </tr>
          <tr>
            <td className="otra">22</td>
            <td className="otra">Falta</td>
            <td className="otra" colSpan={3}>
              Hablar con directiva
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5} className="pie">
              <strong>Primer Reporte:</strong> Se le impondrá una sanción de 5
              días de suspensión de sus actividades como operador de urbanos
              rojos.<br></br>
              <strong>Segundo Reporte:</strong> Si, lamentablemente, se registra
              un segundo reporte debido a la misma falta, la sanción se
              incrementará a un periodo de 10 días de suspensión.<br></br>
              <strong>Tercer Reporte:</strong> En el caso de un tercer reporte
              por la misma infracción, se aplicará una sanción más rigurosa, que
              consistirá en una suspensión de 15 días. Esto se hace con la
              intención de asegurar que las conductas no deseadas sean
              corregidas de manera efectiva.
            </td>
          </tr>
          <tr>
            <td colSpan={5} className="pie">
              <strong>Nota:</strong> Todo conductor posturero que incurra en
              cualquier sanción de las antes mencionadas, causara baja
              definitiva dentro de la ruta
            </td>
          </tr>
        </tfoot>
      </table>
      <div className="contenedor-boton">
        <button onClick={capturarTabla} className="boton-capturar">
          Capturar Sanciones
        </button>
      </div>
    </>
  );
}

export default Sanciones;
