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
      cost: 19,
      types: [
        {
          id: 'name',
          label: 'Название',
          values: [
            {
              id: 'cowboyGirl',
              name: 'Cowboy girl',
              description: 'Нежный <i>бисквитный пирог</i> с начинкой из спелой, сочной <i>малины</i>. Мягкий и легкий вкус десерта, дополняет свежая и сладкая ягода на выдохе. Любители попарить и расслабится оценят эту жидкость по достоинству',
            },
            {
              id: 'sherif',
              name: 'Sherif',
              description: 'Тост с легкой прожаренной корочкой и сладким <i>клубничным вареньем</i>. Эта жидкость заставит вас погрузиться в детство и получить незабываемое наслаждение от всеми любимого лакомства',
            },
            {
              id: 'legends',
              name: 'Legends',
              description: 'Жевательная резинка со вкусом <i>медовой дыни</i> и спелой, сочной <i>клубники</i>. Легкий фруктовый микс со сладким послевкусием. Освежающая жидкость отлично подойдет на повседневное парение',
            },
            {
              id: 'bandit',
              name: 'Bandit',
              description: 'Невероятно бодрящий вкус крепкого <i>мокачино</i> с тонкой <i>ореховой</i> ноткой. Основной кофейный вкус передан очень четко и насыщено, а ореховое послевкусие не оставит равнодушным ни одного парильщика',
            },
          ],
        },
        {
          id: 'strength',
          label: 'Крепость',
          values: [
            { id: 'str1', value: '0' },
            { id: 'str2', value: '1.5' },
            { id: 'str3', value: '3' },
          ],
        },
      ],
    },
    {
      id: 'cards',
      type: 'liquid',
      subtype: 'cards',
      name: 'Cards',
      images: [cardsImage],
      cost: 24,
      types: [
        {
          id: 'name',
          label: 'Название',
          values: [
            {
              id: 'ten',
              name: 'Ten',
              description: '',
            },
            {
              id: 'jack',
              name: 'Jack',
              description: '',
            },
            {
              id: 'queen',
              name: 'Queen',
              description: '',
            },
            {
              id: 'king',
              name: 'King',
              description: '',
            },
            {
              id: 'ace',
              name: 'Ace',
              description: '',
            },
          ],
        },
        {
          id: 'strength',
          label: 'Крепость',
          values: [
            { id: 'str1', value: '0' },
            { id: 'str2', value: '1.5' },
            { id: 'str3', value: '3' },
          ],
        },
      ],
    },
    {
      id: 'dailySteamTobacco',
      type: 'liquid',
      name: '<h2>DAILY STEAM</h2><p>(Табачка)</p>',
      images: [dailySteamTobaccoImage],
      cost: 27,
      types: [
        {
          id: 'name',
          label: 'Название',
          values: [
            {
              id: 'island',
              name: 'Island',
              description: 'Табачный лист в шоколадной глазури пропитанный кокосовым молоком',
            },
            {
              id: 'ry4',
              name: 'RY4',
              description: 'Крепкий, с кислиной, табачный вкус для ценителей классики',
            },
            {
              id: 'luckyStrike',
              name: 'Lucky strike',
              description: 'Настоящий американский вкус табака с мягким послевкусием',
            },
            {
              id: 'kent',
              name: 'Kent',
              description: 'Классический табачный вкус популярных сигарет. Немного терпкий с кислинкой',
            },
            {
              id: 'davidoff',
              name: 'Davidoff',
              description: 'Нежный табачный вкус с нотками меда и шоколада',
            },
          ],
        },
        {
          id: 'strength',
          label: 'Крепость',
          values: [
            { id: 'str1', value: '1.5' },
            { id: 'str2', value: '3' },
          ],
        },
      ],
    },
    {
      id: 'dailySteamFruits',
      type: 'liquid',
      name: '<h2>DAILY STEAM</h2><p>(Фрукты)</p>',
      images: [dailySteamFruitsImage],
      cost: 32,
      types: [
        {
          id: 'name',
          label: 'Название',
          values: [
            {
              id: 'mango',
              name: 'Mango',
              description: 'Спелое манго',
            },
            {
              id: 'exotic',
              name: 'Exotic',
              description: 'Освежающий микс апельсина, манго и киви',
            },
            {
              id: 'peach',
              name: 'Peach',
              description: 'Сладкий сочный персик',
            },
            {
              id: 'gum',
              name: 'Gum',
              description: 'Фруктовая жевательная резинка',
            },
            {
              id: 'currant',
              name: 'Currant',
              description: 'Кислая смородина',
            },
            {
              id: 'juice',
              name: 'Juice',
              description: 'Микс граната, грейпфрута, манго и тонкой ноткой лайма',
            },
          ],
        },
        {
          id: 'strength',
          label: 'Крепость',
          values: [
            { id: 'str1', value: '0' },
            { id: 'str2', value: '1.5' },
            { id: 'str3', value: '3' },
          ],
        },
      ],
    },
    {
      id: 'tobacco',
      type: 'liquid',
      name: 'TOBACCO',
      images: [tobaccoImage],
      cost: 37,
      types: [
        {
          id: 'name',
          label: 'Название',
          values: [
            {
              id: 'captainBlack',
              name: 'Captain Black',
              description: '',
            },
            {
              id: 'lm',
              name: 'L&M',
              description: '',
            },
            {
              id: 'camel',
              name: 'CAMEL',
              description: '',
            },
            {
              id: 'winston',
              name: 'WINSTON',
              description: '',
            },
            {
              id: 'parliament',
              name: 'PARLIAMENT',
              description: '',
            },
            {
              id: 'marlboro',
              name: 'MARLBORO',
              description: '',
            },
          ],
        },
        {
          id: 'strength',
          label: 'Крепость',
          values: [
            { id: 'str1', value: '3' },
            { id: 'str2', value: '6' },
          ],
        },
      ],
    },
    {
      id: 'tobaccoSmall',
      type: 'liquid',
      name: '<h2>TOBACCO</h2><p>(small)</p>',
      images: [tobaccoSmallImage],
      cost: 37,
      types: [
        {
          id: 'name',
          label: 'Название',
          values: [
            {
              id: 'camel',
              name: 'CAMEL',
              description: '',
            },
            {
              id: 'lm',
              name: 'L&M',
              description: '',
            },
            {
              id: 'winston',
              name: 'WINSTON',
              description: '',
            },
            {
              id: 'camelRed',
              name: 'CAMEL (RED)',
              description: '',
            },
          ],
        },
        {
          id: 'strength',
          label: 'Крепость',
          values: [
            { id: 'str1', value: '25' },
            { id: 'str2', value: '50' },
          ],
        },
      ],
    },
    {
      id: 'deadPirate',
      type: 'liquid',
      name: 'Dead Pirates',
      images: [deadPirateImage],
      cost: 37,
      types: [
        {
          id: 'name',
          label: 'Название',
          values: [
            {
              id: 'captainBlood',
              name: 'Captain blood',
              description: 'Ярко выраженный вкус лесных ягод, с дополнением клюквы и красной смородины создали неповторимый микс, который разлит в этом флаконе.',
            },
            {
              id: 'greenIsland',
              name: 'Green island',
              description: 'Крепкий абсент завораживает своим неповторимым вкусом, а кислый лайм дает возможность понять насколько глубоко жидкость может зацепить.',
            },
            {
              id: 'purpleSail',
              name: 'Purple sail',
              description: 'Всеми любимый энергетический напиток Red Bull, с черничным привкусом, приятно бодрит своей кислинкой.',
            },
          ],
        },
        {
          id: 'strength',
          label: 'Крепость',
          values: [
            { id: 'str1', value: '0' },
            { id: 'str2', value: '1.5' },
            { id: 'str3', value: '3' },
          ],
        },
      ],
    },
    {
      id: 'simpsons',
      type: 'liquid',
      name: 'The Simpsons',
      images: [simpsonsImage],
      cost: 37,
      types: [
        {
          id: 'name',
          label: 'Название',
          values: [
            {
              id: 'homer',
              name: 'Homer',
              description: 'С виду он брутальнй мужлан. Но, что скрывается внутри? Пока не попробовали эту жидкость, не спешите делать выводы. Кисло-сладкий вкус спелого сочного киви просто взрывает рецепторы.',
            },
            {
              id: 'marge',
              name: 'Marge',
              description: 'Какая настоящая хозяйка не любит варить ягодный пунш? Мардж приготовила вам настоящий сюрприз. Микс кисленькх лесных ягод приятно расслабляют, но в то же время заряжают бодростью.',
            },
            {
              id: 'bart',
              name: 'Bart',
              description: 'Молодежь не любит обыденность. Любимый напиток Барта - мохито, только классический - это банольно. Что будет, если добавить туда черной смородины и клубники? Не узнаешь, пока не попробуешь. Вперёд.',
            },
            {
              id: 'lisa',
              name: 'Lisa',
              description: 'У настоящей девушки все должно быть идально, аккуратно и красиво. Лиза очень постаралась, чтобы создать вкус, который понравится всем. Думаете, что персик и клюква не сочетаются? Вы просто не умеете их готовить.',
            },
            {
              id: 'maggie',
              name: 'Maggie',
              description: 'Все слышали, что дети живут эмоциями и порой, чтобы угодить, приходится лезть вон из кожи. Этот вкус создан для удовлетворения любых ваших капризов. Кисто-сладкое сочетание ежевики и смородины отлично дополняет взрывная волна лесных ягод.',
            },
          ],
        },
        {
          id: 'strength',
          label: 'Крепость',
          values: [
            { id: 'str1', value: '0' },
            { id: 'str2', value: '1.5' },
            { id: 'str3', value: '3' },
          ],
        },
      ],
    },
    {
      id: 'iceApow',
      type: 'liquid',
      name: 'ICE APOW',
      images: [iceApowImage],
      cost: 37,
      types: [
        {
          id: 'name',
          label: 'Название',
          values: [
            {
              id: 'restFruits',
              name: 'REST FRUITS',
              description: '',
            },
            {
              id: 'iceLime',
              name: 'ICE LIME',
              description: '',
            },
            {
              id: 'iceCurrant',
              name: 'ICE CURRANT',
              description: '',
            },
            {
              id: 'trawb',
              name: 'TRAWB',
              description: '',
            },
          ],
        },
        {
          id: 'strength',
          label: 'Крепость',
          values: [
            { id: 'str1', value: '0' },
            { id: 'str2', value: '1.5' },
            { id: 'str3', value: '3' },
          ],
        },
      ],
    },
    {
      id: 'vapeDrinks',
      type: 'liquid',
      name: 'VAPE DRINKS',
      images: [vapeDrinksImage],
      description: '',
      cost: 37,
      types: [
        {
          id: 'name',
          label: 'Название',
          values: [
            {
              id: 'cocaCola',
              name: 'COCA COLA',
              description: '',
            },
            {
              id: 'sprite',
              name: 'SPRITE',
              description: '',
            },
            {
              id: 'fanta',
              name: 'FANTA',
              description: '',
            },
            {
              id: 'redBull',
              name: 'RED BULL',
              description: '',
            },
            {
              id: 'drPepper',
              name: 'Dr PEPPER',
              description: '',
            },
          ],
        },
        {
          id: 'strength',
          label: 'Крепость',
          values: [
            { id: 'str1', value: '0' },
            { id: 'str2', value: '1.5' },
            { id: 'str3', value: '3' },
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
      cost: 37,
      types: [
        {
          id: 'composition',
          label: 'Состав',
          values: [
            {
              id: 'comp1',
              label: '50/50',
            },
            {
              id: 'comp2',
              label: '70/30',
            },
          ],
        },
        {
          id: 'strength',
          label: 'Крепость',
          values: [
            {
              id: 'str1',
              value: '0',
              cost: 10,
            },
            {
              id: 'str2',
              value: '2',
              cost: 20,
            },
            {
              id: 'str3',
              value: '4',
              cost: 30,
            },
            {
              id: 'str5',
              value: '6',
              cost: 40,
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
              label: '50/50',
            },
            {
              id: 'comp2',
              label: '70/30',
            },
          ],
        },
        {
          id: 'strength',
          label: 'Крепость',
          values: [
            {
              id: 'str1',
              value: '0',
              cost: 10,
            },
            {
              id: 'str2',
              value: '1.5',
              cost: 20,
            },
            {
              id: 'str3',
              value: '3',
              cost: 30,
            },
            {
              id: 'str4',
              value: '6',
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
              label: '50/50',
            },
            {
              id: 'comp2',
              label: '70/30',
            },
          ],
        },
        {
          id: 'strength',
          label: 'Крепость',
          values: [
            {
              id: 'str1',
              value: '0',
              cost: 10,
            },
            {
              id: 'str2',
              value: '1.5',
              cost: 20,
            },
            {
              id: 'str3',
              value: '3',
              cost: 30,
            },
            {
              id: 'str4',
              value: '6',
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
              value: '1',
              cost: 0,
            },
            {
              id: 'count2',
              value: '4',
              cost: 30,
            },
            {
              id: 'count3',
              value: '10',
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
