import { RouterModule, Routes} from '@angular/router';

import { EntiresComponent } from './entires/entires.component';
import { NewEntryComponent} from './new-entry/new-entry.component';
import { DeleteEntryComponent } from './delete-entry/delete-entry.component';
import { RegisterComponent} from './register/register.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {path: '', component: EntiresComponent},
    {path: 'entries', component: EntiresComponent},
    {path: 'new-entry', component: NewEntryComponent},
    {path: 'delete-entry/:id', component: DeleteEntryComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent}

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouterModule { }