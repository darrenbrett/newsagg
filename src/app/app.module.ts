import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoriesComponent } from './stories/stories.component';
import { FooterComponent } from './footer/footer.component';
import { ItemComponent } from './item/item.component';
import { HackerNewsAPIService } from './hackernews-api.service';
import { ItemCommentsComponent } from './itemcomments/itemcomments.component';
import { CommentTreeComponent } from './comment-tree/comment-tree.component';
import { CommentComponent } from './comment/comment.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StoriesComponent,
    FooterComponent,
    ItemComponent,
    ItemCommentsComponent,
    CommentTreeComponent,
    CommentComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ HackerNewsAPIService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
