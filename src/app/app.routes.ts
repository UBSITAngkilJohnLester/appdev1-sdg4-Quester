import { Routes } from '@angular/router';
import { Learn } from '../Components/learn/learn';
import { Progit1Info } from '../Components/progit1-info/progit1-info';
import { Sitnet1Info } from '../Components/sitnet1-info/sitnet1-info';
import { Opsyst1Info } from '../Components/opsyst1-info/opsyst1-info';
import { Home } from '../Components/home/home';
import { About } from '../Components/about/about';
import { FCardsComponents } from './fcards-components/fcards-components';
import { QuizHomeComponent } from './QuizComponents/quiz-home-component/quiz-home-component';
import { EProgit1Component } from './QuizComponents/EasyQuiz/eprogit1-component/eprogit1-component';
import { MProgit1Component } from './QuizComponents/MediumQuiz/mprogit1-component/mprogit1-component';
import { HProgit1Component } from './QuizComponents/HardQuiz/hprogit1-component/hprogit1-component';
import { EOpsyst1Component } from './QuizComponents/EasyQuiz/eopsyst1-component/eopsyst1-component';
import { MOpsyst1Component } from './QuizComponents/MediumQuiz/mopsyst1-component/mopsyst1-component';
import { HOpsyst1Component } from './QuizComponents/HardQuiz/hopsyst1-component/hopsyst1-component';
import { ESitnet1Component } from './QuizComponents/EasyQuiz/esitnet1-component/esitnet1-component';
import { MSitnet1Component } from './QuizComponents/MediumQuiz/msitnet1-component/msitnet1-component';
import { HSitnet1Component } from './QuizComponents/HardQuiz/hsitnet1-component/hsitnet1-component';

export const routes: Routes = [
    // Main routes
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'learn', component: Learn },
    { path: 'progit', component: Progit1Info },
    { path: 'sitnet', component: Sitnet1Info },
    { path: 'opsyst', component: Opsyst1Info },
    { path: 'home', component: Home },
    { path: 'flashcards', component: FCardsComponents },
    { path: 'quizzes', component:  QuizHomeComponent },
    { path: 'about', component: About },

    // Quiz routes — Progit
    { path: 'ProgitE', component: EProgit1Component },
    { path: 'ProgitM', component: MProgit1Component },
    { path: 'ProgitH', component: HProgit1Component },

    // Quiz routes — Opsyst
    { path: 'OpsystE', component: EOpsyst1Component },
    { path: 'OpsystM', component: MOpsyst1Component },
    { path: 'OpsystH', component: HOpsyst1Component },

    // Quiz routes — Sitnet
    { path: 'SitnetE', component: ESitnet1Component },
    { path: 'SitnetM', component: MSitnet1Component },
    { path: 'SitnetH', component: HSitnet1Component },
];