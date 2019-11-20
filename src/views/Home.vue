<template>
  <div class="home">
    <!-- Banner -->
    <!--
      To use a video as your background, set data-video to the name of your video without
      its extension (eg. images/banner). Your video must be available in both .mp4 and .webm
      formats to work correctly.
    -->
    <section id="banner" data-video="images/banner">
      <div class="inner">
        <div class="logo"></div>
        <a href="#one" class="button special scrolly">Наша продукция</a>
      </div>
    </section>

    <!-- One -->
    <section id="one" class="wrapper style2">
      <div class="inner">
        <div>
          <div class="box">
            <div class="image fit">
              <img src="../../public/images/pic01.jpg" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Three -->
    <section id="three" class="wrapper style3">
      <div class="inner">
        <div class="grid-style">
          <liquidItem
            :image="liquid4"
            :title="`<h2>WILD WEST</h2>`"
            :list="[
              `<b>Cowboy girl</b> – Нежный <i>бисквитный пирог</i> с начинкой из спелой,
                    сочной <i>малины</i>. Мягкий и легкий вкус десерта, дополняет свежая и
                    сладкая ягода на выдохе. Любители попарить и расслабится оценят эту жидкость
                    по достоинству`,
                `<b>Sherif</b> – Тост с легкой прожаренной корочкой и сладким
                    <i>клубничным вареньем</i>. Эта жидкость заставит вас погрузиться в детство
                    и получить незабываемое наслаждение от всеми любимого лакомства`,
                `<b>Legends</b> – Жевательная резинка со вкусом <i>медовой дыни</i> и спелой,
                    сочной <i>клубники</i>. Легкий фруктовый микс со сладким послевкусием.
                    Освежающая жидкость отлично подойдет на повседневное парение`,
                `<b>Bandit</b> - Невероятно бодрящий вкус крепкого <i>мокачино</i> с тонкой
                    <i>ореховой</i> ноткой. Основной кофейный вкус передан очень четко и насыщено,
                    а ореховое послевкусие не оставит равнодушным ни одного парильщика`,
            ]"/>
          <liquidItem
            :image="liquid1"
            :title="`<h2>ROYAL</h2>`"
            :list='[
              `<b>Watermelon gum</b> – Мягкая жевательная резинка с насыщенным вкусом
                    спелого арбуза и нотками клубники на выдохе. Настоящие ценители сладких и
                    освежающих вкусов оценят эту жидкость и она станет вашим повседневным другом.`,
                `<b>Strawberry milkshake</b> – Вкуснейший напиток, который обожают люди
                    на всей планете. Нежная и сочная клубника в сочетании со сливочным мороженным
                    и молоком расслабляют и заставляют ощутить незабываемое наслаждение.`,
                `<b>Lemonade</b> – Освежающий и утоляющий жажду напиток из нашего детства.
                    Кислые, но приятные нотки лимонного сока с газировкой заряжают бодростью
                    на целый день и поднимают настроение. Если вы ведете активный образ жизни
                    и не любите останавливаться – эта жидкость 100% ваша!`,
                `<b>Paradise pleasure</b> – Настоящее "Райское наслаждение", этот вкус покажет
                    вам как правильно расслабляться. Нежный фруктовый десерт из свежей клубники,
                    банана нарезанного кольцами и взбитыми сливками.`,
            ]'/>
          <liquidItem
            :image="liquid2"
            :title='`<h2>DAILY STEAM</h2><p>(Табачка)</p>`'
            :list='[
              `<b>Island</b> – Табачный лист в шоколадной глазури пропитанный кокосовым молоком`,
                `<b>RY4</b> – Крепкий, с кислиной, табачный вкус для ценителей классики`,
                `<b>Lucky strike</b> – Настоящий американский вкус табака с мягким послевкусием`,
                `<b>KENT</b> – Классический табачный вкус популярных сигарет.
                    Немного терпкий с кислинкой`,
                `<b>Davidoff</b> – Нежный табачный вкус с нотками меда и шоколада`,
            ]'/>
          <liquidItem
            :image="liquid3"
            :title='`<h2>DAILY STEAM</h2><p>(Фрукты)</p>`'
            :list='[
              `<b>Mango</b> – Спелое манго`,
              `<b>Exotic</b> – Освежающий микс апельсина, манго и киви`,
              `<b>Peach</b> – Сладкий сочный персик`,
              `<b>Gum</b> – Фруктовая жевательная резинка`,
              `<b>Currant</b> – Кислая смородина`,
              `<b>Juice</b> – Микс граната, грейпфрута, манго и тонкой ноткой лайма`,
            ]'/>

        </div>
      </div>
    </section>

    <!-- Two -->
    <section id="two" class="wrapper style2">
      <div class="inner">
        <div id="flexgrid">
          <div>
            <header>
              <h3>Галерея</h3>
            </header>
            <img src="../../public/images/galery.jpeg" alt="Галерея" align="center"
                 style="width: 40em; max-width: 100%;">
            <ul class="actions">
              <li><a href="./gallery.html" class="button alt">Перейти</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Four -->
    <section id="four" class="wrapper style3">
      <div class="inner">

        <header class="align-center">
          <h2>ПРЕИМУЩЕСТВА РАБОТЫ С НАМИ</h2>
          <h4>Дорогие друзья, рады, что вы остаетесь с нами и выбрали нашу компанию в качестве
            партнера для ведения vape-бизнеса. Команда Royal Vape более 5 лет упорно трудится для
            развития вейп индустрии. Наша компания стремительно растет и развивается, теперь мы
            запустили направление по производству жидкостей для заправки.</h4>
          <h3>Что вы получаете:</h3>
          <ol class="advantages">
            <li>Стабильно высокое качество наших продуктов (Используем только высококачественное
              сырье ведущих мировых брендов)
            </li>
            <li>Постоянное наличие товарного запаса</li>
            <li>Работаем «b2b» постоянная поддержка и коммуникация с партненром</li>
            <li>Индивидуальный подход к каждому клиенту (подбираем лучшую модель ведения
              бизнеса с вами)</li>
            <li>Качественное обслуживание клиента (своевременная отгрузка товара, быстрая доставка,
              замена пробников, пополнение ассортимента, контроль остатков)
            </li>
            <li>Помощь в развитии ваших магазинов (реклама Vape shop партнеров, ссылки на ваши
              интернет ресурсы с наших каналов)
            </li>
            <li>Профессиональная консультация менеджеров</li>
            <li>Постоянная разработка новых проектов и расширение ассортимента</li>
            <li>Мониторинг цен (контролируем стоимость наших продуктов на полках магазинов для
              создания равных условий продаж)
            </li>
            <li>Бонусы для постоянных клиентов</li>
          </ol>
          <h3>Живете вейпингом? Не останавливаетесь на достигнутом?
            Желаете развиваться и расти?</h3>
          <h3>Оставляйте заявку «Стать партнером». Мы всегда рады работать вместе.</h3>
          <!--<ul class="actions special">
            <li><a href="#" class="button primary accent1">Стать партнером</a></li>
          </ul>-->
          <h2>Наши партнеры</h2>
          <div id="partners">
            <div><img src="../../public/images/partners/HiliqLOGO4.jpg"
                      alt="Hiliq" width="auto" height="150px"></div>
            <img src="../../public/images/partners/good_vape.jpg"
                 alt="Good Vape" width="auto" height="200px">
            <img src="../../public/images/partners/Cloud_chasing.jpg"
                 alt="Cloud Chasing" width="auto" height="200px">
            <img src="../../public/images/partners/Vapers_lab.jpg"
                 alt="Vapers lab" width="auto" height="200px">
            <img src="../../public/images/partners/vs_in-clouds.png"
                 alt="VS in Clouds" width="auto" height="200px">
            <img src="../../public/images/partners/cloud_distro.jpg"
                 alt="VS in Clouds" width="auto" height="200px">
          </div>
        </header>

      </div>
    </section>

    <!-- Footer -->
    <footer id="footer" class="wrapper">
      <div class="inner">
        <section>
          <div class="box">
            <div class="content">
              <h2 class="align-center">Стать партнером</h2>
              <hr/>
              <form action="mail.php" method="post">
                <div class="field half first">
                  <label for="name">Имя</label>
                  <input name="name" id="name" type="text" placeholder="Имя">
                </div>
                <div class="field half">
                  <label for="email">Email</label>
                  <input name="email" id="email" type="text" placeholder="Email">
                </div>
                <div class="field">
                  <label for="message">Сообщение</label>
                  <textarea name="message" id="message" rows="6" placeholder="Сообщение"></textarea>
                </div>
                <ul class="actions align-center">
                  <li><input value="Отправить сообщение" class="button special" type="submit"></li>
                </ul>
              </form>
            </div>
          </div>
        </section>
      </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import LiquidItem from '@/components/LiquidItem.vue';

import liquid1 from '../../public/images/liquids/liquid1.jpg';
import liquid2 from '../../public/images/liquids/liquid2.jpg';
import liquid3 from '../../public/images/liquids/liquid3.jpg';
import liquid4 from '../../public/images/liquids/liquid4.jpg';

export default {
  name: 'home',
  components: {
    LiquidItem,
  },
  data() {
    return {
      liquid1,
      liquid2,
      liquid3,
      liquid4,
    };
  },
  mounted() {
    if (window.appendVideo) window.appendVideo();
  },
};
</script>
<style>
  @import '../../public/src/css/main.css';
  @import '../../public/src/css/styles.css';
</style>
