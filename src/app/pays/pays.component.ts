import { Component, OnInit } from '@angular/core';
import { PaysService } from './../../services/pays.service';
@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.css']
})
export class PaysComponent implements OnInit {
  pagePays: any;
  dataPage: any;
  motCle: String = '';
  currentPage: number = 0;
  size: number = 8;
  nombreTotalDepagePagination: number;
  paginationPage: number [] ;
  constructor(public paysService: PaysService ) { }

  doSearch() {

    this.paysService.getPays(this.motCle, this.currentPage, this.size)
  .subscribe(data => {
     console.log(data);
    //  this.dataPage = data;

    this.pagePays = data.resultList;
    this.nombreTotalDepagePagination = data.lastPage;
    this.paginationPage = Array.apply(null, {length: this.nombreTotalDepagePagination + 1}).map(Number.call, Number);
    /* if ( this.currentPage > this.nombreTotalDepagePagination ) {
         this.currentPage = 0 ;
    } */
  }, err => {
    console.error(err);
   });
  }
  chercher() {
    this.currentPage = 0;
    this.doSearch();
  }
    goToPage(i: number) {
      this.currentPage = i;
      this.doSearch();
    }

    nextPage() {
      if (this.currentPage < this.nombreTotalDepagePagination) {
        this.currentPage++;
        this.doSearch();
      }
    }

    prevPage() {
        if (this.currentPage > 0) {
          console.log(this.currentPage);
          this.currentPage--;
          this.doSearch();
        }
      }

  ngOnInit() {
    // this.pagePays = 'Amar';
    this.doSearch();

  }

}
