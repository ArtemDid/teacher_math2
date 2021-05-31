import React from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import logo from '../images/maths1.jpg';
import logo2 from '../images/about.webp';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


export const App = () => {

    return (
        <Layout style={{ padding: '0px 10% 10%' }}>
            <Content className='about'>
                <div class="d-flex justify-content-around flex-wrap" style={{ borderBottom: '2px solid blue' }}>
                    <div class="p-2 bd-highlight" style={{ fontFamily: 'Kalam, cursive', fontSize: 48 }}>Про себе</div>
                </div>
                <br />
                <div class="d-flex flex-column bd-highlight mb-3" style={{ fontSize: '18px' }}>
                    <div class="p-2 bd-highlight">
                        <span style={{ textDecorationLine: 'underline', color: 'red' }}>1. Загальні відомості</span><br />
                        <span style={{ textDecorationLine: 'underline', marginLeft: '10px' }}>Дата народження:</span><i> 10.04.1973 р.</i><br />
                        <span style={{ textDecorationLine: 'underline', marginLeft: '10px' }}>Адреса шкільного сайту в Інтернеті:</span> <a href="http://nivan.ucoz.ua/"><i> http://nivan.ucoz.ua</i></a>
                    </div>
                    <br />
                    <div class="p-2 bd-highlight">
                        <div class="bd-highlight" style={{ float: 'left' }}>
                            <span style={{ textDecorationLine: 'underline', color: 'red' }}>2. Робота</span><br />
                            <span style={{ textDecorationLine: 'underline', marginLeft: '10px' }}>Місце роботи:</span><i> Новоіванівська філія КЗ "НВК "Джерело"</i><br />
                            <span style={{ textDecorationLine: 'underline', marginLeft: '10px' }}>Посада:</span><i> вчитель математики.</i><br />
                            <span style={{ textDecorationLine: 'underline', marginLeft: '10px' }}>Викладає предмети:</span><i> математика, алгебра, геометрія.</i><br />
                            <span style={{ textDecorationLine: 'underline', marginLeft: '10px' }}>Класне керівництво в даний час:</span><i> відсутнє.</i><br />
                            <span style={{ textDecorationLine: 'underline', marginLeft: '10px' }}>Загальний педагогічний стаж:</span><i> 29 років.</i><br />
                            <span style={{ textDecorationLine: 'underline', marginLeft: '10px' }}>Кваліфікаційна категорія:</span><i> вища категорія.</i>
                        </div>
                        <div class="bd-highlight" style={{ float: 'right' }}>
                            <img src={logo} alt='photo' id='logo' style={{ width: '100%' }}></img>
                        </div>
                    </div>
                    <div class="p-2 bd-highlight">
                        <span style={{ textDecorationLine: 'underline', color: 'red' }}>3. Освіта</span><br />
                        <span style={{ textDecorationLine: 'underline', marginLeft: '10px' }}>Назва і рік закінчення організації професійної освіти:</span><i> Запорізький державний  університет, 1996 р.</i><br />
                        <span style={{ textDecorationLine: 'underline', marginLeft: '10px' }}>Спеціальність, кваліфікація за дипломом:</span><i> викладач математики.</i><br />
                    </div>
                    <br />
                    <div class="p-2 bd-highlight">
                        <span style={{ textDecorationLine: 'underline', color: 'red' }}>4. Моє педагогічне кредо</span><br />
                        <div style={{ textAlign: 'center', fontFamily: 'Pattaya', fontSize: 36, color: 'blue', textShadow: '0 0 20px rgba(0,0,0,0.8)' }}>"Хороший вчитель може навчити інших навіть тому, чого сам не вміє."</div>
                    </div>
                    <div class="p-2 bd-highlight">
                        <span style={{ textDecorationLine: 'underline', color: 'red' }}>5. Державні нагороди, відзнаки (обов’язково рік нагородження):</span><br />
                        <i style={{ marginLeft: '10px' }}>1) Грамота управління освітою Оріхівської районної ради за високі досягнення в навчально-виховній роботі та як переможця в номінації "Учнівські симпатії" 10.05.2007 р.</i><br />
                        <i style={{ marginLeft: '10px' }}>2) Грамота управління освітою Оріхівської райдержадміністрації за багаторічну сумлінну працю і вагомий внесок у справі навчання і виховання учнів, 26.09.2016 р.</i>
                    </div>
                    <br />
                    <div class="p-2 bd-highlight">
                        <span style={{ textDecorationLine: 'underline', color: 'red' }}>6. Класи, в яких викладаю:</span><br />
                        <i style={{ marginLeft: '10px' }}>5, 6, 7, 8, 9, 10, 11 класи</i>
                    </div>
                    <br />
                    <div class="p-2 bd-highlight">
                        <span style={{ textDecorationLine: 'underline', color: 'red' }}>7. Мова викладання:</span><br />
                        <i style={{ marginLeft: '10px' }}>українська</i>
                    </div>
                    <br />
                    <div class="p-2 bd-highlight">
                        <span style={{ textDecorationLine: 'underline', color: 'red' }}>8. Проблема (тема), над якою працюю:</span><br />
                        <i style={{ marginLeft: '10px' }}>«Формування та розвиток навчально-пізнавальних компетентностей учнів на уроках математики»</i>
                    </div>
                    <br />
                    <div class="p-2 bd-highlight">
                        <span style={{ textDecorationLine: 'underline', color: 'red' }}>9. Інноваційні форми роботи та технології, що використовуються:</span><br />
                        <span style={{ marginLeft: '10px' }}>Головне завдання вчителя зробити навчання цікавим. Тому на урок потрібно йти не лише зі знанням навчального матеріалу,
                        методів і прийомів навчання, набором задач і вмінням їх майстерно розв'язувати, але і з різноманітними та цікавими способами організації роботи учнів.
                        <br />У своїй урочній та позаурочній діяльності я використовую різні можливості інформаційно-комунікаційних технологій, а також їх інтеграцію з
                        іншими перспективними освітніми технологіями такими, як: технології рівневої диференціації та індивідуалізації, інтерактивні, ігрові, тестові,
                        здоров'язберігаючі.</span><br /><br />
                        <b style={{ textDecorationLine: 'underline' }}>Інформаційно-комунікаційні технології</b><br />
                        <span style={{ marginLeft: '10px' }}>Головною перевагою цих технологій є наочність, тому що більша частина інформації засвоюється за допомогою зорової пам'яті.
                        Інформаційні технології допомагають зробити навчальний процес творчим і орієнтованим на учня. Презентації у вигляді слайдів ефективні на різних етапах уроку.
                        Зорове сприйняття досліджуваних об'єктів дозволяє швидше і глибше сприймати представлений матеріал. Є можливість емоційно і образно подати матеріал.
                        На своїх уроках я використовую персональний комп'ютер для таких форм роботи, як:<br />
                        • навчальний тренажер;<br />
                        • моделюючий стенд;<br />
                        • інформаційно-довідникові системи;<br />
                        • ігровенавчальне середовище.
                        </span><br /><br />
                        <b style={{ textDecorationLine: 'underline' }}>Навчальний тренажер</b><br />
                        <span style={{ marginLeft: '10px' }}>Використовую для виконання таких тренувальних вправ, як «знайди помилку», «встанови закономірність», вдосконалення усного рахунку, тренування обчислювальних навичок.
                        </span><br /><br />
                        <b style={{ textDecorationLine: 'underline' }}>Моделюючий стенд</b><br />
                        <span style={{ marginLeft: '10px' }}>Найбільш продуктивно цю форму використовую на уроках геометрії для створення динамічних та анімаційних моделей.
                        </span><br /><br />
                        <b style={{ textDecorationLine: 'underline' }}>Інформаційно-довідникові системи</b><br />
                        <span style={{ marginLeft: '10px' }}>Їх використання є дуже доцільним як на уроці так і в організації позакласних заходів, підготовці до олімпіад та зовнішнього незалежного тестування. Найчастіше я звертаюсь до
                        електронної енциклопедії Кирила і Мефодія, серії енциклопедій «Хочу все знати», а також використовую інформаційно-пошукові системи мережі Інтернет.
                        </span><br /><br />
                        <b style={{ textDecorationLine: 'underline' }}>Ігрове навчальне середовище</b><br />
                        <span style={{ marginLeft: '10px' }}>За допомогою комп'ютера легко створити на уроці цікаву ігрову ситуацію. Учні із захопленням шукають піратські скарби, відправляються у фантастичні світи,
                        в космічні подорожі, але для цього їм потрібно засвоїти певні математичні знання та отримати необхідні навички.
                        </span><br /><br />
                        <b style={{ textDecorationLine: 'underline' }}>Технологія рівневої диференціації та індивідуалізації</b><br />
                        <span style={{ marginLeft: '10px' }}>Диференціація сприяє більш міцному і глибокому засвоєнню знань, розвитку індивідуальних здібностей. Різнорівневі завдання полегшують організацію навчального процесу в класі,
                        створюють умови для прогресу учнів у навчанні у відповідності з їх можливостями. Підвищується рівень мотивації.
                        </span><br /><br />
                        <b style={{ textDecorationLine: 'underline' }}>Інтерактивні технології (метод проектів)</b><br />
                        <span style={{ marginLeft: '10px' }}>У своїй практиці використовую інтерактивні технології навчання, які сприяють самореалізації особистості учня, підвищують його мотивацію до навчання та адаптацію у освітньому середовищі,
                        розвивають його комунікативні здібності тапідвищують внутрішню самооцінку.<br />
                        Зокрема, метод проектів дозволяє відійти від авторитарності в навчанні, завжди орієнтований на самостійну роботу учнів. За допомогою цього методу учні не тільки отримують знання, але і вчаться здобувати їх самостійно, використовувати для розв'язання пізнавальних та практичних завдань.
                        </span><br /><br />
                        <b style={{ textDecorationLine: 'underline' }}>Ігрові технології</b><br />
                        <span style={{ marginLeft: '10px' }}>
                            <i>
                                «Предмет математики настільки серйозний, що потрібно не втрачати можливості робити його більш цікавим»
                            </i><br />
                            Блез Паскаль<br /><br />
                            Я вважаю, що використання на уроках ігрових технологій забезпечує досягнення єдності емоційного й раціонального в навчанні.
                            Так включення в урок ігрових моментів робить його цікавішим, створює в учнів гарний настрій, полегшує подолання труднощів.
                            Я використовую їх на різних етапах уроку. Так на початку уроку включаю ігровий момент «відгадай тему уроку», при закріпленні вивченого матеріалу –
                            «знайди помилку». Так само мною розроблені вікторини, уроки-ігри. Усе це спрямовано на розширення кругозору учнів, розвиток їх пізнавальної діяльності,
                            формування певних умінь і навичок, необхідних у практичній діяльності.
                        </span><br /><br />
                        <b style={{ textDecorationLine: 'underline' }}>Тестові технології</b><br />
                        <span style={{ marginLeft: '10px' }}>Завдання на тестовій основі отримали широке поширення в практичній діяльності.
                        Я їх використовую на різних етапах уроку, в ході індивідуальної, групової та фронтальної роботи, в поєднанні з іншими засобами та прийомами навчання.
                        Сьогодні існують різноманітні варіанти тестів. На мій погляд, тести, створені самим учителем, дозволяють найбільш ефективно виявляти якість знань,
                        індивідуалізувати завдання, враховуючи особливості кожного учня.
                        <br /><br />
                        Тестові завдання відрізняються за складністю та формою варіантів відповідей. Використання тестових завдань дозволяє здійснити диференціацію та
                        індивідуалізацію навчання учнів з урахуванням їхнього рівня пізнавальних здібностей.
                        </span><br /><br />
                        <b style={{ textDecorationLine: 'underline' }}>Здоров'язберігаючі технології</b><br />
                        <span style={{ marginLeft: '10px' }}>Поняття «здоров’язберігаюча» відноситься до якісної характеристики будь-якої освітньої технології, що показує,
                        наскільки при реалізації даної технології вирішується завдання збереження здоров'я основних суб'єктів освітнього процесу – учнів і педагогів.<br />
                        Використання даної технології дає мені можливість під час уроку рівномірно розподіляти різні види завдань, чергувати розумову діяльність, визначати
                        час на вивчення складного навчального матеріалу, на проведення самостійних і контрольних робіт, нормативно застосовувати ТЗН, що дає позитивні результати
                        у навчанні. При підготовці і проведенні уроку враховую: дозування навчального навантаження; динамічність учнів та їх працездатність; дотримання гігієнічних
                        вимог (свіже повітря, гарна освітленість, чистота); сприятливий емоційний настрій; оздоровчі моменти і зміну видів діяльності на уроці, що допомагають
                        подолати втому, смуток, незадоволеність; чітку організацію навчальної праці (підготовка дошки, чіткі записи на дошці, застосування ІКТ).
                        </span>
                    </div>
                    <br />
                    <div class="p-2 bd-highlight">
                        <span style={{ textDecorationLine: 'underline', color: 'red' }}>10. Автопортрет</span><br />
                        <span style={{ marginLeft: '10px', fontFamily: 'Pattaya', fontSize: '22px' }}>Вчитель, педагог, викладач… Скільки синонімів одного слова. Вчитель…
                        Це посада чи покликання? Вчитель – це людина душевної доброти, закохана в свою роботу. Це артист, роль якого триває не одну годину і не дві, а довгі роки.
                        Він повністю занурюється у свою роль і живе нею.<br />
                        Чи планувала  я, особисто, свій життєвий шлях присвятити педагогіці? Стати вчителем. І чи думала я, що моєю роботою буде викладання? Ні. Але обставини
                        вирішили все за мене. І зараз я вдячна долі за те, що вона дала мені цей вибір.<br />
                        Вчитель – важлива людина в житті кожного. Він працює з найціннішим – особистістю. Вчитель не тільки вчить, він допомагає, виховує, підказує, шукає…
                        Така доля вчителя. Бути вчителем, означає не просто знати свій предмет, а бути обізнаним у різних сферах життя, бути відкритою, небайдужою, люблячою людиною.
                        Кожна дитина – це маленький всесвіт, і, правильно дібравши ключик, можна виховати особистість. А найбільшою винагородою для вчителя є досягнення його учнів,
                        їх життя, і відчуття того, що ти допоміг ставленню людини. Це прекрасно, що вчитель може бути порадником, провідником і володарем знань.<br />
                        Я навіть і подумати не могла, що так станеться! І ось уже, працюючи вже стільки років у школі, я розумію, щоб бути цікавою дітям, потрібно завжди вчитися,
                        постійно бути у творчому пошуку. При цьому потрібно поставити себе до рівня учня. При цьому дуже важливо не стільки дати знання, скільки навчити добувати їх,
                        знаходити потрібну інформацію, зіставляти факти, розкрити матеріал з допомогою учня, зробити так, щоб він відчував себе частинкою уроку.
                        А це і є робота вчителя, така прекрасна і бурхлива.<br />
                        Яке ж це щастя - бути вчителькою! То що ж тут можна ще сказати:"Я - щаслива".</span>
                    </div>
                </div>

                <div>
                    <img src={logo2} alt='photo' style={{ width: '100%' }}></img>
                </div>


            </Content>
        </Layout>
    );
};

export default App;