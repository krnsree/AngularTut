import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipie-edit',
  templateUrl: './recipie-edit.component.html',
  styleUrls: ['./recipie-edit.component.css']
})
export class RecipieEditComponent implements OnInit {

  id!:number;
  editMode = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  this.route.params.subscribe(
    res=>{
      this.id=+res['id'];
      this.editMode= res['id'] !=null;
    }
  );
  }

}
