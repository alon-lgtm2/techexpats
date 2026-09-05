/**
 * Excerpts from Alon's own articles, for quoting across the site.
 *
 * Alon, 2026-09-05: "I want to include some cool excerpts about the Dutch world
 * ... take text from my articles and quote them, put quotes throughout the
 * website." So: not invented lines, and not paraphrases. The Hebrew is lifted
 * VERBATIM from the article it names, and can be grepped for in
 * src/content/insights/ to prove it. The English and Dutch are faithful
 * renderings of that same Hebrew, in the same spirit as the article
 * translations, which are adaptations rather than literal.
 *
 * `slug` is the Hebrew article's file id. `hasSiblings` says whether an English
 * and Dutch version of that article exist, because summer-hunt is Hebrew only
 * and a "read the full piece" link on /en that lands on Hebrew is worse than no
 * link at all.
 */
export type Excerpt = {
  id: string;
  quote: { he: string; en: string; nl: string };
  /** File id of the Hebrew article. EN is the same without -he, NL with -nl. */
  slug: string;
  hasSiblings: boolean;
  source: { he: string; en: string; nl: string };
};

export const excerpts: Excerpt[] = [
  {
    id: "hunt-companies",
    quote: {
      he: "אל תחפשו משרות. תצודו חברות. משרה פתוחה היא לעיתים קרובות הגדרה שרירותית של מחלקת משאבי אנוש. חברה, לעומת זאת, היא גוף חי עם אתגרים שאתם יכולים לאתר ולפתור.",
      en: "Do not look for jobs. Hunt companies. A posted role is often an arbitrary definition written by an HR department. A company, by contrast, is a living thing with problems you can find and solve.",
      nl: "Zoek geen vacatures. Jaag op bedrijven. Een gepubliceerde functie is vaak een willekeurige definitie van een HR-afdeling. Een bedrijf is daarentegen iets levends, met problemen die jij kunt vinden en oplossen.",
    },
    slug: "stop-looking-for-a-job-he",
    hasSiblings: true,
    source: {
      he: "הדרך הכי טובה למצוא היום עבודה היא להפסיק לחפש עבודה",
      en: "The best way to find a job today is to stop looking for one",
      nl: "De beste manier om nu werk te vinden is stoppen met zoeken",
    },
  },
  {
    id: "quarter",
    quote: {
      he: "מי שיוצא לדרך מחודד באמצע אוגוסט, מנהל שיחות בספטמבר וסוגר בנובמבר. מי שמתחיל להתארגן בספטמבר, מגיע לראיונות בנובמבר ופוגש את דצמבר. ההבדל ביניהם הוא לא חודש. הוא רבעון שלם.",
      en: "Start sharp in mid August and you are in conversations by September and closing in November. Start organising in September and you reach interviews in November and run into December. The difference between them is not a month. It is a whole quarter.",
      nl: "Begin scherp half augustus en je voert in september gesprekken en sluit je in november af. Begin je pas in september te organiseren, dan zit je in november in gesprekken en loop je tegen december aan. Het verschil is geen maand. Het is een heel kwartaal.",
    },
    slug: "summer-hunt-he",
    hasSiblings: false,
    source: {
      he: "כולם בחופש, הכל רגוע: זה הזמן לחפש עבודה",
      en: "Everyone is away and it is all quiet: this is the time to look",
      nl: "Iedereen is weg en het is stil: dit is het moment om te zoeken",
    },
  },
  {
    id: "rejected-flag",
    quote: {
      he: "ברגע שנדחיתם אתם מסומנים במערכת הגיוס כ-rejected, ובהולנד, דווקא בגלל הדגש הגדול על שוויון הזדמנויות, ידי המגייס כבולות מאז, גם אם מישהו בכיר ירצה לסייע. שרפתם גשר עוד לפני שחצִיתם אותו.",
      en: "The moment you are turned down you are flagged in the hiring system as rejected, and in the Netherlands, precisely because equal opportunity is taken so seriously, the recruiter's hands are tied from then on, even if someone senior wants to help. You burned a bridge before you crossed it.",
      nl: "Zodra je bent afgewezen sta je in het wervingssysteem gemarkeerd als rejected, en juist omdat gelijke kansen in Nederland zo serieus worden genomen, zijn de handen van de recruiter daarna gebonden, ook als iemand hogerop wil helpen. Je hebt een brug verbrand voordat je eroverheen ging.",
    },
    slug: "hard-truths-he",
    hasSiblings: true,
    source: {
      he: "תשע אמיתות קשות על חיפוש עבודה בהולנד",
      en: "Nine hard truths about looking for work in the Netherlands",
      nl: "Negen harde waarheden over werk zoeken in Nederland",
    },
  },
  {
    id: "see-you",
    quote: {
      he: "אחרי שמונה שנים שאני מנהל את קהילת ההייטקיסטים בהולנד, ופוגש רבים כל כך מכם באופן אישי, אומר זאת כך: אני לא יודע יותר מרוב האנשים. אני כנראה יודע יותר על רוב האנשים. אני פשוט רואה אתכם.",
      en: "After eight years running the Israeli tech community in the Netherlands, and meeting so many of you in person, I would put it like this: I do not know more than most people. I probably know more about most people. I simply see you.",
      nl: "Na acht jaar de Israëlische tech-community in Nederland te hebben geleid, en zovelen van jullie persoonlijk te hebben ontmoet, zou ik het zo zeggen: ik weet niet meer dan de meeste mensen. Ik weet waarschijnlijk meer over de meeste mensen. Ik zie jullie gewoon.",
    },
    slug: "hard-truths-he",
    hasSiblings: true,
    source: {
      he: "תשע אמיתות קשות על חיפוש עבודה בהולנד",
      en: "Nine hard truths about looking for work in the Netherlands",
      nl: "Negen harde waarheden over werk zoeken in Nederland",
    },
  },
  {
    id: "israeli-asset",
    quote: {
      // Trimmed to the first sentence, which is contiguous in the article. The
      // longer version changed a comma to a colon and dropped two parentheticals
      // without marking the cut, which is a paraphrase wearing a quotation mark.
      he: "יש לנו נכס תרבותי אדיר כאן, הישירות, הדרייב והיכולת לקחת Ownership מהר וביעילות.",
      en: "We have an enormous cultural asset here, the directness, the drive, and the ability to take ownership quickly and efficiently.",
      nl: "We hebben hier een enorme culturele troef, de directheid, de drive, en het vermogen om snel en efficiënt ownership te nemen.",
    },
    slug: "stop-looking-for-a-job-he",
    hasSiblings: true,
    source: {
      he: "הדרך הכי טובה למצוא היום עבודה היא להפסיק לחפש עבודה",
      en: "The best way to find a job today is to stop looking for one",
      nl: "De beste manier om nu werk te vinden is stoppen met zoeken",
    },
  },
  {
    id: "attention",
    quote: {
      he: "חיפוש עבודה הוא פרויקט שגוזל אינסוף אנרגיה. כשאנחנו יורים לכל עבר ומגיבים למשרות אקראיות, אנחנו מוחקים את המשאב הכי יקר שלנו. בסופו של יום, כל מאמץ בא על חשבון מאמץ אחר.",
      en: "A job search is a project that eats endless energy. When we fire in every direction and react to whatever role appears, we burn the most valuable resource we have. At the end of the day, every effort comes at the cost of another one.",
      nl: "Werk zoeken is een project dat eindeloos energie kost. Wie alle kanten op schiet en op willekeurige vacatures reageert, verbrandt de kostbaarste hulpbron die er is. Uiteindelijk gaat elke inspanning ten koste van een andere.",
    },
    slug: "stop-looking-for-a-job-he",
    hasSiblings: true,
    source: {
      he: "הדרך הכי טובה למצוא היום עבודה היא להפסיק לחפש עבודה",
      en: "The best way to find a job today is to stop looking for one",
      nl: "De beste manier om nu werk te vinden is stoppen met zoeken",
    },
  },
  {
    id: "not-a-sprint",
    quote: {
      he: "חיפוש עבודה טוב הוא לא ספרינט של הגשות, הוא מבצע של מיקוד. ומבצעים כאלה מנצחים כשהם נעים הפוך מהעדר.",
      en: "A good job search is not a sprint of applications. It is an operation built on focus. And operations like that win by moving against the herd.",
      nl: "Een goede zoektocht is geen sprint van sollicitaties. Het is een operatie die op focus draait. En zulke operaties winnen door tegen de kudde in te bewegen.",
    },
    slug: "summer-hunt-he",
    hasSiblings: false,
    source: {
      he: "כולם בחופש, הכל רגוע: זה הזמן לחפש עבודה",
      en: "Everyone is away and it is all quiet: this is the time to look",
      nl: "Iedereen is weg en het is stil: dit is het moment om te zoeken",
    },
  },
];

export const byId = (id: string) => excerpts.find((e) => e.id === id);
