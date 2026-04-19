'use strict';
// ==================== SLIDE DATA ====================
const slides = [
// שקף 0 - Title
{
    title: "שער",
    menu: "שער",
    section: "",
    content: `
    <div class="title-slide">
        <div style="font-size:3em;margin-bottom:15px;">🕎</div>
        <h1>ברכות הנהנין</h1>
        <div class="title-ornament"></div>
        <div class="title-sub">מדריך הלכתי מקיף לברכות על מאכלים ומשקאות</div>
        <div class="title-meta">
            מבוסס על: פניני הלכה ברכות · קיצור שו"ע ילקוט יוסף · וזאת הברכה
        </div>
    </div>`
},
// שקף 1 - Intro
{
    title: "מהי ברכה?",
    menu: "מהי ברכה?",
    section: "רקע רעיוני",
    content: `
    <div class="slide-header">        <h1>מהי ברכה?</h1>
        <div class="subtitle">הרעיון שעומד מאחורי הברכות</div>
    </div>
    <p>ברכה היא אמירה קצרה של שבח והודאה לה', שאדם אומר לפני שנהנה מדבר שבעולם. הברכה מבטאת הכרה בכך שכל הטוב מגיע מהקב"ה, ולכן ראוי להודות לו לפני שנהנים.</p>

    <div class="source-box">
        <div class="source-label">📖 מסכת ברכות לה, א</div>
        "אָסוּר לוֹ לָאָדָם שֶׁיֵּהָנֶה מִן הָעוֹלָם הַזֶּה בְּלֹא בְּרָכָה, וְכָל הַנֶּהֱנֶה מִן הָעוֹלָם הַזֶּה בְּלֹא בְּרָכָה – מָעַל"
    </div>

    <p>חכמים הסבירו זאת באמצעות שני פסוקים בתהלים שלכאורה סותרים זה את זה:</p>
    <div class="two-cols">
        <div class="card">
            <div class="card-title">לפני הברכה</div>
            <div class="bracha-text" style="font-size:1em;">"לַה' הָאָרֶץ וּמְלוֹאָהּ" (תהלים כד)</div>
            <div class="card-text">הכל שייך לה' – הנהנה בלי ברכה כאילו גוזל מקדשי שמיים</div>
        </div>
        <div class="card">
            <div class="card-title">אחרי הברכה</div>
            <div class="bracha-text" style="font-size:1em;">"וְהָאָרֶץ נָתַן לִבְנֵי אָדָם" (תהלים קטו)</div>
            <div class="card-text">אחרי שמברכים – ה' "נותן" לנו רשות ליהנות</div>
        </div>
    </div>

    <div class="highlight-box success">
        <div class="highlight-box-title">💡 הרעיון המרכזי</div>
        הברכה היא מעין "כרטיס כניסה" – דרכה אנחנו מכירים בכך שה' הוא מקור כל טוב, וכך אנחנו מקבלים רשות ליהנות מעולמו.
    </div>`
},
// שקף 2 - Brachot as mitzvah derabanan
{
    title: "ברכות – מצוות דרבנן",
    menu: "ברכות – מצווה מדרבנן",
    section: "רקע רעיוני",
    content: `
    <div class="slide-header">        <h1>ברכות – אחת משבע מצוות דרבנן</h1>
        <div class="subtitle">מצווה שחכמים תיקנו לחזק את הקשר בינינו לבורא</div>
    </div>

    <div class="section-title">מהתורה ומדרבנן</div>
    <p>רוב הברכות <strong>לא נצטוו במפורש בתורה</strong>. התורה לא ציוותה לברך לפני אכילת תפוח או שתיית מים. שתי ברכות בלבד חיובן מן התורה:</p>
    <div class="two-cols">
        <div class="card">
            <div class="card-icon">📜</div>
            <div class="card-title">ברכת המזון</div>
            <div class="card-text">"וְאָכַלְתָּ וְשָׂבָעְתָּ וּבֵרַכְתָּ" (דברים ח, י) – מצווה מהתורה לברך אחרי אכילת לחם</div>
        </div>
        <div class="card">
            <div class="card-icon">📜</div>
            <div class="card-title">ברכת התורה</div>
            <div class="card-text">יש ראשונים הסוברים שחיובה מהתורה; אולם הלכה למעשה לפי שו"ע ופוסקים רבים – מדרבנן (שו"ע רט, ג)</div>
        </div>
    </div>

    <p>את <strong>כל שאר הברכות</strong> – ברכות הנהנין, ברכות המצוות, ברכות השבח – <strong>חז"ל הם שתיקנו</strong>, כדי לחזק את החיבור בין ישראל לאביהם שבשמים. לכל הנאה והנאה, לכל מצווה ומצווה, קבעו חכמים ברכה מיוחדת.</p>

    <div class="section-title">שבע מצוות דרבנן</div>
    <p>הברכות הן אחת מתוך <strong>שבע מצוות עשה שתיקנו חכמים</strong>. בניגוד לגזירות ותקנות שהן סייגים למצוות קיימות, שבע מצוות אלו הן מצוות עשה חדשות שחכמים חידשו. יחד עם תרי"ג מצוות התורה, הן עולות לתר"ך (620) – בגימטריה <strong>"כתר"</strong> תורה:</p>

    <div class="table-container">
        <table>
            <thead><tr><th>#</th><th>מצווה</th><th>תיאור קצר</th></tr></thead>
            <tbody>
                <tr style="background:var(--primary-bg);font-weight:600;"><td>1</td><td>🙏 ברכות</td><td>ברכות הנהנין, ברכות המצוות, ברכות השבח וההודאה</td></tr>
                <tr><td>2</td><td>💧 נטילת ידיים</td><td>ליטול ידיים לפני אכילת לחם</td></tr>
                <tr><td>3</td><td>🔗 עירובין</td><td>עירוב חצרות ועירוב תחומין לשבת</td></tr>
                <tr><td>4</td><td>🕯️ נר שבת</td><td>הדלקת נרות שבת</td></tr>
                <tr><td>5</td><td>🕎 נר חנוכה</td><td>הדלקת נרות חנוכה</td></tr>
                <tr><td>6</td><td>📖 מקרא מגילה</td><td>קריאת מגילת אסתר בפורים</td></tr>
                <tr><td>7</td><td>🎵 הלל</td><td>אמירת הלל בחגים ובראשי חודשים</td></tr>
            </tbody>
        </table>
    </div>
    `
},
// שקף 3 - Categories of brachot
{
    title: "סוגי ברכות",
    menu: "סוגי ברכות – סקירה",
    section: "רקע רעיוני",
    content: `
    <div class="slide-header">        <h1>סוגי ברכות</h1>
        <div class="subtitle">ארבע קטגוריות – ואנחנו עוסקים באחת מהן</div>
    </div>

    <p>חכמים תיקנו ברכות על מגוון רחב של פעולות והנאות בחיי היומיום. ניתן לחלקן לארבע קטגוריות עיקריות:</p>

    <div class="cards-grid">
        <div class="card" style="border:2px solid var(--primary);box-shadow:0 4px 16px var(--shadow-md);">
            <div class="card-icon">🍎</div>
            <div class="card-title" style="font-size:1.1em;">ברכות הנהנין ⬅️ הנושא שלנו!</div>
            <div class="card-text">ברכות על <strong>הנאות הגוף</strong>: אכילה, שתייה, הרחת בשמים. מברכים לפני ההנאה ולאחריה. לדוגמה: "בורא פרי העץ", "שהכל נהיה בדברו".</div>
        </div>
        <div class="card">
            <div class="card-icon">✡️</div>
            <div class="card-title">ברכות המצוות</div>
            <div class="card-text">ברכות שמברכים <strong>לפני קיום מצווה</strong>. נוסח: "אשר קדשנו במצוותיו וציוונו...". לדוגמה: להדליק נר של שבת, על נטילת ידיים, לשבת בסוכה, להניח תפילין.</div>
        </div>
        <div class="card">
            <div class="card-icon">🌈</div>
            <div class="card-title">ברכות השבח וההודאה</div>
            <div class="card-text">ברכות על <strong>חוויות ואירועים</strong>: ברכות הראייה (על קשת – "זוכר הברית", על ברק – "עושה מעשה בראשית", על הים – "שעשה את הים הגדול"), שהחיינו, הגומל, ברכות השחר.</div>
        </div>
        <div class="card">
            <div class="card-icon">🤲</div>
            <div class="card-title">ברכות התפילה</div>
            <div class="card-text">ברכות שהן חלק מ<strong>סדר התפילה</strong>: שמונה עשרה (עמידה), ברכות קריאת שמע, ברכות ההפטרה ועוד.</div>
        </div>
    </div>

    <div class="highlight-box">
        <div class="highlight-box-title">📌 המצגת הזו עוסקת בברכות הנהנין</div>
        נלמד: מה מברכים לפני ואחרי אכילה ושתייה, באיזה סדר, ומה עושים כשמסופקים.
    </div>`
},
// שקף 4 - Philosophical background
{
    title: "חשיבות הברכה",
    menu: "חשיבות הברכה",
    section: "רקע רעיוני",
    content: `
    <div class="slide-header">        <h1>חשיבות הברכה בחיי היומיום</h1>
        <div class="subtitle">קדושה בתוך הרגעים הפשוטים</div>
    </div>

    <div class="cards-grid">
        <div class="card">
            <div class="card-icon">🙏</div>
            <div class="card-title">הכרת הטוב</div>
            <div class="card-text">הברכה מפתחת את המודעות לטוב שבחיינו. במקום לקחת הכל כמובן מאליו, אנו עוצרים לרגע ומודים.</div>
        </div>
        <div class="card">
            <div class="card-icon">✨</div>
            <div class="card-title">קדושה ביומיום</div>
            <div class="card-text">היהדות מאמינה שאפילו פעולות פשוטות כמו אכילה ושתייה יכולות להפוך לחוויה רוחנית.</div>
        </div>
        <div class="card">
            <div class="card-icon">🔗</div>
            <div class="card-title">חיבור לבורא</div>
            <div class="card-text">כל ברכה היא רגע של חיבור אישי עם ה' – גם בלי להיות בבית כנסת.</div>
        </div>
        <div class="card">
            <div class="card-icon">👁️</div>
            <div class="card-title">מודעות והנאה</div>
            <div class="card-text">על פי ריה"ל בספר הכוזרי (מאמר ג), הברכות נועדו להעלות את מעשי היומיום למדרגה רוחנית ולהגביר את המודעות לטוב שבחיינו.</div>
        </div>
    </div>

    <div class="source-box">
        <div class="source-label">📖 מנחות מג, ב; פניני הלכה ברכות, פרק א</div>
        חכמים תיקנו שאדם יברך מאה ברכות בכל יום, כדי שכל יום יהיה מלא בהכרת טובו של הקב"ה.
    </div>`
},
// שקף 5 - Meaning of the bracha words
{
    title: "פירוש מילות הברכה",
    menu: "פירוש מילות הברכה",
    section: "רקע רעיוני",
    content: `
    <div class="slide-header">        <h1>פירוש מילות הברכה</h1>
        <div class="subtitle">מסע לעומק הנוסח: "ברוך אתה ה' אלוהינו מלך העולם..."</div>
    </div>
    <p>חכמים תיקנו שכל ברכה חייבת לכלול "שם ומלכות" – הזכרת שם ה' ומלכותו. מי שהשמיט אחד מיסודות אלה, לא יצא ידי חובתו (ברכות מ, ב; שו"ע רי"ד, א). אך מעבר לכלל ההלכתי, כל מילה בנוסח הברכה נושאת עומק רעיוני מופלא. נעמיק בכל מילה ומילה:</p>

    <div class="bracha-text" style="font-size:1.4em;letter-spacing:2px;">בָּרוּךְ &nbsp; אַתָּה &nbsp; ה' &nbsp; אֱלֹהֵינוּ &nbsp; מֶלֶךְ הָעוֹלָם &nbsp; ...</div>
    `
},
// שקף 6 - "Baruch"
{
    title: '"ברוך" – ריבוי והתברכות',
    menu: '"ברוך" – ריבוי',
    section: "רקע רעיוני",
    content: `
    <div class="slide-header">        <h1>"בָּרוּךְ" – ריבוי והתברכות</h1>
        <div class="subtitle">המילה הראשונה בכל ברכה</div>
    </div>

    <p>משמעות השורש ב-ר-ך בלשון חז"ל היא <strong>ריבוי, תוספת והשפעה</strong>. השורש מופיע בתנ"ך גם בהקשר חקלאי:</p>

    <div class="example-box">
        <div class="example-label">🌱 המשמעות המקורית: הַבְרָכָה</div>
        <p>כשמקופפים ענף של עץ ומכניסים אותו לאדמה כדי שישתרש ויצמיח עץ חדש – לפעולה הזו קוראים <strong>"הברכה"</strong>. מעץ אחד נוצר ריבוי, תוספת חיים חדשים. כך גם כשאנחנו מברכים: אנחנו מרבים את גילוי ה' בעולם.</p>
    </div>

    <div class="section-title">שלושה פירושים מרכזיים</div>
    <div class="cards-grid">
        <div class="card">
            <div class="card-icon">🌊</div>
            <div class="card-title">בְּרֵכָה – מקור השפע</div>
            <div class="card-text">הרשב"א (שו"ת ח"ה, סי' נ"ב): "ברכה" מלשון "בריכת מים" – כשם שבריכה מלאה מים, כך ה' הוא מקור כל הברכות והשפע בעולם.</div>
        </div>
        <div class="card">
            <div class="card-icon">✖️2️⃣</div>
            <div class="card-title">ריבוי – ב', ר', כ'</div>
            <div class="card-text">המהר"ל (נתיב העבודה, פ"ב): האותיות ב(=2), ר(=200), כ(=20) – כולן השנייה ברמתן המספרית. כולן מסמלות את עצם ההכפלה – תחילת הריבוי.</div>
        </div>
        <div class="card">
            <div class="card-icon">💡</div>
            <div class="card-title">תוספת שפע לעולם</div>
            <div class="card-text">ר' חיים מוולוז'ין (נפש החיים, שער ב', פ"ב): כשאנו מברכים – אנו מרבים את השפע האלוקי בעולם. "ברוך" הוא פעולה, לא רק תיאור.</div>
        </div>
    </div>

    <div class="source-box">
        <div class="source-label">📖 ספר החינוך</div>
        "ברוך" – שם תואר: ה' הוא מבורך, "כל הברכות כלולות בו והוא מלך עליהם לשלחם על כל אשר יחפוץ".
    </div>

    <div class="highlight-box success">
        <div class="highlight-box-title">💡 הרעיון המרכזי</div>
        כשאנו אומרים "ברוך" – אנחנו לא רק מתארים את ה'. אנחנו <strong>פועלים</strong>: מרבים את הופעת השכינה בעולם, פותחים צינור של שפע, ויוצרים קשר בין ההנאה הגשמית לבוראה.
    </div>`
},
// שקף 7 - "Ata"
{
    title: '"אתה" – פנייה ישירה',
    menu: '"אתה" – פנייה ישירה',
    section: "רקע רעיוני",
    content: `
    <div class="slide-header">        <h1>"אַתָּה" – פנייה ישירה, ללא אמצעי</h1>
        <div class="subtitle">גוף שני – מדרגה מיוחדת של קרבה</div>
    </div>

    <p>שימו לב לדבר מופלא: כשאנחנו מברכים, אנחנו פונים ישירות אל ה', <strong>בגוף שני</strong> – "אתה". לא "הוא", לא "הבורא", אלא <strong>"אתה"</strong> – כמו שמדברים עם מי שעומד ממש מולנו.</p>

    <div class="highlight-box">
        <div class="highlight-box-title">🔑 מדוע זה כל כך משמעותי?</div>
        בניגוד לתחושה הטבעית של ריחוק מהבורא, היהדות מלמדת שאפשר ואף ראוי לפנות אליו ישירות – ללא מתווכים וללא אמצעים. כל יהודי, בכל מקום, יכול לעמוד ולומר: <strong>"ברוך אתה"</strong> – מול הקב"ה פנים אל פנים.
    </div>

    <div class="section-title">נוכח ונסתר – סוד הנוסח</div>
    <p>הברכה פותחת ב"ברוך <strong>אתה</strong>" (גוף שני – נוכח), אך ממשיכה ב"שהכל נהיה <strong>בדברו</strong>" (גוף שלישי – נסתר). למה המעבר הזה?</p>

    <div class="source-box">
        <div class="source-label">📖 הרשב"א (שו"ת ח"ה, סי' נ"ב)</div>
        שני יסודות מרכזיים: האחד – שמציאות ה' ודאית ואין בה ספק. והשני – שאמיתת מהותו אינה מושגת. "ברוך אתה" – כמדבר עם מי שנוכח לפנינו. "אשר קדשנו" – בלשון נסתר, כי את מהותו אין אנו יכולים להשיג.
    </div>

    <div class="source-box">
        <div class="source-label">📖 פניני הלכה ברכות, פרק א</div>
        בתחילת הברכה אנו פונים אליו ישירות: "ברוך אתה ה' אלוהינו". אולם לאחר מכן עוברים לדבר אליו כאל נסתר – שאז אנו מתכוונים כלפי מה שלגמרי מעבר להשגתנו. שם ה' רומז למדרגה עליונה, שרק מעט מזער ממנה מתגלה אלינו. ואילו "אלוהינו" רומז למה שמתגלה.
    </div>

    <div class="highlight-box success">
        <div class="highlight-box-title">💡 התנועה שבברכה</div>
        הברכה משלבת קרבה וריחוק, אהבה ויראה. "אתה" – את ה' שאני מרגיש קרוב אלי. "בדברו" – את ה' שאינני יכול להשיג את מהותו. שני הצדדים גם יחד.
    </div>`
},
// שקף 8 - Hashem and Elokeinu
{
    title: 'ה\' – אלוהינו – מלך העולם',
    menu: 'ה\' · אלוהינו · מלך העולם',
    section: "רקע רעיוני",
    content: `
    <div class="slide-header">        <h1>ה' · אלוהינו · מלך העולם</h1>
        <div class="subtitle">שלוש שכבות של הכרה באלוקות</div>
    </div>

    <div class="cards-grid">
        <div class="card" style="border-right:4px solid var(--primary);">
            <div class="card-icon">🔤</div>
            <div class="card-title">"ה'" – שם הוויה (י-ה-ו-ה)</div>
            <div class="card-text">
                שם הוויה (י-ה-ו-ה) נקרא בפינו "אדוני" – <strong>אדון הכל</strong>. שם זה רומז ל"היה, הווה, ויהיה" – ה' שמעבר לזמן, שמחייה את הכל בכל רגע מחדש.<br><br>
                שם זה מתייחס ל<strong>מידת הרחמים וההשגחה</strong> – ה' שמנהיג את העולם ברחמים ומשגיח על כל פרט ופרט.
            </div>
        </div>

        <div class="card" style="border-right:4px solid var(--accent);">
            <div class="card-icon">⚡</div>
            <div class="card-title">"אֱלֹהֵינוּ" – בעל היכולת</div>
            <div class="card-text">
                שם "אלוהים" מביע את הכוח האלוקי: <strong>תקיף, בעל הכוחות והיכולות כולם</strong>.<br><br>
                לא ככוח מוגבל – אלא בעל היכולת המוחלטת. בורא העולם, קובע חוקי הטבע, ומנהל את הדין.<br><br>
                הסיומת <strong>"ינו"</strong> – <em>אלוהינו שלנו</em> – מבטאת את הקשר הייחודי. לא רק "אלוהים" באופן מופשט, אלא אלוהינו – שיש לנו יחסים אישיים עמו.
            </div>
        </div>

        <div class="card" style="border-right:4px solid var(--primary-light);">
            <div class="card-icon">👑</div>
            <div class="card-title">"מֶלֶךְ הָעוֹלָם"</div>
            <div class="card-text">
                <strong>קביעת היחס בינינו לבינו</strong> – הוא המלך ואנחנו נתיניו. לא שותפים שווים, לא כוח עיוור – אלא מלך שיש לו יחס אישי עם כל נתין.<br><br>
                "העולם" – מלכותו על <em>כל</em> המציאות, לא רק על עם ישראל, לא רק על מקום אחד, אלא על כל העולם כולו.
            </div>
        </div>
    </div>

    <div class="source-box">
        <div class="source-label">📖 ברכות מ, ב; שו"ע רי"ד, א; פניני הלכה ברכות יב, ד</div>
        "כל ברכה שאין בה הזכרת שם ומלכות – אינה ברכה." ארבעה יסודות מעכבים: "ברוך", שם ה', מלכות ("מלך העולם"), ותוכן הברכה.
    </div>`
},
// שקף 9 - Continuation of the bracha
{
    title: 'המשך הברכה – תוכן ההתקשרות',
    menu: 'המשך הברכה – הפועל',
    section: "רקע רעיוני",
    content: `
    <div class="slide-header">        <h1>המשך הברכה – תוכן ההתקשרות</h1>
        <div class="subtitle">"...בורא פרי העץ" / "...שהכל נהיה בדברו"</div>
    </div>

    <p>אחרי שהנחנו את היסודות – "ברוך אתה ה' אלוהינו מלך העולם" – מגיע <strong>תוכן הברכה</strong>: על איזו הנאה, מצווה או חוויה אנחנו מייחסים את ההתקשרות הזו?</p>

    <div class="highlight-box success">
        <div class="highlight-box-title">🔗 המנגנון הרוחני של הברכה</div>
        <p>המילים שלאחר "מלך העולם" הן הנקודה שבה אנחנו <strong>יוצרים קישור</strong> בין המעשה הגשמי – אכילת תפוח, שתיית מים, הנאה מריח – לבין הקב"ה. אנחנו מצהירים: הפרי הזה לא צמח סתם, אלא הקב"ה <strong>"בורא פרי העץ"</strong>. הדבר הזה לא קיים סתם, אלא <strong>"הכל נהיה בדברו"</strong>.</p>
    </div>

    <div class="section-title">מה קורה כשמברכים?</div>
    <div class="two-cols">
        <div class="card">
            <div class="card-title">בלי ברכה</div>
            <div class="card-text">הנאה גשמית מנותקת ממקורה. כאילו גוזלים מן העולם – נהנים בלי להכיר מהיכן בא הטוב.</div>
        </div>
        <div class="card">
            <div class="card-title">עם ברכה</div>
            <div class="card-text">ההנאה מתחברת למקורה. אנחנו מרבים את הופעת ה' בעולם – כל תפוח שאוכלים הופך לגילוי של הבורא.</div>
        </div>
    </div>

    <div class="source-box">
        <div class="source-label">📖 פניני הלכה ברכות, פרק א</div>
        כשם שראוי לאדם שמקבל מתנות מחברו להודות באופן ייחודי על כל מתנה, ואילו זה שמודה על הכל בנוסח סתמי מראה שאינו מבחין במהות המתנה – כך ראוי לאדם לנהוג כלפי שמים. לפיכך תיקנו חכמים ברכה מיוחדת לכל סוג וסוג של מאכל.
    </div>

    <div class="example-box">
        <div class="example-label">📋 לסיכום – מבנה הברכה כמסע רוחני</div>
        <p>
        <strong>"ברוך"</strong> – אני מרבה את השפע האלוקי בעולם<br>
        <strong>"אתה"</strong> – בפנייה ישירה, ללא אמצעי, פנים אל פנים<br>
        <strong>"ה'"</strong> – אל הנצחי, היה הווה ויהיה, מנהיג ברחמים<br>
        <strong>"אלוהינו"</strong> – בעל היכולת המוחלטת, שלנו, קרוב ואישי<br>
        <strong>"מלך העולם"</strong> – מלך על כל המציאות, ואני נתינו<br>
        <strong>"...בורא פרי העץ"</strong> – ועכשיו, ברגע הזה, אני מחבר את הפרי הזה שבידי – לבורא שלו
        </p>
    </div>`
},
// שקף 10 - Six brachot overview
{
    title: "שש ברכות הנהנין",
    menu: "שש הברכות – סקירה",
    section: "ברכות ראשונות",
    content: `
    <div class="slide-header">        <h1>שש ברכות הנהנין</h1>
        <div class="subtitle">סקירה כללית</div>
    </div>
    <p>חכמים תיקנו שש ברכות שונות לפני אכילה ושתייה. כל ברכה מותאמת לסוג מסוים של מאכל, מהכללי ביותר ועד הספציפי ביותר:</p>

    <div class="table-container">
        <table>
            <thead><tr><th>#</th><th>הברכה</th><th>נוסח הברכה</th><th>על מה מברכים</th></tr></thead>
            <tbody>
                <tr><td>1</td><td><strong>המוציא</strong></td><td>...הַמּוֹצִיא לֶחֶם מִן הָאָרֶץ</td><td>לחם מחמשת מיני דגן</td></tr>
                <tr><td>2</td><td><strong>מזונות</strong></td><td>...בּוֹרֵא מִינֵי מְזוֹנוֹת</td><td>מאפים ותבשילי דגן שאינם לחם</td></tr>
                <tr><td>3</td><td><strong>הגפן</strong></td><td>...בּוֹרֵא פְּרִי הַגָּפֶן</td><td>יין ומיץ ענבים</td></tr>
                <tr><td>4</td><td><strong>העץ</strong></td><td>...בּוֹרֵא פְּרִי הָעֵץ</td><td>פירות העץ</td></tr>
                <tr><td>5</td><td><strong>האדמה</strong></td><td>...בּוֹרֵא פְּרִי הָאֲדָמָה</td><td>ירקות, קטניות, זרעים</td></tr>
                <tr><td>6</td><td><strong>שהכל</strong></td><td>...שֶׁהַכֹּל נִהְיָה בִּדְבָרוֹ</td><td>כל שאר המאכלים והמשקאות</td></tr>
            </tbody>
        </table>
    </div>

    <div class="highlight-box">
        <div class="highlight-box-title">📌 סימן לזכירה: "המגע אש"</div>
        ראשי תיבות: <strong>ה</strong>מוציא, <strong>מ</strong>זונות, <strong>ג</strong>פן, <strong>ע</strong>ץ, <strong>א</strong>דמה, <strong>ש</strong>הכל – זהו גם סדר הקדימויות בין הברכות.
    </div>`
},
// שקף 11 - Tree visualization
{
    title: "עץ הברכות",
    menu: "עץ הברכות",
    section: "ברכות ראשונות",
    content: `
    <div class="slide-header">        <h1>עץ הברכות – מהכלל אל הפרט</h1>
        <div class="subtitle">ככל שהברכה ספציפית יותר – היא עדיפה</div>
    </div>
    <p>שש הברכות מסודרות כעץ: השורש הוא הברכה הכללית ביותר, וככל שעולים בענפים – הברכה נעשית מדויקת וממוקדת יותר. לכתחילה תמיד מברכים את הברכה הספציפית ביותר.</p>

    <div style="display:flex;justify-content:center;margin:20px 0;">
    <svg viewBox="0 0 540 520" width="540" height="520" style="max-width:100%;" dir="ltr">
        <!-- Trunk: שהכל → האדמה -->
        <path d="M270,430 C270,410 270,390 270,365" stroke="#8B6914" stroke-width="20" fill="none" opacity="0.2" stroke-linecap="round"/>

        <!-- Branch: האדמה → העץ (left) -->
        <path d="M270,345 C250,320 170,310 140,290" stroke="#6B8E23" stroke-width="14" fill="none" opacity="0.2" stroke-linecap="round"/>

        <!-- Branch: העץ → הגפן (left-up) -->
        <path d="M130,275 C115,250 90,240 80,220" stroke="#228B22" stroke-width="10" fill="none" opacity="0.2" stroke-linecap="round"/>

        <!-- Branch: האדמה → מזונות (right-up) -->
        <path d="M270,345 C300,310 360,260 380,165" stroke="#B8860B" stroke-width="14" fill="none" opacity="0.2" stroke-linecap="round"/>

        <!-- Branch: מזונות → המוציא (up to crown) -->
        <path d="M380,145 C370,120 340,90 310,70" stroke="#8B6914" stroke-width="12" fill="none" opacity="0.2" stroke-linecap="round"/>

        <!-- Canopy for המוציא -->
        <ellipse cx="290" cy="45" rx="210" ry="42" fill="#2C5F2D" opacity="0.07" stroke="#2C5F2D" stroke-width="1" stroke-opacity="0.15"/>

        <!-- ======= NODES (bottom to top in המגע"אש order) ======= -->

        <!-- 6. שהכל (root, bottom) -->
        <rect x="175" y="430" width="190" height="46" rx="23" fill="var(--bg-card)" stroke="var(--text-muted)" stroke-width="2"/>
        <text x="270" y="456" text-anchor="middle" font-family="Heebo,sans-serif" font-size="13" font-weight="700" fill="var(--text-muted)">שֶׁהַכֹּל נִהְיָה בִּדְבָרוֹ</text>
        <text x="270" y="472" text-anchor="middle" font-family="Heebo,sans-serif" font-size="9" fill="var(--text-muted)">בשר, דגים, ביצים, מים, ממתקים...</text>

        <!-- 5. האדמה -->
        <rect x="180" y="335" width="180" height="44" rx="22" fill="var(--bg-card)" stroke="#6B8E23" stroke-width="2.5"/>
        <text x="270" y="360" text-anchor="middle" font-family="Heebo,sans-serif" font-size="13" font-weight="700" fill="#6B8E23">בּוֹרֵא פְּרִי הָאֲדָמָה</text>
        <text x="270" y="374" text-anchor="middle" font-family="Heebo,sans-serif" font-size="9" fill="var(--text-muted)">ירקות, קטניות, גידולי קרקע</text>

        <!-- 4. העץ (left branch from אדמה) -->
        <rect x="50" y="260" width="170" height="44" rx="22" fill="var(--bg-card)" stroke="#228B22" stroke-width="2.5"/>
        <text x="135" y="286" text-anchor="middle" font-family="Heebo,sans-serif" font-size="13" font-weight="700" fill="#228B22">בּוֹרֵא פְּרִי הָעֵץ</text>
        <text x="135" y="300" text-anchor="middle" font-family="Heebo,sans-serif" font-size="9" fill="var(--text-muted)">תפוח, מנגו, אגוזים, שזיפים...</text>

        <!-- 3. הגפן (up from עץ) -->
        <rect x="15" y="190" width="145" height="42" rx="21" fill="var(--bg-card)" stroke="#722F37" stroke-width="2.5"/>
        <text x="87" y="215" text-anchor="middle" font-family="Heebo,sans-serif" font-size="12.5" font-weight="700" fill="#722F37">בּוֹרֵא פְּרִי הַגָּפֶן</text>
        <text x="87" y="228" text-anchor="middle" font-family="Heebo,sans-serif" font-size="9" fill="var(--text-muted)">יין ומיץ ענבים בלבד</text>

        <!-- 2. מזונות (right branch from אדמה) -->
        <rect x="295" y="135" width="185" height="44" rx="22" fill="var(--bg-card)" stroke="#B8860B" stroke-width="2.5"/>
        <text x="387" y="161" text-anchor="middle" font-family="Heebo,sans-serif" font-size="13" font-weight="700" fill="#B8860B">בּוֹרֵא מִינֵי מְזוֹנוֹת</text>
        <text x="387" y="175" text-anchor="middle" font-family="Heebo,sans-serif" font-size="9" fill="var(--text-muted)">עוגות, פסטה, בורקס, דגני בוקר</text>

        <!-- 1. המוציא (crown, top) -->
        <rect x="195" y="38" width="210" height="48" rx="24" fill="var(--bg-card)" stroke="var(--primary)" stroke-width="3"/>
        <text x="300" y="65" text-anchor="middle" font-family="Heebo,sans-serif" font-size="14" font-weight="800" fill="var(--primary)">הַמּוֹצִיא לֶחֶם מִן הָאָרֶץ</text>
        <text x="300" y="81" text-anchor="middle" font-family="Heebo,sans-serif" font-size="9" fill="var(--text-muted)">לחם – פוטר את כל הסעודה</text>

        <!-- Height labels on right side -->
        <text x="520" y="456" text-anchor="end" font-family="Heebo,sans-serif" font-size="9" fill="var(--text-muted)">ש ⑥</text>
        <text x="520" y="360" text-anchor="end" font-family="Heebo,sans-serif" font-size="9" fill="var(--text-muted)">א ⑤</text>
        <text x="10" y="286" text-anchor="start" font-family="Heebo,sans-serif" font-size="9" fill="var(--text-muted)">④ ע</text>
        <text x="10" y="215" text-anchor="start" font-family="Heebo,sans-serif" font-size="9" fill="var(--text-muted)">③ ג</text>
        <text x="520" y="161" text-anchor="end" font-family="Heebo,sans-serif" font-size="9" fill="var(--text-muted)">מ ②</text>
        <text x="520" y="65" text-anchor="end" font-family="Heebo,sans-serif" font-size="9" fill="var(--primary)">ה ①</text>

        <!-- Bottom label -->
        <text x="270" y="500" text-anchor="middle" font-family="Heebo,sans-serif" font-size="10" fill="var(--text-muted)">🌱 גזע = הכללי ביותר &nbsp;&nbsp;&nbsp; 🌿 צמרת = הספציפי ביותר</text>
        <text x="270" y="515" text-anchor="middle" font-family="Heebo,sans-serif" font-size="10" fill="var(--primary)" font-weight="600">סדר הקדימויות (מלמעלה): ה-מ-ג-ע-א-ש = "המגע אש"</text>
    </svg>
    </div>

    <div class="highlight-box success">
        <div class="highlight-box-title">💡 הכלל: מלמטה למעלה</div>
        <strong>בדיעבד</strong>, ברכה כללית פוטרת ברכה ספציפית – למשל, "שהכל" פוטרת הכל.<br>
        <strong>לכתחילה</strong>, תמיד מברכים את הברכה הכי ספציפית: על תפוח – "העץ" ולא "האדמה". על לחם – "המוציא" ולא "מזונות".
    </div>

    <div class="highlight-box">
        <div class="highlight-box-title">📌 סדר הלימוד שלנו</div>
        נתחיל מ<strong>ארבע הברכות הפשוטות</strong> – מזונות, העץ, האדמה ושהכל – שכללי הברכה בהן ברורים ופשוטים. לאחר מכן נעבור לשתי <strong>ברכות מיוחדות</strong> – הגפן והמוציא – שיש בהן כללים ייחודיים, מחלוקות, ודינים מורכבים יותר.
    </div>`
},
// שקף 12 - Mezonot
{
    title: "ברכת מזונות",
    menu: "מזונות",
    section: "ברכות ראשונות – ארבע הברכות הפשוטות",
    content: `
    <div class="slide-header">        <h1>ברכת בורא מיני מזונות</h1>
        <div class="subtitle">על מאפים ותבשילי דגן שאינם לחם</div>
    </div>

    <div class="bracha-text">בָּרוּךְ אַתָּה ה' אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, בּוֹרֵא מִינֵי מְזוֹנוֹת</div>

    <div class="section-title">מתי מברכים?</div>
    <p>על כל מאכל העשוי מקמח של <strong>חמשת מיני דגן</strong> (חיטה, שעורה, כוסמין, שיבולת שועל, שיפון) – <strong>שאין לו צורת לחם</strong>.</p>

    <div class="section-title">דוגמאות</div>
    <div class="cards-grid">
        <div class="card">
            <div class="card-icon">🍰</div>
            <div class="card-title">עוגות ועוגיות</div>
            <div class="card-text">מאפים מתוקים מקמח דגן</div>
        </div>
        <div class="card">
            <div class="card-icon">🥐</div>
            <div class="card-title">בורקס ומאפים</div>
            <div class="card-text">מאפים ממולאים, קרואסון, דניש</div>
        </div>
        <div class="card">
            <div class="card-icon">🍝</div>
            <div class="card-title">פסטה ואטריות</div>
            <div class="card-text">כל סוגי הפסטה, קוסקוס, שקדי מרק</div>
        </div>
        <div class="card">
            <div class="card-icon">🥣</div>
            <div class="card-title">דגני בוקר</div>
            <div class="card-text">קורנפלקס, גרנולה ודגני בוקר העשויים מדגן</div>
        </div>
    </div>

    <div class="section-title">הקשר לברכת "האדמה"</div>
    <p>מיני הדגן מקורם בקרקע – ובמצבם הגולמי ברכתם "האדמה". <strong>הכוסס חיטה חיה</strong> (גרגירי חיטה שלמים שלא בושלו) – מברך "בורא פרי האדמה" ולא "מזונות" (שו"ע רח, ד). רק כאשר הדגן עובר <strong>עיבוד</strong> (טחינה, אפייה, בישול) – ברכתו עולה ל"מזונות" או "המוציא".</p>

    <div class="example-box">
        <div class="example-label">🍚 אורז – דוגמה מיוחדת</div>
        <p>אורז אינו מחמשת מיני דגן, ומצד הכללים היה צריך להישאר ב"האדמה". אך בגלל חשיבותו כמאכל מזין ומשביע, ברכתו כשהוא מבושל <strong>"מזונות"</strong> (שו"ע רח, ז). אורז חי (כוסס גרגירים) – ברכתו "האדמה".<br><br><strong>שימו לב:</strong> אורז אינו דגן אמיתי – ולכן ברכתו האחרונה היא <strong>"בורא נפשות"</strong> ולא "על המחיה" כמו מזונות מחמשת מיני דגן.</p>
    </div>

    <div class="highlight-box">
        <div class="highlight-box-title">⚖️ כלל בדיעבד</div>
        מי שבירך בטעות "האדמה" על מאכל דגן – <strong>יצא ידי חובה בדיעבד</strong>, כי מיני הדגן מקורם באדמה. (דומה לכלל ש"האדמה" פוטרת "העץ" בדיעבד.)
    </div>

    <div class="highlight-box warning">
        <div class="highlight-box-title">⚠️ מתי "מזונות" הופך ל"המוציא"?</div>
        אם אוכלים כמות גדולה של מזונות וקובעים עליהם סעודה – יש ליטול ידיים, לברך "המוציא" ולברך ברכת המזון. השיעור הוא כ-230 גרם. על כך נרחיב בשקפי "המוציא".
    </div>`
},
// שקף 13 - HaEtz
{
    title: "ברכת העץ",
    menu: "העץ",
    section: "ברכות ראשונות – ארבע הברכות הפשוטות",
    content: `
    <div class="slide-header">        <h1>ברכת בורא פרי העץ</h1>
        <div class="subtitle">הברכה על פירות העץ</div>
    </div>

    <div class="bracha-text">בָּרוּךְ אַתָּה ה' אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, בּוֹרֵא פְּרִי הָעֵץ</div>

    <div class="section-title">הכלל: מה נחשב "פרי העץ"?</div>
    <p>פרי שגדל על עץ רב-שנתי, שגזעו מתקיים ומתעצם משנה לשנה ומוציא פירות חדשים בכל עונה.</p>

    <div class="section-title">דוגמאות נפוצות</div>
    <p>תפוח · אגס · תפוז · לימון · שזיף · אפרסק · מנגו · אבוקדו · זיתים · תמרים · ענבים · תאנים · רימונים · אגוזי מלך · שקדים · פקאן</p>

    <div class="section-title">מקרים מיוחדים ומפתיעים</div>
    <div class="cards-grid">
        <div class="card">
            <div class="card-icon">🍌</div>
            <div class="card-title">בננה – "האדמה"!</div>
            <div class="card-text">אף שהצמח נראה כעץ גבוה, גזעו אינו מתקיים משנה לשנה, ולכן ברכתו <strong>"האדמה"</strong>.</div>
        </div>
        <div class="card">
            <div class="card-icon">🌵</div>
            <div class="card-title">צבר (סברס) – מחלוקת</div>
            <div class="card-text">מחלוקת: יש אומרים "העץ" (גזעו מתקיים), ויש אומרים "האדמה". למעשה – <strong>ספק ברכות להקל: מברכים "האדמה"</strong> (ילקו"י; פרי האדמה ח"א).</div>
        </div>
        <div class="card">
            <div class="card-icon">🫐</div>
            <div class="card-title">פירות מיובשים</div>
            <div class="card-text">צימוקים, משמשים מיובשים, תמרים מיובשים – <strong>נשארים בברכתם המקורית</strong> ("העץ"), כי הפרי לא איבד את זהותו.</div>
        </div>
        <div class="card">
            <div class="card-icon">🔪</div>
            <div class="card-title">פירות חתוכים</div>
            <div class="card-text">סלט פירות, פרוסות תפוח, קוביות מנגו – <strong>נשארים בברכתם</strong>. חיתוך אינו משנה את הברכה כל עוד מזהים את הפרי.</div>
        </div>
    </div>

    <div class="highlight-box">
        <div class="highlight-box-title">⚖️ כלל חשוב – "האדמה" פוטרת "העץ" בדיעבד</div>
        אם בירך "האדמה" על פרי עץ – יצא בדיעבד, כי כל עץ גם גדל מן האדמה. אבל אם בירך "העץ" על ירק – לא יצא.
    </div>`
},
// שקף 14 - HaAdama
{
    title: "ברכת האדמה",
    menu: "האדמה",
    section: "ברכות ראשונות – ארבע הברכות הפשוטות",
    content: `
    <div class="slide-header">        <h1>ברכת בורא פרי האדמה</h1>
        <div class="subtitle">הברכה על ירקות, קטניות ופירות הגדלים בקרקע</div>
    </div>

    <div class="bracha-text">בָּרוּךְ אַתָּה ה' אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, בּוֹרֵא פְּרִי הָאֲדָמָה</div>

    <div class="section-title">הכלל</div>
    <p>כל צמח חד-שנתי, או שגזעו אינו מתקיים משנה לשנה – ברכתו "בורא פרי האדמה".</p>

    <div class="section-title">דוגמאות</div>
    <div class="cards-grid">
        <div class="card">
            <div class="card-icon">🥕</div>
            <div class="card-title">ירקות</div>
            <div class="card-text">גזר, מלפפון, עגבנייה, חסה, פלפל, חציל, קולורבי</div>
        </div>
        <div class="card">
            <div class="card-icon">🫘</div>
            <div class="card-title">קטניות</div>
            <div class="card-text">חומוס, עדשים, שעועית, בוטנים</div>
        </div>
        <div class="card">
            <div class="card-icon">🍉</div>
            <div class="card-title">פירות אדמה</div>
            <div class="card-text">אבטיח, מלון, תות שדה, אננס, בננה</div>
        </div>
        <div class="card">
            <div class="card-icon">🌱</div>
            <div class="card-title">אחרים</div>
            <div class="card-text">תפוח אדמה, בטטה, תירס</div>
        </div>
    </div>

    <div class="example-box">
        <div class="example-label">💡 בוטנים</div>
        <p>למרות שנקראים "אגוזים" – בוטנים גדלים באדמה (הם קטניות) וברכתם "האדמה".</p>
    </div>`
},
// שקף 15 - SheHakol
{
    title: "ברכת שהכל",
    menu: "שהכל",
    section: "ברכות ראשונות – ארבע הברכות הפשוטות",
    content: `
    <div class="slide-header">        <h1>ברכת שהכל נהיה בדברו</h1>
        <div class="subtitle">הברכה הכללית – "רשת הביטחון"</div>
    </div>

    <div class="bracha-text">בָּרוּךְ אַתָּה ה' אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, שֶׁהַכֹּל נִהְיָה בִּדְבָרוֹ</div>

    <div class="section-title">מתי מברכים "שהכל"?</div>
    <ol class="num-list">
        <li><strong>מים</strong> (כשצמא ונהנה)</li>
        <li><strong>בשר, עוף ודגים</strong></li>
        <li><strong>ביצים</strong></li>
        <li><strong>מוצרי חלב</strong> – חלב, גבינה, יוגורט</li>
        <li><strong>שוקולד וממתקים</strong></li>
        <li><strong>משקאות</strong> – קפה, תה, מיצים (חוץ ממיץ ענבים), משקאות קלים</li>
        <li><strong>מאכלים מעובדים</strong> שאיבדו את צורתם המקורית (כמו מרק מסונן)</li>
    </ol>

    <div class="highlight-box success">
        <div class="highlight-box-title">✅ רשת ביטחון</div>
        אם לא יודעים מה לברך על מאכל מסוים – "שהכל" פוטר כל מאכל בדיעבד (פניני הלכה ברכות ט, ד). אבל לכתחילה, צריך לברך את הברכה המדויקת.
    </div>

    <div class="source-box">
        <div class="source-label">📖 פניני הלכה ברכות, פרק ט</div>
        ברכת "שהכל" היא הברכה הכללית ביותר – "שהכל נהיה בדברו" – כלומר, הכל נברא בדיבורו של הקב"ה. בדיעבד, המברך "שהכל" על כל מאכל – יצא ידי חובתו.
    </div>`
},
// שקף 16 - Shinui Tzura + Kedarko
{
    title: "שינוי צורה, עיבוד ודרך אכילה",
    menu: "שינוי צורה, עיבוד ודרך אכילה",
    section: "ברכות ראשונות – ארבע הברכות הפשוטות",
    content: `
    <div class="slide-header">        <h1>שינוי צורה, עיבוד ודרך אכילה</h1>
        <div class="subtitle">מתי העיבוד או דרך האכילה משנים את הברכה?</div>
    </div>

    <p>ברכת המאכל אינה "תווית" קבועה. היא נקבעת לפי שלושה גורמים: <strong>מקור המאכל</strong> (עץ, אדמה, דגן), <strong>צורתו</strong> (שלם, חתוך, מרוסק, סחוט), ו<strong>דרך אכילתו המקובלת</strong> (חי או מבושל). שני הכללים הבאים מנחים אותנו:</p>

    <div class="two-cols">
        <div class="highlight-box success" style="margin:0;">
            <div class="highlight-box-title">כלל 1: שינוי צורה</div>
            כל עוד עדיין <strong>קוראים למאכל בשם המקורי</strong> – ברכתו נשמרת. כשאיבד את שמו וזהותו – ברכתו יורדת ל"שהכל".<br>
            <em>שימו לב: ריסוק <strong>מלא</strong> הוא נושא שנוי במחלוקת – ראו בטבלת המקרים הגבוליים את הדיון ברסק תפוחים ובפירה.</em>
        </div>
        <div class="highlight-box warning" style="margin:0;">
            <div class="highlight-box-title">כלל 2: "כדרכו"</div>
            מאכל שנאכל <strong>שלא כדרך הרגילה</strong> (למשל, חי כשנהוג לבשלו) – ברכתו יורדת ל"שהכל". מה נחשב "רגיל" תלוי במנהג המקום והזמן.
        </div>
    </div>

    <div class="section-title">שינוי צורה – הברכה נשמרת</div>
    <div class="table-container">
        <table>
            <thead><tr><th>מצב</th><th>דוגמאות</th><th>ברכה</th></tr></thead>
            <tbody>
                <tr><td>✅ חיתוך</td><td>סלט פירות, פרוסות תפוח</td><td>כברכתו – הפרי ניכר</td></tr>
                <tr><td>✅ ייבוש</td><td>צימוקים, משמשים מיובשים</td><td>כברכתו – שומר זהותו</td></tr>
                <tr><td>✅ בישול</td><td>תפוח אפוי (גם בתוך עוף!), ירקות מבושלים</td><td>כברכתו – בישול לא מבטל</td></tr>
                <tr><td>✅ ריסוק חלקי</td><td>מחית בננה לתינוקות, גואקמולה</td><td>כברכתו – הפרי ניכר במוצר הסופי</td></tr>
            </tbody>
        </table>
    </div>

    <div class="section-title">שינוי צורה – מקרים גבוליים</div>
    <div class="table-container">
        <table>
            <thead><tr><th>מאכל</th><th>ברכה</th><th>מדוע?</th></tr></thead>
            <tbody>
                <tr><td>🥜 <strong>ממתק שומשום</strong> (גרגירים שלמים)</td><td><strong>האדמה</strong></td><td>שלם וניכר – עדיין "שומשום"</td></tr>
                <tr style="background:var(--warning-bg)"><td>🥜 <strong>טחינה / חלווה</strong></td><td><strong>שהכל</strong></td><td>נטחן לגמרי – כבר לא "שומשום" (פנה"ל ח, ב)</td></tr>
                <tr style="background:var(--warning-bg)"><td>🥜 <strong>חמאת בוטנים</strong></td><td><strong>שהכל</strong></td><td>נטחנו ונמסו – כבר לא "בוטנים"</td></tr>
                <tr style="background:var(--warning-bg)"><td>🟤 <strong>לדר</strong> (דף פרי מיובש)</td><td><strong>שהכל</strong></td><td>רוסק + טעמים חדשים – כבר לא "משמש" (רב פעלים ב, כח)</td></tr>
                <tr><td>🍫 <strong>מרציפן</strong></td><td><strong>שהכל</strong></td><td>שקדים נטחנו לגמרי – מוצר חדש (פנה"ל ח, ב)</td></tr>
                <tr><td>🍓 <strong>ריבה עם חתיכות</strong></td><td><strong>העץ</strong></td><td>חתיכות ניכרות – מברכים עליהן</td></tr>
                <tr style="background:var(--warning-bg)"><td>🍓 <strong>ריבה חלקה</strong></td><td><strong>שהכל</strong></td><td>רוסק לחלוטין – לא ניכר</td></tr>
                <tr><td>🍅 <strong>רסק עגבניות</strong></td><td><strong>שהכל</strong></td><td>רוסק + ייעודו להטעמת תבשילים (פנה"ל ח, ב)</td></tr>
                <tr><td>🧃 <strong>מיץ תפוזים</strong></td><td><strong>שהכל</strong></td><td>הפך ממאכל למשקה</td></tr>
                <tr style="background:var(--info-bg)"><td>🍎 <strong>רסק תפוחים</strong></td><td><strong>מחלוקת</strong></td><td>פנה"ל ח, ב: <strong>העץ</strong> – מוצר מוכר הנקרא בשם הפרי. פוסקים אשכנזים רבים: <strong>שהכל</strong> – תפוחים נאכלים בדרך כלל שלמים, ולא דרכם ריסוק (שו"ע רב, ז)</td></tr>
                <tr style="background:var(--info-bg)"><td>🥔 <strong>פירה (תפוחי אדמה מעוכים)</strong></td><td><strong>מחלוקת</strong></td><td>ילקוט יוסף: <strong>האדמה</strong> – עדיין מזוהה כתפוח אדמה. פוסקים אשכנזים רבים: <strong>שהכל</strong> – תפוח האדמה נאכל בדרך כלל שלם, לא כמחית (מ"ב רב, לד)</td></tr>
                <tr style="background:var(--correct-bg)"><td>🍷 <strong>מיץ ענבים / יין</strong></td><td><strong>הגפן!</strong></td><td>חריג: חכמים ייחדו ליין ברכה משלו</td></tr>
            </tbody>
        </table>
    </div>

    <div class="section-title">"כדרכו" – אכילה שלא כדרך הרגילה</div>
    <div class="table-container">
        <table>
            <thead><tr><th>מאכל</th><th>כדרכו</th><th>שלא כדרכו</th></tr></thead>
            <tbody>
                <tr><td>🥔 תפוח אדמה</td><td>מבושל → <strong>האדמה</strong></td><td>חי → <strong>שהכל</strong></td></tr>
                <tr><td>🌽 תירס</td><td>מבושל → <strong>האדמה</strong></td><td>חי (גרגירים קשים) → <strong>שהכל</strong></td></tr>
                <tr><td>🍿 פופקורן</td><td colspan="2">→ <strong>האדמה</strong> – גרגיר שלם שתפח בחום. אך <strong>במבה</strong> (תירס שרוסק ועובד) → <strong>שהכל</strong> (פנה"ל ח, ב) / <strong>האדמה</strong> (ילקוט יוסף ר"ג, ה)</td></tr>
                <tr><td>🍚 אורז</td><td>מבושל → <strong>מזונות</strong></td><td>חי → <strong>האדמה</strong></td></tr>
                <tr><td>🌾 חיטה</td><td>אפויה → <strong>מזונות/המוציא</strong></td><td>אכילה חיה → <strong>האדמה</strong> (שו"ע רח, ד)</td></tr>
            </tbody>
        </table>
    </div>

    <div class="example-box">
        <div class="example-label">🥕 המנהג קובע! דוגמת הגזר</div>
        <p>לפני כחמישים שנה, באירופה, לא נהגו לאכול גזר חי. מי שכסס גזר חי היה מברך <strong>"שהכל"</strong> – אכילה שלא כדרכה. כיום, שנהוג לאכול גזר חי בסלטים וכחטיף, ברכתו <strong>"האדמה"</strong> גם כשהוא חי. הכלל ההלכתי לא השתנה, אבל סיווג המאכל השתנה בהתאם למנהג.</p>
    </div>

    <div class="section-title">כבישה – הכבוש שומר על ברכת מקורו</div>
    <p>כבישה – חימוץ, השרייה במלח, שמן או חומץ – אינה משנה את ברכת המאכל, כל עוד הוא עדיין ניכר וראוי לאכילה. הכלל: <strong>הברכה אינה נקבעת לפי אופן ההכנה אלא לפי זהות המאכל</strong>, וירק שכבשו עדיין נחשב אותו ירק.</p>
    <div class="table-container">
        <table>
            <thead><tr><th>מאכל</th><th>ברכה</th><th>הערה</th></tr></thead>
            <tbody>
                <tr><td>🥒 מלפפון חמוץ (כבוש)</td><td><strong>האדמה</strong></td><td>ניכר וראוי לאכילה – כמלפפון רגיל</td></tr>
                <tr><td>🫒 זיתים כבושים / מלוחים</td><td><strong>העץ</strong></td><td>גם כשהם מרירים ומלוחים – עדיין "זיתים"</td></tr>
                <tr><td>🥬 כרוב כבוש (זאוּרקרוט)</td><td><strong>האדמה</strong></td><td>הוחמץ ושמר את צורתו ושמו</td></tr>
                <tr><td>🫑 פלפל כבוש</td><td><strong>האדמה</strong></td><td>ניכר כפלפל – צורתו לא נשתנתה</td></tr>
                <tr><td>🥕 גזר כבוש</td><td><strong>האדמה</strong></td><td>כגזר מבושל – ברכתו נשמרת</td></tr>
                <tr style="background:var(--warning-bg)"><td>⚠️ ירק שהתרכך לחלוטין</td><td><strong>שהכל</strong></td><td>כאשר הכבישה שינתה את המאכל עד שאינו ניכר ואיבד את צורתו לגמרי</td></tr>
            </tbody>
        </table>
    </div>
    <div class="highlight-box success" style="margin-top:12px; margin-bottom:16px;">
        <div class="highlight-box-title">💡 הכלל המעשי</div>
        פירות וירקות כבושים מברכים עליהם כעל פירות וירקות רגילים – <strong>העץ</strong> על פרי העץ הכבוש, <strong>האדמה</strong> על ירק הכבוש. הכבישה מהווה רק שיטת שימור, ואינה יוצרת מאכל חדש.
    </div>

    <div class="source-box">
        <div class="source-label">📖 שו"ע או"ח רב, ז; פניני הלכה ברכות ח, ב; ילקוט יוסף, הלכות ברכות, סי' רב</div>
        הברכה על ירק כבוש כברכת הירק הרגיל, כל עוד הוא ניכר ועומד לאכילה. ספק – יברך שהכל.
    </div>

    <div class="source-box">
        <div class="source-label">📖 פניני הלכה ברכות ח, ב; שו"ע רח, ד; רב פעלים ח"ב סי' כ"ח</div>
        הכל תלוי ב"דעת בני אדם": אם המאכל עדיין נתפס כאותו פרי – ברכתו כבראשונה. אם איבד את שמו, צורתו וטעמו – ברכתו "שהכל". ואם נאכל שלא כדרכו הרגילה – ברכתו יורדת.
    </div>`
},
// שקף 17 - HaGefen
{
    title: "ברכת הגפן",
    menu: "הגפן",
    section: "ברכות ראשונות – ברכות מיוחדות",
    content: `
    <div class="slide-header">        <h1>ברכת בורא פרי הגפן</h1>
        <div class="subtitle">ברכה מיוחדת ליין – בזכות מעמדו ההלכתי</div>
    </div>

    <div class="bracha-text">בָּרוּךְ אַתָּה ה' אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, בּוֹרֵא פְּרִי הַגָּפֶן</div>

    <div class="example-box">
        <div class="example-label">🔤 הגייה</div>
        <p>ספרדים מנקדים <strong>"הַגֶּפֶן"</strong> (בסגול תחת הגימ"ל). אשכנזים ותימנים מנקדים <strong>"הַגָּפֶן"</strong> (בקמץ תחת הגימ"ל) – ומבטאים בהתאם למבטא שלהם.</p>
    </div>

    <div class="section-title">למה ליין יש ברכה מיוחדת?</div>
    <p>מצד הגידול, יין הוא מיץ ענבים – פרי עץ. מדוע לא מברכים עליו "העץ"? חכמים ייחדו ליין ברכה משלו בגלל מעמדו המיוחד: הוא משמח ומשמש בקידוש, הבדלה, שבע ברכות, ברית מילה, וארבע כוסות של פסח.</p>

    <div class="section-title">מה כולל?</div>
    <div class="two-cols">
        <div class="card">
            <div class="card-title">✅ "הגפן"</div>
            <div class="card-text">יין אדום ולבן · יין יבש ומתוק · מיץ ענבים טבעי 100% · יין מבושל</div>
        </div>
        <div class="card">
            <div class="card-title">🚫 לא "הגפן"</div>
            <div class="card-text">ענבים שלמים – "העץ" · צימוקים – "העץ" · חומץ יין – <strong>אין ברכה כלל</strong> (מזיק לגוף; שו"ע רד, ב) · משקאות עם מעט מיץ ענבים – "שהכל"</div>
        </div>
    </div>

    <div class="section-title">כללים מיוחדים ליין</div>
    <div class="cards-grid">
        <div class="card">
            <div class="card-icon">💧</div>
            <div class="card-title">יין מזוג (מהול במים)</div>
            <div class="card-text">בזמן חז"ל שתו יין מהול במים. כיום, יין שמהלו במים – ברכתו "הגפן" רק אם נשאר לפחות 50% יין. אשכנזים מקילים יותר בשיעור זה.</div>
        </div>
        <div class="card">
            <div class="card-icon">🍷</div>
            <div class="card-title">פוטר כל משקה</div>
            <div class="card-text">ברכת "הגפן" על יין פוטרת את כל המשקאות שלאחריו, אם היה בדעתו לשתות עוד משקאות. לכן בקידוש, אחרי היין אין צריך לברך על מים או מיץ בסעודה.</div>
        </div>
        <div class="card">
            <div class="card-icon">🥂</div>
            <div class="card-title">יין בתוך סעודה</div>
            <div class="card-text">גם בתוך סעודה (אחרי "המוציא"), יין דורש ברכה נפרדת – "הגפן". ברכת "המוציא" אינה פוטרת אותו, בגלל חשיבותו המיוחדת.</div>
        </div>
        <div class="card">
            <div class="card-icon">📖</div>
            <div class="card-title">ברכה אחרונה</div>
            <div class="card-text">אחרי שתיית יין (רביעית = כ-86 מ"ל), מברכים ברכה מעין שלוש: "על הגפן ועל פרי הגפן" – ולא "בורא נפשות".</div>
        </div>
    </div>`
},
// שקף 18 - HaMotzi: Definition of bread
{
    title: "המוציא – הגדרת לחם",
    menu: "המוציא (א): הגדרת לחם",
    section: "ברכות ראשונות – ברכות מיוחדות",
    content: `
    <div class="slide-header">        <h1>ברכת המוציא – מהו לחם?</h1>
        <div class="subtitle">הגדרת לחם ומחלוקות עיקריות</div>
    </div>

    <div class="bracha-text">בָּרוּךְ אַתָּה ה' אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, הַמּוֹצִיא לֶחֶם מִן הָאָרֶץ</div>

    <div class="section-title">הגדרת לחם</div>
    <p>"לחם" בהלכה הוא מאפה העשוי מקמח של <strong>חמשת מיני דגן</strong> (חיטה, שעורה, כוסמין, שיבולת שועל, שיפון), שנילוש במים ונאפה בתנור, <strong>שצורתו כלחם</strong> ושדרך בני אדם לקבוע עליו סעודה.</p>
    <p>כולל: לחם לבן, לחם מלא, פיתות, חלות, לחמניות, באגט ועוד.</p>

    <div class="section-title">מחלוקת: חלה מתוקה ומצה</div>
    <p>כמה מהמחלוקות המפורסמות בהלכות ברכות נוגעות לגבול בין "המוציא" ל"מזונות". מאחורי המחלוקות עומד הבדל עקרוני בגישה:</p>

    <div class="highlight-box">
        <div class="highlight-box-title">⚖️ שתי גישות – מה קובע אם מאפה הוא "לחם"?</div>
        <strong>גישת האשכנזים (רמ"א):</strong> הדגש על <strong>תפקיד המאפה בסעודה</strong> – אם משתמשים בו כלחם ואוכלים ממנו כחלק מסעודה, הוא נחשב לחם וברכתו "המוציא", גם אם טעמו מתוק או מרקמו שונה.<br><br>
        <strong>גישת הספרדים (שו"ע):</strong> הדגש על <strong>טעם ומרקם המאפה</strong> – אם טעמו שונה מלחם רגיל (מתוק, פריך, דק) אין לו דין לחם, וברכתו "מזונות", גם אם אוכלים אותו בסעודה.
    </div>

    <p>עיקרון זה מסביר את שתי המחלוקות הבאות:</p>

    <div class="section-title">חלה מתוקה</div>

    <div class="two-cols">
        <div class="card" style="border-right:4px solid #1565C0;">
            <div class="card-title">אשכנזים (רמ"א)</div>
            <div class="card-text">חלה מתוקה – ברכתה <strong>"המוציא"</strong>, כי היא משמשת כלחם בסעודות שבת ובארוחות.<br><br>רק אם נילושה ב<strong>רוב</strong> מי פירות (מתוקה מאוד, כעוגה ממש) – ברכתה "מזונות".</div>
        </div>
        <div class="card" style="border-right:4px solid #E65100;">
            <div class="card-title">ספרדים (שו"ע)</div>
            <div class="card-text">חלה שמרגישים בה <strong>טעם מתיקות</strong> – ברכתה <strong>"מזונות"</strong>, כי טעמה שונה מלחם רגיל.<br><br>ו"המוציא" רק אם קובעים עליה סעודה (כ-230 גרם). (שו"ע קס"ח, ז; חזון עובדיה ברכות נ"ה)</div>
        </div>
    </div>

    <div class="section-title">מצה שלא בפסח</div>
    <div class="two-cols">
        <div class="card" style="border-right:4px solid #1565C0;">
            <div class="card-title">אשכנזים</div>
            <div class="card-text">מצה רגילה (קמח ומים) = <strong>"המוציא"</strong> – היא לחם לכל דבר, גם מחוץ לפסח.</div>
        </div>
        <div class="card" style="border-right:4px solid #E65100;">
            <div class="card-title">חלק מהספרדים</div>
            <div class="card-text">מצה רגילה מחוץ לפסח = <strong>"מזונות"</strong> – אין לה מרקם של לחם (דקה ופריכה), ולא רגילים לקבוע עליה סעודה.</div>
        </div>
    </div>

    <div class="highlight-box success">
        <div class="highlight-box-title">📌 ובפסח?</div>
        בפסח, כאשר <strong>אין לחם אחר</strong> והמצה משמשת כלחם הסעודה – גם לספרדים ברכתה <strong>"המוציא"</strong>. התפקיד קובע כשאין חלופה.
    </div>

    <div class="example-box">
        <div class="example-label">📋 מצה עשירה</div>
        <p>מצה שנילושה עם מיץ פירות או ביצים (ולא מים) – ברכתה <strong>"מזונות"</strong> לכל הדעות, ו"המוציא" רק אם קובעים עליה סעודה. בפסח, אשכנזים אינם אוכלים מצה עשירה כלל (חוץ מחולים וזקנים).</p>
    </div>`
},
// שקף 19 - HaMotzi: Disputes and exceptions
{
    title: "המוציא – מקרים מיוחדים",
    menu: "המוציא (ב): מקרים מיוחדים",
    section: "ברכות ראשונות – ברכות מיוחדות",
    content: `
    <div class="slide-header">        <h1>המוציא – גבול מזונות/המוציא</h1>
        <div class="subtitle">מתי מאפה דגן עולה מ"מזונות" ל"המוציא"?</div>
    </div>

    <div class="section-title">הכלל: קביעת סעודה</div>
    <p>כל מאכל מדגן שרגילים לאכול כ"נשנוש" – ברכתו "מזונות". אבל אם <strong>קובעים עליו סעודה</strong> – מברכים "המוציא", נוטלים ידיים, ומברכים ברכת המזון.</p>

    <div class="section-title">מה השיעור?</div>
    <p>השיעור נקרא <strong>"אכילת פרס"</strong> – כמות הלחם שרוב בני אדם אוכלים בסעודה רגילה. בגמרא (עירובין פב, ב) שיעור זה הוא <strong>ארבע ביצים</strong>, ולמעשה:</p>

    <div class="table-container">
        <table>
            <thead><tr><th>דעה</th><th>שיעור</th><th>הסבר</th></tr></thead>
            <tbody>
                <tr><td>שיעור ד' ביצים (ר' חיים נאה)</td><td><strong>~216 גרם</strong></td><td>72 דרהם × 3 גרם – שיעור מקובל אצל ספרדים</td></tr>
                <tr><td>להחמיר (חזון עובדיה)</td><td><strong>~230 גרם</strong></td><td>"וטוב להחמיר שיאכל כ-230 גרם"</td></tr>
                <tr><td>אשכנזים</td><td><strong>~200 מ"ל נפח</strong></td><td>מודדים לפי נפח, לא משקל – ד' ביצים בנפח</td></tr>
            </tbody>
        </table>
    </div>

    <div class="highlight-box warning">
        <div class="highlight-box-title">⚠️ "אזור אפור" ומה עושים בספק</div>
        בין <strong>173 ל-230 גרם</strong> יש ספק: לדעות מסוימות כבר קבעת סעודה, לאחרות עדיין לא. <strong>לכתחילה עדיף להימנע</strong> מלאכול כמות שבאזור הזה. אם כבר אכל כמות כזו – <strong>ספק ברכות להקל</strong>: מברך "על המחיה" (ולא ברכת המזון).<br><br>
        <strong>חשוב:</strong> השיעור נמדד מ<strong>מאפה הדגן בלבד</strong>, ללא מילוי (גבינה, שוקולד וכו'). אכל 100 גרם עוגה + 200 גרם סלט = עדיין רק 100 גרם מזונות.
    </div>

    <div class="section-title">דוגמאות מעשיות</div>
    <div class="table-container">
        <table>
            <thead><tr><th>מאכל</th><th>חתיכה אחת</th><th>קביעת סעודה (~230 גרם מאפה)</th></tr></thead>
            <tbody>
                <tr><td>🍕 פיצה</td><td>פרוסה אחת (~80 גר') → מזונות</td><td>3+ פרוסות → המוציא</td></tr>
                <tr><td>🥐 בורקס</td><td>בורקס אחד (~60 גר') → מזונות</td><td>4-5 בורקסים → המוציא</td></tr>
                <tr><td>🍰 עוגה</td><td>פרוסה (~50 גר') → מזונות</td><td>4-5 פרוסות → המוציא</td></tr>
                <tr><td>🥯 בייגלה</td><td>אחד (~70 גר') → מזונות</td><td>3+ בייגלות → המוציא</td></tr>
            </tbody>
        </table>
    </div>

    <div class="source-box">
        <div class="source-label">📖 ברכות מב, א; שו"ע קס"ח, ו; פניני הלכה ברכות ו, ג-ד; חזון עובדיה ברכות</div>
        "כל שאחרים קובעים עליו סעודה – צריך לברך" (ברכות מב, א). עיסה שנילושה על דעת לבשלה או לטגנה – אפילו אם אוכל ממנה כדי שביעה, ברכתה "מזונות" ו"על המחיה" (ילקוט יוסף). אבל מאפה אפוי בתנור – אם קובע סעודה, מברך "המוציא".
    </div>`
},
// שקף 20 - Bread after further processing
{
    title: "המוציא – לחם מבושל, מטוגן וקלוי",
    menu: "המוציא (ג): מבושל, מטוגן וקלוי",
    section: "ברכות ראשונות – ברכות מיוחדות",
    content: `
    <div class="slide-header">
        <h1>לחם שעבר עיבוד נוסף</h1>
        <div class="subtitle">מתי לחם שנאפה יורד מ"המוציא" – שני כללים ומחלוקות</div>
    </div>

    <div class="two-cols">
        <div class="highlight-box success" style="margin:0;">
            <div class="highlight-box-title">כלל 1 – ניכרות (לכולם)</div>
            לחם שניכר כלחם שומר על "המוציא". לחם שאיבד צורתו לחלוטין ואינו ניכר – ברכתו "שהכל" (או ברכת התבשיל שבו נמצא).
        </div>
        <div class="highlight-box warning" style="margin:0;">
            <div class="highlight-box-title">כלל 2 – שיעור כזית בתבשיל (ספרדים)</div>
            פיסת לחם הניכרת כלחם אך קטנה מ<strong>כזית</strong> (~27 גרם), כאשר היא בתוך תבשיל – לדעת השו"ע היא "בטלה" בתבשיל ומתברכת בברכתו. רמ"א: אם ניכרת – "המוציא" גם בפחות מכזית (שו"ע קסח, י; רמ"א שם).
        </div>
    </div>

    <div class="section-title">לחם קלוי – טוסט</div>
    <p>פרוסה שלמה קלויה (טוסט): <strong>המוציא לכל הדעות.</strong> הקלייה אינה משנה את מהות הלחם, צורתו ניכרת לחלוטין, והפרוסה ≥ כזית. (שו"ע קסח; פנה"ל ו)</p>

    <div class="section-title">קרוטונים ולחם בתוך מרק או תבשיל</div>
    <div class="table-container">
        <table>
            <thead><tr><th>מצב הפיסות</th><th>אשכנזים (רמ"א)</th><th>ספרדים (שו"ע)</th></tr></thead>
            <tbody>
                <tr><td>✅ ניכרות כלחם, כל פיסה ≥ כזית</td><td><strong>המוציא</strong></td><td><strong>המוציא</strong></td></tr>
                <tr style="background:var(--info-bg)"><td>⚠️ ניכרות כלחם, כל פיסה &lt; כזית</td><td><strong>המוציא</strong> – ברכה אחת, פוטרת גם את התבשיל</td><td><strong>ברכת התבשיל</strong> – ברכה אחת, פוטרת גם את הפיסות (שו"ע קסח, י)</td></tr>
                <tr style="background:var(--warning-bg)"><td>❌ אינן ניכרות (נימוחו לחלוטין)</td><td><strong>ברכת התבשיל</strong></td><td><strong>ברכת התבשיל</strong></td></tr>
            </tbody>
        </table>
    </div>
    <div class="example-box">
        <div class="example-label">📌 דוגמאות מעשיות</div>
        <p><strong>קרוטונים גדולים בסלט</strong> (כל קוביה ≥ כזית, ניכרת): <strong>המוציא לכולם.</strong><br>
        <strong>קרוטונים קטנים בתוך מרק</strong> (כל פיסה &lt; כזית): אשכנזים – <strong>המוציא</strong>; ספרדים – נפטרים בברכת המרק (<strong>שהכל</strong>).<br>
        <strong>פיסות שנימוחו ואינן ניכרות:</strong> ברכת התבשיל (<strong>שהכל</strong>) לכולם.</p>
    </div>

    <div class="section-title">פרנץ' טוסט – לחם מטוגן בביצה</div>
    <p>כאן אין שאלת כזית (פרוסה שלמה), אלא שאלה אם הטיגון בביצה יצר מוצר חדש:</p>
    <div class="two-cols">
        <div class="card">
            <div class="card-title">פרוסה שלמה: שתי דעות</div>
            <div class="card-text">
                <strong>אשכנזים ופניני הלכה (ו):</strong> <strong>המוציא</strong> – לחם גמור שנאפה, צורתו ניכרת, ואין הביצה מבטלת אותו.<br><br>
                <strong>ילקוט יוסף (סי' קסח):</strong> <strong>מזונות</strong> – הטבילה בביצה והטיגון שינו את מהות הלחם ויצרו מאכל חדש שאינו לחם.
            </div>
        </div>
        <div class="card" style="border-right:4px solid var(--accent);">
            <div class="card-title">💡 לצאת מהספק</div>
            <div class="card-text">לאכול פרנץ' טוסט כחלק מ<strong>סעודת לחם</strong>: לאחר ברכת "המוציא" על לחם, כל המאכלים שבאים עם הסעודה נפטרים ממילא – ואין צורך לברך בנפרד.</div>
        </div>
    </div>

    <div class="highlight-box warning" style="margin-top:14px;">
        <div class="highlight-box-title">⚠️ נושא מורכב – יש דעות נוספות</div>
        הדינים שלעיל הם עיקרי הפסיקה. בפועל, כל אחד מהמקרים שנוי במחלוקת ראשונים ואחרונים, ויש פוסקים הנוקטים עמדות שונות. בשאלות מעשיות הכרוכות בספק – יש לשאול רב.
    </div>

    <div class="source-box">
        <div class="source-label">📖 שו"ע קסח, י (כזית בתבשיל); שו"ע קסח, יג (פת שנתבשלה); מ"ב קסח; פניני הלכה ברכות ו; ילקוט יוסף, הלכות ברכות, סי' קסח</div>
        שו"ע קסח, י: פת שנפלה לתבשיל ואין בה כזית – בטלה בתבשיל (לספרדים). רמ"א: אם ניכרת – המוציא. שו"ע קסח, יג: פת שנתבשלה ועדיין ניכרת – המוציא; נימוחה – ברכת התבשיל.
    </div>`
},
// שקף 21 - HaMotzi as meal opener
{
    title: "המוציא – פותחת סעודה",
    menu: "המוציא (ד): פותחת סעודה",
    section: "ברכות ראשונות – ברכות מיוחדות",
    content: `
    <div class="slide-header">        <h1>המוציא – פותחת סעודה</h1>
        <div class="subtitle">למה ברכת "המוציא" פוטרת את כל הסעודה?</div>
    </div>

    <div class="section-title">הלחם כשם כולל למזון</div>
    <p>בלשון התנ"ך, "לחם" אינו רק מאפה – הוא <strong>שם כולל לכל מזון</strong>. כשהיה רעב בארץ מצרים, נאמר: <strong>"וַיִּצְעַק הָעָם אֶל פַּרְעֹה לַלָּחֶם"</strong> (בראשית מא, נה) – והכוונה לכל סוגי המזון, לא ללחם דווקא. וכן "לֶחֶם לֹא אָכַל וּמַיִם לֹא שָׁתָה" (שמות לד, כח) – "לחם" ככינוי לאכילה בכלל.</p>
    <p>לכן, ברכת "המוציא" אינה רק ברכה על פרוסת הלחם – היא <strong>פתיחת סעודה</strong>. היא מכסה את כל מה שבא כחלק מן הארוחה.</p>

    <div class="section-title">מה נפטר בברכת "המוציא"?</div>
    <div class="table-container">
        <table>
            <thead><tr><th>סוג מאכל</th><th>נפטר?</th><th>הסבר</th></tr></thead>
            <tbody>
                <tr><td>🥩 בשר, עוף, דגים</td><td>✅ נפטר</td><td>דברים הבאים ללוות את הלחם ולהשביע</td></tr>
                <tr><td>🥗 סלטים וירקות</td><td>✅ נפטר</td><td>באים עם הסעודה</td></tr>
                <tr><td>🍚 אורז, תפו"א</td><td>✅ נפטר</td><td>תוספות לסעודה</td></tr>
                <tr><td>💧 מים ומשקאות</td><td>✅ נפטר</td><td>שותים במהלך הסעודה</td></tr>
                <tr style="background:var(--warning-bg);"><td>🍷 יין</td><td>❌ לא נפטר!</td><td>חשוב מספיק לברכה עצמאית</td></tr>
                <tr style="background:var(--warning-bg);"><td>🍎 פירות (קינוח)</td><td>⚖️ ראו הערה</td><td>ראו למטה</td></tr>
                <tr style="background:var(--warning-bg);"><td>🍰 קינוחים מתוקים</td><td>⚖️ תלוי</td><td>אם באים כחלק מהסעודה – נפטרים. אם כקינוח נפרד – לא</td></tr>
            </tbody>
        </table>
    </div>

    <div class="highlight-box warning">
        <div class="highlight-box-title">⚠️ פירות בסעודה – הערה לימינו</div>
        בזמן חז"ל פירות לא היו חלק מהסעודה, ולכן ברכת "המוציא" אינה פוטרת אותם. אולם <strong>בימינו</strong>, שנהוג יותר ויותר להגיש פירות מסוימים כחלק מהסעודה (אבוקדו בסלט, תפוח בתוך עוף, רימון על בשר), יש ספק האם הם נפטרים. <strong>עצה מעשית:</strong> מי שרוצה לצאת מהספק, יכוון בשעת ברכת "המוציא" שהברכה <strong>לא</strong> תחול על הפירות – ואז יברך עליהם בנפרד.
    </div>

    <div class="example-box">
        <div class="example-label">📌 נטילת ידיים לסעודה</div>
        <p>לפני ברכת "המוציא" חובה ליטול ידיים ולברך "על נטילת ידיים". בין הנטילה לברכת "המוציא" – <strong>אין לדבר כלל</strong>. הלכות נטילת ידיים לסעודה הן נושא רחב בפני עצמו (שיעור, כלי, מים, סדר) ולא נפרט אותן כאן.</p>
    </div>

    <div class="source-box">
        <div class="source-label">📖 פניני הלכה ברכות, פרק ג; שו"ע קע"ז, א</div>
        כשקובעים סעודה על לחם, ברכת "המוציא" פוטרת את רוב המאכלים שבסעודה – הדברים הבאים מחמת הסעודה ללפת את הפת או להשביע. חוץ מיין ופירות שאינם חלק עיקרי מהסעודה.
    </div>`
},
// שקף 22 - Flowchart deciding which bracha
{
    title: "תרשים: איך יודעים מה לברך?",
    menu: "תרשים – מה לברך?",
    section: "ברכות ראשונות",
    content: `
    <div class="slide-header">        <h1>תרשים זרימה: איך יודעים מה לברך?</h1>
        <div class="subtitle">שלבי ההחלטה לבחירת הברכה הנכונה</div>
    </div>

    <div class="section-title">שלבי ההחלטה</div>
    <div class="table-container">
        <table>
            <thead><tr><th>שלב</th><th>שאלה</th><th>כן ←</th><th>לא ↓</th></tr></thead>
            <tbody>
                <tr style="background:var(--correct-bg)"><td><strong>1</strong></td><td>האם עשוי מחמשת מיני דגן?</td><td>צורת לחם? → <strong>המוציא</strong><br>לא לחם? → <strong>מזונות</strong></td><td>ממשיכים ↓</td></tr>
                <tr style="background:var(--correct-bg)"><td><strong>2</strong></td><td>האם זה יין או מיץ ענבים?</td><td><strong>הגפן</strong></td><td>ממשיכים ↓</td></tr>
                <tr><td><strong>3</strong></td><td>האם גדל על עץ (גזע מתקיים ומתעצם)?</td><td><strong>העץ</strong></td><td>ממשיכים ↓</td></tr>
                <tr><td><strong>4</strong></td><td>האם גדל מהאדמה?</td><td><strong>האדמה</strong></td><td>ממשיכים ↓</td></tr>
                <tr style="background:var(--warning-bg)"><td><strong>5</strong></td><td>כל השאר (בשר, דגים, ביצים, חלב, מים...)</td><td colspan="2"><strong>שהכל</strong></td></tr>
            </tbody>
        </table>
    </div>

    <div class="highlight-box">
        <div class="highlight-box-title">💡 שתי בדיקות נוספות</div>
        לפני שמברכים, צריך לבדוק עוד שני דברים:<br>
        <strong>א. שינוי צורה / דרך אכילה</strong> – האם המאכל עבר עיבוד שמשנה את ברכתו? (ראו שקף "שינוי צורה")<br>
        <strong>ב. עיקר וטפל</strong> – האם המאכל מורכב מכמה רכיבים? (ראו שקף "עיקר וטפל")
    </div>`
},
// שקף 23 - Ikar v'Tafel
{
    title: "עיקר וטפל",
    menu: "עיקר וטפל",
    section: "כללים מעשיים",
    content: `
    <div class="slide-header">        <h1>עיקר וטפל</h1>
        <div class="subtitle">עד עכשיו למדנו מה מברכים על מאכל בפני עצמו – מה עם מאכלים מורכבים?</div>
    </div>

    <p>רוב המאכלים מורכבים מכמה רכיבים. הכלל: <strong>"מברך על העיקר ופוטר את הטפלה"</strong> (ברכות מד, א). אבל איך יודעים מה עיקר ומה טפל?</p>

    <div class="section-title">שלושה מצבים</div>
    <div class="cards-grid">
        <div class="card">
            <div class="card-icon">1️⃣</div>
            <div class="card-title">טפל שבא להטעים</div>
            <div class="card-text">דבר שתפקידו להטעים או להכשיר את העיקר. מברכים על העיקר בלבד.<br><br>
            <strong>דוגמאות:</strong><br>
            חמאה/ממרח על לחם → הלחם עיקר<br>
            קטשופ על פתיתים → הפתיתים עיקר<br>
            סוכר בקפה → הקפה עיקר</div>
        </div>
        <div class="card">
            <div class="card-icon">2️⃣</div>
            <div class="card-title">תערובת – מה המרכזי?</div>
            <div class="card-text">כשמרכיבים מעורבים יחד, מברכים על המרכזי שבהם.<br><br>
            <strong>דוגמאות:</strong><br>
            סלט ירקות עם חמוציות → "האדמה" (הירקות עיקר)<br>
            אורז עם צימוקים → "מזונות" (האורז עיקר)<br>
            סלט ביצים עם בצל → "שהכל" (הביצים עיקר)</div>
        </div>
        <div class="card">
            <div class="card-icon">3️⃣</div>
            <div class="card-title">הכוונה קובעת</div>
            <div class="card-text">כשלא ברור מה עיקר – שואלים: <strong>מה רצית לאכול?</strong><br><br>
            <strong>דוגמאות:</strong><br>
            עוגייה עם גלידה → אם העיקר הגלידה: "שהכל"<br>
            יוגורט עם גרנולה → אם העיקר היוגורט: "שהכל"</div>
        </div>
    </div>

    <div class="section-title">דוגמאות מעשיות</div>
    <div class="table-container">
        <table>
            <thead><tr><th>מאכל</th><th>עיקר</th><th>טפל</th><th>ברכה</th></tr></thead>
            <tbody>
                <tr><td>🍕 פיצה</td><td>הבצק (דגן)</td><td>גבינה ותוספות</td><td>מזונות (או המוציא)</td></tr>
                <tr><td>🍗 שניצל מצופה</td><td>העוף (ראו מחלוקת למטה)</td><td>ציפוי הקמח</td><td>שהכל (מנהג רווח)</td></tr>
                <tr><td>🥟 בלינצ'ס / שטרודל</td><td>מעטה הבצק</td><td>המילוי</td><td>מזונות</td></tr>
                <tr><td>🍫 קרמבו</td><td colspan="2">שני רכיבים חשובים – לא ברור מי עיקר!</td><td>ראו למטה</td></tr>
                <tr><td>🍦 גלידה בגביע וופל</td><td colspan="2">תלוי אם מעוניין בטעם הגביע</td><td>ראו למטה</td></tr>
                <tr><td>🥣 מרק עוף עם ירקות</td><td>תלוי בכמות</td><td>ראו למטה</td><td>ראו למטה</td></tr>
            </tbody>
        </table>
    </div>

    <div class="example-box">
        <div class="example-label">🥣 מרק – מקרה מורכב</div>
        <p>
        מרק עם <strong>מעט</strong> ירקות → הנוזל עיקר → <strong>"שהכל"</strong> (ופוטר הירקות)<br>
        מרק עם <strong>כמות חשובה</strong> של ירקות → שני הרכיבים חשובים → מברכים <strong>שתי ברכות</strong>: "האדמה" על הירקות ו"שהכל" על הנוזל<br>
        מרק שה<strong>ירקות עיקריים</strong> (כמעט חצי) → "האדמה" בלבד (פנה"ל יא, ט)
        </p>
    </div>

    <div class="highlight-box warning">
        <div class="highlight-box-title">⚠️ מה שמגדיר את המאכל – לא ייחשב "טפל"</div>
        רכיב שנותן למאכל את <strong>צורתו, מבנהו או זהותו</strong> – אינו "טפל" גם אם הוא מיעוט. למשל: מעטה הבצק בשטרודל, בלינצ'ס או בורקס – אף שהוא דק ומועט, הוא נותן למאכל את צורתו ולכן <strong>הוא העיקר</strong> וברכתו "מזונות". לעומת זאת, ציפוי קמח על שניצל – רק מטעים מבחוץ ואינו מגדיר את המאכל, ולכן הוא <strong>טפל</strong>.
    </div>

    <div class="highlight-box">
        <div class="highlight-box-title">💡 מין דגן בתערובת – כוח מיוחד</div>
        לדגן (מחמשת המינים) יש מעמד מיוחד: גם כשהוא <strong>מיעוט</strong> בתערובת, אם הוא בא <strong>לתת טעם או להשביע</strong> – הוא עיקר וברכת התערובת "מזונות". אבל אם תפקידו רק <strong>להדביק או לעבות</strong> – הוא טפל ואינו קובע את הברכה (שו"ע רח, ב-ג; פנה"ל יא, ד).
    </div>

    <div class="section-title">דגן בתערובת – דוגמאות</div>
    <div class="table-container">
        <table>
            <thead><tr><th>מאכל</th><th>תפקיד הדגן</th><th>ברכה</th></tr></thead>
            <tbody>
                <tr><td>🥧 פשטידת ירקות עם קמח <strong>לטעם</strong></td><td>משביח טעם</td><td><strong>מזונות</strong> – הדגן עיקר</td></tr>
                <tr><td>🍝 סלט אטריות וכרוב</td><td>האטריות לטעם ולשובע</td><td><strong>מזונות</strong> – גם כמיעוט</td></tr>
                <tr><td>🥣 מרק עם שקדי מרק / אטריות</td><td>לטעם ולשובע</td><td><strong>מזונות</strong> – הדגן עיקר (שו"ע רח, ב)</td></tr>
                <tr><td>🍰 עוגה (רוב סוכר, ביצים, שוקולד)</td><td>הקמח לטעם ולמבנה</td><td><strong>מזונות</strong> – הדגן עיקר</td></tr>
                <tr style="background:var(--warning-bg)"><td>🥧 פשטידה עם קמח <strong>להדבקה</strong> בלבד</td><td>רק מדביק</td><td><strong>האדמה</strong> – הדגן טפל</td></tr>
                <tr style="background:var(--warning-bg)"><td>🍖 קציצת בשר עם פירורי לחם</td><td>להגדלת נפח ולריכוך</td><td><strong>שהכל</strong> – הדגן טפל (אבנ"ז או"ח לח)</td></tr>
                <tr style="background:var(--warning-bg)"><td>🧆 פלאפל</td><td>קמח להדבקה</td><td><strong>שהכל</strong> – העיקר החומוס</td></tr>
            </tbody>
        </table>
    </div>

    <div class="example-box">
        <div class="example-label">🍫 קרמבו – מחלוקת</div>
        <p>לשני הרכיבים (ביסקוויט וקצפת) יש חשיבות עצמית, ואין אחד טפל לשני. <strong>פנה"ל (יא, ז) ופוסקי אשכנז:</strong> מברכים <strong>שתי ברכות</strong> – "שהכל" על הקרם ו"מזונות" על הביסקוויט. <strong>חלק מפוסקי ספרד</strong> (אור לציון יד, כ): מברכים <strong>"שהכל" בלבד</strong> – הקרם עיקר והביסקוויט טפל.</p>
    </div>

    <div class="example-box">
        <div class="example-label">🍦 גלידה בגביע וופל</div>
        <p>אם <strong>אין מעוניין בטעם הגביע</strong> (רק כלי להחזיק) → "שהכל" בלבד.<br>
        אם <strong>מעוניין גם בטעם הגביע</strong> → שתי ברכות: "מזונות" על הגביע ו"שהכל" על הגלידה (פנה"ל יא, ז).</p>
    </div>

    <div class="example-box">
        <div class="example-label">🍗 שניצל – מחלוקת</div>
        <p>לרוב הפוסקים, ציפוי הקמח על שניצל הוא טפל (רק מטעים מבחוץ) וברכתו <strong>"שהכל"</strong> (פנה"ל יא, ה). אך <strong>יש אומרים "מזונות"</strong> – כי הציפוי נועד להטעים ויש בו חשיבות (אור לציון ח"ב יד, יט). למעשה, המנהג הרווח לברך "שהכל".</p>
    </div>

    <div class="highlight-box warning">
        <div class="highlight-box-title">⚠️ מה עושים בספק?</div>
        כשלא ברור מה עיקר ומה טפל:<br>
        <strong>א. להפריד</strong> – לאכול מכל רכיב בנפרד ולברך עליו את ברכתו לפני שמתחילים לאכול את התערובת. זו הדרך הטובה ביותר (פנה"ל יא, ב).<br>
        <strong>ב. לברך לפי ההבנה</strong> – אם אי אפשר להפריד, לברך לפי שיקול הדעת הטוב ביותר. <strong>בדיעבד</strong>, גם אם טעה, לרוב יצא ידי חובה (כי "שהכל" פוטר הכל, ו"האדמה" פוטרת "העץ").
    </div>`
},
// שקף 24 - Bracha she'eina tzricha
{
    title: "ברכה לבטלה וברכה שאינה צריכה",
    menu: "ברכה לבטלה / שאינה צריכה",
    section: "כללים מעשיים",
    content: `
    <div class="slide-header">
        <h1>ברכה לבטלה וברכה שאינה צריכה</h1>
        <div class="subtitle">היסוד שמאחורי "ספק ברכות להקל"</div>
    </div>

    <p>שני מושגים יסודיים קובעים את כל הכללים המעשיים לברכות – ומי שמבין אותם מבין <em>למה</em> נוהגים כפי שנוהגים:</p>

    <div class="section-title">ברכה לבטלה</div>
    <div class="highlight-box warning">
        <div class="highlight-box-title">⚠️ הזכרת שם ה' לשווא – איסור חמור</div>
        "לא תישא את שם ה' אלוהיך לשווא" (שמות כ, ו). כל אמירת שם ה' ללא צורך היא איסור מהתורה. לכן ברכה שלא הייתה דרושה כלל – כגון ברכה על פעולה שאינה טעונה ברכה – נקראת <strong>ברכה לבטלה</strong>, והיא חמורה ביותר (שו"ע רטו, ד).
    </div>

    <div class="section-title">ברכה שאינה צריכה</div>
    <div class="highlight-box">
        <div class="highlight-box-title">📌 ברכה שנאמרה ללא חיוב – איסור מדרבנן</div>
        <strong>ברכה שאינה צריכה</strong> ("שא"צ") היא ברכה שנאמרה מרצון, שלא לצורך – לא מחמת חיוב ולא מחמת מצווה. חז"ל אסרו זאת כדי לשמור על כבוד הברכות ועל הזכרת שם שמיים (שו"ע רטו, ד; ראשונים). חמורה פחות מ"לבטלה", אך בכל זאת אסורה.
    </div>

    <div class="section-title">מה ההבדל ביניהן?</div>
    <div class="table-container">
        <table>
            <thead><tr><th></th><th>ברכה לבטלה</th><th>ברכה שאינה צריכה</th></tr></thead>
            <tbody>
                <tr><td><strong>הגדרה</strong></td><td>הזכרת שם ה' ללא כל הצדקה</td><td>ברכה שנאמרה שלא לצורך, ללא חיוב</td></tr>
                <tr><td><strong>חומרה</strong></td><td>איסור מהתורה</td><td>איסור מדרבנן</td></tr>
                <tr><td><strong>דוגמה</strong></td><td>אמר "ברוך אתה ה'..." ולא סיים ברכה</td><td>שתה מים ובירך שוב, אע"פ שכבר בירך</td></tr>
            </tbody>
        </table>
    </div>

    <div class="section-title">איך זה מעצב את ההלכה למעשה?</div>
    <p>שני האיסורים הללו הם הבסיס לשלושה כללים מרכזיים שנראה בשקפים הבאים:</p>

    <div class="cards-grid">
        <div class="card">
            <div class="card-icon">⚖️</div>
            <div class="card-title">ספק ברכות להקל</div>
            <div class="card-text">כשיש ספק אם צריך לברך – לא מברכים. עדיף להימנע מ"שאינה צריכה" מאשר להסתכן ב"לבטלה".</div>
        </div>
        <div class="card">
            <div class="card-icon">🔇</div>
            <div class="card-title">מתי לא מברכים</div>
            <div class="card-text">אם אין הנאה – אין ברכה. ברכה ללא הנאה היא "שאינה צריכה" לפחות, ו"לבטלה" לחומרה.</div>
        </div>
        <div class="card">
            <div class="card-icon">🔁</div>
            <div class="card-title">לא לחזור על ברכה</div>
            <div class="card-text">מי שספק אם בירך – אינו חוזר לברך (פרט לברכת המזון שהיא מהתורה), כי החזרה תהיה "שאינה צריכה".</div>
        </div>
    </div>

    <div class="source-box">
        <div class="source-label">📖 שמות כ, ו; שו"ע רטו, ד; פניני הלכה ברכות יב, ב</div>
        "לא תישא את שם ה' אלוהיך לשווא" – הבסיס לאיסור ברכה לבטלה. "ספק ברכות להקל" – כשיש ספק אם צריך לברך, לא מברכים, כי ברכה שלא לצורך אסורה מדרבנן ומדאורייתא.
    </div>`
},
// שקף 25 - When not to bless
{
    title: "מתי לא מברכים?",
    menu: "מתי לא מברכים?",
    section: "כללים מעשיים",
    content: `
    <div class="slide-header">        <h1>מתי לא מברכים?</h1>
        <div class="subtitle">עיקרון: ברכת הנהנין – רק כשנהנים</div>
    </div>

    <p>תקנת חכמים היא שאדם יברך <strong>לפני שנהנה</strong> מאכילה או שתייה: "אסור לאדם שייהנה מן העולם הזה בלא ברכה" (ברכות לה, א). מכאן נגזר: <strong>אם אין הנאה – אין ברכה</strong>.</p>

    <div class="section-title">מקרים שאין מברכים</div>
    <div class="table-container">
        <table>
            <thead><tr><th>מקרה</th><th>דוגמה</th><th>הסבר</th></tr></thead>
            <tbody>
                <tr><td>😖 <strong>אכילה גסה</strong></td><td>ממשיך לאכול מנימוס כששבע לגמרי</td><td>נפשו קצה – אין הנאה (שו"ע קצז, א)</td></tr>
                <tr><td>💊 <strong>תרופה</strong></td><td>בולע כדור עם לגימת מים</td><td>המים לבליעה בלבד, לא להנאה (פנה"ל ט, א)</td></tr>
                <tr><td>💊 <strong>תרופה בטעם</strong></td><td>שותה סירופ מתוק או מיץ לבליעת כדור</td><td><strong>כן מברך</strong> – נהנה מהטעם!</td></tr>
                <tr><td>💧 <strong>מים בלי צמא</strong></td><td>שותה מים לפני צום או לפני הליכה</td><td>אם לא צמא ואין הנאה – לא מברך (שו"ע רד, ז)</td></tr>
                <tr><td>😣 <strong>מאכל שנמאס</strong></td><td>אוכל דבר שמעורר בו גועל ואין לו הנאה</td><td>אין הנאה – אין ברכה</td></tr>
                <tr><td>👅 <strong>טועם ופולט</strong></td><td>טועם תבשיל כדי לבדוק תיבולו</td><td>לא מברך, כי אינו בולע (שו"ע רי, ב)</td></tr>
                <tr><td>🚫 <strong>מאכל איסור</strong></td><td>אכל במזיד דבר אסור</td><td>לא מברך – לא ייתכן להודות על הנאה שבאה באיסור (שו"ע קצו, א)</td></tr>
            </tbody>
        </table>
    </div>

    <div class="highlight-box success">
        <div class="highlight-box-title">💡 גבול דק: שבע אבל נהנה</div>
        אם שבע אבל <strong>עדיין נהנה מהטעם</strong> – כן מברך! למשל, אחרי ארוחה גדושה רואה קינוח מפתה ורוצה לטעום – מברך, כי הוא נהנה (פנה"ל ט, א). הגבול הוא "אכילה גסה" – רק כשנפשו ממש קצה, שכבר לא שייכת הנאה.
    </div>

    <div class="highlight-box">
        <div class="highlight-box-title">📌 שיעור חיוב ברכה</div>
        <strong>ברכה ראשונה:</strong> מברכים על כל כמות – אפילו מעט מאוד, כל עוד אוכל לשם הנאה ולא רק טועם.<br>
        <strong>ברכה אחרונה:</strong> רק מעל שיעור מסוים – נפרט בשקפי הברכות האחרונות.
    </div>

    <div class="source-box">
        <div class="source-label">📖 ברכות לה, א; שו"ע קצו-קצז; רד, ז; רי, ב; פניני הלכה ברכות ט, א</div>
        "אסור לאדם שייהנה מן העולם הזה בלא ברכה, וכל הנהנה מן העולם הזה בלא ברכה – מעל." ומי שאינו נהנה אינו מברך, שאין ברכה בלא הנאה.
    </div>`
},
// שקף 26 - Unified first bracha rules
{
    title: "כללים מעשיים לברכה ראשונה",
    menu: "כללים לברכה ראשונה",
    section: "כללים מעשיים",
    content: `
    <div class="slide-header">
        <h1>כללים מעשיים לברכה ראשונה</h1>
        <div class="subtitle">אופן האמירה · ספק · פטירת מאכלים · היסח הדעת · שינוי מקום</div>
    </div>

    <div class="section-title">אופן אמירת הברכה</div>
    <div class="table-container">
        <table>
            <thead><tr><th>שלב</th><th>דין</th><th>לכתחילה</th><th>בדיעבד</th></tr></thead>
            <tbody>
                <tr><td><strong>לפני</strong></td><td>אחיזת המאכל</td><td>לאחוז ביד ימין (או במזלג/כף)</td><td>לא מעכב – הברכה תקינה</td></tr>
                <tr><td><strong>לפני</strong></td><td>כוונה</td><td>לכוון שה' ברא את המאכל הזה ושמברך עליו</td><td>יצא גם ללא כוונה מיוחדת – עצם האמירה מספיקה</td></tr>
                <tr><td><strong>לפני</strong></td><td>מקום נקי</td><td>לברך רחוק מאשפה/ריח רע</td><td>להתרחק ד' אמות. אם אי אפשר – אינו מברך כלל</td></tr>
                <tr><td><strong>בשעת</strong></td><td>קול</td><td>להשמיע לאוזנו</td><td>הוציא בשפתיו בלחש – יצא. הרהור בלב בלבד – <strong>לא יצא</strong> (שו"ע קפה, ב)</td></tr>
                <tr><td><strong>בשעת</strong></td><td>שם ומלכות</td><td>להזכיר שם ה' ו"מלך העולם"</td><td>השמיט אחד מהם – לא יצא, חוזר ומברך (שו"ע ריד, א)</td></tr>
                <tr><td><strong>בשעת</strong></td><td>עניית אמן</td><td>אם יש שומעים – להרים קול</td><td>אם חשש שלא יענו – עדיף לברך בשקט</td></tr>
            </tbody>
        </table>
    </div>

    <div class="section-title">הפסק בין הברכה לאכילה</div>
    <p>יש לטעום <strong>מיד</strong> אחרי הברכה ולא להשהות. דיבור בין הברכה לביס הראשון:</p>
    <div class="table-container">
        <table>
            <thead><tr><th>מה אמר</th><th>הפסק?</th><th>דין</th></tr></thead>
            <tbody>
                <tr><td>דברים שאינם קשורים לאכילה</td><td>✅ כן</td><td>חוזר ומברך</td></tr>
                <tr><td>"תעביר סכין" / "שטפו את זה?"</td><td>❌ לא</td><td>קשור לאכילה – ממשיך בלא ברכה חדשה (שו"ע קסז, ו)</td></tr>
                <tr><td>ענה אמן על ברכת חברו</td><td>❌ לא</td><td>עניית אמן אינה הפסק</td></tr>
                <tr><td>ענה לקדיש או קדושה</td><td>❌ לא</td><td>דברים שבקדושה מותר לענות</td></tr>
                <tr><td>שתק זמן ארוך</td><td>⚖️ תלוי</td><td>אם עבר "כדי דיבור" – יש מחלוקת</td></tr>
            </tbody>
        </table>
    </div>

    <div class="highlight-box">
        <div class="highlight-box-title">💡 טעה בברכה</div>
        <strong>תוך כדי דיבור</strong> (כ-2 שניות): מתקן ואומר הסיום הנכון.<br>
        <strong>אחרי כדי דיבור:</strong> בירך ברכה כללית יותר ("שהכל" במקום "העץ") – יצא בדיעבד. בירך ברכה שגויה ("העץ" על ירק) – חוזר ומברך. ספק – לא מברך.
    </div>

    <div class="section-title">ספק ברכות להקל</div>
    <div class="highlight-box warning">
        <div class="highlight-box-title">⚠️ הכלל החשוב ביותר בהלכות ברכות</div>
        כשיש ספק אם צריך לברך – <strong>לא מברכים</strong>. ברכה שלא לצורך ("לבטלה") אסורה, ולכן ספק עדיף על ברכה שאינה צריכה (פנה"ל יב, ב; שו"ע רט, ג).<br><br>
        לא בטוח אם כבר בירכת → לא מברך שוב. לא בטוח מה הברכה הנכונה → מברך "שהכל" (שפוטרת הכל בדיעבד).
    </div>

    <div class="section-title">ברכה אחת פוטרת כמה מאכלים</div>
    <p>ברכה על מאכל אחד פוטרת כל המאכלים <strong>שברכתם זהה</strong>, בתנאי שהיו לפניו בשעת הברכה או שכיוון לפטור אותם:</p>
    <div class="table-container">
        <table>
            <thead><tr><th>מצב</th><th>ברכה זהה?</th><th>לפניו / כיוון?</th><th>דין</th></tr></thead>
            <tbody>
                <tr><td>בירך "העץ" על תפוח; לפניו אגס ומנגו</td><td>✅</td><td>✅ לפניו</td><td>✅ נפטרו</td></tr>
                <tr><td>בירך "שהכל" על מים; לפניו גבינה</td><td>✅</td><td>✅ לפניו</td><td>✅ נפטרה</td></tr>
                <tr><td>בירך "שהכל" על מים; מביאים שוקולד מהמטבח</td><td>✅</td><td>⚖️ לא לפניו</td><td>⚖️ כיוון – נפטר. לא כיוון – ספק, לא מברך</td></tr>
                <tr><td>בירך "העץ" על תפוח; רוצה גזר</td><td>❌</td><td>—</td><td>❌ מברך "האדמה" בנפרד</td></tr>
                <tr><td>בירך "מזונות" על עוגייה; לפניו בורקס</td><td>✅</td><td>✅ לפניו</td><td>✅ נפטר</td></tr>
            </tbody>
        </table>
    </div>
    <div class="example-box">
        <div class="example-label">💡 עצה: לכוון מראש</div>
        <p>כדאי להתרגל לכוון בכל ברכה שתפטור את כל המאכלים שברכתם זהה הנמצאים בבית – כך יוצאים מכל ספק (שו"ע ורמ"א רו, ה).</p>
    </div>

    <div class="section-title">הביאו עוד אוכל אחרי שבירך</div>
    <div class="table-container">
        <table>
            <thead><tr><th>מצב</th><th>ברכה זהה</th><th>ברכה שונה</th></tr></thead>
            <tbody>
                <tr><td>✅ חשב עליו בשעת הברכה, או רגיל שמביאים לו</td><td>נפטר</td><td>נפטר (מ"ב ריב, ד)</td></tr>
                <tr><td>❌ לא חשב ואינו רגיל</td><td>ספק → <strong>לא מברך</strong></td><td><strong>מברך</strong> על המאכל החדש</td></tr>
            </tbody>
        </table>
    </div>

    <div class="section-title">היסח הדעת</div>
    <p>כל עוד לא <strong>החלטת שסיימת</strong> לאכול – אפשר להמשיך בלי ברכה חדשה. גמרת בדעתך ("היסח הדעת") – צריך לברך שוב (פנה"ל ט, ו; רמב"ם ברכות ד, ז).</p>
    <div class="highlight-box warning">
        <div class="highlight-box-title">⚠️ עברו 72 דקות בלי לאכול</div>
        לדעת מגן אברהם (קפד, ט) הברכה הראשונה פקעה וצריך לברך שוב. רמב"ם ואחרונים רבים חולקים: כל עוד דעתו להמשיך – אינו צריך. <strong>למעשה:</strong> המתכוון להפסיק יותר מ-72 דקות – יברך על כל אכילה בנפרד (פנה"ל י, יג).
    </div>
    <div class="example-box">
        <div class="example-label">🍽️ דין אורח</div>
        <p>מתארח ולא יודע מה יגישו לו – <strong>אין לו היסח הדעת</strong> כל עוד יושב לשולחן, כי מסתמא יגישו לו עוד. לכן אינו צריך לברך שוב על מאכלים שמגישים לו אם ברכתם זהה למה שכבר בירך.</p>
    </div>

    <div class="section-title">שינוי מקום</div>
    <div class="table-container">
        <table>
            <thead><tr><th>מצב</th><th>דין לברכה ראשונה</th></tr></thead>
            <tbody>
                <tr><td>עבר מחדר לחדר <strong>באותו בית</strong></td><td>אינו צריך לברך שוב</td></tr>
                <tr><td>יצא מהבניין לחלוטין</td><td>צריך לברך שוב על כל המאכלים – <strong>פרט</strong> ללחם ומזונות: ברכת "המוציא" ו"מזונות" שרירות וקיימות גם במקום אחר, כל עוד נמשכת אותה אכילה</td></tr>
                <tr><td>אכל בחוץ ועבר מקום</td><td>אם רואה את מקומו הראשון – אינו צריך לברך שוב</td></tr>
            </tbody>
        </table>
    </div>
    <div class="highlight-box">
        <div class="highlight-box-title">💡 עצה: לכוון מראש</div>
        אם מתכוון לעבור מקום – כדאי לכוון בשעת הברכה שתחול גם במקום האחר.
    </div>

    <div class="source-box">
        <div class="source-label">📖 שו"ע קסז, ו; קפה, ב; ריד, א; רו, ה; ריב, א; פניני הלכה ברכות ט, ג–ז; יב, ב–ה</div>
        אמירה בקול לאוזנו לכתחילה; הרהור בלבד – לא יצא. ספק ברכות להקל. ברכה אחת פוטרת מאכלים שברכתם זהה שהיו לפניו. היסח הדעת מחייב ברכה חדשה; 72 דקות – מחלוקת.
    </div>`
},
// שקף 27 - Seder Kadimuyot
{
    title: "סדר קדימויות",
    menu: "סדר קדימויות",
    section: "סדר ברכות",
    content: `
    <div class="slide-header">        <h1>סדר קדימויות בברכות</h1>
        <div class="subtitle">כשיש כמה מאכלים – מה מברכים קודם?</div>
    </div>

    <p>כשיש לפנינו מאכלים שונים שברכותיהם שונות, יש סדר קדימה. הסדר מבוסס על עיקרון: <strong>ברכה מבוררת (ספציפית) קודמת לברכה כללית</strong>.</p>

    <div class="section-title">סולם הברכות</div>
    <div class="table-container">
        <table>
            <thead><tr><th>קדימות</th><th>ברכה</th><th>מדוע קודמת?</th><th>פוטרת בדיעבד</th></tr></thead>
            <tbody>
                <tr><td>1️⃣</td><td><strong>המוציא</strong></td><td>הלחם – המאכל החשוב ביותר</td><td>פוטרת רוב מאכלי הסעודה (ראו שקף "המוציא – פותחת סעודה")</td></tr>
                <tr><td>2️⃣</td><td><strong>מזונות</strong></td><td>מזון מדגן – חשיבות מיוחדת</td><td>—</td></tr>
                <tr><td>3️⃣</td><td><strong>הגפן</strong></td><td>ברכה ייחודית ליין</td><td>פוטרת משקאות שהיו לפניו בעת הברכה, או שהיה סיכוי סביר לשתותם (ראו שקף "הגפן"; פנה"ל ז, ד)</td></tr>
                <tr><td>4️⃣</td><td><strong>העץ</strong></td><td>ברכה מבוררת – סוג גידול ספציפי</td><td>—</td></tr>
                <tr><td>5️⃣</td><td><strong>האדמה</strong></td><td>מבוררת, אך פחות מ"העץ"</td><td>פוטרת "העץ" בדיעבד</td></tr>
                <tr><td>6️⃣</td><td><strong>שהכל</strong></td><td>הכללית ביותר – אחרונה</td><td>פוטרת <strong>הכל</strong> בדיעבד</td></tr>
            </tbody>
        </table>
    </div>

    <div class="highlight-box">
        <div class="highlight-box-title">💡 למה הסדר חשוב? – ברכה כללית יוצרת ספק</div>
        ברכה כללית יותר פוטרת בדיעבד מאכלים שברכתם מבוררת יותר. לכן אם בירכת "שהכל" על תפוח – <strong>יצאת בדיעבד</strong> ולא תחזור לברך "העץ" (ספק ברכות להקל). וכן "האדמה" פוטרת "העץ" בדיעבד. אבל "העץ" על ירק – <strong>לא יצא</strong> (כי זו ברכה שגויה, לא כללית).
    </div>

    <div class="highlight-box warning">
        <div class="highlight-box-title">⚠️ שימו לב: המוציא והגפן – ברכות שפוטרות מאכלים אחרים</div>
        <strong>המוציא</strong> אינה רק ברכה על הלחם – היא <strong>פותחת סעודה</strong> ופוטרת את רוב מאכלי הארוחה (בשר, ירקות, תוספות, משקאות – חוץ מיין ופירות; ראו שקף "המוציא – פותחת סעודה").<br><br>
        <strong>הגפן</strong> אינה רק ברכה על היין – היא <strong>פוטרת כל משקה</strong> שאחריה, אם התכוון לכך (ראו שקף "הגפן").<br><br>
        לכן כשיש לחם על השולחן – לרוב לא צריך לברך על רוב שאר המאכלים.
    </div>

    <div class="section-title">כלל שני: חביב קודם</div>
    <p>כשיש שני מאכלים מאותה ברכה (למשל, שני פירות עץ) – מברכים קודם על <strong>החביב</strong>.</p>

    <div class="section-title">כלל שלישי: שבעת המינים קודמים</div>
    <p>כששני מאכלים <strong>ברכתם זהה</strong> (למשל, שני פירות "העץ") – פרי משבעת המינים קודם, גם אם הפרי האחר חביב יותר. אבל כשברכותיהם <strong>שונות</strong> (כמו פרי עץ מול פרי אדמה) – <strong>החביב קודם</strong>, גם על פני מין שבעה, כי ממילא צריך לברך על שניהם (פנה"ל ט, י). הסדר בתוך שבעת המינים נקבע לפי <strong>הקרבה למילה "ארץ" בפסוק</strong> (ראו שקף הבא).</p>

    <div class="highlight-box">
        <div class="highlight-box-title">📌 סימן: "המגע אש"</div>
        ה(מוציא), מ(זונות), ג(פן), ע(ץ), א(דמה), ש(הכל) – סדר הקדימה בין הברכות.
    </div>`
},
// שקף 28 - Seven species
{
    title: "שבעת המינים וקדימה",
    menu: "שבעת המינים",
    section: "סדר ברכות",
    content: `
    <div class="slide-header">        <h1>שבעת המינים וסדר קדימה</h1>
        <div class="subtitle">המינים שהשתבחה בהם ארץ ישראל</div>
    </div>

    <div class="source-box">
        <div class="source-label">📖 דברים ח, ח</div>
        "<strong>אֶרֶץ</strong> חִטָּה וּשְׂעֹרָה, וְגֶפֶן וּתְאֵנָה וְרִמּוֹן, <strong>אֶרֶץ</strong> זֵית שֶׁמֶן וּדְבָשׁ"
    </div>

    <p>סדר הקדימה בתוך שבעת המינים נקבע לפי <strong>הקרבה למילה "ארץ"</strong> בפסוק. המילה "ארץ" מופיעה <strong>פעמיים</strong>, ומין הקרוב יותר ל"ארץ" קודם – גם אם הוא שייך ל"ארץ" השנייה (ברכות מא, ב – רב המנונא):</p>

    <div class="table-container">
        <table>
            <thead><tr><th>קדימות</th><th>המין</th><th>מרחק מ"ארץ"</th><th>ברכה</th></tr></thead>
            <tbody>
                <tr style="background:var(--correct-bg)"><td>1</td><td>🌾 <strong>חיטה</strong></td><td>1 מ"ארץ" הראשונה</td><td>מזונות / המוציא</td></tr>
                <tr style="background:var(--correct-bg)"><td>2</td><td>🌾 <strong>שעורה</strong></td><td>2 מ"ארץ" הראשונה</td><td>מזונות / המוציא</td></tr>
                <tr><td>3</td><td>🫒 <strong>זית</strong></td><td><strong>1 מ"ארץ" השנייה</strong></td><td>העץ</td></tr>
                <tr><td>4</td><td>🌴 <strong>תמר</strong> (דבש)</td><td>2 מ"ארץ" השנייה</td><td>העץ</td></tr>
                <tr><td>5</td><td>🍇 <strong>ענבים</strong></td><td>3 מ"ארץ" הראשונה</td><td>העץ (הגפן על יין)</td></tr>
                <tr><td>6</td><td>🍈 <strong>תאנה</strong></td><td>4 מ"ארץ" הראשונה</td><td>העץ</td></tr>
                <tr><td>7</td><td>🍎 <strong>רימון</strong></td><td>5 מ"ארץ" הראשונה</td><td>העץ</td></tr>
            </tbody>
        </table>
    </div>

    <div class="highlight-box">
        <div class="highlight-box-title">💡 למה זית קודם לענבים?</div>
        אף שענבים (3) קרובים יותר ל"ארץ" הראשונה מאשר זית (1 מ"ארץ" השנייה), הקרבה ל"ארץ" <strong>השנייה</strong> חשובה לא פחות – כי התורה חזרה והזכירה "ארץ" במיוחד כדי להדגיש את חשיבותם של הזית והתמר.
    </div>

    <div class="example-box">
        <div class="example-label">💡 דוגמה מעשית</div>
        <p>לפניך תמרים ותפוחים, שניהם "העץ". התמר משבעת המינים – מברכים עליו קודם (גם אם התפוח חביב יותר).</p>
    </div>

    <div class="highlight-box">
        <div class="highlight-box-title">⚖️ שלם קודם לפרוס</div>
        כשיש פרי שלם ופרי חתוך מאותו סוג – מברכים על השלם.
    </div>`
},
// שקף 29 - Shomea ke'oneh and Amen
{
    title: "שומע כעונה ועניית אמן",
    menu: "שומע כעונה ואמן",
    section: "כללים נוספים",
    content: `
    <div class="slide-header">        <h1>שומע כעונה ועניית אמן</h1>
        <div class="subtitle">כלל יסוד: "השומע ברכה ומתכוון לצאת – כאילו אמרה בעצמו"</div>
    </div>

    <div class="section-title">הכלל: שומע כעונה</div>
    <p>אדם ששומע ברכה מפי חברו ומתכוון לצאת בה ידי חובה – <strong>יצא</strong>, כאילו בירך בעצמו. אבל שני תנאים חייבים להתקיים (שו"ע ריג, ב; פנה"ל יב, ז):</p>
    <div class="two-cols">
        <div class="highlight-box success" style="margin:0;">
            <div class="highlight-box-title">תנאי 1: כוונת השומע</div>
            השומע מתכוון <strong>לצאת ידי חובה</strong> בברכה ששומע – ולא רק שומע "ברקע".
        </div>
        <div class="highlight-box success" style="margin:0;">
            <div class="highlight-box-title">תנאי 2: כוונת המברך</div>
            המברך מתכוון <strong>להוציא</strong> את השומע ידי חובה – ולא רק מברך לעצמו.
        </div>
    </div>

    <div class="section-title">מתי רלוונטי?</div>
    <div class="table-container">
        <table>
            <thead><tr><th>מצב</th><th>דוגמה</th><th>דין</th></tr></thead>
            <tbody>
                <tr><td><strong>קידוש / הבדלה</strong></td><td>בעל הבית מקדש, בני הבית שומעים</td><td>✅ כולם יוצאים – כל עוד מתכוונים</td></tr>
                <tr><td><strong>זימון</strong></td><td>המזמן מברך ברכת המזון, האחרים שומעים</td><td>✅ יוצאים – בתנאי ששומעים כל מילה</td></tr>
                <tr><td><strong>ברכת הנהנין רגילה</strong></td><td>שניים אוכלים תפוח, אחד מברך</td><td>⚖️ יכולים לצאת, אך <strong>עדיף שכל אחד יברך לעצמו</strong> (שו"ע ריג, א)</td></tr>
                <tr><td><strong>לא שמע את כל הברכה</strong></td><td>הגיע באמצע הברכה</td><td>❌ לא יצא – צריך לשמוע מתחילת הברכה ועד סופה</td></tr>
            </tbody>
        </table>
    </div>

    <div class="section-title">עניית אמן</div>
    <p>השומע ברכה מפי חברו – <strong>חייב לענות "אמן"</strong>. מילת "אמן" היא אישור והסכמה: "אמת – מה שאמרת נכון ואני מאמין בכך" (שו"ע רטו, ב).</p>

    <div class="table-container">
        <table>
            <thead><tr><th>סוג אמן</th><th>משמעות</th><th>דין</th></tr></thead>
            <tbody>
                <tr><td><strong>אמן רגילה</strong></td><td>ענה אחרי שהמברך סיים</td><td>✅ נכון</td></tr>
                <tr><td><strong>אמן חטופה</strong></td><td>ענה <strong>לפני</strong> שהמברך סיים</td><td>❌ פסולה – "ולא יחטוף" (ברכות מז, א)</td></tr>
                <tr><td><strong>אמן יתומה</strong></td><td>ענה <strong>באיחור גדול</strong> אחרי שהמברך סיים</td><td>❌ פסולה – כבר עבר הרגע</td></tr>
                <tr><td><strong>אמן קטופה</strong></td><td>אומר רק "מן" בלי ה-א'</td><td>❌ פסולה – צריך לבטא את כל המילה</td></tr>
            </tbody>
        </table>
    </div>

    <div class="highlight-box">
        <div class="highlight-box-title">📌 כללים נוספים</div>
        <strong>על ברכת עצמו:</strong> לא עונים אמן אחרי ברכת עצמו – חוץ מסוף ברכת "בונה ירושלים" בברכת המזון (שם עונים אמן כי זהו סיום שלוש הברכות מהתורה, והברכה הרביעית עומדת בפני עצמה).<br><br>
        <strong>חובה לענות:</strong> גם מי ש<strong>לא מתכוון לצאת</strong> ידי חובה – חייב לענות אמן אם שמע ברכה. עניית אמן היא מצווה בפני עצמה.<br><br>
        <strong>"גדולה עניית אמן יותר מן המברך"</strong> (ברכות נג, ב) – העונה אמן מבטא אמונה עמוקה: לא רק שהוא אומר את הדברים, אלא שהוא מאשר אותם מתוך הקשבה.
    </div>

    <div class="source-box">
        <div class="source-label">📖 ברכות מז, א; נג, ב; שו"ע ריג-רטו; פניני הלכה ברכות יב, ז-ח</div>
        "שומע כעונה" – השומע ברכה ומתכוון לצאת בה ידי חובה, כאילו אמרה בעצמו. "כל העונה אמן יותר מן המברך" – מעלת עניית אמן גדולה.
    </div>`
},
// שקף 30 - Bracha Acharona overview
{
    title: "ברכות אחרונות – סקירה",
    menu: "ברכות אחרונות – סקירה",
    section: "ברכות אחרונות",
    content: `
    <div class="slide-header">        <h1>ברכות אחרונות</h1>
        <div class="subtitle">שלוש ברכות שלאחר אכילה – תנאים, שיעורים וזמנים</div>
    </div>

    <p>כשם שמברכים לפני האכילה, כך חכמים תיקנו לברך גם אחריה. <strong>ברכת המזון</strong> היא הברכה היחידה שחיובה <strong>מן התורה</strong> (דברים ח, י: "וְאָכַלְתָּ וְשָׂבָעְתָּ וּבֵרַכְתָּ"), ושאר הברכות האחרונות הן מדרבנן. מברכים ברכה אחרונה רק אם אכלו או שתו <strong>שיעור מינימלי</strong>:</p>

    <div class="section-title">שלוש הברכות</div>
    <div class="table-container">
        <table>
            <thead><tr><th>ברכה אחרונה</th><th>אחרי מה?</th><th>שיעור מינימלי</th></tr></thead>
            <tbody>
                <tr><td><strong>ברכת המזון</strong><br>(4 ברכות, ארוכה)</td><td>לחם (המוציא), או כמות גדולה (~230 גרם) של מאפה מזונות שקבע עליו סעודה</td><td>כזית לחם</td></tr>
                <tr><td><strong>מעין שלוש</strong><br>("על המחיה" / "על העץ" / "על הגפן")</td><td>מאפה מזונות (שלא קבע סעודה) · פירות שבעת המינים · יין ומיץ ענבים</td><td>כזית (מאכל)<br>רביעית (משקה)</td></tr>
                <tr><td><strong>בורא נפשות</strong><br>(קצרה)</td><td>כל שאר המאכלים והמשקאות</td><td>כזית (מאכל)<br>רביעית (משקה)</td></tr>
            </tbody>
        </table>
    </div>

    <div class="section-title">שיעורי מדידה</div>
    <div class="table-container">
        <table>
            <thead><tr><th>שיעור</th><th>משמעות</th><th>שיטות מדידה</th><th>למעשה</th></tr></thead>
            <tbody>
                <tr><td><strong>כזית</strong></td><td>הכמות המינימלית שמחייבת ברכה אחרונה על <strong>מאכל</strong></td><td>ר' חיים נאה: ~27 גרם<br>חזון איש: ~50 גרם</td><td>רוב הפוסקים: <strong>~27 גרם</strong> (כחצי ביצה בנפח)</td></tr>
                <tr><td><strong>רביעית</strong></td><td>הכמות המינימלית שמחייבת ברכה אחרונה על <strong>משקה</strong></td><td>ר' חיים נאה: ~86 מ"ל<br>חזון איש: ~150 מ"ל</td><td>רוב הפוסקים: <strong>~86 מ"ל</strong></td></tr>
                <tr><td><strong>כדי אכילת פרס</strong></td><td>הזמן המרבי שבו צריך לאכול את הכזית</td><td>4 דקות (ר' חיים נאה)<br>7-9 דקות (אחרים)</td><td><strong>~4 דקות</strong> לכתחילה</td></tr>
            </tbody>
        </table>
    </div>

    <div class="highlight-box warning">
        <div class="highlight-box-title">⚠️ תנאי מיוחד למשקאות</div>
        במשקאות, השיעור של <strong>רביעית</strong> (~86 מ"ל) צריך להישתות <strong>ברצף</strong> – בשתייה רגילה רציפה, לא בלגימות מפוזרות. לכן:
        השותה <strong>קפה או תה חם</strong> בלגימות קטנות לאורך זמן – לרוב <strong>לא מברך ברכה אחרונה</strong>, כי לא שתה רביעית ברצף (פנה"ל י, י).
        השותה <strong>מים או מיץ</strong> בבת אחת – מברך, כי שתה רביעית ברצף.
    </div>

    <div class="section-title">זמן הברכה</div>
    <div class="table-container">
        <table>
            <thead><tr><th>מצב</th><th>עד מתי מברכים?</th></tr></thead>
            <tbody>
                <tr><td>אכל לחם <strong>ושבע</strong></td><td>כל עוד מרגיש שובע – עד כ-<strong>6 שעות</strong> (מ"ב קפד, כ)</td></tr>
                <tr><td>אכל לחם <strong>מעט</strong> (כזית בלבד)</td><td>עד שיעור עיכול – <strong>~72 דקות</strong></td></tr>
                <tr><td>שאר מאכלים ומשקאות</td><td>עד שיעור עיכול – <strong>~72 דקות</strong>. ובשתייה – יש אומרים <strong>~30 דקות</strong> בלבד</td></tr>
            </tbody>
        </table>
    </div>
    <div class="example-box">
        <div class="example-label">💡 עצה מעשית</div>
        <p>כדי לא להיכנס לספק – <strong>יש לברך ברכה אחרונה מיד כשגומרים לאכול</strong>, ולא לדחות. חכמים אמרו שהמתאחר עלול לשכוח.</p>
    </div>

    <div class="source-box">
        <div class="source-label">📖 דברים ח, י; שו"ע קפד, ה; רי, א; פניני הלכה ברכות י, א-יג</div>
        ברכת המזון מהתורה – "ואכלת ושבעת וברכת". שאר ברכות אחרונות מדרבנן. שיעור כזית ≈ 27 גרם, שיעור רביעית ≈ 86 מ"ל. זמן ברכה אחרונה – כל עוד לא נתעכל המאכל.
    </div>`
},
// שקף 31 - Birkat HaMazon
{
    title: "ברכת המזון",
    menu: "ברכת המזון",
    section: "ברכות אחרונות",
    content: `
    <div class="slide-header">        <h1>ברכת המזון</h1>
        <div class="subtitle">הברכה היחידה שמוזכרת במפורש בתורה</div>
    </div>

    <div class="source-box">
        <div class="source-label">📖 דברים ח, י</div>
        "וְאָכַלְתָּ וְשָׂבָעְתָּ וּבֵרַכְתָּ אֶת ה' אֱלֹהֶיךָ עַל הָאָרֶץ הַטֹּבָה אֲשֶׁר נָתַן לָךְ"
    </div>

    <p>ברכת המזון היא <strong>הברכה היחידה שחיובה מן התורה</strong>. שלוש ברכותיה הראשונות נתקנו במשך אלף שנות היסטוריה – כל אחת בנקודת מפנה של עם ישראל. הברכה הרביעית נוספה כאלף שנה לאחר מכן (ברכות מח, ב):</p>

    <div class="section-title">ארבע הברכות – סיפור היסטורי</div>
    <div class="table-container">
        <table>
            <thead><tr><th>ברכה</th><th>מי תיקן?</th><th>מתי?</th><th>עניינה</th></tr></thead>
            <tbody>
                <tr style="background:var(--correct-bg)"><td><strong>1. ברכת הזן</strong></td><td>משה רבנו</td><td>כשירד המן במדבר</td><td>הודאה שה' <strong>זן ומפרנס את כל חי</strong> – לא רק את ישראל אלא את כל העולם</td></tr>
                <tr style="background:var(--correct-bg)"><td><strong>2. ברכת הארץ</strong></td><td>יהושע בן נון</td><td>כשאכלו מעבור הארץ</td><td>הודאה על <strong>המתנות הייחודיות</strong> של עם ישראל: ארץ ישראל, יציאת מצרים, ברית המילה, התורה</td></tr>
                <tr style="background:var(--correct-bg)"><td><strong>3. בונה ירושלים</strong></td><td>דוד ושלמה</td><td>כיבוש ירושלים ובניין המקדש</td><td>בקשה על <strong>מרכזיות ירושלים</strong>, בית המקדש ומלכות בית דוד</td></tr>
                <tr><td><strong>4. הטוב והמטיב</strong></td><td>חכמי יבנה</td><td>לאחר חורבן בית שני (~קרוב לאלף שנה אחרי שלוש הראשונות)</td><td>תפילה ל<strong>עתיד טוב</strong> – גאולה פרטית וכללית. תוקנה ביום שניתנו הרוגי ביתר לקבורה</td></tr>
            </tbody>
        </table>
    </div>

    <div class="highlight-box">
        <div class="highlight-box-title">💡 מהתורה ומדרבנן – אבל שלמות אחת</div>
        שלוש הברכות הראשונות הן <strong>מהתורה</strong> (דאורייתא). הברכה הרביעית היא <strong>מדרבנן</strong>, אך היא חלק אינטגרלי מברכת המזון – אין מדלגים עליה, ואי אפשר לברך בלעדיה.
    </div>

    <div class="section-title">תוספות לברכת המזון</div>
    <div class="table-container">
        <table>
            <thead><tr><th>תוספת</th><th>מתי?</th><th>היכן בברכה?</th></tr></thead>
            <tbody>
                <tr><td><strong>"רצה והחליצנו"</strong></td><td>שבת</td><td>בברכת בונה ירושלים</td></tr>
                <tr><td><strong>"יעלה ויבוא"</strong></td><td>ראש חודש, חגים וחול המועד</td><td>בברכת בונה ירושלים</td></tr>
                <tr><td><strong>"על הנסים"</strong></td><td>חנוכה ופורים</td><td>בברכת הארץ</td></tr>
                <tr><td><strong>ברכת האורח</strong></td><td>כשמתארחים</td><td>בסוף, אחרי ברכה רביעית – ברכה מיוחדת לבעל הבית</td></tr>
            </tbody>
        </table>
    </div>

    <div class="example-box">
        <div class="example-label">📌 שכח "רצה" או "יעלה ויבוא"</div>
        <p>אם נזכר <strong>לפני</strong> שהתחיל ברכה רביעית – חוזר ואומר. אם כבר <strong>סיים</strong> ברכת המזון – בשבת ובחגים חוזר לברך מההתחלה. בראש חודש וחול המועד – אינו חוזר.</p>
    </div>

    <div class="highlight-box success">
        <div class="highlight-box-title">✨ "הזהיר בברכת המזון – מזונותיו מצויין לו"</div>
        אמרו חכמים שהמקפיד על ברכת המזון זוכה לפרנסה בריווח (ברכות מח, ב). ברכת המזון היא הזדמנות להודות על המזון שקיבלנו ולהתפלל על העתיד.
    </div>

    <div class="example-box">
        <div class="example-label">🔤 הבדלי נוסחאות</div>
        <p>בין עדות ישראל (אשכנזים, ספרדים, תימנים) יש הבדלים בפרטי הנוסח ובתוספות, אך <strong>מבנה ארבע הברכות ונושאיהן זהים בכל העדות</strong>.</p>
    </div>

    <div class="source-box">
        <div class="source-label">📖 ברכות מח, ב; שו"ע קפד-קפט; פניני הלכה ברכות ד</div>
        "משה תיקן להם ברכת הזן בשעה שירד להם מן. יהושע תיקן להם ברכת הארץ כיוון שנכנסו לארץ. דוד ושלמה תיקנו בונה ירושלים... וברכת הטוב והמטיב ביבנה תיקנוה" (ברכות מח, ב).
    </div>`
},
// שקף 32 - Zimun
{
    title: "זימון",
    menu: "זימון",
    section: "ברכות אחרונות",
    content: `
    <div class="slide-header">        <h1>זימון – ברכת המזון בצוותא</h1>
        <div class="subtitle">"שלושה שאכלו כאחד חייבים לזמן" (ברכות מה, א)</div>
    </div>

    <div class="section-title">מהו זימון?</div>
    <p>כששלושה גברים (או יותר) אוכלים <strong>סעודה עם לחם</strong> יחד – חלה עליהם <strong>חובה</strong> לברך ברכת המזון יחד. אחד מהם פותח ב"נברך שאכלנו משלו" והאחרים עונים "ברוך שאכלנו משלו ובטובו חיינו". זוהי הזמנה משותפת להודאה – "גַּדְּלוּ לַה' אִתִּי וּנְרוֹמְמָה שְׁמוֹ יַחְדָּו" (תהלים לד, ד).</p>

    <div class="section-title">שלוש רמות של זימון</div>
    <div class="table-container">
        <table>
            <thead><tr><th>מספר סועדים</th><th>נוסח</th><th>הערה</th></tr></thead>
            <tbody>
                <tr><td><strong>3–9</strong></td><td>"נברך <strong>שאכלנו משלו</strong>"</td><td>זימון בסיסי – חובה</td></tr>
                <tr><td><strong>10+</strong></td><td>"נברך <strong>לאלוהינו</strong> שאכלנו משלו"</td><td>מוסיפים הזכרת שם ה'. <strong>מצווה לברך על כוס יין</strong> ("כוס של ברכה"; שו"ע קפב, א)</td></tr>
            </tbody>
        </table>
    </div>

    <div class="section-title">מי מצטרף לזימון?</div>
    <div class="table-container">
        <table>
            <thead><tr><th>מצב</th><th>מצטרף ל-3?</th><th>מצטרף ל-10 (עם שם ה')?</th></tr></thead>
            <tbody>
                <tr><td>אכל <strong>לחם</strong> (כזית)</td><td>✅ כן</td><td>✅ כן</td></tr>
                <tr><td>אכל <strong>מזונות, פירות, ירקות</strong> (כזית)</td><td>⚖️ מחלוקת: לרוב הפוסקים <strong>כן</strong></td><td>✅ כן – אבל רק אם <strong>רוב (7+) אכלו לחם</strong> (שו"ע קצז, ב)</td></tr>
                <tr><td><strong>שתה</strong> משקה חוץ ממים (רביעית)</td><td>⚖️ כנ"ל</td><td>⚖️ כנ"ל</td></tr>
                <tr><td><strong>לא אכל כלום</strong></td><td>❌ לא</td><td>❌ לא</td></tr>
            </tbody>
        </table>
    </div>

    <div class="section-title">מי מזמן?</div>
    <p>סדר קדימה למי שמזמן:</p>
    <ol class="num-list">
        <li><strong>כהן</strong> – מצווה להקדימו: "וקדשתו" (ויקרא כא, ח; שו"ע רא, ב)</li>
        <li><strong>גדול בחכמה</strong> – אם אין כהן, או שהכהן מוחל (ברכות מז, א)</li>
        <li><strong>בעל הבית</strong> – מכבד אורח לזמן. <strong>אם בעל הבית ביקש מאורח לזמן – אסור לאורח לסרב</strong> (שו"ע רא, א)</li>
    </ol>

    <div class="highlight-box">
        <div class="highlight-box-title">👩 נשים בזימון</div>
        נשים אינן מצטרפות לגברים ליצירת חיוב הזימון (אינן נספרות כחלק מהשלושה). אבל אם יש שלושה גברים – <strong>הנשים היושבות בסעודה חייבות לענות</strong> לזימון. שלוש נשים שאכלו יחד – רשאיות לזמן לעצמן (פנה"ל ה, ז).
    </div>

    <div class="highlight-box warning">
        <div class="highlight-box-title">⚠️ אירועים גדולים – אסור להתפצל</div>
        <strong>3–5 סועדים:</strong> חייבים לזמן יחד, אסור להתפצל.<br>
        <strong>6+:</strong> מותר להתפצל לשתי קבוצות (כל אחת 3+).<br>
        <strong>10–19:</strong> חייבים לזמן בהזכרת שם ה', אסור להתפצל.<br>
        <strong>20+:</strong> מותר להתפצל (כל קבוצה 10+).<br><br>
        <strong>רוצה לצאת לפני שכולם סיימו?</strong> ביקש משניים שיצטרפו לזימון – מזמנים שלושתם, ולאחר שעונה "ברוך שאכלנו משלו" ושומע את תחילת ברכת "הזן" – יכול ללכת ולברך ברכת המזון לבד (פנה"ל ה, יא).
    </div>

    <div class="source-box">
        <div class="source-label">📖 ברכות מה-נ; שו"ע קפב, קצב-קצט; רא; פניני הלכה ברכות ה</div>
        "שלושה שאכלו כאחד חייבים לזמן" (ברכות מה, א). "גַּדְּלוּ לַה' אִתִּי" – אחד קורא לשניים. כהן קודם לזמן: "וקידשתו – לכל דבר שבקדושה, לפתוח ראשון ולברך ראשון" (גיטין נט, ב).
    </div>`
},
// שקף 33 - Me'ein Shalosh
{
    title: "ברכה מעין שלוש",
    menu: "מעין שלוש",
    section: "ברכות אחרונות",
    content: `
    <div class="slide-header">
        <h1>ברכה מעין שלוש</h1>
        <div class="subtitle">"על המחיה" · "על העץ" · "על הגפן"</div>
    </div>

    <div class="section-title">למה נקראת "מעין שלוש"?</div>
    <p>שמה של ברכה זו מפתח להבנתה: <strong>"מעין"</strong> – דמיון, תמצית. <strong>"שלוש"</strong> – שלוש הברכות הראשונות של ברכת המזון. כלומר: ברכה מקוצרת שמשקפת את שלושת עיקרי ברכת המזון – על המזון, על הארץ ועל ירושלים.</p>

    <div class="source-box">
        <div class="source-label">📖 ברכות מד, א; שו"ע קפח, א; פניני הלכה ברכות י, יד</div>
        "שלש ברכות כנגד שלש: 'על המחיה' כנגד 'הזן את הכל', 'על הארץ' כנגד ברכת הארץ, 'ובנה ירושלים' כנגד ברכת בונה ירושלים". חז"ל תיקנו ברכה מעוצבת זו עבור מאכלים חשובים שאינם לחם.
    </div>

    <div class="section-title">שלושת הנוסחים</div>
    <div class="table-container">
        <table>
            <thead><tr><th>נוסח</th><th>מתי?</th><th>דוגמאות</th><th>ברכה ראשונה</th></tr></thead>
            <tbody>
                <tr><td><strong>על המחיה ועל הכלכלה</strong></td><td>אחרי מאפי מזונות (שלא קבע עליהם סעודה)</td><td>עוגה, עוגיות, פסטה, בורקס, פיצה קטנה</td><td>מזונות</td></tr>
                <tr><td><strong>על העץ ועל פרי העץ</strong></td><td>אחרי פירות משבעת המינים</td><td>ענבים, תאנים, רימונים, זיתים, תמרים</td><td>העץ</td></tr>
                <tr><td><strong>על הגפן ועל פרי הגפן</strong></td><td>אחרי יין או מיץ ענבים</td><td>יין, מיץ ענבים (100%)</td><td>הגפן</td></tr>
            </tbody>
        </table>
    </div>

    <div class="highlight-box warning">
        <div class="highlight-box-title">⚠️ מי לא מברך מעין שלוש?</div>
        פירות עץ שאינם משבעת המינים (תפוח, אגס, מנגו, אבוקדו...) – ברכתם האחרונה היא <strong>"בורא נפשות"</strong> ולא מעין שלוש.<br>
        אורז – אף שמברכים עליו "מזונות", ברכתו האחרונה היא <strong>"בורא נפשות"</strong>, כי אינו מחמשת מיני דגן (שו"ע רח, ז).
    </div>

    <div class="section-title">שילובים</div>
    <p>כאשר אכל ממספר קטגוריות – אומר ברכה <strong>אחת</strong> ומשלב בתוכה את כל הנוסחים הרלוונטיים:</p>

    <div class="table-container">
        <table>
            <thead><tr><th>מה אכל/שתה</th><th>מה אומר</th></tr></thead>
            <tbody>
                <tr><td>מזונות בלבד</td><td>על המחיה ועל הכלכלה</td></tr>
                <tr><td>פירות שבעת המינים בלבד</td><td>על העץ ועל פרי העץ</td></tr>
                <tr><td>יין בלבד</td><td>על הגפן ועל פרי הגפן</td></tr>
                <tr style="background:var(--correct-bg)"><td>מזונות + פירות שבה"מ</td><td>על המחיה ועל הכלכלה, <strong>ועל העץ ועל פרי העץ</strong></td></tr>
                <tr style="background:var(--correct-bg)"><td>מזונות + יין</td><td>על המחיה ועל הכלכלה, <strong>ועל הגפן ועל פרי הגפן</strong></td></tr>
                <tr style="background:var(--correct-bg)"><td>פירות שבה"מ + יין</td><td>על העץ ועל פרי העץ, <strong>ועל הגפן ועל פרי הגפן</strong></td></tr>
                <tr style="background:var(--primary-bg)"><td><strong>שלושתם יחד</strong></td><td><strong>על המחיה ועל הכלכלה, ועל העץ ועל פרי העץ, ועל הגפן ועל פרי הגפן</strong></td></tr>
            </tbody>
        </table>
    </div>

    <div class="section-title">תוספות לימים מיוחדים</div>
    <p>מוסיפים לפני <strong>"כי אתה ה' טוב ומטיב"</strong> שבסיום הברכה (שו"ע קפח, ה–ו):</p>
    <div class="table-container">
        <table>
            <thead><tr><th>יום</th><th>נוסח אשכנז</th><th>נוסח ספרד / עדות המזרח</th></tr></thead>
            <tbody>
                <tr>
                    <td>שבת</td>
                    <td>"ורצה והחליצנו ביום <strong>השבת הגדול והקדוש</strong> הזה"</td>
                    <td>"ורצה והחליצנו ביום השבת הזה"</td>
                </tr>
                <tr>
                    <td>ראש חודש</td>
                    <td colspan="2">"וזכרנו לטובה ביום ראש החודש הזה"</td>
                </tr>
                <tr>
                    <td>ראש השנה</td>
                    <td colspan="2">"וזכרנו לטובה ביום הזכרון הזה"</td>
                </tr>
                <tr>
                    <td>יום הכיפורים *</td>
                    <td colspan="2">"וזכרנו לטובה ביום הכיפורים הזה"</td>
                </tr>
                <tr>
                    <td>פסח</td>
                    <td colspan="2">"ושמחנו ביום חג המצות הזה"</td>
                </tr>
                <tr>
                    <td>שבועות</td>
                    <td colspan="2">"ושמחנו ביום חג השבועות הזה"</td>
                </tr>
                <tr>
                    <td>סוכות / חוה"מ</td>
                    <td colspan="2">"ושמחנו ביום חג הסוכות הזה"</td>
                </tr>
                <tr>
                    <td>שמיני עצרת / שמח"ת</td>
                    <td colspan="2">"ושמחנו ביום שמיני עצרת הזה"</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="example-box">
        <div class="example-label">* יום כיפור – למי רלוונטי?</div>
        <p>ביום כיפור כל הציבור צם ואינו אוכל, ולכן ברכת מעין שלוש כמעט אינה מגיעה. <strong>הפטורים מהצום שאוכלים ביום כיפור</strong> – ילדים שלא הגיעו לגיל מצוות, חולים שצריכים לאכול, נשים בסיכון ויולדות – הם שמוסיפים תוספת זו.</p>
    </div>
    <div class="highlight-box">
        <div class="highlight-box-title">📌 שכח תוספת</div>
        שכח לומר תוספת כלשהי (שבת, יו"ט, ראש חודש) – <strong>אינו חוזר</strong>, שכן מעין שלוש היא מדרבנן (שו"ע קפח, ח).
    </div>

    <div class="section-title">הלכות מיוחדות</div>

    <div class="subsection-title">ברכה בתוך סעודת לחם</div>
    <p>מי שאכל מזונות או פירות שבעת המינים <strong>בתוך סעודת לחם</strong> (שכבר בירך "המוציא") – ברכת המזון שבסוף הסעודה פוטרת אותם ואינו מברך מעין שלוש. לגבי <strong>מזונות</strong> – הדין ברור (שו"ע קעז, א). לגבי <strong>פירות שבה"מ</strong> – יש מחלוקת, ולמעשה רוב הפוסקים פוטרים אותם בברכת המזון (פנה"ל י, יד). <strong>יין</strong> – יש לברך "הגפן" לפניו, אך ברכת המזון פוטרת את ברכתו האחרונה.</p>

    <div class="subsection-title">זמן הברכה</div>
    <p>יש לברך מעין שלוש <strong>כל עוד לא נתעכל המאכל</strong> – בדרך כלל עד כ-<strong>72 דקות</strong> לאחר הסיום. בדיעבד, אם שהה יותר יש מחלוקת; לכתחילה יש לברך מיד בגמר האכילה (שו"ע קפד, ה).</p>

    <div class="highlight-box">
        <div class="highlight-box-title">💡 שיעור מינימלי לחיוב</div>
        <strong>מאכל:</strong> כזית (≈27 גרם) בכדי אכילת פרס (≈4 דקות).<br>
        <strong>יין:</strong> רביעית (≈86 מ"ל) – ובתנאי ששתה ברצף ולא בלגימות מפוזרות.<br>
        פחות מהשיעור – אין מברכים מעין שלוש כלל.
    </div>

    <div class="source-box">
        <div class="source-label">📖 ברכות מד, א; שו"ע קפח, א–ח; פניני הלכה ברכות י, יד–טז</div>
        ברכה מעין שלוש נתקנה מדרבנן כנגד שלוש ברכות ברכת המזון. נוסחה מותאם לסוג המאכל: "על המחיה" – מזונות, "על העץ" – פירות שבה"מ, "על הגפן" – יין. ניתן לשלב נוסחים בברכה אחת. שכח תוספות שבת/יו"ט – אינו חוזר.
    </div>`
},
// שקף 34 - Boreh Nefashot
{
    title: "בורא נפשות",
    menu: "בורא נפשות",
    section: "ברכות אחרונות",
    content: `
    <div class="slide-header">
        <h1>ברכת בורא נפשות</h1>
        <div class="subtitle">הברכה האחרונה הכללית</div>
    </div>

    <div class="bracha-text">בָּרוּךְ אַתָּה ה' אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, בּוֹרֵא נְפָשׁוֹת רַבּוֹת וְחֶסְרוֹנָן, עַל כָּל מַה שֶּׁבָּרָא לְהַחֲיוֹת בָּהֶם נֶפֶשׁ כָּל חָי, בָּרוּךְ חֵי הָעוֹלָמִים</div>

    <div class="section-title">פירוש מילולי</div>
    <div class="table-container">
        <table>
            <thead><tr><th>מילות הברכה</th><th>פירוש</th></tr></thead>
            <tbody>
                <tr><td><strong>בּוֹרֵא נְפָשׁוֹת רַבּוֹת</strong></td><td>ה' ברא יצורים חיים רבים ומגוונים – בני אדם, בעלי חיים, כל חי</td></tr>
                <tr><td><strong>וְחֶסְרוֹנָן</strong></td><td>וברא גם את מה שחסר להם, את צרכיהם – מזון, מים, אוויר. ה' לא רק יצר את הנפשות, אלא גם דאג שיהיה להן מה להתקיים ממנו</td></tr>
                <tr><td><strong>עַל כָּל מַה שֶּׁבָּרָא</strong></td><td>על כל הדברים שברא – לא רק על המאכל הזה שאכלתי, אלא על עצם השפע שברא בעולם</td></tr>
                <tr><td><strong>לְהַחֲיוֹת בָּהֶם נֶפֶשׁ כָּל חָי</strong></td><td>כדי לקיים בהם את חיי כל יצור חי – הבריאה כולה מכוונת לתמוך בחיים</td></tr>
                <tr><td><strong>בָּרוּךְ חֵי הָעוֹלָמִים</strong></td><td>חתימה ייחודית: ה' הוא חי העולמים – מקור החיים לכל הדורות. שלא כשאר ברכות הנהנין שחותמות ב"ברוך אתה ה'...", ברכה זו חותמת ב"ברוך חי העולמים" – נוסח חתימה שונה המבטא את אינסוף החיות האלוקית</td></tr>
            </tbody>
        </table>
    </div>

    <div class="highlight-box success">
        <div class="highlight-box-title">✨ עומק הברכה</div>
        "בורא נפשות וחסרונן" – ברכה זו רחבה מכל הברכות האחרות: היא אינה על מאכל מסוים בלבד, אלא הודאה על עצם עיקרון הקיום – שה' ברא עולם שבו לכל יצור יש את מה שהוא צריך. כשאוכלים תפוח ומברכים "בורא נפשות", מכירים בכך שה' לא רק ברא אותנו, אלא גם ברא את הסביבה כולה שתספק את צרכינו.
    </div>

    <div class="section-title">על מה מברכים?</div>
    <p>על כל מאכל ומשקה שאינו בקטגוריות של ברכת המזון או מעין שלוש – לאחר אכילת <strong>כזית (≈27 גרם)</strong> או שתיית <strong>רביעית (≈86 מ"ל)</strong>:</p>
    <div class="cards-grid">
        <div class="card">
            <div class="card-icon">🥩</div>
            <div class="card-title">בשר, עוף, דגים, ביצים</div>
            <div class="card-text">כל המאכלים מן החי</div>
        </div>
        <div class="card">
            <div class="card-icon">🧀</div>
            <div class="card-title">מוצרי חלב</div>
            <div class="card-text">חלב, גבינה, יוגורט, גלידה</div>
        </div>
        <div class="card">
            <div class="card-icon">🍎</div>
            <div class="card-title">פירות עץ שאינם שבה"מ</div>
            <div class="card-text">תפוח, אגס, מנגו, אבוקדו, אפרסק...</div>
        </div>
        <div class="card">
            <div class="card-icon">🥕</div>
            <div class="card-title">ירקות ופירות אדמה</div>
            <div class="card-text">גזר, בננה, אבטיח, תפו"א, עגבנייה...</div>
        </div>
        <div class="card">
            <div class="card-icon">💧</div>
            <div class="card-title">משקאות (לא יין)</div>
            <div class="card-text">מים, קפה, תה, מיץ, קולה, בירה</div>
        </div>
        <div class="card">
            <div class="card-icon">🍫</div>
            <div class="card-title">ממתקים וחטיפים</div>
            <div class="card-text">שוקולד, סוכריות, ופלים, במבה</div>
        </div>
    </div>

    <div class="section-title">זמן הברכה</div>
    <div class="table-container">
        <table>
            <thead><tr><th>מצב</th><th>עד מתי מברכים?</th></tr></thead>
            <tbody>
                <tr><td>אכילה (מאכל מוצק)</td><td>עד שיתעכל המאכל – כ-<strong>72 דקות</strong> לאחר הסיום (שו"ע קפד, ה)</td></tr>
                <tr><td>שתייה (משקה)</td><td>יש אומרים עד <strong>72 דקות</strong>, ויש אומרים עד <strong>30 דקות</strong> בלבד. לכתחילה יש לברך מיד</td></tr>
            </tbody>
        </table>
    </div>
    <div class="highlight-box warning">
        <div class="highlight-box-title">⚠️ עצה מעשית</div>
        יש לברך <strong>מיד עם סיום האכילה</strong> – כך יוצאים מכל ספק. המתעכב עלול לשכוח, ואז יש ספק אם עדיין יכול לברך (ספק ברכות להקל).
    </div>

    <div class="section-title">מקום הברכה</div>
    <p>בורא נפשות <strong>ניתן לברך בכל מקום</strong>, גם לאחר שינוי מקום מהמקום שבו אכל. בניגוד למעין שלוש וברכת המזון שיש בהן דיון האם שינוי מקום מחייב לברך שוב – בורא נפשות אינה קשורה למקום כלל (פנה"ל י, ז).</p>

    <div class="section-title">מה אם חייב גם מעין שלוש וגם בורא נפשות?</div>
    <p>אם אכל ממאכלים ששייכים לשתי קטגוריות שונות – לדוגמה, עוגה (מעין שלוש) ותפוח (בורא נפשות) – <strong>מברך שתי ברכות נפרדות</strong>. אין ברכה אחת שיכולה לכסות את שתיהן.</p>
    <div class="example-box">
        <div class="example-label">📋 הסדר הנכון</div>
        <p>כשיש גם מעין שלוש וגם בורא נפשות – יש מחלוקת בין הפוסקים:<br>
        <strong>אשכנזים ורבים מהספרדים</strong> (מ"ב, שע"צ ר"ח סד; ביאור הלכה ר"ב יא): <strong>מעין שלוש קודם</strong>, כי חשובה יותר.<br>
        <strong>רב עובדיה יוסף</strong> (יביע אומר ה' או"ח יז): <strong>בורא נפשות קודם</strong>, כי חושש שמעין שלוש תפטור גם את הירקות בניסוח "ועל תנובת השדה".<br><br>
        <strong>דוגמה (לפי הסדר האשכנזי/מ"ב):</strong> אכל עוגה, תפוח ושתה קפה:<br>
        1. "על המחיה..." (על העוגה) – מעין שלוש<br>
        2. "בורא נפשות..." (על התפוח והקפה יחד)</p>
    </div>
    <div class="highlight-box">
        <div class="highlight-box-title">💡 בורא נפשות אחת לכולם</div>
        אחרי שברך מעין שלוש – מברך <strong>בורא נפשות אחת</strong> על כל שאר המאכלים שאכל (תפוח, גזר, בשר, מים) יחד, ללא הבחנה. אין לברך בורא נפשות נפרדת על כל מאכל.
    </div>

    <div class="source-box">
        <div class="source-label">📖 שו"ע ר"ז, א; קעח; פניני הלכה ברכות י, ז; יביע אומר ה' או"ח יז; שע"צ ר"ח סד</div>
        "בורא נפשות רבות וחסרונן" – הודאה על כל הדברים שה' ברא לקיום החיים. מברכים לאחר כזית מאכל או רביעית משקה, עד ~72 דקות. בורא נפשות ניתנת לאמירה בכל מקום (שו"ע קעח). כשיש גם מעין שלוש – מחלוקת בסדר: מ"ב – מעין שלוש קודם; רב עובדיה יוסף – בורא נפשות קודם.
    </div>`
},
// שקף 35 - Bracha acharona flowchart
{
    title: "תרשים: ברכה אחרונה",
    menu: "תרשים – ברכה אחרונה",
    section: "ברכות אחרונות",
    content: `
    <div class="slide-header">        <h1>תרשים: איך בוחרים ברכה אחרונה?</h1>
    </div>

    <div class="flowchart">
        <div class="fc-node fc-question">מה אכלת / שתית?</div>
        <div class="fc-arrow">⬇️</div>

        <div class="fc-branch">
            <div class="fc-node fc-yes" style="flex:1.3">
                <div class="fc-label">🍞 לחם (המוציא)</div>
                <strong>ברכת המזון</strong><br><span style="font-size:0.8em">(4 ברכות)</span>
            </div>
            <div class="fc-node fc-no" style="flex:1">
                <div class="fc-label">➡️ לא לחם</div>
                ממשיכים ⬇️
            </div>
        </div>

        <div class="fc-arrow">⬇️</div>
        <div class="fc-node fc-question">האם אכלת: מזונות / פירות שבעת המינים / יין?</div>
        <div class="fc-arrow">⬇️</div>

        <div class="fc-branch">
            <div class="fc-node fc-yes" style="flex:1.3">
                <div class="fc-label">✅ כן</div>
                <strong>מעין שלוש</strong><br><span style="font-size:0.8em">(על המחיה / על העץ / על הגפן)</span>
            </div>
            <div class="fc-node fc-result" style="flex:1">
                <div class="fc-label">❌ לא</div>
                <strong>בורא נפשות</strong>
            </div>
        </div>
    </div>

    <div class="highlight-box warning">
        <div class="highlight-box-title">⚠️ שיעור מינימלי</div>
        מברכים ברכה אחרונה רק אם אכלו <strong>כזית</strong> (≈27 גרם) או שתו <strong>רביעית</strong> (≈86 מ"ל). פחות מזה – אין ברכה אחרונה.
    </div>`
},
// שקף 36 - Last bracha rules (merged)
{
    title: "כללים מיוחדים לברכות אחרונות",
    menu: "כללים לברכות אחרונות",
    section: "מקרים מיוחדים",
    content: `
    <div class="slide-header">
        <h1>כללים מיוחדים לברכות אחרונות</h1>
        <div class="subtitle">ספק · שינוי מקום – ההבדל מברכה ראשונה</div>
    </div>

    <div class="section-title">ספק ברכות אחרונות</div>
    <p>הכלל הכללי "ספק ברכות להקל" חל גם כאן – כשיש ספק אם צריך לברך ברכה אחרונה, <strong>לא מברכים</strong>. אולם יש הבדלים חשובים בין סוגי הברכות:</p>
    <div class="table-container">
        <table>
            <thead><tr><th>מצב ספק</th><th>ברכת המזון</th><th>מעין שלוש</th><th>בורא נפשות</th></tr></thead>
            <tbody>
                <tr>
                    <td>לא בטוח אם אכל <strong>כזית</strong></td>
                    <td>אכל ושבע → חוזר ומברך. לא שבע → ספק, לא מברך</td>
                    <td>ספק → לא מברך</td>
                    <td>ספק → לא מברך</td>
                </tr>
                <tr>
                    <td>לא בטוח אם <strong>כבר בירך</strong></td>
                    <td>⚠️ <strong>חוזר ומברך</strong> – חיוב מהתורה (שו"ע קפד, א)</td>
                    <td>לא מברך – מדרבנן</td>
                    <td>לא מברך – מדרבנן</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="highlight-box">
        <div class="highlight-box-title">📌 ברכת המזון – חריג חשוב</div>
        ברכת המזון היא הברכה היחידה שחיובה <strong>מן התורה</strong>. לכן ספק אם בירך – <strong>חוזר ומברך</strong>, בניגוד לכל שאר הברכות שבהן ספק = להקל.<br>
        וגם לגבי הכמות: חיוב התורה מנוסח "וְאָכַלְתָּ <strong>וְשָׂבָעְתָּ</strong> וּבֵרַכְתָּ" – לכן מי שאכל ושבע, חוזר ומברך אפילו בספק. מי שאכל כזית בלבד ולא שבע – ספק ברכות להקל.
    </div>
    <div class="example-box">
        <div class="example-label">📋 דוגמאות מעשיות</div>
        <p>לא בטוח אם אכלת כזית תפוח → לא מברך "בורא נפשות".<br>
        לא בטוח אם בירכת "על המחיה" אחרי העוגה → לא מברך שוב.<br>
        אכלת ושבעת ולא בטוח אם בירכת ברכת המזון → <strong>חוזר ומברך</strong>.</p>
    </div>

    <div class="section-title">שינוי מקום – שונה מברכה ראשונה</div>
    <p>לברכות אחרונות יש דין שינוי מקום שונה מברכה ראשונה, ושונה בין סוגי הברכות. המקור הוא שו"ע קעח ומחלוקת ראשונים (פסחים קא ע"ב):</p>
    <div class="table-container">
        <table>
            <thead><tr><th>ברכה אחרונה</th><th>עזב לפני שבירך – מה הדין?</th></tr></thead>
            <tbody>
                <tr style="background:var(--correct-bg)">
                    <td><strong>בורא נפשות</strong></td>
                    <td><strong>אין דין מקום כלל</strong> – מברך בכל מקום שירצה; אין צורך לחזור (שו"ע קעח; פנה"ל ט, ז)</td>
                </tr>
                <tr>
                    <td><strong>מעין שלוש</strong></td>
                    <td>לכתחילה יחזור למקומו ויברך. אם בירך במקום אחר – יצא בדיעבד. הערה: לדעת הגר"א ומ"ב, יין ופירות שבה"מ אינם מחייבים חזרה; "על המחיה" (מזונות) – כדין ברכת המזון (מ"ב קעח, מה)</td>
                </tr>
                <tr style="background:var(--warning-bg)">
                    <td><strong>ברכת המזון</strong></td>
                    <td>חייב לברך במקומו: <strong>במזיד</strong> – חוזר למקומו ומברך; <strong>בשוגג</strong> – לרמב"ם מברך היכן שהוא, לרא"ש חוזר. למעשה: לכתחילה חוזר (שו"ע קפד, א; מ"ב שם)</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="highlight-box warning">
        <div class="highlight-box-title">⚠️ ההבדל מברכה ראשונה – הפוך!</div>
        <strong>ברכה ראשונה:</strong> שינוי מקום מחייב ברכה חדשה דוקא על מאכלים שברכתם האחרונה היא בורא נפשות. ואילו לחם ומזונות (שברכתם האחרונה "חשובה") – ברכתם הראשונה אינה פוקעת בשינוי מקום.<br>
        <strong>ברכה אחרונה:</strong> בורא נפשות – ניתן לאמרה בכל מקום. מעין שלוש וברכת המזון – לכתחילה במקום האכילה.
    </div>

    <div class="source-box">
        <div class="source-label">📖 שו"ע קעח, א; קפד, א; מ"ב קעח, מה; פניני הלכה ברכות ט, ז</div>
        מחלוקת ראשונים: רמב"ם – כל מאכל חייב ברכה אחרונה במקומו. רא"ש – רק לחם חייב; שאר מאכלים מברך בכל מקום. שו"ע פסק כרמב"ם לכתחילה; מ"ב הכריע שלמעשה בורא נפשות מברך בכל מקום, ומעין שלוש – לכתחילה במקומו.
    </div>`
},
// שקף 37 - Daily examples: breakfast
{
    title: "דוגמה: ארוחת בוקר",
    menu: "דוגמה: ארוחת בוקר",
    section: "דוגמאות מעשיות",
    content: `
    <div class="slide-header">        <h1>דוגמה מעשית: ארוחת בוקר</h1>
        <div class="subtitle">תרגול יומיומי</div>
    </div>

    <p><strong>התפריט:</strong> לחם עם חמאה וריבה, ביצה מקושקשת, סלט ירקות, קפה עם חלב, ותפוז.</p>

    <div class="table-container">
        <table>
            <thead><tr><th>מאכל</th><th>ברכה ראשונה</th><th>הסבר</th></tr></thead>
            <tbody>
                <tr><td>🍞 לחם</td><td><strong>המוציא</strong></td><td>אחרי נטילת ידיים. פוטר: חמאה, רבה, ביצה, סלט</td></tr>
                <tr><td>🧈 חמאה ורבה</td><td><em>נפטרים</em></td><td>טפלים ללחם</td></tr>
                <tr><td>🥚 ביצה</td><td><em>נפטרת</em></td><td>חלק מהסעודה – נפטרת בהמוציא</td></tr>
                <tr><td>🥗 סלט</td><td><em>נפטר</em></td><td>חלק מהסעודה</td></tr>
                <tr><td>☕ קפה</td><td><em>נפטר</em></td><td>משקה בתוך הסעודה</td></tr>
                <tr><td>🍊 תפוז</td><td><strong>העץ</strong></td><td>פרי – קינוח, לא נפטר בהמוציא</td></tr>
            </tbody>
        </table>
    </div>

    <div class="highlight-box">
        <div class="highlight-box-title">📌 ברכה אחרונה</div>
        בסוף הסעודה – <strong>ברכת המזון</strong> (פוטרת הכל, כולל את התפוז).
    </div>`
},
// שקף 38 - Daily examples: snacks
{
    title: "דוגמה: נשנושים",
    menu: "דוגמה: נשנושים",
    section: "דוגמאות מעשיות",
    content: `
    <div class="slide-header">        <h1>דוגמה מעשית: נשנושים אחר הצהריים</h1>
        <div class="subtitle">ללא סעודה שבתחילתה לחם</div>
    </div>

    <p><strong>התפריט:</strong> עוגיית שוקולד, תפוח, בוטנים, וכוס מיץ תפוזים.</p>

    <div class="table-container">
        <table>
            <thead><tr><th>מאכל</th><th>ברכה ראשונה</th><th>ברכה אחרונה</th></tr></thead>
            <tbody>
                <tr><td>🍪 עוגייה</td><td><strong>מזונות</strong></td><td>על המחיה</td></tr>
                <tr><td>🍎 תפוח</td><td><strong>העץ</strong></td><td>בורא נפשות</td></tr>
                <tr><td>🥜 בוטנים</td><td><strong>האדמה</strong></td><td>בורא נפשות (אם אכל כזית)</td></tr>
                <tr><td>🧃 מיץ תפוזים</td><td><strong>שהכל</strong></td><td>בורא נפשות</td></tr>
            </tbody>
        </table>
    </div>

    <div class="section-title">סדר הברכות הנכון</div>
    <ol class="num-list">
        <li><strong>מזונות</strong> על העוגייה (קודמת – ברכה מבוררת יותר)</li>
        <li><strong>העץ</strong> על התפוח</li>
        <li><strong>האדמה</strong> על הבוטנים</li>
        <li><strong>שהכל</strong> על מיץ התפוזים</li>
    </ol>

    <div class="highlight-box">
        <div class="highlight-box-title">📌 ברכות אחרונות</div>
        <strong>על המחיה</strong> (עוגייה) + <strong>בורא נפשות</strong> (תפוח, בוטנים, מיץ) – שתי ברכות אחרונות נפרדות. הבוטנים טעונים בורא נפשות רק אם אכל כזית (≈27 גרם).
    </div>`
},
// שקף 39 - Summary table
{
    title: "טבלת סיכום מקיפה",
    menu: "טבלת סיכום",
    section: "סיכום",
    content: `
    <div class="slide-header">        <h1>טבלת סיכום מקיפה</h1>
        <div class="subtitle">ברכות ראשונות ואחרונות</div>
    </div>

    <div class="table-container">
        <table>
            <thead><tr><th>סוג מאכל</th><th>ברכה ראשונה</th><th>ברכה אחרונה</th><th>דוגמאות</th></tr></thead>
            <tbody>
                <tr><td>לחם</td><td>המוציא</td><td>ברכת המזון</td><td>לחם, חלה, פיתה</td></tr>
                <tr><td>מאפי דגן (לא לחם)</td><td>מזונות</td><td>על המחיה</td><td>עוגה, פסטה, בורקס</td></tr>
                <tr><td>יין / מיץ ענבים</td><td>הגפן</td><td>על הגפן</td><td>יין, מיץ ענבים</td></tr>
                <tr><td>פירות עץ – 7 מינים</td><td>העץ</td><td>על העץ</td><td>זית, תמר, ענב, תאנה, רימון</td></tr>
                <tr><td>פירות עץ – אחרים</td><td>העץ</td><td>בורא נפשות</td><td>תפוח, אגס, מנגו</td></tr>
                <tr><td>ירקות ופירות אדמה</td><td>האדמה</td><td>בורא נפשות</td><td>גזר, עגבנייה, בננה, אבטיח</td></tr>
                <tr><td>בשר, דגים, ביצים</td><td>שהכל</td><td>בורא נפשות</td><td>סטייק, סלמון, חביתה</td></tr>
                <tr><td>מוצרי חלב</td><td>שהכל</td><td>בורא נפשות</td><td>חלב, גבינה, יוגורט</td></tr>
                <tr><td>משקאות (לא יין)</td><td>שהכל</td><td>בורא נפשות</td><td>מים, קפה, מיץ, קולה</td></tr>
                <tr><td>ממתקים</td><td>שהכל</td><td>בורא נפשות</td><td>שוקולד, סוכריות</td></tr>
            </tbody>
        </table>
    </div>`
},
// שקף 40 - Brachot on smell - principles
{
    title: "ברכות על ריח – עקרונות",
    menu: "ברכות על ריח – עקרונות",
    section: "ברכות נוספות",
    content: `
    <div class="slide-header">
        <h1>ברכות על ריח</h1>
        <div class="subtitle">הנאת הנפש – ברכה ראשונה בלבד</div>
    </div>

    <div class="section-title">המעמד המיוחד של ריח</div>
    <p>גם הנאה מריח טוב מחייבת ברכה, אך הנאת הריח שונה מהנאת האכילה בנקודה מהותית:</p>
    <div class="two-cols">
        <div class="highlight-box success" style="margin:0">
            <div class="highlight-box-title">🍎 אכילה ושתייה</div>
            המאכל נכנס לגוף ומשתלב בו. ההנאה גופנית ומשאירה "רושם" – לכן יש ברכה <strong>ראשונה ואחרונה</strong>.
        </div>
        <div class="highlight-box" style="margin:0">
            <div class="highlight-box-title">🌸 ריח</div>
            הריח אינו נכנס לגוף. הגמרא: <strong>"ריח – נפשו של אדם נהנית ממנו"</strong> (ברכות מג, ב) – הנאת הנפש, לא הגוף. לכן ברכה ראשונה בלבד, <strong>ואין ברכה אחרונה כלל</strong> (שו"ע רטז, א).
        </div>
    </div>

    <div class="section-title">ארבע ברכות הריח</div>
    <div class="table-container">
        <table>
            <thead><tr><th>הברכה</th><th>על מה?</th><th>הגדרה</th></tr></thead>
            <tbody>
                <tr><td><strong>בורא עצי בשמים</strong></td><td>עץ ריחני</td><td>עץ שגזעו מתקיים משנה לשנה <strong>והוא עצמו</strong> ריחני (לא רק הפרח)</td></tr>
                <tr><td><strong>בורא עשבי בשמים</strong></td><td>עשב/צמח ריחני</td><td>צמח שאינו עץ – גזעו חד-שנתי, או שהריח בעלים/גבעולים (לא בעץ)</td></tr>
                <tr><td><strong>הנותן ריח טוב בפירות</strong></td><td>פרי ריחני</td><td>ריח הבא מפרי עצמו (לא מהעץ ולא מהפרח)</td></tr>
                <tr><td><strong>בורא מיני בשמים</strong></td><td>כשמסופקים</td><td>כשמקור הריח אינו ידוע בדיוק, או שאינו נכנס לקטגוריות לעיל</td></tr>
            </tbody>
        </table>
    </div>

    <div class="section-title">מתי לא מברכים?</div>
    <div class="table-container">
        <table>
            <thead><tr><th>מצב</th><th>דין</th><th>הסבר</th></tr></thead>
            <tbody>
                <tr><td>ריח אוכל שמתבשל</td><td>❌ לא מברכים</td><td>הריח לוואי של הכנת מזון, לא מכוון להנאת ריח</td></tr>
                <tr><td>הריח הגיע אליו אגב (לא כיוון להריח)</td><td>❌ לא מברכים</td><td>ברכה רק כשנהנה בכוונה (שו"ע רטז, א)</td></tr>
                <tr><td>בושם שתפקידו להעביר ריח רע (דאודורנט, מבשם אוויר לשירותים)</td><td>❌ לא מברכים</td><td>ייעודו סילוק ריח רע, לא הנאה מריח טוב (שו"ע רטז, א; מ"ב שם)</td></tr>
                <tr><td>מאכל ריחני שאוכל אותו</td><td>❌ נפטר בברכת האכילה</td><td>ברכת הנהנין על האכילה פוטרת את ריחו</td></tr>
                <tr><td>בושם על גוף אדם אחר</td><td>⚖️ מחלוקת</td><td>יש אומרים שאין לו חלק בריח; למעשה – אם נהנה בכוונה, מברכים (פנה"ל יא, ב)</td></tr>
                <tr><td>בשמים בשעת מצוות ארבעת המינים</td><td>❌ לא מברכים</td><td>ברכת המצווה פוטרת את ריח הבשמים</td></tr>
            </tbody>
        </table>
    </div>

    <div class="highlight-box">
        <div class="highlight-box-title">💡 כלל מעשי בספקות</div>
        כשמסופקים בין "עצי" ל"עשבי" – מברכים <strong>"מיני בשמים"</strong> שהיא כוללנית ופוטרת בדיעבד. אך לכתחילה יש לברר את מקור הריח ולברך את הברכה המדויקת.
    </div>

    <div class="source-box">
        <div class="source-label">📖 ברכות מג, ב; שו"ע רטז, א–ו; משנה ברורה רטז; פניני הלכה ברכות יא</div>
        "ריח – נפשו של אדם נהנית ממנו, לפיכך אין מברכים עליו ברכה אחרונה". ארבע ברכות הריח: עצי, עשבי, פירות, מיני – לפי מקור הריח ומהות הצמח.
    </div>`
},
// שקף 41 - Brachot on smell - examples and disputes
{
    title: "ברכות על ריח – דוגמאות ומחלוקות",
    menu: "ברכות על ריח – דוגמאות",
    section: "ברכות נוספות",
    content: `
    <div class="slide-header">
        <h1>ברכות על ריח – דוגמאות ומחלוקות</h1>
        <div class="subtitle">צמחים נפוצים · ריח סינטטי · ריח ללא מקור מזוהה</div>
    </div>

    <div class="section-title">דוגמאות מפורטות</div>
    <div class="table-container">
        <table>
            <thead><tr><th>הצמח/הריח</th><th>הברכה למעשה</th><th>הערות ומחלוקות</th></tr></thead>
            <tbody>
                <tr style="background:var(--correct-bg)">
                    <td>🌿 <strong>הדס</strong></td>
                    <td><strong>עצי בשמים</strong></td>
                    <td>מוסכם – שיח עץ רב-שנתי. הברכה הנפוצה בהבדלה</td>
                </tr>
                <tr style="background:var(--correct-bg)">
                    <td>🌺 <strong>ציפורן/קרנפל</strong></td>
                    <td><strong>עצי בשמים</strong></td>
                    <td>ניצן פרח של עץ – מוסכם. נפוץ בהבדלה</td>
                </tr>
                <tr style="background:var(--correct-bg)">
                    <td>🌱 <strong>נענע</strong></td>
                    <td><strong>עשבי בשמים</strong></td>
                    <td>עשב חד-שנתי – מוסכם</td>
                </tr>
                <tr style="background:var(--correct-bg)">
                    <td>🌿 <strong>בזיליקום (ריחן)</strong></td>
                    <td><strong>עשבי בשמים</strong></td>
                    <td>עשב שנתי – מוסכם</td>
                </tr>
                <tr>
                    <td>🌹 <strong>ורד (שושנה)</strong></td>
                    <td><strong>עצי בשמים</strong> (לרוב)</td>
                    <td>שיח רב-שנתי עם גזע מתקיים → "עצי" לרוב הפוסקים (מ"ב רטז, יד). יש אומרים "עשבי" על הפרח הנקטף</td>
                </tr>
                <tr>
                    <td>💜 <strong>לבנדר</strong></td>
                    <td><strong>עצי בשמים</strong> (לרוב)</td>
                    <td>שיח רב-שנתי עם גבעולים מעוצים → "עצי" לרוב. יש אומרים "עשבי" כי הריח בפרחים</td>
                </tr>
                <tr>
                    <td>🌿 <strong>רוזמרין</strong></td>
                    <td><strong>עצי בשמים</strong> (לרוב)</td>
                    <td>שיח מעוצה רב-שנתי → "עצי". יש אומרים "מיני" בגלל ספק בסיווגו</td>
                </tr>
                <tr>
                    <td>🌿 <strong>גרניום</strong></td>
                    <td><strong>עשבי בשמים</strong></td>
                    <td>גבעולים ירוקים לא מעוצים → "עשבי" (פנה"ל). יש אומרים "מיני"</td>
                </tr>
                <tr>
                    <td>🌸 <strong>יסמין</strong></td>
                    <td><strong>עצי בשמים</strong> / מחלוקת</td>
                    <td>מטפס מעוצה רב-שנתי → "עצי" לדעות רבות. יש אומרים "מיני"</td>
                </tr>
                <tr>
                    <td>🟤 <strong>קינמון – מקל</strong></td>
                    <td><strong>עצי בשמים</strong></td>
                    <td>קליפת עץ בצורתה המקורית</td>
                </tr>
                <tr>
                    <td>🟤 <strong>קינמון – טחון</strong></td>
                    <td><strong>מיני בשמים</strong></td>
                    <td>לאחר עיבוד ואיבוד צורתו המקורית (מ"ב שם)</td>
                </tr>
                <tr style="background:var(--correct-bg)">
                    <td>🍊 <strong>אתרוג, תפוז, לימון</strong></td>
                    <td><strong>הנותן ריח טוב בפירות</strong></td>
                    <td>ריח הפרי עצמו. אתרוג – מברכים כשמריח סתם, לא בשעת קיום המצווה</td>
                </tr>
                <tr>
                    <td>🍎 <strong>תפוח</strong></td>
                    <td><strong>הנותן ריח טוב בפירות</strong></td>
                    <td>כשמריח מהפרי (לא מהעץ). אם אוכל – ברכת האכילה פוטרת</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="section-title">ריח סינטטי – מחלוקת עקרונית</div>
    <p>בושם מלאכותי, שמן ניחוח, ספריי ריחני – כשידוע שהריח מלאכותי ולא מצמח:</p>
    <div class="two-cols">
        <div class="card" style="border-right:4px solid var(--accent)">
            <div class="card-title">❌ אין מברכים – רב עובדיה יוסף</div>
            <div class="card-text">ברכות הריח נתקנו על בשמים שה' ברא – "בורא". ריח מלאכותי אינו יצירת הבורא ולכן לא נכלל בתקנת חז"ל (יביע אומר ח"ט או"ח לה).</div>
        </div>
        <div class="card" style="border-right:4px solid var(--primary)">
            <div class="card-title">✅ מברכים "מיני בשמים" – מ"ב ורוב אשכנזים</div>
            <div class="card-text">העיקר הוא ההנאה מריח טוב – ואם נהנה, חייב בברכה. "מיני בשמים" כוללת כל ריח שמקורו אינו ידוע במדויק (מ"ב רטז, ב; פנה"ל יא, ד).</div>
        </div>
    </div>
    <div class="highlight-box">
        <div class="highlight-box-title">📌 למעשה</div>
        ספרדים הנוהגים כרב עובדיה – לא מברכים על ריח סינטטי. אשכנזים ורבים מהספרדים – "מיני בשמים". בכל ספק – ספק ברכות להקל.
    </div>

    <div class="section-title">ריח שאין לו מקור מזוהה</div>
    <p>הולך ברחוב ומריח ריח טוב, או נכנס לחדר ומריח ניחוח נעים – אך אינו יודע מה מקורו:</p>
    <div class="table-container">
        <table>
            <thead><tr><th>מצב</th><th>דין</th></tr></thead>
            <tbody>
                <tr><td>ראה את מקור הריח אך אינו יודע שמו</td><td>מברך לפי <strong>מראה</strong> הצמח (עץ/עשב/פרי). אם ספק – "מיני בשמים"</td></tr>
                <tr><td>לא ראה ולא יודע כלל מה מקורו</td><td>אם נהנה בכוונה – מברך "מיני בשמים". אם ספק אם בכלל נהנה – ספק ברכות להקל (פנה"ל יא, ג)</td></tr>
                <tr><td>עבר ממקום למקום ולא בירך</td><td>אם עדיין נהנה מהריח – מברך. אם הריח פסק – ספק ברכות להקל</td></tr>
            </tbody>
        </table>
    </div>

    <div class="highlight-box warning">
        <div class="highlight-box-title">⚠️ כלל: מברכים לפני ההנאה</div>
        כמו בכל ברכות הנהנין – יש לברך <strong>לפני</strong> שמריח בכוונה. הריח מזדמן לרוב לפתע, לכן החיוב חל מרגע שמתכוון ליהנות.
    </div>

    <div class="source-box">
        <div class="source-label">📖 שו"ע רטז, ב; מ"ב רטז, ב–ד; יביע אומר ח"ט או"ח לה; פניני הלכה ברכות יא, ג–ד</div>
        ריח סינטטי: מחלוקת – ר' עובדיה אינו מברך; מ"ב ופנה"ל מברכים "מיני בשמים". ריח ללא מקור מזוהה – אם נהנה בכוונה מברכים "מיני בשמים".
    </div>`
},
// שקף 42 - SheHechianu - overview
{
    title: "ברכת שהחיינו",
    menu: "שהחיינו – משמעות וסקירה",
    section: "ברכות נוספות",
    content: `
    <div class="slide-header">
        <h1>ברכת שהחיינו</h1>
        <div class="subtitle">ברכת ההודאה על רגע חדש</div>
    </div>

    <div class="bracha-text">בָּרוּךְ אַתָּה ה' אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, שֶׁהֶחֱיָנוּ וְקִיְּמָנוּ וְהִגִּיעָנוּ לַזְּמַן הַזֶּה</div>

    <div class="section-title">משמעות מילות הברכה</div>
    <div class="table-container">
        <table>
            <thead><tr><th>מילה</th><th>משמעות</th></tr></thead>
            <tbody>
                <tr><td><strong>שֶׁהֶחֱיָנוּ</strong></td><td>שה' החיה אותנו – שמרנו בחיים עד לרגע זה</td></tr>
                <tr><td><strong>וְקִיְּמָנוּ</strong></td><td>וקיים אותנו – שמר על קיומנו והחזיק אותנו</td></tr>
                <tr><td><strong>וְהִגִּיעָנוּ לַזְּמַן הַזֶּה</strong></td><td>והביאנו עד לרגע הזה – זכינו להגיע לחוויה או המצווה הזו</td></tr>
            </tbody>
        </table>
    </div>
    <p>הברכה היא ביטוי של הכרת תודה על כך שזכינו להיות בחיים ולחוות דבר חדש, מחודש, או מיוחד. היא מבטאת שמחה על הרגע – "כמה טוב שזכינו להגיע לכאן".</p>

    <div class="section-title">סקירת כל המצבים</div>
    <div class="table-container">
        <table>
            <thead><tr><th>מצב</th><th>מתי?</th><th>מקור</th></tr></thead>
            <tbody>
                <tr style="background:var(--correct-bg)"><td>🗓️ <strong>חגים מדאורייתא</strong></td><td>שהחיינו על <em>עצם היום</em> – בקידוש (או הדלקת נרות לנשים אשכנזיות). פירוט בשקף הבא</td><td>שו"ע תפב, א; תר, ב</td></tr>
                <tr><td>📜 <strong>מצוות חגים</strong></td><td>שהחיינו על <em>המצוות</em> – שופר, לולב, מגילה, נרות חנוכה. בחגים דרבנן (חנוכה, פורים): על המצוות בלבד, לא על עצם היום. ראש חודש – אין שהחיינו. פירוט בשקף הבא</td><td>שו"ע תקפה, א; תרמא, א; תרצב, א</td></tr>
                <tr><td>🍓 <strong>פרי חדש של העונה</strong></td><td>בפעם הראשונה שאוכלים פרי עונתי השנה</td><td>שו"ע רכה, ג</td></tr>
                <tr><td>👔 <strong>בגד/כלי חדש וחשוב</strong></td><td>בעת רכישה או שימוש ראשון</td><td>שו"ע רכג, ד</td></tr>
                <tr><td>🏠 <strong>בית חדש</strong></td><td>בכניסה לבית שקנה או בנה לעצמו</td><td>שו"ע רכג, ג</td></tr>
                <tr><td>🤝 <strong>ראיית חבר אהוב</strong></td><td>שלא ראהו שלושים יום ושמח בראייתו</td><td>שו"ע רכב, א</td></tr>
            </tbody>
        </table>
    </div>

    <div class="highlight-box">
        <div class="highlight-box-title">💡 העיקרון המשותף</div>
        כל המצבים מאוחדים בנקודה אחת: <strong>שמחה על דבר שחוזר ומתחדש</strong> – לא על יומיום, אלא על משהו שיש בו ממד של "לראשונה" או "שוב אחרי הפסקה". ללא שמחה אמיתית – אין חיוב ברכה.
    </div>

    <div class="source-box">
        <div class="source-label">📖 שו"ע רכב–רכג; רכה; פניני הלכה ברכות יד</div>
        ברכת שהחיינו נאמרת על חוויות חדשות ומחודשות שמביאות שמחה. העיקרון: "הגיענו לזמן הזה" – שמחה על כך שזכינו לחיות ולהגיע לרגע זה.
    </div>`
},
// שקף 43 - SheHechianu - yamim tovim
{
    title: "שהחיינו – ימים טובים ומצוות",
    menu: "שהחיינו – ימים טובים",
    section: "ברכות נוספות",
    content: `
    <div class="slide-header">
        <h1>שהחיינו – ימים טובים ומצוות חגים</h1>
        <div class="subtitle">מתי מברכים, על מה, ובאיזה סדר</div>
    </div>

    <div class="section-title">חגים מדאורייתא – שהחיינו על עצם היום</div>
    <div class="table-container">
        <table>
            <thead><tr><th>חג</th><th>מתי מברכים?</th><th>הערה</th></tr></thead>
            <tbody>
                <tr><td>פסח, שבועות, סוכות, ראש השנה</td><td>נשים אשכנזיות – בהדלקת נרות; אחרים – בקידוש</td><td>—</td></tr>
                <tr style="background:var(--warning-bg)"><td>יום שני של ראש השנה</td><td>⚖️ מחלוקת – יש אומרים שהחיינו, יש אומרים לא (כי שני הימים "יום אחד ארוך"). <strong>למעשה: לכתחילה מניחים פרי חדש על השולחן או לובשים בגד חדש</strong> – כדי שיהיה על מה לברך בוודאי</td><td>שו"ע תר, ב; מ"ב שם</td></tr>
                <tr><td>יום כיפור</td><td>בתחילת תפילת ערבית (לפני קול נידרי)</td><td>אין קידוש, לכן מברכים בתפילה</td></tr>
                <tr style="background:var(--correct-bg)"><td>שמיני עצרת</td><td>✅ מברכים שהחיינו</td><td>חג מדאורייתא בפני עצמו, נפרד מסוכות</td></tr>
                <tr style="background:var(--warning-bg)"><td>שביעי של פסח</td><td>❌ לא מברכים</td><td>המשך חג פסח, לא "זמן" חדש</td></tr>
            </tbody>
        </table>
    </div>

    <div class="section-title">מצוות החגים – שהחיינו על המצווה</div>
    <p>בחגים מדאורייתא מברכים שהחיינו <em>גם</em> על עצם היום (בקידוש) <em>וגם</em> על מצוות החג. בחגים דרבנן – על המצוות בלבד, לא על היום:</p>
    <div class="table-container">
        <table>
            <thead><tr><th>מצווה</th><th>אשכנזים</th><th>ספרדים</th></tr></thead>
            <tbody>
                <tr style="background:var(--correct-bg)">
                    <td>🔊 <strong>תקיעת שופר</strong> (דאורייתא)</td>
                    <td colspan="2">ביום הראשון בלבד (שו"ע תקפה, א)</td>
                </tr>
                <tr style="background:var(--correct-bg)">
                    <td>🌿 <strong>נטילת לולב</strong> (דאורייתא)</td>
                    <td colspan="2">ביום הראשון בלבד (שו"ע תרמא, א)</td>
                </tr>
                <tr>
                    <td>🕎 <strong>נר חנוכה</strong> (דרבנן)</td>
                    <td colspan="2">לילה ראשון בלבד (שו"ע תרעו, א)</td>
                </tr>
                <tr>
                    <td>📜 <strong>קריאת מגילה</strong> (דרבנן)</td>
                    <td>בלילה <strong>ובבוקר</strong> – שתי קריאות, שתי ברכות</td>
                    <td>בלילה בלבד</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="source-box">
        <div class="source-label">📖 שו"ע תפב, א; תר, ב; תקפה, א; תרמא, א; תרעו, א; תרצב, א</div>
        שהחיינו על חגים מדאורייתא – בקידוש (או הדלקת נרות). על מצוות חגים – ביום קיום המצווה לראשונה בחג. בחגים דרבנן – על המצווה בלבד.
    </div>`
},
// שקף 44 - SheHechianu - new fruit
{
    title: "שהחיינו – פרי חדש",
    menu: "שהחיינו – פרי חדש",
    section: "ברכות נוספות",
    content: `
    <div class="slide-header">
        <h1>שהחיינו – פרי חדש של העונה</h1>
        <div class="subtitle">הכלל, הגבולות ומחלוקות</div>
    </div>

    <p>הכלל היסודי (שו"ע רכה, ג): מברכים שהחיינו על <strong>פרי המתחדש משנה לשנה</strong> – שיש לו עונה מוגדרת ואינו מצוי כל ימות השנה.</p>

    <div class="table-container">
        <table>
            <thead><tr><th>מצב</th><th>דין</th><th>מקור</th></tr></thead>
            <tbody>
                <tr style="background:var(--correct-bg)">
                    <td>פרי עץ עונתי שאינו מצוי כל השנה (שזיף, תות, מנגו...)</td>
                    <td>✅ מברכים</td>
                    <td>שו"ע רכה, ג</td>
                </tr>
                <tr style="background:var(--warning-bg)">
                    <td>פרי המצוי כל השנה בשוק (קירור, יבוא, חממות)</td>
                    <td>❌ אין מברכים – אין "התחדשות"</td>
                    <td>שו"ע רכה, ו; מ"ב; אג"מ או"ח ג, לד</td>
                </tr>
                <tr>
                    <td>פרי עונתי שבעונה טעמו/מראהו שונים בבירור מהמצוי כל השנה</td>
                    <td>✅ מברכים – ניכר חידושו</td>
                    <td>פנה"ל ברכות יד, טז</td>
                </tr>
                <tr>
                    <td>ירקות (גזר, מלפפון, עגבנייה...)</td>
                    <td>❌ אין מברכים – אינם מביאים שמחה מיוחדת</td>
                    <td>רמ"א רכה, ו; מ"ב רכה, יח (בשם השלה)</td>
                </tr>
                <tr>
                    <td>פירות/ירקות אדמה חשובים ועונתיים (אבטיח, מלון)</td>
                    <td>⚖️ מחלוקת – יש אומרים מברכים</td>
                    <td>ביאה"ל רכה, א; הליכות שלמה כ</td>
                </tr>
                <tr>
                    <td>פרי בוסר (לא בשל)</td>
                    <td>❌ אין מברכים עד שנגמר גידולו ובשל לאכילה</td>
                    <td>שו"ע רכה, ז; רשב"א</td>
                </tr>
                <tr>
                    <td>שכח לברך בפעם הראשונה</td>
                    <td>❌ ספק ברכות להקל – לא יברך בפעם השנייה</td>
                    <td>מ"ב רכה, יג; ערוה"ש רכה, ז</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="section-title">מתי ובאיזה סדר?</div>
    <div class="table-container">
        <table>
            <thead><tr><th>שאלה</th><th>הדין</th></tr></thead>
            <tbody>
                <tr><td>מתי לברך?</td><td>מעיקר הדין – בראיית הפרי (רמב"ם). <strong>המנהג</strong> – בשעת אכילה (שו"ע רכה, ג). המברך בראיה – לא הפסיד (רמ"א)</td></tr>
                <tr><td>סדר הברכות</td><td>מחלוקת: יש אומרים ברכת הנהנין קודם (ערוה"ש, חת"ס); יש אומרים שהחיינו קודם (רבים מפוסקי אשכנז)</td></tr>
                <tr><td>שני מינים חדשים לפניו</td><td>שהחיינו אחת פוטרת את שניהם אם שניהם לפניו</td></tr>
                <tr><td>יום טוב</td><td>מכוון בשהחיינו של הקידוש לפטור גם את הפרי החדש</td></tr>
            </tbody>
        </table>
    </div>

    <div class="highlight-box warning">
        <div class="highlight-box-title">⚠️ בין המצרים</div>
        נוהגים שלא לאכול פרי חדש בשלושת השבועות, ולא לקנות בגד או כלי חדש הטעון שהחיינו – כדי שלא לברך שהחיינו בימי אבלות. בשבתות שבינתיים – מותר לכתחילה.
    </div>

    <div class="source-box">
        <div class="source-label">📖 שו"ע רכה, ג–ז; רמ"א שם; מ"ב רכה; פניני הלכה ברכות יד, טז</div>
        שהחיינו על פרי המתחדש משנה לשנה בשעת אכילה. אין מברכים על פרי זמין כל השנה, ירקות, ופרי בוסר.
    </div>`
},
// שקף 45 - SheHechianu - new garment and house
{
    title: "שהחיינו – בגד, כלי ובית חדש",
    menu: "שהחיינו – בגד וכלי",
    section: "ברכות נוספות",
    content: `
    <div class="slide-header">
        <h1>שהחיינו – בגד, כלי ובית חדש</h1>
        <div class="subtitle">על מה מברכים, מחלוקות ודין בית</div>
    </div>

    <div class="section-title">בגד וכלי חדש</div>
    <p>מברכים שהחיינו בעת רכישה או לבישה/שימוש ראשון בפריט <strong>חשוב שמשמח אותו שמחה אמיתית</strong> (שו"ע רכג, ד).</p>
    <div class="table-container">
        <table>
            <thead><tr><th>פריט</th><th>אשכנזים</th><th>ספרדים / ר' עובדיה</th></tr></thead>
            <tbody>
                <tr style="background:var(--correct-bg)">
                    <td>חליפה, שמלה, מעיל (בגד חשוב)</td>
                    <td>✅ מברכים</td>
                    <td>✅ מברכים</td>
                </tr>
                <tr>
                    <td>נעליים</td>
                    <td>⚖️ יש מברכים</td>
                    <td>❌ ר' עובדיה – לא מברכים. ⚖️ פנה"ל – יש לברך על נעליים יקרות בימינו (פנה"ל יז, ד)</td>
                </tr>
                <tr style="background:var(--correct-bg)">
                    <td>תכשיטי זהב / שעון יוקרתי</td>
                    <td>✅ מברכים (אם שמח)</td>
                    <td>✅ מברכים</td>
                </tr>
                <tr>
                    <td>מכשיר חשמלי יקר (טלוויזיה, מחשב)</td>
                    <td>⚖️ רבים מברכים</td>
                    <td>❌ ר' עובדיה – לא (אינו בגד/כלי ממש)</td>
                </tr>
                <tr>
                    <td>רכב חדש</td>
                    <td colspan="2">⚖️ אם לעצמו – שהחיינו; אם משפחתי – הטוב והמטיב</td>
                </tr>
                <tr style="background:var(--warning-bg)">
                    <td>גרביים, תחתונים, כיפה</td>
                    <td colspan="2">❌ לא מברכים – אין שמחה מיוחדת</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="highlight-box">
        <div class="highlight-box-title">💡 כלל מעשי</div>
        בספק אם הפריט מביא שמחה אמיתית – <strong>ספק ברכות להקל</strong>. ניתן ללבוש בגד חדש ולברך שהחיינו כדי לפטור כלים שקנה.
    </div>

    <div class="highlight-box warning">
        <div class="highlight-box-title">⚠️ בין המצרים</div>
        נוהגים שלא לקנות בגד או כלי חדש הטעון שהחיינו בשלושת השבועות – כדי שלא לברך שהחיינו בימי אבלות. בשבתות שבינתיים – מותר לכתחילה. (ומאותה סיבה נמנעים גם מאכילת פרי חדש.)
    </div>

    <div class="section-title">בית חדש</div>
    <p>בכניסה לבית שקנה או בנה לראשונה (שו"ע רכג, ג):</p>
    <div class="two-cols">
        <div class="card">
            <div class="card-title">לעצמו בלבד → שהחיינו</div>
            <div class="card-text">הבית של אדם אחד – שמחה אישית שלו</div>
        </div>
        <div class="card">
            <div class="card-title">עם שותפים / משפחה → הטוב והמטיב</div>
            <div class="card-text">גם אחרים נהנים ממנו – ברכה שכוללת גם את שמחת האחרים</div>
        </div>
    </div>

    <div class="source-box">
        <div class="source-label">📖 שו"ע רכג, ג–ד; מ"ב רכג; יחו"ד ג, כד; פניני הלכה ברכות יד</div>
        שהחיינו על בגד/כלי חשוב המשמח. בגד חדש פוטר כלים חדשים שנקנו עמו. בית לעצמו – שהחיינו; בית משותף – הטוב והמטיב.
    </div>`
},
// שקף 46 - SheHechianu - seeing a friend
{
    title: "שהחיינו – ראיית חבר אהוב",
    menu: "שהחיינו – ראיית חבר",
    section: "ברכות נוספות",
    content: `
    <div class="slide-header">
        <h1>שהחיינו – ראיית חבר אהוב</h1>
        <div class="subtitle">ברכה על שמחת ראייה לאחר הפרדה</div>
    </div>

    <div class="table-container">
        <table>
            <thead><tr><th>מצב</th><th>ברכה</th><th>מקור</th></tr></thead>
            <tbody>
                <tr style="background:var(--correct-bg)">
                    <td>לא ראה חבר אהוב <strong>שלושים יום</strong></td>
                    <td><strong>שהחיינו</strong></td>
                    <td>שו"ע רכב, א</td>
                </tr>
                <tr>
                    <td>לא ראה חבר <strong>שנים עשר חודש</strong></td>
                    <td>שהחיינו + <strong>"ברוך מחיה המתים"</strong></td>
                    <td>שו"ע רכב, א</td>
                </tr>
                <tr style="background:var(--warning-bg)">
                    <td>חבר שאינו "אהוב" במיוחד (מכר, שכן)</td>
                    <td>❌ לא מברכים שהחיינו</td>
                    <td>שו"ע רכב, א</td>
                </tr>
                <tr>
                    <td>ראהו אך לא דיבר עמו</td>
                    <td>⚖️ מחלוקת – יש אומרים שאין מברכים אלא אם כן פגשו ממש</td>
                    <td>מ"ב רכב, ג</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="highlight-box">
        <div class="highlight-box-title">💡 מי נחשב "חבר אהוב"?</div>
        מי שלבו שמח בראייתו שמחה אמיתית – לא כל היכרות. קרוב משפחה אהוב, חבר ותיק שמתגעגע אליו – כן. מכר שטחי – לא. <strong>הקריטריון: שמחה בלב בשעת הראייה</strong>.
    </div>

    <div class="highlight-box warning">
        <div class="highlight-box-title">⚠️ הערה מעשית</div>
        ברכת "מחיה המתים" על חבר שלא ראה שנה – היא ברכה ללא שם ומלכות ("ברוך מחיה המתים"), לכן יש פוסקים שאין בה חשש ברכה לבטלה ואפשר לאמרה. יש שפקפקו אם נוהגים לאומרה בימינו.
    </div>

    <div class="highlight-box">
        <div class="highlight-box-title">📱 שאלה בת-זמננו: שיחת וידאו / טלפון</div>
        <p>אם שוחח עם חברו בטלפון או ראהו בשיחת וידאו (זום, וואטסאפ) – האם "ראייה" זו מפסיקה את מניין שלושים הימים?</p>
        <div class="two-cols" style="margin-top:0.5em">
            <div class="card" style="margin:0">
                <div class="card-title">יש אומרים: כן סותר</div>
                <div class="card-text">ראיית הפנים בוידאו דומה לראייה ממשית – יש "ראייה" ושמחה. לכן אם ראה בוידאו – מונה שלושים מחדש מאותה שיחה.</div>
            </div>
            <div class="card" style="margin:0">
                <div class="card-title">יש אומרים: לא סותר</div>
                <div class="card-text">התקנה היתה על ראייה גופנית פנים אל פנים ממש. ראייה דרך מסך אינה "ראייה" הלכתית – ומברכים שהחיינו בפגישה הממשית גם אם שוחחו בוידאו.</div>
            </div>
        </div>
        <p style="margin-top:0.5em"><strong>למעשה:</strong> שאלה שטרם הוכרעה סופית. בספק ברכות – להקל: אם ראה בוידאו לאחרונה, יברך שהחיינו רק אם שמח בפגישה שמחה ניכרת שלא היתה לו בשיחת הוידאו.</p>
    </div>

    <div class="source-box">
        <div class="source-label">📖 שו"ע רכב, א; מ"ב רכב; פניני הלכה ברכות יד</div>
        שהחיינו על ראיית חבר אהוב לאחר שלושים יום. לאחר שנה – גם "מחיה המתים" (ללא שם ומלכות). תנאי: שמחה אמיתית בראייתו.
    </div>`
},


// שקף 47 - Quiz rishonot
{
    title: "חידון – ברכות ראשונות",
    menu: "חידון – ברכות ראשונות",
    section: "תרגול",
    content: `
    <div class="slide-header">
        <h1>חידון – בדוק את עצמך!</h1>
        <div class="subtitle">27 שאלות – בדוק את עצמך!</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa1')">בורא פרי העץ</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qa1')">בורא פרי האדמה</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa1')">שהכל נהיה בדברו</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa1')">בורא מיני מזונות</button>
        </div>
        <div class="quiz-explanation" id="qa1">
            ✅ בננה – גזע הצמח אינו מתקיים משנה לשנה. ברכתו "האדמה" ולא "העץ".
            <button class="ref-btn" onclick="goToSlide(14)">← ראה שקף 14</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">2. מה ברכת שקדים?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa2')">בורא פרי האדמה</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa2')">שהכל נהיה בדברו</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qa2')">בורא פרי העץ</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa2')">בורא מיני מזונות</button>
        </div>
        <div class="quiz-explanation" id="qa2">
            ✅ שקד הוא פרי של עץ ממש, שגזעו מתקיים ומתעצם. ברכתו "העץ".
            <button class="ref-btn" onclick="goToSlide(13)">← ראה שקף 13</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">3. מה ברכת בוטנים?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa3')">בורא פרי העץ</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa3')">בורא מיני מזונות</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa3')">שהכל נהיה בדברו</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qa3')">בורא פרי האדמה</button>
        </div>
        <div class="quiz-explanation" id="qa3">
            ✅ בוטנים הם קטניות שגדלות באדמה ולא על עץ – ברכתם "האדמה".
            <button class="ref-btn" onclick="goToSlide(14)">← ראה שקף 14</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">4. מה ברכת מיץ תפוזים?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa4')">בורא פרי העץ</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa4')">בורא פרי האדמה</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qa4')">שהכל נהיה בדברו</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa4')">בורא פרי הגפן</button>
        </div>
        <div class="quiz-explanation" id="qa4">
            ✅ מיצי פירות (חוץ מיין ומיץ ענבים) – ברכתם "שהכל".
            <button class="ref-btn" onclick="goToSlide(15)">← ראה שקף 15</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">5. מה ברכת פסטה?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa5')">בורא פרי האדמה</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa5')">המוציא לחם מן הארץ</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qa5')">בורא מיני מזונות</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa5')">שהכל נהיה בדברו</button>
        </div>
        <div class="quiz-explanation" id="qa5">
            ✅ פסטה עשויה מקמח דגן ואינה לחם – ברכתה "מזונות".
            <button class="ref-btn" onclick="goToSlide(12)">← ראה שקף 12</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">6. מה ברכת ביצה מקושקשת?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa6')">בורא פרי האדמה</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa6')">בורא פרי העץ</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa6')">בורא מיני מזונות</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qa6')">שהכל נהיה בדברו</button>
        </div>
        <div class="quiz-explanation" id="qa6">
            ✅ ביצה אינה גדלה מהאדמה ואינה דגן – ברכתה "שהכל".
            <button class="ref-btn" onclick="goToSlide(15)">← ראה שקף 15</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">7. מה ברכת כוס קפה?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa7')">בורא פרי העץ</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qa7')">שהכל נהיה בדברו</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa7')">בורא מיני מזונות</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa7')">בורא פרי האדמה</button>
        </div>
        <div class="quiz-explanation" id="qa7">
            ✅ קפה הוא משקה – ברכתו "שהכל".
            <button class="ref-btn" onclick="goToSlide(15)">← ראה שקף 15</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">8. מה ברכת יין?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa8')">בורא פרי העץ</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa8')">שהכל נהיה בדברו</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qa8')">בורא פרי הגפן</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa8')">בורא מיני מזונות</button>
        </div>
        <div class="quiz-explanation" id="qa8">
            ✅ חכמים ייחדו ליין ברכה מיוחדת "הגפן" בגלל חשיבותו הרבה.
            <button class="ref-btn" onclick="goToSlide(17)">← ראה שקף 17</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">9. מה ברכת מיץ ענבים טבעי 100%?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa9')">בורא פרי העץ</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa9')">שהכל נהיה בדברו</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa9')">בורא מיני מזונות</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qa9')">בורא פרי הגפן</button>
        </div>
        <div class="quiz-explanation" id="qa9">
            ✅ מיץ ענבים טבעי דינו כיין – ברכתו "הגפן".
            <button class="ref-btn" onclick="goToSlide(17)">← ראה שקף 17</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">10. מה ברכת לחם?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa10')">בורא מיני מזונות</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qa10')">המוציא לחם מן הארץ</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa10')">שהכל נהיה בדברו</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa10')">בורא פרי האדמה</button>
        </div>
        <div class="quiz-explanation" id="qa10">
            ✅ לחם מחמשת מיני דגן בצורת לחם – ברכתו "המוציא", לאחר נטילת ידיים.
            <button class="ref-btn" onclick="goToSlide(18)">← ראה שקף 18</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">11. אכלת עוגה קטנה (ללא קביעת סעודה) – מה מברכים?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa11')">המוציא לחם מן הארץ</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa11')">בורא פרי האדמה</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qa11')">בורא מיני מזונות</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa11')">שהכל נהיה בדברו</button>
        </div>
        <div class="quiz-explanation" id="qa11">
            ✅ עוגה מקמח דגן שלא קובעים עליה סעודה – ברכתה "מזונות".
            <button class="ref-btn" onclick="goToSlide(12)">← ראה שקף 12</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">12. מה ברכת ענבים שלמים?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa12')">בורא פרי הגפן</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa12')">שהכל נהיה בדברו</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa12')">בורא מיני מזונות</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qa12')">בורא פרי העץ</button>
        </div>
        <div class="quiz-explanation" id="qa12">
            ✅ ענבים שלמים – ברכתם "העץ", לא "הגפן". רק יין ומיץ ענבים הם "הגפן".
            <button class="ref-btn" onclick="goToSlide(17)">← ראה שקף 17</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">13. מה ברכת אבטיח?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa13')">בורא פרי העץ</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa13')">בורא פרי הגפן</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa13')">שהכל נהיה בדברו</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qa13')">בורא פרי האדמה</button>
        </div>
        <div class="quiz-explanation" id="qa13">
            ✅ אבטיח גדל על גבעול חד-שנתי ולא על עץ – ברכתו "האדמה".
            <button class="ref-btn" onclick="goToSlide(14)">← ראה שקף 14</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">14. מה ברכת תמר?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa14')">בורא פרי האדמה</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa14')">שהכל נהיה בדברו</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qa14')">בורא פרי העץ</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa14')">בורא מיני מזונות</button>
        </div>
        <div class="quiz-explanation" id="qa14">
            ✅ תמר הוא פרי עץ (הדקל) ואחד משבעת המינים – ברכתו "העץ".
            <button class="ref-btn" onclick="goToSlide(13)">← ראה שקף 13</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">15. מה ברכת תות שדה?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa15')">בורא פרי העץ</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa15')">בורא פרי הגפן</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa15')">בורא מיני מזונות</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qa15')">בורא פרי האדמה</button>
        </div>
        <div class="quiz-explanation" id="qa15">
            ✅ תות שדה גדל על גבעולים חד-שנתיים – ברכתו "האדמה".
            <button class="ref-btn" onclick="goToSlide(14)">← ראה שקף 14</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">16. מה ברכת שוקולד?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa16')">בורא פרי העץ</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa16')">בורא פרי האדמה</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa16')">בורא מיני מזונות</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qa16')">שהכל נהיה בדברו</button>
        </div>
        <div class="quiz-explanation" id="qa16">
            ✅ שוקולד הוא ממתק מעובד – ברכתו "שהכל".
            <button class="ref-btn" onclick="goToSlide(15)">← ראה שקף 15</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">17. מה ברכת גבינה?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa17')">בורא פרי האדמה</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa17')">בורא מיני מזונות</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qa17')">שהכל נהיה בדברו</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa17')">בורא פרי העץ</button>
        </div>
        <div class="quiz-explanation" id="qa17">
            ✅ מוצרי חלב אינם מגדולי הקרקע – ברכתם "שהכל".
            <button class="ref-btn" onclick="goToSlide(15)">← ראה שקף 15</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">18. בירכת "האדמה" על תפוח (טעות) – יצאת?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa18')">לא, חייב לברך שוב</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qa18')">כן – "האדמה" פוטרת "העץ" בדיעבד</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa18')">רק אם לא ידעת</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa18')">כן – שהכל פוטר הכל</button>
        </div>
        <div class="quiz-explanation" id="qa18">
            ✅ "האדמה" פוטרת פירות עץ בדיעבד. ברכת "העץ" לעומת זאת אינה פוטרת פירות אדמה.
            <button class="ref-btn" onclick="goToSlide(27)">← ראה שקף 26</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">19. אכלת כריך (לחם עם גבינה וסלט) – כמה ברכות ראשונות?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa19')">שלוש – המוציא, שהכל, האדמה</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qa19')">אחת – המוציא פוטרת הכל</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa19')">שתיים – המוציא ושהכל</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa19')">ארבע</button>
        </div>
        <div class="quiz-explanation" id="qa19">
            ✅ ברכת "המוציא" פוטרת את כל מה שבא כחלק מהסעודה.
            <button class="ref-btn" onclick="goToSlide(21)">← ראה שקף 20</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">20. כמה מאפה מזונות לקביעת סעודה (המוציא)?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa20')">כל כמות</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa20')">כ-50 גרם</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qa20')">כ-230 גרם ומעלה</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa20')">רק לפי כוונה</button>
        </div>
        <div class="quiz-explanation" id="qa20">
            ✅ קביעת סעודה על מזונות מחייבת אכילת כ-230 גרם ומעלה.
            <button class="ref-btn" onclick="goToSlide(19)">← ראה שקף 19</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">21. מה ברכת רסק תפוחים (תפוחים שבושלו ורוסקו)?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa21')">האדמה – חזר לברכת שורשו</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa21')">מזונות – עקב עיבוד מלא</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa21')">העץ בכל מקרה – ריסוק אינו משנה</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qa21')">מחלוקת: ספרדים – העץ; אשכנזים רבים – שהכל</button>
        </div>
        <div class="quiz-explanation" id="qa21">
            ✅ רסק תפוחים הוא נושא שנוי במחלוקת פוסקים.<br>
            <strong>לפי פניני הלכה (ח, ב):</strong> כיוון שרסק תפוחים הוא מוצר מוכר הנקרא בשם הפרי, ברכתו <strong>העץ</strong> – פסיקה המקובלת בקרב ספרדים ומי שנוהג כרב מלמד.<br>
            <strong>לפי פוסקים אשכנזים רבים</strong> (לפי עקרון המשנה ברורה, רב, לד): כיוון שאין דרך אכילת תפוחים בריסוק, הוא נאכל שלא כדרכו ולכן ברכתו <strong>שהכל</strong>.<br>
            <strong>למעשה:</strong> מי שאינו בטוח יאכל תחילה חתיכת תפוח שלמה ויברך העץ, ואז ייפטור את הרסק.
            <button class="ref-btn" onclick="goToSlide(16)">← ראה שקף 16</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">22. מה ברכת מרק ירקות מסונן (רק הנוזל)?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa22')">בורא פרי האדמה</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa22')">בורא מיני מזונות</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qa22')">שהכל נהיה בדברו</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa22')">בורא פרי העץ</button>
        </div>
        <div class="quiz-explanation" id="qa22">
            ✅ מרק מסונן שהירקות אינם ניכרים בו – ברכתו "שהכל".
            <button class="ref-btn" onclick="goToSlide(16)">← ראה שקף 16</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">23. גרגירי חיטה חיים שלמים – מה ברכתם?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa23')">המוציא לחם מן הארץ</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa23')">בורא מיני מזונות</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qa23')">בורא פרי האדמה</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa23')">שהכל נהיה בדברו</button>
        </div>
        <div class="quiz-explanation" id="qa23">
            ✅ גרגירי חיטה חיים – ברכתם "האדמה" (לא "מזונות"), כי טרם עברו תהליך הכנה.
            <button class="ref-btn" onclick="goToSlide(12)">← ראה שקף 12</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">24. שתית מים מפני צמא – מה מברכים?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa24')">לא מברכים</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa24')">בורא נפשות</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qa24')">שהכל נהיה בדברו</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa24')">בורא פרי האדמה</button>
        </div>
        <div class="quiz-explanation" id="qa24">
            ✅ מים לצמא מביאים הנאה – מברכים "שהכל".
            <button class="ref-btn" onclick="goToSlide(25)">← ראה שקף 24</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">25. פרוסה קטנה מאוד של לחם – מה ברכתה?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa25')">מזונות – כמות קטנה</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa25')">שהכל</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qa25')">המוציא – הברכה תלויה בצורה לא בכמות</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa25')">האדמה</button>
        </div>
        <div class="quiz-explanation" id="qa25">
            ✅ גם פרוסה קטנה של לחם – ברכתה "המוציא".
            <button class="ref-btn" onclick="goToSlide(18)">← ראה שקף 18</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">26. מרק ובו קרוטונים קטנים (כל אחד פחות מכזית) – מה הברכה הנדרשת לפי ספרדים ואשכנזים?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa26')">לשניהם: שהכל על המרק, ואין ברכה נפרדת על הקרוטונים</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa26')">שתי ברכות לכולם: המוציא על הקרוטונים + שהכל על המרק</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa26')">לשניהם: המוציא על הקרוטונים, פוטרת גם את המרק</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qa26')">ספרדים: שהכל על המרק (קרוטונים בטלים); אשכנזים: המוציא על הקרוטונים (פוטרת גם את המרק)</button>
        </div>
        <div class="quiz-explanation" id="qa26">
            ✅ בשני המקרים ברכה אחת בלבד – אבל שונה:<br>
            <strong>ספרדים (שו"ע קסח, י):</strong> פיסה פחות מכזית בטלה בתבשיל → מברכים <strong>שהכל</strong> על המרק, והיא פוטרת את הקרוטונים.<br>
            <strong>אשכנזים (רמ"א):</strong> פיסות ניכרות כלחם → מברכים <strong>המוציא</strong> על הקרוטונים, וברכת המוציא פוטרת את המרק.
            <button class="ref-btn" onclick="goToSlide(20)">← ראה שקף 20</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">27. פרנץ' טוסט (פרוסת לחם שלמה, טובלת בביצה ומטוגנת) – מה ברכתו לפי ילקוט יוסף?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa27')">המוציא – הלחם ניכר וצורתו לא השתנתה</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qa27')">מזונות – הטיגון בביצה שינה את מהות הלחם</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa27')">שהכל – לחם שטוגן</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qa27')">האדמה – חזר לברכת מקורו</button>
        </div>
        <div class="quiz-explanation" id="qa27">
            ✅ לפי ילקוט יוסף (סי' קסח): הטבילה בביצה והטיגון יצרו מאכל שאינו לחם – ברכתו <strong>מזונות</strong>.<br>
            <strong>אשכנזים ופניני הלכה (ו):</strong> המוציא – לחם גמור שצורתו ניכרת שומר על מעמדו.<br>
            <strong>למי שרוצה לצאת מהספק:</strong> לאכול בסעודת לחם – ברכת "המוציא" פוטרת.
            <button class="ref-btn" onclick="goToSlide(20)">← ראה שקף 20</button>
        </div>
    </div>

`
},
// שקף 48 - Quiz acharonot
{
    title: "חידון – ברכות אחרונות",
    menu: "חידון – ברכות אחרונות",
    section: "תרגול",
    content: `
    <div class="slide-header">
        <h1>חידון – בדוק את עצמך!</h1>
        <div class="subtitle">25 שאלות – בדוק את עצמך!</div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">1. מה הברכה האחרונה על לחם?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb1')">בורא נפשות</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb1')">על המחיה</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb1')">על הגפן</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qb1')">ברכת המזון (ארבע ברכות)</button>
        </div>
        <div class="quiz-explanation" id="qb1">
            ✅ לאחר אכילת לחם – ברכת המזון, הברכה היחידה שחיובה מהתורה.
            <button class="ref-btn" onclick="goToSlide(31)">← ראה שקף 30</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">2. מה הברכה האחרונה על עוגה?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb2')">ברכת המזון</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb2')">בורא נפשות</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qb2')">על המחיה ועל הכלכלה</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb2')">על הגפן</button>
        </div>
        <div class="quiz-explanation" id="qb2">
            ✅ לאחר אכילת מאפה מזונות – "על המחיה", ברכה מעין שלוש.
            <button class="ref-btn" onclick="goToSlide(33)">← ראה שקף 32</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">3. מה הברכה האחרונה על תפוח?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb3')">על העץ ועל פרי העץ</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb3')">ברכת המזון</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb3')">על המחיה</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qb3')">בורא נפשות</button>
        </div>
        <div class="quiz-explanation" id="qb3">
            ✅ תפוח – פרי עץ שאינו משבעת המינים – ברכתו האחרונה "בורא נפשות".
            <button class="ref-btn" onclick="goToSlide(34)">← ראה שקף 33</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">4. מה הברכה האחרונה על כוס יין?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb4')">בורא נפשות</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb4')">ברכת המזון</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qb4')">על הגפן ועל פרי הגפן</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb4')">על המחיה</button>
        </div>
        <div class="quiz-explanation" id="qb4">
            ✅ לאחר שתיית יין (רביעית לפחות) – "על הגפן", ברכה מעין שלוש.
            <button class="ref-btn" onclick="goToSlide(33)">← ראה שקף 32</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">5. מה הברכה האחרונה על תמר?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb5')">בורא נפשות</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb5')">ברכת המזון</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb5')">על המחיה</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qb5')">על העץ ועל פרי העץ</button>
        </div>
        <div class="quiz-explanation" id="qb5">
            ✅ תמר – משבעת המינים – ברכתו האחרונה "על העץ", ברכה מעין שלוש.
            <button class="ref-btn" onclick="goToSlide(33)">← ראה שקף 32</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">6. מה הברכה האחרונה על גזר נא?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb6')">על העץ</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb6')">על המחיה</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb6')">ברכת המזון</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qb6')">בורא נפשות</button>
        </div>
        <div class="quiz-explanation" id="qb6">
            ✅ גזר – ירק שאינו משבעת המינים – ברכתו האחרונה "בורא נפשות".
            <button class="ref-btn" onclick="goToSlide(34)">← ראה שקף 33</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">7. כזית = כמה גרם?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb7')">כ-10 גרם</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qb7')">כ-27 גרם</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb7')">כ-50 גרם</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb7')">כ-100 גרם</button>
        </div>
        <div class="quiz-explanation" id="qb7">
            ✅ כזית הוא כ-27 גרם. רק לאחר כזית מחויבים בברכה אחרונה.
            <button class="ref-btn" onclick="goToSlide(30)">← ראה שקף 29</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">8. רביעית = כמה מ"ל?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb8')">כ-30 מ"ל</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qb8')">כ-86 מ"ל</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb8')">כ-150 מ"ל</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb8')">כ-200 מ"ל</button>
        </div>
        <div class="quiz-explanation" id="qb8">
            ✅ רביעית היא כ-86 מ"ל. שתיית רביעית מחייבת ברכה אחרונה.
            <button class="ref-btn" onclick="goToSlide(30)">← ראה שקף 29</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">9. אכלת תפוח 20 גרם (פחות מכזית) – ברכה אחרונה?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb9')">כן – בורא נפשות</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb9')">כן – על העץ</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qb9')">לא – פחות מכזית</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb9')">תלוי אם היית רעב</button>
        </div>
        <div class="quiz-explanation" id="qb9">
            ✅ ברכה אחרונה מחייבת כזית (~27 גרם). פחות מזה – אין חיוב.
            <button class="ref-btn" onclick="goToSlide(35)">← ראה שקף 34</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">10. ספק אם בירכת ברכת המזון – מה עושים?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb10')">לא מברכים – ספק ברכות להקל</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qb10')">מברכים – ברהמ"ז חיוב מהתורה</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb10')">מברכים רק אם שבעת</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb10')">אוכלים עוד ומברכים</button>
        </div>
        <div class="quiz-explanation" id="qb10">
            ✅ ברהמ"ז חיוב מהתורה – ספק = חוזר ומברך. שלא כשאר ברכות שספק = להקל.
            <button class="ref-btn" onclick="goToSlide(36)">← ראה שקף 35</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">11. ספק אם בירכת "על המחיה" – מה עושים?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb11')">חוזר ומברך</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qb11')">לא מברכים – ספק ברכות להקל</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb11')">מברכים בתוך 72 דקות</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb11')">שואלים רב</button>
        </div>
        <div class="quiz-explanation" id="qb11">
            ✅ מעין שלוש היא מדרבנן – ספק = להקל, לא מברכים.
            <button class="ref-btn" onclick="goToSlide(36)">← ראה שקף 35</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">12. כמה ברכות יש בברכת המזון?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb12')">2</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb12')">3</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qb12')">4</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb12')">5</button>
        </div>
        <div class="quiz-explanation" id="qb12">
            ✅ ברהמ"ז: הזן, הארץ, בונה ירושלים, הטוב והמטיב – 4 ברכות.
            <button class="ref-btn" onclick="goToSlide(31)">← ראה שקף 30</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">13. מי תיקן את ברכת "הזן"?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb13')">יהושע</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb13')">דוד המלך</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qb13')">משה רבנו</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb13')">אנשי כנסת הגדולה</button>
        </div>
        <div class="quiz-explanation" id="qb13">
            ✅ ברכת הזן תיקן משה רבנו כשירד המן במדבר.
            <button class="ref-btn" onclick="goToSlide(31)">← ראה שקף 30</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">14. מי תיקן את ברכת "בונה ירושלים"?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb14')">משה רבנו</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb14')">יהושע בן נון</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qb14')">דוד ושלמה</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb14')">עזרא הסופר</button>
        </div>
        <div class="quiz-explanation" id="qb14">
            ✅ דוד – על כיבוש ירושלים; שלמה – על בניין המקדש.
            <button class="ref-btn" onclick="goToSlide(31)">← ראה שקף 30</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">15. מהי "מעין שלוש"?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb15')">שלוש ברכות בזימון</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qb15')">ברכה מקוצרת שמשקפת שלוש הברכות הראשונות של ברהמ"ז</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb15')">ברכה על שלושה מינים</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb15')">ברכת שהכל בשלושה נוסחים</button>
        </div>
        <div class="quiz-explanation" id="qb15">
            ✅ מעין שלוש = תמצית שלוש ברכות ראשונות של ברהמ"ז. על מזונות, שבעת המינים, ויין.
            <button class="ref-btn" onclick="goToSlide(33)">← ראה שקף 32</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">16. כמה אנשים נדרשים לזימון?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb16')">2</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qb16')">3</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb16')">10</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb16')">1</button>
        </div>
        <div class="quiz-explanation" id="qb16">
            ✅ שלושה גברים שאכלו יחד חייבים לזמן (ברכות מה, א).
            <button class="ref-btn" onclick="goToSlide(32)">← ראה שקף 31</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">17. 10 אנשים מזמנים – מה מוסיפים?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb17')">ברוך הוא ומבורך</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb17')">שאכלנו משלו</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qb17')">לאלוהינו</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb17')">האל הגדול</button>
        </div>
        <div class="quiz-explanation" id="qb17">
            ✅ בזימון של 10: "נברך לאלוהינו שאכלנו משלו".
            <button class="ref-btn" onclick="goToSlide(32)">← ראה שקף 31</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">18. אכלת כזית עוגה וכזית תפוח – כמה ברכות אחרונות?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb18')">אחת – בורא נפשות</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qb18')">שתיים – על המחיה ובורא נפשות</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb18')">אחת – על המחיה</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb18')">לא מברכים</button>
        </div>
        <div class="quiz-explanation" id="qb18">
            ✅ על עוגה – על המחיה; על תפוח – בורא נפשות. שתי ברכות נפרדות.
            <button class="ref-btn" onclick="goToSlide(35)">← ראה שקף 34</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">19. ברכת המזון – מהתורה?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb19')">מדרבנן</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qb19')">מהתורה</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb19')">מחלוקת, הלכה מדרבנן</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb19')">מנהג בלבד</button>
        </div>
        <div class="quiz-explanation" id="qb19">
            ✅ ברהמ"ז היא הברכה היחידה שחיובה מהתורה: "ואכלת ושבעת וברכת" (דברים ח, י).
            <button class="ref-btn" onclick="goToSlide(30)">← ראה שקף 29</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">20. בורא נפשות – מהתורה?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb20')">כן – חלק מ"ואכלת ושבעת"</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb20')">כן – תקנת משה</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qb20')">לא – מדרבנן</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb20')">מחלוקת</button>
        </div>
        <div class="quiz-explanation" id="qb20">
            ✅ בורא נפשות היא ברכה מדרבנן.
            <button class="ref-btn" onclick="goToSlide(34)">← ראה שקף 33</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">21. שינוי מקום – בורא נפשות. צריך לחזור?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb21')">כן, כמו ברהמ"ז</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb21')">כן, אם יצאת מהבניין</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qb21')">לא – לבורא נפשות אין דין מקום</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb21')">תלוי אם אכלת לחם</button>
        </div>
        <div class="quiz-explanation" id="qb21">
            ✅ בורא נפשות – אין דין מקום. מברכים בכל מקום שרוצים.
            <button class="ref-btn" onclick="goToSlide(36)">← ראה שקף 35</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">22. שתית 50 מ"ל מיץ – ברכה אחרונה?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb22')">כן – בורא נפשות</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb22')">כן אם צמאת</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qb22')">לא – פחות מרביעית</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb22')">כן – תמיד</button>
        </div>
        <div class="quiz-explanation" id="qb22">
            ✅ ברכה אחרונה על משקה מחייבת רביעית (~86 מ"ל). 50 מ"ל – אין חיוב.
            <button class="ref-btn" onclick="goToSlide(30)">← ראה שקף 29</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">23. שלושה אנשים אכלו יחד עוגה ופירות (ללא לחם) – האם חייבים לזמן?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qb23')">לא – זימון רק על סעודה שחייבת בברכת המזון (סעודת לחם)</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb23')">כן – כל שלושה שאכלו יחד חייבים לזמן</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb23')">כן, אבל בנוסח שונה</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb23')">תלוי – אם שבעו, חייבים לזמן</button>
        </div>
        <div class="quiz-explanation" id="qb23">
            ✅ זימון חל רק על סעודה שחייבת בברכת המזון – דהיינו סעודה שאכלו בה לחם. שלושה שאכלו מאכלים אחרים ללא לחם – אינם חייבים לזמן.
            <button class="ref-btn" onclick="goToSlide(32)">← ראה שקף 31</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">24. ברכה מעין שלוש על ענבים שלמים – נוסח?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb24')">על המחיה ועל הכלכלה</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb24')">על הגפן ועל פרי הגפן</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qb24')">על העץ ועל פרי העץ</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb24')">בורא נפשות</button>
        </div>
        <div class="quiz-explanation" id="qb24">
            ✅ ענבים שלמים (משבעת המינים) – "על העץ", לא "על הגפן" (שמיועד ליין בלבד).
            <button class="ref-btn" onclick="goToSlide(33)">← ראה שקף 32</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">25. בסעודה עם לחם אכלת גם תפוז – כמה ברכות אחרונות?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb25')">שתיים – ברהמ"ז ובורא נפשות</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qb25')">אחת – ברהמ"ז פוטרת הכל</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb25')">שתיים – ברהמ"ז ועל העץ</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qb25')">שלוש</button>
        </div>
        <div class="quiz-explanation" id="qb25">
            ✅ ברכת המזון פוטרת הכל בסעודת לחם – כולל פירות שנאכלו בסעודה.
            <button class="ref-btn" onclick="goToSlide(21)">← ראה שקף 20</button>
        </div>
    </div>

`
},
// שקף 49 - Quiz nosafot
{
    title: "חידון – ברכות נוספות",
    menu: "חידון – ברכות נוספות",
    section: "תרגול",
    content: `
    <div class="slide-header">
        <h1>חידון – בדוק את עצמך!</h1>
        <div class="subtitle">25 שאלות – שהחיינו, ריח ועוד</div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">1. מה ברכת הריח על הדס?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc1')">הנותן ריח טוב בפירות</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc1')">בורא עשבי בשמים</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc1')">בורא מיני בשמים</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qc1')">בורא עצי בשמים</button>
        </div>
        <div class="quiz-explanation" id="qc1">
            ✅ הדס הוא שיח עצי רב-שנתי – ברכת ריחו "עצי בשמים".
            <button class="ref-btn" onclick="goToSlide(40)">← ראה שקף 39</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">2. מה ברכת הריח על נענע?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc2')">בורא עצי בשמים</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qc2')">בורא עשבי בשמים</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc2')">הנותן ריח טוב בפירות</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc2')">בורא מיני בשמים</button>
        </div>
        <div class="quiz-explanation" id="qc2">
            ✅ נענע – צמח עשבוני חד-שנתי – ברכת ריחו "עשבי בשמים".
            <button class="ref-btn" onclick="goToSlide(41)">← ראה שקף 40</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">3. ספק מקור הריח – מה מברכים?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc3')">עצי בשמים</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc3')">עשבי בשמים</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc3')">הנותן ריח טוב בפירות</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qc3')">בורא מיני בשמים</button>
        </div>
        <div class="quiz-explanation" id="qc3">
            ✅ כשמסופקים – "מיני בשמים" פוטרת הכל בדיעבד.
            <button class="ref-btn" onclick="goToSlide(40)">← ראה שקף 39</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">4. ריח תבשיל שמתבשל – מברכים?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc4')">כן – כל ריח טוב מחייב</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qc4')">לא – ריח לוואי של בישול, לא מכוון להנאה</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc4')">כן, אם נכנסת בכוונה</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc4')">מחלוקת</button>
        </div>
        <div class="quiz-explanation" id="qc4">
            ✅ ריח לוואי של בישול – אין ברכה.
            <button class="ref-btn" onclick="goToSlide(40)">← ראה שקף 39</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">5. יש ברכה אחרונה על ריח?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc5')">כן – בורא נפשות</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc5')">כן – מעין שלוש</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qc5')">לא – אין ברכה אחרונה על ריח</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc5')">תלוי בזמן</button>
        </div>
        <div class="quiz-explanation" id="qc5">
            ✅ "ריח – נפשו של אדם נהנית ממנו" – הנאת הנפש. ברכה ראשונה בלבד, אין ברכה אחרונה.
            <button class="ref-btn" onclick="goToSlide(40)">← ראה שקף 39</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">6. שהחיינו בליל ראש השנה – מתי?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc6')">לפני נטילת ידיים</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc6')">בסיום שחרית</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qc6')">בקידוש (נשים אשכנזיות – בהדלקת נרות)</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc6')">לפני קול נידרי</button>
        </div>
        <div class="quiz-explanation" id="qc6">
            ✅ שהחיינו נאמר בקידוש. נשים אשכנזיות מברכות בהדלקת נרות.
            <button class="ref-btn" onclick="goToSlide(43)">← ראה שקף 42</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">7. יום כיפור – מתי שהחיינו?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc7')">בתפילת שחרית</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc7')">בקידוש</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qc7')">בתחילת תפילת ערבית – לפני קול נידרי</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc7')">לאחר נעילה</button>
        </div>
        <div class="quiz-explanation" id="qc7">
            ✅ ביום כיפור אין קידוש – שהחיינו לפני קול נידרי.
            <button class="ref-btn" onclick="goToSlide(43)">← ראה שקף 42</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">8. שהחיינו על נר חנוכה – אשכנזים וספרדים?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc8')">כל לילה לשניהם</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qc8')">לילה ראשון לשניהם</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc8')">כל לילה לאשכנזים, לילה ראשון לספרדים</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc8')">לילה ראשון לאשכנזים, כל לילה לספרדים</button>
        </div>
        <div class="quiz-explanation" id="qc8">
            ✅ לאשכנזים ולספרדים כאחד – לילה ראשון בלבד (שו"ע תרעו, א). מהלילה השני ואילך מברכים שתי ברכות בלבד: להדליק + שעשה נסים.
            <button class="ref-btn" onclick="goToSlide(43)">← ראה שקף 42</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">9. שהחיינו על שביעי של פסח?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc9')">כן – יום טוב</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qc9')">לא – המשך פסח, לא זמן חדש</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc9')">מחלוקת</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc9')">כן – בקידוש</button>
        </div>
        <div class="quiz-explanation" id="qc9">
            ✅ שביעי של פסח הוא המשך חג פסח – לא מברכים שהחיינו.
            <button class="ref-btn" onclick="goToSlide(43)">← ראה שקף 42</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">10. שהחיינו על שמיני עצרת?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc10')">לא – המשך סוכות</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc10')">מחלוקת</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qc10')">כן – חג מדאורייתא נפרד מסוכות</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc10')">כן, רק בשמחת תורה</button>
        </div>
        <div class="quiz-explanation" id="qc10">
            ✅ שמיני עצרת הוא חג נפרד (זמן חדש) – מברכים שהחיינו.
            <button class="ref-btn" onclick="goToSlide(43)">← ראה שקף 42</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">11. תפוז שמצוי כל השנה – שהחיינו?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc11')">כן – תמיד על פרי עץ</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qc11')">לא – אין התחדשות</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc11')">כן – אם שמח</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc11')">מחלוקת</button>
        </div>
        <div class="quiz-explanation" id="qc11">
            ✅ שהחיינו על פרי חדש תלוי בהתחדשות. פרי מצוי כל השנה – אין חידוש ואין ברכה.
            <button class="ref-btn" onclick="goToSlide(44)">← ראה שקף 43</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">12. שהחיינו על ירקות?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc12')">כן – פרי חדש</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qc12')">לא – אינם מביאים שמחה מיוחדת</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc12')">כן, רק בפעם הראשונה</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc12')">מחלוקת</button>
        </div>
        <div class="quiz-explanation" id="qc12">
            ✅ ירקות – בדרך כלל אין מברכים שהחיינו, כי אינם מביאים שמחה מיוחדת.
            <button class="ref-btn" onclick="goToSlide(44)">← ראה שקף 43</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">13. שכחת שהחיינו בפעם הראשונה – מברכים בפעם הבאה?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc13')">כן – עדיין פרי חדש</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qc13')">לא – ספק ברכות להקל, הפסדת</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc13')">כן, בלא שם ומלכות</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc13')">רק אם עבר פחות מיום</button>
        </div>
        <div class="quiz-explanation" id="qc13">
            ✅ הפסיד את שמחת ההתחדשות. בפעם הבאה – ספק ברכות להקל (מ"ב רכה, יג).
            <button class="ref-btn" onclick="goToSlide(44)">← ראה שקף 43</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">14. שהחיינו על חליפה חדשה?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qc14')">כן – אם שמח</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc14')">לא – שהחיינו רק על פרי</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc14')">לא – רק על חליפה יוקרתית</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc14')">מחלוקת</button>
        </div>
        <div class="quiz-explanation" id="qc14">
            ✅ שהחיינו מברכים על בגד חשוב שמשמח – חליפה, שמלה, מעיל.
            <button class="ref-btn" onclick="goToSlide(45)">← ראה שקף 44</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">15. שהחיינו על גרביים חדשות?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc15')">כן – בגד חדש</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qc15')">לא – גרביים אינן חשובות מספיק</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc15')">רק אם יקרות</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc15')">מחלוקת</button>
        </div>
        <div class="quiz-explanation" id="qc15">
            ✅ גרביים, לבנים, מטפחת פשוטה – אין מברכים שהחיינו.
            <button class="ref-btn" onclick="goToSlide(45)">← ראה שקף 44</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">16. קנית בית לעצמך בלבד – מה מברכים?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc16')">הטוב והמטיב</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qc16')">שהחיינו</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc16')">שניהם</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc16')">לא מברכים</button>
        </div>
        <div class="quiz-explanation" id="qc16">
            ✅ בית שקנה לעצמו – שהחיינו. אם קנה עם שותפים – הטוב והמטיב.
            <button class="ref-btn" onclick="goToSlide(45)">← ראה שקף 44</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">17. קנית דירה עם בן/בת זוג – מה מברכים?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc17')">שהחיינו</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qc17')">הטוב והמטיב</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc17')">שניהם</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc17')">לא מברכים</button>
        </div>
        <div class="quiz-explanation" id="qc17">
            ✅ בית שקנו שניים יחד – הטוב והמטיב.
            <button class="ref-btn" onclick="goToSlide(45)">← ראה שקף 44</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">18. ראית חבר אהוב שלא ראית 30 יום?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc18')">לא מברכים</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc18')">הטוב והמטיב</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qc18')">שהחיינו</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc18')">מחיה המתים</button>
        </div>
        <div class="quiz-explanation" id="qc18">
            ✅ הרואה חבר אהוב לאחר שלושים יום – שהחיינו, אם לבו שמח בראייתו.
            <button class="ref-btn" onclick="goToSlide(46)">← ראה שקף 45</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">19. ראית חבר שלא ראית שנה תמימה – מה מוסיפים?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc19')">שהחיינו בלבד</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc19')">מחיה המתים בלבד</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qc19')">שהחיינו + ברוך מחיה המתים</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc19')">לא מברכים</button>
        </div>
        <div class="quiz-explanation" id="qc19">
            ✅ לאחר שנים עשר חודש: שהחיינו + "ברוך מחיה המתים" (ללא שם ומלכות).
            <button class="ref-btn" onclick="goToSlide(46)">← ראה שקף 45</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">20. מה ברכת ריח ורד?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc20')">עשבי בשמים</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc20')">הנותן ריח טוב בפירות</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc20')">מיני בשמים</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qc20')">עצי בשמים – לרוב הפוסקים</button>
        </div>
        <div class="quiz-explanation" id="qc20">
            ✅ ורד הוא שיח מעוצה רב-שנתי – לרוב הפוסקים "עצי בשמים".
            <button class="ref-btn" onclick="goToSlide(41)">← ראה שקף 40</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">21. דאודורנט ומבשם אוויר לשירותים – מברכים?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc21')">כן – ריח טוב</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qc21')">לא – ייעודם סילוק ריח רע</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc21')">כן, אם ריחם נעים</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc21')">מחלוקת</button>
        </div>
        <div class="quiz-explanation" id="qc21">
            ✅ ייעודם סילוק ריח רע, לא הנאת ריח – אין ברכה.
            <button class="ref-btn" onclick="goToSlide(40)">← ראה שקף 39</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">22. יום שני של ראש השנה – שהחיינו?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc22')">לא מברכים</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc22')">כן – כמו לילה ראשון</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qc22')">מחלוקת; לכתחילה – פרי/בגד חדש</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc22')">מברכים רק על השופר</button>
        </div>
        <div class="quiz-explanation" id="qc22">
            ✅ מחלוקת (יומא אריכתא). לכתחילה מניחים פרי/בגד חדש כדי לברך שהחיינו בוודאי.
            <button class="ref-btn" onclick="goToSlide(43)">← ראה שקף 42</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">23. בין המצרים – פרי חדש?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc23')">מותר לאכול</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc23')">אסור גם בשבת</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qc23')">נמנעים בחול; בשבתות מותר</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc23')">אסור בתשעת הימים בלבד</button>
        </div>
        <div class="quiz-explanation" id="qc23">
            ✅ נמנעים מפרי חדש בשלושת השבועות. בשבתות שבינתיים – מותר לכתחילה.
            <button class="ref-btn" onclick="goToSlide(44)">← ראה שקף 43</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">24. שהחיינו על בגד/פרי – חובה גמורה?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc24')">חובה גמורה</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qc24')">מצווה לברך, אך לרוב הפוסקים אינו חייב (רשות)</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc24')">אסור לברך</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc24')">חובה על בגד, רשות על פרי</button>
        </div>
        <div class="quiz-explanation" id="qc24">
            ✅ שהחיינו על בגד ופרי – מצווה (רשות), לא חובה גמורה. ראוי להיזהר לברך.
            <button class="ref-btn" onclick="goToSlide(42)">← ראה שקף 41</button>
        </div>
    </div>

    <div class="quiz-container">
        <div class="quiz-question">25. שהחיינו על קריאת מגילה – אשכנזים?</div>
        <div class="quiz-options">
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc25')">לילה בלבד</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc25')">בוקר בלבד</button>
            <button class="quiz-option" onclick="checkQuizQ(this, true, 'qc25')">לילה ובוקר – שתי קריאות שתי ברכות</button>
            <button class="quiz-option" onclick="checkQuizQ(this, false, 'qc25')">אין שהחיינו על מגילה</button>
        </div>
        <div class="quiz-explanation" id="qc25">
            ✅ אשכנזים: שהחיינו בלילה ובבוקר. ספרדים: לילה בלבד.
            <button class="ref-btn" onclick="goToSlide(43)">← ראה שקף 42</button>
        </div>
    </div>

`
},
// שקף 50 - Sources
{
    title: "מקורות והמלצות",
    menu: "מקורות",
    section: "סיכום",
    content: `
    <div class="slide-header">
        <h1>מקורות</h1>
        <div class="subtitle">מקורות הלכתיים שנעזרנו בהם במצגת זו</div>
    </div>

    <div class="section-title">ספרי הלכה ראשיים</div>
    <div class="table-container">
        <table>
            <thead><tr><th>ספר</th><th>מחבר</th><th>נושא</th></tr></thead>
            <tbody>
                <tr><td><strong>שולחן ערוך אורח חיים</strong> סימנים קסז–רלא, קעח–ריד, תפב–תרצז</td><td>מרן הרב יוסף קארו; רמ"א</td><td>ברכות הנהנין, ברכות אחרונות, ריח, שהחיינו, ימים טובים</td></tr>
                <tr><td><strong>משנה ברורה</strong></td><td>החפץ חיים, ר' ישראל מאיר הכהן</td><td>פסיקה מעשית לכל הנושאים</td></tr>
                <tr><td><strong>ביאור הלכה</strong></td><td>החפץ חיים</td><td>ניתוח מעמיק של שאלות ספציפיות</td></tr>
                <tr><td><strong>פניני הלכה – ברכות</strong></td><td>הרב אליעזר מלמד</td><td>המקור העיקרי לפסיקה מעשית במצגת. זמין חינם: ph.yhb.org.il</td></tr>
                <tr><td><strong>ילקוט יוסף – ברכות</strong></td><td>הרב יצחק יוסף</td><td>פסיקה ספרדית מפורטת. yalkut.info</td></tr>
                <tr><td><strong>וזאת הברכה</strong></td><td>הרב אלכסנדר מנדלבאום</td><td>מדריך מעשי עם מפתח לפי מאכלים</td></tr>
            </tbody>
        </table>
    </div>

    <div class="section-title">סימני שולחן ערוך עיקריים לפי נושא</div>
    <div class="table-container">
        <table>
            <thead><tr><th>נושא</th><th>סימנים</th></tr></thead>
            <tbody>
                <tr><td>ברכות על מאכלים (ראשונות)</td><td>שו"ע רב–ריז</td></tr>
                <tr><td>כללי ברכות (כוונה, הפסק, שינוי מקום)</td><td>שו"ע קסז, קעח, רו–ריב</td></tr>
                <tr><td>ברכה לבטלה / שאינה צריכה</td><td>שו"ע רטו</td></tr>
                <tr><td>ברכת המזון וזימון</td><td>שו"ע קפד–ר</td></tr>
                <tr><td>ברכה מעין שלוש</td><td>שו"ע קפח</td></tr>
                <tr><td>בורא נפשות</td><td>שו"ע רז, א</td></tr>
                <tr><td>עיקר וטפל</td><td>שו"ע ריב</td></tr>
                <tr><td>ברכות על ריח</td><td>שו"ע רטז</td></tr>
                <tr><td>שהחיינו – כלים, בגדים, פרי חדש</td><td>שו"ע רכב–רכה</td></tr>
                <tr><td>שהחיינו – ימים טובים, מצוות</td><td>שו"ע תפב, תר, תקפה, תרמא, תרעו, תרצב</td></tr>
                <tr><td>מאכל איסור</td><td>שו"ע קצו</td></tr>
                <tr><td>מתי לא מברכים (הנאה)</td><td>שו"ע קצז, רד</td></tr>
            </tbody>
        </table>
    </div>

    <div class="section-title">מקורות נוספים שנזכרו</div>
    <p>מסכת ברכות (גמרא) · רמב"ם הלכות ברכות · ערוך השולחן · אגרות משה (הרב פיינשטיין) · יביע אומר (הרב עובדיה יוסף) · הליכות שלמה (הרב שלמה זלמן אוירבאך) · פסחים קא ע"ב (שינוי מקום)</p>

    <div class="highlight-box success" style="margin-top:24px;">
        <div class="highlight-box-title">🌟 לסיום</div>
        <p>\"אָסוּר לוֹ לָאָדָם שֶׁיֵּהָנֶה מִן הָעוֹלָם הַזֶּה בְּלֹא בְּרָכָה\" (ברכות לה, א)</p>
        <p>כל ברכה היא רגע של עצירה, הכרת תודה, וחיבור לבורא עולם. מי שמתרגל לברך בכוונה – מגלה קדושה בתוך הרגעים הפשוטים של החיים.</p>
        <p><strong>תרגלו, שאלו, ולמדו – ויהי רצון שנזכה לברך ולהיות מבורכים.</strong></p>
    </div>
    `
}
];

