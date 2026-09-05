/* =========================================
   GRAMMAR LESSONS DATA
========================================= */


const lessons = [

    {
        id: 1,

        title: "Unit 1",

        subtitle: "Present Perfect and Present Perfect Continuous",

        thumbnail: "Present Perfect .jpeg",

        content: [

            {
                type: "image",

                src:
                    "Present Perfect .jpeg"
            },


            {
                type: "text",

                title: "What is Grammar?",

                text:
                    `
                <h4>1. التكوين الأساسي (Structure)</h4>

                <strong>الإثبات (Positive):</strong><br>
                I / You / We / They → have + V3<br>
                He / She / It → has + V3<br><br>

                <strong>النفي (Negative):</strong><br>
                I / You / We / They → haven't + V3<br>
                He / She / It → hasn't + V3<br><br>

                <strong>السؤال (Question):</strong><br>
                Have / Has + Subject + V3 ?<br><br>


                <h4>2. الاستخدامات الرئيسية (Main Uses)</h4>

                <strong>خبرات حياتية (Life Experiences):</strong><br>
                نستخدم Present Perfect للحديث عن شيء حدث في حياتك بشكل عام، من غير تحديد وقت حدوثه.<br>
                Example: I have traveled to Tokyo.<br><br>

                <strong>حدث قريب وله أثر (Recent Event):</strong><br>
                نستخدمه للحديث عن شيء حدث منذ وقت قريب وما زالت نتيجته أو آثاره موجودة الآن.<br>
                Example: I have lost my keys.<br><br>

                <strong>فترة زمنية لم تنتهِ (Unfinished Time):</strong><br>
                نستخدمه عندما يحدث شيء خلال فترة زمنية ما زالت مستمرة حتى الآن، مثل today أو this week.<br>
                Example: He hasn't called today.<br><br>

                <strong>بدأ في الماضي ومستمر حتى الآن:</strong><br>
                نستخدمه لحدث بدأ في الماضي وما زال مستمرًا حتى الحاضر.<br>
                Example: We have lived here for 5 years.<br><br>


                <h4>3. الكلمات الدالة (Keywords)</h4>

                <strong>Just / Already:</strong><br>
                بمعنى للتو / بالفعل، وتأتي غالبًا بين الفعل المساعد والتصريف الثالث.<br>
                Example: She has just arrived.<br>
                Example: I have already finished.<br><br>

                <strong>Yet:</strong><br>
                بمعنى ليس بعد، وتأتي عادةً في نهاية الجملة المنفية أو السؤال.<br>
                Example: I haven't finished yet.<br>
                Example: Have you finished yet?<br><br>

                <strong>Ever / Never:</strong><br>
                Ever = من قبل<br>
                Never = أبدًا<br>
                نستخدمهما غالبًا للحديث عن الخبرات والتجارب.<br>
                Example: Have you ever visited Paris?<br>
                Example: I have never visited Paris.<br><br>

                <strong>Since / For:</strong><br>
                Since → نقطة البداية.<br>
                For → مدة زمنية.<br>
                Example: I have lived here since 2020.<br>
                Example: I have lived here for 5 years.<br><br>


                <h4>4. ملاحظات مهمة (Quick Tips)</h4>

                <strong>لا تحدد وقتًا ماضيًا محددًا:</strong><br>
                لا نستخدم Present Perfect مع وقت ماضٍ محدد ومنتهٍ مثل yesterday.<br><br>

                ❌ I have visited London yesterday.<br>
                ✅ I visited London yesterday.<br><br>

                <strong>الفرق بين Been و Gone:</strong><br>
                Has gone to → ذهب إلى المكان وما زال هناك ولم يعد بعد.<br>
                Example: Ali has gone to London.<br><br>

                Has been to → ذهب إلى المكان من قبل ثم عاد.<br>
                Example: Ali has been to London.

                <h4>5. المبني للمجهول (Present Perfect Passive)</h4>
                    <strong>التكوين (Structure):</strong><br>
                    Subject + have / has + been + V3<br><br>

                    نستخدم المبني للمجهول عندما يكون التركيز على الفعل أو الشيء الذي وقع عليه الفعل، وليس على الشخص الذي قام بالفعل.<br><br>

            `
            },


            {
                type: "image",

                src:
                    "Present Perfect Continuous .jpeg"
            },


            {
                type: "text",

                title: "What is Grammar ?",

                text:
                     `
    <h4>1. التكوين الأساسي (Structure)</h4>

    <strong>الإثبات (Positive):</strong><br>
    I / You / We / They → have + been + V-ing<br>
    He / She / It → has + been + V-ing<br><br>

    <strong>النفي (Negative):</strong><br>
    I / You / We / They → haven't + been + V-ing<br>
    He / She / It → hasn't + been + V-ing<br><br>

    <strong>السؤال (Question):</strong><br>
    Have / Has + Subject + been + V-ing ?<br><br>


    <h4>2. الاستخدامات الرئيسية (Main Uses)</h4>

    <strong>التركيز على مدة واستمرارية الحدث:</strong><br>
    نستخدم Present Perfect Continuous عندما نريد التأكيد على أن الفعل استمر لفترة من الوقت، مع التركيز على مدة واستمرارية الحدث.<br>
    Example: I have been studying English all day.<br><br>

    <strong>حدث كان مستمرًا وله أثر واضح الآن:</strong><br>
    نستخدمه عندما يكون النشاط مستمرًا أو حدث مؤخرًا، وترك نتيجة أو أثرًا واضحًا في الوقت الحالي.<br>
    Example: Her hands are covered in flour because she has been baking.<br><br>


    <h4>3. الكلمات الدالة (Keywords)</h4>

    <strong>All:</strong><br>
    بمعنى طوال، وتستخدم مع فترات زمنية مثل:<br>
    all morning - all day - all night - all year<br><br>

    <strong>For / Since:</strong><br>
    نستخدمهما أيضًا مع Present Perfect Continuous للتركيز على استمرار الفعل لفترة زمنية.<br>
    Since → نقطة البداية.<br>
    For → مدة زمنية.<br><br>

    <strong>How long...?</strong><br>
    بمعنى "ما طول المدة؟"، وتستخدم كثيرًا في الأسئلة مع هذا الزمن.<br>
    Example: How long have you been studying English?<br><br>


    <h4>4. ملاحظات سريعة ومهمة (Quick Tips)</h4>

    <strong>أفعال الحالة والمشاعر (Stative Verbs):</strong><br>
    بعض الأفعال لا تستخدم عادةً في الأزمنة المستمرة، مثل:<br>
    be - like - love - hate - have - know<br><br>

    نستخدم معها Present Perfect Simple بدلًا من Present Perfect Continuous.<br>
    Example: We have known each other for 10 years.<br><br>

    <strong>الأفعال اللحظية:</strong><br>
    بعض الأفعال تحدث في لحظة ولا تستغرق وقتًا، مثل:<br>
    join - stop - open - close - break down<br><br>

    لذلك لا نستخدمها عادةً مع Present Perfect Continuous عندما يكون التركيز على استمرار الفعل.<br><br>

    <strong>إياك تذكر العدد:</strong><br>
    إذا كانت الجملة تحتوي على عدد مرات حدوث الفعل أو عدد الأشياء التي تم إنجازها، نستخدم Present Perfect Simple وليس Present Perfect Continuous.<br><br>

    <strong>Example:</strong><br>
    ✅ I have read 3 books.<br>
    ❌ I have been reading 3 books.

    <strong>ملاحظة مهمة جدًا:</strong><br>
        صيغة Present Perfect Passive هي:<br><br>

        <strong>have / has + been + V3</strong><br><br>

        ❌ The room has cleaned.<br>
        ✅ The room has been cleaned.
`
            },

            {
                type: "link",
                title: "Detailed explanation",
                url:"https://share.gemini.google/I98F5GNFQYkv"
            },

        ]
    },


    {
        id: 2,

        title: "Unit 2",

        subtitle: "Reported Speech",

        thumbnail:
            "Reported Speech .jpeg",

        content: [

            {
                type: "image",

                src:
                    "Reported Speech .jpg"
            },


        {
                type: "text",

                title: "What is Grammar ?",

                text: `#### 1. المفاهيم الأساسية (Basic Concepts)

**Direct Speech (الكلام المباشر):**
الجملة التي يقولها الشخص نفسه وتوضع بين أقواس "....".

Example: Ahmed said, "I like pizza."

**Indirect Speech (الكلام غير المباشر):**
الجملة التي تُنقل على لسان شخص آخر، ولا توضع بين أقواس.

Example: Ahmed said that he liked pizza.

**Say:**
فعل قول لا يتبعه مفعول.

Example: She said that she was tired.

**Tell:**
فعل قول لا بد أن يتبعه مفعول (مخاطب).

Example: She told me that she was tired.

#### 2. خطوات تحويل الجملة الخبرية (Statement Transformation)

عند التحويل من المباشر إلى غير المباشر، نتبع الخطوات التالية:

**أولاً: تغيير فعل القول (Reporting Verb):**

say → say
says → says
said → said

say to → tell
says to → tells
said to → told

**ثانياً: خطوات تحويل الجملة:**

* حذف الأقواس وعلامات التنصيص.
* الربط بكلمة **that**، وهي خطوة اختيارية ويمكن الاستغناء عنها.
* تغيير الضمائر لتتناسب مع المتكلم والمخاطب.
* تغيير الزمن للماضي إذا كان فعل القول خارج الأقواس في صيغة الماضي.

Example: Ali said to me, "I will help you."
→ Ali told me that he would help me.

#### 3. تغيير الأزمنة (Tense Changes)

إذا كان فعل القول ماضياً **(said / told)**، نُرجع زمن الجملة خطوة للوراء.

**Present Simple → Past Simple**
Example: "I play tennis." → He said he played tennis.

**Present Continuous → Past Continuous**
Example: "I am eating." → She said she was eating.

**Present Perfect → Past Perfect**
Example: "We have finished." → They said they had finished.

**Past Simple → Past Perfect**
Example: "I went to the park." → He said he had gone to the park.

**will → would**
**can → could**
**must → had to**

**أفعال لا تتغير:**
could, would, should, might, ought to, used to, had better

#### 4. تغيير تعبيرات الزمان والمكان (Time & Place Expressions)

**now → then / at that time**

**yesterday → the day before / the previous day**

**tomorrow → the following day / the next day**

**this → that**

**these → those**

**here → there**

Example: "I will travel tomorrow."
→ He said he would travel the next day.

#### 5. الاستثناءات (Exceptions)

لا يتغير زمن الجملة في الحالات التالية:

**1. إذا كان فعل القول في المضارع (say / says):**

Example: He says, "I am happy."
→ He says that he is happy.

**2. إذا كانت الجملة تعبر عن حقيقة علمية ثابتة:**

Example: The teacher said, "Water boils at 100°C."
→ The teacher said that water boils at 100°C.

**3. إذا قيل الكلام منذ فترة قصيرة جداً:**

مثل **just now** أو **a moment ago**.

Example: He said just now, "I will call you."
→ He said just now that he will call me.

**4. مع حالات (If) الشرطية:**

**First Conditional:** يتم تغييرها إلى الحالة الثانية.

**Second Conditional:** لا يحدث تغيير في الزمن.

**Third Conditional:** لا يحدث تغيير في الزمن.

#### 6. أفعال القول المتقدمة (Advanced Reporting Verbs)

لجعل لغتك أكثر احترافية، يمكن استخدام أفعال قول بديلة تعبر عن المعنى الدقيق بدلاً من **say** و **tell**.

**المجموعة الأولى: Verb + that**

agree, admit, complain, explain, deny

Example: He explained that the traffic was bad.

**المجموعة الثانية: Verb + object + that**

assure, convince, remind, warn

Example: She reminded me that we had a meeting.

**المجموعة الثالثة: Verb + V-ing**

accept, admit, deny, suggest

Example: They suggested going to the beach.

**المجموعة الرابعة: Verb + to + infinitive**

advise, promise, refuse, offer

Example: He promised to help me with my homework.
`
            },


         {
                type: "link",
                title: "Detailed explanation",
                url: "https://share.gemini.google/r6jCo9whiTnV"
            }
        ]
    },


    {
        id: 3,

        title: "Unit 3",

        subtitle: "Deduction , Advice and Regret",

        thumbnail:
            "Deduction,Advice and Regret.jpeg",

        content: [

            {
                type: "image",

                src:
                    "Deduction,Advice and Regret.jpg"
            },


            {
                type: "text",

                title: "What is Grammar ?",

                text:
                    `#### 1. Deduction (الاستنتاج)

الاستنتاج يعني إننا بنحكم على شيء بناءً على دليل أو معلومات عندنا.

#### Present Deduction (الاستنتاج في الحاضر)

**Must + infinitive**

نستخدمها لما نكون متأكدين بدرجة كبيرة إن الشيء صحيح.

**Must + verb**

Example:
He is drinking a lot of water. He must be thirsty.
He speaks English fluently. He must be British.

المعنى: أكيد / لا بد أن.

**Can't + infinitive**

نستخدمها لما نكون متأكدين إن الشيء غير ممكن.

**Can't + verb**

Example:
He can't be Egyptian; he doesn't speak Arabic.
She got high marks. She can't be sad.

المعنى: من المستحيل / لا يمكن أن.

**Might + infinitive**

نستخدمها لما يكون الشيء محتملًا لكننا غير متأكدين.

**Might + verb**

Example:
The tourist might be French.
My father might come early today.

كلمات تدل عليها: maybe - perhaps - possibly - I'm not sure - I don't know.

#### 2. Deduction in the Past (الاستنتاج في الماضي)

لو بنتكلم عن شيء حدث بالفعل في الماضي نستخدم:

**Must have + P.P.**

نستخدمها عندما نكون متأكدين أن الشيء حدث في الماضي.

Example:
The criminal went to prison. He must have done something wrong.
Arwa looks very happy. She must have passed the exam.

المعنى: أكيد أنه فعل ذلك.

**Can't have + P.P.**

نستخدمها عندما نكون متأكدين أن الشيء لم يحدث في الماضي.

Example:
You can't have phoned me yesterday because I was at home all the time.
It's only 4 o'clock. The match can't have finished already.

**Might have + P.P.**

نستخدمها لشيء ربما حدث في الماضي ولكننا غير متأكدين.

Example:
He might have won the gold medal.
Mariam wasn't at school. She might have had a doctor's appointment.

#### 3. Advice and Regret (النصيحة والندم)

**Should have + P.P.**

نستخدمها عندما كان من الأفضل أن نفعل شيئًا في الماضي ولكننا لم نفعله.

Example:
You missed the party. You should have come.

المعنى: كان المفروض تيجي، لكنك لم تأتِ.

**Should + infinitive:** نصيحة الآن.
**Should have + P.P.:** نصيحة أو لوم على شيء في الماضي.

Example:
You look tired. You should go to bed.
You went to bed very late. You should have gone to bed earlier.

**Shouldn't have + P.P.**

نستخدمها عندما كان من الأفضل ألا نفعل شيئًا في الماضي، لكننا فعلناه.

Example:
I'm feeling sick. I shouldn't have eaten so much.

المعنى: كان المفروض ما آكلش الكمية دي، لكني أكلتها.

**Could have + P.P.**

نستخدمها للتعبير عن شيء كان ممكن يحصل في الماضي لكنه لم يحدث.

Example:
I went to school on foot, but I could have gone to school by car.

المعنى: كان ممكن أروح بالعربية، لكني رحت مشيًا.`
            },

 {
                type: "link",
                title: "Detailed explanation",
                url: "https://share.gemini.google/7EOrpT7JyZ63"
            }
        ]
    }

];
/* =========================================
   DISPLAY LESSONS
========================================= */


const lessonsContainer =
    document.getElementById("lessonsContainer");


let activeCard = null;
let activeCardMarkup = "";



function displayLessons() {

    lessonsContainer.innerHTML = "";


    lessons.forEach((lesson) => {

        const card =
            document.createElement("article");


        card.className = "lesson-card";


        card.innerHTML = `

            <div class="lesson-image">

                <img
                    src="${lesson.thumbnail}"
                    alt="${lesson.title}"
                >

                <div class="lesson-number">
                    ${String(lesson.id).padStart(2, "0")}
                </div>

            </div>


            <div class="lesson-card-info">

                <h2>
                    ${lesson.title}
                </h2>

                <p>
                    ${lesson.subtitle}
                </p>

                <span class="lesson-open">
                    Open Lesson →
                </span>

            </div>

        `;


        card.addEventListener(
            "click",
            () => {

                openLesson(lesson, card);

            }
        );


        lessonsContainer.appendChild(card);

    });

}


function formatLessonText(text) {
    if (!text.includes("####") && !text.includes("**")) {
        return text;
    }

    return text
        .replace(/^#### (.+)$/gm, "<h4>$1</h4>")
        .replace(/^\* (.+)$/gm, "<div class=\"lesson-bullet\">$1</div>")
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/\n/g, "<br>");
}



displayLessons();
/* =========================================
   OPEN LESSON
========================================= */


function openLesson(lesson, card) {

    if (activeCard) {
        return;
    }

    window.playSound?.(600);

    activeCard = card;
    activeCardMarkup = card.innerHTML;

    card.innerHTML = "";
    card.classList.add("is-open");

    document.querySelectorAll(".lesson-card").forEach((otherCard) => {

        if (otherCard !== card) {
            otherCard.classList.add("is-hidden");
        }

    });


    const wrapper =
        document.createElement("div");


    wrapper.className =
        "lesson-card-content";


    wrapper.innerHTML = `

        <button class="lesson-back" type="button">
            &larr; Back to Lessons
        </button>

        <div class="lesson-content-header">

            <span>
                LESSON ${String(lesson.id).padStart(2, "0")}
            </span>

            <h2>
                ${lesson.title}
            </h2>

            <p>
                ${lesson.subtitle}
            </p>

        </div>

    `;


    lesson.content.forEach((item) => {


        /* IMAGE */

        if (item.type === "image") {

            const image =
                document.createElement("img");


            image.className =
                "lesson-content-image";


            image.src =
                item.src;


            image.alt =
                lesson.title;

            image.addEventListener("error", () => {
                image.src = lesson.thumbnail;
            }, { once: true });

            wrapper.appendChild(image);

        }



        /* TEXT */

        if (item.type === "text") {

            const textBlock =
                document.createElement("div");


            textBlock.className =
                "lesson-text";


            textBlock.innerHTML = `

                <h3>
                    ${item.title}
                </h3>

                <div class="lesson-text-body">
                    ${formatLessonText(item.text)}
                </div>

            `;


            wrapper.appendChild(textBlock);

        }


        /* LINK */

        if (item.type === "link") {

            const linkBlock =
                document.createElement("div");


            linkBlock.className =
                "lesson-link";


            linkBlock.innerHTML = `

                <h3>
                    ${item.title}
                </h3>

                <p>
                    ${item.text}
                </p>

                <a href="${item.url}" target="_blank" rel="noopener noreferrer">
                    Open Website &rarr;
                </a>

            `;


            wrapper.appendChild(linkBlock);

        }

    });


    card.appendChild(wrapper);

    wrapper.querySelector(".lesson-back").addEventListener("click", (event) => {
        event.stopPropagation();

        window.playSound?.(500);

        card.innerHTML = activeCardMarkup;
        card.classList.remove("is-open");

        document.querySelectorAll(".lesson-card").forEach((otherCard) => {
            otherCard.classList.remove("is-hidden");
        });

        activeCard = null;
        activeCardMarkup = "";
    });

}
