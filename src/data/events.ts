export type IEvent = {
  name: string
  date: Date
  who: string
  notes: string
  location: string
  url?: string
  logo?: string
  description?: string
  coordinates: {
    lat: number
    lng: number
  }
}
export const events: IEvent[] = [
  {
    name: 'BootCaps',
    date: new Date('2024-06'),
    who: 'Capslägercommittén',
    logo: '/logos/BootCaps.jpg',
    notes: '',
    location: 'Rävlanda',
    url: 'https://www.facebook.com/events/403791965464164',
    coordinates: { lat: 57.6544, lng: 12.5383 },
  },
  {
    name: 'Badekarpadlingen',
    date: new Date('2024-09'),
    who: 'Badekarpadlingen (vadkom)',
    logo: '/logos/Badekarpadlingen.jpg',
    url: 'http://www.badekarpadlingen.no/',
    notes: 'Norige',
    description:
      'Før selve dagen vil det konkurreres i to grener; BadKart og Show. BadKart går utpå å dytte en av dine lagkamerater i et rullende badekar gjennom en løype med diverse hindere. Her kan man vinne et badekar som vil gjøre starten av byggingen enklere, samtidig sanke poeng.',
    location: 'Trondheim',
    coordinates: { lat: 63.4305, lng: 10.3951 },
  },
  {
    name: 'Rabalder',
    date: new Date('2024-10'),
    who: 'sexet i borås (6-1)',
    notes: '',
    description:
      'Sexmästeriet i Borås presenterar stolt Rabalder 2024! I år firar Rabalder även 30 år och självklart ska detta firas, det vill ni inte missa!! En helg med sjuka fester, lekar, attacksupa, sittning och en gyllene rabarber och mycket mer!',
    logo: '/logos/Rabalder.jpg',
    url: 'https://www.facebook.com/events/415545171280658/?ref=newsfeed',
    location: 'Borås',
    coordinates: { lat: 57.721, lng: 12.9401 },
  },
  {
    name: 'Bonnaphesten',
    date: new Date('2024-10'),
    who: 'Skövde sexmästeri (Skö Sex)',
    notes: '',
    logo: '/logos/Bonnaphesten.jpg',
    url: 'https://www.facebook.com/events/990774669070451',
    description: 'Are you ready for the biggest utlandsphest at Schlätta? 🎉 Of course, you are! 😃',
    location: 'Skövde',
    coordinates: { lat: 58.3898, lng: 13.853 },
  },
  {
    name: 'Sjöslaget',
    date: new Date('2024-10'),
    who: 'Sjöslags gruppen (Klubbmästarrådet (KMR))',
    notes: '',
    description:
      'Sjöslaget är en av Sveriges största årligen återkommande fester för högskole- och universitetsstudenter. Någon gång när temperaturen börjar sjunka och regnet öser ned i mitten på oktober är det dags att bege sig till Värtahamnen i Stockholm och borda Baltic Queen där 36 timmar späckade med artister, DJ:s och andra aktiviteter drar igång.',
    url: 'https://www.facebook.com/sjoslaget/events',
    logo: '/logos/Sjöslaget.png',
    location: 'Stockholm -Tallin',
    coordinates: { lat: 59.3293, lng: 18.0686 }, // Stockholm coordinates
  },
  {
    name: 'Fejden',
    date: new Date('2024-11'),
    who: 'D6',
    logo: '/logos/Fejden.jpg',
    notes: '',
    url: 'https://www.ludd.ltu.se/~d6/',
    description: 'På ställen, där man sover blott en gång, blir pannan klottrad och drömmen full av dông. Sup upp, Sup upp! Den nya fejden gryr.',
    location: 'Luleå',
    coordinates: { lat: 65.5848, lng: 22.1547 },
  },
  {
    name: 'Fiaslaget',
    date: new Date('2024-11'),
    who: 'sexiztens/ sapparna',
    notes: '',
    location: 'Karlskrona',
    url: 'https://www.facebook.com/events/1675922702945316',
    description:
      'En studentphest i Karlskrona som anordnas av Sexistenz i samarbete med deras Sappar.\nEventet inträffar en helg under höstterminen.\nKårkvällar och en utomordentlig sittning brukar adderas på övriga deltävlingar.',
    logo: '/logos/Fiaslaget.jpg',
    coordinates: { lat: 56.1820711, lng: 15.5918314 },
  },
  {
    name: 'Eskilstuna winter games',
    date: new Date('2025-02'),
    who: 'Sexmästeriet mdu Eskilstuna',
    notes: '',
    logo: '/logos/Eskilstuna winter games.png',
    url: 'https://www.facebook.com/events/234449576386517',
    description:
      'Vintern är här och vi i Eskilstuna bjuder in till 2024 års upplaga av Eskilstuna Winter Games!❄️😍 Detta år kör vi tema DISNEY så dra på dig en utklädnad och var redo för årets tävling!',
    location: 'Eskilstuna',
    coordinates: { lat: 59.3704, lng: 16.5077 },
  },
  {
    name: 'S.No.P.P.',
    date: new Date('2025-02'),
    who: 'D6',
    notes: 'Sveriges Nordliggaste Pulka Partaj',
    logo: '/logos/S.No.P.P.jpg',
    description: 'Vårens roligaste event är tillbaka, på agendan är de pulkaåkning på hemmabyggda pulkor som gäller. Samt en sittning på kvällen för de som vill ha lite extra kul. Eftersom detta är en tävling så kommer det laget som bygger "bäst" pulka vinna. Vilket ni kanske vill lägga lite extra krut på då detta är D6 bidrag till kårkampen!',
    url: 'https://www.facebook.com/events/1212273829707446/',
    location: 'Luleå',
    coordinates: { lat: 65.5848, lng: 22.1547 },
  },
  {
    name: 'Sjärtslaget',
    date: new Date('2025-02-07'),
    url: 'https://www.facebook.com/events/2073193173099291',
    who: 'Festvärket',
    notes: '',
    logo: '/logos/Sjärtslaget.jpg',
    location: 'Trollhättan',
    coordinates: { lat: 58.2837, lng: 12.2886 },
  },
  {
    name: 'Hjärtslaget',
    date: new Date('2025-02-14'),
    url: 'https://www.facebook.com/events/913200617541818',
    who: 'Thorax',
    description: 'Thorax presenterar Hjärtslaget 2025!❤️👊. Följ oss gärna på Instagram @thoraxhalmstadstudentkarVid frågor, kontakta oss på Instagram DM 🧡. May the punsch be with you!Thorax 🧡',
    logo: '/logos/Hjärtslaget.jpg',
    notes: '',
    location: 'Halmstad',
    coordinates: { lat: 56.6745, lng: 12.857 },
  },
  {
    name: 'Vårkryssen- Silliz/ sjölliz',
    date: new Date('2025-03'),
    who: 'Sjöslags gruppen (Klubbmästarrådet (KMR))',
    notes: '',
    logo: '/logos/Vårkryssen.png',
    description: 'Det är sen gammalt att man kör en Silliz innan man går på ett fartyg! 🚢',
    location: 'Stockholm/ Finland',
    coordinates: { lat: 59.3293, lng: 18.0686 }, // Stockholm coordinates
  },
  {
    name: 'Otympliga Spelen',
    date: new Date('2025-03'),
    who: 'Piraja party previders',
    notes: '',
    description:
      'OS, eller de Otympliga Spelen som det egentligen heter, är en tävling i dagarna tre som annordnas av Piraya. Vem som får äran och lyckan att ta hem det stora priset avgörs på lördagen med traditionella OS-grenar. ',
    url: 'https://www.accum.se/~piraya/',
    location: 'Umeå',
    logo: '/logos/Otympliga Spelen.png',
    coordinates: { lat: 65.5848, lng: 22.1547 }, // Luleå coordinates
  },
  {
    name: 'Syndafloden',
    date: new Date('2025-03'),
    who: 'Qult',
    notes: '',
    logo: '/logos/Syndafloden.jpg',
    location: 'Jönköping',
    coordinates: { lat: 57.7826, lng: 14.1618 },
  },
  {
    name: 'Ålrundan',
    date: new Date('2025-04'),
    who: 'ålrundan',
    notes: 'Finland',
    logo: '/logos/Ålrundan.jpg',
    url: 'https://www.facebook.com/events/266503099215389/?ref=newsfeed',
    location: 'Åland',
    coordinates: { lat: 60.1785, lng: 19.9156 },
  },
  {
    name: 'Forsränningen',
    date: new Date('2025-04'),
    who: 'Tupplarna UTN',
    notes: '',
    location: 'Uppsala',
    coordinates: { lat: 59.8586, lng: 17.6389 },
  },
  {
    name: 'DöMD',
    date: new Date('2025-04'),
    who: 'D-group / LTH',
    notes: '',
    location: 'Linköping',
    url: 'https://domd.nu/',
    logo: '/logos/D-group.png',
    coordinates: { lat: 58.4108, lng: 15.6214 },
  },
  {
    name: 'Capseisa',
    date: new Date('2025-04'),
    who: 'DVKV',
    notes: 'inte utlandsphest',
    location: 'Kronåsens',
    logo: '/logos/Capseisa.jpg',
    description:
      'Den 28e april anordnar DVKV det anrika och festliga evenemanget Capseisa. Evenemanget är Sveriges mästerskap i par-caps, och har anordnats sedan 1999, vilket innebär att vi i år firar 25-årsjubileum. Missa inte chansen att framstå som segrare denna historiska dag, utan ryck en kompis i ärmen och boka in Capseisa på skvalborg i er kalender. ',
    url: 'https://www.facebook.com/events/1161995388496929',
    coordinates: { lat: 59.8439427, lng: 17.6214824 }, // Assuming Kronåsens is a place near Stockholm
  },
  {
    name: 'Flummen',
    date: new Date('2025-05'),
    who: 'Brutal academin',
    notes: '',
    url: 'https://www.brutal-akademien.org/',
    logo: '/logos/Flummen.png',
    description:
      ' Sexmästeriet i Karlskrona och BA™ svettas som feta oäkta finnar i en sauna nu när planeringen inför Flumride™ har tagit sin början. Flummen hålls i Sveriges blötaste studentstad, Karlskrona! Vi drar igång stenhårt den 3:e maj och kör in i kaklet den 5:e maj. Som vanligt så skiter vi i politiken.',
    location: 'Karlskrona',
    coordinates: { lat: 56.1820711, lng: 15.5918314 }, // Assuming 'Kna' is Kalmar
  },
  {
    name: 'Quarnevalen',
    date: new Date('2025-05'),
    who: 'SQUVALP',
    notes: '',
    location: 'Stockholm',
    logo: '/logos/Quarnevalen.jpg',
    url: 'https://www.quarnevalen.se/',
    description:
      ' Bygg mycket, festa mycket, drick mycket, jippa mycket, men främst - ha Qul! Efter 6 års dvala ska hundratals studenter äntligen tillbaka till Byggplatsen och Öltältet på KTH Campus för att bygga sina fantastiska ekipage och visa upp dessa för hela Stockholm i ett Quarnevalståg!',
    coordinates: { lat: 59.3293, lng: 18.0686 },
  },
  {
    name: 'Absolut Gotland ',
    date: new Date('2025-05-15'),
    who: 'Absolut Gotland',
    notes: '',
    logo: '/logos/AG.png',
    description:
      'Absolut Gotland är en legendarisk fest för högskole- och universitetsstudenter som funnits i över 20 år. Strax innan säsongens ordinarie öppnande bokar vi upp en hel stugby och camping i bästa möjliga läge på Gotlands kust och ställer till med fest i dagarna fyra! Njut av vårsolen från terrassen med något drickbart i handen, dansa natten lång på nattklubben, tävla mot andra studenter i traditionella Gotländska lekar, utforska Visby... AG erbjuder något för alla.',
    url: 'https://absolutgotland.se/',
    location: 'Gotland',
    coordinates: { lat: 57.5345, lng: 18.2926 },
  },
  {
    name: 'Spacestation',
    date: new Date('2025-05'),
    who: 'P6 Götteborg',
    url: 'https://spacestation.se/',
    description:
      'Spacestation kommer bli en galaktisk resa ut i vintergatan. Med 25 år i nacken har Spacestation blivit en älskad festresa i det fina Göteborg.',
    logo: 'https://spacestation.se/wp-content/uploads/2019/06/kisspng-spacecraft-clip-art-hiring-5b25bdce11dbb0.7528441615292000780732.png',
    notes: '',
    location: 'Göteborg',
    coordinates: { lat: 57.7089, lng: 11.9746 }, // Göteborg coordinates
  },
  {
    name: 'Du vet vad',
    date: new Date('2025-07'),
    who: 'qult',
    logo: '/logos/Du vet vad.jpg',
    notes: '',
    url: 'https://qult.nu/index.php?title=Huvudsida',
    location: 'Jönköping',
    coordinates: { lat: 57.7826, lng: 14.1618 },
  },
]
