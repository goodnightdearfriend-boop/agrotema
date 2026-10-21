// Оголошення Agrotema. Редагує Claude за запитом власника.
// Поля: id, t [укр, англ] назва, c категорія, s підкатегорія, b марка (індекс у BR), y рік, p ціна $, h мотогодини, n кількість фото (файли i/<id>-01.jpg ...), ds [укр, англ] опис, loc місце, note примітка до ціни.
window.AGRO_DATA = {
 "D": [
  {
   "id": 1,
   "t": [
    "Case Magnum 335",
    "Case Magnum 335"
   ],
   "c": "tractors",
   "s": "wheel",
   "b": 3,
   "y": 2008,
   "p": 37000,
   "hp": 335,
   "h": 13700,
   "cb": 0,
   "tr": null,
   "ds": [
    "Case Magnum 335, 2008 р.в., напрацювання 13 700 мтг. Нова гума та АКБ, мотор і КПП після ремонту. Відмінний стан.",
    "Case Magnum 335, 2008, 13,700 engine hours. New tires and battery, engine and gearbox overhauled. Excellent condition."
   ],
   "n": 7,
   "loc": [
    "м. Лебедин",
    "Lebedyn"
   ],
   "r": 16,
   "note": null
  },
  {
   "id": 2,
   "t": [
    "Коток прикотуючий КЗК-6-01",
    "Packer roller KZK-6-01"
   ],
   "c": "implements",
   "s": "roller",
   "b": 15,
   "y": 2013,
   "p": 4000,
   "hp": 0,
   "h": 0,
   "cb": null,
   "tr": null,
   "ds": [
    "Уманьферммаш, ширина захвату 6 м, мале напрацювання, 2013 р.в., відмінний стан.",
    "Umanfermmash, 6 m working width, low usage, 2013, excellent condition."
   ],
   "n": 4,
   "loc": [
    "м. Лебедин",
    "Lebedyn"
   ],
   "r": 16,
   "note": null
  },
  {
   "id": 3,
   "t": [
    "Коток рублячий КЗК-6-04",
    "Chopping roller KZK-6-04"
   ],
   "c": "implements",
   "s": "roller",
   "b": 15,
   "y": 2018,
   "p": 4000,
   "hp": 0,
   "h": 0,
   "cb": null,
   "tr": null,
   "ds": [
    "Уманьферммаш, ширина захвату 6 м, мале напрацювання, 2018 р.в., відмінний стан.",
    "Umanfermmash, 6 m working width, low usage, 2018, excellent condition."
   ],
   "n": 5,
   "loc": [
    "м. Лебедин",
    "Lebedyn"
   ],
   "r": 16,
   "note": null
  },
  {
   "id": 4,
   "t": [
    "Дискова борона навісна ДАН-3,5",
    "Mounted disc harrow DAN-3.5"
   ],
   "c": "implements",
   "s": "harrow",
   "b": 17,
   "y": 2018,
   "p": 2900,
   "hp": 0,
   "h": 0,
   "cb": null,
   "tr": null,
   "ds": [
    "Для трактора 120–150 к.с. Невелике напрацювання, опорні колеса в комплекті. 2018 р.в., гарний стан.",
    "For 120–150 hp tractors. Low usage, support wheels included. 2018, good condition."
   ],
   "n": 11,
   "loc": [
    "м. Лебедин",
    "Lebedyn"
   ],
   "r": 16,
   "note": null
  },
  {
   "id": 5,
   "t": [
    "Глибокорозпушувач (дискріппер) John Deere 2720",
    "Disc ripper John Deere 2720"
   ],
   "c": "implements",
   "s": "ripper",
   "b": 0,
   "y": 2018,
   "p": 22000,
   "hp": 0,
   "h": 0,
   "cb": null,
   "tr": null,
   "ds": [
    "Під трактор від 300 к.с., 5 лап, ширина захвату 3,8 м. 2018 р.в., невелике напрацювання, відмінний стан.",
    "For tractors from 300 hp, 5 shanks, 3.8 m working width. 2018, low usage, excellent condition."
   ],
   "n": 25,
   "loc": [
    "м. Лебедин",
    "Lebedyn"
   ],
   "r": 16,
   "note": null
  },
  {
   "id": 6,
   "t": [
    "МТЗ-1025.2 з балочним переднім мостом",
    "MTZ-1025.2 with beam front axle"
   ],
   "c": "tractors",
   "s": "wheel",
   "b": 6,
   "y": 2011,
   "p": 15500,
   "hp": 0,
   "h": 7000,
   "cb": 0,
   "tr": null,
   "ds": [
    "2011 р.в., напрацювання 7 тис. мтг, балочний передній міст. Гарний стан.",
    "2011, 7,000 engine hours, beam front axle. Good condition."
   ],
   "n": 11,
   "loc": [
    "с. Токарі",
    "Tokari village"
   ],
   "r": 16,
   "note": null
  },
  {
   "id": 7,
   "t": [
    "Foton/Lovol-1254",
    "Foton/Lovol-1254"
   ],
   "c": "tractors",
   "s": "wheel",
   "b": 14,
   "y": 2008,
   "p": 16500,
   "hp": 125,
   "h": 0,
   "cb": 0,
   "tr": 0,
   "ds": [
    "2008 р.в., 125 к.с. Мотор Perkins 6-циліндровий, ПНВТ механічний. Капремонт ГБЦ, ремонт ПНВТ з форсунками. Реверсна коробка: 4 діапазони по 4 передачі. Нове зчеплення, нова передня гума. Відмінний стан.",
    "2008, 125 hp. Perkins 6-cylinder engine, mechanical injection pump. Cylinder head overhauled, pump and injectors repaired. Reverse gearbox: 4 ranges × 4 gears. New clutch and front tires. Excellent condition."
   ],
   "n": 14,
   "loc": [
    "м. Лебедин",
    "Lebedyn"
   ],
   "r": 16,
   "note": null
  },
  {
   "id": 8,
   "t": [
    "МТЗ-82.1",
    "MTZ-82.1"
   ],
   "c": "tractors",
   "s": "wheel",
   "b": 6,
   "y": 2006,
   "p": 10000,
   "hp": 0,
   "h": 0,
   "cb": 0,
   "tr": null,
   "ds": [
    "Мотор Д-243 з турбіною. Встановлена гума з МТЗ-892. Минулого року капремонт двигуна, колінвал мінський, номінал. Гарний стан.",
    "D-243 engine with turbo. Tires from MTZ-892. Engine overhauled last year, Minsk crankshaft, nominal size. Good condition."
   ],
   "n": 13,
   "loc": [
    "с. Токарі",
    "Tokari village"
   ],
   "r": 16,
   "note": null
  },
  {
   "id": 9,
   "t": [
    "Посівний комплекс Lemken Compact Solitair 9",
    "Lemken Compact Solitair 9 seed drill"
   ],
   "c": "implements",
   "s": "seeder",
   "b": 11,
   "y": 2014,
   "p": 24000,
   "hp": 0,
   "h": 0,
   "cb": null,
   "tr": null,
   "ds": [
    "Сухі добрива. Дискова борона Heliodor, ширина захвату 6 м. Комп'ютер Solitronic у комплекті.",
    "Dry fertilizer system. Heliodor disc harrow, 6 m working width. Solitronic computer included."
   ],
   "n": 17,
   "loc": [
    "м. Лебедин",
    "Lebedyn"
   ],
   "r": 16,
   "note": null
  },
  {
   "id": 10,
   "t": [
    "Оприскувач Богуслав Титан",
    "Boguslav Titan sprayer"
   ],
   "c": "implements",
   "s": "sprayer",
   "b": 16,
   "y": 2019,
   "p": 16000,
   "hp": 0,
   "h": 0,
   "cb": null,
   "tr": null,
   "ds": [
    "Об'єм бочки 3 м³ + 200 л бак для промивки. Захват 24 м. Контроль виливу Bravo-180 на 5 секцій. Трипозиційні форсунки. Жодної зварки, відмінний стан.",
    "3 m³ tank + 200 L rinse tank. 24 m boom. Bravo-180 flow control, 5 sections. Three-position nozzles. No welds, excellent condition."
   ],
   "n": 15,
   "loc": [
    "м. Лебедин",
    "Lebedyn"
   ],
   "r": 16,
   "note": null
  },
  {
   "id": 11,
   "t": [
    "Коток рублячий ПТ-6 Технополь",
    "Chopping roller PT-6 Technopol"
   ],
   "c": "implements",
   "s": "roller",
   "b": 18,
   "y": 0,
   "p": 3500,
   "hp": 0,
   "h": 0,
   "cb": null,
   "tr": null,
   "ds": [
    "Ширина захвату 6 метрів. Гарний робочий стан.",
    "6 m working width. Good working condition."
   ],
   "n": 11,
   "loc": [
    "м. Лебедин",
    "Lebedyn"
   ],
   "r": 16,
   "note": null
  },
  {
   "id": 12,
   "t": [
    "Сівалка зернова СЗ-5,4 Astra Nova",
    "Grain drill SZ-5.4 Astra Nova"
   ],
   "c": "implements",
   "s": "seeder",
   "b": 19,
   "y": 2015,
   "p": 6500,
   "hp": 0,
   "h": 0,
   "cb": null,
   "tr": null,
   "ds": [
    "Транспортний пристрій, прикотуючі колеса. 2015 року випуску. Варіаторна, збільшені ящики нового зразка.",
    "Transport device, press wheels. 2015. Variator drive, enlarged new-type hoppers."
   ],
   "n": 18,
   "loc": [
    "м. Лебедин",
    "Lebedyn"
   ],
   "r": 16,
   "note": null
  },
  {
   "id": 13,
   "t": [
    "Борона ротаційна гідравлічна РШ-9,3 Степ",
    "Hydraulic rotary harrow RSh-9.3 Step"
   ],
   "c": "implements",
   "s": "harrow",
   "b": 20,
   "y": 2018,
   "p": 3600,
   "hp": 0,
   "h": 0,
   "cb": null,
   "tr": null,
   "ds": [
    "2018 року випуску. Робочий стан, комплектна.",
    "2018. Working condition, complete."
   ],
   "n": 12,
   "loc": [
    "м. Лебедин",
    "Lebedyn"
   ],
   "r": 16,
   "note": null
  },
  {
   "id": 14,
   "t": [
    "Жатка John Deere F625 HydraFlex з візком",
    "John Deere F625 HydraFlex header with cart"
   ],
   "c": "harvesters",
   "s": "header",
   "b": 0,
   "y": 0,
   "p": 24000,
   "hp": 0,
   "h": 0,
   "cb": null,
   "tr": null,
   "ds": [
    "Оригінал, з візком. Захват 7,6 метра. Ріжучий апарат Шумахер. Копіри на зернові. Цього року пройшла капремонт, але в поле так і не виїхала. Вся нова гума на візку. Запасна коса. Всі нові муфти на муфлері (оригінал). Відмінний стан.",
    "Original, with cart. 7.6 m cutting width. Schumacher cutter bar. Grain height sensors. Overhauled this year and has not been in the field since. All-new tyres on the cart. Spare knife. All-new original couplings on the drive. Excellent condition."
   ],
   "n": 28,
   "loc": [
    "м. Лебедин",
    "Lebedyn"
   ],
   "r": 16,
   "note": null
  },
  {
   "id": 15,
   "t": [
    "Жатка John Deere F630 HydraFlex з візком",
    "John Deere F630 HydraFlex header with cart"
   ],
   "c": "harvesters",
   "s": "header",
   "b": 0,
   "y": 0,
   "p": 18000,
   "hp": 0,
   "h": 0,
   "cb": null,
   "tr": null,
   "ds": [
    "В комплекті з візком. Захват 9,1 метра. Ріжучий апарат Шумахер. Копіри на зернові. Подільники на зернові.",
    "Comes with cart. 9.1 m cutting width. Schumacher cutter bar. Grain height sensors. Grain crop dividers."
   ],
   "n": 16,
   "loc": [
    "м. Лебедин",
    "Lebedyn"
   ],
   "r": 16,
   "note": null
  },
  {
   "id": 16,
   "t": [
    "Плуг ПЛН-3-35 з передплужниками",
    "Plough PLN-3-35 with skimmers"
   ],
   "c": "implements",
   "s": "plow",
   "b": 17,
   "y": 0,
   "p": 500,
   "hp": 0,
   "h": 0,
   "cb": null,
   "tr": null,
   "ds": [
    "Робочий, комплектний.",
    "Working, complete."
   ],
   "n": 18,
   "loc": [
    "м. Лебедин",
    "Lebedyn"
   ],
   "r": 16,
   "note": null
  },
  {
   "id": 17,
   "t": [
    "Плуг ПЛН-3-35 з гребінкою",
    "Plough PLN-3-35 with comb harrow"
   ],
   "c": "implements",
   "s": "plow",
   "b": 17,
   "y": 0,
   "p": 400,
   "hp": 0,
   "h": 0,
   "cb": null,
   "tr": null,
   "ds": [
    "Комплектний, робочий.",
    "Complete, working."
   ],
   "n": 13,
   "loc": [
    "м. Лебедин",
    "Lebedyn"
   ],
   "r": 16,
   "note": null
  },
  {
   "id": 18,
   "t": [
    "Плуг ПЛН-3-35",
    "Plough PLN-3-35"
   ],
   "c": "implements",
   "s": "plow",
   "b": 17,
   "y": 0,
   "p": 400,
   "hp": 0,
   "h": 0,
   "cb": null,
   "tr": null,
   "ds": [
    "Комплектний, робочий.",
    "Complete, working."
   ],
   "n": 16,
   "loc": [
    "м. Лебедин",
    "Lebedyn"
   ],
   "r": 16,
   "note": null
  },
  {
   "id": 19,
   "t": [
    "Плуг ПЛН-3-35, нова центральна планка",
    "Plough PLN-3-35, new central bar"
   ],
   "c": "implements",
   "s": "plow",
   "b": 17,
   "y": 0,
   "p": 400,
   "hp": 0,
   "h": 0,
   "cb": null,
   "tr": null,
   "ds": [
    "Нова центральна планка.",
    "New central bar."
   ],
   "n": 15,
   "loc": [
    "м. Лебедин",
    "Lebedyn"
   ],
   "r": 16,
   "note": null
  },
  {
   "id": 20,
   "t": [
    "Плуг ПЛН-3-35, нова центральна планка",
    "Plough PLN-3-35, new central bar"
   ],
   "c": "implements",
   "s": "plow",
   "b": 17,
   "y": 0,
   "p": 500,
   "hp": 0,
   "h": 0,
   "cb": null,
   "tr": null,
   "ds": [
    "Нова центральна планка. Робочий, комплектний.",
    "New central bar. Working, complete."
   ],
   "n": 13,
   "loc": [
    "м. Лебедин",
    "Lebedyn"
   ],
   "r": 16,
   "note": null
  },
  {
   "id": 21,
   "t": [
    "Плуг 5-корпусний ПЛН-5-35",
    "5-furrow plough PLN-5-35"
   ],
   "c": "implements",
   "s": "plow",
   "b": 17,
   "y": 0,
   "p": 550,
   "hp": 0,
   "h": 0,
   "cb": null,
   "tr": null,
   "ds": [
    "Новий перший корпус. Відмінний стан.",
    "New first body. Excellent condition."
   ],
   "n": 14,
   "loc": [
    "м. Лебедин",
    "Lebedyn"
   ],
   "r": 16,
   "note": null
  },
  {
   "id": 22,
   "t": [
    "Трактор МТЗ-892",
    "MTZ-892 tractor"
   ],
   "c": "tractors",
   "s": "wheel",
   "b": 6,
   "y": 2015,
   "p": 14500,
   "hp": 0,
   "h": 3200,
   "cb": null,
   "tr": null,
   "ds": [
    "2015 рік випуску. Напрацювання 3200 мтг. Все рідне. Гарний робочий стан.",
    "2015. 3,200 engine hours. All original. Good working condition."
   ],
   "n": 16,
   "note": null,
   "loc": [
    "м. Лебедин",
    "Lebedyn"
   ],
   "r": 16
  },
  {
   "id": 23,
   "t": [
    "Трактор МТЗ-892, білоруська збірка",
    "MTZ-892 tractor, Belarus-built"
   ],
   "c": "tractors",
   "s": "wheel",
   "b": 6,
   "y": 2017,
   "p": 15500,
   "hp": 0,
   "h": 1900,
   "cb": null,
   "tr": null,
   "ds": [
    "2017 рік випуску. Напрацювання 1900 мтг. Все рідне. Білоруська збірка!",
    "2017. 1,900 engine hours. All original. Assembled in Belarus."
   ],
   "n": 16,
   "note": null,
   "loc": [
    "м. Лебедин",
    "Lebedyn"
   ],
   "r": 16
  },
  {
   "id": 24,
   "t": [
    "Трактор МТЗ-892",
    "MTZ-892 tractor"
   ],
   "c": "tractors",
   "s": "wheel",
   "b": 6,
   "y": 2018,
   "p": 16000,
   "hp": 0,
   "h": 1900,
   "cb": null,
   "tr": null,
   "ds": [
    "2018 року випуску. Напрацювання 1900 мтг. Все рідне, нічого не розбиралось.",
    "2018. 1,900 engine hours. All original, never taken apart."
   ],
   "n": 15,
   "note": null,
   "loc": [
    "м. Лебедин",
    "Lebedyn"
   ],
   "r": 16
  },
  {
   "id": 25,
   "t": [
    "Трактор МТЗ-80УК",
    "MTZ-80UK tractor"
   ],
   "c": "tractors",
   "s": "wheel",
   "b": 6,
   "y": 1991,
   "p": 4100,
   "hp": 0,
   "h": 0,
   "cb": null,
   "tr": null,
   "ds": [
    "1991 року випуску. На стартері. Зроблений ТНВД з форсунками. Гарний робочий стан. Продаж по техпаспорту.",
    "1991. Electric starter. Injection pump and injectors serviced. Good working condition. Sold with registration documents."
   ],
   "n": 14,
   "note": null,
   "loc": [
    "м. Лебедин",
    "Lebedyn"
   ],
   "r": 16
  },
  {
   "id": 26,
   "t": [
    "КамАЗ 45143",
    "KamAZ 45143"
   ],
   "c": "transport",
   "s": "truck",
   "b": 21,
   "y": 2012,
   "p": 10000,
   "hp": 0,
   "h": 0,
   "cb": null,
   "tr": null,
   "ds": [
    "2012 року. Два роки тому капітальний ремонт двигуна. Правостороннє вивантаження. Робочий стан. Тахограф.",
    "2012. Engine overhauled two years ago. Right-side tipping. Working condition. Tachograph fitted."
   ],
   "n": 23,
   "note": null,
   "loc": [
    "м. Лебедин",
    "Lebedyn"
   ],
   "r": 16
  },
  {
   "id": 27,
   "t": [
    "КамАЗ 45143, кузов під ремонт",
    "KamAZ 45143, body needs repair"
   ],
   "c": "transport",
   "s": "truck",
   "b": 21,
   "y": 2012,
   "p": 10000,
   "hp": 0,
   "h": 0,
   "cb": null,
   "tr": null,
   "ds": [
    "2012 року випуску. Два роки тому капітальний ремонт двигуна. Правостороннє вивантаження. Є питання по кузову (потрібен ремонт).",
    "2012. Engine overhauled two years ago. Right-side tipping. The body needs repair."
   ],
   "n": 18,
   "note": null,
   "loc": [
    "м. Лебедин",
    "Lebedyn"
   ],
   "r": 16
  },
  {
   "id": 28,
   "t": [
    "Трактор New Holland T8.390",
    "New Holland T8.390 tractor"
   ],
   "c": "tractors",
   "s": "wheel",
   "b": 2,
   "y": 2011,
   "p": 59000,
   "hp": 0,
   "h": 19500,
   "cb": null,
   "tr": null,
   "ds": [
    "2011 року випуску. Напрацювання 19 500 мтг. Два роки тому капремонт двигуна та коробки. Нова головка блока циліндрів. Нова передня гума. Пройшов сервіс перед продажем. Готовий до роботи.",
    "2011. 19,500 engine hours. Engine and gearbox overhauled two years ago. New cylinder head. New front tyres. Serviced before sale. Ready to work."
   ],
   "n": 29,
   "note": [
    "з ПДВ",
    "incl. VAT"
   ],
   "loc": [
    "м. Лебедин",
    "Lebedyn"
   ],
   "r": 16
  },
  {
   "id": 29,
   "t": [
    "Причіп тракторний 2ПТС-9, самоскид",
    "2PTS-9 tipping tractor trailer"
   ],
   "c": "transport",
   "s": "trailer",
   "b": 17,
   "y": 0,
   "p": 1900,
   "hp": 0,
   "h": 0,
   "cb": null,
   "tr": null,
   "ds": [
    "Гідрошнек в комплекті! Кузов гнилий: возили добрива, під заміну, ремонт або переобладнання під лісовоз. Візок у гарному стані. Циліндр та гальмівна система на місці.",
    "Hydraulic auger included. The body is rotten from carrying fertiliser and needs replacing, repair or conversion to a timber trailer. Chassis in good condition. Cylinder and brake system in place."
   ],
   "n": 16,
   "note": null,
   "loc": [
    "м. Лебедин",
    "Lebedyn"
   ],
   "r": 16
  },
  {
   "id": 30,
   "t": [
    "Візок універсальний для жатки ЛАН-2",
    "LAN-2 universal header cart"
   ],
   "c": "transport",
   "s": "cart",
   "b": 17,
   "y": 0,
   "p": 3200,
   "hp": 0,
   "h": 0,
   "cb": null,
   "tr": null,
   "ds": [
    "Під жатку до 7,6 метра. Гарний стан!",
    "For headers up to 7.6 m. Good condition."
   ],
   "n": 10,
   "note": null,
   "loc": [
    "м. Лебедин",
    "Lebedyn"
   ],
   "r": 16
  },
  {
   "id": 31,
   "t": [
    "Жатка John Deere 635F HydraFlex",
    "John Deere 635F HydraFlex header"
   ],
   "c": "harvesters",
   "s": "header",
   "b": 0,
   "y": 0,
   "p": 19000,
   "hp": 0,
   "h": 0,
   "cb": null,
   "tr": null,
   "ds": [
    "Захват 10 метрів. Новий МКШ! Гарний робочий стан.",
    "10 m cutting width. New wobble box drive. Good working condition."
   ],
   "n": 25,
   "note": null,
   "loc": [
    "м. Лебедин",
    "Lebedyn"
   ],
   "r": 16
  },
  {
   "id": 32,
   "t": [
    "Плуг оборотний Gregoire Besson SPB 9, 8+1",
    "Gregoire Besson SPB 9 reversible plough, 8+1"
   ],
   "c": "implements",
   "s": "plow",
   "b": 22,
   "y": 2018,
   "p": 18000,
   "hp": 0,
   "h": 0,
   "cb": null,
   "tr": null,
   "ds": [
    "Плуг оборотний напівнавісний, 8+1 корпусів, з передплужниками. 2018 року випуску. Мале напрацювання, робочі органи практично нові!",
    "Semi-mounted reversible plough, 8+1 bodies, with skimmers. 2018. Low usage, working parts almost new."
   ],
   "n": 14,
   "note": null,
   "loc": [
    "м. Лебедин",
    "Lebedyn"
   ],
   "r": 16
  }
 ],
 "BR": [
  "John Deere",
  "Claas",
  "New Holland",
  "Case IH",
  "Fendt",
  "Massey Ferguson",
  "МТЗ / Belarus",
  "Kubota",
  "Deutz-Fahr",
  "Challenger",
  "ХТЗ",
  "Lemken",
  "Amazone",
  "Kuhn",
  "Foton / Lovol",
  "Уманьферммаш",
  "Богуслав",
  "",
  "Технополь",
  "Червона зірка (Elvorti)",
  "Степ",
  "КамАЗ",
  "Gregoire Besson"
 ]
};
