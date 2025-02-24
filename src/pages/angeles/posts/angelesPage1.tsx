import PostDetail from '../../../components/postDetails/PostDetails';
import LogoCCN from '../../../assets/images/CCNCERT/CCN-CERT.png';
import GoogleSearch from '../../../assets/images/CCNCERT/CCN-Cert1/Google.jpeg';
import WhoIs from '../../../assets/images/CCNCERT/CCN-Cert1/WhoIs.jpeg';
import IpLeaks from '../../../assets/images/CCNCERT/CCN-Cert1/IpLeaks.jpeg';
import Shodan from '../../../assets/images/CCNCERT/CCN-Cert1/Shodan.jpeg';

const angelesPage = () => {
  return (
    <PostDetail
      title="Exposición y vulnerabilidades en webs"
      date="24 Feb 2025"
      readTime="5"
      category="CCN-CERT"
      imageUrl={LogoCCN}
      tags={['CCN-CERT', 'Ciberseguridad']}
    >
      <div>
        <h2>Exposición y vulnerabilidades en webs</h2>
        <p>1. Buscamos en google es sitio web que nos interesa, por ejemplo, el país</p>
        <img src={GoogleSearch} alt="GoogleSearch" />
        <p>2. Obtenemos el dominio y accedemos a <a href="https://whois.domaintools.com/">WhoIs Lookup</a> </p>
        <img src={WhoIs} alt="WhoIs Lookup" />
        <p>3. Seguimos investigando la IP, para ello accedemos a <a href="https://ipleak.net/">IpLeaks</a> </p>
        <img src={IpLeaks} alt="IpLeaks" />
        <p>4. Con la IP ya descubierna nos dirigimos a <a href="https://www.shodan.io/">Shodan</a> en busca de posibles puertos abiertos</p>
        <img src={Shodan} alt="Shodan" />
        <p>5. Ampliamos la recopilación de datos del dominio a través de <a href="https://www.shodan.io/">Shodan</a></p>
        
        
      </div>
    </PostDetail>
  );
};

export default angelesPage;