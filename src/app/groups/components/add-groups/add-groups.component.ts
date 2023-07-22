import { Component } from '@angular/core';
import { FormControl, Validators , FormBuilder, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';



@Component({
  selector: 'app-add-groups',
  templateUrl: './add-groups.component.html',
  styleUrls: ['./add-groups.component.css']
})
export class AddGroupsComponent {




      
  
  constructor(private fb : FormBuilder   , private router : Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
    
  AddGroup= this.fb.group({
    
      
    GroupName: [''  , Validators.required],
    
    GroupDescription : ['', Validators.required],

    GroupType:['', Validators.required]
    
    });


}
