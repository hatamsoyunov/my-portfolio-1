const projects = [
	{
		id: 1,
		type: 'all htmlcss',
		slug: 'sozdateli',
		img: '../img/projects/project_15011/project_sozdateli_preview.jpg',
		title: 'Создатели',
		desc:
			'Полноэкранный, современный, однострничный сайт с поблочной прокруткой, использовались новые технологии, анимация.',
		clientName: 'Lained Company Site',
		toolsList: [
			'Gulp',
			'HTML',
			'SASS',
			'JS(jQuery)',
			'Bootstrap Grid',
			'Flexbox'
		],
		tags: ['Вёрстка'],
		link: 'http://sozdateli.devlained.ru',
		mainImg: '../img/projects/project_15011/project_sozdateli_main.jpg',
		fullImg: '../img/projects/project_15011/project_sozdateli_full.jpg'
	},
	{
		id: 3,
		type: 'all webdesign site',
		slug: 'sashawinds',
		img: '../img/projects/project_15009/project_sashawinds_preview.jpg',
		title: 'Саша Виндс',
		desc:
			'Полноэкранный, одностраничный промо-сайт. Саша Виндс - профессиональный ведущий.',
		clientName: '',
		toolsList: [
			'Adobe XD',
			'Gulp',
			'HTML',
			'SASS',
			'JS(jQuery)',
			'Bootstrap Grid',
			'Flexbox',
			'CMS MODx Revo'
		],
		tags: ['Сайт под ключ', 'Landing Page'],
		link: 'http://sashawinds.pro/',
		mainImg: '../img/projects/project_15009/project_sashawinds_main.jpg',
		fullImg: '../img/projects/project_15009/project_sashawinds_full.jpg'
	},
	{
		id: 4,
		type: 'all htmlcss',
		slug: 'smmfest',
		img: 'img/projects/project_15008/project_smmfest_preview.jpg',
		title: 'SMM.FEST',
		desc: 'Вёрстка одностраничного промо-сайта SMM.FEST',
		clientName: 'Lained Company Site',
		toolsList: [
			'Gulp',
			'HTML',
			'SASS',
			'JS(jQuery)',
			'Bootstrap Grid',
			'Flexbox'
		],
		tags: ['Вёрстка'],
		link: 'http://smmfest.ru/',
		mainImg: '../img/projects/project_15008/project_smmfest_main.jpg',
		fullImg: '../img/projects/project_15008/project_smmfest_full.jpg'
	},
	{
		id: 5,
		type: 'all htmlcss',
		slug: 'rpa',
		img: 'img/projects/project_15006/project_rpa_preview.jpg',
		title: 'Russian Photo Awards',
		desc:
			"Вёрстка многостраничного, резинового, полноэкраного сайта премия в области фотографии в России. Использовался новые веб-технологии, сайт почти полностью на Flexbox'е, параллакс, плавные анимации и конечно же полностью адаптивный.",
		clientName: 'Lained Company Site',
		toolsList: [
			'Gulp',
			'HTML',
			'SASS',
			'JS(jQuery)',
			'Bootstrap Grid',
			'Flexbox'
		],
		tags: ['Вёрстка'],
		link: 'https://www.russianphotoawards.com/',
		mainImg: '../img/projects/project_15006/project_rpa_main.jpg',
		fullImg: '../img/projects/project_15006/project_rpa_full.jpg'
	},
	{
		id: 6,
		type: 'all site',
		slug: 'sushi100',
		img: 'img/projects/project_15003/sushi100_preview.jpg',
		title: 'Суши 100 - доставка роллы и пиццы',
		desc: 'Сайт ресторана доставки японской кухни «Суши-100».',
		clientName: 'Бизнес сайты',
		toolsList: ['Adobe XD', 'HTML+CSS+JS(jQuery)', 'MODx Revo(+miniShop2)'],
		tags: ['Веб-дизайн', 'Вёрстка', 'Сайт под ключ'],
		link: 'http://суши-курск.рф',
		mainImg: '../img/projects/project_15003/sushi100_main.jpg',
		fullImg: '../img/projects/project_15003/sushi100_full.jpg'
	},
	{
		id: 7,
		type: 'all htmlcss',
		slug: 'kittypuppy',
		img: 'img/projects/project_15010/project_kittypuppy_preview.jpg',
		title: 'KITTYPUPPY',
		desc: 'Вёрстка одностраничника - KITTYPUPPY Онлайн журнал и маркетплейс',
		clientName: 'Lained Company Site',
		toolsList: [
			'Gulp',
			'HTML',
			'SASS',
			'JS(jQuery)',
			'Bootstrap Grid',
			'Flexbox'
		],
		tags: ['Вёрстка'],
		link: 'http://projects.hattam.ru/kittypuppy/"',
		mainImg: '../img/projects/project_15010/project_kittypuppy_main.jpg',
		fullImg: '../img/projects/project_15010/project_kittypuppy_full.jpg'
	},
	{
		id: 8,
		type: 'all htmlcss',
		slug: 'homefash',
		img: 'img/projects/project_15007/project_homefash_preview.jpg',
		title: 'HOMEFASH',
		desc:
			'Верстка полнофункционального интернет-магазина товаров для дома под CMS систему Bitrix.',
		clientName: 'Lained Company Site',
		toolsList: ['Gulp'],
		tags: ['Вёрстка'],
		link: 'http://projects.hattam.ru/homefash/',
		mainImg: '../img/projects/project_15007/project_homefash_main.jpg',
		fullImg: '../img/projects/project_15007/project_homefash_full.jpg'
	},
	{
		id: 9,
		type: 'all htmlcss',
		slug: 'komanda_y',
		img: 'img/projects/project_15005/project_komanda_y_preview.jpg',
		title: 'Digital агентства "Команда Y"',
		desc:
			'Landing Page с поблочной прокруткой, использовались новые технологии, анимации фона, широкоформатный, сетка частично bootstrap.',
		clientName: 'Lained Company Site',
		toolsList: ['Gulp'],
		tags: ['Вёрстка'],
		link: 'http://projects.hattam.ru/komanda_y/',
		mainImg: '../img/projects/project_15005/project_komandaY_main.jpg',
		fullImg: '../img/projects/project_15005/project_komandaY_full.jpg'
	},
	{
		id: 10,
		type: 'all site',
		slug: 'yablonya46',
		img: 'img/projects/project_15004/project_yablonya_preview.jpg',
		title: 'Яблоня46 - Оригинальные iPhone',
		desc: 'Landing Page - для продаж iPhone.',
		clientName: 'Бизнес сайты',
		toolsList: ['Adobe XD', 'HTML+CSS+JS(jQuery)', 'MODx Revo (+miniShop)'],
		tags: ['Веб-дизайн', 'Вёрстка', 'Сайт под ключ', 'Landing Page'],
		link: 'http://яблоня46.рф',
		mainImg: '../img/projects/project_15004/project_yablonya_main.jpg',
		fullImg: '../img/projects/project_15004/projectl_yablonya_main.jpg'
	},
	{
		id: 11,
		type: 'all site',
		slug: 'franshiza_coffeeonelove',
		img: 'img/projects/project_15002/franshiza_coffeeonelove.jpg',
		title: 'Coffee One Love - Франшиза',
		desc: 'Landing page - франшизы мини-кофеен Формата ...',
		clientName: '',
		toolsList: ['Gulp'],
		tags: ['Вёрстка'],
		link: '',
		mainImg: '',
		fullImg: ''
	},
	{
		id: 12,
		type: 'all site',
		slug: 'coffeeonelove',
		img: 'img/projects/project_15001/coffeeonelove.jpg',
		title: 'Coffee One Love',
		desc:
			'Много страничный Landing page и интернет-магазин Coffee One Love - сеть мини-кофеен Формата coffee TOGO.',
		clientName: 'Андрей Рядов',
		testimonial:
			'Всем привет! Меня зовут Андрей и это моя небольшая история работы с Хатамом! Познакомился я с ним в контакте, после прохождения одного курса. Мне нужен был сайт, и он откликнулся что бы помочь мне в его создании. Цена меня вполне устроила. Потому что она была гораздо ниже рынка. Я незамедлительно согласился и мы начали работать. Так как я человек новый в этой сфере, и не очень понимал что иногда что я сам хочу. Но Хатам терпеливо и с профессионализмом подошел ко мне и нашему делу. Будучи не особо хорошо знающий Русский язык, Хатам все равно крайне доходчивым языком объяснял все процессы и нюансы. Все просьбы и пожелания, были выполнены на 101%! Сайт, все тригеры, и прочее множество нужных и специальных программ для улучшения работы сайта были сделаны . Сами понимаете, когда вы услышали тут и там что то или иное реально помогает увеличить продажи на сайте, вы сразу же хотите их поставить себе на сайт. У меня таких было "куча". Хатам все сделал без лишних вопросов. Вобщем что могу сказать , Вы попали в правильное место, к хорошему человеку и профессионалу своего дела! За относительно маленькую сумму денег, вы получите себе полноценный, продающий сайт с любыми пожеланиями!',
		toolsList: [
			'Adobe Photoshop',
			'HTML+CSS+JS(jQuery)',
			'MODx Revo (+miniShop)'
		],
		tags: ['Сайт под ключ', 'Landing Page'],
		link: 'http://coffeeonelove.ru/',
		mainImg: '../img/projects/project_15001/coffeeonelove_full_1.jpg',
		fullImg: null
	}
	// {
	// 	id: 133,
	// type: 'all ',
	// 	img: '',
	// 	title: '',
	// 	desc: ''
	// },
	// {
	// 	id: 144,
	// type: 'all ',
	// 	img: '',
	// 	title: '',
	// 	desc: ''
	// },
	// {
	// 	id: 155,
	// type: 'all ',
	// 	img: '',
	// 	title: '',
	// 	desc: ''
	// },
];

export default projects;
