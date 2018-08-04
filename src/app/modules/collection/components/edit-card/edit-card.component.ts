import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CollectionService } from '@collection/services/collection.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Collection } from '@collection/models/collection.model';
import { Location } from '@angular/common';


@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css']
})
export class EditCardComponent implements OnInit {
  editCard: FormGroup;
  collection: Collection;
  constructor(
    private editBuilder: FormBuilder,
    private updateService: CollectionService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
  	this.editCard = this.editBuilder.group({
      name: ['', [Validators.required]],
      front: ['', [Validators.required]],
      back: ['', [Validators.required]]
    });
  }
  save() {
    this.updateService
      .updateCollectionCard(this.route.snapshot.params.id, 
      { title: this.name.value, 
      	front: {content: this.front.value}, 
      	back: {content: this.back.value} })
      .then(() => {
        this.location.back()
      });
  }
  get name() {
    return this.editCard.get('name');
  }

   get front() {
    return this.editCard.get('front');
  }

   get back() {
    return this.editCard.get('back');
  }
}

