import { ViewChild, ElementRef, Component } from '@angular/core';
     
class Comment{
    comment:string;   
     
    constructor(comment:string) {        
        this.comment = comment;
    }
}
 
@Component({
    selector: 'app',
    template: 
    `<div class="mainDiv">
        <div class="titleNameClass">
                <h1 id="titleNameId">Application for working with comments</h1>
                <hr noshade="noshade" />
        </div>
        <div class="formGroup">
        
            <h2>Leave a Replay</h2>
        
            <textarea id="textArea" #textArea class="textArea" rows="5" [(ngModel)]="comment" placeholder="Your Comment"></textarea>
            <br/>
            
            <button (click)="addComment(0,comment)" >Comment</button>
            <br/>
            <hr noshade="nosahde" />
            <h3>Comments:</h3>            
            <div>
                <div *ngFor="let comment of comments;" class="divForDeleteOrReply" id="wasUpdated">
                    <div  [ngClass]="whatClass">
                      <p>
                        {{comment}}
                     </p>
                    </div>
                    <div class="btnReplyDelete">
                        <button class="btn" (click)="delComment(comment)" >Delete</button>
                    </div>
                    <div class="subTextArea">
                        <textarea class="textArea" id="subTextArea" placeholder="Your reply" [(ngModel)]="reply"  ></textarea>
                    </div>
                    <div class="btnReplyDelete"  style="float:right">
                        <button class="btn" (click)="crtReply(comment, reply)"  >Reply</button>
                    </div>  
                    <div class="replyClass">

                    </div>
             </div>       
              
        </div>
    </div>`
})
export class AppComponent { 

    empty:string = "↑↑reply..to↑↑.....................";
    
    whatClass:string = "comment";

    @ViewChild("textArea", {static: false})
    areaContent: ElementRef;    
         
    replyArr:string[] = [
        
    ];
    comments: string[] =                // array that store all comments
    [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Test1",
        "Test2",
        "Test3",
        "Test4",
        "Test5"        
    ];
    delComment(comment:string):void{ 
        for(let i:number = 0; i<this.comments.length; i++){
            if (this.comments[i] === comment){
                this.comments.splice(i,1);
                break;
            }
        }
    }
    addComment(place:number, comment:string): string {        

        if(comment==null || comment.trim()=="") return;


        if(this.replyArr[comment]){              // when comment - css class .comment
            this.whatClass = "reply";            // when reply to the comment - css class .reply
        }                                        // don't work
        else{
            this.whatClass = "comment"
        }               
      
        this.comments.splice(place,0,comment);      

         this.areaContent.nativeElement.textContent = ""; //don't work || should make textarea empty
         
    }  
    crtReply(comment: string, reply:string){
        let index:number;   
        for(let i:number = 0; i<this.comments.length; i++){  //here could be arr.findIndex()? but it didn't work
            if (this.comments[i] === comment){
                index = ++i;   
                break;
            }           
            
        } 
        reply =this.empty + reply;
        this.replyArr.push(reply);
        this.addComment(index,reply);        
             
    }
}