import { Component, OnInit } from '@angular/core';
import { Mouse, MouseService } from '../services/mouse.service';

@Component({
  selector: 'app-mouses',
  templateUrl: './mouses.component.html',
  styleUrls: ['./mouses.component.css']
})
export class MousesComponent implements OnInit {
 public mice: Mouse[] = [];
 public model: string = '';
 public dpi: number = 0;
 public showForm: boolean = false;

  constructor(private mouseService: MouseService) {}
  

  ngOnInit(): void {
    this.loadMice();
  }

  loadMice(): void {
    this.mouseService.getMice().subscribe({
      next :(mice) => {
        console.log('Mice loaded:', mice);
        this.mice = mice;
      },
      error: (err) => console.error('Error loading mice:', err),
      complete: () => console.log('complete')
      }
    );
  }

  addMouse(): void {
    const newMouse: Mouse = { id: 0, model: this.model, dpi: this.dpi };
    this.mouseService.addMouse(newMouse).subscribe(
      () => {
        this.loadMice();
        this.showForm = false;
        this.model = '';
        this.dpi = 0;
      },
      (error) => {
        console.error('Error adding mouse:', error);
      }
    );
  }

  deleteMouse(id: number): void {
    this.mouseService.deleteMouse(id).subscribe(
      () => {
        this.loadMice();
      },
      (error) => {
        console.error('Error deleting mouse:', error);
      }
    );
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }
}
