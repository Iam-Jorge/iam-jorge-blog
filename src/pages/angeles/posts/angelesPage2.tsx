import PostDetail from '../../../components/postDetails/PostDetails';
import LogoCCN from '../../../assets/images/CCNCERT/CCN-CERT.png';
import TableOfContents from '../../../components/tableOfContents/tableOfContents';

const angelesPage = () => {
  return (
    <PostDetail
      title="Certificados Digitales"
      date="03 Mar 2025"
      readTime="5"
      category="CCN-CERT"
      imageUrl={LogoCCN}
      tags={['CCN-CERT', 'Ciberseguridad']}
    >
    <TableOfContents></TableOfContents>
      <div>
        <h2>Certificados Digitales</h2>
        <h3>Paradigmas de la seguridad</h3>
        <p>Seguridad de la Información: Medidas y controles que garantizan la confidencialidad, la integridad y la disponibilidad de los sistemas de información incluyendo hardware, software, 
          firmware e información que es procesada, guardada y comunicada. </p>
        <ul>
          <p>Principales pilares de la seguridad (Tríada CIA):</p>
          <li><b>Confidencialidad: </b> ¿Quién tiene acceso a los datos?</li>
          <li><b>Integridad: </b>¿Se han modificado los datos o sistema?</li>
          <li><b>Disponibilidad: </b>¿Los datos están accesibles?</li>
          <p>Otros principios relacionados con la seguridad:</p>
          <li><b>Autenticidad: </b>¿Es quién dice ser?</li>
          <li><b>Responsabilidad (Accountability): </b>¿Quién realizó la acción?</li>
          <li><b>No repudio: </b>Garantiza que una parte no pueda negar su participación o su autenticidad.</li>
        </ul>
        <br></br>

        <h3>Algunos conceptos</h3>
        <p><b>Autenticación: </b>Procedimiento de verificación de la identidad digital de un sujeto en sus interacciones en el ámbito digital.</p>
        <p>Se clasifica en los sigueintes factores:</p>
        <ul>
          <li>Conocimiento: Coloquialmente «algo que se sabe» (contraseñas o claves).</li>
          <li>Posesión: Coloquialmente «algo que se tiene» componentes lógicos (certificados) o dispositivos físicos (tokens).</li>
          <li>Cualidades inherentes: Coloquialmente «algo que se es» (la voz o rasgos faciales).</li>
        </ul>
        <br></br>

        <p><b>Blockchain</b></p>
        <p>Enorme base de datos que recoge y almacena la información de manera compartida y descentralizada. De esta forma se crea un registro que es único pero que a su vez generan copias sincronizadas, lo que hace imposible manipular los datos.</p>
        <br></br>
        <h3>CA (Autoridad de Certificación)</h3>
        <p>Una <b>Autoridad de Certificación</b> (AC, en inglés CA) es una entidad tercera de confianza del emisor y del receptor del mensaje.</p>
        <br></br>

        <h3>Criptografía</h3>
        <p><b>Criptografía: </b>Disciplina que busca asegurar la comunicación y proteger la información.</p>
        <ul>
          <li><b>Criptografía: </b>Desarrolla técnicas para cifrar información, asegurando triada. </li>
          <li><b>Criptoanálisis: </b>Busca vulnerabilidades en los sistemas de cifrado. </li>
        </ul>
        <p>La criptografía se clasifica en función de tres dimensiones:</p>
        <ol>
          <li>Tipo de operaciones: </li>
          <ul>
            <li>Sustitución: Asigna cada elemento del texto sin formato a otro elemento. </li>
            <li>Transposición: Reorganiza los elementos del texto plano. </li>
          </ul>
          <li>Número de claves: </li>
          <ul>
            <li>Simétrica: Remitente y receptor usan la misma clave. </li>
            <li>Asimétrica: Cada uno utiliza una clave diferente. </li>
          </ul>
          <li>Forma de procesamiento del texto plano: </li>
          <ul>
            <li>Cifrado de bloques: Troceando el archivo origen y lo procesa por bloques. </li>
            <li>Cifrado de flujo: Procesa elementos de entrada de manera continua. </li>
          </ul>
        </ol>
        <br></br>

        <h3>DPC (Declaración de prácticas de certificación)</h3>
        <p><b>DPC:</b> Establece la información específica que aplica a la expedición de cada certificado y cada uno de sus atributos.</p>
        <br></br>
        <h3>Hash</h3>
        <p><b>Hash: </b>Es un función con las siguientes propiedades:</p>
        <ul>
          <li><b>Tamaño de Entrada: </b>Puede aplicarse a bloques de datos de cualquier tamaño.</li>
          <li><b>Salida Fija: </b>Genera una salida de longitud constante.</li>
          <li><b>Facilidad de Cálculo: </b>Calcular H(x) es relativamente sencillo para cualquier x.</li>
          <li><b>Unidireccionalidad: </b>Es difícil encontrar una entrada x dada su salida h.</li>
          <li><b>Resistencia a Colisiones: </b>Es computacionalmente inviable produzca la misma salida.</li>
        </ul>
        <br></br>

        <h3>PSC (prestador de servicios de confianza)</h3>
        <p><b>PSC:</b> Es una persona física o jurídica que presta uno o más servicios electrónicos de confianza, bien como 
        prestador cualificado o como prestador no cualificado de servicios electrónicos de confianza.</p>
        <br></br>

        <h3>VALIDe</h3>
        <p>Aplicación de VALIdación de firma y certificados Online y Demostrador de servicios de @firma.</p>
        <br></br>

        <h2>¿En qué legislación nos basamos en España?</h2>
        <h3>Ley 6/2020</h3>
        <p>La aplicación de esta ley regula la firma electrónica en nuestro ordenamiento jurídico.</p>

        <h3>Reglamento (UE) nº 910/2014: eIDAS</h3>
        <p>Reglamento relativo a la identificación electrónica y los servicios de confianza para las transacciones electrónicas 
          en el mercado, establece el marco jurídico para la identificación electrónica y servicios de confianza en la UE.</p>

        <h3>Ley 39/2015 (LPACAP)</h3>
        <p>Incorpora la regulación eIDAS al marco legal español. Establece el uso obligatorio de medios electrónicos en los 
          procedimientos administrativos y la identificación electrónica en las relaciones entre ciudadanos y la Administración.</p>

        <h3>Ley 40/2015 (LRJSP)</h3>
        <p>Refuerza la digitalización de la Administración Pública. Regula el uso de la identificación y firma electrónica en el ámbito 
          público, asegurando su validez jurídica.</p>

        <h3>Real Decreto 1553/2005</h3>
        <p>Regula la expedición del DNI electrónico y sus certificados de firma digital. Permite a los ciudadanos identificarse y firmar 
          digitalmente documentos con la misma validez que una firma manuscrita.</p>

        <h3>Ley 34/2002 (LSSI-CE)</h3>
        <p>Regula la prestación de servicios electrónicos en España. </p>

        <h3>Real Decreto-Ley 19/2018</h3>
        <p>Refuerza la seguridad en pagos electrónicos, exige autenticación reforzada del cliente y protege contra fraudes.</p>

        <h3>Ley Orgánica 3/2018 (LOPDGDD)</h3>
        <p>Establece normas sobre el tratamiento de datos personales, consentimiento informado y derechos de los usuarios.</p>

        <h3>Real Decreto Legislativo 1/2007, de Defensa de los Consumidores y Usuarios</h3>
        <p>Protege a los consumidores en transacciones electrónicas. Regula devoluciones, garantías y prohíbe cláusulas 
          abusivas en contratos online.</p>
        <br></br>

        <h2>Prestadores de servicios de confianza</h2>
        <h3>¿Qué es un prestador de servicios de confianza?</h3>
        <p></p>


      </div>
    </PostDetail>
  );
};

export default angelesPage;