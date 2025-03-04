import PostDetail from '../../../components/postDetails/PostDetails';
import LogoCCN from '../../../assets/images/CCNCERT/CCN-CERT.png';
import TableOfContents from '../../../components/tableOfContents/tableOfContents';

const angelesPage = () => {
  return (
    <PostDetail
      title="Certificados Digitales"
      date="03 Mar 2025"
      readTime="20"
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

        <h2>El certificado digital</h2>
        <h3>¿Qué es un certificado digital?</h3>
        <p>Es un documento electrónico que contiene datos identificativos y es expedido por prestadores de confianza 
          acreditados que vinculan a una persona física con sus datos de verificación de firma y confirma su identidad.</p>
        <h3>¿Qué información contiene un certificado?</h3>
        <ul>
          <li>La identidad del titular. Datos de filiación del titular (empresa, colegio profesional…etc).</li>
          <li>La clave pública del titular.</li>
          <li>Datos propios del certificado: número de serie, fecha de caducidad…</li>
          <li>La identidad de la autoridad de certificación que lo ha emitido.</li>
          <li>La firma de la autoridad de certificación…</li>
        </ul>
        <h3>Tipos de certificados</h3>
        <ul>
          <li>Tipos de certificado según su soportes
            <ul>
              <li>Certificado en software o distribuido: Certificado que se emite en formato de archivo descargable cuyo soporte es el propio equipo físico.</li>
              <li>Certificado centralizado: Este certificado no se aloja en equipos informáticos individuales sino en la nube.</li>
            </ul>
          </li>
          <li>Tipos de certificado según su emisión
            <ul>
              <li>Certificados cualificados: Emitidos por un Prestados de Servicios de Confianza Cualificados, bajo las condiciones de eIDAS.</li>
              <li>Certificados no cualificados: Emitidos por un Prestador de Servicios de Confianza, pero sin el amparo de la cualificación y sin el respaldo jurídico.</li>
            </ul>
          </li>
          <li>Tipos de certificado según su titularidad
            <ul>
              <li>Certificados de persona física: Vincula a su titular con unos datos de verificación de firma que confirman su identidad.</li>
              <li>Certificados de representación: Vincula a un titular con unos datos de verificación actuando en representación de una entidad.</li>
              <li>Certificados de componente: Se trata de certificados que autentican la identidad de un servidor y la firma de un código.</li>
            </ul>
          </li>
          <li>Tipos de certificado según eIDAS
            <ul>
              <li>Certificado de firma: Orientado a la firma de personas físicas.</li>
              <li>Certificado de sello: Orientado al sello de personas jurídicas.</li>
              <li>Certificado de autenticación web: Orientado a vincular el sitio web con la persona física o jurídica titular del certificado.</li>
              <li>Certificado no cualificado: Puede estar orientado tanto a personas físicas, como jurídicas, componentes, SSL.</li>
            </ul>
          </li>
        </ul>
        <h3>Un servicio específico: el TimeStamps</h3>
        <p>El sellado de tiempo es un mecanismo on-line que permite demostrar que una serie de datos han existido y no han sido 
          alterados desde un instante específico en el tiempo.</p>
        <br></br>

        <h2>Validación de certificados y autenticación</h2>
        <h3>El sistema Cl@ve</h3>
        <p>El Sistema Cl@ve es una plataforma del Gobierno español de verificación de identidades electrónicas para la identificación 
          y autenticación de los ciudadanos en España.</p>
        <h3>Firma electrónica</h3>
        <p>Firma electrónica que se realiza mediante par de claves (privada/pública) consiguiendo mayores garantías y permitiendo 
          garantizar la integridad y, asociando ambas claves a un certificado digital, que mediante la verificación previa de la 
          identidad del firmante antes de emitirlo, permite también garantizar el no repudio.</p>
        <h3>Código de un solo uso (OTP por SMS)</h3>
        <p>Firma asociada al envío de un código OTP (One Time Password).</p>
        <br></br>
        <h3>Cómo confirmar la validez un certificado</h3>
        <p>A nivel técnico, existen dos medios principales para validar un certificado las CRLs y el OCSP.</p>
        <ul>
          <li>CRL (Certificate Revocation List)</li>
          <ul>
            <li>La CA debe ser capaz de publicar de forma segura información acerca del estado, chequeado su estado antes de ser usado.</li>
            <li>Para ello la CA creará CRL y publique estas CRL a un sistema de directorio.</li>
          </ul>
          <li>Protocolo de verificación online del estado de revocación de los certificados (OCSP)</li>
          <ul>
            <li>Al mismo tiempo, el OCSP es un protocolo de verificación online del estado de revocación de los certificados.</li>
            <li>Solicitudes firmasdas y más eficiente que las descargas CRL y ofreciendo como respuesta de: 
            "bueno" (good), "revocado" (revoked) o "desconocido" (unknowno).</li>
          </ul>
        </ul>
        <br></br>
        <h2>Otros usos de certificados</h2>
        <h3>Autenticación WEB</h3>
        <p>En la autenticación web, permiten verificar la seguridad de los sitios mediante certificados cualificados.</p>
        <h3>VPN y certificados de cliente</h3>
        <p>En las VPNs, cada cliente necesita un certificado de cliente generado desde un certificado raíz para conectarse de forma segura, evitando errores de autenticación.</p>
        <br></br>

      </div>
    </PostDetail>
  );
};

export default angelesPage;