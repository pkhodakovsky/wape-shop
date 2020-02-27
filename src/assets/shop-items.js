import wildWestImage from '../../public/images/liquids/wild-west.png';
import cardsImage from '../../public/images/liquids/cards.png';
import dailySteamFruitsImage from '../../public/images/liquids/daily-steam-fruits.png';
import dailySteamTobaccoImage from '../../public/images/liquids/daily-steam-tobacco.png';
import tobaccoImage from '../../public/images/liquids/tobacco.png';
import tobaccoSmallImage from '../../public/images/liquids/tobacco-small.png';
import deadPirateImage from '../../public/images/liquids/dead-pirate.png';
import simpsonsImage from '../../public/images/liquids/simpsons.png';
import iceApowImage from '../../public/images/liquids/ice-apow.png';
import vapeDrinksImage from '../../public/images/liquids/vape-drinks.png';
import selfMixinImage2 from '../../public/images/self-mixing/base2.png';
import selfMixinImage3 from '../../public/images/self-mixing/base3.png';
import selfMixinImage4 from '../../public/images/self-mixing/base4.png';
import selfMixinImage5 from '../../public/images/self-mixing/base5.png';
import selfMixinImage6 from '../../public/images/self-mixing/base6.png';
import otherImage1 from '../../public/images/other/other1.png';
import otherImage2 from '../../public/images/other/other2.png';
import otherImage3 from '../../public/images/other/other3.png';
import otherImage4 from '../../public/images/other/other4.png';

export default {
  types: [
    {
      id: 'liquid',
      name: 'Жидкости для электронных сигарет',
      checked: true,
    },
    {
      id: 'selfMixing',
      name: 'Всё для "самозамеса"',
      checked: true,
      sub: [
        {
          id: 'nicotine',
          name: 'Никотин',
          checked: true,
        },
        {
          id: 'bases',
          name: 'Готовые базы',
          checked: true,
        },
        {
          id: 'aroma',
          name: 'Ароматизаторы',
          checked: true,
        },
      ],
    },
    {
      id: 'other',
      name: 'Аккумуляторы, расходники, обслужка',
      checked: true,
    },
  ],
  items: [
    {
      id: 'wildWest',
      type: 'liquid',
      name: 'Wild West',
      images: [wildWestImage],
      cost: 110,
      types: [
        {
          id: 'name',
          label: 'Название',
          values: [
            {
              id: 'cowboyGirl',
              value: 'Cowboy girl',
              description: 'Объем 60 мл.\nНежный <i>бисквитный пирог</i> с начинкой из спелой, сочной <i>малины</i>. Мягкий и легкий вкус десерта, дополняет свежая и сладкая ягода на выдохе. Любители попарить и расслабится оценят эту жидкость по достоинству',
            },
            {
              id: 'sherif',
              value: 'Sherif',
              description: 'Объем 60 мл.\nТост с легкой прожаренной корочкой и сладким <i>клубничным вареньем</i>. Эта жидкость заставит вас погрузиться в детство и получить незабываемое наслаждение от всеми любимого лакомства',
            },
            {
              id: 'legends',
              value: 'Legends',
              description: 'Объем 60 мл.\nЖевательная резинка со вкусом <i>медовой дыни</i> и спелой, сочной <i>клубники</i>. Легкий фруктовый микс со сладким послевкусием. Освежающая жидкость отлично подойдет на повседневное парение',
            },
            {
              id: 'bandit',
              value: 'Bandit',
              description: 'Объем 60 мл.\nНевероятно бодрящий вкус крепкого <i>мокачино</i> с тонкой <i>ореховой</i> ноткой. Основной кофейный вкус передан очень четко и насыщено, а ореховое послевкусие не оставит равнодушным ни одного парильщика',
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
      name: 'Flush Royal',
      images: [cardsImage],
      cost: 190,
      types: [
        {
          id: 'name',
          label: 'Название',
          values: [
            {
              id: 'ten',
              value: 'Ten',
              description: 'Объем 60 мл.\n',
            },
            {
              id: 'jack',
              value: 'Jack',
              description: 'Объем 60 мл.\n',
            },
            {
              id: 'queen',
              value: 'Queen',
              description: 'Объем 60 мл.\n',
            },
            {
              id: 'king',
              value: 'King',
              description: 'Объем 60 мл.\n',
            },
            {
              id: 'ace',
              value: 'Ace',
              description: 'Объем 60 мл.\n',
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
      cost: 120,
      types: [
        {
          id: 'name',
          label: 'Название',
          values: [
            {
              id: 'island',
              value: 'Island',
              description: 'Объем 120 мл.\nТабачный лист в шоколадной глазури пропитанный кокосовым молоком',
            },
            {
              id: 'ry4',
              value: 'RY4',
              description: 'Объем 120 мл.\nКрепкий, с кислиной, табачный вкус для ценителей классики',
            },
            {
              id: 'luckyStrike',
              value: 'Lucky strike',
              description: 'Объем 120 мл.\nНастоящий американский вкус табака с мягким послевкусием',
            },
            {
              id: 'kent',
              value: 'Kent',
              description: 'Объем 120 мл.\nКлассический табачный вкус популярных сигарет. Немного терпкий с кислинкой',
            },
            {
              id: 'davidoff',
              value: 'Davidoff',
              description: 'Объем 120 мл.\nНежный табачный вкус с нотками меда и шоколада',
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
      cost: 120,
      types: [
        {
          id: 'name',
          label: 'Название',
          values: [
            {
              id: 'mango',
              value: 'Mango',
              description: 'Объем 120 мл.\nСпелое манго',
            },
            {
              id: 'exotic',
              value: 'Exotic',
              description: 'Объем 120 мл.\nОсвежающий микс апельсина, манго и киви',
            },
            {
              id: 'peach',
              value: 'Peach',
              description: 'Объем 120 мл.\nСладкий сочный персик',
            },
            {
              id: 'gum',
              value: 'Gum',
              description: 'Объем 120 мл.\nФруктовая жевательная резинка',
            },
            {
              id: 'currant',
              value: 'Currant',
              description: 'Объем 120 мл.\nКислая смородина',
            },
            {
              id: 'juice',
              value: 'Juice',
              description: 'Объем 120 мл.\nМикс граната, грейпфрута, манго и тонкой ноткой лайма',
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
      cost: 90,
      types: [
        {
          id: 'name',
          label: 'Название',
          values: [
            {
              id: 'captainBlack',
              value: 'Captain Black',
              description: 'Объем 60 мл.\n',
            },
            {
              id: 'lm',
              value: 'L&M',
              description: 'Объем 60 мл.\n',
            },
            {
              id: 'camel',
              value: 'CAMEL',
              description: 'Объем 60 мл.\n',
            },
            {
              id: 'winston',
              value: 'WINSTON',
              description: 'Объем 60 мл.\n',
            },
            {
              id: 'parliament',
              value: 'PARLIAMENT',
              description: 'Объем 60 мл.\n',
            },
            {
              id: 'marlboro',
              value: 'MARLBORO',
              description: 'Объем 60 мл.\n',
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
      cost: 37,
      types: [
        {
          id: 'name',
          label: 'Название',
          values: [
            {
              id: 'camel',
              value: 'CAMEL',
              description: 'Объем 30 мл.\n',
            },
            {
              id: 'lm',
              value: 'L&M',
              description: 'Объем 30 мл.\n',
            },
            {
              id: 'winston',
              value: 'WINSTON',
              description: 'Объем 30 мл.\n',
            },
            {
              id: 'camelRed',
              value: 'CAMEL (RED)',
              description: 'Объем 30 мл.\n',
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
      cost: 160,
      types: [
        {
          id: 'name',
          label: 'Название',
          values: [
            {
              id: 'captainBlood',
              value: 'Captain blood',
              description: 'Объем 60 мл.\nЯрко выраженный вкус лесных ягод, с дополнением клюквы и красной смородины создали неповторимый микс, который разлит в этом флаконе.',
            },
            {
              id: 'greenIsland',
              value: 'Green island',
              description: 'Объем 60 мл.\nКрепкий абсент завораживает своим неповторимым вкусом, а кислый лайм дает возможность понять насколько глубоко жидкость может зацепить.',
            },
            {
              id: 'purpleSail',
              value: 'Purple sail',
              description: 'Объем 60 мл.\nВсеми любимый энергетический напиток Red Bull, с черничным привкусом, приятно бодрит своей кислинкой.',
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
      cost: 120,
      types: [
        {
          id: 'name',
          label: 'Название',
          values: [
            {
              id: 'homer',
              value: 'Homer',
              description: 'Объем 60 мл.\nС виду он брутальнй мужлан. Но, что скрывается внутри? Пока не попробовали эту жидкость, не спешите делать выводы. Кисло-сладкий вкус спелого сочного киви просто взрывает рецепторы.',
            },
            {
              id: 'marge',
              value: 'Marge',
              description: 'Объем 60 мл.\nКакая настоящая хозяйка не любит варить ягодный пунш? Мардж приготовила вам настоящий сюрприз. Микс кисленькх лесных ягод приятно расслабляют, но в то же время заряжают бодростью.',
            },
            {
              id: 'bart',
              value: 'Bart',
              description: 'Объем 60 мл.\nМолодежь не любит обыденность. Любимый напиток Барта - мохито, только классический - это банольно. Что будет, если добавить туда черной смородины и клубники? Не узнаешь, пока не попробуешь. Вперёд.',
            },
            {
              id: 'lisa',
              value: 'Lisa',
              description: 'Объем 60 мл.\nУ настоящей девушки все должно быть идально, аккуратно и красиво. Лиза очень постаралась, чтобы создать вкус, который понравится всем. Думаете, что персик и клюква не сочетаются? Вы просто не умеете их готовить.',
            },
            {
              id: 'maggie',
              value: 'Maggie',
              description: 'Объем 60 мл.\nВсе слышали, что дети живут эмоциями и порой, чтобы угодить, приходится лезть вон из кожи. Этот вкус создан для удовлетворения любых ваших капризов. Кисто-сладкое сочетание ежевики и смородины отлично дополняет взрывная волна лесных ягод.',
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
      cost: 100,
      types: [
        {
          id: 'name',
          label: 'Название',
          values: [
            {
              id: 'iceMango',
              value: 'Ice Mango',
              description: 'Объем 60 мл.\n',
            },
            {
              id: 'iceStrawberry',
              value: 'Ice Strawberry',
              description: 'Объем 60 мл.\n',
            },
            {
              id: 'iceForestFruits',
              value: 'Ice Forest Fruits',
              description: 'Объем 60 мл.\n',
            },
            {
              id: 'iceCurrant',
              value: 'Ice Currant',
              description: 'Объем 60 мл.\n',
            },
            {
              id: 'iceLime',
              value: 'Ice Lime',
              description: 'Объем 60 мл.\n',
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
      id: 'vapeDrinks',
      type: 'liquid',
      name: 'Vape drinks',
      images: [vapeDrinksImage],
      description: '',
      cost: 120,
      types: [
        {
          id: 'name',
          label: 'Название',
          values: [
            {
              id: 'cocaCola',
              value: 'Coca-Coca',
              description: 'Объем 60 мл.\nСВЯТО НАБЛИЖАЄТЬСЯ с первого вдоха! Парь легенду!',
            },
            {
              id: 'sprite',
              value: 'Spirite',
              description: 'Объем 60 мл.\nОсвежающий спрайт как ив рекламе, но без пузырьков. Имидж - ничто, жажда - всё!',
            },
            {
              id: 'fanta',
              value: 'Fantan',
              description: 'Объем 60 мл.\nТа самая из бутылки с пупырышками! Парь Fantan. Будь Бамбуча.',
            },
            {
              id: 'redBull',
              value: 'Energy Bull',
              description: 'Объем 60 мл.\nНашумевший энергетик теперь может быть и в твоём девайсе! Взбодрись с VAPE DRINK\'S Energy Bull.',
            },
            {
              id: 'drPepper',
              value: 'Dr Peppe',
              description: 'Объем 60 мл.\nЭто вкус для настоящих ценителей - легендарная газировка с вишневым привкусом, которая отдает пряностью и отзывается легкой прохладой при выдохе.',
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
      id: 'selfMixing_base100',
      type: 'selfMixing',
      subtype: 'base',
      images: [selfMixinImage2],
      name: 'База',
      description: 'Емкость: 100 мл.',
      cost: 28,
      types: [
        {
          id: 'composition',
          label: 'Состав',
          values: [
            {
              id: 'comp1',
              value: '50/50',
            },
            {
              id: 'comp2',
              value: '70/30',
            },
          ],
        },
        {
          id: 'strength',
          label: 'Крепость',
          values: [
            {
              id: 'str1',
              value: '0 mg',
              cost: 0,
            },
            {
              id: 'str2',
              value: '2 mg',
              cost: 6,
            },
            {
              id: 'str3',
              value: '4 mg',
              cost: 12,
            },
            {
              id: 'str5',
              value: '6 mg',
              cost: 18,
            },
          ],
        },
      ],
    },
    {
      id: 'selfMixing_base350',
      type: 'selfMixing',
      subtype: 'base',
      images: [selfMixinImage3],
      name: 'База',
      description: 'Емкость: 350 мл.',
      cost: 37,
      types: [
        {
          id: 'composition',
          label: 'Состав',
          values: [
            {
              id: 'comp1',
              value: '50/50',
            },
            {
              id: 'comp2',
              value: '70/30',
            },
          ],
        },
        {
          id: 'strength',
          label: 'Крепость',
          values: [
            {
              id: 'str1',
              value: '0 mg',
              cost: 10,
            },
            {
              id: 'str2',
              value: '1.5 mg',
              cost: 20,
            },
            {
              id: 'str3',
              value: '3 mg',
              cost: 30,
            },
            {
              id: 'str4',
              value: '6 mg',
              cost: 40,
            },
          ],
        },
      ],
    },
    {
      id: 'selfMixing_base500',
      type: 'selfMixing',
      subtype: 'base',
      images: [selfMixinImage3],
      name: 'База',
      description: 'Емкость: 500 мл.',
      cost: 37,
      types: [
        {
          id: 'composition',
          label: 'Состав',
          values: [
            {
              id: 'comp1',
              value: '50/50',
            },
            {
              id: 'comp2',
              value: '70/30',
            },
          ],
        },
        {
          id: 'strength',
          label: 'Крепость',
          values: [
            {
              id: 'str1',
              value: '0 mg',
              cost: 10,
            },
            {
              id: 'str2',
              value: '1.5 mg',
              cost: 20,
            },
            {
              id: 'str3',
              value: '3 mg',
              cost: 30,
            },
            {
              id: 'str4',
              value: '6 mg',
              cost: 40,
            },
          ],
        },
      ],
    },
    {
      id: 'selfMixing_nicotineHiliqConcentrate',
      type: 'selfMixing',
      subtype: 'nicotine',
      images: [selfMixinImage4],
      name: 'Никотин Hiliq. Концентрат',
      description: '',
      cost: 37,
      types: [],
    },
    {
      id: 'selfMixing_nicotineHiliq',
      type: 'selfMixing',
      subtype: 'nicotine',
      images: [selfMixinImage5],
      name: 'Никотин Hiliq',
      description: '',
      cost: 37,
      types: [],
    },
    {
      id: 'selfMixing_nicotine',
      type: 'selfMixing',
      subtype: 'nicotine',
      images: [selfMixinImage6],
      name: 'Никотин',
      description: '',
      cost: 37,
      types: [],
    },
    {
      id: 'other_accum',
      type: 'other',
      subtype: 'accum',
      images: [otherImage1],
      name: 'Аккумулятор',
      description: '',
      cost: 10,
      types: [
        {
          id: 'count',
          label: 'Количество',
          values: [
            {
              id: 'count1',
              value: '1 шт.',
              cost: 0,
            },
            {
              id: 'count2',
              value: '4 шт.',
              cost: 30,
            },
            {
              id: 'count3',
              value: '10 шт.',
              cost: 90,
            },
          ],
        },
      ],
    },
    {
      id: 'other_spiral',
      type: 'other',
      images: [otherImage2],
      name: 'Спираль',
      description: '',
      cost: 37,
      types: [],
    },
    {
      id: 'other_spiral2',
      type: 'other',
      images: [otherImage3],
      name: 'Спираль',
      description: '',
      cost: 37,
      types: [],
    },
    {
      id: 'other_other4',
      type: 'other',
      images: [otherImage4],
      name: 'Other 4',
      description: '',
      cost: 37,
      types: [],
    },
  ],
};
