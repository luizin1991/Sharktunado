import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './components/login/login.component'
import { PageBuildingComponent } from './components/shared/page-building/page-building.component'
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component'
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component'

const routes: Routes = [
    { path:'', redirectTo: '/shop', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'shop', component: ShoppingCartComponent },
    { path: 'ajuda', component: PageBuildingComponent },
    { path: '**', component: PageNotFoundComponent },
]


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}