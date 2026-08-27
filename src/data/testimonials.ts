// =============================================================================
//  TESTIMONIALS  -  real reviews, shown in the visitor's selected language
// =============================================================================
//
//  Each review's `quote` holds up to three language versions (en / nl / he).
//  The site shows the version matching the active language; if a translation is
//  missing it falls back to English, then to whatever exists. Names are kept as-is.
//
//  HOW TO ADD A REVIEW (Alon):
//  1. Paste the original quote to Claude (any language). Claude translates it to the
//     other two and fills `quote`.
//  2. `name` required. `role` is a single line (job titles read fine in any language).
//  3. `source`: "coaching" (individuals) or "hiring" (companies). Rendered localized.
//  4. `avatar`: photo at  public/testimonials/<name>.jpg  (falls back to initials).
//
//  The section auto-hides while this array is empty.
// =============================================================================

type Lang = "en" | "nl" | "he";

export interface Testimonial {
  quote: Partial<Record<Lang, string>>;
  name: string;
  role?: string; // e.g. "Product Manager, Miro" - shown under the name
  source?: "coaching" | "hiring";
  avatar?: string;
  linkedin?: string; // optional profile URL; makes the name a link
}

export const testimonials: Testimonial[] = [
  {
    name: "Yair Sepunaru",
    role: "Software Engineer, ex-Adyen",
    source: "coaching",
    avatar: "/testimonials/yair-sepunaru.jpg",
    quote: {
      he: "אלון עזר לי לאחרונה בהכנה לקראת תהליכי ראיונות. מענטש ומקצוען אמיתי. מעבר להיותו נכס צאן ברזל לקהילה הישראלית בהולנד על שלל פעילותיו ותרומתו. בין אם אתם מחפשים את התפקיד הראשון שלכם בהולנד, מנסים לשדרג או צריכים להתייעץ על נושאים מורכבים, אלון הוא הכתובת.",
      en: "Alon recently helped me prepare for a set of interview processes. A mensch and a real professional. On top of which he is an institution in the Israeli community in the Netherlands, for everything he does there and everything he has given it. Whether you are looking for your first role in the Netherlands, trying to move up, or need to think through something complicated, Alon is the person to go to.",
      nl: "Alon heeft me onlangs geholpen bij de voorbereiding op een reeks sollicitatiegesprekken. Een oprecht goed mens en een echte professional. Daarbij is hij een begrip in de Israëlische gemeenschap in Nederland, om alles wat hij daar doet en heeft bijgedragen. Of je nu je eerste baan in Nederland zoekt, een stap omhoog wilt maken, of iets ingewikkelds wilt doordenken: bij Alon moet je zijn.",
    },
  },
  {
    name: "Itay Sviri",
    role: "Product Manager, Booking.com",
    source: "coaching",
    avatar: "/testimonials/itay-sviri.jpg",
    quote: {
      he: "לא רוצה להלבין את פניו, אבל כשמגיע מגיע. אלון מציע תוכנית ליווי ומנטורינג למציאת עבודה בשוק ההולנדי, שכולנו יודעים כמה הוא קשוח בימים אלה. באופן אישי התחלתי את התהליך הרבה לפני שעברנו לכאן (לדעתי כמעט שנה לפני), בעיקר כדי להבין איך השוק מתנהג פה. אלון מבין את פני השוק עוד לפני שהשוק מגיע לשם, ולכן הטיפים שהוא נתן לי שנה לפני שעברתי עבדו בכל פעם מחדש. הליווי של אלון הוא ברמה הגבוהה ביותר, לכן נדרשת השקעה מירבית מצד המשתתף, אבל התוצאות מדברות בעד עצמן. ממליץ בחום רב מאוד!",
      en: "I don't want to embarrass him, but credit where it's due. Alon offers a mentoring and guidance program for finding work in the Dutch market, which we all know is tough right now. Personally I started the process long before we moved here (almost a year before, I think), mainly to understand how the market behaves. Alon reads where the market is going before it even gets there, so the tips he gave me a year before I moved worked again and again. Alon's guidance is of the highest level, so it demands maximum investment from the participant, but the results speak for themselves. Very warmly recommended!",
      nl: "Ik wil hem niet in verlegenheid brengen, maar eer wie eer toekomt. Alon biedt een begeleidings- en mentortraject voor het vinden van werk op de Nederlandse markt, waarvan we allemaal weten hoe lastig die nu is. Persoonlijk begon ik het traject ruim voordat we hierheen verhuisden (bijna een jaar ervoor, denk ik), vooral om te begrijpen hoe de markt zich gedraagt. Alon ziet waar de markt heen gaat nog voordat die er is, dus de tips die hij me een jaar voor mijn verhuizing gaf, werkten keer op keer. De begeleiding van Alon is van het hoogste niveau en vraagt dus maximale inzet van de deelnemer, maar de resultaten spreken voor zich. Van harte aanbevolen!",
    },
  },
  {
    name: "Eva Bishara Khoury",
    role: "Finance Director, Leonardo Hotels",
    source: "coaching",
    avatar: "/testimonials/eva-bishara-khoury.jpg",
    quote: {
      he: "אני רוצה להמליץ בחום על אלון גלדוני, שליווה אותי בתהליך משמעותי של דיוק והכוונה מקצועית. אלון עזר לי לשאול את השאלות הנכונות, לאפיין את דרישות התפקיד הבא שלי, להבין אילו תחומי תעשייה מעניינים אותי יותר, ולחדד את מכלול השיקולים והתנאים שחשובים לי בבחירת התפקיד הבא. התהליך היה אישי, מקצועי, ענייני ומועיל מאוד. מעבר לכך, הוא נתן לי כלים ותובנות לגבי שוק העבודה ההולנדי, ההבדלים התרבותיים, ומה באמת חשוב למעסיקים כאן. לדעתי, זהו תהליך חשוב לא רק למי שמחפש עבודה, אלא גם למי שכבר עובד ומתלבט האם הוא נמצא במקום הנכון, ומחפש יותר בהירות, מיקוד והכוונה להמשך הקריירה. ממליצה בחום על אלון לכל מי שרוצה להגיע לתהליך חיפוש העבודה, או לתכנון הקריירה שלו, בצורה ממוקדת, מחושבת ואפקטיבית יותר.",
      en: "I warmly recommend Alon Gildoni, who guided me through a meaningful process of professional focus and direction. Alon helped me ask the right questions, define the requirements of my next role, understand which industries interest me most, and sharpen all the considerations and conditions that matter to me in choosing what comes next. The process was personal, professional, to the point, and very useful. Beyond that, he gave me tools and insights about the Dutch job market, the cultural differences, and what really matters to employers here. In my view this is an important process not only for someone job hunting, but also for someone already working who is wondering whether they are in the right place and wants more clarity, focus, and direction for the rest of their career. I warmly recommend Alon to anyone who wants to approach their job search, or their career planning, in a more focused, deliberate, and effective way.",
      nl: "Ik beveel Alon Gildoni van harte aan. Hij begeleidde mij door een betekenisvol proces van professionele focus en richting. Alon hielp me de juiste vragen te stellen, de eisen van mijn volgende functie te bepalen, te begrijpen welke sectoren mij het meest interesseren, en alle overwegingen en voorwaarden aan te scherpen die voor mij belangrijk zijn bij de volgende stap. Het proces was persoonlijk, professioneel, ter zake en zeer nuttig. Daarnaast gaf hij me tools en inzichten over de Nederlandse arbeidsmarkt, de culturele verschillen, en wat hier echt belangrijk is voor werkgevers. Wat mij betreft is dit een waardevol proces, niet alleen voor wie werk zoekt, maar ook voor wie al werkt en twijfelt of hij op de juiste plek zit en meer helderheid, focus en richting voor zijn loopbaan zoekt. Ik beveel Alon van harte aan iedereen aan die zijn zoektocht naar werk, of zijn loopbaanplanning, gerichter, doordachter en effectiever wil aanpakken.",
    },
  },
  {
    name: "Idan Batuner",
    role: "Chief of Staff, BUILDING CARE",
    source: "coaching",
    avatar: "/testimonials/idan-batuner.jpg",
    quote: {
      he: "הגעתי לחיפוש העבודה האחרון עם ניסיון מקצועי משמעותי, אבל בשלב מסוים הרגשתי שהדרך הרגילה של שליחת קורות חיים פשוט לא מייצרת את התוצאה שקיוויתי לה. הגעתי לאלון בעקבות המלצה, וזו הייתה נקודת מפנה. אני רגיל לעבוד עם כלי AI ולדייק תהליכים בעצמי, אבל המתודולוגיה שאלון פיתח שינתה לחלוטין את הדרך שבה ניגשתי לחיפוש. זה לא היה פתרון קסם, אלא תהליך מסודר שדרש עבודה משני הצדדים, ובלטו במיוחד הזמינות, היחס האישי והיכולת להתאים את התהליך לצרכים שלי. בסופו של דבר הגעתי למשרה מצוינת כאן באמסטרדם, שמתאימה בדיוק לשלב המקצועי שבו אני נמצא. אלון מקצוען אמיתי, ולמי שמרגיש שחיפוש העבודה לא מתקדם כפי שהוא אמור, בהחלט שווה לדבר איתו.",
      en: "I came to my last job search with significant professional experience, but at some point I felt that the usual approach of sending out CVs simply was not producing the result I hoped for. I came to Alon on a recommendation, and it was a turning point. I am used to working with AI tools and refining processes myself, but the methodology Alon developed completely changed the way I approached the search. It was not a magic solution, but an orderly process that required work from both sides, and what stood out in particular was his availability, the personal attention, and the ability to tailor the process to my needs. In the end I landed an excellent role here in Amsterdam, one that fits exactly the professional stage I am at. Alon is a true professional, and for anyone who feels their job search is not progressing the way it should, it is well worth talking to him.",
      nl: "Ik begon mijn laatste zoektocht naar werk met ruime professionele ervaring, maar op een gegeven moment merkte ik dat de gebruikelijke aanpak van cv's versturen simpelweg niet het resultaat opleverde waar ik op hoopte. Ik kwam bij Alon via een aanbeveling, en dat was een keerpunt. Ik ben gewend om met AI-tools te werken en processen zelf te verfijnen, maar de methodologie die Alon ontwikkelde veranderde mijn aanpak van de zoektocht volledig. Het was geen wondermiddel, maar een gestructureerd proces dat inzet van beide kanten vroeg, en wat vooral opviel waren zijn beschikbaarheid, de persoonlijke aandacht en het vermogen om het proces op mijn behoeften af te stemmen. Uiteindelijk vond ik een uitstekende functie hier in Amsterdam, die precies past bij de professionele fase waarin ik zit. Alon is een echte professional, en voor wie voelt dat zijn zoektocht niet vordert zoals het zou moeten, is het zeker de moeite waard om met hem te praten.",
    },
  },
  {
    name: "Tal Weinisch",
    role: "Strategy & Operations, Miro",
    avatar: "/testimonials/tal-weinish.jpg",
    source: "coaching",
    quote: {
      he: "בדיוק חתמתי על חוזה עם Miro, כנגד כל הסיכויים ושבוע לפני המעבר המתוכנן שלנו. הרבה מזה בזכות התמיכה וההכוונה שלך. תודה רבה!",
      en: "I just signed a contract with Miro, against all odds and a week before our planned move. A lot of it is thanks to your support and guidance. Thank you so much!",
      nl: "Ik heb net een contract getekend met Miro, tegen alle verwachtingen in en een week voor onze geplande verhuizing. Veel daarvan dankzij jouw steun en begeleiding. Heel erg bedankt!",
    },
  },
  {
    name: "Ben Galili",
    role: "VP of Product, BlueThrone",
    avatar: "/testimonials/ben-galili.jpg",
    source: "coaching",
    quote: {
      he: "שיחקת תפקיד מכריע במעבר החלק שלנו להולנד, תוך מתן הכוונה יקרת ערך בחיפוש העבודה ובתהליך ההעתקה. המומחיות שלך הייתה חשובה מאוד, וסוף סוף נחתתי במשרה שחיפשתי!",
      en: "You played a decisive role in our smooth move to the Netherlands, giving invaluable guidance through the job search and the relocation. Your expertise mattered enormously, and I finally landed the role I was after!",
      nl: "Je speelde een doorslaggevende rol in onze soepele verhuizing naar Nederland, met waardevolle begeleiding bij de zoektocht naar werk en de verhuizing. Jouw expertise was enorm belangrijk, en eindelijk vond ik de baan die ik zocht!",
    },
  },
  {
    name: "Adi T.",
    source: "coaching",
    quote: {
      he: "האינטראקציות האחרונות היו תענוג, מקצועיות, מעשירות ותורמות באופן משמעותי. הסבלנות שלך והטיפים הבלתי ניתנים להחלפה היו מוערכים מאוד. אנחנו מתכננים טיול להולנד ומקווים לתאם פגישה במהלך הביקור.",
      en: "The recent interactions were a pleasure: professional, enriching, and genuinely valuable. Your patience and your irreplaceable tips were much appreciated. We are planning a trip to the Netherlands and hope to meet during the visit.",
      nl: "De recente interacties waren een genoegen: professioneel, verrijkend en echt waardevol. Je geduld en je onvervangbare tips werden zeer gewaardeerd. We plannen een reis naar Nederland en hopen tijdens het bezoek af te spreken.",
    },
  },
  {
    name: "Emmanuel Adhoute",
    role: "Product, IBM",
    avatar: "/testimonials/emanuel-adwat.jpg",
    source: "coaching",
    quote: {
      he: "עזרת לי לעצב את קורות החיים שלי כדי להשיג את המשרה הראשונה שלי בהולנד. מספק ייעוץ קריירה נהדר, בין אם אתה מחפש עבודה או מנסה להשתפר בתפקיד הנוכחי שלך.",
      en: "You helped me shape my CV to land my first job in the Netherlands. You give great career advice, whether you are job hunting or trying to grow in your current role.",
      nl: "Je hielp me mijn cv vorm te geven om mijn eerste baan in Nederland te vinden. Je geeft geweldig loopbaanadvies, of je nu werk zoekt of wilt groeien in je huidige rol.",
    },
  },
  {
    name: "Reshef Katz",
    role: "System Administrator, Da Vinci",
    avatar: "/testimonials/reshef-katz.jpg",
    source: "coaching",
    quote: {
      he: "הסיוע והעצה ניתנו בצורה ברורה ומדויקת, והמעקב נעשה בצורה יסודית עד שהכול הושלם ונבדק לסיום.",
      en: "The help and advice were clear and precise, and the follow-up was thorough, right through until everything was complete and checked off.",
      nl: "De hulp en het advies waren helder en precies, en de opvolging was grondig, tot alles af was en gecontroleerd.",
    },
  },
  {
    name: "D.P.",
    source: "coaching",
    quote: {
      he: "קיבלתי ממך משוב על קורות החיים שלי כהכנה לחיפוש עבודה בהולנד. המשוב היה מדויק ומעשי, ונתן לי הזדמנות להבין מיד איך לשפר את קורות החיים ואת הסיפור שאני מספר דרכם. לאחר מכן היית זמין גם לשאלות נוספות, והכול בסבלנות ובנעימות. ממליץ בחום!",
      en: "You gave me feedback on my CV in preparation for a job search in the Netherlands. It was accurate and practical, and it immediately showed me how to improve the CV and the story I tell through it. You then stayed available for further questions, all with patience and warmth. Highly recommend!",
      nl: "Je gaf me feedback op mijn cv ter voorbereiding op een zoektocht naar werk in Nederland. Het was accuraat en praktisch, en liet me meteen zien hoe ik het cv en het verhaal dat ik ermee vertel kon verbeteren. Daarna bleef je beschikbaar voor verdere vragen, allemaal met geduld en warmte. Een echte aanrader!",
    },
  },
  {
    name: "B.T.",
    source: "coaching",
    quote: {
      he: "ליווית אותי לאורך הספקות שהיו לי בנוגע לשיקולים השונים הקשורים לחוזה עבודה ולמגורים כחלק מהמעבר להולנד. שיתפת איתי את המידע הנרחב והניסיון האישי שלך, והיית זמין לכל שאלה חדשה שעלתה לאורך התהליך.",
      en: "You guided me through the doubts I had about the various considerations around a work contract and housing as part of moving to the Netherlands. You shared your extensive knowledge and personal experience, and were available for every new question that came up along the way.",
      nl: "Je begeleidde me door mijn twijfels over de verschillende overwegingen rond een arbeidscontract en huisvesting als onderdeel van de verhuizing naar Nederland. Je deelde je uitgebreide kennis en persoonlijke ervaring, en was beschikbaar voor elke nieuwe vraag die onderweg opkwam.",
    },
  },
  {
    name: "Oded Babayoff",
    role: "Product Design, Guesty",
    avatar: "/testimonials/oded-babiof.jpg",
    source: "coaching",
    quote: {
      he: "עזרת לי להבין פרטים חשובים בנוגע לשוק העבודה בהולנד, מה צריך לקחת בחשבון ומה אולי פספסתי. תודה רבה!",
      en: "You helped me understand important details about the Dutch job market: what to take into account and what I might have missed. Thank you so much!",
      nl: "Je hielp me belangrijke details over de Nederlandse arbeidsmarkt te begrijpen: waar je rekening mee moet houden en wat ik misschien gemist had. Heel erg bedankt!",
    },
  },
];
