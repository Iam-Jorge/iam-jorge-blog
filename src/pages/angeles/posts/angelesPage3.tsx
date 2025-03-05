import PostDetail from '../../../components/postDetails/PostDetails';
import LogoCCN from '../../../assets/images/CCNCERT/CCN-CERT.png';
import ENS from '../../../assets/images/CCNCERT/CCN-Cert1/ENS.png';
import TableOfContents from '../../../components/tableOfContents/tableOfContents';

const angelesPage = () => {
  return (
    <PostDetail
      title="Esquema nacional de seguridad (ENS)"
      date="5 Mar 2025"
      readTime="15"
      category="CCN-CERT"
      imageUrl={LogoCCN}
      tags={['CCN-CERT', 'Ciberseguridad']}
    >
    <TableOfContents></TableOfContents>
      <div>
        <h2>La Administración Electrónica y la Seguridad de la Información</h2>
        <p>La Constitución española de 1978 proclama, en su artículo 103.1, que: "La Administración Pública sirve con objetividad 
          los intereses generales y actúa de acuerdo con los principios de eficacia, jerarquía, descentralización, desconcentración 
          y coordinación, sometimiento pleno a la Ley y al Derecho.</p>
        <h3>El origen. Marco jurídico y normativo</h3>
        <p>La Ley 11/2007 de Acceso Electrónico de los Ciudadanos a los Servicios Públicos fue el inicio de la Administración 
          electrónica en España, buscando mejorar la eficacia y eficiencia en los servicios públicos. Esta ley fue derogada, 
          pero dio paso a la Ley 40/2015 y la Ley 39/2015, que consolidaron y desarrollaron la administración digital y los p
          rocedimientos administrativos.</p>
        <h3>Introducción al Esquema Nacional de Seguridad</h3>
        <p>El ENS se regula por el Real Decreto 311/2022, de 3 de mayo.</p>
        <p>Tiene por objetivo establecer <b>políticas de seguridad en la utilización de medios electrónicos</b> y esta constituido
          por los principios básicos y requisitos mínimos para garantizar la seguridad de la información tratada.</p>
        <ul>
          <li><b>Política de seguridad: Conjunto de directrices que rigen la forma en que una organización gestiona y protege
          la información</b></li>
          <li><b>Sistema de Información (SI):</b> Conjunto organizado de recursos para que la información pueda ser manejada y sportar
          los servicios prestados con ciudadanos, profesionales, empresas.</li>
          <li><b>Sistema de Gestión de la Seguridad de la Información (SGSI):</b> Aplicado sobre un SI garantiza la seguridad en 
          la prestación de servicios y en la custodia de la información que estos requieren tratar.</li>
        </ul>
        <p>El ENS está construido por <b>principios básicos y requisitos mínimos:</b></p>
        <ul>
          <li><b>Principios básicos:</b> Fundamentos que deben regir toda acción orientada a la protección la información y los servicios.</li>
          <ul>
            <li>Seguridad como proceso integral</li>
            <ul>
              <li>La seguridad en el ENS es un proceso integral que abarca factores humanos, técnicos, materiales, jurídicos y 
                organizativos. La concienciación y formación continua son clave para evitar riesgos por descoordinación o falta 
                de conocimiento.</li>
            </ul>
            <li>Gestión de la seguridad basada en los riesgos</li>
            <li>Prevención, deteccioón, respuesta y conservación</li>
            <li>Existencia d elíneas de defensa</li>
            <li>Vigilancia continua</li>
            <li>Reevaluación periódica</li>
            <li>Diferenciación de responsabilidades</li>
          </ul>
          <li><b>Requisitos mínimos:</b> Exigencias mínimas necesarias para asegurar la información tratada y los servicios prestados.</li>
          <ul>
            <li>Acceso</li>
            <li>Integridad</li>
            <li>Disponibilidad</li>
            <li>Autenticidad</li>
            <li>Confidencialidad</li>
            <li>Trazabilidad</li>
            <li>Conservación</li>
          </ul>
        </ul>
        <img src={ENS} alt="ENS" />
        <h3>Normas jurídicas presentes en el ENS</h3>
        <ul>
          <li>Reglamento (UE) 910/2014, (eIDAS). Ley 6/2020 reguladora de determinados aspectos de los servicios electrónicos de confianza.</li>
          <li>Directiva (UE) 2016/1148, conocida como "Directiva NIS".</li>
          <li>Real Decreto-ley 12/2018, de 7 de septiembre, de seguridad de las redes y sistemas de información (transposición de la Directiva NIS). </li>
          <li>Real Decreto 43/2021, de 26 de enero, desarrollo de la transposición de la Directiva NIS.</li>
          <li>Reglamento (UE) 2016/679, del Parlamento Europeo y del Consejo, de 27 de abril de 2016 (RGPD).</li>
          <li>Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPD-GDD). Estrategia Nacional de Ciberseguridad, publicada en 2019.</li>
        </ul>






        
      </div>
    </PostDetail>
  );
};

export default angelesPage;