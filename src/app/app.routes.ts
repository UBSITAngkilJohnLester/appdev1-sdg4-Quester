import { Routes } from '@angular/router';
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
    //////////////////////////////For Quiz home routing///////////////////////////////////////
    ///=====progit====//////////////////////
    {path: 'ProgitE', component: EProgit1Component},
    {path: 'ProgitM', component: MProgit1Component},
    {path: 'ProgitH', component: HProgit1Component},
    ///=====OPSYST====//////////////////////
    {path: 'OpsystE', component: EOpsyst1Component},
    {path: 'OpsystM', component: MOpsyst1Component},
    {path: 'OpsystH', component: HOpsyst1Component},
    ///=====SITNET====//////////////////////
    {path: 'SitnetE', component: ESitnet1Component},
    {path: 'SitnetM', component: MSitnet1Component},
    {path: 'SitnetH', component: HSitnet1Component}
];
