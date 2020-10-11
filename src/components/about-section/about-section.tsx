import React from 'react'
import {
  AboutSectionWrapper,
  AboutImageSection,
  AboutArtice,
  ImageWrapper,
  AboutHeader,
  AboutContent,
  AboutContentWrapper,
  LinkAnchor
} from './about-section.style'
import { HeadingH3, HeadingH4 } from 'components/headings/headings'
import { AboutDynamicImage } from './dynamic-image'

export const AboutSection = () => (
  <AboutSectionWrapper>
    <LinkAnchor id="o-firmie" />
    <AboutImageSection>
      <ImageWrapper>
        <AboutDynamicImage fileName={`about.png`} alt="about" />
      </ImageWrapper>
    </AboutImageSection>
    <AboutArtice>
      <AboutHeader>
        <HeadingH3>O firmie</HeadingH3>
        <HeadingH4>Sub heading</HeadingH4>
      </AboutHeader>
      <AboutContentWrapper>
        <AboutContent>
          W pracy spędzamy większość naszego czasu ,dlatego przestrzeń w której pracujemy wymaga
          rozwiązań pozwalających zadbać o zdrowie , komfort i bezpieczeństwo również w miejscach
          pracy. Przestrzeń biurowa nie musi być nudna . Na właściwą organizację przestrzeni
          biurowej wiele czynników, m.in.: rozmieszczenie mebli i prawidłowa aranżacja pomieszczeń ,
          ustawienie sprzętu komputerowego, stopień natężenia hałasu, temperatura otoczenia czy
          rodzaj oświetlenia w biurze. Nasza firma zaprojektuje każdą przestrzeń począwszy od :
          określenia potrzeb , pomiarów . Pomożemy w doborze rodzaju mebli , kolorystyki itp.
          Następnie wykonamy dla Ciebie meble i zmontujemy . Współpracujemy z wieloma dostawcami z
          zakresu foteli obrotowych , konferencyjnych , kanap i siedzisk do holi , recepcji ,
          ekranów między biurkowych , ścianek wygłuszających , boksów , stelaży do biurek , mebli
          metalowych i wielu innych . Jesteśmy doświadczoną firmą działającą od 2004 roku . Zaufali
          nam klienci indywidualni dla których tworzyliśmy i wykonywaliśmy wiele przestrzeni
          domowych tj kuchnie ,salony , sypialnie , itp. Aby nasi klienci zaciszu domowym czuli się
          komfortowo i mogli powiedzieć tak to jest nasz dom. Zaufało nam wiele przedsiębiorstw ,
          firm , instytucji użyteczności publicznej .Uśmiech i podziękowania z ich strony jest dla
          nas największą wartością dlatego w 98 % kontynuujemy z naszymi drogimi Klientami dalszą
          owocną współpracę.
        </AboutContent>
        <AboutContent>Pamiętaj</AboutContent>

        <AboutContent>
          Pracownik niezadowolony z warunków pracy, to pracownik mniej wydajny. Stworzenie
          przyjaznego otoczenia pracy powinno być celem każdego przedsiębiorstwa.
        </AboutContent>
        <AboutContent>
          Jeśli jesteś zainteresowany zadzwoń Jeśli nic nie znalazłeś dla siebie skontaktuj się z
          nami a wypracujemy wspólnie dla ciebie nową koncepcję
        </AboutContent>
      </AboutContentWrapper>
    </AboutArtice>
  </AboutSectionWrapper>
)
