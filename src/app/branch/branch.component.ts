import { Component } from '@angular/core';
import { Branch } from './branch';
import { BranchService } from './branch.service';


@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent {

  branchs : Branch[] = [];

  constructor(private branchService: BranchService){}

  ngOnInit() {
 this.branchService.getBranch().subscribe(
  branchs => this.branchs = branchs

 );
    
  }

}
