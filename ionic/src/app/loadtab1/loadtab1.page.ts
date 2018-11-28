import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loadtab1',
  templateUrl: './loadtab1.page.html',
  styleUrls: ['./loadtab1.page.scss'],
})
export class Loadtab1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  data={"required":["Load_Type","Company Name","Consigner","Dagerous Godds","Take Selection"],
  "properties":{
    "Load_Type":{"lable":"Load Type",
                  "type":"text",
                  "class":'"secondry-content"'
                },
     "Company Name":{"lable":"Company Name",
                  "type":"text",
                  "class":'"secondry-content"',
                  
              },
    "Consigner":{"lable":"Consigner",
              "type":"text",
              "class":'"secondry-content"',
              
          },
   "Dagerous Godds":{"lable":"Dagerous Godds",
              "type":"text",
              "class":'"secondry-content"',
              
          },
          "Take Selection":{"lable":"Take Selection",
              "type":"text",
              "class":"'secondry-content'",
              
          }
  }
  
    
        
}

}
