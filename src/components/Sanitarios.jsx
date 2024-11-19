// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import html2canvas from "html2canvas";
import sanitarios from "/sanitarios.png";
import foto01 from "/sanitarios/01.jpg";
import foto02 from "/sanitarios/02.jpg";
import foto03 from "/sanitarios/03.jpg";
import foto04 from "/sanitarios/04.jpg";
import foto05 from "/sanitarios/05.jpg";
import foto06 from "/sanitarios/06.jpg";
import foto07 from "/sanitarios/07.jpg";
import foto08 from "/sanitarios/08.jpg";
import foto09 from "/sanitarios/09.png";
import foto10 from "/sanitarios/10.jpg";
import foto11 from "/sanitarios/11.png";
import foto12 from "/sanitarios/12.png";
import foto13 from "/sanitarios/13.png";
import foto14 from "/sanitarios/14.png";
import foto15 from "/sanitarios/15.png";
import foto16 from "/sanitarios/16.jpg";
import foto17 from "/sanitarios/17.png";
import foto18 from "/sanitarios/18.png";
import foto19 from "/sanitarios/19.png";
import foto20 from "/sanitarios/20.png";
import foto21 from "/sanitarios/21.png";
import foto22 from "/sanitarios/22.png";
import foto23 from "/sanitarios/23.png";
import foto24 from "/sanitarios/24.jpg";
import foto25 from "/sanitarios/25.jpg";
import foto26 from "/sanitarios/26.png";
import foto27 from "/sanitarios/27.png";
import foto28 from "/sanitarios/28.png";
import foto29 from "/sanitarios/29.jpg";
import foto30 from "/sanitarios/30.png";
import foto31 from "/sanitarios/31.jpg";
import foto32 from "/sanitarios/32.png";
import foto33 from "/sanitarios/33.png";
import foto34 from "/sanitarios/34.png";
import foto35 from "/sanitarios/35.jpg";
import foto36 from "/sanitarios/36.jpg";
import foto37 from "/sanitarios/37.png";
import foto38 from "/sanitarios/38.png";
import foto39 from "/sanitarios/39.png";
import foto40 from "/sanitarios/40.png";
import foto41 from "/sanitarios/41.jpg";
import foto42 from "/sanitarios/42.png";
import foto43 from "/sanitarios/43.png";
import foto44 from "/sanitarios/44.png";
import foto45 from "/sanitarios/45.png";

import "./Sanitarios.css";

function Sanitarios() {
  const tablaRef = useRef(null);
  const tablaRefLlaves = useRef(null);
  const tablaRefLimpieza = useRef(null);

  function capturarTabla() {
    const tabla = tablaRef.current;
    html2canvas(tabla, {scale: 4}).then(function (canvas) {
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "Sanitarios.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  function capturarTablaLlaves() {
    const tabla = tablaRefLlaves.current;
    html2canvas(tabla, {scale: 4}).then(function (canvas) {
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "Llaves Sanitarios.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  function capturarTablaLimpieza() {
    const tabla = tablaRefLimpieza.current;
    html2canvas(tabla, { scale: 4 }).then(function (canvas) {
      const pngUrl = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = "Limpieza Sanitarios.png";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }

  return (
    <div>
      <table ref={tablaRef} className="tabla-sanitarios">
        <tbody>
          <tr>
            <td>
              <img src={sanitarios} className="foto" />
            </td>
          </tr>
          <tr>
            <td className="encabezado-sanitarios">
              Acceso al Baño para Choferes y Familiares:
            </td>
          </tr>
          <tr>
            <td className="nota2-sanitarios">
              La llave del baño se prestará unicamente al chofer en la caseta
              del checador.
            </td>
          </tr>
          <tr>
            <td className="nota2-sanitarios">
              El chofer es responsable de devolver la llave al checador después
              de su uso.
            </td>
          </tr>
          <tr>
            <td className="nota2-sanitarios">
              En caso de pérdida de la llave, se deberá pagar una multa de{" "}
              <b>$200.00</b> .
            </td>
          </tr>

          <tr>
            <td className="encabezado-sanitarios">
              Suministro de Papel Higiénico:
            </td>
          </tr>
          <tr>
            <td className="nota2-sanitarios">
              El papel higiénico se entregará en la caseta del checador y se
              debe devolver al checador.
            </td>
          </tr>
          <tr>
            <td className="encabezado-sanitarios">
              Cuota Semanal para el Mantenimiento del Baño:
            </td>
          </tr>
          <tr>
            <td className="nota2-sanitarios">
              Todos los lunes, se pedirá a los choferes una contribución de
              <b> $15.00</b>.
            </td>
          </tr>
          <tr>
            <td className="nota2-sanitarios">
              Recaudando un total de: <b>$ 615.00</b>.
            </td>
          </tr>
          <tr>
            <td className="nota2-sanitarios">
              <b>$ 350.00</b> se destinaran al pago a la persona que lavara el
              baño 2 veces al día, se le pagara <b>$50.00</b> al día los 7 días
              de la semana.
            </td>
          </tr>
          <tr>
            <td className="nota2-sanitarios">
              Los restantes <b>$ 265.00</b> se destinaran a la compra de
              productos necesarios para limpieza y desinfección de baños, como
              pastillas aromatizantes, cloro, jabon y papel higienico.
            </td>
          </tr>
          <tr>
            <td className="encabezado-sanitarios">
              Uso del Baño por Usuarios Externos y Clientes:
            </td>
          </tr>
          <tr>
            <td className="nota2-sanitarios">
              Queda estrictamente prohíbido el acceso a los sanitarios para
              personas ajenas a la empresa.
            </td>
          </tr>
          <tr>
            <td className="encabezado-sanitarios">Normas de Conducta:</td>
          </tr>
          <tr>
            <td className="nota3-sanitarios">
              Mantener el baño limpio y en buen estado para el siguiente
              usuario.
            </td>
          </tr>
          <tr>
            <td className="nota3-sanitarios">
              Reportar cualquier desperfecto al checador.
            </td>
          </tr>
          <tr>
            <td colSpan={7} className="copyright-sanitarios">
              © JoyBoy
            </td>
          </tr>
        </tbody>
      </table>
      <div className="contenedor-boton">
        <button onClick={capturarTabla} className="boton-capturar">
          Capturar Sanitarios
        </button>
      </div>
      {/* Tabla copias de llaves Tabla copias de llavesTabla copias de llavesTabla copias de llaves*/}
      <div>
        <table ref={tablaRefLlaves} className="tabla-sanitarios">
          <thead>
            <tr>
              <th className="encabezado-sanitarios">
                Términos y Condiciones para el Uso de la Llave del Baño
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="encabezado-sanitarios">Entrega de Llave:</td>
            </tr>
            <tr>
              <td className="nota2-sanitarios">
                La llave del baño será entregada de manera personal a cada
                empleado que lo solicite, pagando el costo de la copia,
                permitiéndole acceso sin necesidad de solicitarla en la oficina.
              </td>
            </tr>
            <tr>
              <td className="encabezado-sanitarios">
                Responsabilidad por la Llave:
              </td>
            </tr>
            <tr>
              <td className="nota2-sanitarios">
                Cada empleado es responsable del cuidado y buen uso de la llave
                que se le asigne. En caso de pérdida, el empleado deberá
                notificar inmediatamente a la oficina administrativa.
              </td>
            </tr>
            <tr>
              <td className="encabezado-sanitarios">
                Costo por Pérdida de Llave:
              </td>
            </tr>
            <tr>
              <td className="nota2-sanitarios">
                En caso de extravío de la llave, si solicita una nueva copia se
                le cobrara $200.00 MXN para cubrir el costo de copia y el resto
                se sumara a caja.
              </td>
            </tr>
            <tr>
              <td className="encabezado-sanitarios">Uso Personal:</td>
            </tr>
            <tr>
              <td className="nota2-sanitarios">
                La llave es de uso personal y exclusivo del empleado al que se
                le ha asignado. No está permitido prestar, duplicar o entregar
                la llave a terceros, incluyendo otros empleados, sin
                autorización previa.
              </td>
            </tr>
            <tr>
              <td className="encabezado-sanitarios">
                Revisión y Devolución de Llave:
              </td>
            </tr>
            <tr>
              <td className="nota2-sanitarios">
                La empresa se reserva el derecho de solicitar la devolución de
                la llave en cualquier momento y de realizar inspecciones
                periódicas para garantizar el correcto uso de las instalaciones.
              </td>
            </tr>
            <tr>
              <td className="encabezado-sanitarios">Sanciones:</td>
            </tr>
            <tr>
              <td className="nota2-sanitarios">
                El incumplimiento de cualquiera de estas condiciones puede
                resultar en la revocación del acceso personal al baño, así como
                en la imposición de sanciones adicionales según lo determine la
                administración.
              </td>
            </tr>
            <tr>
              <td colSpan={7} className="copyright-sanitarios">
                © JoyBoy
              </td>
            </tr>
          </tbody>
        </table>
        <div className="contenedor-boton">
          <button onClick={capturarTablaLlaves} className="boton-capturar">
            Capturar Llaves
          </button>
        </div>
      </div>

      {/* Tabla limpieza Tabla limpieza Tabla limpieza Tabla limpieza Tabla limpieza Tabla limpieza*/}
      <div>
        <table ref={tablaRefLimpieza} className="tabla-sanitarios">
          <thead>
            <tr>
              <th className="encabezado-sanitarios">
                Obligaciones del Encargado de Limpieza del Baño y Migitorio
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="encabezado-sanitarios">Limpieza Diaria:</td>
            </tr>
            <tr>
              <td className="nota2-sanitarios">
                El encargado debe limpiar los baños y el migitorio 2 veces al
                día. Esto incluye barrer, trapear el suelo, y limpiar las
                paredes y superficies de contacto como grifos, dispensadores de
                jabón, y manijas de puertas.
              </td>
            </tr>
            <tr>
              <td className="encabezado-sanitarios">
                Desinfección de Superficies:
              </td>
            </tr>
            <tr>
              <td className="nota2-sanitarios">
                Se deben desinfectar las áreas de mayor contacto, como los
                asientos de los inodoros, el migitorio, los lavamanos y las
                manijas de las puertas, usando productos de limpieza apropiados
                (cloro, desinfectantes).
              </td>
            </tr>
            <tr>
              <td className="encabezado-sanitarios">
                Revisión y Reposición de Insumos:
              </td>
            </tr>
            <tr>
              <td className="nota2-sanitarios">
                El encargado debe asegurarse de que siempre haya papel higiénico
                y jabón de manos. En caso de faltar insumos, deberá solicitar al
                encargado de los insumos la reposición inmediata.
              </td>
            </tr>
            <tr>
              <td className="encabezado-sanitarios">Control de Olores:</td>
            </tr>
            <tr>
              <td className="nota2-sanitarios">
                El encargado debe mantener un ambiente fresco y libre de malos
                olores, utilizando pastillas aromatizantes en el migitorio y
                productos desodorizantes en los baños.
              </td>
            </tr>
            <tr>
              <td className="encabezado-sanitarios">
                Mantenimiento de la Limpieza de Pisos y Paredes:
              </td>
            </tr>
            <tr>
              <td className="nota2-sanitarios">
                El suelo y las paredes deben estar libres de manchas, residuos y
                cualquier suciedad visible. En caso de acumulación de agua o
                salpicaduras, deben limpiarse de inmediato para evitar
                accidentes y mantener la estética del lugar.
              </td>
            </tr>
            <tr>
              <td className="encabezado-sanitarios">
                Inspección de Tuberías y Desagües:
              </td>
            </tr>
            <tr>
              <td className="nota2-sanitarios">
                Revisar regularmente el buen funcionamiento del sistema de
                plomería, asegurando que no haya fugas, obstrucciones o malos
                olores provenientes de los desagües.
              </td>
            </tr>
            <tr>
              <td className="encabezado-sanitarios">
                Manejo Adecuado de Productos de Limpieza:
              </td>
            </tr>
            <tr>
              <td className="nota2-sanitarios">
                Utilizar los productos de limpieza de manera segura y eficiente,
                siguiendo las indicaciones de uso. Además, deberá asegurarse de
                almacenar adecuadamente dichos productos para evitar accidentes
                o daños a los usuarios y regresarlos con el encargado de guardar
                los productos.
              </td>
            </tr>
            <tr>
              <td className="encabezado-sanitarios">Informe de Averías:</td>
            </tr>
            <tr>
              <td className="nota2-sanitarios">
                Si se detecta algún desperfecto o daño en las instalaciones del
                baño o el migitorio (grifos, inodoros, tuberías, luces, etc.),
                el encargado deberá reportarlo de inmediato para que sea
                reparado a la brevedad.
              </td>
            </tr>

            <tr>
              <td colSpan={7} className="copyright-sanitarios">
                © JoyBoy
              </td>
            </tr>
          </tbody>
        </table>
        <div className="contenedor-boton">
          <button onClick={capturarTablaLimpieza} className="boton-capturar">
            Capturar Limpieza
          </button>
        </div>
      </div>

      <div>
        <hr></hr>
        <p>
          Productos de limpieza bodega aurrera. Viernes 13 de septiembre de
          2024.
        </p>
        <img src={foto01} className="foto" />
        <hr></hr>
        <p>
          Herrero. Nueva manija de dentro de la puerta del inodoro. Sujetar los
          bordes lateras de ambas puertas, clavando barillas en el muro y
          soldando. Sabado 14 de septiembre de 2024.
        </p>
        <img src={foto02} className="foto" />
        <hr></hr>
        <p>Codo y tuvo pvc. Sabado 14 de septiembre de 2024.</p>
        <img src={foto03} className="foto" />
        <hr></hr>
        <p>Pinturas y brochas. Sabado 14 de septiembre de 2024.</p>
        <img src={foto04} className="foto" />
        <hr></hr>
        <p>Cadena y candado. Lunes 16 de septiembre de 2024.</p>
        <img src={foto05} className="foto" />
        <hr></hr>
        <p>Cooperacion hasta del día Lunes 16 de septiembre de 2024.</p>
        <img src={foto06} className="foto" />
        <hr></hr>
        <p>Corte de caja hasta del día Lunes 16 de septiembre de 2024.</p>
        <img src={foto07} className="foto" />
        <hr></hr>
        <p>Donaciones hasta del día Lunes 16 de septiembre de 2024.</p>
        <img src={foto08} className="foto" />
        <p>Recaudacion de la semana del 16 de septiembre de 2024.</p>
        <img src={foto09} className="foto" />
        <p>Compra de productos de limpieza, Domingo 22 de septiembre de 2024.</p>
        <img src={foto10} className="foto" />
        <p>Compra de productos de limpieza, Domingo 22 de septiembre de 2024.</p>
        <img src={foto11} className="foto" />
        <p>Corte de caja, Domingo 22 de septiembre de 2024.</p>
        <img src={foto12} className="foto" />
        <p>Donaciones hasta del día Domingo 22 de septiembre de 2024.</p>
        <img src={foto13} className="foto" />
        <p>Recaudacion de la semana del 23 de septiembre de 2024.</p>
        <img src={foto14} className="foto" />
        <p>Corte de caja, Viernes 27 de septiembre de 2024.</p>
        <img src={foto15} className="foto" />
        <p>Compra de productos de limpieza, Domingo 29 de septiembre de 2024.</p>
        <img src={foto16} className="foto" />
        <p>Compra de productos de limpieza, Domingo 29 de septiembre de 2024.</p>
        <img src={foto17} className="foto" />
        <p>Corte de caja, Lunes 30 de septiembre de 2024.</p>
        <img src={foto18} className="foto" />
        <p>Recaudacion de la semana del 30 de septiembre de 2024.</p>
        <img src={foto19} className="foto" />
        <p>Corte de caja, Domingo 06 de octubre de 2024.</p>
        <img src={foto20} className="foto" />
        <p>Recaudacion de la semana del 07 de octubre de 2024.</p>
        <img src={foto21} className="foto" />
        <p>Corte de caja, Sabado 12 de octubre de 2024.</p>
        <img src={foto22} className="foto" />
        <p>Compra de productos de limpieza, Domingo 13 de octubre de 2024.</p>
        <img src={foto23} className="foto" />
        <p>Compra de fabulo y pastillas aromatizantes, Domingo 13 de octubre de 2024.</p>
        <img src={foto24} className="foto" />
        <p>Compra de papel higienico, Domingo 13 de octubre de 2024.</p>
        <img src={foto25} className="foto" />
        <p>Corte de caja, Martes 15 de octubre de 2024.</p>
        <img src={foto26} className="foto" />
        <p>Recaudacion de la semana del 15 de octubre de 2024.</p>
        <img src={foto27} className="foto" />
        <p>Compra de productos de limpieza, Domingo 20 de octubre de 2024.</p>
        <img src={foto28} className="foto" />
        <p>Ticket Axion y Pinol, Domingo 20 de octubre de 2024.</p>
        <img src={foto29} className="foto" />
        <p>Corte de caja, Lunes 21 de octubre de 2024.</p>
        <img src={foto30} className="foto" />
        <p>Ticket Cloralex, salvo y pastillas, Domingo 27 de octubre de 2024.</p>
        <img src={foto31} className="foto" />
        <p>Compra de productos de limpieza, Domingo 27 de octubre de 2024.</p>
        <img src={foto32} className="foto" />
        <p>Recaudacion de la semana del 21 de octubre de 2024.</p>
        <img src={foto33} className="foto" />
        <p>Corte de caja, Lunes 28 de octubre de 2024.</p>
        <img src={foto34} className="foto" />
        <p>Ticket Pinol, salvo y pastillas, Viernes 01 de noviembre de 2024.</p>
        <img src={foto35} className="foto" />
        <p>Ticket Papel higienico, Viernes 01 de noviembre de 2024.</p>
        <img src={foto36} className="foto" />
        <p>Compra de productos de limpieza, Viernes 01 de noviembre de 2024.</p>
        <img src={foto37} className="foto" />
        <p>Recaudacion de la semana del 28 de octubre de 2024.</p>
        <img src={foto38} className="foto" />
        <p>Corte de caja, Lunes 04 de noviembre de 2024.</p>
        <img src={foto39} className="foto" />
        <p>Recaudacion de la semana del 04 de noviembre de 2024.</p>
        <img src={foto40} className="foto" />
        <p>Ticket Papel higienico, cloralex, pinol, salvo y pastillas. Sabado 09 de noviembre de 2024.</p>
        <img src={foto41} className="foto" />
        <p>Compra de productos de limpieza, Sabado 09 de noviembre de 2024.</p>
        <img src={foto42} className="foto" />
        <p>Corte de caja, Lunes 11 de noviembre de 2024.</p>
        <img src={foto43} className="foto" />
        <p>Recaudacion de la semana del 11 de noviembre de 2024.</p>
        <img src={foto44} className="foto" />
        <p>Corte de caja, Lunes 18 de noviembre de 2024.</p>
        <img src={foto45} className="foto" />
      </div>
    </div>
  );
}

export default Sanitarios;
