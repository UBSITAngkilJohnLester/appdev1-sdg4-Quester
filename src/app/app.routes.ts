import { Routes } from '@angular/router';
import { Learn } from '../Components/learn/learn';
import { Progit1Info } from '../Components/progit1-info/progit1-info';
import { Sitnet1Info } from '../Components/sitnet1-info/sitnet1-info';
import { Opsyst1Info } from '../Components/opsyst1-info/opsyst1-info';
import { Home } from '../Components/home/home';
import { About } from '../Components/about/about';

export const routes: Routes = [
    { path: 'learn', component: Learn},
    { path: 'progit', component: Progit1Info},
    { path: 'sitnet', component: Sitnet1Info},
    { path: 'opsyst', component: Opsyst1Info},
    { path: 'home', component: Home},
    { path: 'flashcards', component: Home},
    { path: 'quizzes', component: Home},
    { path: 'about', component: About}
];
