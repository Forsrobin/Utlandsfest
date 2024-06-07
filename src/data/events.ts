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
    name: 'Badekarpadlingen',
    date: new Date('2024-09'),
    who: 'Badekarpadlingen (vadkom)',
    // logo: 'https://scontent.fbma6-1.fna.fbcdn.net/v/t39.30808-6/300868965_569676988184365_7564684406756073049_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1btx3NeMwMoQ7kNvgHT08PQ&_nc_ht=scontent.fbma6-1.fna&oh=00_AYCPuDCvg_PW5m9Zmrn7inF4iQ767LIX4Yp_cNfRKDdlqA&oe=665C2ACE',
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
    // logo: 'https://scontent.fbma6-1.fna.fbcdn.net/v/t39.30808-6/441073469_890291679776730_9072883408748747585_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dC5kUjvCvj4Q7kNvgFS3QPo&_nc_ht=scontent.fbma6-1.fna&oh=00_AYDlEhl2r14UQbHpWkVZ_lVKVf76uPmD1eLG18vKs3JyRA&oe=665C0E63',
    url: 'https://www.facebook.com/events/415545171280658/?ref=newsfeed',
    location: 'Borås',
    coordinates: { lat: 57.721, lng: 12.9401 },
  },
  {
    name: 'Bonnaphesten',
    date: new Date('2024-10'),
    who: 'Skövde sexmästeri (Skö Sex)',
    notes: '',
    // logo: 'https://scontent.fbma6-1.fna.fbcdn.net/v/t39.30808-6/326473970_589630633007424_8026394881578793281_n.png?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ktltDxibaSsQ7kNvgG8uMyM&_nc_ht=scontent.fbma6-1.fna&oh=00_AYBhBn7uaCBslGwSzY5HH3LONPk70DoTwA2n9HnSV_NmCw&oe=665C3C8B',

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
    // logo: 'https://scontent.fbma6-1.fna.fbcdn.net/v/t39.30808-6/302280232_513182110807645_3932822717580076126_n.png?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=J3LUZe2-OQIQ7kNvgEiTKIp&_nc_ht=scontent.fbma6-1.fna&oh=00_AYDA6EGr9US6pmwuGuXEXWKlY0aFnpV9xfHQXZBf229D1w&oe=665C173E',
    location: 'Stockholm -Tallin',
    coordinates: { lat: 59.3293, lng: 18.0686 }, // Stockholm coordinates
  },
  {
    name: 'Fejden',
    date: new Date('2024-11'),
    who: 'D6',
    // logo: 'https://scontent.fbma6-1.fna.fbcdn.net/v/t39.30808-6/277586359_339518771489667_2146669863171200519_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vue75yrsM6UQ7kNvgGzGd9k&_nc_ht=scontent.fbma6-1.fna&oh=00_AYCUuhTsK0gnYHNKCUhXAB82MAufS7xsw_t6Pt1jDCXt_w&oe=665C2F33',
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
    // logo: 'https://scontent.fbma6-1.fna.fbcdn.net/v/t39.30808-6/424723204_858540082980919_7844771466672656615_n.jpg?stp=dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vCjUgs_C12oQ7kNvgFQXkaY&_nc_ht=scontent.fbma6-1.fna&oh=00_AYBRqGaz8S-HTEy-O1MJq73FkB8kgMbgdy17KWvNwyaI5Q&oe=665C1F9F',
    coordinates: { lat: 56.1820711, lng: 15.5918314 },
  },
  {
    name: 'Eskilstuna winter games',
    date: new Date('2025-02'),
    who: 'Sexmästeriet mdu Eskilstuna',
    notes: '',
    // logo: 'https://scontent.fbma6-1.fna.fbcdn.net/v/t39.30808-6/426001225_784513150368922_3676856689435206380_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-cGXQN77RlMQ7kNvgHVzbIP&_nc_ht=scontent.fbma6-1.fna&oh=00_AYCzFGSDgLwYVNPBXAVAIYQcv8mKppJUkBk1zjnRiqq05w&oe=665C4133',
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
    location: 'Luleå',
    coordinates: { lat: 65.5848, lng: 22.1547 },
  },
  {
    name: 'Sjärtslaget',
    date: new Date('2025-02'),
    who: 'Festvärket',
    notes: '',
    location: 'Trollhättan',
    coordinates: { lat: 58.2837, lng: 12.2886 },
  },
  {
    name: 'Hjärtslaget',
    date: new Date('2025-02'),
    url: 'https://www.facebook.com/events/323150290396425',
    who: 'Thorax',
    description: 'Thorax presenterar Hjärtslaget 2024!❤️👊 Följ oss på Instagram @thoraxhalmstadstudentkar för mer framtida information⚠️',
    // logo: 'https://cdn.discordapp.com/attachments/802918668123242543/1245142033199398922/382807590_630467365905818_2719219500998163357_n.jpg?ex=6657ac62&is=66565ae2&hm=aa14c7561f1cde16bf912360db189e98223e46577013446d4667d7f2222ce866&',
    notes: '',
    location: 'Halmstad',
    coordinates: { lat: 56.6745, lng: 12.857 },
  },
  {
    name: 'Vårkryssen- Silliz/ sjölliz',
    date: new Date('2025-03'),
    who: 'Sjöslags gruppen (Klubbmästarrådet (KMR))',
    notes: '',
    // logo: 'https://scontent.fbma6-1.fna.fbcdn.net/v/t39.30808-6/385508581_813004064158780_3045339780399502202_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IPknrZ7v0HMQ7kNvgFwyoj7&_nc_ht=scontent.fbma6-1.fna&oh=00_AYDtXEdg0Tm7ADIsUuUfQ-CcOtqEI-V9dUd2NVrI2hfADg&oe=665C3225',
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
    // logo: 'https://scontent.fbma6-1.fna.fbcdn.net/v/t39.30808-6/241960101_6365533010138563_7071238375259238882_n.png?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=XUQgfI-67U0Q7kNvgF4fN87&_nc_ht=scontent.fbma6-1.fna&oh=00_AYBlvwEhLMlO0lyQ_rY2_xzdsa_R6UtMaEtSuMtBi_0nXA&oe=665C3583',
    location: 'Umeå',
    coordinates: { lat: 65.5848, lng: 22.1547 }, // Luleå coordinates
  },
  {
    name: 'Syndafloden',
    date: new Date('2025-03'),
    who: 'Qult',
    notes: '',
    location: 'Jönköping',
    coordinates: { lat: 57.7826, lng: 14.1618 },
  },
  {
    name: 'Ålrundan',
    date: new Date('2025-04'),
    who: 'ålrundan',
    notes: 'Finland',
    // logo: 'https://scontent.fbma6-1.fna.fbcdn.net/v/t39.30808-6/405777888_334591609177965_6710600913373264786_n.jpg?stp=dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=houBRlcKQmEQ7kNvgFMz7uu&_nc_ht=scontent.fbma6-1.fna&oh=00_AYCF7lZHd0dECY63WI8QUsHmYr8ptbWunMGC31LOvCBm7g&oe=665C2C4C',
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
    coordinates: { lat: 58.4108, lng: 15.6214 },
  },
  {
    name: 'Capseisa',
    date: new Date('2025-04'),
    who: 'DVKV',
    notes: 'inte utlandsphest',
    location: 'Kronåsens',
    coordinates: { lat: 59.8439427, lng: 17.6214824 }, // Assuming Kronåsens is a place near Stockholm
  },
  {
    name: 'Flummen',
    date: new Date('2025-05'),
    who: 'Brutal academin',
    notes: '',
    url: 'https://www.brutal-akademien.org/',
    // logo: 'https://scontent.fbma6-1.fna.fbcdn.net/v/t39.30808-6/309402095_461008686068367_2387081450756832565_n.png?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Tum2MtoUMTkQ7kNvgGSz2WV&_nc_ht=scontent.fbma6-1.fna&oh=00_AYDSI4Kyw-QziwbsH2dw4xzPohiWTww03nvZG7Y6ARfMiA&oe=665C3176',
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
    coordinates: { lat: 59.3293, lng: 18.0686 },
  },
  {
    name: 'AG',
    date: new Date('2025-05'),
    who: 'Absolut Gotland',
    notes: '',
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
    name: 'BootCaps',
    date: new Date('2024-06'),
    who: 'Capslägercommittén',
    notes: '',
    location: 'Rävlanda',
    coordinates: { lat: 57.6544, lng: 12.5383 },
  },
  {
    name: 'Du vet vad',
    date: new Date('2025-07'),
    who: 'qult',
    notes: '',
    location: 'Jönköping',
    coordinates: { lat: 57.7826, lng: 14.1618 },
  },
]
