// @flow

export default {
    loginScreen: {
        loginButtonTitle: 'Вход',
        passwordLabel: 'Пароль',
        snackBarTitle: 'Вы авторизованны',
        emailLabel: 'Почта',
        singInHeaderLabel: 'Вход'
    },
    authScreen: {
        headerAppName: 'PomoDoneApp',
        signInLabel: 'Вход',
        registerLabel: 'Регистрация',
        regSuccessMessage: 'Регистрация прошла успешно.',
        confirmMessage: 'Нам нужно, чтобы Вы подтвердили свой адресс электронной почты. Для завершения регистрации, пожалуйста, перейдите по ссылке в сообщении, которое мы отправили вам на электронный адресс.'
    },
    registerScreen: {
        registerHeaderLabel: 'Регистрация',
        emailLabel: 'Адресс электронной почты',
        registerButton: 'Регистрация',
        headerAppName: 'PomoDoneApp',
        partAccept: 'Я прочитал и согласен с',
        partPolicy: 'Политикой конфиденциальности',
        partAnd: 'и',
        partTerms: 'Правилами пользования'
    },
    dashboardScreen: {
        title: 'Сервисы',
        cancelButton: 'Отмена',
        doneSwitchButton: 'Закончить и перейти',
        switchButton: 'Перейти',
        timerMessage: 'Ваш таймер запущен.',
        timerRunMessage: 'Вы хотите перейти к этой задаче?'
    },
    settingsScreen: {
        title: 'Настройки',
        settingMenu: 'Расширенные настройки',
        settingMenuTitle: 'Расширенные настройки',
        timerEnd: 'Конец таймера',
        timerOption: 'Настройка таймера',
        timerLength: 'Длительность таймера',
        timer: 'Таймер',
        break: 'Перерыв',
        breakLength: 'Остановить таймер',
        notifications: 'Уведомления',
        notificationsTitle: 'Уведомления',
        sounds: 'Звуки',
        soundsTitle: 'Звуки',
        breakCustom: 'Установить пользовательскую длительность перерыва',
        timerBreakDisable: 'Неактивен',
        breakEnd: 'Конец перерыва',
        enabled: 'Активен',
        disabled: 'Неактивен',
        browser: 'Браузер',
        breakOptions: 'Настройка перерыва',
        theme: 'Тёмная тема',
        detectBattery: 'Проверять оптимизацию батареи',
        timerOptionSet: 'Установить настройки таймера',
        timerStopNotification: 'Уведомление о прекращении работы таймера',
        breakStopNotification: 'Уведомление о завершении перерыва',
        timerFinish: 'Таймер остановился',
        startBreakAlert: 'Запустить уведомление о перерыве',
        endBreakAlert: 'Запустить уведомление об окончании перерыва',
        timerLoop: 'Цикл таймера',
        breakLoop: 'Цикл перерыва',
        detectBatteryOptimization: 'Определить оптимизацию батареи',
        openExternalLinks: 'Открывать внешние ссылки в...',
        language: 'Язык',
        selectLanguage: 'Выберите язык',
        leftSwipeAction: 'Левый свайп',
        rightSwipeAction: 'Правый свайп',
        leftSwipe: 'Левый свайп',
        rightSwipe: 'Правый свайп',
        swipeActions: {
            none: 'Не использовать',
            startTimer: 'Запустить таймер',
            done: 'Завершить задачу',
            favorite: 'Добавить в избранное',
            edit: 'Редактировать задачу'
        }
    },
    timerScreen: {
        screenMessage: 'Экран активен.',
        screenSleepMessage: 'Экран в режиме сна.',
        iconMessage: 'Приятного отдыха.',
        breakMessage: 'Перерыв заканчивается через:'
    },
    editScreenForm: {
        titleField: 'Название',
        serviceField: 'Сервис',
        projectField: 'Проект',
        listField: 'Список',
        assignField: 'Назначить',
        descriptionField: 'Описание',
        dateField: 'Срок',
        clearField: 'Очистить',
        editTask: 'Редактировать задачу',
        addDueDate: 'Добавить дату...',
        newItem: 'Новая задача',
        create: 'Создать'
    },
    statScreen: {
        currentStats: 'Текущая статистика',
        noInternetMessage: 'Отсутствует интернет соединение',
        recomendMessage: 'Пожалуйста, подключитесь к интеренту, чтобы посмотреть журнал и статистику',
        halfLast: 'За последние ',
        halfDay: ' дней',
        total: 'Сумарно',
        dailyAverage: 'В среднем за сутки',
        bestWorkday: 'Лучший результат',
        victoryBarName: 'имя',
        victoryBarHours: 'часов',
        todayLog: 'Сегодня',
        lodadingLogStats: 'Загрузка статистики'
    },
    controlItem: {
        saveButton: 'Сохранить',
        offline: 'Офлайн'
    },
    menuItem: {
        currentStats: 'Статистика',
        settings: 'Настройки',
        about: 'О нас',
        detailedLog: 'Расширенный журнал',
        connectedServices: 'Подключённые сервисы',
        myProfile: 'Мой профиль',
        feedback: 'Обратная связь',
        logOut: 'Выход',
        plan: 'Тарифный план'
    },
    dashboardItemScreen: {
        noItem: 'Пусто',
        anotherSource: 'Пожалуйста, поищите в другом месте...',
        emptySearchResult: 'Ничего не найдено',
        halfYourSearch: 'По вашему запросу',
        halfDidNotMatch: ' ничего не найдено.',
        trySearchAnything: 'Попробуйте что-нибудь найти',
        search: 'Поиск'
    },
    screenAboutItem: {
        about: 'О нас',
        appDescription: 'PomoDone App - это лучшее решение для распределения вашего времени и увеличения собственной продуктивности.',
        createdBy: 'Приложение создано UAB Pomodonė, Vilnius, Lithuania.',
        appYear: '2018 © Pomodonė UAB',
        appName: 'PomoDoneApp',
        aboutPomodone: 'О PomoDone App',
        faq: 'F.A.Q.',
        feedback: 'Обратная связь'
    },
    screenIntroItem: {
        skip: 'Пропустить',
        letGo: 'Начнём',
        trackSmart: 'Умное отслеживание',
        accountTrack: 'Подключите свою учётную запись и начните отслеживать время прямо сейчас.',
        onePlace: 'В одном месте',
        favTask: 'Добавьте ваши задачи из других источников в избранные и получить к ним быстрый доступ.',
        beFlex: 'Будьте гибкими',
        setCountdown: 'Установите своё время обратного отчёта таймера (в настройках).',
        expelDistr: 'Избавьтесь от отвлекающих факторов.',
        slackMate: 'Ваши друзья из Slack могут быть осведомлены о вашем рабочем процессе.'
    },
    fullScreenTimer: {
        integerNumber: 'Введите положительное число...',
        durationMinute: 'Длительность в минутах'
    },
    batteryHelpScreen: {
        feature: ' Ограничение работы фоновых сервисов Android может привести к нестабильной работе таймера. Режим сна был добавлен, чтобы ограничивать фоновые сервисы на Android 6 и выше.',
        dozeState: 'Если вы оставили ваше устройство без использования, приложение перейдёт в режим сна в течении определённого периода, ограничивая потребления интернет трафика.',
        fix: 'Чтобы решить эту проблему, вам нужно выключить оптимизацию батареи. Пожалуйста, используйте этот метод на всех устройствах Android.',
        openSettings: 'Открыть настройки',
        guide: 'Руководство для различных устройств Android.'
    }
};
