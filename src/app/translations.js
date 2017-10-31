angular.module('auction').config(
    function($translateProvider) {
    $translateProvider.useLocalStorage();
    $translateProvider.useSanitizeValueStrategy(null);
    $translateProvider.translations('en', {
    'Contract Duration Years': 'Contract duration years',
    'Contract Duration Days': 'Contract duration days',
    'Yearly Payments Percentage': 'Yearly payments percentage',
    'Yearly Payments': 'Yearly payments',
    'at': 'at',
    'Announcement': 'Announcement',
    'Bid': 'Bid',
    'Bidder': 'Bidder',
    'Bidders': ' Bidders',
    'Bidding': 'Bidding',
    'English': 'English',
    'Russian': 'Russian',
    'Ukrainian': 'Ukrainian',
    'Client': 'Client',
    'Edit': 'Edit',
    'Info': 'Info',
    'Initial bids': 'Initial bids',
    'Language': 'Language',
    'Login in as viewer': 'Login in as viewer',
    'Login': 'Login',
    'Logout': 'Logout',
    'Place a bid': 'Place a bid',
    'Cancel': 'Cancel',
    'Preliminary bids': 'Preliminary bids',
    'Round': 'Round',
    'Settings': 'Settings',
    'Time': 'Time',
    'You': 'You',
    'All bidders': 'All bidders',
    'Pause': 'Pause',
    'Results Release': 'Results Release',
    'Waiting': 'Waiting',
    'or lower': 'or lower',
    'or higher': 'or higher',
    'UAH': 'UAH',
    'shortTime': 'h:mm a',
    'Restart sync': 'Restart sync',
    'Too low value': 'Too low value',
    'Too high value': 'Too high value',
    'Not valid bidder': 'Not valid bidder',
    'Stage not for bidding': 'Stage not for bidding',
    'Bid placed': 'Bid placed',
    'Normilized Price': 'Normalized price:',
    'Full Price': 'Full price:',
    'Bidder Coeficient':'Coeficient:',
    'Your proposal': 'Your proposal',
    'Finish': 'Finish',
    'days': 'days',
    'hours': 'hr',
    'minutes': 'min',
    'seconds': 'sec',
    'minimum': 'minimum',
    'maximum': 'maximum',
    'Internet connection is lost. Attempt to restart after 1 sec': 'Internet connection is lost. Attempt to restart after 1 sec',
    'Synchronization failed': 'Synchronization failed',
    'Possible results': 'Possible results',
    'In the room came a new user': 'In the room came a new user',
    'until the auction starts': 'until the auction starts',
    'until your turn': 'until your turn',
    'until your turn ends': 'until your turn ends',
    'until the round starts': 'until the round starts',
    'until the round ends': 'until the round ends',
    'until the results announcement': 'until the results announcement',
    'Аuction was completed': 'Аuction was completed on',
    'prohibit connection': 'prohibit connection',
    'Step reduction of Bid': 'Step reduction of Bid',
    'Start value': 'Start value',
    'Your bid appears too low': 'Your bid appears too low',
    'Return to Tender': 'Return to Tender',
    'Your latest bid': 'Your latest bid',
    'Tender cancelled': 'Tender cancelled',
    'Bid canceled': 'Bid canceled',
    'Login is currently closed.': 'Login is currently closed.',
    'Please try again later.': 'Please try again later.',
    'Cancel Bid': 'Cancel Bid',
    'Ability to submit bids has been lost. Wait until page reloads, and retry.': 'Ability to submit bids has been lost. Wait until page reloads, and retry.',
    'Ability to submit bids has been lost. Wait until page reloads.': 'Ability to submit bids has been lost. Wait until page reloads',
    'You are registered as a bidder. Wait for the start of the auction.': 'You are registered as a bidder. Wait for the start of the auction.',
    'You are an observer and cannot bid.': 'You are an observer and cannot bid.',
    'Your browser is out of date, and this site may not work properly.': 'Your browser is out of date, and this site may not work properly.',
    'Learn how to update your browser.': 'Learn how to update your browser.',
    'Not Found': 'Not Found',
    'to Mine': 'to Mine',
    'Clear': 'Clear',
    'to General': 'to General',
    'The proposal you have submitted coincides with a proposal of the other participant. His proposal will be considered first, since it has been submitted earlier.': 'The proposal you have submitted coincides with a proposal of the other participant. His proposal will be considered first, since it has been submitted earlier.',
    'Waiting for the disclosure of the participants\' names': 'Waiting for the disclosure of the participants\' names',
    'Unable to place a bid. Check that no more than 2 auctions are simultaneously opened in your browser.': 'Unable to place a bid. Check that no more than 2 auctions are simultaneously opened in your browser.',
    'Please use the correct link to view the auction.': 'Please use the correct link to view the auction.',
    'Contract duration': 'Contract duration',
    'Years': 'Years',
    'Days': 'Days',
    'Your proposal must be': 'Your proposal must be:',
    'Current NPV': 'Current NPV:'
  });

  $translateProvider.translations('uk', {
    'Contract Duration Years': 'Тривалість контракту в роках',
    'Contract Duration Days': 'Тривалість контракту в днях',
    'Yearly Payments Percentage': 'Відсоток річних платежів',
    'Yearly Payments': 'Річні платежі',
    'at': 'о',
    'Announcement': 'Оголошення результатів',
    'Bid': 'Заявка',
    'Bidder': 'Учасник',
    'Bidders': ' Учасники',
    'Bidding': 'Торги',
    'English': 'Англійська',
    'Russian': 'Російська',
    'Ukrainian': 'Українська',
    'Client': 'Клієнт',
    'Edit': 'Змінити',
    'Info': 'Інформація',
    'Initial bids': 'Початкові заявки',
    'Language': 'Мова',
    'Login in as viewer': 'Вхід в якості глядача',
    'Login': 'Вхід',
    'Logout': 'Вийти',
    'Place a bid': 'Зробити заявку',
    'Cancel': 'Відмінити',
    'Preliminary bids': 'Попередні заявки',
    'Round': 'Раунд',
    'Settings': 'Налаштування',
    'Time': 'Час',
    'You': 'Ви',
    'All bidders': 'Всі учасники торгів',
    'Pause': 'Пауза',
    'Results Release': 'Результати',
    'Waiting': 'Очікування',
    'or lower': 'або менше',
    'or higher': 'або більше',
    'UAH': 'грн',
    'shortTime': 'HH:mm',
    'Restart sync': 'Перезапуск синхронізації',
    'Too low value': 'Надто низька заявка',
    'Too high value': 'Надто висока заявка',
    'Not valid bidder': 'Ви не є валідний користувачем',
    'Stage not for bidding': 'Даний етап аукціону не передбачає приймання заявок',
    'Bid placed': 'Заявку прийнято',
    'Normilized Price': 'Приведена ціна:',
    'Full Price': 'Повна ціна:',
    'Bidder Coeficient':'Коефіцієнт:',
    'Your proposal': 'Ваша заявка',
    'Finish': 'Завершено',
    'days': 'дн',
    'hours': 'год',
    'minutes': 'хв',
    'seconds': 'сек',
    'minimum': 'мінімум',
    'maximum': 'максимум',
    'Internet connection is lost. Attempt to restart after 1 sec': 'З\'єднання з інтернетом втрачено. спроба перезавантаження через 1 сек',
    'Synchronization failed': 'Помилка синхронізації',
    'Possible results': 'Можливі результати',
    'In the room came a new user': 'В кабінет зайшов новий користувач',
    'until the auction starts': 'до початку аукціону',
    'until your turn': 'до вашої черги',
    'until your turn ends': 'до закінчення вашої черги',
    'until the round starts': 'до початку раунду',
    'until the round ends': 'до закінчення раунду',
    'until the results announcement': 'до оголошення результатів',
    'Аuction was completed': 'Аукціон завершився',
    'prohibit connection': 'заборонити підключення',
    'Step reduction of Bid': 'Крок зменшення торгів',
    'Start value': 'Стартова сума',
    'Your bid appears too low': 'Ви ввели дуже малу суму, ви впевнені?',
    'Return to Tender': 'Повернутися до Закупівлі',
    'Your latest bid': 'Ваша остання заявка',
    'Tender cancelled': 'Закупівлю скасовано',
    'Bid canceled': 'Заявку відмінено',
    'Login is currently closed.': 'Вхід на даний момент закритий.',
    'Please try again later.': 'Спробуйте пізніше.',
    'Cancel Bid': 'Відмінити заявку',
    'Ability to submit bids has been lost. Wait until page reloads, and retry.': 'Втрачено можливість подавати заявки. Дочекайтесь перевантаження сторінки і повторіть спробу.',
    'Ability to submit bids has been lost. Wait until page reloads.': 'Втрачено можливість подавати заявки. Дочекайтесь перевантаження сторінки.',
    'You are registered as a bidder. Wait for the start of the auction.': 'Ви зареєстровані як учасник. Очікуйте старту аукціону.',
    'You are an observer and cannot bid.': 'Ви спостерігач і не можете робити ставки.',
    'Your browser is out of date, and this site may not work properly.': 'Ваш переглядач застарів, і цей сайт може некоректно працювати.',
    'Learn how to update your browser.': 'Дізнайтесь, як оновити Ваш браузер.',
    'Not Found': 'Аукціону із даною Id не знайдено',
    'to Mine': 'до Моєї',
    'Clear': 'Очистити',
    'to General': 'до Загальної',
    'The proposal you have submitted coincides with a proposal of the other participant. His proposal will be considered first, since it has been submitted earlier.': 'Подана вами пропозиція співпадає з пропозицією іншого учасника. Його пропозиція розглядатиметься першою, оскільки вона подана раніше.',
    'Waiting for the disclosure of the participants\' names': 'Очікуємо на розкриття імен учасників',
    'Unable to place a bid. Check that no more than 2 auctions are simultaneously opened in your browser.': 'Не вдається зробити ставку. Перевірте, що в переглядачі відкрито не більше 2-ох аукціонів.',
    'Please use the correct link to view the auction.': 'Будь ласка, використовуйте правильне посилання для перегляду аукціону.',
    'Contract duration': 'Тривалість контракту',
    'Years': 'Років',
    'Days': 'Днів',
    'Your proposal must be': 'Ваша пропозиція має бути:',
    'Current NPV': 'Поточний NPV:'
  });


  $translateProvider.translations('ru', {
    'Contract Duration Years': 'Длительность контракта в годах',
    'Contract Duration Days': 'Длительность контракта в днях',
    'Yearly Payments Percentage': 'Процент ежегодных платежей',
    'Yearly Payments': 'Ежегодные платежи',
    'at': 'о',
    'Announcement': 'Объявление результатов',
    'Bid': 'Ставка',
    'Bidder': ' Участник',
    'Bidders': ' Учасники',
    'Bidding': 'Торги',
    'English': 'Английский',
    'Russian': 'Русский',
    'Ukrainian': 'Украинский',
    'Client': 'Клиент',
    'Edit': 'Изменить',
    'Info': 'Информация',
    'Initial bids': 'Первоначальные ставки',
    'Language': 'Язык',
    'Login in as viewer': 'Вход в качестве зрителя',
    'Login': 'Вход',
    'Logout': 'Выйти',
    'Place a bid': 'Сделать ставку',
    'Cancel': 'Отменить',
    'Preliminary bids': 'Предварительные ставки',
    'Round': 'Раунд',
    'Settings': 'Настройки',
    'Time': 'Время',
    'You': 'Вы',
    'All bidders': 'Все участники торгов',
    'Pause': 'Пауза',
    'Results Release': 'Результаты',
    'Waiting': 'Ожидание',
    'or lower': 'или меньше',
    'or higher': 'или больше',
    'UAH': 'грн',
    'shortTime': 'HH:mm',
    'Restart sync': 'Перезапуск синхронизации',
    'Too low value': 'Слишком низкая ставка',
    'Too high value': 'Слишком высокая ставка',
    'Not valid bidder': ' Вы не являетесь валидный пользователем',
    'Stage not for bidding': 'Данный этап аукциона не предусматривает приема ставок',
    'Bid placed': 'Ставку принято',
    'Normilized Price': 'Приведённая цена:',
    'Full Price': 'Фактическая цена:',
    'Bidder Coeficient':'Коэффициент:',
    'Your proposal': 'Ваше предложение',
    'Finish': 'Окончен',
    'days': 'дн',
    'hours': 'час',
    'minutes': 'мин',
    'seconds': 'сек',
    'minimum': 'минимум',
    'maximum': 'максимум',
    'Internet connection is lost. Attempt to restart after 1 sec': 'Cоединения с интернетом потеряно. попытка перезагрузки через 1 сек',
    'Synchronization failed': 'Ошибка синхронизации',
    'Possible results': 'Возможные результаты',
    'In the room came a new user': 'В кабинет зашел новый пользователь',
    'until the auction starts': 'до начала аукциона',
    'until your turn': 'до вашей очереди',
    'until your turn ends': 'до завершения вашей очереди',
    'until the round starts': 'до начала раунда',
    'until the round ends': ' до окончания раунда',
    'until the results announcement': 'до объявления результатов',
    'Аuction was completed': 'Аукцион закончился',
    'prohibit connection': 'запретить подключение',
    'Step reduction of Bid': 'Шаг уменьшения торгов',
    'Start value': 'Стартовая сумма',
    'Your bid appears too low': 'Вы ввели очень маленькую сумму, вы уверены?',
    'Return to Tender': 'Вернуться к Закупке',
    'Your latest bid': 'Ваша последняя заявка',
    'Tender cancelled': 'Закупка отменена',
    'Bid canceled': 'Ставку отменено',
    'Login is currently closed.': 'Вход на данный момент закрыт.',
    'Please try again later.': 'Попробуйте позже.',
    'Cancel Bid': 'Отменить ставку',
    'Ability to submit bids has been lost. Wait until page reloads, and retry.': 'Потеряна возможность делать заявки. Подождите перезагрузки страницы и попробуйте еще раз.',
    'Ability to submit bids has been lost. Wait until page reloads.': 'Потеряна возможность делать заявки. Подождите перезагрузки страницы.',
    'You are registered as a bidder. Wait for the start of the auction.': 'Вы зарегистрированы как участник. Ожидайте старта аукциона.',
    'You are an observer and cannot bid.': 'Вы наблюдатель и не можете делать ставки.',
    'Your browser is out of date, and this site may not work properly.': 'Ваш браузер устарел, и этот сайт может некорректно работать.',
    'Learn how to update your browser.': 'Узнайте, как обновить Ваш браузер.',
    'Not Found': 'Аукциона по данной Id не найдена',
    'to Mine': 'к Моей',
    'Clear': 'Очистить',
    'to General': 'к Общей',
    'The proposal you have submitted coincides with a proposal of the other participant. His proposal will be considered first, since it has been submitted earlier.': 'Поданное вами предложение совпадает с предложением другого участника. Его предложение будет рассматриваться первым, поскольку оно подано раньше.',
    'Waiting for the disclosure of the participants\' names': 'Ожидаем раскрытия имен участников',
    'Unable to place a bid. Check that no more than 2 auctions are simultaneously opened in your browser.': 'Невозможно сделать ставку. Проверьте, что в браузере открыто не более 2-х аукционов.',
    'Please use the correct link to view the auction.': 'Пожалуйста, используйте правильную ссылку для просмотра аукциона.',
    'Contract duration': 'Продолжительность контракта',
    'Years': 'Лет',
    'Days': 'Дней',
    'Your proposal must be': 'Ваше предложение должно быть:',
    'Current NPV': 'Текущий NPV:'
  });
});
