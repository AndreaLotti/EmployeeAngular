import{Component} from '@angular/core';
import {DataRestClientService} from '../data-rest-client.service';
import { Employee } from '../shared/employee';

@Component({
    selector:'data-table',
    templateUrl: './data-table.component.html',
    styleUrls: ['./data-table.component.css']
})
export class DataTableComponent{
    constructor(private restClient: DataRestClientService){
        this.loadData();
        this.employee = {
            employeeId : 0,
            firstName : "",
            lastName : "",
            email : "",
            phone : ""
        }
    }

    data : any;
    errors : any;
    result : any;
    show : boolean = false;
    employee :Employee;
    visible : boolean = false;
    id : any;  

    loadData() : void{
        this.restClient.getDataRows("http://localhost:4200/api/tutorial/1.0/employees").subscribe(
            data => this.data = data,
            error => this.errors = error
        );
    }

    insertForm() : void {
        if(this.show) this.show = false;
        else this.show = true;
      } 
    
      add() : void {
        this.restClient.getDataRows("http://localhost:4200/api/tutorial/1.0/employees").subscribe(
            data => {
                this.data = data;
    
                let id = this.data[this.data.length-1].employeeId;
    
                this.employee.employeeId = ++id;
    
                console.log(this.employee);
    
                this.restClient.postData("http://localhost:4200/api/tutorial/1.0/employees", this.employee)
                .subscribe(data => this.result = data);
    
                location.reload(); 
            },
            error => console.log(error)
        );
      }
      
    remove(btn : any) : void{
        let id = btn.target.id;  
        this.restClient.removeData("http://localhost:4200/api/tutorial/1.0/employees/" + id).subscribe();
        location.reload();
    } 

    showHideForm(btn: any) : void {
        if(this.visible) this.visible = false;
        else this.visible = true;
        this.id = btn.target.id;
        this.employee.employeeId = this.id;
    }
    
    update() : void{
        this.restClient.updateData("http://localhost:4200/api/tutorial/1.0/employees/" + this.id, this.employee).subscribe();
        location.reload();
    }

    
}
    