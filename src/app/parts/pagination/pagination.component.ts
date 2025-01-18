import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: false,

  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent implements OnInit {
  @Input() items: any[] = []; // Input for items to paginate
  @Input() itemsPerPage: number = 12; // Number of items per page
  currentPage: number = 1; // Current active page
  totalPages: number = 1; // Total number of pages
  displayedItems: any[] = []; // Items to display on the current page

  ngOnInit(): void {
    this.totalPages = Math.ceil(this.items.length / this.itemsPerPage);
    this.renderItems();
  }

  renderItems(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedItems = this.items.slice(startIndex, endIndex);
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.renderItems();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.renderItems();
    }
  }
}
