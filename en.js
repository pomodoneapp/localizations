// @flow

export default {
    loginScreen: {
        loginButtonTitle: 'Sign in',
        passwordLabel: 'Password',
        snackBarTitle: 'Logged in',
        emailLabel: 'Email',
        singInHeaderLabel: 'Sign in'
    },
    authScreen: {
        headerAppName: 'PomoDoneApp',
        signInLabel: 'Sign in',
        registerLabel: 'Register',
        regSuccessMessage: 'Registration successful',
        confirmMessage: 'We need to confirm your email address. To complete your registration, please click the link in the email we just sent you.'
    },
    registerScreen: {
        registerHeaderLabel: 'Register',
        emailLabel: 'Email',
        registerButton: 'Register',
        headerAppName: 'PomoDoneApp',
        partAccept: 'I\'ve read and accept',
        partPolicy: 'Privacy Policy',
        partAnd: 'and',
        partTerms: 'Terms of Service'
    },
    dashboardScreen: {
        title: 'Services',
        cancelButton: 'Cancel',
        doneSwitchButton: 'Done & Switch',
        switchButton: 'Switch',
        timerMessage: 'You have a timer running',
        timerRunMessage: 'Do you want to switch to this task'
    },
    settingsScreen: {
        title: 'Settings',
        settingMenu: 'Advanced Settings',
        settingMenuTitle: 'Advanced Settings',
        timerEnd: 'End of timer',
        timerOption: 'Timer options',
        timerLength: 'Timers lengths',
        timer: 'Timer',
        break: 'Break',
        breakLength: 'Break length',
        notifications: 'Notifications',
        notificationsTitle: 'Notifications',
        sounds: 'Sounds',
        soundsTitle: 'Sounds',
        breakCustom: 'Set custom breaks durations',
        timerBreakDisable: 'disabled',
        breakEnd: 'End of break',
        enabled: 'Enabled',
        disabled: 'Disabled',
        browser: 'Browser',
        breakOptions: 'Break Options',
        theme: 'Dark theme',
        detectBattery: 'Detect Battery Optimization',
        timerOptionSet: 'Set timer options',
        timerStopNotification: 'Timer stop notification',
        breakStopNotification: 'Break stop notification',
        timerFinish: 'Timer finish',
        startBreakAlert: 'Start break alert',
        endBreakAlert: 'End break alert',
        timerLoop: 'Timer loop',
        breakLoop: 'Break loop',
        detectBatteryOptimization: 'Detect battery optimization',
        openExternalLinks: 'Open external links in...',
        language: 'Language',
        selectLanguage: 'Select Language',
        leftSwipeAction: 'Left Swipe Action',
        rightSwipeAction: 'Right Swipe Action',
        leftSwipe: 'Left Swipe',
        rightSwipe: 'Right Swipe',
        swipeActions: {
            none: 'None',
            startTimer: 'Start Timer',
            done: 'Complete Task',
            favorite: 'Add/Remove Favorite',
            edit: 'Edit Task'
        }
    },
    timerScreen: {
        screenMessage: 'Screen is kept on',
        screenSleepMessage: 'Screen is allowed to sleep',
        iconMessage: 'Enjoy your break',
        breakMessage: 'Break ends in:'
    },
    editScreenForm: {
        titleField: 'Title',
        serviceField: 'Service',
        projectField: 'Project',
        listField: 'List',
        assignField: 'Assign to',
        descriptionField: 'Description',
        dateField: 'Due date',
        clearField: 'Clear',
        editTask: 'Edit task',
        addDueDate: 'Add due date...',
        newItem: 'New item',
        create: 'Create'
    },
    statScreen: {
        currentStats: 'Current stats',
        noInternetMessage: 'No internet connection',
        recomendMessage: 'Please go to online to see Stat & Log',
        halfLast: 'Last ',
        halfDay: ' Days',
        total: 'Total',
        dailyAverage: 'Daily average',
        bestWorkday: 'Best workday',
        todayLog: 'Today log',
        lodadingLogStats: 'Loading Log & Stats'
    },
    controlItem: {
        saveButton: 'Save',
        offline: 'You are offline'
    },
    menuItem: {
        currentStats: 'Current stats',
        settings: 'Settings',
        about: 'About',
        detailedLog: 'Detailed log',
        connectedServices: 'Connected services',
        myProfile: 'My profile',
        feedback: 'Feedback',
        logOut: 'Log out',
        plan: 'Plan'
    },
    dashboardItemScreen: {
        noItem: 'No item',
        anotherSource: 'Please select another source of items...',
        emptySearchResult: 'Empty search result',
        halfYourSearch: 'Your search',
        halfDidNotMatch: ' did not match any items',
        trySearchAnything: 'Try search anything',
        search: 'Search'
    },
    screenAboutItem: {
        about: 'About',
        appDescription: 'PomoDone App is a Personal Productivity Management Solution, empowering users to regain control over their time and tasks.',
        createdBy: 'App created by UAB Pomodonė, Vilnius, Lithuania.',
        appYear: '2018 © Pomodonė UAB',
        appName: 'PomoDoneApp',
        aboutPomodone: 'About PomoDone App',
        faq: 'F.A.Q.',
        feedback: 'Feedback'
    },
    screenIntroItem: {
        skip: 'Skip',
        letGo: 'Let\'s Go',
        trackSmart: 'Track smart',
        accountTrack: 'Connect your account and start tracking time now',
        onePlace: 'In One Place',
        favTask: 'Favorite your tasks from different sources for quick access',
        beFlex: 'Be Flexible',
        setCountdown: 'Set up your own countdown timers (in settings)',
        expelDistr: 'Expel Distractions',
        slackMate: 'Your Slack mates can be notified about your workflow'
    },
    fullScreenTimer: {
        integerNumber: 'Need a integer positive number...',
        durationMinute: 'Duration in minutes'
    },
    batteryHelpScreen: {
        feature: 'Restricting background services on Android may prevent timers from running properly. The Doze feature has been added to restrict background services on the Android 6 and later.',
        dozeState: 'Once you leave the device unused for a while, it will be in the Doze state after a certain period of time and the network usage will be restricted as well.',
        fix: 'If you want to fix the problem, you should turn off the battery optimization option. Please refer to the below method for each device.',
        openSettings: 'Open settings',
        guide: 'Guide for different Android devices'
    }

};
