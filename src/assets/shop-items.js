import wildWestImage from '../../public/images/liquids/wild-west.png';
import cardsImage from '../../public/images/liquids/cards.png';
import dailySteamFruitsImage from '../../public/images/liquids/daily-steam-fruits.png';
import dailySteamFruitsSmallImage from '../../public/images/liquids/daily-steam-fruilts-salt.png';
import dailySteamTobaccoImage from '../../public/images/liquids/daily-steam-tobacco.png';
import dailySteamTobaccoSaltImage from '../../public/images/liquids/daily-steam-tobacco-salt.png';
import tobaccoImage from '../../public/images/liquids/tobacco.png';
import tobaccoSmallImage from '../../public/images/liquids/tobacco-small.png';
import deadPirateImage from '../../public/images/liquids/dead-pirate.png';
import simpsonsImage from '../../public/images/liquids/simpsons.png';
import iceApowImage from '../../public/images/liquids/ice-apow.png';
import iceApowSmallImage from '../../public/images/liquids/ice-apow-small.png';
import vapeDrinksImage from '../../public/images/liquids/vape-drinks.png';
import vapeDrinksSmallImage from '../../public/images/liquids/vape-drinks-small.png';
import inRoyalCloudsImage from '../../public/images/liquids/in-royal-clouds.png';

export default {
  types: [
    {
      id: 'liquid',
      name: 'Ароматические добавки',
      checked: true,
    },
  ],
  items: [
    {
      id: 'wildWest',
      type: 'liquid',
      name: 'Wild West',
      images: [wildWestImage],
      volume: 'Объем 60 мл.',
      cost: 100,
      types: [
        {
          id: 'name',
          label: 'Название',
          values: [
            {
              id: 'cowboyGirl',
              value: 'Cowboy girl',
              description: 'Нежный <i>бисквитный пирог</i> с начинкой из спелой, сочной <i>малины</i>. Мягкий и легкий вкус десерта, дополняет свежая и сладкая ягода на выдохе. Любители попарить и расслабится оценят эту жидкость по достоинству',
            },
            {
              id: 'sherif',
              value: 'Sherif',
              description: 'Тост с легкой прожаренной корочкой и сладким <i>клубничным вареньем</i>. Эта жидкость заставит вас погрузиться в детство и получить незабываемое наслаждение от всеми любимого лакомства',
            },
            {
              id: 'legends',
              value: 'Legends',
              description: 'Жевательная резинка со вкусом <i>медовой дыни</i> и спелой, сочной <i>клубники</i>. Легкий фруктовый микс со сладким послевкусием. Освежающая жидкость отлично подойдет на повседневное парение',
            },
            {
              id: 'bandit',
              value: 'Bandit',
              description: 'Невероятно бодрящий вкус крепкого <i>мокачино</i> с тонкой <i>ореховой</i> ноткой. Основной кофейный вкус передан очень четко и насыщено, а ореховое послевкусие не оставит равнодушным ни одного парильщика',
            },
          ],
        },
        {
          id: 'strength',
          label: 'Крепость',
          values: [
            { id: 'str1', value: '0 mg' },
            { id: 'str2', value: '1.5 mg' },
            { id: 'str3', value: '3 mg' },
          ],
        },
      ],
    },
    {
      id: 'flushRoyal',
      type: 'liquid',
      subtype: 'flushRoyal',
      name: 'Royal Flush',
      images: [cardsImage],
      volume: 'Объем 60 мл.',
      cost: 190,
      types: [
        {
          id: 'name',
          label: 'Название',
          values: [
            {
              id: 'ten',
              value: 'Ten',
              description: 'Кисло-сладкий компот, который достали из холодильника. Свежую ежевику на вдохе заменяет персиковая сладость с легким холодком.',
            },
            {
              id: 'jack',
              value: 'Jack',
              description: 'Легендарная фруктовая жвачка всех времен. Клубника и киви - лучшая начинка для жевательной резинки.',
            },
            {
              id: 'queen',
              value: 'Queen',
              description: 'Для любителей нежных, десертных вкусов. Жидкость не сравнима ни с чем. Молочное печенье с заварным ванильным кремом и взбитыми сливками.',
            },
            {
              id: 'king',
              value: 'King',
              description: 'Вкуснейшые молочные вафли в карамели. Twix просто отдыхает. Словами не обьяснить. Заказывай и наслаждайся!',
            },
            {
              id: 'ace',
              value: 'Ace',
              description: 'В райском уголке, когда становится жарко, подают экзотичесские напитки со льдом... Так вот, рецепт у нас в флаконе.',
            },
          ],
        },
        {
          id: 'strength',
          label: 'Крепость',
          values: [
            { id: 'str1', value: '0 mg' },
            { id: 'str2', value: '1.5 mg' },
            { id: 'str3', value: '3 mg' },
          ],
        },
      ],
    },
    {
      id: 'dailySteamTobacco',
      type: 'liquid',
      name: 'DAILY STEAM (Табачка)',
      images: [dailySteamTobaccoImage],
      volume: 'Объем 120 мл.',
      cost: 130,
      types: [
        {
          id: 'name',
          label: 'Название',
          values: [
            {
              id: 'island',
              value: 'Island',
              description: 'Табачный лист в шоколадной глазури пропитанный кокосовым молоком',
            },
            {
              id: 'ry4',
              value: 'RY4',
              description: 'Крепкий, с кислиной, табачный вкус для ценителей классики',
            },
            {
              id: 'luckyStrike',
              value: 'Lucky strike',
              description: 'Настоящий американский вкус табака с мягким послевкусием',
            },
            {
              id: 'kent',
              value: 'Kent',
              description: 'Классический табачный вкус популярных сигарет. Немного терпкий с кислинкой',
            },
            {
              id: 'davidoff',
              value: 'Davidoff',
              description: 'Нежный табачный вкус с нотками меда и шоколада',
            },
          ],
        },
        {
          id: 'strength',
          label: 'Крепость',
          values: [
            { id: 'str1', value: '1.5 mg' },
            { id: 'str2', value: '3 mg' },
          ],
        },
      ],
    },
    {
      id: 'dailySteamTobaccoSmall',
      type: 'liquid',
      name: 'DAILY STEAM (Табачка Salt)',
      images: [dailySteamTobaccoSaltImage],
      volume: 'Объем 30 мл.',
      cost: 120,
      types: [
        {
          id: 'name',
          label: 'Название',
          values: [
            {
              id: 'island',
              value: 'Island',
              description: 'Табачный лист в шоколадной глазури пропитанный кокосовым молоком',
            },
            {
              id: 'ry4',
              value: 'RY4',
              description: 'Крепкий, с кислиной, табачный вкус для ценителей классики',
            },
            {
              id: 'luckyStrike',
              value: 'Lucky strike',
              description: 'Настоящий американский вкус табака с мягким послевкусием',
            },
            {
              id: 'kent',
              value: 'Kent',
              description: 'Классический табачный вкус популярных сигарет. Немного терпкий с кислинкой',
            },
            {
              id: 'davidoff',
              value: 'Davidoff',
              description: 'Нежный табачный вкус с нотками меда и шоколада',
            },
          ],
        },
        {
          id: 'strength',
          label: 'Крепость',
          values: [
            { id: 'str1', value: '1.5 mg' },
            { id: 'str2', value: '3 mg' },
          ],
        },
      ],
    },
    {
      id: 'dailySteamFruits',
      type: 'liquid',
      name: 'DAILY STEAM (Фрукты)',
      images: [dailySteamFruitsImage],
      volume: 'Объем 120 мл.',
      cost: 130,
      types: [
        {
          id: 'name',
          label: 'Название',
          values: [
            {
              id: 'mango',
              value: 'Mango',
              description: 'Спелое манго',
            },
            {
              id: 'exotic',
              value: 'Exotic',
              description: 'Освежающий микс апельсина, манго и киви',
            },
            {
              id: 'peach',
              value: 'Peach',
              description: 'Сладкий сочный персик',
            },
            {
              id: 'gum',
              value: 'Gum',
              description: 'Фруктовая жевательная резинка',
            },
            {
              id: 'currant',
              value: 'Currant',
              description: 'Кислая смородина',
            },
            {
              id: 'juice',
              value: 'Juice',
              description: 'Микс граната, грейпфрута, манго и тонкой ноткой лайма',
            },
          ],
        },
        {
          id: 'strength',
          label: 'Крепость',
          values: [
            { id: 'str1', value: '0 mg' },
            { id: 'str2', value: '1.5 mg' },
            { id: 'str3', value: '3 mg' },
          ],
        },
      ],
    },
    {
      id: 'dailySteamFruitsSmall',
      type: 'liquid',
      name: 'DAILY STEAM (Фрукты Salt)',
      images: [dailySteamFruitsSmallImage],
      volume: 'Объем 30 мл.',
      cost: 120,
      types: [
        {
          id: 'name',
          label: 'Название',
          values: [
            {
              id: 'mango',
              value: 'Mango',
              description: 'Спелое манго',
            },
            {
              id: 'exotic',
              value: 'Exotic',
              description: 'Освежающий микс апельсина, манго и киви',
            },
            {
              id: 'peach',
              value: 'Peach',
              description: 'Сладкий сочный персик',
            },
            {
              id: 'gum',
              value: 'Gum',
              description: 'Фруктовая жевательная резинка',
            },
            {
              id: 'currant',
              value: 'Currant',
              description: 'Кислая смородина',
            },
            {
              id: 'juice',
              value: 'Juice',
              description: 'Микс граната, грейпфрута, манго и тонкой ноткой лайма',
            },
          ],
        },
        {
          id: 'strength',
          label: 'Крепость',
          values: [
            { id: 'str1', value: '0 mg' },
            { id: 'str2', value: '1.5 mg' },
            { id: 'str3', value: '3 mg' },
          ],
        },
      ],
    },
    {
      id: 'sigaretteSeries',
      type: 'liquid',
      name: 'Sigarette series',
      images: [tobaccoImage],
      volume: 'Объем 60 мл.',
      cost: 100,
      types: [
        {
          id: 'name',
          label: 'Название',
          values: [
            {
              id: 'captainBlack',
              value: 'Captain Black',
              description: '',
            },
            {
              id: 'lm',
              value: 'L&M',
              description: '',
            },
            {
              id: 'camel',
              value: 'Camel',
              description: '',
            },
            {
              id: 'winston',
              value: 'Winston',
              description: '',
            },
            {
              id: 'parliament',
              value: 'Parliament',
              description: '',
            },
            {
              id: 'marlboro',
              value: 'Marlboro',
              description: '',
            },
          ],
        },
        {
          id: 'strength',
          label: 'Крепость',
          values: [
            { id: 'str1', value: '3 mg' },
            { id: 'str2', value: '6 mg' },
          ],
        },
      ],
    },
    {
      id: 'sigaretteSeriesSalt',
      type: 'liquid',
      name: 'Sigarette series SALT',
      images: [tobaccoSmallImage],
      volume: 'Объем 30 мл.',
      cost: 120,
      types: [
        {
          id: 'name',
          label: 'Название',
          values: [
            {
              id: 'captainBlack',
              value: 'Captain Black',
              description: '',
            },
            {
              id: 'lm',
              value: 'L&M',
              description: '',
            },
            {
              id: 'camel',
              value: 'Camel',
              description: '',
            },
            {
              id: 'winston',
              value: 'Winston',
              description: '',
            },
            {
              id: 'parliament',
              value: 'Parliament',
              description: '',
            },
            {
              id: 'marlboro',
              value: 'Marlboro',
              description: '',
            },
          ],
        },
        {
          id: 'strength',
          label: 'Крепость',
          values: [
            { id: 'str1', value: '25 mg' },
            { id: 'str2', value: '50 mg' },
          ],
        },
      ],
    },
    {
      id: 'deadPirate',
      type: 'liquid',
      name: 'Dead Pirates',
      images: [deadPirateImage],
      volume: 'Объем 60 мл.',
      cost: 100,
      types: [
        {
          id: 'name',
          label: 'Название',
          values: [
            {
              id: 'captainBlood',
              value: 'Captain blood',
              description: 'Ярко выраженный вкус лесных ягод, с дополнением клюквы и красной смородины создали неповторимый микс, который разлит в этом флаконе.',
            },
            {
              id: 'greenIsland',
              value: 'Green island',
              description: 'Крепкий абсент завораживает своим неповторимым вкусом, а кислый лайм дает возможность понять насколько глубоко жидкость может зацепить.',
            },
            {
              id: 'purpleSail',
              value: 'Purple sail',
              description: 'Всеми любимый энергетический напиток Red Bull, с черничным привкусом, приятно бодрит своей кислинкой.',
            },
          ],
        },
        {
          id: 'strength',
          label: 'Крепость',
          values: [
            { id: 'str1', value: '0 mg' },
            { id: 'str2', value: '1.5 mg' },
            { id: 'str3', value: '3 mg' },
          ],
        },
      ],
    },
    {
      id: 'simpsons',
      type: 'liquid',
      name: 'The Simpsons',
      images: [simpsonsImage],
      volume: 'Объем 60 мл.',
      cost: 100,
      types: [
        {
          id: 'name',
          label: 'Название',
          values: [
            {
              id: 'homer',
              value: 'Homer',
              description: 'С виду он брутальнй мужлан. Но, что скрывается внутри? Пока не попробовали эту жидкость, не спешите делать выводы. Кисло-сладкий вкус спелого сочного киви просто взрывает рецепторы.',
            },
            {
              id: 'marge',
              value: 'Marge',
              description: 'Какая настоящая хозяйка не любит варить ягодный пунш? Мардж приготовила вам настоящий сюрприз. Микс кисленькх лесных ягод приятно расслабляют, но в то же время заряжают бодростью.',
            },
            {
              id: 'bart',
              value: 'Bart',
              description: 'Молодежь не любит обыденность. Любимый напиток Барта - мохито, только классический - это банольно. Что будет, если добавить туда черной смородины и клубники? Не узнаешь, пока не попробуешь. Вперёд.',
            },
            {
              id: 'lisa',
              value: 'Lisa',
              description: 'У настоящей девушки все должно быть идально, аккуратно и красиво. Лиза очень постаралась, чтобы создать вкус, который понравится всем. Думаете, что персик и клюква не сочетаются? Вы просто не умеете их готовить.',
            },
            {
              id: 'maggie',
              value: 'Maggie',
              description: 'Все слышали, что дети живут эмоциями и порой, чтобы угодить, приходится лезть вон из кожи. Этот вкус создан для удовлетворения любых ваших капризов. Кисто-сладкое сочетание ежевики и смородины отлично дополняет взрывная волна лесных ягод.',
            },
          ],
        },
        {
          id: 'strength',
          label: 'Крепость',
          values: [
            { id: 'str1', value: '0 mg' },
            { id: 'str2', value: '1.5 mg' },
            { id: 'str3', value: '3 mg' },
          ],
        },
      ],
    },
    {
      id: 'iceVapour',
      type: 'liquid',
      name: 'Ice vapour',
      images: [iceApowImage],
      volume: 'Объем 60 мл.',
      cost: 100,
      types: [
        {
          id: 'name',
          label: 'Название',
          values: [
            {
              id: 'iceMango',
              value: 'Ice Mango',
              description: '',
            },
            {
              id: 'iceStrawberry',
              value: 'Ice Strawberry',
              description: '',
            },
            {
              id: 'iceForestFruits',
              value: 'Ice Forest Fruits',
              description: '',
            },
            {
              id: 'iceCurrant',
              value: 'Ice Currant',
              description: '',
            },
            {
              id: 'iceLime',
              value: 'Ice Lime',
              description: '',
            },
          ],
        },
        {
          id: 'strength',
          label: 'Крепость',
          values: [
            { id: 'str1', value: '0 mg' },
            { id: 'str2', value: '1.5 mg' },
            { id: 'str3', value: '3 mg' },
          ],
        },
      ],
    },
    {
      id: 'iceVapourSmall',
      type: 'liquid',
      name: 'Ice vapour (salt)',
      images: [iceApowSmallImage],
      volume: 'Объем 30 мл.',
      cost: 120,
      types: [
        {
          id: 'name',
          label: 'Название',
          values: [
            {
              id: 'iceLime',
              value: 'Ice Lime',
              description: 'Холодный лайм',
            },
            {
              id: 'iceForestFruits',
              value: 'Ice Forest Fruits',
              description: 'Холодные лесные фрукты',
            },
            {
              id: 'iceStrawberry',
              value: 'Ice Strawberry',
              description: 'Холодная клубника',
            },
            {
              id: 'iceMango',
              value: 'Ice Mango',
              description: 'Ледяное манго',
            },
            {
              id: 'iceCurrant',
              value: 'Ice Currant',
              description: 'Ледяная смородина',
            },
            {
              id: 'icePineapple',
              value: 'Ice Pineapple',
              description: 'Освежающий ананас',
            },
            {
              id: 'iceCranberry',
              value: 'Ice Cranberry',
              description: 'Освежающий клюква',
            },
            {
              id: 'iceWatermelon',
              value: 'Ice Watermelon',
              description: 'Освежающий арбуз',
            },
            {
              id: 'iceKiwi',
              value: 'Ice Kiwi',
              description: 'Освежающий киви',
            },
            {
              id: 'iceOrange',
              value: 'Ice Orange',
              description: 'Освежающий апельсин',
            },
            {
              id: 'icePear',
              value: 'Ice Pear',
              description: 'Освежающая груша',
            },
            {
              id: 'iceCherry',
              value: 'Ice Cherry',
              description: 'Освежающая вишня',
            },
          ],
        },
        {
          id: 'strength',
          label: 'Крепость',
          values: [
            { id: 'str1', value: '25 mg' },
            { id: 'str2', value: '50 mg' },
          ],
        },
      ],
    },
    {
      id: 'vapeDrinks',
      type: 'liquid',
      name: 'Drinks',
      images: [vapeDrinksImage],
      description: '',
      volume: 'Объем 60 мл.',
      cost: 120,
      types: [
        {
          id: 'name',
          label: 'Название',
          values: [
            {
              id: 'cocaCola',
              value: 'Coca-Coca',
              description: 'СВЯТО НАБЛИЖАЄТЬСЯ с первого вдоха! Парь легенду!',
            },
            {
              id: 'sprite',
              value: 'Spirite',
              description: 'Освежающий спрайт как ив рекламе, но без пузырьков. Имидж - ничто, жажда - всё!',
            },
            {
              id: 'fanta',
              value: 'Fantan',
              description: 'Та самая из бутылки с пупырышками! Парь Fantan. Будь Бамбуча.',
            },
            {
              id: 'redBull',
              value: 'Energy Bull',
              description: 'Нашумевший энергетик теперь может быть и в твоём девайсе! Взбодрись с DRINK\'S Energy Bull.',
            },
            {
              id: 'drPepper',
              value: 'Dr Peppe',
              description: 'Это вкус для настоящих ценителей - легендарная газировка с вишневым привкусом, которая отдает пряностью и отзывается легкой прохладой при выдохе.',
            },
          ],
        },
        {
          id: 'strength',
          label: 'Крепость',
          values: [
            { id: 'str1', value: '0 mg' },
            { id: 'str2', value: '1.5 mg' },
            { id: 'str3', value: '3 mg' },
          ],
        },
      ],
    },
    {
      id: 'vapeDrinksSmall',
      type: 'liquid',
      name: 'Drinks (Salt)',
      images: [vapeDrinksSmallImage],
      description: '',
      volume: 'Объем 30 мл.',
      cost: 120,
      types: [
        {
          id: 'name',
          label: 'Название',
          values: [
            {
              id: 'cocaCola',
              value: 'Coca-Coca',
              description: 'СВЯТО НАБЛИЖАЄТЬСЯ с первого вдоха! Парь легенду!',
            },
            {
              id: 'sprite',
              value: 'Spirite',
              description: 'Освежающий спрайт как ив рекламе, но без пузырьков. Имидж - ничто, жажда - всё!',
            },
            {
              id: 'fanta',
              value: 'Fantan',
              description: 'Та самая из бутылки с пупырышками! Парь Fantan. Будь Бамбуча.',
            },
            {
              id: 'redBull',
              value: 'Energy Bull',
              description: 'Нашумевший энергетик теперь может быть и в твоём девайсе! Взбодрись с DRINK\'S Energy Bull.',
            },
            {
              id: 'drPepper',
              value: 'Dr Peppe',
              description: 'Это вкус для настоящих ценителей - легендарная газировка с вишневым привкусом, которая отдает пряностью и отзывается легкой прохладой при выдохе.',
            },
          ],
        },
        {
          id: 'strength',
          label: 'Крепость',
          values: [
            { id: 'str1', value: '25 mg' },
            { id: 'str2', value: '50 mg' },
          ],
        },
      ],
    },
    {
      id: 'inRoyalClouds',
      type: 'liquid',
      name: 'In Royal Clouds',
      images: [inRoyalCloudsImage],
      description: '',
      volume: 'Объем 30 мл.',
      cost: 120,
      types: [
        {
          id: 'name',
          label: 'Название',
          values: [
            {
              id: 'cranberryJuice',
              value: 'Cranberry Juice',
              description: 'Клюквенный сок',
            },
            {
              id: 'GreenApple',
              value: 'Green Apple',
              description: 'Зелёное яблоко',
            },
            {
              id: 'honeyMelon',
              value: 'Honey Melon',
              description: 'Медовая дыня',
            },
            {
              id: 'redGrapeJuice',
              value: 'Red Grape Juice',
              description: 'Сок из красного винограда',
            },
            {
              id: 'watermelonRipe',
              value: 'Watermelon Ripe',
              description: 'Спелый арбуз',
            },
            {
              id: 'cherriesJuice',
              value: 'Cherries Juice',
              description: 'Вишневый сок',
            },
          ],
        },
        {
          id: 'strength',
          label: 'Крепость',
          values: [
            { id: 'str1', value: '25 mg' },
            { id: 'str2', value: '50 mg' },
          ],
        },
      ],
    },
  ],
};
