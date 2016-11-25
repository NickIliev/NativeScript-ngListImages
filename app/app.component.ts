import { Component, OnInit } from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {

    public flowers: Array<any> = [];

    ngOnInit() {
        fetch("https://pixabay.com/api/?key=3849831-c6940b18af7205219cf4a8d8f&q=flowers&image_type=photo&per_page=50", {
            method: 'get'
        }).then(response => { 

            var res = JSON.parse(response["_bodyInit"]);

            var hits = res.hits;

            console.log("total flowers loaded: " + hits.length);
            hits.forEach(element => {
                this.flowers.push({"tags": element.tags, "previewURL":element.previewURL});
            });
        })  
    }
}