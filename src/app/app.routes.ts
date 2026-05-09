import { Routes } from '@angular/router';
import { Home } from '../Components/home/home';
import { Learn } from '../Components/learn/learn';
import { About } from '../Components/about/about';
import { leaveLessonGuard } from './Guards/leave-lesson-guard-guard';
import { FCardsComponents } from './fcards-components/fcards-components';
import { QuizHomeComponent } from './QuizComponents/quiz-home-component/quiz-home-component';
import { Progit1Info } from '../Components/progit1-info/progit1-info';
import { Sitnet1Info } from '../Components/sitnet1-info/sitnet1-info';
import { Opsyst1Info } from '../Components/opsyst1-info/opsyst1-info';
import { LessonDetail } from '../Components/lesson-detail/lesson-detail';
import { EProgit1Component } from './QuizComponents/EasyQuiz/eprogit1-component/eprogit1-component';
import { MProgit1Component } from './QuizComponents/MediumQuiz/mprogit1-component/mprogit1-component';
import { HProgit1Component } from './QuizComponents/HardQuiz/hprogit1-component/hprogit1-component';
import { EOpsyst1Component } from './QuizComponents/EasyQuiz/eopsyst1-component/eopsyst1-component';
import { MOpsyst1Component } from './QuizComponents/MediumQuiz/mopsyst1-component/mopsyst1-component';
import { HOpsyst1Component } from './QuizComponents/HardQuiz/hopsyst1-component/hopsyst1-component';
import { ESitnet1Component } from './QuizComponents/EasyQuiz/esitnet1-component/esitnet1-component';
import { MSitnet1Component } from './QuizComponents/MediumQuiz/msitnet1-component/msitnet1-component';
import { HSitnet1Component } from './QuizComponents/HardQuiz/hsitnet1-component/hsitnet1-component';
import { PageNotFound } from '../Components/page-not-found/page-not-found';
import { quizGuardGuard } from './QuizComponents/Guard/quiz-guard-guard';
import { Customfcards } from './customfcards/customfcards';
import { OPSYST1fcards } from './subjectcards/opsyst1fcards/opsyst1fcards';
import { PROGIT1fcards } from './subjectcards/progit1fcards/progit1fcards';
import { SITNET1fcards } from './subjectcards/sitnet1fcards/sitnet1fcards';

export const routes: Routes = [
    // Default
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    // Main pages
    { path: 'home', component: Home },
    { path: 'about', component: About },
    { path: 'flashcards', component: FCardsComponents },
    { path: 'quizzes', component: QuizHomeComponent },

    // Learning
    { path: 'learn', component: Learn },
    { path: 'learn/progit', component: Progit1Info },
    { path: 'learn/sitnet', component: Sitnet1Info },
    { path: 'learn/opsyst', component: Opsyst1Info },
    { path: 'learn/progit/:lessonId', component: LessonDetail, canDeactivate: [leaveLessonGuard] },
    { path: 'learn/sitnet/:lessonId', component: LessonDetail, canDeactivate: [leaveLessonGuard] },
    { path: 'learn/opsyst/:lessonId', component: LessonDetail, canDeactivate: [leaveLessonGuard] },

    ///////////// For Quiz Home Routing /////////////////////////////////////////////////////////
    ///=====PROGIT====//////////////////////
    {path: 'ProgitE', component: EProgit1Component},
    {path: 'ProgitM', component: MProgit1Component, canActivate: [quizGuardGuard], data: { required: 'progitEasyDone', redirect: '/ProgitE' }},
    {path: 'ProgitH', component: HProgit1Component, canActivate: [quizGuardGuard], data: { required: 'progitMediumDone', redirect: '/ProgitM' }},

    ///=====OPSYST====//////////////////////
    {path: 'OpsystE', component: EOpsyst1Component},
    {path: 'OpsystM', component: MOpsyst1Component, canActivate: [quizGuardGuard], data: { required: 'opsystEasyDone', redirect: '/OpsystE'}},
    {path: 'OpsystH', component: HOpsyst1Component, canActivate: [quizGuardGuard], data: { required: 'opsystMediumDone', redirect: '/OpsystM'}},

    ///=====SITNET====//////////////////////
    {path: 'SitnetE', component: ESitnet1Component},
    {path: 'SitnetM', component: MSitnet1Component, canActivate: [quizGuardGuard], data: { required: 'sitnetEasyDone', redirect: '/SitnetE' }},
    {path: 'SitnetH', component: HSitnet1Component, canActivate: [quizGuardGuard], data: { required: 'sitnetMediumDone', redirect: '/SitnetM' }},
    //FlashCards
    {path: 'customfcards', component: Customfcards},
    {path: 'opsyst1fcards', component: OPSYST1fcards},
    {path: 'progit1fcards', component: PROGIT1fcards},
    {path: 'sitnet1fcards', component: SITNET1fcards},

    // Error Message
    { path: '**', component: PageNotFound },
];