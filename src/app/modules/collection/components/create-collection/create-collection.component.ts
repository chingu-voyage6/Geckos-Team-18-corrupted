import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CollectionService } from '@collection/services/collection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-collection',
  templateUrl: './create-collection.component.html',
  styleUrls: ['./create-collection.component.css']
})
export class CreateCollectionComponent implements OnInit {
  createForm: FormGroup;
  constructor(
    private createBuilder: FormBuilder,
    private createService: CollectionService,
    private router: Router
  ) {}

  ngOnInit() {
    this.createForm = this.createBuilder.group({
      name: ['', [Validators.required]],
      public: false
    });
  }
  save() {
    this.createService
      .createCollection({ name: this.name.value, public: this.public.value })
      .then(() => {
        this.router.navigate(['/collections']);
      });
  }
  get name() {
    return this.createForm.get('name');
  }

  get public() {
    return this.createForm.get('public');
  }
}
