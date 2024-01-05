import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directivesAngular';
   currentPage:number=0;

  images=[
    {
      "title":"At beach",
      "imagesUrl":"https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "title":"At mountain",
      "imagesUrl":"https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "title":"At valley",
      "imagesUrl":"https://images.pexels.com/photos/1574843/pexels-photo-1574843.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "title":"At Desert",
      "imagesUrl":"https://images.pexels.com/photos/847402/pexels-photo-847402.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "title":"At beach",
      "imagesUrl":"https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "title":"At mountain",
      "imagesUrl":"https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "title":"At valley",
      "imagesUrl":"https://images.pexels.com/photos/1574843/pexels-photo-1574843.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "title":"At Desert",
      "imagesUrl":"https://images.pexels.com/photos/847402/pexels-photo-847402.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "title":"At beach",
      "imagesUrl":"https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "title":"At mountain",
      "imagesUrl":"https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "title":"At valley",
      "imagesUrl":"https://images.pexels.com/photos/1574843/pexels-photo-1574843.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "title":"At Desert",
      "imagesUrl":"https://images.pexels.com/photos/847402/pexels-photo-847402.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "title":"At beach",
      "imagesUrl":"https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "title":"At mountain",
      "imagesUrl":"https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "title":"At valley",
      "imagesUrl":"https://images.pexels.com/photos/1574843/pexels-photo-1574843.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      "title":"At Desert",
      "imagesUrl":"https://images.pexels.com/photos/847402/pexels-photo-847402.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ]

  handleClick(index:number){
    
    this.currentPage=index;
  }

  handleButtonForNavigation(index:number){
      return Math.abs(this.currentPage-index)<7;
  }


  /*handlePrev(){
    this.currentPage-=1;
  }*/

  /*handleNext(){
    this.currentPage+=1;
  }*/

}
