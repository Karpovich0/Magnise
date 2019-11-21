import { Component } from '@angular/core';
     
class Comment{
    comment:string;
     
    constructor(comment:string) {
  
        this.comment = comment;
    }
}
 
@Component({
    selector: 'app',
    template: `<div class="mainDiv">
    <div class="titleNameClass">
        <h1 id="titleNameId">Application for working with comments</h1>
        <hr noshade="noshade" />
    </div>
    <div class="formGroup">
        <h2>Leave a Replay</h2>
        <form>
            <textarea class="textArea" rows="5" [(ngModel)]="someText" placeholder="Your Comment"></textarea>
            <br>
            <button class="btn" (click)="addComment(someText)">Comment</button>
            <br/>
            <hr noshade="nosahde" />
            <h3>Comments:</h3>
            <ul class="list-group">               
            </ul>
        </form>
    </div>
</div>`
})
export class AppComponent { 
    comments: Comment[] = 
    [
        { comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    ];
    addComments(someText:string): void {
         
        if(someText==null || someText.trim()=="")
            return;
        this.comments.push(new Comment(someText));
    }
}