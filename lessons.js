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

        ]
    },


    {
        id: 2,

        title: "Parts of Speech",

        subtitle: "Nouns, Verbs and more",

        thumbnail:
            "Present Perfect .jpeg",

        content: [

            {
                type: "image",

                src:
                    "images/lessons/lesson2/image1.jpg"
            },


            {
                type: "text",

                title: "Parts of Speech",

                text:
                    "Words in English are divided into different categories called parts of speech."
            },


            {
                type: "text",

                title: "Nouns",

                text:
                    "A noun is a word that names a person, place, thing, or idea."
            },


            {
                type: "image",

                src:
                    "images/lessons/lesson2/image2.jpg"
            }

        ]
    },


    {
        id: 3,

        title: "Present Simple",

        subtitle: "Learn the Present Simple tense",

        thumbnail:
            "Present Perfect .jpeg",

        content: [

            {
                type: "image",

                src:
                    "images/lessons/lesson3/image1.jpg"
            },


            {
                type: "text",

                title: "Present Simple",

                text:
                    "We use the Present Simple to talk about habits, routines, facts, and things that happen regularly."
            },


            {
                type: "image",

                src:
                    "images/lessons/lesson3/image2.jpg"
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

                <p>
                    ${item.text}
                </p>

            `;


            wrapper.appendChild(textBlock);

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
