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
import selfMixinImage1 from '../../public/images/self-mixing/base1.png';
import selfMixinImage2 from '../../public/images/self-mixing/base2.png';
import selfMixinImage3 from '../../public/images/self-mixing/base3.png';
import selfMixinImage4 from '../../public/images/self-mixing/base4.png';
import selfMixinImage5 from '../../public/images/self-mixing/base5.png';
import selfMixinImage6 from '../../public/images/self-mixing/base6.png';
import selfMixinImage7 from '../../public/images/self-mixing/base7.png';
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
      id: 'wildWest_cowboyGirl',
      type: 'liquid',
      subtype: 'wildWest',
      subtypeName: 'WILD WEST',
      images: [wildWestImage],
      name: 'Cowboy girl',
      description: 'Нежный <i>бисквитный пирог</i> с начинкой из спелой, сочной <i>малины</i>. Мягкий и легкий вкус десерта, дополняет свежая и сладкая ягода на выдохе. Любители попарить и расслабится оценят эту жидкость по достоинству',
      cost: 19,
      types: [
        { value: '0' },
        { value: '1.5' },
        { value: '3' },
      ],
    },
    {
      id: 'wildWest_sherif',
      type: 'liquid',
      subtype: 'wildWest',
      subtypeName: 'WILD WEST',
      images: [wildWestImage],
      name: 'Sherif',
      description: 'Тост с легкой прожаренной корочкой и сладким <i>клубничным вареньем</i>. Эта жидкость заставит вас погрузиться в детство и получить незабываемое наслаждение от всеми любимого лакомства',
      cost: 20,
      types: [
        { value: '0' },
        { value: '1.5' },
        { value: '3' },
      ],
    },
    {
      id: 'wildWest_legends',
      type: 'liquid',
      subtype: 'wildWest',
      subtypeName: 'WILD WEST',
      images: [wildWestImage],
      name: 'Legends',
      description: 'Жевательная резинка со вкусом <i>медовой дыни</i> и спелой, сочной <i>клубники</i>. Легкий фруктовый микс со сладким послевкусием. Освежающая жидкость отлично подойдет на повседневное парение',
      cost: 22,
      types: [
        { value: '0' },
        { value: '1.5' },
        { value: '3' },
      ],
    },
    {
      id: 'wildWest_bandit',
      type: 'liquid',
      subtype: 'wildWest',
      subtypeName: 'WILD WEST',
      images: [wildWestImage],
      name: 'Bandit',
      description: 'Невероятно бодрящий вкус крепкого <i>мокачино</i> с тонкой <i>ореховой</i> ноткой. Основной кофейный вкус передан очень четко и насыщено, а ореховое послевкусие не оставит равнодушным ни одного парильщика',
      cost: 23,
      types: [
        { value: '0' },
        { value: '1.5' },
        { value: '3' },
      ],
    },
    {
      id: 'cards_ten',
      type: 'liquid',
      subtype: 'cards',
      subtypeName: 'CARDS',
      images: [cardsImage],
      name: 'Ten',
      description: '',
      cost: 24,
      types: [
        { value: '0' },
        { value: '1.5' },
        { value: '3' },
      ],
    },
    {
      id: 'cards_jack',
      type: 'liquid',
      subtype: 'cards',
      subtypeName: 'CARDS',
      images: [cardsImage],
      name: 'Jack',
      description: '',
      cost: 25,
      types: [
        { value: '0' },
        { value: '1.5' },
        { value: '3' },
      ],
    },
    {
      id: 'cards_queen',
      type: 'liquid',
      subtype: 'cards',
      subtypeName: 'CARDS',
      images: [cardsImage],
      name: 'Queen',
      description: '',
      cost: 25,
      types: [
        { value: '0' },
        { value: '1.5' },
        { value: '3' },
      ],
    },
    {
      id: 'cards_king',
      type: 'liquid',
      subtype: 'cards',
      subtypeName: 'CARDS',
      images: [cardsImage],
      name: 'King',
      description: '',
      cost: 26,
      types: [
        { value: '0' },
        { value: '1.5' },
        { value: '3' },
      ],
    },
    {
      id: 'cards_ace',
      type: 'liquid',
      subtype: 'cards',
      subtypeName: 'CARDS',
      images: [cardsImage],
      name: 'Ace',
      description: '',
      cost: 26,
      types: [
        { value: '0' },
        { value: '1.5' },
        { value: '3' },
      ],
    },
    {
      id: 'dailySteamTobacco_island',
      type: 'liquid',
      subtype: 'dailySteamTobacco',
      subtypeName: '<h2>DAILY STEAM</h2><p>(Табачка)</p>',
      images: [dailySteamTobaccoImage],
      name: 'Island',
      description: 'Табачный лист в шоколадной глазури пропитанный кокосовым молоком',
      cost: 27,
      types: [
        { value: '1.5' },
        { value: '3' },
      ],
    },
    {
      id: 'dailySteamTobacco_ry4',
      type: 'liquid',
      subtype: 'dailySteamTobacco',
      subtypeName: '<h2>DAILY STEAM</h2><p>(Табачка)</p>',
      images: [dailySteamTobaccoImage],
      name: 'RY4',
      description: 'Крепкий, с кислиной, табачный вкус для ценителей классики',
      cost: 28,
      types: [
        { value: '1.5' },
        { value: '3' },
      ],
    },
    {
      id: 'dailySteamTobacco_luckyStrike',
      type: 'liquid',
      subtype: 'dailySteamTobacco',
      subtypeName: '<h2>DAILY STEAM</h2><p>(Табачка)</p>',
      images: [dailySteamTobaccoImage],
      name: 'Lucky strike',
      description: 'Настоящий американский вкус табака с мягким послевкусием',
      cost: 29,
      types: [
        { value: '1.5' },
        { value: '3' },
      ],
    },
    {
      id: 'dailySteamTobacco_kent',
      type: 'liquid',
      subtype: 'dailySteamTobacco',
      subtypeName: '<h2>DAILY STEAM</h2><p>(Табачка)</p>',
      images: [dailySteamTobaccoImage],
      name: 'KENT',
      description: 'Классический табачный вкус популярных сигарет. Немного терпкий с кислинкой',
      cost: 30,
      types: [
        { value: '1.5' },
        { value: '3' },
      ],
    },
    {
      id: 'dailySteamTobacco_davidoff',
      type: 'liquid',
      subtype: 'dailySteamTobacco',
      subtypeName: '<h2>DAILY STEAM</h2><p>(Табачка)</p>',
      images: [dailySteamTobaccoImage],
      name: 'Davidoff',
      description: 'Нежный табачный вкус с нотками меда и шоколада',
      cost: 31,
      types: [
        { value: '1.5' },
        { value: '3' },
      ],
    },
    {
      id: 'dailySteamFruits_mango',
      type: 'liquid',
      subtype: 'dailySteamFruits',
      subtypeName: '<h2>DAILY STEAM</h2><p>(Фрукты)</p>',
      images: [dailySteamFruitsImage],
      name: 'Mango',
      description: 'Спелое манго',
      cost: 32,
      types: [
        { value: '0' },
        { value: '1.5' },
        { value: '3' },
      ],
    },
    {
      id: 'dailySteamFruits_exotic',
      type: 'liquid',
      subtype: 'dailySteamFruits',
      subtypeName: '<h2>DAILY STEAM</h2><p>(Фрукты)</p>',
      images: [dailySteamFruitsImage],
      name: 'Exotic',
      description: 'Освежающий микс апельсина, манго и киви',
      cost: 33,
      types: [
        { value: '0' },
        { value: '1.5' },
        { value: '3' },
      ],
    },
    {
      id: 'dailySteamFruits_peach',
      type: 'liquid',
      subtype: 'dailySteamFruits',
      subtypeName: '<h2>DAILY STEAM</h2><p>(Фрукты)</p>',
      images: [dailySteamFruitsImage],
      name: 'Peach',
      description: 'Сладкий сочный персик',
      cost: 34,
      types: [
        { value: '0' },
        { value: '1.5' },
        { value: '3' },
      ],
    },
    {
      id: 'dailySteamFruits_gum',
      type: 'liquid',
      subtype: 'dailySteamFruits',
      subtypeName: '<h2>DAILY STEAM</h2><p>(Фрукты)</p>',
      images: [dailySteamFruitsImage],
      name: 'Gum',
      description: 'Фруктовая жевательная резинка',
      cost: 35,
      types: [
        { value: '0' },
        { value: '1.5' },
        { value: '3' },
      ],
    },
    {
      id: 'dailySteamFruits_currant',
      type: 'liquid',
      subtype: 'dailySteamFruits',
      subtypeName: '<h2>DAILY STEAM</h2><p>(Фрукты)</p>',
      images: [dailySteamFruitsImage],
      name: 'Currant',
      description: 'Кислая смородина',
      cost: 36,
      types: [
        { value: '0' },
        { value: '1.5' },
        { value: '3' },
      ],
    },
    {
      id: 'dailySteamFruits_juice',
      type: 'liquid',
      subtype: 'dailySteamFruits',
      subtypeName: '<h2>DAILY STEAM</h2><p>(Фрукты)</p>',
      images: [dailySteamFruitsImage],
      name: 'Juice',
      description: 'Микс граната, грейпфрута, манго и тонкой ноткой лайма',
      cost: 37,
      types: [
        { value: '0' },
        { value: '1.5' },
        { value: '3' },
      ],
    },
    {
      id: 'tobacco_captainBlack',
      type: 'liquid',
      subtype: 'tobacco',
      subtypeName: 'TOBACCO',
      images: [tobaccoImage],
      name: 'Captain Black',
      description: '',
      cost: 37,
      types: [
        { value: '3' },
        { value: '6' },
      ],
    },
    {
      id: 'tobacco_lm',
      type: 'liquid',
      subtype: 'tobacco',
      subtypeName: 'TOBACCO',
      images: [tobaccoImage],
      name: 'L&M',
      description: '',
      cost: 37,
      types: [
        { value: '3' },
        { value: '6' },
      ],
    },
    {
      id: 'tobacco_camel',
      type: 'liquid',
      subtype: 'tobacco',
      subtypeName: 'TOBACCO',
      images: [tobaccoImage],
      name: 'CAMEL',
      description: '',
      cost: 37,
      types: [
        { value: '3' },
        { value: '6' },
      ],
    },
    {
      id: 'tobacco_winston',
      type: 'liquid',
      subtype: 'tobacco',
      subtypeName: 'TOBACCO',
      images: [tobaccoImage],
      name: 'WINSTON',
      description: '',
      cost: 37,
      types: [
        { value: '3' },
        { value: '6' },
      ],
    },
    {
      id: 'tobacco_parliament',
      type: 'liquid',
      subtype: 'tobacco',
      subtypeName: 'TOBACCO',
      images: [tobaccoImage],
      name: 'PARLIAMENT',
      description: '',
      cost: 37,
      types: [
        { value: '3' },
        { value: '6' },
      ],
    },
    {
      id: 'tobacco_marlboro',
      type: 'liquid',
      subtype: 'tobacco',
      subtypeName: 'TOBACCO',
      images: [tobaccoImage],
      name: 'MARLBORO',
      description: '',
      cost: 37,
      types: [
        { value: '3' },
        { value: '6' },
      ],
    },
    {
      id: 'tobaccoSmall_camel',
      type: 'liquid',
      subtype: 'tobaccoSmall',
      subtypeName: '<h2>TOBACCO</h2><p>(small)</p>',
      images: [tobaccoSmallImage],
      name: 'CAMEL',
      description: '',
      cost: 37,
      types: [
        { value: '25' },
        { value: '50' },
      ],
    },
    {
      id: 'tobaccoSmall_lm',
      type: 'liquid',
      subtype: 'tobaccoSmall',
      subtypeName: '<h2>TOBACCO</h2><p>(small)</p>',
      images: [tobaccoSmallImage],
      name: 'L&M',
      description: '',
      cost: 37,
      types: [
        { value: '25' },
        { value: '50' },
      ],
    },
    {
      id: 'tobaccoSmall_winston',
      type: 'liquid',
      subtype: 'tobaccoSmall',
      subtypeName: '<h2>TOBACCO</h2><p>(small)</p>',
      images: [tobaccoSmallImage],
      name: 'WINSTON',
      description: '',
      cost: 37,
      types: [
        { value: '25' },
        { value: '50' },
      ],
    },
    {
      id: 'tobaccoSmall_camelRed',
      type: 'liquid',
      subtype: 'tobaccoSmall',
      subtypeName: '<h2>TOBACCO</h2><p>(small)</p>',
      images: [tobaccoSmallImage],
      name: 'CAMEL (RED)',
      description: '',
      cost: 37,
      types: [
        { value: '25' },
        { value: '50' },
      ],
    },
    {
      id: 'deadPirate_captainBlack',
      type: 'liquid',
      subtype: 'deadPirate',
      subtypeName: 'Dead Pirates',
      images: [deadPirateImage],
      name: 'Captain blood',
      description: 'Ярко выраженный вкус лесных ягод, с дополнением клюквы и красной смородины создали неповторимый микс, который разлит в этом флаконе.',
      cost: 37,
      types: [
        { value: '0' },
        { value: '1.5' },
        { value: '3' },
      ],
    },
    {
      id: 'deadPirate_greenIsland',
      type: 'liquid',
      subtype: 'deadPirate',
      subtypeName: 'Dead Pirates',
      images: [deadPirateImage],
      name: 'Green island',
      description: 'Крепкий абсент завораживает своим неповторимым вкусом, а кислый лайм дает возможность понять насколько глубоко жидкость может зацепить.',
      cost: 37,
      types: [
        { value: '0' },
        { value: '1.5' },
        { value: '3' },
      ],
    },
    {
      id: 'deadPirate_purple',
      type: 'liquid',
      subtype: 'deadPirate',
      subtypeName: 'Dead Pirates',
      images: [deadPirateImage],
      name: 'Purple sail',
      description: 'Всеми любимый энергетический напиток Red Bull, с черничным привкусом, приятно бодрит своей кислинкой.',
      cost: 37,
      types: [
        { value: '0' },
        { value: '1.5' },
        { value: '3' },
      ],
    },
    {
      id: 'simpsons_homer',
      type: 'liquid',
      subtype: 'simpsons',
      subtypeName: 'The Simpsons',
      images: [simpsonsImage],
      name: 'Homer',
      description: 'С виду он брутальнй мужлан. Но, что скрывается внутри? Пока не попробовали эту жидкость, не спешите делать выводы. Кисло-сладкий вкус спелого сочного киви просто взрывает рецепторы.',
      cost: 37,
      types: [
        { value: '0' },
        { value: '1.5' },
        { value: '3' },
      ],
    },
    {
      id: 'simpsons_marge',
      type: 'liquid',
      subtype: 'simpsons',
      subtypeName: 'The Simpsons',
      images: [simpsonsImage],
      name: 'Marge',
      description: 'Какая настоящая хозяйка не любит варить ягодный пунш? Мардж приготовила вам настоящий сюрприз. Микс кисленькх лесных ягод приятно расслабляют, но в то же время заряжают бодростью.',
      cost: 37,
      types: [
        { value: '0' },
        { value: '1.5' },
        { value: '3' },
      ],
    },
    {
      id: 'simpsons_bart',
      type: 'liquid',
      subtype: 'simpsons',
      subtypeName: 'The Simpsons',
      images: [simpsonsImage],
      name: 'Bart',
      description: 'Молодежь не любит обыденность. Любимый напиток Барта - мохито, только классический - это банольно. Что будет, если добавить туда черной смородины и клубники? Не узнаешь, пока не попробуешь. Вперёд.',
      cost: 37,
      types: [
        { value: '0' },
        { value: '1.5' },
        { value: '3' },
      ],
    },
    {
      id: 'simpsons_lisa',
      type: 'liquid',
      subtype: 'simpsons',
      subtypeName: 'The Simpsons',
      images: [simpsonsImage],
      name: 'Lisa',
      description: 'У настоящей девушки все должно быть идально, аккуратно и красиво. Лиза очень постаралась, чтобы создать вкус, который понравится всем. Думаете, что персик и клюква не сочетаются? Вы просто не умеете их готовить.',
      cost: 37,
      types: [
        { value: '0' },
        { value: '1.5' },
        { value: '3' },
      ],
    },
    {
      id: 'simpsons_maggie',
      type: 'liquid',
      subtype: 'simpsons',
      subtypeName: 'The Simpsons',
      images: [simpsonsImage],
      name: 'Maggie',
      description: 'Все слышали, что дети живут эмоциями и порой, чтобы угодить, приходится лезть вон из кожи. Этот вкус создан для удовлетворения любых ваших капризов. Кисто-сладкое сочетание ежевики и смородины отлично дополняет взрывная волна лесных ягод.',
      cost: 37,
      types: [
        { value: '0' },
        { value: '1.5' },
        { value: '3' },
      ],
    },
    {
      id: 'iceApow_restFruits',
      type: 'liquid',
      subtype: 'iceApow',
      subtypeName: 'ICE APOW',
      images: [iceApowImage],
      name: 'RET FRUITS',
      description: '',
      cost: 37,
      types: [
        { value: '0' },
        { value: '1.5' },
        { value: '3' },
      ],
    },
    {
      id: 'iceApow_iceLime',
      type: 'liquid',
      subtype: 'iceApow',
      subtypeName: 'ICE APOW',
      images: [iceApowImage],
      name: 'ICE LIME',
      description: '',
      cost: 37,
      types: [
        { value: '0' },
        { value: '1.5' },
        { value: '3' },
      ],
    },
    {
      id: 'iceApow_iceCurrant',
      type: 'liquid',
      subtype: 'iceApow',
      subtypeName: 'ICE APOW',
      images: [iceApowImage],
      name: 'ICE CURRANT',
      description: '',
      cost: 37,
      types: [
        { value: '0' },
        { value: '1.5' },
        { value: '3' },
      ],
    },
    {
      id: 'iceApow_trawb',
      type: 'liquid',
      subtype: 'iceApow',
      subtypeName: 'ICE APOW',
      images: [iceApowImage],
      name: 'TRAWB',
      description: '',
      cost: 37,
      types: [
        { value: '0' },
        { value: '1.5' },
        { value: '3' },
      ],
    },
    {
      id: 'vapeDrinks_cocaCola',
      type: 'liquid',
      subtype: 'vapeDrinks',
      subtypeName: 'VAPE DRINKS',
      images: [vapeDrinksImage],
      name: 'COCA COLA',
      description: '',
      cost: 37,
      types: [
        { value: '0' },
        { value: '1.5' },
        { value: '3' },
      ],
    },
    {
      id: 'vapeDrinks_sprite',
      type: 'liquid',
      subtype: 'vapeDrinks',
      subtypeName: 'VAPE DRINKS',
      images: [vapeDrinksImage],
      name: 'SPRITE',
      description: '',
      cost: 37,
      types: [
        { value: '0' },
        { value: '1.5' },
        { value: '3' },
      ],
    },
    {
      id: 'vapeDrinks_fanta',
      type: 'liquid',
      subtype: 'vapeDrinks',
      subtypeName: 'VAPE DRINKS',
      images: [vapeDrinksImage],
      name: 'FANTA',
      description: '',
      cost: 37,
      types: [
        { value: '0' },
        { value: '1.5' },
        { value: '3' },
      ],
    },
    {
      id: 'vapeDrinks_redBull',
      type: 'liquid',
      subtype: 'vapeDrinks',
      subtypeName: 'VAPE DRINKS',
      images: [vapeDrinksImage],
      name: 'RED BULL',
      description: '',
      cost: 37,
      types: [
        { value: '0' },
        { value: '1.5' },
        { value: '3' },
      ],
    },
    {
      id: 'vapeDrinks_drPepper',
      type: 'liquid',
      subtype: 'vapeDrinks',
      subtypeName: 'VAPE DRINKS',
      images: [vapeDrinksImage],
      name: 'Dr PEPPER',
      description: '',
      cost: 37,
      types: [
        { value: '0' },
        { value: '1.5' },
        { value: '3' },
      ],
    },
    {
      id: 'selfMixing_base1',
      type: 'selfMixing',
      subtype: 'bases',
      subtypeName: 'Bases',
      images: [selfMixinImage1],
      name: 'Base 1',
      description: '',
      cost: 37,
      types: [],
    },
    {
      id: 'selfMixing_base2',
      type: 'selfMixing',
      subtype: 'bases',
      subtypeName: 'Bases',
      images: [selfMixinImage2],
      name: 'Base 2',
      description: '',
      cost: 37,
      types: [],
    },
    {
      id: 'selfMixing_base3',
      type: 'selfMixing',
      subtype: 'bases',
      subtypeName: 'Bases',
      images: [selfMixinImage3],
      name: 'Base 3',
      description: '',
      cost: 37,
      types: [],
    },
    {
      id: 'selfMixing_base4',
      type: 'selfMixing',
      subtype: 'bases',
      subtypeName: 'Bases',
      images: [selfMixinImage4],
      name: 'Base 4',
      description: '',
      cost: 37,
      types: [],
    },
    {
      id: 'selfMixing_base5',
      type: 'selfMixing',
      subtype: 'bases',
      subtypeName: 'Bases',
      images: [selfMixinImage5],
      name: 'Base 5',
      description: '',
      cost: 37,
      types: [],
    },
    {
      id: 'selfMixing_base6',
      type: 'selfMixing',
      subtype: 'bases',
      subtypeName: 'Bases',
      images: [selfMixinImage6],
      name: 'Base 6',
      description: '',
      cost: 37,
      types: [],
    },
    {
      id: 'selfMixing_base7',
      type: 'selfMixing',
      subtype: 'bases',
      subtypeName: 'Bases',
      images: [selfMixinImage7],
      name: 'Base 7',
      description: '',
      cost: 37,
      types: [],
    },
    {
      id: 'other_other1',
      type: 'other',
      images: [otherImage1],
      name: 'Other 1',
      description: '',
      cost: 37,
      types: [],
    },
    {
      id: 'other_other2',
      type: 'other',
      images: [otherImage2],
      name: 'Other 2',
      description: '',
      cost: 37,
      types: [],
    },
    {
      id: 'other_other3',
      type: 'other',
      images: [otherImage3],
      name: 'Other 3',
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
