import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { TasksAppMongoSharedModule } from 'app/shared/shared.module';
import { TasksAppMongoCoreModule } from 'app/core/core.module';
import { TasksAppMongoAppRoutingModule } from './app-routing.module';
import { TasksAppMongoHomeModule } from './home/home.module';
import { TasksAppMongoEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    TasksAppMongoSharedModule,
    TasksAppMongoCoreModule,
    TasksAppMongoHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    TasksAppMongoEntityModule,
    TasksAppMongoAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class TasksAppMongoAppModule {}
