import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CollectionService } from '@collection/services/collection.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {
  createCard: FormGroup;
  constructor(
  	private createBuilder: FormBuilder,
    private createService: CollectionService,
    private route: ActivatedRoute,
    private location: Location
  	) { }

  ngOnInit() {
  	this.createCard = this.createBuilder.group({
      name: ['', [Validators.required]],
      front: ['', [Validators.required]],
      back: ['', [Validators.required]]
    });
  }
  save() {
    this.createService
      .createCollectionCard(this.route.snapshot.params.id, 
      { title: this.name.value, 
      	front: {content: this.front.value}, 
      	back: {content: this.back.value} })
      .then(() => {
        this.location.back()
      });
  }
  get name() {
    return this.createCard.get('name');
  }

   get front() {
    return this.createCard.get('front');
  }

   get back() {
    return this.createCard.get('back');
  }
}
