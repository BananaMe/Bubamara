import { Container, Tab, Tabs } from "solid-bootstrap";
import { Component } from "solid-js";
import GalleryOrchid from "./GalleryOrchid";
import LecturePage from "./LecturePage";

const LectureOrchid: Component = () => {
  return (
    <Container>
      <h1>Орхидеа</h1>
      <Tabs
        defaultActiveKey="lectureBasic"
        id="uncontrolled-tab-example"
        class="mb-3"
      >
        <Tab eventKey="lectureBasic" title="Основни информации">
          <LecturePage title='Основни информации'>
            <ul>
              <li>Латинско Име: Phalaenopsis Orchidacae</li>
              <li>Лаичко Име: Moth Orchid</li>
              <li>Тип на растение: Повеќегодишно, тревно</li>
              <li>Потекло: Тропски шуми, претежно Централна и северозападен предел од Јужна Америка</li>
              <li>Големина: Може да достигне до 50cm</li>
              <li>Тип на почва: Кора од дрво</li>
              <li>рН на почва: 5,5 - 6,0</li>
              <li>Светлина: Недиректна сончева светлина</li>
              <li>Време на цут: Зависно, типично трае 6-10 недели</li>
            </ul>
          </LecturePage>
        </Tab>
        <Tab eventKey="lectureSoil" title="Почва и садење">
          <LecturePage title="Почва и садење">
            <p>
              Орхидеите во природата растат приврзани за кора на дрвата. Поради
              тоа најсоодветно е да се посади орхидеата во кора од дрво, но може и
              да се прави микс со кора од дрво, кокосoви влакна, перлит и
              вермикулит за висока циркулација на воздухот на корењата. Друг исто
              така познат начин за садење орхидеи е во LECA глинени топчиња.
            </p>
            <p>
              Друг исто така познат начин за садење орхидеи е во LECA
              (lightweight, expanded clay aggregate) глинени топчиња. Лека
              топчињата впиваат вода многу и пополека ја испуштаат давајќи им на
              орхидеите доволно време за да бидат хидратирани без да се угушени од
              недостаток на кислород. Пред да се посади орхидеата во лека топчиња
              строго се препорачува лека топчињата да се исплакнат убаво со вода и
              да се остават да се киснат во вода 24 до 48 часа. Кога се сади со
              лека топчиња треба да се чува нивото на водата во саксијата 2-5 cm
              од дното на саксијата и корените никако да ја допираат водата, тие
              треба самите да си пораснат во водата.
            </p>
            <p>
              Најпрепорачлив вид на саксија за садење орхидеи е проѕирна пластична
              саксија со доволно дупки на дното и од страна за да се осигура добра
              циркулација на воздух и светлина за фотосинтеза и да се избегне
              гниење на коренот. Ставете орхидеи во проѕирна пластична саксија во
              поголеми убави керамички или глинени саксии за да ги балансирате
              тешките орхидеи кои можат лесно да се соборат и за полесно полевање.
            </p>
          </LecturePage>
        </Tab>
        <Tab eventKey="lectureWater" title="Наводнување и прихрана">
          <LecturePage title="Наводнување и прихрана">
            <p>
              Орхидеите не сакаат да седат во влага и заради тоа тие се полеваат
              со вода еднаш неделно, откако корењата и почвата ќе се исуши. Лесен
              начин да се забележи кога е време за полевање е саксијата е
              забележливо полесна, кората е сува и корените на орхидеата се
              сребренасто зелени.
            </p>
            <p>
              Количински се полеваат да може барем водата слободно да тече низ
              саксијата, осигурувајќи дека целиот медиум и корењата се соодветно
              наводенати. Попознат и препорачлив начин е орхидеата со пластичната
              саксија да седи во вода 15 минути до 2 часа и потоа да се остави да
              се исцеди убаво. Вака орхидеата и медиумот ќе примат колку што им
              треба. Иако често давано како совет на етиката за брз и лесен начин
              на полевање при купување на орхидеа, никако не треба да се полева
              орхидеа со 2-3 коцки лед. Не само што нема да добие вода колку што
              му треба ниту еднакво да е распределена водата, ледот може да ги
              шокира корењата и да почнат да гнијат.
            </p>
            <p>
              Орхидеите треба да се прихрануваат редовно особено во перидот на
              растење. Најидеално е со 1/4 разредена прихрана еднаш неделно, но и
              еднаш месечно е исто така во ред. Се препорачува да се користи
              „балансирана прихрана“ т.е. 20-20-20 (еднаков процент на нитроген,
              фосфор и калиум) се додека има низок или воопшто нема уреа во
              составот. Важно да се напомене: Прихрана се дава само на веќе
              полеани орхидеи бидејќи ако се стави прихрана на суви корења може да
              ги изгори иако е веќе доволно разредена.
            </p>
          </LecturePage>
        </Tab>
        <Tab eventKey="lectureLightFlower" title="Светлина и цветање">
          <LecturePage title="Светлина и цветање">
            <p>
              Орхидеите бараат недиректна светлина, поточно, што посветло а да не
              горат листовите. Специфични бројки за светлниа се од 21527 до 43055
              лумени на метар квадратен. Можат да опстојат и во потемна светлина но
              нема да имаат доволно светлина за да произведуваат цветови но пак да
              се здрави и бујни. Доколку сакате орхидеата да произведува цвет тогаш
              треба да гледате листовите да бидат жолто-зелени со силни исправени
              корења, темно зелени листови значи дека иако има доволно светлина за
              да преживее и расте убаво, нема да произведува цвет.
            </p>
            <p>
              Доколку орхидеата е задоволна од околината (соодветен медиум за почва,
              доволно прихрана, вода, светлина, температура и циркулација на
              воздухот) ќе произведува цветови кои типично траат 6-10 недели но може
              да цвета цела година. Околу периодот на цветање најдобра опција ќе
              биде во период кога сакате да цвети, да се купи веќе расцветана
              орхидеа. Постојат повеќе бои за цветот на орхидеата, како виолетово, розево, бело,
              жолто, портокалово, црвено, така што центарот на цветот е најчесто розев или црвен.
            </p>
          </LecturePage>
        </Tab>
        <Tab eventKey="lecturePropagation" title="Пропагација">
          <LecturePage title="Пропагација">
            <p>
              Пропагација преку семе е многу тешко изводливо нешто бидејќи
              семињата немаат хранливи ткива за складирање за да може да опстои
              само. Потребно е да падне таму каде што има одреден вид на габи кои
              ќе можат да навлезат во неговиот корен и да ги претворат хранливите
              материи во употреблива форма. За да се надминат шансите, капсулата
              со семе содржи милиони микроскопски семиња кои можат да се однесат
              стотици километри од мајчиното растение.
            </p>
            <p>
              Два познати начини за пропагација на орхидеа е преку поделба или
              преку изданоци, познати како „кеики“. Поделба се прави кога
              орхидеата ќе порасне уште едно пупче, се остава да порасне за да
              може да воспостави повеќе корења и после нежно се издвојуваат преку
              корењата кои се поделуваат соодветно да има за двете орхидеи.
              Пропагација преку кеики се случува така што расте ново растение на
              стеблото (со цветови) на главната орхидеа. Се остава да пушти корења
              од 5 cm должина пред да се исече стеблото и потоа се сади како
              обична орхидеа. Може да помине 1 до 3 години пред да кеиката пушти
              цветови.
            </p>
          </LecturePage>
        </Tab>
        <Tab eventKey="gallery" title="Галерија">
          <GalleryOrchid />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default LectureOrchid;